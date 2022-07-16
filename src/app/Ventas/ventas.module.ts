import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { ParaOrdenarComponent } from './pages/para-ordenar/para-ordenar.component';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    ParaOrdenarComponent,
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    ParaOrdenarComponent,
  ],
  imports: [CommonModule],
})
export class VentasModule {}
