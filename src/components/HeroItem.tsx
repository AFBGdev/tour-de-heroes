import { type Hero } from '../types';
import Button from './Button';
import { BsFillTrash3Fill } from "react-icons/bs";

interface HeroItemProps {
  heroData: Hero
}

function HeroItem({ heroData }: HeroItemProps) {

  const handleClick = () => {
    console.log('Remove hero')
  }

  return (
    <li
      key={heroData.id}
      className='flex flex-col w-full border border-gray-400 shadow-xl rounded-md p-3'
    >
      <header className='flex justify-between'>
        <h2 className='text-2xl font-semibold'>{ heroData.name }</h2>

        <Button onClick={handleClick}>
          <BsFillTrash3Fill color='red' />
        </Button>
      </header>

      <picture className='object-cover mt-3'>
        <img className='rounded-md' src={heroData.imageUrl} alt={heroData.name} />
      </picture>
    </li>
  )
}

export default HeroItem