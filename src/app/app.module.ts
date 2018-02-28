import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockContainerComponent } from './components/clock-container/clock-container.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockContainerComponent,
    DigitalClockComponent,
    AnalogClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
