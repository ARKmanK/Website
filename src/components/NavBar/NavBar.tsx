'use client'

import Link from 'next/link'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/ui/navigation-menu'
import { navbarMenu } from './navbar-menu'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react'
/* import { useIsMobile } from '@/hooks/use-mobile' */

const NavBar = () => {
	/* const [isFixed, setisFixed] */
	/* const isMobile = useIsMobile() */

	const ScrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			const sectionPosition = section.getBoundingClientRect().top
			const offsetPosition = sectionPosition + window.scrollY - 140
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className='flex w-full justify-center sticky top-0 z-10'>
			<NavigationMenu
				viewport={false}
				className='shadow-lg backdrop-blur-lg bg-white/5 rounded-3xl mt-4 px-4 '
			>
				<NavigationMenuList className='flex-wrap '>
					{navbarMenu.map(link => (
						<NavigationMenuItem key={link.title}>
							<button
								className='text-lg px-4 py-2.5 hover:bg-gray-800/10 hover:scale-107'
								onClick={() => ScrollToSection(link.title)}
							>
								{link.title}
							</button>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

export default NavBar
