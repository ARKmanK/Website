/* import { QueryClient, isServer } from '@tanstack/react-query'

let queryClient: QueryClient | undefined

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5 * 60 * 1000,
				gcTime: 10 * 60 * 1000,
			},
		},
	})
}

export default function getQueryClient() {
	if (!queryClient) {
		queryClient = makeQueryClient()
	}
	return queryClient
}
 */
