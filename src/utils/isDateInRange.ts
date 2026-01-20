export const isCurrentDateInRange = (startDate: string, endDate: string): boolean => {
	const now = new Date()
	const start = new Date(startDate)
	const end = new Date(endDate)

	// Устанавливаем время на конец дня для endDate
	end.setHours(23, 59, 59, 999)

	return now >= start && now <= end
}
