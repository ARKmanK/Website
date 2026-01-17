export const ScrollToSection = (sectionId: string) => {
	const section = document.getElementById(sectionId)
	if (section) {
		const sectionPosition = section.getBoundingClientRect().top
		const offsetPosition = sectionPosition + window.scrollY
		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}
}
