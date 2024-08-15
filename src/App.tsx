import { useContext } from 'react';
import Button from './components/Button';
import CreateHeroForm from './components/CreateHeroForm';
import HeroesList from './components/HeroesList';
import Modal from './components/Modal';
import Searcher from './components/Searcher';
import HeroContextProvider, { HeroContext } from './context/HeroContext';

const APP_TITLE = 'Tour de heroes (#)'

function App() {
  const { state } = useContext(HeroContext)

  const handleClick = () => {
    console.log('Mostrar formulario')
  }

  return (
    <HeroContextProvider>
      <Modal title='Create new Hero'>
        <CreateHeroForm />
      </Modal>

      <div className='flex gap-5 justify-center pt-8 mx-auto w-full max-w-lg relative'>
        <main className='flex-1 flex-col justify-center'>
          <h1 className='w-full text-center text-3xl font-bold'>{ APP_TITLE }</h1>

          <section className='flex flex-col mt-7'>
            <Searcher />

            <div className='w-full flex justify-end mt-3'>
              <Button onClick={handleClick}>
                Agregar heroe
              </Button>
            </div>
          </section>

          <section className='grid grid-flow-col mt-5'>
            <HeroesList data={state.heroes} />
          </section>
        </main>

      </div>
    </HeroContextProvider>
  )
}

export default App
