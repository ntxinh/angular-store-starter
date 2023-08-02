import { Hero } from "../models/hero";

export interface AppState {
  allHeroes: ReadonlyArray<Hero>;
  myHeroes: ReadonlyArray<number>;
  histories: ReadonlyArray<string>;
}
