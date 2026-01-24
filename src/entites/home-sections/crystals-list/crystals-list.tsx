import { Button } from '@/shared/ui'
import styles from './styles.module.scss'

const crystals = [
    {id: 1, name: 'Rose Quartz'},
    {id: 2, name: 'Pyrite'},
    {id: 3, name: 'Shungite'},
    {id: 4, name: 'Amethyst'},
    {id: 5, name: 'Selenite'},
]

export const CrystalsListSection = () => {
    return (
        <>
            <section className={`container pt-[5rem] lg:pt-[11rem] pb-[4rem] lg:pb-[10rem]`}>
                <div className=''>
                    <div className='mb-[1.8rem] uppercase'>Popular Crystals</div>
                    <div className='flex flex-col gap-[2rem]'>
                        {crystals.map(({name}, index) => <div key={index} className="text-[3rem] font-newsreader flex gap-[1.25rem] items-center">
                            <div></div>
                            <div>{name}</div>
                        </div>)}
                    </div>
                    <Button className='mt-[2.6rem]'>Find your match</Button>
                </div>
                <div>
                    
                </div>
            </section>
        </>
    )
}