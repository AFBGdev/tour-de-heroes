import { AppStateType, ModalActionType } from '../types';

export function modalReducer(state: AppStateType, action: ModalActionType) {
  const { type } = action;

  switch (type) {
    case 'TOGGLE': {
      return {
        ...state,
        createModalIsOpen: !state.createModalIsOpen
      }
    }

    default:
      return state;
  }
}