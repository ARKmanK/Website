// app/admin/components/StatusFooter.tsx
'use client'

import { Badge } from '@/components/ui/badge'
import { Users, Database } from 'lucide-react'

export default function StatusFooter() {
	const status = {
		system: 'active',
		database: 'connected',
		lastUpdate: new Date().toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit',
		}),
	}

	return (
		<div className='mt-8 p-4 bg-white rounded-lg shadow border flex flex-col sm:flex-row items-center justify-between gap-4'>
			<div className='flex items-center gap-4'>
				<div className='flex items-center gap-2'>
					<div
						className={`h-2 w-2 rounded-full ${
							status.system === 'active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
						}`}
					/>
					<span className='text-sm'>Система активна</span>
				</div>

				<div className='flex items-center gap-2'>
					<Database className='h-4 w-4 text-gray-400' />
					<span className='text-sm'>База данных: {status.database}</span>
				</div>
			</div>

			<div className='flex items-center gap-4'>
				<div className='text-sm text-gray-600'>Обновлено: {status.lastUpdate}</div>
				<Badge variant='outline' className='flex items-center gap-1'>
					<Users className='h-3 w-3' />
					Режим администратора
				</Badge>
			</div>
		</div>
	)
}
