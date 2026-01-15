// app/admin/page.tsx
'use client'

import AnalyticsTab from '@/components/Admin/AnalyticsTab'
import DashboardHeader from '@/components/Admin/DashBoardHeader'
import EditingTab from '@/components/Admin/EditingTab'
import MetricsGrid from '@/components/Admin/MetrixGrid'
import StatusFooter from '@/components/Admin/StatusFooter'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

export default function AdminPage() {
	const [activeTab, setActiveTab] = useState('analytics')

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8'>
			<div className='max-w-7xl mx-auto'>
				{/* Заголовок */}
				<DashboardHeader />

				{/* Метрики */}
				<MetricsGrid />

				{/* Основные вкладки */}
				<Tabs defaultValue='analytics' className='space-y-6' onValueChange={setActiveTab}>
					<div className='flex justify-between items-center'>
						<TabsList className='grid w-full md:w-auto grid-cols-2'>
							<TabsTrigger value='analytics' className='data-[state=active]:bg-blue-100'>
								<span className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-blue-500'></span>
									Аналитика
								</span>
							</TabsTrigger>
							<TabsTrigger value='editing' className='data-[state=active]:bg-purple-100'>
								<span className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-purple-500'></span>
									Редактирование
								</span>
							</TabsTrigger>
						</TabsList>
					</div>

					{/* Контент вкладок */}
					<TabsContent value='analytics'>
						<AnalyticsTab />
					</TabsContent>

					<TabsContent value='editing'>
						<EditingTab />
					</TabsContent>
				</Tabs>

				{/* Нижняя панель */}
				<StatusFooter />
			</div>
		</div>
	)
}
