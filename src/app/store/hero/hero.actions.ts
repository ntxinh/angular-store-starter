import { createActionGroup, props } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const HeroActions = createActionGroup({
  source: 'Heroes',
  events: {
    'Add Hero': props<{ heroId: number }>(),
    'Remove Hero': props<{ heroId: number }>(),
  },
});

export const HeroApiActions = createActionGroup({
  source: 'Heroes API',
  events: {
    'Retrieved Hero List': props<{ heroes: Array<Hero> }>(),
  },
});
