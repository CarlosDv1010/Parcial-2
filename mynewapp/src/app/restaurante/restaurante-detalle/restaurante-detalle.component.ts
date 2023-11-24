import { Component, Input } from '@angular/core';
import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-restaurante-detalle',
  templateUrl: './restaurante-detalle.component.html',
  styleUrls: ['./restaurante-detalle.component.css']
})
export class RestauranteDetalleComponent {
  @Input() restaurante: Restaurante | undefined;

  constructor() { }
}

