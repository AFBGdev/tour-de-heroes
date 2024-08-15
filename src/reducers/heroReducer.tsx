import { type HeroType, type AppStateType, type HeroActionType } from '../types';

export function heroReducer(state: AppStateType, action: HeroActionType) {
  const { type } = action;

  switch (type) {
    case 'LOAD_HEROES': {
      const savedHeroes = localStorage.getItem('heroes');

      if (!savedHeroes) {
        return []
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
      const heroToDeleteIndex = heroesToModify.findIndex((hero) => hero.id == action.payload.heroId)

      heroesToModify.splice(heroToDeleteIndex)

      const newHeroes = [...state.heroes, heroesToModify]

      return {
        ...state,
        heroes: newHeroes
      };
    }

    default:
      return state;
  }
}