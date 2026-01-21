import AnalyticsTab from '@/components/Admin/AnalyticsTab'
import DashboardHeader from '@/components/Admin/DashBoardHeader'
import DataBaseTab from '@/components/Admin/DataBaseTab'
import EditingTab from '@/components/Admin/EditingTab'
import MetricsGrid from '@/components/Admin/MetrixGrid'
import Container from '@/components/Container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AdminPage() {
	return (
		<div className='min-h-screen bg-[#141414]'>
			<Container className='max-w-7xl mx-auto border-0!'>
				<DashboardHeader />
				<MetricsGrid />
				<Tabs defaultValue='analytics' className='space-y-6'>
					<div className='flex justify-between items-center'>
						<TabsList className='grid w-full md:w-auto grid-cols-3'>
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
							<TabsTrigger value='DB' className='data-[state=active]:bg-purple-100'>
								<span className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-green-500'></span>
									База данных
								</span>
							</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value='analytics'>
						<AnalyticsTab />
					</TabsContent>

					<TabsContent value='editing'>
						<EditingTab />
					</TabsContent>

					<TabsContent value='DB'>
						<DataBaseTab />
					</TabsContent>
				</Tabs>
			</Container>
		</div>
	)
}
