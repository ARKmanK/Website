'use client'

import { useFeatureFlags } from '@/providers/FeatureFlagProvider'

const NewYear = () => {
	const { activeTheme, isThemeActive } = useFeatureFlags()

	if (activeTheme !== 'new_year' || !isThemeActive) return null

	return (
		<div className='fixed top-0 left-0 h-screen w-screen z-50 pointer-events-none opacity-50'>
			<div className='w-full h-full relative'>
				<video loop autoPlay playsInline muted preload='auto'>
					<source src='/bg.mp4' type='video/mp4' />
				</video>
				{/* <div className='w-full h-full bg-black/40 absolute top-0 left-0'></div> */}
			</div>
		</div>
	)
}

export default NewYear
