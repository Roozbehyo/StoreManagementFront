import { Routes } from '@angular/router';
import { ProductsListComponent } from './features/products/pages/products-list/products-list.component';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/pages/products-list/products-list.component')
        .then(m => m.ProductsListComponent),
  },
];
