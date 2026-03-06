import { Button } from '@/shared/ui'
import styles from './styles.module.scss'
import { CircleDecoreIcon, CrystalListBgIcon } from '@/shared/ui/icons'
import { assetPath } from '@/shared/lib/asset-path'

const crystals = [
	{ id: 1, name: 'Rose Quartz', color: '#FACCBF' },
	{ id: 2, name: 'Pyrite', color: '#E3D8C1' },
	{ id: 3, name: 'Shungite', color: '#878C8F' },
	{ id: 4, name: 'Amethyst', color: '#C09DBD' },
	{ id: 5, name: 'Selenite', color: '#FAEDA3' },
]

const crystalsTypes = [
	{
		id: 1,
		name: 'Tower',
		imgUrl: assetPath('/crystals-list/tower.png'),
		price: 'From $40',
	},
	{
		id: 2,
		name: 'Pyramid',
		imgUrl: assetPath('/crystals-list/pyramid.png'),
		price: 'SOLD OUT',
	},
]

export const CrystalsListSection = () => {
	return (
		<section
			className={`container relative flex flex-col gap-[2.5rem] overflow-visible pt-[5rem] pb-[4rem] lg:flex-row lg:items-start lg:justify-between lg:gap-[2rem] lg:pt-[11rem] lg:pb-[10rem] ${styles.crystalsListSection}`}
		>
			<div className="w-full lg:max-w-[34rem]">
				<div className="mb-[1.8rem] uppercase">Popular Crystals</div>
				<ul className="flex flex-col gap-[2rem]">
					{crystals.map(({ id, name, color }) => (
						<li
							key={id}
							className="flex list-none items-center gap-[1.25rem] text-[2rem] leading-[2rem] font-newsreader lg:text-[3rem] lg:leading-[3rem]"
						>
							<CircleDecoreIcon color={color} />
							<div className="whitespace-nowrap">{name}</div>
						</li>
					))}
				</ul>
				<Button className="mt-[2.6rem] !rounded-[2rem] !bg-gradient-to-r !from-[#9cb9ff] !via-[#f39bce] !to-[#ffd95a] !text-black normal-case">
					Find your match
				</Button>
			</div>
			<div
				className={`flex w-full flex-col gap-[1.5rem] md:flex-row lg:w-auto ${styles.crystalsListCards}`}
			>
				<CrystalListBgIcon className={styles.crystalsListBg} />

				{crystalsTypes.map(({ id, name, imgUrl, price }) => (
					<div
						key={id}
						className={`flex h-[24rem] w-full flex-col items-center justify-between rounded-[1rem] border border-[#eac1bf] bg-white px-[1.3rem] py-[1.8rem] text-center md:h-[30rem] lg:h-[33rem] lg:w-[21rem] ${styles.crystalsListCard}`}
					>
						<div className="text-[1.125rem] leading-[1.125rem]">
							{name.toUpperCase()}
						</div>
						<img
							src={imgUrl}
							alt={name}
							className="w-full max-w-[13rem] object-contain"
						/>
						<div className="text-[1rem] leading-[1rem]">{price}</div>
					</div>
				))}
			</div>
		</section>
	)
}
