import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HeroesActions, HeroesApiActions } from './heroes.actions';
import { HistoriesActions } from '../history/history.actions';

@Injectable()
export class HeroesEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesApiActions.retrievedHeroList),
      exhaustMap(() =>
        of([]).pipe(
          map(() => HistoriesActions.addHistory({ history: 'Loaded Success' })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.addHero),
      exhaustMap(() =>
        of([]).pipe(
          map(() => HistoriesActions.addHistory({ history: 'Added Success' })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  removeHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.removeHero),
      exhaustMap(() =>
        of([]).pipe(
          map(() =>
            HistoriesActions.addHistory({ history: 'Removed Success' }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions) {}
}
