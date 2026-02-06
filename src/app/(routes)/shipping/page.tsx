import { HomeHeader, Page, Footer } from '@/shared/ui'

export default function ShippingPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[3rem]">Shipping Information</h1>
					<div className="max-w-[700px] space-y-[2rem]">
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Standard Shipping</h2>
							<p className="text-lg leading-relaxed">
								Orders are typically processed within 1-2 business days. Standard shipping takes 5-7 business days for delivery within the continental United States.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Express Shipping</h2>
							<p className="text-lg leading-relaxed">
								Get your crystals faster with our express shipping option. Express orders arrive in 2-3 business days.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Free Shipping</h2>
							<p className="text-lg leading-relaxed">
								Enjoy free standard shipping on all orders over $75! We believe everyone should have access to the transformative power of crystals.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">International Shipping</h2>
							<p className="text-lg leading-relaxed">
								We ship worldwide! International orders may take 2-3 weeks depending on destination. Contact us for a shipping quote.
							</p>
						</div>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
