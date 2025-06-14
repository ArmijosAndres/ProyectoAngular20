import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  public numero1: number=0;
  public numero2: number=0;
  public resultado: number=0;

  //este metodo se ejecuta cuando todo el html se carga.
  ngOninit(): void{
    
  }

  sumar(){
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(){
    this.resultado = this.numero1 / this.numero2;
  }



}
