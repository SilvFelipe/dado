import { D5Component } from './d5/d5.component';
import { D4Component } from './d4/d4.component';
import { D3Component } from './d3/d3.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MoedaComponent } from './moeda/moeda.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'moeda', component: MoedaComponent},
  {path: 'd3', component: D3Component},
  {path: 'd4', component: D4Component},
  {path: 'd5', component: D5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
