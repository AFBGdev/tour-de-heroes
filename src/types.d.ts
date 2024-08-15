export type HeroType = {
  id: string
  name: string
  powers: Array<string>
  imageUrl: string
}

export type AppStateType = {
  heroes: Array<HeroType> | []
  createModalIsOpen: boolean
}

export type HeroActionType =
  | { type: 'LOAD_HEROES'}
  | { type: 'CREATE_HERO', payload: {id, name, powers, imageUrl}}
  | { type: 'DELETE_HERO', payload: heroId}

export type ModalActionType =
  | { type: 'OPEN'}
  | { type: 'CLOSE'}