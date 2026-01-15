import Container from '@/components/Container'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import { Button } from '@/components/ui/button'
import { ArrowRight, HardDrive } from 'lucide-react'
import RatesSection from './RatesSection'
import ProjectsSection from './ProjectsSection'
import { getProjects, getProjectTags } from '@/lib/supabase/api'
import WebSocketConnector from '@/components/WebSocketConnectot'

export const dynamic = 'force-dynamic'

const HomePage = async () => {
	const projects = await getProjects()
	const projectTags = await getProjectTags()

	return (
		<main className='flex flex-col min-h-screen min-w-screen items-center relative' id='Главная'>
			<WebSocketConnector />
			<div className='absolute w-full'>
				<div className='bg-black relative h-[900px] Nborder'>
					<img
						src='/bg_image.png'
						alt='bg-image'
						className='w-full h-full object-cover opacity-70'
						loading='eager'
					/>
				</div>
				<div className='h-[900px] bg-linear-to-r from-[#1d144e] from-10% via-[#263283] via-30% to-[#2b4b96] to-100% Nborder'></div>
				<div className='h-[900px] bg-linear-to-r from-[#332777] from-10% via-[#262e63] via-30% to-[#5073c4] to-100% Nborder'></div>
				<div className='h-[1120px] bg-linear-to-r from-[#1d144e] from-10% via-[#263283] via-30% to-[#2b4b96] to-100% Nborder'></div>
			</div>
			<Container className='flex-wrap z-10 bg-transparent'>
				<Header />
				<Container className='w-full'>
					<NavBar />
					<section className='h-[680px] flex' id='Главная'>
						<div className='flex flex-col absolute top-90 Nborder'>
							<h2 className='text-4xl text-gray-300'>Lorem ipsum dolor sit.</h2>
							<h3 className='text-5xl md:max-w-[430px] text-wrap text-balance pt-4 text-white font-bold leading-11.5'>
								Lorem ipsum & dolor sit amet.
							</h3>
							<p className='text-gray-300 pt-4 text-2xl'>Lorem, ipsum dolor.</p>
							<Button className='mt-12 w-[60%] h-[40px]'>
								Просмотреть портфолио <ArrowRight />
							</Button>
						</div>
					</section>
					<section className='h-[900px] flex py-15' id='О нас'>
						<div className='py-20 flex w-full'>
							<div className='Nborder flex flex-col'>
								<h3 className='text-6xl text-[#3572ce] font-bold w-[380px]'>
									Lorem ipsum dolor sit.
								</h3>
								<h4 className='w-[500px] text-balance py-6'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi at
									culpa aliquam saepe incidunt blanditiis facere reiciendis fugiat numquam nobis
									corporis provident, vitae veritatis:
								</h4>
								<ul className='text-lg space-y-1.5'>
									<li className=''>
										<p className='flex '>
											<HardDrive className='mr-2' color='#3572ce' />
											Lorem ipsum dolor sit amet consectetur.
										</p>
									</li>
									<li className=''>
										<p className='flex '>
											<HardDrive className='mr-2' color='#3572ce' />
											Lorem ipsum dolor sit amet.
										</p>
									</li>
									<li className=''>
										<p className='flex '>
											<HardDrive className='mr-2' color='#3572ce' />
											Lorem ipsum dolor sit amet consectetur.
										</p>
									</li>
									<li className=''>
										<p className='flex '>
											<HardDrive className='mr-2' color='#3572ce' />
											Lorem ipsum dolor sit.
										</p>
									</li>
								</ul>
								<Button className='w-[40%] mt-10 bg-transparent border-2 border-gray-400 text-primary h-[50px] hover:bg-transparent hover:scale-105'>
									Связаться
								</Button>
							</div>
							<img
								src='https://www.metauxouvres.ca/images/xp_home_about.jpg.pagespeed.ic.leaVHVz0Qf.webp'
								alt='aboutUs_image'
								className='Nborder w-[40%] h-full ml-35'
								loading='lazy'
							/>
						</div>
					</section>
					<ProjectsSection initialProjects={projects} projectTags={projectTags} />
					<RatesSection />
				</Container>
			</Container>
		</main>
	)
}

export default HomePage
