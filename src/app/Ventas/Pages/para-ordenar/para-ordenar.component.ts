import { Component } from '@angular/core';
import { Color, Heroe } from '../../Interfaces/ventas.interfaces';

@Component({
  selector: 'app-para-ordenar',
  templateUrl: './para-ordenar.component.html',
  styles: [],
})
export class ParaOrdenarComponent {
  enMayusculas: boolean = true;
  criterioOrden: string = 'sin valor';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Depool',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Airoman',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    },
  ];

  //Método para cambiar la propiedad enMayusculas del pipe
  cambiarEnMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  //Método para ordenar la tabla según el criterio enviado
  cambiarOrden(valor: string) {
    this.criterioOrden = valor;
  }
}
