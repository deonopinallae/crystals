import { HomeHeader, Page, Footer } from '@/shared/ui'

export default function AboutPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[2rem]">About Us</h1>
					<div className="max-w-[700px] space-y-[2rem] text-lg leading-relaxed">
						<p>
							We believe in the power of crystals to guide, enhance, and protect our everyday lives. Our mission is to provide the world's finest crystals, ethically sourced and hand selected for their quality and energy.
						</p>
						<p>
							Each crystal in our collection has been carefully chosen for its beauty, authenticity, and positive vibrations. We work directly with ethical suppliers to ensure that every stone meets our high standards.
						</p>
						<p>
							Whether you're a seasoned crystal collector or just beginning your journey, we're here to help you find the perfect stone for your needs. Our knowledgeable team is passionate about crystals and committed to helping you discover the magic they can bring to your life.
						</p>
						<p>
							Thank you for choosing us as your crystal partner. Together, we're creating a more peaceful, abundant, and protected world.
						</p>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
