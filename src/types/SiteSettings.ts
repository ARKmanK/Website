export interface ITheme {
	enabled: boolean
	start_date: string
	end_date: string
}

export interface ISiteSettings {
	active_theme?: boolean
	themes?: {
		[themeName: string]: ITheme
	}
}
