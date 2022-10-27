import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { TabuadaComponent } from './components/tabuada/tabuada.component';
import { TimerComponent } from './components/timer/timer.component';
import { RouterModule, Routes } from '@angular/router';

const routs: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tabuada',
    component: TabuadaComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs, { useHash: true }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent, HomeComponent, TabuadaComponent, TimerComponent],
})
export class AppModule {}
