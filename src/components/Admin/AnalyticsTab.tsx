// app/admin/components/AnalyticsTab.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Calendar } from 'lucide-react'

export default function AnalyticsTab() {
	return (
		<div className='space-y-6'>
			<Card>
				<CardHeader>
					<div className='flex justify-between items-center'>
						<CardTitle>Статистика посещаемости</CardTitle>
						<div className='flex gap-2'>
							<Button variant='outline' size='sm'>
								<Calendar className='h-4 w-4 mr-2' />
								Выбрать период
							</Button>
							<Button variant='outline' size='sm'>
								<Download className='h-4 w-4 mr-2' />
								Экспорт
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className='h-64 flex items-center justify-center border rounded-lg bg-gradient-to-b from-gray-50 to-white'>
						<div className='text-center'>
							<div className='text-lg font-semibold text-gray-700 mb-2'>График будет здесь</div>
							<p className='text-gray-500'>Подключите аналитику для отображения данных</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
