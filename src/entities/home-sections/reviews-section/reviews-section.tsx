import { reviews } from '@/shared/api/reviews'
import styles from './styles.module.scss'
import { WaveIcon } from '@/shared/ui/icons'
import { Button } from '@/shared/ui/buttons/button'

export const ReviewsSection = () => {
	return (
		<>
			<section
				className={`flex flex-col gap-[2rem] px-[1rem] pt-[4rem] pb-[4rem] sm:px-[2rem] lg:flex-row lg:gap-0 lg:px-[9rem] lg:pt-[12rem] lg:pb-[9.7rem]`}
			>
				<div className="flex w-full justify-center lg:w-[50%] lg:justify-start">
					<div
						className={`${styles.reviewsImage} relative h-[22rem] w-full max-w-[22rem] sm:h-[28rem] sm:max-w-[28rem] xl:h-[36rem] xl:w-[36rem] xl:max-w-none`}
					>
						<Button className="absolute left-1/2 bottom-[2rem] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] !bg-[rgb(255,255,255,0.8)] px-[1.8rem] py-[0.8rem] text-[1rem] !text-black xl:text-[1.25rem]">
							Subscribe and save
						</Button>
					</div>
				</div>

				<div className="flex w-full flex-col justify-between gap-[2rem] lg:w-[50%] lg:gap-[2.3rem]">
					{reviews.map(({ text, author }, index) => (
						<div
							className="m-auto flex w-full max-w-[20rem] flex-col justify-center gap-[1.25rem] text-center lg:w-[14.5rem] lg:max-w-none"
							key={index}
						>
							<div className="text-[1rem] leading-[1.5rem]">"{text}"</div>
							<div className="uppercase">
								{author.split(' ')[0]} {author.split(' ')[1]?.[0]}.
							</div>
							{index !== 2 && <WaveIcon className="m-auto" />}
						</div>
					))}
				</div>
			</section>
		</>
	)
}
