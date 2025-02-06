import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-juego-dado',
  imports: [],
  templateUrl: './juego-dado.component.html',
  styleUrl: './juego-dado.component.css',
})
export class JuegoDadoComponent {
  @Input() valor: string = '';

  // Propiedades
  resultado: string = '';
  valor1: number = this.generarAleatorio();
  valor2: number = this.generarAleatorio();
  valor3: number = this.generarAleatorio();

  //función que genera un aleatorio entre 1 y 6
  generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //función que hace la tirada y verifica el resultado
  tirarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'TRIPLE';
    } else if (
      this.valor1 == this.valor2 ||
      this.valor1 == this.valor3 ||
      this.valor2 == this.valor3
    ) {
      this.resultado = 'DUPLE';
    } else {
      this.resultado = 'NADA';
    }
  }
}
