import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/inbox',
    pathMatch: 'full',
  },
  {
    path: 'pages/:id',
    loadComponent: () =>
      import('./pages/base.page').then((m) => m.FolderPage),
  },
];
