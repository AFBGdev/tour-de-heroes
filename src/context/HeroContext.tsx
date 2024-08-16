import { createContext, Dispatch, useReducer, type FC } from 'react';
import { HeroActionType, type AppStateType } from '../types';
import { INITIAL_APP_STATE } from '../utils/constants';
import { heroReducer } from '../reducers/heroReducer';


export const HeroContext = createContext<{ state: AppStateType; dispatch: Dispatch<HeroActionType>}>({state: INITIAL_APP_STATE, dispatch: () => null});

const HeroContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(heroReducer, INITIAL_APP_STATE);

  if (state === null) {
    throw new Error('useHeroContext must be used within a HeroContextProvider');
  }

  if (dispatch === null) {
    throw new Error('useHeroContext must be used within a HeroContextProvider');
  }

  return (
    <HeroContext.Provider value={{state: state, dispatch}}>
      {children}
    </HeroContext.Provider>
  )
}

export default HeroContextProvider;