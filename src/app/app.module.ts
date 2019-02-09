import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ClockModule } from './clock/clock.module';
import { ClockEffects } from './clock/effects/clock.effects';
import { reducers } from './app.root.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClockModule,
    RouterModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ClockEffects,
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
