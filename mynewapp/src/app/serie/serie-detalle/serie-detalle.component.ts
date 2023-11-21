import { Component, Input } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-detalle',
  templateUrl: './serie-detalle.component.html',
  styleUrls: ['./serie-detalle.component.css']
})
export class SerieDetalleComponent {
  @Input() serie: Serie | undefined;

  constructor() { }
}

