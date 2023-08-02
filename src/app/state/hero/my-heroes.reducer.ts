import { createReducer, on } from '@ngrx/store';
import { HeroesActions } from './heroes.actions';

export const initialState: ReadonlyArray<number> = [];

export const myHeroesReducer = createReducer(
  initialState,
  on(HeroesActions.removeHero, (state, { heroId }) =>
    state.filter((id) => id !== heroId)
  ),
  on(HeroesActions.addHero, (state, { heroId }) => {
    if (state.indexOf(heroId) > -1) return state;

    return [...state, heroId];
  })
);
