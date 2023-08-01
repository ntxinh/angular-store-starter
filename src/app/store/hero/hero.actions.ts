import { createAction, props } from '@ngrx/store';
import { HeroActionEnum } from './hero.enum';

export const retrievedHeroes = createAction(
  HeroActionEnum.RETRIEVED_HEROES,
  props<{ data: any }>()
);
