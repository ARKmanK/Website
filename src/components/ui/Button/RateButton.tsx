'use client'

import { cn } from '@/lib/utils'
import { Button } from '../button'

interface IRateButtonProps {
	rateId: number
	title: string
	className?: string
}

const RateButton = ({ rateId, title, className }: IRateButtonProps) => {
	const handleClick = (id: number) => {
		console.log(`rate ${id} selected`)
	}

	return (
		<Button
			onClick={() => handleClick(rateId)}
			className={cn(
				'w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12',
				className
			)}
		>
			{title}
		</Button>
	)
}

export default RateButton
