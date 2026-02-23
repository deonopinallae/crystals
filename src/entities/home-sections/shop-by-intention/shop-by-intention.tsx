import styles from './styles.module.scss'
import {
	IntentionBalanceIcon,
	IntentionCalmIcon,
	IntentionCreateIcon,
	IntentionHealIcon,
	IntentionLoveIcon,
	IntentionManifestIcon,
	IntentionProtectIcon,
} from '@/shared/ui/icons'

const intentionItems = [
	{ label: 'Love', Icon: IntentionLoveIcon },
	{ label: 'Calm', Icon: IntentionCalmIcon },
	{ label: 'Create', Icon: IntentionCreateIcon },
	{ label: 'Protect', Icon: IntentionProtectIcon },
	{ label: 'Balance', Icon: IntentionBalanceIcon },
	{ label: 'Manifest', Icon: IntentionManifestIcon },
	{ label: 'Heal', Icon: IntentionHealIcon },
]

const ICON_COLOR = '#000000'

export const ShopByIntentionSection = () => {
	return (
		<section className="flex w-full flex-col border border-[#eac1bf] bg-[#fbf9f9] px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-16 xl:min-h-[32.75rem] xl:px-[1.75rem] xl:pb-[7.75rem] xl:pt-[6.25rem]">
			<h2 className="m-0 text-center font-[var(--font-newsreader)] text-[2rem] font-normal leading-[2.6rem] text-[#000000] lg:text-[3rem] lg:leading-[4.25rem]">
				Shop by intention.
			</h2>

			<ul className="m-0 mt-8 grid list-none grid-cols-2 gap-y-8 p-0 sm:mt-10 sm:grid-cols-3 sm:gap-y-10 lg:mt-12 lg:grid-cols-4 xl:mt-[5.5rem] xl:grid-cols-7 xl:gap-y-0">
				{intentionItems.map((item) => (
					<li
						key={item.label}
						className={`${styles.intentionItem} m-0 flex items-start justify-center p-0`}
					>
						<figure
							className={`${styles.intentionFigure} m-0 flex flex-col items-center justify-start p-0`}
						>
							<item.Icon
								className={`${styles.icon} h-20 w-20 sm:h-24 sm:w-24 xl:h-[6.5rem] xl:w-[6.5rem]`}
								color={ICON_COLOR}
							/>
							<figcaption
								className={`${styles.caption} mt-4 text-center font-['Basis_Grotesque_Pro',sans-serif] text-[1rem] font-normal uppercase leading-[1rem] tracking-[0.0625rem] text-[#000000] sm:mt-5 xl:mt-6`}
							>
								{item.label}
							</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</section>
	)
}
