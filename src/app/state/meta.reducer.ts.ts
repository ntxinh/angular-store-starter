import { isDevMode } from "@angular/core";
import { ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState } from "./app.state";

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];
