import { Component, Input } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { Libro } from '../libro';


@Component({
  selector: 'app-tabla-libros',

  standalone: true,

  imports: [
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    RouterLink
  ],

  templateUrl: './tabla-libros.html',
  styleUrl: './tabla-libros.css'
})
export class TablaLibros {

  @Input()
  set lista(value: Libro[]) {

    this.dataSource.data = value;
  }


  columnas: string[] = [
    'id',
    'titulo',
    'categoria',
    'autor',
    'disponibles',
    'acciones'
  ];


  dataSource =
    new MatTableDataSource<Libro>([]);

}
