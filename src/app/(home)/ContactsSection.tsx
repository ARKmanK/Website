'use client'

import { Button } from '@/components/ui/button'
import { ScrollToSection } from '@/lib/scrollToSection'
import { ArrowRight } from 'lucide-react'

const ContactsSection = () => {
	return (
		<>
			<section className='h-[680px] flex' id='Контакты'>
				<div className='flex flex-col absolute top-90 Nborder'>
					<h2 className='text-4xl text-gray-300'>Lorem ipsum dolor sit.</h2>
					<h3 className='text-5xl md:max-w-[430px] text-wrap text-balance pt-4 text-white font-bold leading-11.5'>
						Lorem ipsum & dolor sit amet.
					</h3>
					<p className='text-gray-300 pt-4 text-2xl'>Lorem, ipsum dolor.</p>
					<Button className='mt-12 w-[60%] h-[45px]' onClick={() => ScrollToSection('Портфолио')}>
						Просмотреть портфолио <ArrowRight />
					</Button>
				</div>
			</section>
		</>
	)
}

export default ContactsSection
