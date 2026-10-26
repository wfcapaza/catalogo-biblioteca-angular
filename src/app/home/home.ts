import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TablaLibros } from '../tabla-libros/tabla-libros';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-home',
  imports: [MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    TablaLibros],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  librosEnPantalla: Libro[] = [];

  constructor(
    private libroService: LibroService
  ) {}


  ngOnInit(): void {

    this.librosEnPantalla = this.libroService.obtenerLibros();
  }


  filtrarPorCategoria(categoria: string): void {

    if (categoria === 'Todas') {

      this.librosEnPantalla =
        this.libroService.obtenerLibros();

    } else {

      this.librosEnPantalla =
        this.libroService.buscarPorCategoria(
          categoria
        );
    }
  }
}
