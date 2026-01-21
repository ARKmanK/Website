import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/Theme/ThemeProvider'
import WebSocketConnector from '@/components/WebSocketConnector'
import { Toaster } from '@/components/ui/sonner'
import FeatureFlagProvider from '@/providers/FeatureFlagProvider'
import ThemeContainer from '@/components/Theme/ThemeContainer'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

/* const getVoip = localFont({
	src: '../../public/GetVoIPGrotesque/GetVoIPGrotesque.ttf',
	variable: '--font-getvoip',
}) */

export const metadata: Metadata = {
	title: 'Pentagon',
	description: 'Разработка сайтов под ключ',
	keywords: ['сайт', 'веб', 'разработка', 'сайт-визитка'],
	icons: {
		icon: [{ url: '/logo.ico' }],
	},
	openGraph: {
		title: 'Pentagon',
		description: 'Разработка сайтов под ключ',
		url: 'https://website-five-bice-71.vercel.app',
		siteName: 'Pentagon',
		images: [
			{
				url: '/bg_image.png',
				width: 1280,
				height: 800,
				alt: 'Превью для соцсетей',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			suppressHydrationWarning
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body className='antialiased'>
				<FeatureFlagProvider>
					<ThemeProvider>
						{children}
						<Toaster />
						<WebSocketConnector />
						<ThemeContainer />
					</ThemeProvider>
				</FeatureFlagProvider>
			</body>
		</html>
	)
}
