import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface IMetrix {
	title: string
	value: number | ReactNode
	icon: LucideIcon
	color: string
	change: string
	description: string
}
