import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HistoryState } from './history.state';
import { REDUCER_KEYS } from '../reducer.keys.enum';

export const selectHistoriesState = createFeatureSelector<HistoryState>(
  REDUCER_KEYS.HISTORY,
);

export const selectHistories = createSelector(
  selectHistoriesState,
  (state: HistoryState) => state.histories,
);
