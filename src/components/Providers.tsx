import { PropsWithChildren } from 'react';
import ModalContextProvider from '../context/ModalContext';
import HeroContextProvider from '../context/HeroContext';

function Providers({children}: PropsWithChildren) {
  return (
    <ModalContextProvider>
      <HeroContextProvider>
        {children}
      </HeroContextProvider>
    </ModalContextProvider>
  )
}

export default Providers