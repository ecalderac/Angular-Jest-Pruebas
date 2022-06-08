import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

  });

  beforeEach( () => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy(); 
  });

  //Saca una captura al codigo para comprobar si el dia de mañana hubieron cambios este los va a detectar y va a fallar la prueba
  test('debe de hacer match con el snapshot', () => {

    expect(compiled).toMatchSnapshot(); 

  });

  test('increaseBy debe de incrementar basado en el argumento', () => {

    component.increaseBy(5);
    expect( component.counter ).toBe(15); //esta esperando que el valor sea 15 ya que se incia el contado en componente con valor 10 y estamos aumentando en 5 en el test

  });

  test('hacer click en los botones debe de incrementar y decrementar en 1', () => {

    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11)

    buttons[1].click(); //realizando dos click en boton decrementar 
    buttons[1].click();
    expect( component.counter ).toBe(9);

  });

  test('cambiar el counter debe de actualizar la etiqueta h1', () => {

    component.increaseBy(10);
    fixture.detectChanges();

    const h1 = compiled.querySelector('h1') //query selector solo selecciona 1, queryselectorall selecciona mas de uno
    expect( h1?.textContent ).toContain('20'); //detectando el cambio en el html h1 que contenga ahora el valor 20

  });

  //.toContain() = que contega
  //.toBe() = que sea igual
  //toEqual() = para que sea igual a un objeto

});