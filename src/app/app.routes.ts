import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DetalleLibro } from './detalle-libro/detalle-libro';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'libro/:id',
    component: DetalleLibro
  }

];
