import {Routes} from '@angular/router';
import {ProductsListComponent} from './features/products/pages/products-list/products-list.component';
import {LoginComponent} from './features/auth/pages/login/login.component';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/pages/products-list/products-list.component')
        .then(m => m.ProductsListComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'login', // چون products خودش گارد داره، خودش چک می‌کنه لاگین کرده یا نه
    pathMatch: 'full'
  }
];
