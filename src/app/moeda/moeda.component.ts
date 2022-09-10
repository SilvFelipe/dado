import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emissariesSeted: Array<String> = [];
  emissaries: Array<string> = [
    "ouro", "almas", "mercante", "atena", "ceifador", "sim", "nao"
  ];

  enabled = {
    ouro: false,
    almas: false,
    mercante: false,
    atena: false,
    ceifador: false,
    sim: false,
    nao: false
  };

  disablaed = [
    {'ouro': true},
    {'almas': true},
    {'mercante': true},
    {'atena': true},
    {'ceifador': true},
    {'sim': true},
    {'nao': true}
  ];

  status = this.enabled;

  setEmissary(value: string) {
    if(this.checkEmissary(value)) {
      this.emissariesSeted.push(value);
    }
    this.verifyLength();
  }

  checkEmissary(value: string) {
    if(this.emissariesSeted.includes(value)){
      this.emissariesSeted[0] == value ? this.emissariesSeted.shift() : this.emissariesSeted.pop();
      return false;
    }
    return true;
  }

  verifyLength() {
    var disabled = {};
    for(let emissary of this.emissaries){
      if(this.emissariesSeted.includes(emissary)){

      }
    }
    console.log(disabled);

  }

}
