import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
	return (
		<main className='min-h-screen min-w-screen relative'>
			<img
				src='https://static.tildacdn.com/tild3439-6131-4137-b734-656230323662/404_.png'
				alt='404_img'
				className='absolute left-0 top-0 object-cover w-full h-full -z-1'
			/>
			<div className='absolute top-20 left-20'>
				<div className='flex items-center relative'>
					<ArrowLeft size={20} className='absolute left-0 mx-2.5' />
					<Link
						href={'/'}
						className=' bg-black text-white flex items-center pl-9 px-4 py-1.5 rounded-xl'
					>
						Вернуться на главную
					</Link>
				</div>
			</div>
		</main>
	)
}

export default NotFound
