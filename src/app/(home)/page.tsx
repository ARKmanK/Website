import Container from '@/components/Container'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import RatesSection from './RatesSection'
import MainSection from './MainSection'
import { ProjectsSection } from './ProjectsSection'
import AboutUsSection from './AboutUsSection'
import ContactsSection from './ContactsSection'

const HomePage = async () => {
	return (
		<main className='flex flex-col min-h-screen min-w-screen items-center relative' id='Главная'>
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
				<div className='h-[900px] bg-linear-to-r from-[#332777] from-10% via-[#262e63] via-30% to-[#5073c4] to-100% Nborder'></div>
			</div>
			<Container className='flex-wrap z-10 bg-transparent'>
				<Header />
				<Container className='w-full'>
					<NavBar />
					<MainSection />
					<AboutUsSection />
					<ProjectsSection />
					<RatesSection />
					<ContactsSection />
				</Container>
			</Container>
		</main>
	)
}

export default HomePage
