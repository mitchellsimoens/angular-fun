import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
