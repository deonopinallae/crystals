'use client'
import { SearchIcon, PyramidIcon } from '../../icons'
import styles from './styles.module.scss'

export const HomeHeader = () => {
	return (
		<>
			<header className={`${styles.header} py-[1.13rem] lg:py-[1.88rem] container`}>
				<button className="flex flex-col gap-[7px]">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="w-[28px] h-[2px] bg-black"></div>
					))}
					
				</button>
				<div className="font-bricolage uppercase hidden xs:block">Free shipping on orders over $75</div>
				<div className='flex gap-[1rem] items-center'>
					<SearchIcon />
					<PyramidIcon />
				</div>
			</header>
		</>
	)
}
