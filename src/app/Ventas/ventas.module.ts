import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { ParaOrdenarComponent } from './pages/para-ordenar/para-ordenar.component';
import { ColorPipe } from './Pipes/color.pipe';
import { MayusculasPipe } from './Pipes/mayusculas.pipe';
import { VuelaPipe } from './Pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    ParaOrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe,
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    ParaOrdenarComponent,
  ],
  imports: [CommonModule, PrimeNGModule],
})
export class VentasModule {}
