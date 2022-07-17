import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Karina';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'seleccionado',
    femenino: 'seleccionada',
  };
}
