import { WaveIcon } from '@/shared/ui/icons'
import { assetPath } from '@/shared/lib/asset-path'

const reviewer = {
	name: 'Kaity G',
	avatar: assetPath('/testimonial-highlight-section/avatar.png'),
	testimonial:
		'The crystals were amazing. Wonderful quality and I could feel their energy immediately.',
}

export const TestimonialHighlightSection = () => {
	return (
		<section className="container relative grid place-items-center overflow-hidden py-[10rem]">
			<img
				alt=""
				aria-hidden
				className=" absolute left-0 top-1/2 hidden max-w-[22rem] -translate-y-1/2 min-[90rem]:block"
				src={assetPath('/testimonial-highlight-section/decor-right.png')}
			/>
			<img
				alt=""
				aria-hidden
				className=" absolute right-0 top-1/2 hidden max-w-[22rem] -translate-y-1/2 min-[90rem]:block"
				src={assetPath('/testimonial-highlight-section/decor-left.png')}
			/>
			<div className="flex w-full max-w-[83.75rem] flex-col items-center gap-[1.8rem]">
				<img
					alt="Reviewer avatar"
					className="max-h-[5.5rem] max-w-[5.5rem] rounded-full object-cover "
					src={reviewer.avatar}
				/>
				<p className="max-w-[38.5rem] text-center font-newsreader text-[3rem] leading-[4.5rem] max-[48rem]:text-[1.75rem] max-[48rem]:leading-[2.5rem] max-[64rem]:max-w-full max-[64rem]:text-[2.25rem] max-[64rem]:leading-[3rem]">
					"{reviewer.testimonial}"
				</p>
				<div className="mt-[1.75rem] flex flex-col items-center gap-[0.75rem]">
					<p className="font-roboto text-[1rem] leading-[1rem] tracking-[0.0625rem]">
						{reviewer.name.toUpperCase()}
					</p>
					<WaveIcon className="h-[1.75rem] w-[1.75rem]" />
				</div>
			</div>
		</section>
	)
}
