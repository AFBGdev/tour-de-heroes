import { useContext, type PropsWithChildren } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import Button from './Button';
import { ModalContext } from '../context/ModalContext';

interface ModalProps extends PropsWithChildren {
  title: string
}

function Modal({children, title}: ModalProps) {

  const { dispatch: modalDispatch } = useContext(ModalContext)

  const handleClick = () => {
    console.log('Funcionando')
    modalDispatch({type: 'TOGGLE'})
  }

  return (
    <section className='w-screen h-screen absolute bg-black/70 top-0 left-0 z-10 flex justify-center items-center'>
      <div className='bg-slate-50 max-w-max rounded-md flex flex-col p-5'>
        <header className='flex'>
          <h3 className='text-3xl font-bold'>{title}</h3>

          <Button onClick={handleClick}>
            <IoMdCloseCircle />
          </Button>
        </header>

        <main className='w-full mt-5'>
          { children }
        </main>
      </div>
    </section>
  )
}

export default Modal