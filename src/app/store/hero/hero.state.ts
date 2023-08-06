import { Hero } from 'src/app/models/hero';

export interface HeroState {
  allHeroes: Array<Hero>;
  myHeroes: Array<number>;
}
