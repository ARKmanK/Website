import ProjectsCarousel from '@/components/ProjectsCarousel'
import { Skeleton } from '@/components/ui/skeleton'
import { getProjects, getProjectTags } from '@/lib/supabase/api'
import { Suspense } from 'react'

export const ProjectsSection = () => {
	return (
		<section className='h-[900px] flex py-15 flex-col px-20' id='Портфолио'>
			<div className='flex justify-start Nborder'>
				<p className='text-white text-3xl'>Наши проекты</p>
			</div>
			<Suspense fallback={<Skeleton className='h-100' />}>
				<ProjectContent />
			</Suspense>
		</section>
	)
}

export const ProjectContent = async () => {
	const [projects, tags] = await Promise.all([getProjects(), getProjectTags()])

	return <ProjectsCarousel projects={projects} tags={tags} />
}
