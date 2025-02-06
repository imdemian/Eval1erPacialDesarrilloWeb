import { Routes } from '@angular/router';
import { DadoComponent } from './dado/dado.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dado', pathMatch: 'full' },
  { path: 'dado', component: DadoComponent },
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'ejemplo3', component: Ejemplo3Component },
  { path: 'ejemplo4', component: Ejemplo4Component },
  { path: 'ejemplo5', component: Ejemplo5Component },
];
