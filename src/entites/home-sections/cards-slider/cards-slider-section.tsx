import Link from 'next/link'
import { Button } from '@/shared/ui'
import styles from './styles.module.scss'
import { CircleDecoreIcon } from '@/shared/ui/icons/circle-decore-icon'

const featuredCrystals = [
	{ id: 1, name: 'Rose Quartz', color: '#FACCBF', price: 29.99 },
	{ id: 2, name: 'Pyrite', color: '#E3D8C1', price: 34.99 },
	{ id: 3, name: 'Amethyst', color: '#C09DBD', price: 39.99 },
]

export const CardsSliderSection = () => {
	return (
		<>
			<section className={`${styles.cardsSlider} flex gap-[1px] relative min-h-[500px] lg:min-h-[600px]`}>
				<div className="flex flex-col gap-[5rem] w-[50%] border-r border-r-[#EAC1BF] pt-[2.5rem] xl:pt-[6.6rem] pb-[8.1rem] xl:pb-[11.6rem] px-[3.7rem] xl:px-[8.1rem]">
					<h2>
						The world's finest crystals, ethically sourced and hand selected
						for their power to guide, enhance and protect our everyday lives.
					</h2>
					<Link href="/crystals">
						<Button className='w-[11.8rem]'>Shop all</Button>
					</Link>
				</div>

				<div className="w-[50%] overflow-hidden relative">
					<div className="flex h-full">
						{featuredCrystals.map((crystal, index) => (
							<div
								key={crystal.id}
								className={`${styles.cardsSliderItem} flex-1 flex items-center justify-center relative group cursor-pointer transition-transform hover:scale-105`}
								style={{ backgroundColor: crystal.color, borderRight: index !== featuredCrystals.length - 1 ? '1px solid #EAC1BF' : 'none' }}
							>
								<Link href={`/crystals/${crystal.id}`} className="w-full h-full flex items-center justify-center">
									<div className="text-center">
										<CircleDecoreIcon color={crystal.color} className="mx-auto mb-[1rem]" />
										<h3 className="text-xl lg:text-2xl font-newsreader mb-[0.5rem]">{crystal.name}</h3>
										<p className="text-sm">${crystal.price}</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-[8px] absolute right-[18px] bottom-[30px]'>
					{featuredCrystals.map((_, index) => (
						<div key={index} className={`w-[16px] h-[16px] border transition-all ${index === 0 ? 'border-black bg-black' : 'border-[#EAC1BF]'}`}></div>
					))}
				</div>
			</section>
		</>
	)
}
