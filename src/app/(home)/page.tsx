import { CardsSlider, Carousel, HomeMainSection, Reviews } from '@/entites/home-sections'
import { HomeHeader, Page } from '@/shared/ui'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<HomeMainSection />
				<Carousel />
				<CardsSlider />
				<Reviews />
			</Page>
		</>
	)
}
