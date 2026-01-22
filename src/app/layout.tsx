import type { Metadata } from 'next'
import { Bricolage_Grotesque, Roboto, Newsreader } from 'next/font/google'
import { AppColumn } from '@/shared/ui/layout/app-column'
import '@/styles/styles.scss'

export const bricolage = Bricolage_Grotesque({
	subsets: ['latin'],
	variable: '--font-bricolage',
})
export const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
export const newsreader = Newsreader({
	subsets: ['latin'],
	variable: '--font-newsreader',
})

export const metadata: Metadata = {
	title: { template: '%s ', default: 'crystals' },
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${bricolage.variable} ${roboto.variable} ${newsreader.variable} antialiased`}
			>
				<AppColumn>{children}</AppColumn>
			</body>
		</html>
	)
}
