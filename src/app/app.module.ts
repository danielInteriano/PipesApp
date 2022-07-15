import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/*Módulo personalizado para primeNG*/
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNGModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
