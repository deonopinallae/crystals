import { Button } from '@/shared/ui'
import styles from './styles.module.scss'
import { CircleDecoreIcon } from '@/shared/ui/icons/circle-decore-icon'

const crystals = [
    {id: 1, name: 'Rose Quartz', color: '#FACCBF'},
    {id: 2, name: 'Pyrite', color: '#E3D8C1'},
    {id: 3, name: 'Shungite', color: '#878C8F'},
    {id: 4, name: 'Amethyst', color: '#C09DBD'},
    {id: 5, name: 'Selenite', color: '#FAEDA3'},
]

export const CrystalsListSection = () => {
    return (
        <>
            <section className={`container pt-[5rem] lg:pt-[11rem] pb-[4rem] lg:pb-[10rem]`}>
                <div className=''>
                    <div className='mb-[1.8rem] uppercase'>Popular Crystals</div>
                    <ul className='flex flex-col gap-[3.5rem]'>
                        {crystals.map(({name, color}, index) => <li key={index} className="text-[3rem] font-newsreader flex gap-[1.25rem] items-center list-none">
                            <CircleDecoreIcon color={color} />
                            <div>{name}</div>
                        </li>)}
                    </ul>
                    <Button className='mt-[2.6rem]'>Find your match</Button>
                </div>
                <div>
                    
                </div>
            </section>
        </>
    )
}