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
  clientes: string[] = ['Ana', 'Lucia', 'Alicia', 'Carmen', 'Stephany'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  //Pipe: KeyValue
  persona = {
    nombre: 'Daniel',
    edad: 37,
    direccion: 'Tegucigalpa, Honduras',
  };

  //Pipe: Json
  heroes = [
    {
      nombre: 'Superman',
      poderes: 'Fuerza y vuela',
      debilidad: 'criptonita',
    },
    {
      nombre: 'Batman',
      poderes: 'inteligencia y vuela',
      debilidad: 'su familia',
    },
    {
      nombre: 'Thor',
      poderes: 'Mionnirg',
      debilidad: 'Jenh Foster',
    },
    {
      nombre: 'Aeroman',
      poderes: 'Inteligencia',
      debilidad: 'El mismo',
    },
    {
      nombre: 'Viuda Negra',
      poderes: 'Audaz y combate cuerpo a cuerpo',
      debilidad: 'sus amigos',
    },
  ];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  cerrarModal() {
    this.displayModal = false;
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
