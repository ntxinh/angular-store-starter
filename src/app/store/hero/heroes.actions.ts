import { createActionGroup, props } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const HeroesActions = createActionGroup({
  source: 'Heroes',
  events: {
    'Add Hero': props<{ heroId: number }>(),
    'Remove Hero': props<{ heroId: number }>(),
  },
});

export const HeroesApiActions = createActionGroup({
  source: 'Heroes API',
  events: {
    'Retrieved Hero List': props<{ heroes: Array<Hero> }>(),
  },
});
