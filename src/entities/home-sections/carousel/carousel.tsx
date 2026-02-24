'use client'
import styles from './styles.module.scss'

interface CarouselItem {
	id: string | number
	content: React.ReactNode
}

interface CarouselProps {
	items?: CarouselItem[]
	speed?: number
}

export const Carousel = ({
	items = [
		{ id: 1, content: 'crystals.com' },
		{ id: 2, content: 'crystals.com' },
		{ id: 3, content: 'crystals.com' },
		{ id: 4, content: 'crystals.com' },
		{ id: 5, content: 'crystals.com' },
		{ id: 6, content: 'crystals.com' },
		{ id: 7, content: 'crystals.com' },
		{ id: 8, content: 'crystals.com' },
	],
	speed = 30,
}: CarouselProps) => {
	const tripleItems = [...items, ...items]

	return (
		<div className={styles.carouselWrapper}>
			<div className={styles.carouselContainer}>
				<div
					className={styles.track}
					style={{ '--speed': `${speed}s` } as React.CSSProperties}
				>
					{tripleItems.map((item, index) => (
						<div key={index} className={styles.slide}>
							<div className={styles.slideContent}>
								{typeof item.content === 'string' ? (
									<span
										className={`${styles.hoverWord} uppercase sm:text-[1.5rem] text-[1.2rem]`}
									>
										{item.content}
									</span>
								) : (
									item.content
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
