import { HomeHeader, Page, Footer } from '@/shared/ui'

export default function TermsPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[3rem]">Terms & Conditions</h1>
					<div className="max-w-[700px] space-y-[2rem]">
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Agreement to Terms</h2>
							<p className="text-lg leading-relaxed">
								By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Product Information</h2>
							<p className="text-lg leading-relaxed">
								All product descriptions, images, and pricing are provided for informational purposes. While we strive for accuracy, we do not warrant that product descriptions, pricing, or other content of this site is accurate, complete, reliable, current, or error-free.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Limitation of Liability</h2>
							<p className="text-lg leading-relaxed">
								In no event shall our company be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the materials on our site, even if we have been advised of the possibility of such damages.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Contact</h2>
							<p className="text-lg leading-relaxed">
								If you have any questions about these Terms & Conditions, please contact us at terms@crystals.com.
							</p>
						</div>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
