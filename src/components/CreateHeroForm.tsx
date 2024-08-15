import { useContext, type FormEventHandler } from 'react'
import Button from './Button';
import Input from './Input';
import { HeroContext } from '../context/HeroContext';

function CreateHeroForm() {
  const { dispatch } = useContext(HeroContext)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const {id, name, powers, image} = Object.fromEntries(new window.FormData(event.target as HTMLFormElement))

    const newHero = {id, name, powers, imageUrl: image}
    console.log(JSON.stringify(newHero))

    dispatch({type: 'CREATE_HERO', payload: newHero})

  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <label htmlFor='name'>
        <span>Id:</span>

        <Input name='id' />
      </label>

      <label htmlFor='name'>
        <span>Nombre:</span>

        <Input name='name' />
      </label>

      <label htmlFor='powers'>
        <span>Poderes:</span>

        <Input name='powers' />
      </label>

      <label htmlFor='image'>
        <span>foto URL:</span>

        <Input name='image' />
      </label>

      <div className='flex justify-between mt-8'>
        <Button>Cancel</Button>

        <Button>Guardar</Button>
      </div>
    </form>
  )
}

export default CreateHeroForm