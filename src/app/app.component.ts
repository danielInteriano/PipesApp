import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'daNiel INterIano';
  valor: number = 1000;
  objeto = {
    nombre: 'Daniel',
    apellido: 'Interiano',
    edad: 37,
  };

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);
  }
}
