import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) {

  }

  changePath() {
    this.router.navigate(['moeda']);
  }

  ngOnInit(): void {
    console.log("Oi");
  }

  url: string = "../../assets/coinflip.png";

  toGif() {
    this.url = "../../assets/coinflip.gif";
  }

  toImg() {
    this.url = "../../assets/coinflip.png";
  }

}
