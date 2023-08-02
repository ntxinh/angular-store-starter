import { createReducer, on } from '@ngrx/store';
import { HistoriesActions } from './history.actions';

export const initialState: ReadonlyArray<string> = [];

export const historiesReducer = createReducer(
  initialState,
  on(HistoriesActions.addHistory, (state, { history }) => {
    return [...state, history];
  }),
  on(HistoriesActions.retrieveHistory, (_state, { histories }) => histories),
);
