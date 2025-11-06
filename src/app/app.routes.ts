import { Routes } from '@angular/router';
import { Signals } from './signals/signals';
import { SwitchCase } from './switch-case/switch-case';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signal-learning', component: Signals },
  { path: 'switch-case', component: SwitchCase },
  { path: '**', component: NotFound }, // keep it last only, it will show all other router if you first
];
