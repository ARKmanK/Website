'use client'

import { useEffect } from 'react'

export default function WebSocketConnector() {
	useEffect(() => {
		if (typeof window === 'undefined') return

		const ws = new WebSocket('ws://localhost:4200/ws')

		ws.onopen = () => {
			console.log('✅ WebSocket подключен')
		}

		return () => ws.close()
	}, [])

	return null
}
