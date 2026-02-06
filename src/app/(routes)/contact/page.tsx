import { HomeHeader, Page, Footer, Button } from '@/shared/ui'

export default function ContactPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[3rem]">Contact Us</h1>
					<div className="max-w-[700px]">
						<form className="space-y-[2rem]">
							<div>
								<label className="block text-sm uppercase font-bricolage mb-[0.5rem]">Name</label>
								<input
									type="text"
									className="w-full px-[1rem] py-[0.75rem] border border-[var(--border-light-color)] rounded"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label className="block text-sm uppercase font-bricolage mb-[0.5rem]">Email</label>
								<input
									type="email"
									className="w-full px-[1rem] py-[0.75rem] border border-[var(--border-light-color)] rounded"
									placeholder="Your email"
								/>
							</div>
							<div>
								<label className="block text-sm uppercase font-bricolage mb-[0.5rem]">Message</label>
								<textarea
									className="w-full px-[1rem] py-[0.75rem] border border-[var(--border-light-color)] rounded h-[200px] resize-none"
									placeholder="Your message"
								/>
							</div>
							<Button>Send Message</Button>
						</form>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
