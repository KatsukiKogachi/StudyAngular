import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponente1Component } from './modulo-componente1/modulo-componente1.component';

const routes: Routes = [
  {
    path:'componente1',
    component: ModuloComponente1Component
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Modulo1Module { }
