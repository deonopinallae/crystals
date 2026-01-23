import { Carusel } from '@/entites/home-sections'
import { HomeHeader, Page } from '@/shared/ui'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<Page className='mt-[1.81rem]'>
				<div className='container'></div>
				<Carusel/>
			</Page>
		</>
	)
}
