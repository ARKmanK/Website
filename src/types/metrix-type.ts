import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface IMetrix {
	title: string
	value: string | ReactNode
	icon: LucideIcon
	color: 'string'
	change: 'string'
	description: 'string'
}
