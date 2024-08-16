import { useContext, type FormEventHandler } from 'react'
import Button from './Button';
import Input from './Input';
import { HeroContext } from '../context/HeroContext';
import { ModalContext } from '../context/ModalContext';

function CreateHeroForm() {
  const { dispatch } = useContext(HeroContext)
  const { dispatch: modalDispatch } = useContext(ModalContext)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    console.log('Working')

    const {id, name, powers, image} = Object.fromEntries(new window.FormData(event.target as HTMLFormElement))

    const newHero = {id, name, powers, imageUrl: image}

    dispatch({type: 'CREATE_HERO', payload: newHero})
    modalDispatch({type: 'TOGGLE'})
  }

  const handleCancel = () => {
    modalDispatch({type: 'TOGGLE'})
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
        <Button onClick={handleCancel}>Cancel</Button>

        <Button type="submit">Guardar</Button>
      </div>
    </form>
  )
}

export default CreateHeroForm