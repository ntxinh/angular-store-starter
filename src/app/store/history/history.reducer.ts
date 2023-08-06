import { createReducer, on } from '@ngrx/store';
import { HistoriesActions } from './history.actions';
import { HistoryState } from './history.state';

export const initialState = {} as HistoryState;

export const historiesReducer = createReducer(
  initialState,
  on(HistoriesActions.addHistory, (state, { history }) => {
    const histories = [...state.histories, history];
    return { ...state, histories };
  }),
  on(HistoriesActions.retrieveHistory, (state, { histories }) => ({
    ...state,
    histories,
  })),
);
