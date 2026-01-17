'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/ui/navigation-menu'
import { navbarMenu } from './navbar-menu'
import { Button } from '../ui/button'
import { ScrollToSection } from '@/lib/scrollToSection'

const NavBar = () => {
	return (
		<div className='flex w-full justify-end sticky top-0 z-50'>
			<NavigationMenu
				viewport={false}
				className='shadow-lg backdrop-blur-lg bg-white/5 rounded-3xl mt-4 px-4 '
			>
				<NavigationMenuList className='flex-wrap '>
					{navbarMenu.map(link => (
						<NavigationMenuItem key={link.title}>
							<button
								className='text-lg px-4 py-2.5 hover:bg-gray-800/10 hover:scale-107 text-white'
								onClick={() => ScrollToSection(link.title)}
							>
								{link.title}
							</button>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
				<Button className='rounded-xl px-4 ml-2 bg-[#6858c7] text-lg'>Контакты</Button>
			</NavigationMenu>
		</div>
	)
}

export default NavBar
