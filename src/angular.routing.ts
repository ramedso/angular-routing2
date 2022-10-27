import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { TabuadaComponent } from './app/components/tabuada/tabuada.component';
import { TimerComponent } from './app/components/timer/timer.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tabuada', component: TabuadaComponent },
  { path: 'timer', component: TimerComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
