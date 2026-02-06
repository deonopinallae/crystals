import { HomeHeader, Page, Footer } from '@/shared/ui'

export default function ReturnsPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[3rem]">Returns & Exchanges</h1>
					<div className="max-w-[700px] space-y-[2rem]">
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">30-Day Return Policy</h2>
							<p className="text-lg leading-relaxed">
								We want you to be completely satisfied with your purchase. If you're not happy with your crystals, you can return them within 30 days of purchase for a full refund.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Return Requirements</h2>
							<ul className="text-lg space-y-[1rem]">
								<li>• Item must be unused and in original condition</li>
								<li>• Original packaging must be included</li>
								<li>• Proof of purchase (order number or receipt) must be provided</li>
								<li>• Return shipping costs are the responsibility of the customer</li>
							</ul>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Exchanges</h2>
							<p className="text-lg leading-relaxed">
								If you'd like to exchange your crystal for a different one, we'd be happy to help! Simply contact our customer service team with your order number and the crystal you'd like to exchange it for.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Contact Customer Service</h2>
							<p className="text-lg leading-relaxed">
								For returns or exchanges, please contact us at returns@crystals.com or call our customer service team. We're here to help!
							</p>
						</div>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
