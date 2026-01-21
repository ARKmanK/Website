'use client'

import { Button } from '@/components/ui/button'
import { HardDrive } from 'lucide-react'

const AboutUsSection = () => {
	return (
		<section className='h-[900px] flex py-15' id='О нас'>
			<div className='py-20 flex w-full'>
				<div className='Nborder flex flex-col'>
					<h3 className='text-6xl text-[#3572ce] font-bold w-[380px]'>Lorem ipsum dolor sit.</h3>
					<h4 className='w-[500px] text-balance py-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi at culpa
						aliquam saepe incidunt blanditiis facere reiciendis fugiat numquam nobis corporis
						provident, vitae veritatis:
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
	)
}

export default AboutUsSection
