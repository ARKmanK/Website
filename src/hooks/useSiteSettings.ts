'use client'

import { getSiteSettings } from '@/lib/supabase/api'
import { ISiteSettings } from '@/types/siteSettings-type'
import { useEffect, useState } from 'react'

const useSiteSettings = () => {
	const [settings, setSettings] = useState<ISiteSettings>({})

	useEffect(() => {
		const loadSettings = async () => {
			const data = await getSiteSettings()
			setSettings(data)
		}
		loadSettings()
	}, [])

	return settings
}

export default useSiteSettings
