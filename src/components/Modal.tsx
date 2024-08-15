import { type PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  title: string
}

function Modal({children, title}: ModalProps) {
  return (
    <section className='w-screen h-screen absolute bg-black/70 top-0 left-0 z-10 flex justify-center items-center'>
      <div className='bg-slate-50 max-w-max rounded-md flex flex-col p-5'>
        <header className='flex'>
          <h3 className='text-3xl font-bold'>{title}</h3>
        </header>

        <main className='w-full mt-5'>
          { children }
        </main>
      </div>
    </section>
  )
}

export default Modal