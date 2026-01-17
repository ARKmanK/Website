import { supabase } from '@/lib/supabase/server'

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

export const getRatesData = async (): Promise<Rates[]> => {
	try {
		const { data, error } = await supabase
			.from('rates')
			.select('*')
			.order('id', { ascending: true })

		if (error) {
			throw new Error(`Supabase error: ${error.message}`)
		}

		return data || []
	} catch (error) {
		console.error('Error fetching rates:', error)
		return []
	}
}
