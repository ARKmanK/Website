export const calculateChange = (current: number, previous: number): string => {
	if (previous === 0 && current === 0) return '+0%'
	if (previous === 0) return `+${current * 100}%`

	const change = ((current - previous) / previous) * 100
	const sign = change >= 0 ? '+' : ''
	return `${sign}${Math.round(change)}%`
}

export const calculateTimeChange = (currentTime: string, previousTime: string): string => {
	const parseTime = (timeStr: string): number => {
		const [hours, minutes] = timeStr.split(':').map(Number)
		return hours * 60 + minutes
	}

	const currentMinutes = parseTime(currentTime)
	const previousMinutes = parseTime(previousTime)

	if (previousMinutes === 0) return '+100%'

	const change = ((currentMinutes - previousMinutes) / previousMinutes) * 100
	const sign = change >= 0 ? '+' : ''
	return `${sign}${Math.round(change)}%`
}
