interface IProjectsInfo {
	name: string
	url: string
	description: string
	tags?: string
	img_url?: string
}

export const projects_info: IProjectsInfo[] = [
	{
		name: 'Колобок',
		url: 'https://colobok.com',
		description:
			'Lorem ipsum dolor sit amet raesentium! Eius mollitia veritatis ratione eligendi hic? consectetur, adipisicing elit. Vel ullam obcaecati mollitia beatae ipsa, similiquem exercitationem quis p',
		/* tags: ['Заказы', 'Нейросеть', 'Система оплаты', 'Панель администратора', 'БД', 'Аналитика'], */
	},
	{
		name: 'Маша',
		url: 'https://colobok.com',
		description:
			'Lorem ipsum dolor sit amet consectetur, e dignissimos quisquam et perferendis eveniet voluptat adipisicing elit. Vel ullam obcaecati mollitia beatae ipsa, similique dignissimos quisquam em quis praesentium! Eius mollitia veritatis ratione eligendi hic?',
		/* tags: ['Заказы', 'Нейросеть', 'Авторизация', 'Панель администратора', 'UI/UX', 'Аналитика'], */
	},
	{
		name: 'Саша',
		url: 'https://colobok.com',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ullam obcaecati mollitia beatae ipsa, similique dignissimos quisquam et perferendis eveniet voluptatem exercitationem quis praesentium! Eius mollitia veritatis ratione eligendi hic?',
		/* tags: ['Заказы', 'Нейросеть', 'Система оплаты', 'Панель администратора', 'БД', 'Аналитика'], */
	},
]
