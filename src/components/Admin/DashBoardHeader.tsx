// app/admin/components/DashboardHeader.tsx
'use client'

import { Button } from '@/components/ui/button'
import { RefreshCw, Bell, Settings } from 'lucide-react'

interface DashboardHeaderProps {
	onRefresh?: () => void
	isLoading?: boolean
}

export default function DashboardHeader({ onRefresh, isLoading = false }: DashboardHeaderProps) {
	return (
		<div className='mb-8'>
			<div className='flex justify-between items-start mb-4'>
				<div>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Административная панель</h1>
					<p className='text-gray-600 mt-2'>Управление сайтом и мониторинг статистики</p>
				</div>

				<div className='flex items-center gap-2'>
					<Button variant='outline' size='icon'>
						<Bell className='h-4 w-4' />
					</Button>
					<Button variant='outline' size='icon'>
						<Settings className='h-4 w-4' />
					</Button>
					<Button onClick={onRefresh} variant='outline' size='sm' disabled={isLoading}>
						<RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
						Обновить
					</Button>
				</div>
			</div>

			{/* Хлебные крошки */}
			<div className='flex items-center text-sm text-gray-500'>
				<span>Главная</span>
				<span className='mx-2'>/</span>
				<span className='text-gray-700 font-medium'>Панель управления</span>
			</div>
		</div>
	)
}
