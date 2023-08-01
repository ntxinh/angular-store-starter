import { HeroState } from "./hero.state";
import { createReducer, on } from "@ngrx/store";
import {
  retrievedHeroes,
} from "./hero.actions";

const initialState = {} as HeroState;

export const heroReducer = createReducer(
  initialState,
  on(retrievedHeroes, (state, { data }) => ({
    ...state,
    heroes: data,
  })),
)
