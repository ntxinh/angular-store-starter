import { Hero } from "src/app/models/hero";

export interface HeroState {
  heroes: Array<Hero>;
  isSelectedFlag: boolean;
}
