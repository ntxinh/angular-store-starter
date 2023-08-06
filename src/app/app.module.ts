import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeroesModule } from './components/heroes/heroes.module';
import { metaReducers } from './store/meta.reducer.ts';
import { HistoryComponent } from './components/histories/histories.component';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { ToastrModule } from 'ngx-toastr';
import { HelpersService } from './services/helpers.service';

@NgModule({
  declarations: [AppComponent, HistoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // 3rd libs
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    // Modules
    HeroesModule,

    // Store libs
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    // Services
    HelpersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
