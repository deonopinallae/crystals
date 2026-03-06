import styles from './styles.module.scss'
import { assetPath } from '@/shared/lib/asset-path'

export const CrystalClubSection = () => {
	return (
		<section
			className={`container grid grid-cols-2 gap-[0.75rem] py-[4rem] min-[1382px]:flex min-[1382px]:items-start min-[1382px]:gap-[1.5rem] min-[1382px]:py-[5rem] ${styles.crystalClubSection}`}
		>
			<div className="col-start-1 row-start-1 flex max-w-[15rem] flex-col gap-[1rem] min-[1382px]:mr-auto min-[1382px]:max-w-[12.75rem]">
				<h2 className="leading-[2.4rem] min-[1382px]:leading-[3.5rem]">
					<div>Join our</div>{' '}
					<div className="whitespace-nowrap">Crystal Club</div>
				</h2>
				<p className="text-[1rem] leading-[1.25rem]">
					As a Crystal Club member you can earn crystal points and unlock
					exclusive rewards.
				</p>
				<button
					className="w-fit rounded-[2rem] bg-black px-[2rem] py-[0.875rem] text-[1.25rem] font-medium text-white"
					type="button"
				>
					Join now
				</button>
			</div>
			<img
				alt="Crystal Club image 1"
				className="col-start-2 row-start-1 h-[14rem] object-cover md:h-[16rem] min-[1382px]:h-[18.625rem] min-[1382px]:max-w-[24rem]"
				src={assetPath('/crystal-club-section/selenite-hand.png')}
			/>
			<img
				alt="Crystal Club image 2"
				className="col-start-1 row-start-2 h-[14rem] object-cover md:h-[16rem] min-[1382px]:h-[18.625rem] min-[1382px]:max-w-[11rem]"
				src={assetPath('/crystal-club-section/pink-tower.png')}
			/>
			<img
				alt="Crystal Club image 3"
				className="col-start-2 row-start-2 h-[14rem] object-cover md:h-[16rem] min-[1382px]:h-[18.625rem] min-[1382px]:max-w-[24rem]"
				src={assetPath('/crystal-club-section/cards-in-hand.png')}
			/>
		</section>
	)
}
