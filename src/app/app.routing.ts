import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent } from './heroes/';
import { DashboardComponent } from './dashboard/';
import { HeroDetailComponent } from './hero-detail/';

const appRoutes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]

export const routing = [
  provideRouter(appRoutes)
];