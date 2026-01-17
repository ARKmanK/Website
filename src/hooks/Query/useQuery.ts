/* import { useQuery } from '@tanstack/react-query'
import { getProjects, getProjectTags, getRatesData } from '@/lib/supabase/api'
import getQueryClient from '@/lib/QueryClient'

export const queryKeys = {
	projects: ['projects'],
	projectTags: ['projectTags'],
	rates: ['rates'],
	projectWithTags: (projectId: number) => ['project', projectId, 'tags'],
}

export function useProjects() {
	return useQuery({
		queryKey: queryKeys.projects,
		queryFn: getProjects,
		staleTime: 1 * 60 * 1000,
		gcTime: 5 * 60 * 1000,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
	})
}

export function useProjectTags() {
	return useQuery({
		queryKey: queryKeys.projectTags,
		queryFn: getProjectTags,
		staleTime: 1 * 60 * 1000,
		gcTime: 5 * 60 * 1000,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
	})
}

export function useRates() {
	return useQuery({
		queryKey: queryKeys.rates,
		queryFn: getRatesData,
		staleTime: 1 * 60 * 1000,
		gcTime: 5 * 60 * 1000,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
	})
}

export function useProjectWithTags(id: number) {
	return useQuery({
		queryKey: queryKeys.projectWithTags(id),
		queryFn: async () => {
			const projects = await getProjects()
			const tags = await getProjectTags()
			const project = projects.find(p => p.id === id)
			const projectTags = tags[id - 1] || []

			return { project, tags: projectTags }
		},
		enabled: !!id,
	})
}

export async function prefetchHomeData() {
	const queryClient = getQueryClient()

	await Promise.all([
		queryClient.prefetchQuery({
			queryKey: ['projects'],
			queryFn: getProjects,
		}),
		queryClient.prefetchQuery({
			queryKey: ['projectTags'],
			queryFn: getProjectTags,
		}),
		queryClient.prefetchQuery({
			queryKey: ['rates'],
			queryFn: getRatesData,
		}),
	])

	return queryClient
}
 */
