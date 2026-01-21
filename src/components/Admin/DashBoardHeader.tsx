'use client'

import { Button } from '@/components/ui/button'
import { RefreshCw, Bell, Settings } from 'lucide-react'
import StatusFooter from './StatusBar'
import StatusBar from './StatusBar'

interface DashboardHeaderProps {
	onRefresh?: () => void
	isLoading?: boolean
}

export default function DashboardHeader({ onRefresh, isLoading = false }: DashboardHeaderProps) {
	return (
		<section className='mb-8'>
			<div className='flex justify-between items-start mb-4'>
				<div>
					<h1 className='text-3xl md:text-4xl font-bold text-primary'>Административная панель</h1>
					<p className='text-primary mt-2'>Управление сайтом и мониторинг статистики</p>
				</div>

				<div className='flex flex-col items-end'>
					<div className='flex gap-2 items-center'>
						<Button variant='outline' size='icon' disabled>
							<Bell className='h-4 w-4' />
						</Button>
						<Button variant='outline' size='icon' disabled>
							<Settings className='h-4 w-4' />
						</Button>
						<Button
							onClick={onRefresh}
							variant='outline'
							size='sm'
							/* disabled={isLoading} */ disabled
						>
							<RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
							Обновить
						</Button>
					</div>
					<div>
						<StatusBar />
					</div>
				</div>
			</div>

			<div className='flex items-center text-sm text-gray-500'>
				<span>Главная</span>
				<span className='mx-2'>/</span>
				<span className='text-gray-700 font-medium'>Панель управления</span>
			</div>
		</section>
	)
}
