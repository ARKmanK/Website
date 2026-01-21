'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { checkDBStatus } from '@/lib/supabase/api'
import { DotIcon } from 'lucide-react'

const DataBaseTab = () => {
	return (
		<section className='w-full h-100 bg-gray'>
			<Card>
				<CardHeader>
					<div className='flex justify-between'>
						<CardTitle>База данных</CardTitle>
						<div className='flex gap-2'></div>
					</div>
				</CardHeader>
			</Card>
		</section>
	)
}

export default DataBaseTab
