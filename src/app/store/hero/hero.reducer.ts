import { createReducer, on } from '@ngrx/store';

import { HeroesActions, HeroesApiActions } from './heroes.actions';
import { HeroState } from './hero.state';

export const initialState = { allHeroes: [], myHeroes: [] } as HeroState;

export const heroReducer = createReducer(
  initialState,
  on(HeroesApiActions.retrievedHeroList, (state, { heroes }) => ({
    ...state,
    allHeroes: heroes,
  })),
  on(HeroesActions.removeHero, (state, { heroId }) => ({
    ...state,
    myHeroes: state.myHeroes.filter((id) => id !== heroId),
  })),
  on(HeroesActions.addHero, (state, { heroId }) => {
    if (state.myHeroes.indexOf(heroId) > -1) return state;

    const myHeroes = [...state.myHeroes, heroId];
    return { ...state, myHeroes };
  }),
);
