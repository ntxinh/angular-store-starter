import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { HelpersService } from 'src/app/services/helpers.service';
import { AppActions } from './app.actions';

@Injectable()
export class AppEffects {
  pushNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.pushNotification),
      tap(({ notify }) => this.helpersService.show(notify)),
    ),
  );

  constructor(
    private actions$: Actions,
    private helpersService: HelpersService,
  ) {}
}
