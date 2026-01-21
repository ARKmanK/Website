'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Project, Tag } from '@/lib/supabase/api'
import { Captions, Clipboard, Link } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ScrollArea } from './ui/scroll-area'

interface IProjectsCarouselProps {
	projects: Project[]
	tags: Tag[][]
}

const ProjectsCarousel = ({ projects, tags }: IProjectsCarouselProps) => {
	const [api, setApi] = useState<CarouselApi>()
	const [currentIndex, setCurrentIndex] = useState(0)
	const currentProject = projects[currentIndex]
	const currentTags = tags[currentIndex] || []

	useEffect(() => {
		if (!api) return

		setCurrentIndex(api.selectedScrollSnap())

		api.on('select', () => {
			setCurrentIndex(api.selectedScrollSnap())
		})
	}, [api])

	return (
		<div className='py-10 flex flex-col w-full'>
			<div className='flex Nborder'>
				<div className='flex items-start w-[55%]'>
					<div className='relative w-full'>
						<Carousel
							className='w-full '
							setApi={setApi}
							opts={{
								align: 'start',
								containScroll: 'trimSnaps',
							}}
							orientation='vertical'
						>
							<CarouselContent className='h-[500px] mt-0'>
								{projects.map(project => (
									<CarouselItem key={project.id} className='pt-0'>
										<Card className=' rounded-[30px] p-0'>
											<CardContent className='flex px-0'>
												<img
													src={project.img_url}
													alt={`Изображение проекта ${project.name}`}
													className='object-cover w-full h-[450px] rounded-[30px]'
												/>
											</CardContent>
										</Card>
									</CarouselItem>
								))}
							</CarouselContent>
							<div className='absolute right-[-35px] top-1/2 transform -translate-y-1/2 flex flex-col gap-4 h-8'>
								<CarouselPrevious className='h-12 w-12 rounded-full hover:bg-gray-600 text-white border-none shadow-lg transition-all hover:scale-105' />
								<CarouselNext className='h-12 w-12 rounded-full hover:bg-gray-600 text-white border-none shadow-lg transition-all hover:scale-105' />
							</div>
						</Carousel>
					</div>
				</div>
				<div className='flex flex-1 flex-col ml-20 Nborder'>
					<p className='text-2xl text-white mb-6'>О Проекте</p>
					{currentProject && (
						<ul className='text-lg space-y-2'>
							<li className='flex items-center text-white'>
								<Captions size={20} className='mr-1.5' />
								{currentProject.name}
							</li>
							<li className='flex items-center text-white'>
								<Link size={20} className='mr-1.5' />
								<a
									href={currentProject.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-400 hover:underline ml-1'
								>
									{currentProject.url}
								</a>
							</li>
							<li className='flex items-start text-white'>
								<Clipboard size={20} className='mr-2.5 mt-1' />
								<ScrollArea className='h-[325px] w-full pr-4'>
									<p className='max-w-[90%] text-balance pr-4'>{currentProject.description}</p>
								</ScrollArea>
							</li>
						</ul>
					)}
				</div>
			</div>
			<div className='flex flex-col flex-1 w-[55%] mt-10 Nborder'>
				<p className='text-xl text-white'>Категории</p>
				<div className='flex w-full flex-wrap my-2.5'>
					<ScrollArea className='h-27'>
						{currentTags.map(tag => (
							<Badge key={tag.id} variant='secondary' className='text-base px-5 mr-2 my-2'>
								{tag.tag}
							</Badge>
						))}
					</ScrollArea>
				</div>
			</div>
		</div>
	)
}

export default ProjectsCarousel
