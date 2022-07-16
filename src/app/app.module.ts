import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

/*Módulo personalizado para primeNG*/
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './Ventas/ventas.module';

/*Cambiar el locale de la app*/
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeES);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, VentasModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-HN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
