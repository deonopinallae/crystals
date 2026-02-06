import Link from 'next/link'
import styles from './styles.module.scss'

export const Footer = () => {
	return (
		<>
			<footer className={`${styles.footer} border-t border-t-[var(--border-light-color)] py-[3rem] lg:py-[5rem] container`}>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem] lg:gap-[4rem] mb-[3rem]">
					<div>
						<h3 className="font-bricolage uppercase mb-[1.5rem] text-sm">Shop</h3>
						<ul className="flex flex-col gap-[0.8rem]">
							<li><Link href="/crystals" className="text-xs hover:underline">All Crystals</Link></li>
							<li><Link href="/crystals/new" className="text-xs hover:underline">New Arrivals</Link></li>
							<li><Link href="/crystals/bestsellers" className="text-xs hover:underline">Best Sellers</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bricolage uppercase mb-[1.5rem] text-sm">Help</h3>
						<ul className="flex flex-col gap-[0.8rem]">
							<li><Link href="/about" className="text-xs hover:underline">About Us</Link></li>
							<li><Link href="/contact" className="text-xs hover:underline">Contact</Link></li>
							<li><Link href="/shipping" className="text-xs hover:underline">Shipping Info</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bricolage uppercase mb-[1.5rem] text-sm">Legal</h3>
						<ul className="flex flex-col gap-[0.8rem]">
							<li><Link href="/privacy" className="text-xs hover:underline">Privacy Policy</Link></li>
							<li><Link href="/terms" className="text-xs hover:underline">Terms & Conditions</Link></li>
							<li><Link href="/returns" className="text-xs hover:underline">Returns</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bricolage uppercase mb-[1.5rem] text-sm">Connect</h3>
						<ul className="flex flex-col gap-[0.8rem]">
							<li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">Instagram</a></li>
							<li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">Facebook</a></li>
							<li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">Twitter</a></li>
						</ul>
					</div>
				</div>
				<div className="border-t border-t-[var(--border-light-color)] pt-[2rem] flex justify-between items-center">
					<p className="text-xs">&copy; 2024 Crystals. All rights reserved.</p>
					<p className="text-xs">Made with love</p>
				</div>
			</footer>
		</>
	)
}
