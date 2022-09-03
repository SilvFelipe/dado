import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MoedaComponent } from './moeda/moeda.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'moeda', component: MoedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
