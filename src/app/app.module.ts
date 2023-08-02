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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HeroesModule,

    StoreModule.forRoot({
      allHeroes: allHeroesReducer,
      myHeroes: myHeroesReducer
    }, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
