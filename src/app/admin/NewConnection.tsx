'use client'

import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

const NewConnection = () => {
	const [userNumber, setUserNumber] = useState(0)

	useEffect(() => {
		const ws = new WebSocket('ws://localhost:4200/ws')

		ws.onmessage = event => {
			try {
				const data = JSON.parse(event.data)
				if (data.type === 'user_number') {
					setUserNumber(data.number)
				}
			} catch (error) {
				console.log('Получено не JSON:', event.data)
			}
		}

		return () => {
			ws.close()
		}
	}, [])

	return (
		<>
			<Badge className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums'>{userNumber}</Badge>
		</>
	)
}

export default NewConnection
