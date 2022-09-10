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

  dadoGif: string = "../../assets/dicerolld4.webp"

  moeda: any = {
    url: "../../assets/coinflip.png",
    img: "../../assets/coinflip.png",
    gif: "../../assets/coinflip.gif"
  }

  dado3: any = {
    url: "../../assets/d3.png",
    img: "../../assets/d3.png",
  }

  dado4: any = {
    url: "../../assets/d4.png",
    img: "../../assets/d4.png",
  }

  dado5: any = {
    url: "../../assets/d5.png",
    img: "../../assets/d5.png",
  }

  lados: string = "";

  heigth: number = 1.0125;

}
