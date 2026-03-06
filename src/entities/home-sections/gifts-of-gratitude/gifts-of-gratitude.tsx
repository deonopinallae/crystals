import styles from './styles.module.scss'
import { assetPath } from '@/shared/lib/asset-path'

const giftKits = [
	{
		id: 1,
		title: 'Box Kits',
		subtitle: 'Starting from $29.95',
		image: assetPath('/gifts-of-gratitude/box-kits.png'),
	},
	{
		id: 2,
		title: 'Pouch Kits',
		subtitle: 'Starting from $19.95',
		image: assetPath('/gifts-of-gratitude/pouch-kits.png'),
	},
	{
		id: 3,
		title: 'Duo Kits',
		subtitle: 'Starting from $10.95',
		image: assetPath('/gifts-of-gratitude/duo-kits.png'),
	},
]

export const GiftsOfGratitudeSection = () => {
	return (
		<section className={`container pt-[8rem] pb-[10rem]`}>
			<h2
				className={`mb-[0.375rem] lg:mb-[6.375rem] ${styles.giftsOfGratitudeTitle}`}
			>
				Gifts of gratitude
			</h2>

			<div
				className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-4 lg:pb-4 ${styles.giftsOfGratitudeGrid}`}
			>
				{giftKits.map((kit) => (
					<article
						key={kit.id}
						className={`flex flex-col ${styles.giftsOfGratitudeCard}`}
					>
						<figure
							className={`m-0 flex h-48 w-full overflow-hidden md:h-60 lg:h-[19.25rem] ${styles.giftsOfGratitudeFigure}`}
						>
							<img
								src={kit.image}
								alt={kit.title}
								className={styles.giftsOfGratitudeImage}
							/>
						</figure>
						<div className={`flex flex-col pt-3`}>
							<h3 className={styles.giftsOfGratitudeCardTitle}>
								{kit.title}
							</h3>
							<p className={styles.giftsOfGratitudeCardSubtitle}>
								{kit.subtitle}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
