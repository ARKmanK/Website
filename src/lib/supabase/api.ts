import { supabase } from '@/lib/supabase/server'
import { ISiteSettings } from '@/types/SiteSettings'

export type Project = {
	id: number
	name: string
	url: string
	description: string
	img_url: string
}

export type Tag = {
	id: number
	tag: string
}

export type Rates = {
	id: number
	name: string
	price: string
}

export const getProjects = async (): Promise<Project[]> => {
	try {
		const { data, error } = await supabase
			.from('projects')
			.select('*')
			.order('id', { ascending: true })

		if (error) {
			throw new Error(`Supabase error: ${error.message}`)
		}
		return data || []
	} catch (error) {
		return []
	}
}

export const getProjectTags = async (): Promise<Tag[][]> => {
	try {
		// Получаем все проекты
		const { data: projects } = await supabase
			.from('projects')
			.select('id')
			.order('id', { ascending: true })

		if (!projects) return []

		// Получаем все связи project_tags
		const { data: projectTags, error: linksError } = await supabase
			.from('project_tags')
			.select('project_id, tag_id')
			.order('project_id', { ascending: true })

		if (linksError) {
			console.error('Error fetching project_tags:', linksError)
			return []
		}

		// Получаем все теги
		const { data: allTags, error: tagsError } = await supabase
			.from('tags')
			.select('id, tag')
			.order('id', { ascending: true })

		if (tagsError) {
			console.error('Error fetching tags:', tagsError)
			return []
		}

		// Создаем маппинг тегов для быстрого доступа
		const tagMap = new Map<number, Tag>()
		allTags?.forEach(tag => {
			tagMap.set(tag.id, { id: tag.id, tag: tag.tag })
		})

		// Создаем результат
		const result: Tag[][] = Array(projects.length)
			.fill(null)
			.map(() => [])

		// Связываем проекты с тегами
		projectTags?.forEach(link => {
			const projectIndex = projects.findIndex(p => p.id === link.project_id)
			const tag = tagMap.get(link.tag_id)

			if (projectIndex !== -1 && tag) {
				result[projectIndex].push(tag)
			}
		})

		return result
	} catch (error) {
		console.error('Error in getProjectTags:', error)
		return []
	}
}

export const getRatesData = async (): Promise<{ data: Rates[]; error: Error | null }> => {
	try {
		const { data, error: supabaseError } = await supabase
			.from('rates')
			.select('*')
			.order('id', { ascending: true })

		if (supabaseError) {
			return {
				data: [],
				error: new Error(`Supabase error ${supabaseError.message}`),
			}
		}

		return {
			data: data || [],
			error: null,
		}
	} catch (error) {
		console.error('Error fetching rates:', error)
		return {
			data: [],
			error: error instanceof Error ? error : new Error('Unknown error'),
		}
	}
}

export const getSiteSettings = async (): Promise<ISiteSettings> => {
	try {
		const { data, error } = await supabase.from('site_settings').select('settings').maybeSingle()

		if (error) {
			console.error('Error fetching site settings:', error)
			return {}
		}

		return data?.settings || {}
	} catch (error) {
		console.error('Error in getSiteSettings:', error)
		return {}
	}
}

export const updateSiteSettings = async (settings: ISiteSettings) => {
	try {
		const { data } = await supabase.from('site_settings').select('id, settings').maybeSingle()

		if (data) {
			const updatedSettings = {
				...data.settings,
				...settings,
			}

			const { error } = await supabase
				.from('site_settings')
				.update({ settings: updatedSettings })
				.eq('id', data.id)

			if (error) throw error
		}
		return { success: true }
	} catch (error) {
		console.error('Error updating site settings:', error)
		return { success: false, error }
	}
}
