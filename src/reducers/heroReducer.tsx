import { type HeroType, type AppStateType, type HeroActionType } from '../types';

export function heroReducer(state: AppStateType, action: HeroActionType) {
  const { type } = action;

  switch (type) {
    case 'LOAD_HEROES': {
      const savedHeroes = localStorage.getItem('heroes');

      if (!savedHeroes) {
        return {...state, heroes: []}
      }

      return {
        ...state,
        heroes: JSON.parse(savedHeroes)
      }
    }

    case 'CREATE_HERO': {
      const { id, name, powers, imageUrl } = action.payload

      const newHero: HeroType = {
        id,
        name,
        powers,
        imageUrl
      }

      console.log('CREATING', JSON.stringify(newHero))

      const newHeroes = [...state.heroes, newHero]

      localStorage.setItem('heroes', JSON.stringify(newHeroes))

      return {
        ...state,
        heroes: newHeroes
      };
    }

    case 'DELETE_HERO': {
      const heroesToModify = structuredClone(state.heroes)
      const heroToDeleteIndex = heroesToModify.findIndex((hero) => hero.id == action.payload)
      
      if (heroToDeleteIndex == -1) {
        return state
      }

      heroesToModify.splice(heroToDeleteIndex, 1)

      localStorage.setItem('heroes', JSON.stringify(heroesToModify))

      return {
        ...state,
        heroes: heroesToModify
      };
    }

    default:
      return state;
  }
}