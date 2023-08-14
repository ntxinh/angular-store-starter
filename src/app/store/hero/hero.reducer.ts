import { createReducer, on } from '@ngrx/store';

import { HeroActions, HeroApiActions } from './hero.actions';
import { HeroState } from './hero.state';

export const initialState = { allHeroes: [], myHeroes: [] } as HeroState;

export const heroReducer = createReducer(
  initialState,
  on(HeroApiActions.retrievedHeroList, (state, { heroes }) => ({
    ...state,
    allHeroes: heroes,
  })),
  on(HeroActions.removeHero, (state, { heroId }) => ({
    ...state,
    myHeroes: state.myHeroes.filter((id) => id !== heroId),
  })),
  on(HeroActions.addHero, (state, { heroId }) => {
    if (state.myHeroes.indexOf(heroId) > -1) return state;

    const myHeroes = [...state.myHeroes, heroId];
    return { ...state, myHeroes };
  }),
);
