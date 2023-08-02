import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectHistoriesState = createFeatureSelector<
  ReadonlyArray<string>
>('histories');

export const selectHistories = createSelector(
  selectHistoriesState,
  (state: ReadonlyArray<string>) => state,
);
