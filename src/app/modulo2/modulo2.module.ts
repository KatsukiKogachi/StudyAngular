import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponente2Component } from './modulo-componente2/modulo-componente2.component';

const routes: Routes = [
  {
    path:'componente2',
    component: ModuloComponente2Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Modulo2Module { }
