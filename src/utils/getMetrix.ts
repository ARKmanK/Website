import { getSiteStatistics } from '@/lib/supabase/api'

export const getMetrix = () => {
	const data = getSiteStatistics()
}
