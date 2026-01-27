import { reviews } from '@/shared/api/reviews'
import styles from './styles.module.scss'
import { WaveIcon } from '@/shared/ui/icons'
import { Button } from '@/shared/ui/buttons/button'
import { COLORS } from '@/shared/lib/colors'


export const ReviewsSection = () => {
	return (
		<>
			<section
				className={`lg:px-[9rem] px-[5rem] lg:pt-[12rem] pt-[8rem] lg:pb-[9.7rem] pb-[5rem] flex`}
			>
				<div className="w-[50%]">
					<div
						className={`${styles.reviewsImage} relative xl:w-[36rem] w-[20rem] xl:h-[36rem] h-[20rem] `}
					><Button className="!text-black !bg-[rgb(255,255,255,0.8)] absolute text-[1rem] xl:text-[1.25rem] py-[0.8rem] px-[1.8rem] rounded-[2rem] left-1/2 bottom-[2rem] -translate-x-1/2 -translate-y-1/2">
							Subscribe and save
						</Button>
					</div>
				</div>

				<div className="flex flex-col lg:gap-[2.3rem] gap-[2rem] justify-between w-[50%]">
					{reviews.map(({ text, author }, index) => (
							<div
								className="m-auto text-center justify-center w-[14.5rem] flex flex-col gap-[1.25rem]"
								key={index}
							>
								<div className="">"{text}"</div>
								<div className="uppercase">
									{author.split(' ')[0]} {author.split(' ')[1]?.[0]}.
								</div>
								{index !== 2 && <WaveIcon className='m-auto' />}
							</div>
					))}
				</div>
			</section>
		</>
	)
}