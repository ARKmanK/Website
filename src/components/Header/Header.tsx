import Image from 'next/image'

const Header = () => {
	return (
		<header className='flex w-full Nborder justify-between py-2 h-[150px] max-w-[1440px] z-50'>
			<div className='flex Nborder'>
				<Image width={175} height={130} src='/logo.png' alt='logo' />
				<div className='flex flex-col mt-6 ml-11'>
					<p className='text-2xl text-white text-shadow-2xs'>Lorem ipsum dolor, sit amet!</p>
					<p className='text-lg pt-1'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, est.
					</p>
				</div>
			</div>
			<div className='mr-10 Nborder'>
				<div className='flex flex-1 items-end pt-2'>
					<div className='flex flex-col'>
						<p className='text-gray-300 pr-30'>Наши контакты</p>
						<span>+7 (950) 148-01-07</span>
					</div>
					<li className='flex space-x-4 pb-1'>
						<ul>
							<a href='/'>
								<Image
									src='/telegram_icon_black.png'
									alt='telegram_icon'
									width={28}
									height={28}
									className='hover:scale-110'
								/>
							</a>
						</ul>
						<ul>
							<a href='/'>
								<Image
									src='/vk_icon_black.png'
									alt='vk_icon'
									width={28}
									height={28}
									className='hover:scale-110 rounded-full'
								/>
							</a>
						</ul>
						<ul>
							<a href='/'>
								<Image
									src='/phone_icon_black.png'
									alt='phone_icon'
									width={28}
									height={28}
									className='hover:scale-110 rounded-full'
								/>
							</a>
						</ul>
					</li>
				</div>
			</div>
		</header>
	)
}

export default Header
