import Header from "@/layout/Header"
import "@/styles/global.css"
import "@/styles/variables.css"
import { Inter } from "@next/font/google"

const InterFontCyrillic = Inter({
	subsets: ['cyrillic', 'latin']
})

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="ru" className={InterFontCyrillic.className}>
			<head/>
			<body>
				<Header/>
				{children}
			</body>
		</html>
	)
}
