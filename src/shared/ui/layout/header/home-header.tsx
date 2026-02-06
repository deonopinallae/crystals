'use client'
import Link from 'next/link'
import { SearchIcon, PyramidIcon } from '../../icons'
import styles from './styles.module.scss'

export const HomeHeader = () => {
	return (
		<>
			<header className={`${styles.header} py-[1.13rem] lg:py-[1.88rem] z-20 w-full`}>
				<button className="flex flex-col gap-[7px]" aria-label="Menu">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="w-[28px] h-[2px] bg-black"></div>
					))}
				</button>
				<Link href="/" className="font-bricolage uppercase md:block hidden text-sm">Free shipping on orders over $75</Link>
				<div className='flex gap-[1rem] items-center'>
					<button aria-label="Search"><SearchIcon /></button>
					<Link href="/cart" aria-label="Shopping cart"><PyramidIcon /></Link>
				</div>
			</header>
		</>
	)
}
