import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLowel: string = 'daniel';
  nombreUpper: string = 'DANIEL';
  nombreCompleto: string = 'DanIeL InTERiaNo';
  fecha: Date = new Date();
}
