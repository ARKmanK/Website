/* 'use client' */

import { Badge } from '@/components/ui/badge'
import RateButton from '@/components/ui/Button/RateButton'
import { Card, CardContent } from '@/components/ui/card'
import { getRatesData } from '@/lib/supabase/api'
import { toast } from 'sonner'

const RatesSection = async () => {
	const { data: rates, error } = await getRatesData()
	const [rate_1_data, rate_2_data, rate_3_data] = rates

	if (error) {
		toast(`${error}`)
		console.log(error)
	}

	return (
		<section className='h-auto min-h-[1120px] flex py-15 flex-col px-20' id='Тарифы'>
			<div className='flex justify-start mb-12 Nborder'>
				<h2 className='text-white text-4xl font-bold'>Тарифы</h2>
			</div>
			<div className='py-10  grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch Nborder'>
				{/* Тариф СТАРТ */}
				<Card className='flex flex-col bg-gradient-to-b from-gray-900/80 to-gray-950/80 border-gray-700 backdrop-blur-sm h-full'>
					<CardContent className='p-8 flex flex-col h-full'>
						<div className='mb-6'>
							<Badge variant='outline' className='text-green-400 border-green-400/50 mb-3'>
								Начальный уровень
							</Badge>
							<p className='text-2xl font-bold text-white mb-2'>{rate_1_data.name}</p>
							<p className='text-gray-300 mb-4'>
								Создать профессиональное онлайн-присутствие для тех, у кого нет сайта
							</p>
						</div>
						<div className='space-y-6 flex-grow'>
							<div className='bg-gray-800/50 rounded-lg p-4'>
								<p className='text-white font-semibold mb-2'>Цена и сроки</p>
								<p className='text-green-400 text-xl font-bold'>{rate_1_data.price}</p>
								<p className='text-gray-400 text-sm'>Срок: 10-14 дней</p>
							</div>
							<div className='flex-grow'>
								<p className='text-white font-semibold mb-3 flex items-center'>✅ Что входит:</p>
								<ul className='space-y-2 text-gray-300 text-sm'>
									<li className='flex items-start'>• Уникальный адаптивный дизайн</li>
									<li className='flex items-start'>• Структура сайта (до 5 страниц)</li>
									<li className='flex items-start'>• Базовый функционал для роста</li>
									<li className='flex items-start'>• Техническая база + хостинг</li>
								</ul>
							</div>
							<div className='mb-4'>
								<p className='text-white font-semibold mb-3'>Решаемые проблемы:</p>
								<p className='text-gray-300 text-sm'>
									«Нас невозможно найти в интернете», «Клиенты не знают цены», «Мы не выглядим
									современно»
								</p>
							</div>
						</div>
						<div className='pt-6 mt-auto'>
							<RateButton
								rateId={1}
								title='Выбрать тариф'
								className='bg-blue-600 hover:bg-blue-700'
							/>
						</div>
					</CardContent>
				</Card>

				{/* Тариф ОПТИМУМ */}
				<Card className='flex flex-col bg-gradient-to-b from-blue-900/30 to-blue-950/50 border-blue-500/30 backdrop-blur-sm h-full'>
					<CardContent className='p-8 flex flex-col h-full'>
						<div className='mb-6'>
							<Badge variant='default' className='bg-blue-500 text-white mb-3'>
								Популярный
							</Badge>
							<p className='text-2xl font-bold text-white mb-2'>{rate_2_data.name}</p>
							<p className='text-gray-300 mb-4'>
								Превратить сайт в полноценный канал продаж с онлайн-заказом
							</p>
						</div>
						<div className='space-y-6 flex-grow'>
							<div className='bg-blue-900/30 rounded-lg p-4'>
								<p className='text-white font-semibold mb-2'>Цена и сроки</p>
								<p className='text-blue-300 text-xl font-bold'>{rate_2_data.price}</p>
								<p className='text-blue-200/70 text-sm'>Срок: 25-35 дней</p>
							</div>
							<div className='flex-grow'>
								<p className='text-white font-semibold mb-3 flex items-center'>🚀 Что входит:</p>
								<ul className='space-y-2 text-gray-300 text-sm'>
									<li className='flex items-start'>• Система онлайн-заказов</li>
									<li className='flex items-start'>• Конфигураторы товаров</li>
									<li className='flex items-start'>• Интеграция с платежами</li>
									<li className='flex items-start'>• Мощная админ-панель</li>
									<li className='flex items-start'>• Продвинутый маркетинг</li>
								</ul>
							</div>
							<div className='mb-4'>
								<p className='text-white font-semibold mb-3'>Уникальные преимущества:</p>
								<p className='text-gray-300 text-sm'>
									Цифровой менеджер по продажам, игровой опыт заказа, мгновенные уведомления в
									Telegram
								</p>
							</div>
						</div>
						<div className='pt-6 mt-auto'>
							<RateButton
								rateId={2}
								title='🔥 Выбрать тариф'
								className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
							/>
						</div>
					</CardContent>
				</Card>

				{/* Тариф МАКСИМУМ */}
				<Card className='flex flex-col bg-gradient-to-b from-purple-900/30 to-purple-950/50 border-purple-500/30 backdrop-blur-sm h-full'>
					<CardContent className='p-8 flex flex-col h-full'>
						<div className='mb-6'>
							<Badge
								variant='secondary'
								className='bg-purple-500/20 text-purple-300 border-purple-500/50 mb-3'
							>
								Премиум
							</Badge>
							<p className='text-2xl font-bold text-white mb-2'>{rate_3_data.name}</p>
							<p className='text-gray-300 mb-4'>
								Полная цифровизация бизнеса с автоматизацией и аналитикой
							</p>
						</div>
						<div className='space-y-6 flex-grow'>
							<div className='bg-purple-900/30 rounded-lg p-4'>
								<p className='text-white font-semibold mb-2'>Цена и сроки</p>
								<p className='text-purple-300 text-xl font-bold'>{rate_3_data.price}</p>
								<p className='text-purple-200/70 text-sm'>Срок: 45-60 дней</p>
							</div>
							<div className='flex-grow'>
								<p className='text-white font-semibold mb-3 flex items-center'>💎 Что входит:</p>
								<ul className='space-y-2 text-gray-300 text-sm'>
									<li className='flex items-start'>• Личный кабинет клиента</li>
									<li className='flex items-start'>• Интеграция с CRM</li>
									<li className='flex items-start'>• PWA-приложение</li>
									<li className='flex items-start'>• AI-аналитика и прогнозы</li>
									<li className='flex items-start'>• Чат-бот для заказов</li>
								</ul>
							</div>
							<div className='mb-4'>
								<p className='text-white font-semibold mb-3'>Для кого идеально:</p>
								<p className='text-gray-300 text-sm'>
									Для владельцев бизнеса, которые хотят получить конкурентное преимущество уровня
									федеральных сетей
								</p>
							</div>
						</div>
						<div className='pt-6 mt-auto'>
							<RateButton rateId={3} title='Обсудить проект' />
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default RatesSection
