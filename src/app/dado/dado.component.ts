import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuegoDadoComponent } from './components/juego-dado/juego-dado.component';

@Component({
  selector: 'app-dado',
  imports: [RouterOutlet, JuegoDadoComponent],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css',
})
export class DadoComponent {
  title = 'dado';

  //propiedades
  resultado: string = '';
  valor1: number = this.generarAleatorio();
  valor2: number = this.generarAleatorio();
  valor3: number = this.generarAleatorio();

  //funcion que genera un aleatorio entre 1 y 6
  generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //funcion que hace la tiraada y verifica el resultado

  tirarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    //comparamos si los 3 son iguales
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'felicidades ganaste';
    } else {
      this.resultado = ' Lastima , perdiste . Sigue participando';
    }
  }
}
