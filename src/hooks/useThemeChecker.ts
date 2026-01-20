'use client'

import { isCurrentDateInRange } from '@/utils/isDateInRange'
import { ISiteSettings, ITheme } from '@/types/SiteSettings'

interface ThemeCheckResult {
	isThemeActive: boolean
	themeName: string | null
	themeConfig?: ITheme
}

export const useThemeChecker = (settings: ISiteSettings): ThemeCheckResult => {
	const { themes = {} } = settings

	// Проверяем все темы по порядку
	for (const [themeName, themeConfig] of Object.entries(themes)) {
		// enabled: true - сразу включаем
		if (themeConfig.enabled === true) {
			return {
				isThemeActive: true,
				themeName,
				themeConfig,
			}
		}

		// enabled: false - проверяем даты
		if (themeConfig.enabled === false) {
			const hasDates = themeConfig.start_date && themeConfig.end_date
			const inRange = hasDates
				? isCurrentDateInRange(themeConfig.start_date, themeConfig.end_date)
				: false

			if (inRange) {
				return {
					isThemeActive: true,
					themeName,
					themeConfig,
				}
			}
		}
	}

	return {
		isThemeActive: false,
		themeName: null,
		themeConfig: undefined,
	}
}
