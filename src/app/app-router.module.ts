import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './Ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './Ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './Ventas/pages/numeros/numeros.component';
import { ParaOrdenarComponent } from './Ventas/pages/para-ordenar/para-ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'para-ordenar',
    component: ParaOrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
