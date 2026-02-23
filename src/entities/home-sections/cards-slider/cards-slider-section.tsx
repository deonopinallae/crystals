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
			<div className="flex w-full flex-col gap-10 border-b border-[#eac1bf] px-5 pb-10 pt-8 sm:px-8 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-[3.7rem] lg:pb-[8.1rem] lg:pt-[2.5rem] xl:gap-[5rem] xl:px-[8.1rem] xl:pb-[11.6rem] xl:pt-[6.6rem]">
				<h2>
					The world’s finest crystals, ethically sourced and hand selected for
					their power to guide, enhance and protect our everyday lives.
				</h2>
				<Button className="w-[11.8rem] max-sm:text-[1rem] max-sm:px-6 max-sm:py-3">
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
