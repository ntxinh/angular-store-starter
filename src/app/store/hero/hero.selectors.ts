import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HeroState } from "./hero.state";
import { ReducerKeys } from "../reducer-keys.enum";

export const selectHerosFeature = createFeatureSelector<HeroState>(ReducerKeys.HERO);
export const selectIsSelectedFlag = createSelector(selectHerosFeature, (state: HeroState) => state.isSelectedFlag);
