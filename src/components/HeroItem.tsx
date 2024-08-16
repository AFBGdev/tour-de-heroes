import { useContext } from 'react';
import { type HeroType } from '../types';
import Button from './Button';
import { BsFillTrash3Fill } from "react-icons/bs";
import { HeroContext } from '../context/HeroContext';

interface HeroItemProps {
  heroData: HeroType
}

function HeroItem({ heroData }: HeroItemProps) {
  const { dispatch } = useContext(HeroContext)

  const handleClick = (heroId: HeroType['id']) => {
    console.log('Hero to delete: ', heroId)
    dispatch({type: 'DELETE_HERO', payload: heroId})
  }

  return (
    <li
      key={heroData.id}
      className='flex flex-col w-full border border-gray-400 shadow-xl rounded-md p-3'
    >
      <header className='flex justify-between'>
        <h2 className='text-2xl font-semibold'>{ heroData.name }</h2>

        <Button onClick={() => handleClick(heroData.id)}>
          <BsFillTrash3Fill color='red' />
        </Button>
      </header>

      <picture className='mt-3'>
        <img className='rounded-md object-contain' src={heroData.imageUrl} alt={heroData.name} />
      </picture>
    </li>
  )
}

export default HeroItem