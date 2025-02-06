import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ejemplo4',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.css',
})
export class Ejemplo4Component {
  title = 'ejemplo4';

  //propiedades
  listaTareas: string[];
  tarea = new FormControl();

  //constructor
  constructor() {
    this.listaTareas = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      let datos = localStorage.getItem('tareas');
      if (datos != null) {
        let arregloTareas = JSON.parse(datos);
        if (arregloTareas != null) {
          for (let tarea of arregloTareas) {
            this.listaTareas.push(tarea);
          }
        }
      }
    }
  }

  //agregar tarea
  agregrarTarea() {
    this.listaTareas.push(this.tarea.value);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    this.tarea.setValue('');
  }

  //eliminar tarea
  borrarTarea(indice: number) {
    this.listaTareas.splice(indice, 1);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  //eliminar todas las tareas
  borrarTareas() {
    this.listaTareas = [];
    localStorage.clear();
  }
}
