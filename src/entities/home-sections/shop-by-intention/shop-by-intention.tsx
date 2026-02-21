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
		<section
			className={`${styles.shopByIntentionSection} flex w-full min-h-[32.75rem] flex-col px-[1.75rem] pb-[7.75rem] pt-[6.25rem]`}
		>
			<h2 className={`${styles.title} m-0 text-center`}>Shop by intention.</h2>

			<ul className="m-0 mt-[5.5rem] grid list-none grid-cols-7 gap-0 p-0">
				{intentionItems.map((item) => (
					<li
						key={item.label}
						className={`${styles.intentionItem} m-0 flex items-start justify-center p-0`}
					>
						<figure
							className={`${styles.intentionFigure} m-0 flex flex-col items-center justify-start p-0`}
						>
							<item.Icon
								className={`${styles.icon} block h-[6.5rem] w-[6.5rem]`}
								color={ICON_COLOR}
							/>
							<figcaption className={`${styles.caption} mt-6`}>
								{item.label}
							</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</section>
	)
}
