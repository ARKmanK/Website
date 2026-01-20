'use client'

import { getSiteSettings } from '@/lib/supabase/api'
import { ISiteSettings } from '@/types/SiteSettings'
import { useEffect, useState } from 'react'

const useSiteSettings = () => {
	const [settings, setSettings] = useState<ISiteSettings>({})

	useEffect(() => {
		const loadSettings = async () => {
			const data = await getSiteSettings()
			console.log('📦 useSiteSettings: Получены данные из БД:', JSON.stringify(data, null, 2))
			setSettings(data)
		}
		loadSettings()
	}, [])

	return settings
}

export default useSiteSettings
