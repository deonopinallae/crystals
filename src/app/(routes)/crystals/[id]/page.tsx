'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HomeHeader, Page, Footer, Button } from '@/shared/ui'
import { CircleDecoreIcon } from '@/shared/ui/icons/circle-decore-icon'

const crystalData: Record<string, any> = {
	'1': { id: 1, name: 'Rose Quartz', price: 29.99, color: '#FACCBF', description: 'The stone of unconditional love', category: 'love', details: 'Rose Quartz is known as the stone of unconditional love. It opens the heart chakra and is used for self-love, forgiveness, and inner peace.' },
	'2': { id: 2, name: 'Pyrite', price: 34.99, color: '#E3D8C1', description: 'Attracts prosperity and abundance', category: 'prosperity', details: 'Pyrite is a powerful stone for prosperity and abundance. It attracts wealth and success in all endeavors.' },
	'3': { id: 3, name: 'Shungite', price: 24.99, color: '#878C8F', description: 'Grounding and protective', category: 'protection', details: 'Shungite is a powerful grounding stone that provides protection and purification from electromagnetic radiation.' },
	'4': { id: 4, name: 'Amethyst', price: 39.99, color: '#C09DBD', description: 'Promotes calm and clarity', category: 'clarity', details: 'Amethyst is a powerful crystal for spiritual awareness and meditation. It promotes calm, clarity, and inner peace.' },
	'5': { id: 5, name: 'Selenite', price: 44.99, color: '#FAEDA3', description: 'Purifying and cleansing', category: 'purification', details: 'Selenite is a powerful purifying and cleansing crystal. It is used to clear negative energy and promote positive vibes.' },
	'6': { id: 6, name: 'Black Tourmaline', price: 49.99, color: '#1A1A1A', description: 'Powerful protection stone', category: 'protection', details: 'Black Tourmaline is one of the most powerful protective stones. It grounds energy and creates a protective shield.' },
	'7': { id: 7, name: 'Citrine', price: 32.99, color: '#FFD700', description: 'The merchant stone', category: 'prosperity', details: 'Citrine is known as the merchant stone due to its association with abundance and prosperity.' },
	'8': { id: 8, name: 'Clear Quartz', price: 26.99, color: '#F5F5F5', description: 'Master healer', category: 'clarity', details: 'Clear Quartz is known as the master healer. It amplifies energy and intention, and can be programmed for any purpose.' },
}

export default function CrystalDetailPage({ params }: { params: { id: string } }) {
	const crystal = crystalData[params.id]
	const [quantity, setQuantity] = useState(1)

	if (!crystal) {
		return (
			<>
				<HomeHeader />
				<Page className="mt-[5rem]">
					<section className="container py-[5rem] text-center">
						<h1>Crystal not found</h1>
						<Link href="/crystals">
							<Button className="mt-[2rem]">Back to Crystals</Button>
						</Link>
					</section>
				</Page>
				<Footer />
			</>
		)
	}

	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<Link href="/crystals" className="text-sm mb-[2rem] inline-block hover:underline">← Back to Crystals</Link>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[6rem]">
						{/* Image */}
						<div className="flex items-center justify-center">
							<div className="relative w-full aspect-square max-w-[400px]">
								<div
									className="w-full h-full rounded-lg"
									style={{ backgroundColor: crystal.color }}
								/>
								<CircleDecoreIcon color={crystal.color} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
							</div>
						</div>

						{/* Details */}
						<div className="flex flex-col justify-center">
							<h1 className="mb-[1rem]">{crystal.name}</h1>
							<p className="text-xl font-bricolage mb-[1.5rem]">${crystal.price}</p>
							<p className="text-lg mb-[2rem] leading-relaxed">{crystal.details}</p>
							
							{/* Quantity Selector */}
							<div className="mb-[2rem] flex items-center gap-[1rem]">
								<span className="uppercase text-sm">Quantity:</span>
								<div className="flex items-center border border-[var(--border-light-color)] rounded">
									<button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-[1rem] py-[0.5rem]">−</button>
									<span className="px-[1.5rem]">{quantity}</span>
									<button onClick={() => setQuantity(quantity + 1)} className="px-[1rem] py-[0.5rem]">+</button>
								</div>
							</div>

							{/* Add to Cart Button */}
							<Button className="mb-[2rem]">Add to Cart</Button>

							{/* Product Info */}
							<div className="grid grid-cols-2 gap-[2rem] border-t border-t-[var(--border-light-color)] pt-[2rem]">
								<div>
									<h3 className="font-bricolage uppercase text-sm mb-[0.5rem]">Category</h3>
									<p className="text-sm capitalize">{crystal.category}</p>
								</div>
								<div>
									<h3 className="font-bricolage uppercase text-sm mb-[0.5rem]">Color</h3>
									<div className="flex items-center gap-[0.5rem]">
										<div className="w-[20px] h-[20px] rounded" style={{ backgroundColor: crystal.color }}></div>
										<p className="text-sm">{crystal.color}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
