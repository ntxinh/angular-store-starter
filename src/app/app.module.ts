import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeroesModule } from './components/heroes/heroes.module';
import { allHeroesReducer } from './state/hero/all-heroes.reducer';
import { myHeroesReducer } from './state/hero/my-heroes.reducer';
import { metaReducers } from './state/meta.reducer.ts';
import { HeroesEffects } from './state/hero/heroes.effects';
import { HistoryComponent } from './components/histories/histories.component';
import { historiesReducer } from './state/history/history.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HeroesModule,

    StoreModule.forRoot({
      allHeroes: allHeroesReducer,
      myHeroes: myHeroesReducer,
      histories: historiesReducer,
    }, {
      metaReducers
    }),
    EffectsModule.forRoot([HeroesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
