import {Component, OnInit
} from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { LibroService } from '../libro.service';
import { Libro } from '../libro';


@Component({
  selector: 'app-detalle-libro',

  standalone: true,

  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],

  templateUrl: './detalle-libro.html',
  styleUrl: './detalle-libro.css'
})
export class DetalleLibro implements OnInit {

  libroSeleccionado:
    Libro | undefined;


  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService
  ) {}


  ngOnInit(): void {

    const id =
      this.route.snapshot.paramMap.get('id');


    if (id) {

      this.libroSeleccionado =
        this.libroService.obtenerLibroPorId(id);
    }
  }

}
