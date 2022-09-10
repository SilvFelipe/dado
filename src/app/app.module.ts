import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MoedaComponent } from './moeda/moeda.component';
import { D3Component } from './d3/d3.component';
import { D4Component } from './d4/d4.component';
import { D5Component } from './d5/d5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    MoedaComponent,
    D3Component,
    D4Component,
    D5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
