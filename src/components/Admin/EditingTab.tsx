// app/admin/components/EditingTab.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function EditingTab() {
	const sections = [
		{ title: 'Проекты', count: 24, description: 'Управление портфолио' },
		{ title: 'Статьи', count: 15, description: 'Блог и новости' },
		{ title: 'Страницы', count: 8, description: 'Контент страниц' },
		{ title: 'Настройки', description: 'Общие настройки сайта' },
	]

	return (
		<Card>
			<CardHeader>
				<CardTitle>Управление контентом</CardTitle>
				<p className='text-gray-600'>Редактируйте разделы сайта и управляйте контентом</p>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{sections.map((section, index) => (
						<div key={index} className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
							<div className='flex justify-between items-start mb-2'>
								<div>
									<h3 className='font-semibold'>{section.title}</h3>
									<p className='text-sm text-gray-500'>{section.description}</p>
								</div>
								{section.count && (
									<span className='px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full'>
										{section.count}
									</span>
								)}
							</div>
							<Button variant='outline' className='w-full'>
								Перейти к управлению
							</Button>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
