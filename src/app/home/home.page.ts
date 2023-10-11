import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  altura: number = 0;
  peso: number = 0;
  imc: number = 0;
  txtMensaje: string = "";
  txtIMC: string = "" ;
  txtIMCIdeal: string = "";

  constructor() { }

  calculoIMC() {
    this.imc = this.peso / (this.altura * this.altura);
    this.clasificacionIMC();
  }

  clasificacionIMC() {
    this.txtIMC= "Su IMC es de " + (this.imc).toFixed(2);
    this.txtIMCIdeal = "El índice de masa corporal ideal se encuentra entre 18.5 y 24.9";

    if (this.imc < 18.5) {
      console.log("Se encuentra con un peso inferior recomendado para su altura");
      this.txtMensaje = "Se encuentra con un peso inferior recomendado para su altura";
    } else if (this.imc > 18.5 && this.imc < 24.9) {
      console.log("Se encuentra dentro del rango saludable para su altura");
      this.txtMensaje = "Se encuentra dentro del rango saludable para su altura";
    } else if (this.imc > 25 && this.imc < 29.9 ) {
      console.log("Tiene un ligero exceso de peso con respecto a lo recomendado para su altura, aunque dentro de lo saludable");
      this.txtMensaje = "Tiene un ligero exceso de peso con respecto a lo recomendado para su altura, aunque dentro de lo saludable";
    } else if (this.imc > 30 && this.imc <34.9){
      console.log("Se encuentra dentro del rango de obesidad leve");
      this.txtMensaje = "Se encuentra dentro del rango de obesidad leve";
    } else if (this.imc > 35 && this.imc <39.9){
      console.log("Se encuentra dentro del rango de obesidad moderada");
      this.txtMensaje = "Se encuentra dentro del rango de obesidad moderada";
    } else if (this.imc >= 40) {
      console.log("Se encuentra dentro del rango de obesidad mórbida");
      this.txtMensaje = "Se encuentra dentro del rango de obesidad mórbida";
    }
  }

  reiniciar() {
    this.clasificacionIMC();
    this.altura = 0;
    this.peso = 0;
    this.imc = 0;
    this.txtMensaje = "";
    this.txtIMC = "" ;
    this.txtIMCIdeal = "" ;
  }

}
