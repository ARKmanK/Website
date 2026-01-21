'use client'

import NewConnection from '@/components/UsersNumber'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Eye, TrendingUp, Clock } from 'lucide-react'

export default function MetricsGrid() {
	const metrics = [
		{
			title: 'Онлайн сейчас',
			value: <NewConnection />,
			icon: Users,
			color: 'blue',
			change: '+12%',
			description: 'Активные пользователи',
		},
		{
			title: 'Просмотры',
			value: '1,842',
			icon: Eye,
			color: 'green',
			change: '+8%',
			description: 'За сегодня',
		},
		{
			title: 'Пиковая посещаемость',
			value: '68',
			icon: TrendingUp,
			color: 'purple',
			change: '15:30',
			description: 'Время пика',
		},
		{
			title: 'Среднее время',
			value: '4:32',
			icon: Clock,
			color: 'orange',
			change: '+2.5%',
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
		</section>
	)
}
