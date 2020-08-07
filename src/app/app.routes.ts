import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home/',
    component: HomeComponent
  },
  {
    path: 'about/',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);