'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/shared/ui'
import styles from './styles.module.scss'

const cards = [
	{
		id: 1,
		name: 'Malachite',
		color: 'rgb(63, 202, 135, 0.3)',
		image: '/malachite.png',
	},
	{
		id: 2,
		name: 'Malachite',
		color: 'rgb(63, 202, 135, 0.3)',
		image: '/malachite.png',
	},
	{
		id: 3,
		name: 'Malachite',
		color: 'rgb(63, 202, 135, 0.3)',
		image: '/malachite.png',
	},
]

export const CardsSliderSection = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [hasInteracted, setHasInteracted] = useState(false)
	const [touchStartX, setTouchStartX] = useState<number | null>(null)

	const totalSlides = cards.length

	const goToSlide = (index: number) => {
		setActiveIndex((index + totalSlides) % totalSlides)
	}

	const goToNext = () => {
		setHasInteracted(true)
		goToSlide(activeIndex + 1)
	}

	const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
		setTouchStartX(event.touches[0].clientX)
	}

	const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
		if (touchStartX === null) {
			return
		}

		const touchEndX = event.changedTouches[0].clientX
		const delta = touchStartX - touchEndX

		if (Math.abs(delta) > 40) {
			setHasInteracted(true)
			if (delta > 0) {
				goToSlide(activeIndex + 1)
			} else {
				goToSlide(activeIndex - 1)
			}
		}

		setTouchStartX(null)
	}

	const paginationClassName = useMemo(
		() => `${styles.pagination} ${hasInteracted ? styles.paginationVisible : ''}`,
		[hasInteracted],
	)

	return (
		<section
			className={`${styles.cardsSlider} relative flex flex-col gap-px lg:flex-row`}
		>
			<div className="flex w-full flex-col gap-6 border-b border-[#eac1bf] px-4 pb-8 pt-6 sm:gap-8 sm:px-6 sm:pb-9 sm:pt-7 md:px-8 md:pb-10 md:pt-8 lg:w-1/2 lg:gap-10 lg:border-b-0 lg:border-r lg:px-[3.7rem] lg:pb-[8.1rem] lg:pt-[2.5rem] xl:gap-[5rem] xl:px-[8.1rem] xl:pb-[11.6rem] xl:pt-[6.6rem]">
				<h2 className="text-[1.25rem] leading-[1.28] sm:text-[1.45rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.3rem]">
					The world’s finest crystals, ethically sourced and hand selected for
					their power to guide, enhance and protect our everyday lives.
				</h2>
				<Button className="px-5 py-2.5 text-[1rem] sm:w-[11.2rem] sm:px-6 sm:py-3 lg:w-[11.8rem] text-center">
					Shop all
				</Button>
			</div>

			<div
				className={styles.sliderPane}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onClick={goToNext}
			>
				<div className={styles.sliderViewport}>
					{cards.map((card, index) => (
						<div
							key={card.id}
							className={`${styles.cardsSliderItem} ${
								index === activeIndex ? styles.cardsSliderItemActive : ''
							}`}
						>
							<div
								className={styles.cardGlow}
								style={{ backgroundColor: card.color }}
							/>
							<img
								src={card.image}
								alt={card.name}
								className={styles.cardImage}
							/>
						</div>
					))}
				</div>

				<div className={paginationClassName}>
					{cards.map((card, index) => (
						<button
							key={card.id}
							type="button"
							className={`${styles.paginationDot} ${
								index === activeIndex ? styles.paginationDotActive : ''
							}`}
							onClick={(event) => {
								event.stopPropagation()
								setHasInteracted(true)
								goToSlide(index)
							}}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
