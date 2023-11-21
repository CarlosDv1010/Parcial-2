import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetalleComponent } from './serie-detalle/serie-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent, SerieListComponent, SerieDetalleComponent],
  exports: [SerieComponent, SerieListComponent, SerieDetalleComponent]
})
export class SerieModule { }