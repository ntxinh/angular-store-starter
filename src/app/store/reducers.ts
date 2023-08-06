import { appReducer } from './app/app.reducer';
import { heroReducer } from './hero/hero.reducer';
import { historiesReducer } from './history/history.reducer';
import { REDUCER_KEYS } from './reducer.keys.enum';

export const reducers = {
  // [REDUCER_KEYS.APP]: appReducer,
  [REDUCER_KEYS.HERO]: heroReducer,
  // [REDUCER_KEYS.HISTORY]: historiesReducer,
};
