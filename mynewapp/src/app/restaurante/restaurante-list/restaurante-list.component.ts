import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';


@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {
  restaurantes: Array<Restaurante> = [];
  mejor: number = 0;
  mejor_restaurante: Restaurante | undefined;
  constructor(private restauranteService: RestauranteService) { }

  mostrarDetalle(selectedRestaurante: Restaurante): void {
    this.restaurantes.forEach(restaurante => {
      restaurante.mostrarDetalle = restaurante === selectedRestaurante && !restaurante.mostrarDetalle;
    });
  }

  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes: Restaurante[]) => {
      this.restaurantes = restaurantes;
      this.mejor = 0;
      this.restaurantes.forEach((restaurante) => {
        if (restaurante.rating > this.mejor) {
          this.mejor = restaurante.rating;
          this.mejor_restaurante = restaurante;
        }
      });
    });
  }

  ngOnInit() {
    this.getRestaurantes();
  }

}