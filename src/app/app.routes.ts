import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DetalleLibro } from './detalle-libro/detalle-libro';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'libro/:id',
    component: DetalleLibro,
  },

  {
    path: 'dashboard',
    component: Dashboard,
  },
];
