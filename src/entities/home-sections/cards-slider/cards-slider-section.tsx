import { Button } from '@/shared/ui'
import styles from './styles.module.scss'

const cards = [
	{
		id: 1,
		name: 'Malachite',
		color: 'rgb(63, 202, 135, 0.3)',
		image: '/malachite.png',
	},
]

export const CardsSliderSection = () => {
	return (
		<>
			<section className={`${styles.cardsSlider} flex gap-[1px] relative`}>
				<div className="flex flex-col gap-[5rem] w-[50%] border-r border-r-[#EAC1BF] pt-[2.5rem] xl:pt-[6.6rem] pb-[8.1rem] xl:pb-[11.6rem] px-[3.7rem] xl:px-[8.1rem]">
					<h2>
						The world’s finest crystals, ethically sourced and hand selected
						for their power to guide, enhance and protect our everyday lives.
					</h2>
					<Button className="w-[11.8rem]">Shop all</Button>
				</div>
				<div>
					{cards.map((card, index) => (
						<div
							key={index}
							className={`${styles.cardsSliderItem} relative m-auto`}
						>
							<div
								style={{ backgroundColor: card.color }}
								className={`w-[35.63rem] h-[36.75rem] blur-[6.25rem] rounded-[7.25rem]`}
							></div>
							<img
								src={card.image}
								alt={card.name}
								className="w-[29.44rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
							/>
						</div>
					))}
					<div className="flex flex-col gap-[8px] absolute right-[18px] bottom-[30px]">
						<div className="w-[16px] h-[16px] border border-[#EAC1BF]"></div>
						<div className="w-[16px] h-[16px] border border-[#EAC1BF]"></div>
						<div className="w-[16px] h-[16px] border border-[#EAC1BF]"></div>
					</div>
				</div>
			</section>
		</>
	)
}
