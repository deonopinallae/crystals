import {
	CardsSliderSection,
	Carousel,
	HomeMainSection,
	ReviewsSection,
	CrystalsListSection,
	GiftsOfGratitudeSection,
	CrystalClubSection,
	TestimonialHighlightSection,
} from '@/entities/home-sections'
import { ShopByIntentionSection } from '@/entities/home-sections/shop-by-intention/shop-by-intention'
import { HomeHeader, Page } from '@/shared/ui'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<HomeMainSection />
				<Carousel />
				<CardsSliderSection />
				<ReviewsSection />
				<CrystalsListSection />
				<ShopByIntentionSection />
				<GiftsOfGratitudeSection />
				<CrystalClubSection />
				<TestimonialHighlightSection />
			</Page>
		</>
	)
}
