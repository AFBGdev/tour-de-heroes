
import { createContext, Dispatch, useReducer, type FC } from 'react';
import { type AppStateType, type ModalActionType } from '../types';
import { INITIAL_APP_STATE } from '../utils/constants';
import { modalReducer } from '../reducers/modalReducer';


export const ModalContext = createContext<{ state: AppStateType; dispatch: Dispatch<ModalActionType>}>({state: INITIAL_APP_STATE, dispatch: () => null});

const ModalContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_APP_STATE);

  if (state === null) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }

  if (dispatch === null) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }

  return (
    <ModalContext.Provider value={{state: state, dispatch}}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;