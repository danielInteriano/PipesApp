import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `
      :host ::ng-deep .p-button {
        margin: 0 0.5rem 0 0;
        min-width: 10rem;
      }

      p {
        margin: 0;
      }

      .confirmation-content {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
        min-width: 6rem;
      }
    `,
  ],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Karina';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'seleccionado',
    femenino: 'seleccionada',
  };

  //i18nPlural
  clientes: string[] = ['Ana', 'Lucia', 'Alicia'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  //metodos
  cambiarPersona() {
    if (this.genero == 'femenino') {
      (this.genero = 'masculino'), (this.nombre = 'Josue David');
    } else {
      (this.genero = 'femenino'), (this.nombre = 'Ana Lucia');
    }
  }

  borrarPersona() {
    this.clientes.pop();
  }
}
