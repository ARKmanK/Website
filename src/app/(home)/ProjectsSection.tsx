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

interface IProjectsSectionProps {
	initialProjects: Project[]
	projectTags: Tag[][]
}

const ProjectsSection = ({ initialProjects, projectTags }: IProjectsSectionProps) => {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const projects = initialProjects

	useEffect(() => {
		if (!api) {
			return
		}

		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			const newCurrent = api.selectedScrollSnap() + 1
			setCurrent(newCurrent)
		})
	}, [api])

	const currentTags = current > 0 && projectTags[current - 1] ? projectTags[current - 1] : []

	return (
		<section className='h-[900px] flex py-15 flex-col' id='Портфолио'>
			<div className='flex justify-start Nborder'>
				<p className='text-white ml-20 text-3xl'>Наши проекты</p>
			</div>
			<div className='py-10 flex w-full'>
				<Carousel className='w-[55%] ml-20 relative' setApi={setApi}>
					<CarouselContent>
						{projects.map(project => (
							<CarouselItem key={project.id}>
								<Card className='p-0 overflow-hidden'>
									<CardContent className='flex aspect-video p-0'>
										<img
											src={project.img_url}
											alt='project_img'
											className='object-cover w-full h-full z-5'
										/>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className='absolute inset-0 flex items-center justify-between z-20 pointer-events-none'>
						<CarouselPrevious className='static pointer-events-auto bg-black/80 backdrop-blur-md hover:bg-black text-white h-20 w-10 rounded-r-lg rounded-l-none border-l-0 border border-white/10 hover:border-white/30 transition-all shadow-2xl flex items-center justify-center ml-0' />

						<CarouselNext className='static pointer-events-auto bg-black/80 backdrop-blur-md hover:bg-black text-white h-20 w-10 rounded-l-lg rounded-r-none border-r-0 border border-white/10 hover:border-white/30 transition-all shadow-2xl flex items-center justify-center mr-0' />
					</div>
				</Carousel>
				<div className='flex flex-1 flex-col ml-10 Nborder'>
					<p className='text-2xl text-white mb-6'>О Проекте</p>
					<ul className='text-lg space-y-2'>
						{projects[current - 1] && (
							<>
								<li className='flex items-center text-white'>
									<Captions size={20} className='mr-1.5' /> {projects[current - 1].name}
								</li>
								<li className='flex items-center text-white'>
									<Link size={20} className='mr-1.5' />
									<a
										href={projects[current - 1].url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-400 hover:underline ml-1'
									>
										{projects[current - 1].url}
									</a>
								</li>
								<li className='flex items-start text-white'>
									<Clipboard size={20} className='mr-2.5 mt-1' />
									<span className='max-w-[90%] text-balance'>
										{projects[current - 1].description}
									</span>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
			<div className='ml-20 flex flex-col flex-1 w-[55%] Nborder'>
				<p className='text-xl text-white'>Категории</p>
				<div className='flex w-full flex-wrap my-2.5'>
					{currentTags.map(tag => (
						<Badge key={tag.id} variant='secondary' className='text-base px-5 mr-2 my-2'>
							{tag.tag}
						</Badge>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
