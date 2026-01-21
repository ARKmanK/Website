// components/themes/ThemeSwitcher.tsx
'use client'

import { useFeatureFlags } from '@/providers/FeatureFlagProvider'
import dynamic from 'next/dynamic'

// Ленивая загрузка компонентов тем
const themeComponents = {
	new_year: dynamic(() => import('./Themes/New_Year')),
	/* halloween: dynamic(() => import('./Halloween')),
	valentine: dynamic(() => import('./Valentine')),
	easter: dynamic(() => import('./Easter')), */
}

type ThemeName = keyof typeof themeComponents

const ThemeContainer = () => {
	const { activeTheme, isThemeActive } = useFeatureFlags()

	// Если нет активной темы или тема не активна
	if (!activeTheme || !isThemeActive) return null

	const ThemeComponent = themeComponents[activeTheme as ThemeName]

	if (!ThemeComponent) {
		console.warn(`Theme component for "${activeTheme}" not found`)
		return null
	}

	return <ThemeComponent />
}

export default ThemeContainer
