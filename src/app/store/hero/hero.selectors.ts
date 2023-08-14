import { createSelector, createFeatureSelector } from '@ngrx/store';
import { REDUCER_KEYS } from '../reducer.keys.enum';
import { HeroState } from './hero.state';

export const selectHeroes = createFeatureSelector<HeroState>(REDUCER_KEYS.HERO);

export const selectAllHeroes = createSelector(selectHeroes, (state) => {
  return state.allHeroes;
});

export const selectMyHeroes = createSelector(selectHeroes, (state) => {
  return state.myHeroes.map(
    (id) => state.allHeroes.find((hero) => hero.id === id)!,
  );
});
