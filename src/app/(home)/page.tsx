import { CardsSliderSection, Carousel, HomeMainSection, ReviewsSection, CrystalsListSection } from '@/entites/home-sections'
import { HomeHeader, Page, Footer } from '@/shared/ui'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<HomeMainSection />
				<Carousel />
				<CardsSliderSection />
				<ReviewsSection />
				<CrystalsListSection/>
			</Page>
			<Footer />
		</>
	)
}
