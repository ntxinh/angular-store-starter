import { createReducer, on } from '@ngrx/store';

import { HeroesApiActions } from './heroes.actions';
import { Hero } from '../../models/hero';

export const initialState: ReadonlyArray<Hero> = [];

export const allHeroesReducer = createReducer(
  initialState,
  on(HeroesApiActions.retrievedHeroList, (_state, { heroes }) => heroes),
);
