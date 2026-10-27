import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Chart from 'chart.js/auto';
import { LibroService } from '../libro.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard implements AfterViewInit {
  @ViewChild('graficoBarras')
  barrasRef!: ElementRef;

  @ViewChild('graficoDona')
  donaRef!: ElementRef;

  constructor(private libroService: LibroService) {}

  ngAfterViewInit(): void {
    const libros = this.libroService.obtenerLibros();
    this.dibujarGraficoBarras(libros);
    this.dibujarGraficoDona(libros);
  }

  dibujarGraficoBarras(libros: Libro[]): void {
    const categorias = ['Programación', 'Bases de Datos', 'Redes', 'Ciencias Básicas'];

    const stockPorCategoria = categorias.map((categoria) => {
      return libros
        .filter((libro) => libro.categoria === categoria)
        .reduce((suma, libro) => suma + libro.disponibles, 0);
    });

    new Chart(this.barrasRef.nativeElement, {
      type: 'bar',

      data: {
        labels: categorias,
        datasets: [
          {
            label: 'Unidades disponibles',
            data: stockPorCategoria,
          },
        ],
      },

      options: {
        responsive: true,

        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  dibujarGraficoDona(libros: Libro[]): void {
    const stockCritico = libros.filter((libro) => libro.disponibles < 10).length;

    const stockSaludable = libros.filter((libro) => libro.disponibles >= 10).length;

    new Chart(this.donaRef.nativeElement, {
      type: 'doughnut',

      data: {
        labels: ['Stock Crítico', 'Stock Saludable'],

        datasets: [
          {
            data: [stockCritico, stockSaludable],
          },
        ],
      },

      options: {
        responsive: true,
      },
    });
  }
}
