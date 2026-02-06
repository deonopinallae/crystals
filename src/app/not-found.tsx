import Link from 'next/link'
import { Button } from '@/shared/ui'

export default function NotFound() {
	return (
		<div className="min-h-[100vh] flex items-center justify-center container">
			<div className="text-center">
				<h1 className="mb-[2rem]">404</h1>
				<p className="text-2xl font-newsreader mb-[3rem]">Page not found</p>
				<p className="text-lg mb-[2rem]">The crystal you're looking for doesn't exist or has been moved.</p>
				<Link href="/">
					<Button>Back to Home</Button>
				</Link>
			</div>
		</div>
	)
}
