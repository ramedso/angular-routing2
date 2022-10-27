import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { TabuadaComponent } from './components/tabuada/tabuada.component';
import { TimerComponent } from './components/timer/timer.component';
import { routing } from '../angular.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent, HomeComponent, TabuadaComponent, TimerComponent],
})
export class AppModule {}
