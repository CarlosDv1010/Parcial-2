/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteListComponent } from './restaurante-list.component';
import { RestauranteDetalleComponent } from '../restaurante-detalle/restaurante-detalle.component';

describe('RestauranteListComponent', () => {
  let component: RestauranteListComponent;
  let fixture: ComponentFixture<RestauranteListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteListComponent , RestauranteDetalleComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});