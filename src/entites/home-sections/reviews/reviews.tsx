import styles from './styles.module.scss'

const reviews = [
	{
		id: 1,
		text: 'Somehow, they always know exactly what gems I need! They are the perfect size and always look beautiful.',
		author: 'Hannah We',
	},
	{
		id: 1,
		text: 'Awesome! Fast delivery and great products. I love the informative card included.',
		author: 'Stefanie Stef',
	},
	{
		id: 1,
		text: 'Somehow, they always know exactly what gems I need! They are the perfect size and always look beautiful.',
		author: 'DAVID Od',
	},
]

export const Reviews = () => {
	return (
		<>
			<section
				className={`lg:px-[9rem] px-[5rem] lg:pt-[12rem] pt-[8rem] lg:pb-[9.7rem] pb-[5rem] flex`}
			>
                <div className='w-[50%]'>
                  				<div
					className={`${styles.reviewsImage} relative xl:w-[36rem] w-[20rem] xl:h-[36rem] h-[20rem] `}
				>
					<button className="absolute uppercase text-[1rem] xl:text-[1.25rem] bold py-[0.8rem] px-[1.8rem] bg-[rgb(255,255,255,0.8)] radius-[2rem] left-1/2 bottom-[2rem] -translate-x-1/2 -translate-y-1/2">
						Subscribe and save
					</button>
				</div>  
                </div>

				<div className="flex flex-col lg:gap-[2.3rem] justify-between w-[50%]">
					{reviews.map(({text, author}, index) => <div>
                        <div className='m-auto text-center justify-center w-[14.5rem] flex flex-col gap-[1.25]' key={index}>
                            <div className=''>"{text}"</div>
                            <div className='uppercase'>{author.slice(1)}.</div>
                        </div>
                    </div>)}
				</div>
			</section>
		</>
	)
}
