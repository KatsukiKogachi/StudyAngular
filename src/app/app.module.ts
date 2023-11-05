import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ModuloComponente1Component } from './modulo1/modulo-componente1/modulo-componente1.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    ModuloComponente1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
