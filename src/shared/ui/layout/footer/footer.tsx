import Link from 'next/link'
import styles from './styles.module.scss'
import { CrystalsLogoIcon } from '@/shared/ui/icons'
import { assetPath } from '@/shared/lib/asset-path'

const GALLERY_IMAGES = [
	{ id: 1, alt: 'Crystals collection 1', src: assetPath('/footer/gallery-1.jpg') },
	{ id: 2, alt: 'Crystals collection 2', src: assetPath('/footer/gallery-2.jpg') },
	{ id: 3, alt: 'Crystals collection 3', src: assetPath('/footer/gallery-3.jpg') },
	{ id: 4, alt: 'Crystals collection 4', src: assetPath('/footer/gallery-4.jpg') },
	{ id: 5, alt: 'Crystals collection 5', src: assetPath('/footer/gallery-5.jpg') },
	{ id: 6, alt: 'Crystals collection 6', src: assetPath('/footer/gallery-6.jpg') },
]

const FOOTER_LINKS = [
	{ href: '#journal', label: 'Journal' },
	{ href: '#story', label: 'Our Story' },
	{ href: '#faq', label: 'FAQ' },
	{ href: '#contact', label: 'Contact' },
	{ href: '#reviews', label: 'Reviews' },
	{ href: '#refer', label: 'Refer a Friend' },
	{ href: '#instagram', label: 'Instagram' },
	{ href: '#facebook', label: 'Facebook' },
	{ href: '#pinterest', label: 'Pinterest' },
]

export const Footer = () => {
	return (
		<footer
			className={`${styles.footer} px-[1.13rem] pt-[2.5rem] pb-[2.5rem] sm:px-[3.13rem] sm:pt-[4rem] sm:pb-[4rem]`}
		>
			<div className={styles.socialText}>
				<p>@crystals.com</p>
				<p>#crystalsdotcom</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1rem]">
				{GALLERY_IMAGES.map((image) => (
					<img
						key={image.id}
						src={image.src}
						alt={image.alt}
						className="w-full h-full object-cover aspect-square"
					/>
				))}
			</div>

			<div className="flex justify-center w-full">
				<CrystalsLogoIcon />
			</div>
			<div className={styles.linksSection}>
				{FOOTER_LINKS.map((link) => (
					<Link key={link.href} href={link.href} className={styles.linkButton}>
						{link.label}
					</Link>
				))}
				<button className={`${styles.linkButton} w-fit`}>Sign up</button>
			</div>
			<div
				className={`${styles.socialText} pt-[1.5rem] text-[0.75rem] leading-[1.5rem]`}
			>
				<p>&copy; 2021 CRYSTALS.COM. All rights reserved.</p>
				<p>Privacy policy.</p>
				<p>Site by Pointer</p>
			</div>
		</footer>
	)
}
