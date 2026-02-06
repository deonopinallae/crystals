import Link from 'next/link'
import { HomeHeader, Page, Footer, Button } from '@/shared/ui'

export default function CartPage() {
	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[10rem]">
					<h1 className="mb-[2rem]">Shopping Cart</h1>
					<div className="text-center py-[5rem]">
						<p className="text-lg mb-[2rem]">Your cart is empty</p>
						<Link href="/crystals">
							<Button>Continue Shopping</Button>
						</Link>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
