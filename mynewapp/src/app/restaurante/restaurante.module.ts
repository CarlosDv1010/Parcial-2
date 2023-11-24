import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteDetalleComponent } from './restaurante-detalle/restaurante-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestauranteComponent, RestauranteListComponent, RestauranteDetalleComponent],
  exports: [RestauranteComponent, RestauranteListComponent, RestauranteDetalleComponent]
})
export class RestauranteModule { }