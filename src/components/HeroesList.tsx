import { type Hero } from '../types';
import HeroItem from './HeroItem';

interface HeroesListProps {
  data: Array<Hero>
}

function HeroesList({ data = [] }: HeroesListProps) {
  if (data.length == 0) return (<p className='text-2xl font-bold text-center w-full'>No heroes found!</p>)

  return (
      <ul className='w-full grid grid-flow-col gap-3 '>
        {data.map((hero) => (<HeroItem key={hero.id} heroData={hero} />))}
      </ul>

  )
}

export default HeroesList