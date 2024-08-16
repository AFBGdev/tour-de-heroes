import { type HeroType } from '../types';
import HeroItem from './HeroItem';

interface HeroesListProps {
  data: Array<HeroType> | []
}

function HeroesList({ data }: HeroesListProps) {

  return (
      <ul className='w-full grid grid-flow-col gap-3 '>
        {data.length == 0 ?
          <p className='text-2xl font-bold text-center w-full'>No heroes found!</p>
          :
          data.map((hero) => (<HeroItem key={hero.id} heroData={hero} />))
        }
      </ul>

  )
}

export default HeroesList