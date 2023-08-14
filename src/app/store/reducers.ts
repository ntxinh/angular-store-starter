import { appReducer } from './app';
import { heroReducer } from './hero';
import { historiesReducer } from './history';
// import { REDUCER_KEYS } from './reducer.keys.enum';

export const reducers = {
  // [REDUCER_KEYS.APP]: appReducer,
  // [REDUCER_KEYS.HERO]: heroReducer,
  // [REDUCER_KEYS.HISTORY]: historiesReducer,
  APP: appReducer,
  HERO: heroReducer,
  HISTORY: historiesReducer,
};
