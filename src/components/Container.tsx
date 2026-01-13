import { cn } from '../utils/utils'

interface ContainerProps {
	className: string
	children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
	return (
		<div className={cn('w-full max-w-[1400px] flex flex-col relative Nborder z-10', className)}>
			{children}
		</div>
	)
}

export default Container
