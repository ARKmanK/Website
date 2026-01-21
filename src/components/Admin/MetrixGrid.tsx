'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	ChangeDataType,
	getChangeData,
	getSiteStatistics,
	StatisticsType,
} from '@/lib/supabase/api'
import { Users, Eye, TrendingUp, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import UsersNumber from '../UsersNumber'
import { IMetrix } from '@/types/metrix-type'

export default function MetricsGrid() {
	const [metrixData, setMetrixData] = useState<StatisticsType>({
		date: '',
		views: 0,
		max_online: 0,
		avg_time: 0,
	})
	const [changeData, setChangeData] = useState<ChangeDataType>({
		active: '',
		today: '',
		last_visit: '',
		avg_time_change: '',
	})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true)
			try {
				const [metrixData, changeData] = await Promise.all([getSiteStatistics(), getChangeData()])
				setMetrixData(metrixData)
				setChangeData(changeData)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [])

	const metrics: IMetrix[] = [
		{
			title: 'Онлайн сейчас',
			value: <UsersNumber />,
			icon: Users,
			color: 'blue',
			change: changeData.active,
			description: 'Активные пользователи',
		},
		{
			title: 'Просмотры',
			value: metrixData.views,
			icon: Eye,
			color: 'green',
			change: changeData.today,
			description: 'За сегодня',
		},
		{
			title: 'Пиковая посещаемость',
			value: metrixData.max_online,
			icon: TrendingUp,
			color: 'purple',
			change: changeData.last_visit,
			description: 'Последнее посещение',
		},
		{
			title: 'Среднее время',
			value: metrixData.avg_time,
			icon: Clock,
			color: 'orange',
			change: changeData.avg_time_change,
			description: 'На сайте',
		},
	]

	const getColorClasses = (color: string) => {
		const colors: Record<string, string> = {
			blue: 'bg-blue-100 text-blue-600',
			green: 'bg-green-100 text-green-600',
			purple: 'bg-purple-100 text-purple-600',
			orange: 'bg-orange-100 text-orange-600',
		}
		return colors[color] || 'bg-gray-100 text-gray-600'
	}

	return (
		<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
			{isLoading ? (
				<>
					{[1, 2, 3, 4].map((_, index) => (
						<Card key={index} className='shadow-sm hover:shadow-md transition-shadow'>
							<CardHeader className='pb-2'>
								<div className='flex justify-between items-start'>
									<Skeleton className='h-6 w-24' />
									<Skeleton className='h-10 w-10 rounded-lg' />
								</div>
							</CardHeader>
							<CardContent>
								<div className='space-y-2'>
									<Skeleton className='h-8 w-16' />
									<div className='flex items-center justify-between'>
										<Skeleton className='h-4 w-20' />
										<Skeleton className='h-4 w-12' />
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</>
			) : (
				<>
					{metrics.map((metric, index) => (
						<Card key={index} className='shadow-sm hover:shadow-md transition-shadow'>
							<CardHeader className='pb-2'>
								<div className='flex justify-between items-start'>
									<CardTitle className='text-lg font-medium'>{metric.title}</CardTitle>
									<div className={`p-2 rounded-lg ${getColorClasses(metric.color)}`}>
										<metric.icon className='h-5 w-5' />
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className='space-y-2'>
									<div className='text-3xl font-bold text-primary'>{metric.value}</div>
									<div className='flex items-center justify-between'>
										<span className='text-sm text-gray-500'>{metric.description}</span>
										<span
											className={`text-sm font-medium ${
												metric.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'
											}`}
										>
											{metric.change}
										</span>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</>
			)}
		</section>
	)
}
