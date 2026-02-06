'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HomeHeader, Page, Footer, Button } from '@/shared/ui'
import { CircleDecoreIcon } from '@/shared/ui/icons/circle-decore-icon'

const allCrystals = [
	{ id: 1, name: 'Rose Quartz', price: 29.99, color: '#FACCBF', description: 'The stone of unconditional love', category: 'love' },
	{ id: 2, name: 'Pyrite', price: 34.99, color: '#E3D8C1', description: 'Attracts prosperity and abundance', category: 'prosperity' },
	{ id: 3, name: 'Shungite', price: 24.99, color: '#878C8F', description: 'Grounding and protective', category: 'protection' },
	{ id: 4, name: 'Amethyst', price: 39.99, color: '#C09DBD', description: 'Promotes calm and clarity', category: 'clarity' },
	{ id: 5, name: 'Selenite', price: 44.99, color: '#FAEDA3', description: 'Purifying and cleansing', category: 'purification' },
	{ id: 6, name: 'Black Tourmaline', price: 49.99, color: '#1A1A1A', description: 'Powerful protection stone', category: 'protection' },
	{ id: 7, name: 'Citrine', price: 32.99, color: '#FFD700', description: 'The merchant stone', category: 'prosperity' },
	{ id: 8, name: 'Clear Quartz', price: 26.99, color: '#F5F5F5', description: 'Master healer', category: 'clarity' },
]

const categories = ['all', 'love', 'prosperity', 'protection', 'clarity', 'purification']

export default function CrystalsPage() {
	const [selectedCategory, setSelectedCategory] = useState('all')
	
	const filteredCrystals = selectedCategory === 'all' 
		? allCrystals 
		: allCrystals.filter(c => c.category === selectedCategory)

	return (
		<>
			<HomeHeader />
			<Page className="mt-[5rem]">
				<section className="container py-[5rem] lg:py-[8rem]">
					<h1 className="mb-[3rem]">Our Crystals</h1>
					
					{/* Category Filter */}
					<div className="mb-[3rem] flex gap-[1rem] flex-wrap">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setSelectedCategory(cat)}
								className={`px-[1.5rem] py-[0.5rem] rounded-full border text-sm uppercase font-bricolage transition-all ${
									selectedCategory === cat
										? 'bg-black text-white border-black'
										: 'border-[var(--border-light-color)] hover:border-black'
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Crystals Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem]">
						{filteredCrystals.map((crystal) => (
							<Link key={crystal.id} href={`/crystals/${crystal.id}`}>
								<div className="group cursor-pointer">
									<div className="relative mb-[1.5rem] h-[250px] lg:h-[350px] overflow-hidden rounded-lg">
										<div
											className="w-full h-full transition-transform duration-300 group-hover:scale-105"
											style={{ backgroundColor: crystal.color }}
										/>
										<CircleDecoreIcon color={crystal.color} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<h3 className="text-xl lg:text-2xl font-newsreader mb-[0.5rem]">{crystal.name}</h3>
									<p className="text-sm text-gray-600 mb-[1rem]">{crystal.description}</p>
									<p className="text-lg font-bricolage uppercase mb-[1rem]">${crystal.price}</p>
									<Button className="w-full text-center">Add to Cart</Button>
								</div>
							</Link>
						))}
					</div>
				</section>
			</Page>
			<Footer />
		</>
	)
}
