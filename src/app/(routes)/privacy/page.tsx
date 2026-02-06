import { HomeHeader, Page, Footer } from '@/shared/ui'

export default function PrivacyPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[3rem]">Privacy Policy</h1>
					<div className="max-w-[700px] space-y-[2rem]">
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Data Collection</h2>
							<p className="text-lg leading-relaxed">
								We collect information to process your orders and provide you with the best service possible. This includes your name, email address, shipping address, and payment information.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Data Usage</h2>
							<p className="text-lg leading-relaxed">
								Your information is used solely for processing orders, providing customer support, and improving our services. We never sell or share your personal data with third parties without your consent.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Security</h2>
							<p className="text-lg leading-relaxed">
								We use industry-standard encryption and security measures to protect your personal information. Your data is stored securely on our servers.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-newsreader mb-[1rem]">Contact Us</h2>
							<p className="text-lg leading-relaxed">
								If you have any questions about our privacy policy, please contact us at privacy@crystals.com.
							</p>
						</div>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
