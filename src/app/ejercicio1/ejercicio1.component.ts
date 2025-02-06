import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css',
})
export class Ejercicio1Component {
  title = 'first-proyect';

  // Propiedades
  nombre = 'Demian';
  email = 'demiancr.ti22@usjr.edu.mx';
  aniosServicio = 3;
  activo = true;
  alumnos = [24, 35, 31];
  numero = 2;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 15000,
      descripcion: 'Laptop de 16 pulgadas',
    },
    { id: 2, nombre: 'Mouse', precio: 500, descripcion: 'Mouse inalambrico' },
    { id: 3, nombre: 'Teclado', precio: 1000, descripcion: 'Teclado mecanico' },
  ];

  // Función que muestra si el alumno está activo o no
  estaActivo() {
    return this.activo ? 'El alumno está activo' : 'El alumno no está activo';
  }

  // Función que suma los alumnos del arreglo
  sumarAlumnos() {
    return this.alumnos.reduce((suma, alumno) => suma + alumno, 0);
  }

  // Función que incrementa el contador
  incrementarContador() {
    this.contador++;
  }

  // Función que decrementa el contador
  decrementarContador() {
    this.contador--;
  }

  // Función que habilita/deshabilita el botón
  cambiarValor() {
    this.desactivarBoton = !this.desactivarBoton;
  }
}
