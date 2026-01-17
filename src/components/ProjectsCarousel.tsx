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
			<div className='flex '>
				<Carousel className='w-[55%] relative' setApi={setApi}>
					<CarouselContent>
						{projects.map(project => (
							<CarouselItem key={project.id}>
								<Card className='p-0 overflow-hidden rounded-[30px]'>
									<CardContent className='flex aspect-video p-0'>
										<img
											src={project.img_url}
											alt={`Изображение проекта ${project.name}`}
											className='object-cover w-full h-full'
										/>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className='absolute inset-0 flex items-center justify-between z-20 pointer-events-none'>
						<CarouselPrevious className='static pointer-events-auto bg-black/80 backdrop-blur-md hover:bg-black text-white h-20 w-10 rounded-r-lg rounded-l-none border-l-0 ring-2 ring-gray-700/90 hover:border-white/30 transition-all shadow-2xl ml-0' />
						<CarouselNext className='static pointer-events-auto bg-black/80 backdrop-blur-md hover:bg-black text-white h-20 w-10 rounded-l-lg rounded-r-none border-r-0 ring-2 ring-gray-700/90 hover:border-white/30 transition-all shadow-2xl mr-0' />
					</div>
				</Carousel>

				<div className='flex flex-1 flex-col ml-10 Nborder'>
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
								<span className='max-w-[90%] text-balance'>{currentProject.description}</span>
							</li>
						</ul>
					)}
				</div>
			</div>
			<div className='flex flex-col flex-1 w-[55%] Nborder mt-10'>
				<p className='text-xl text-white'>Категории</p>
				<div className='flex w-full flex-wrap my-2.5'>
					{currentTags.map(tag => (
						<Badge key={tag.id} variant='secondary' className='text-base px-5 mr-2 my-2'>
							{tag.tag}
						</Badge>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectsCarousel
