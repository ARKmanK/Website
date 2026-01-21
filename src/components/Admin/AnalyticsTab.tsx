import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Calendar } from 'lucide-react'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { TrafficChart } from '../Charts/TrafficChart'

export default async function AnalyticsTab() {
	return (
		<section className='space-y-6'>
			<Card>
				<CardHeader>
					<div className='flex justify-between items-center'>
						<CardTitle>Статистика посещаемости</CardTitle>
						<div className='flex gap-2'>
							<Button variant='outline' size='sm' disabled>
								<Calendar className='h-4 w-4 mr-2' />
								Выбрать период
							</Button>
							<Button variant='outline' size='sm' disabled>
								<Download className='h-4 w-4 mr-2' />
								Экспорт
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<Suspense fallback={<Skeleton className='h-[250px] w-full' />}>
						<TrafficChart />
					</Suspense>
				</CardContent>
			</Card>
		</section>
	)
}
