import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const selectAllHeroes = createFeatureSelector<ReadonlyArray<Hero>>('allHeroes');

export const selectMyHeroesState = createFeatureSelector<
  ReadonlyArray<number>
>('myHeroes');

export const selectMyHeroes = createSelector(
  selectAllHeroes,
  selectMyHeroesState,
  (allHeroes, myHeroes) => {
    return myHeroes.map((id) => allHeroes.find((hero) => hero.id === id)!);
  }
);
