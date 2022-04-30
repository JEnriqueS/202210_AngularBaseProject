/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from '@faker-js/faker';

import { ListarCafeComponent } from './listar-cafe.component';
import { Cafe } from '../cafe';
import { HttpClientModule } from '@angular/common/http';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    let cafe1 = new Cafe(1, faker.fake.name, faker.random.arrayElement(['Blend','Café de Origen']),
                faker.address.cityName.toString(), faker.commerce.productName.toString(),
                Number.parseInt(faker.random.number.toString()), faker.image.imageUrl.toString());
    let cafe2 = new Cafe(1, faker.fake.name, faker.random.arrayElement(['Blend','Café de Origen']),
                faker.address.cityName.toString(), faker.commerce.productName.toString(),
                Number.parseInt(faker.random.number.toString()), faker.image.imageUrl.toString());
    let cafe3 = new Cafe(1, faker.fake.name, faker.random.arrayElement(['Blend','Café de Origen']),
                faker.address.cityName.toString(), faker.commerce.productName.toString(),
                Number.parseInt(faker.random.number.toString()), faker.image.imageUrl.toString());
    component.cafes.push(cafe1);
    component.cafes.push(cafe2);
    component.cafes.push(cafe3);

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table with 3 rows', () => {
    expect(debug.queryAll(By.css('tbody tr')).length).toEqual(component.cafes.length);
  });

  it('should create table with 1 header', () => {
    expect(debug.queryAll(By.css('thead tr')).length).toEqual(1);
  });

});
