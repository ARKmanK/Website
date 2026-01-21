'use client'

import { Badge } from '@/components/ui/badge'
import { checkDBStatus } from '@/lib/supabase/api'
import { Users, Database } from 'lucide-react'
import { useEffect, useLayoutEffect, useState } from 'react'

const getLastUpdate = () => {
	return new Date().toLocaleTimeString('ru-RU', {
		hour: '2-digit',
		minute: '2-digit',
	})
}

const StatusBar = () => {
	const [dbStatus, setDBStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking')
	const [lastUpdate, setLastUpdate] = useState(getLastUpdate())

	useEffect(() => {
		const checkConnection = async () => {
			try {
				setLastUpdate(getLastUpdate())
				const isConnected = await checkDBStatus()
				setDBStatus(isConnected ? 'connected' : 'disconnected')
			} catch (error) {
				console.error('Failed to check DB status:', error)
				setDBStatus('disconnected')
			}
		}
		checkConnection()

		const interval = setInterval(checkConnection, 30000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='mt-3 p-4 bg-background rounded-lg shadow border flex flex-col sm:flex-row items-center justify-between gap-4'>
			<div className='flex items-center gap-4'>
				<div className='flex items-center gap-2 w-55 mx-auto'>
					{dbStatus === 'checking' ? (
						<>
							<Database className='h-4 w-4 text-gray-200 animate-pulse' />
							<span className='text-sm'>База данных: проверка...</span>
						</>
					) : dbStatus === 'connected' ? (
						<>
							<Database className='h-4 w-4 text-green-500' />
							<span className='text-sm'>База данных: подключена</span>
						</>
					) : (
						<>
							<Database className='h-4 w-4 text-red-500' />
							<span className='text-sm'>База данных: отключена</span>
						</>
					)}
				</div>
				<div>
					<span className='text-sm'>Обновлено: {lastUpdate}</span>
				</div>
			</div>
		</div>
	)
}

export default StatusBar
