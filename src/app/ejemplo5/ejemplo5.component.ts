import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ejemplo5',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.css',
})
export class Ejemplo5Component {
  title = 'ejemplo5';

  //propiedades
  nombreCliente = '';
  emailcliente = '';
  opinionCliente = '';
  statusCliente = '';
  municipioCliente = '';
  autorizacionCliente = false;

  //declaramos un formulario(formgroup)
  formContacto = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    opinion: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
    status: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    autorizacion: new FormControl(false),
  });

  //metodo que se ejecutra al enviar el formulario
  onSubmit() {
    this.nombreCliente = this.formContacto.value.nombre!;
    this.emailcliente = this.formContacto.value.email!;
    this.opinionCliente = this.formContacto.value.opinion!;
    this.statusCliente = this.formContacto.value.status!;
    this.municipioCliente = this.formContacto.value.municipio!;
  }
}
