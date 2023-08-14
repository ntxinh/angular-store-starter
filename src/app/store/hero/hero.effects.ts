import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HeroActions, HeroApiActions } from './hero.actions';
import { HistoriesActions } from '../history';

@Injectable()
export class HeroEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroApiActions.retrievedHeroList),
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
      ofType(HeroActions.addHero),
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
      ofType(HeroActions.removeHero),
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
