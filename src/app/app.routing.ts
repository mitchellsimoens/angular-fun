import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages'},
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
