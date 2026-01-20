'use client'

import useSiteSettings from '@/hooks/useSiteSettings'
import useSiteSetting from '@/hooks/useSiteSettings'
import { useThemeChecker } from '@/hooks/useThemeChecker'
import { usePathname } from 'next/navigation'
import { createContext, ReactNode, useContext } from 'react'

/* interface IFeatureFlagsContext {
	isNewYearAnimationEnabled: boolean
} */

interface IFeatureFlagsContext {
	activeTheme: string | null
	isThemeActive: boolean
	themeConfig?: any
}

const FeatureFlagsContext = createContext<IFeatureFlagsContext | undefined>(undefined)

const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
	const settings = useSiteSettings()
	const { isThemeActive, themeName, themeConfig } = useThemeChecker(settings)

	const value: IFeatureFlagsContext = {
		activeTheme: themeName,
		isThemeActive,
		themeConfig,
	}

	return <FeatureFlagsContext.Provider value={value}>{children}</FeatureFlagsContext.Provider>
}

export default FeatureFlagProvider

export function useFeatureFlags() {
	const context = useContext(FeatureFlagsContext)
	if (context === undefined) {
		throw new Error('useFeatureFlags must be used within FeatureFlagsProvider')
	}
	return context
}
