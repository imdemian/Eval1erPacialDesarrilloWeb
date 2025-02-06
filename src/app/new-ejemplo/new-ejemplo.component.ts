import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-ejemplo',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './new-ejemplo.component.html',
  styleUrl: './new-ejemplo.component.css',
})
export class NewEjemploComponent {
  formFeedback: FormGroup;
  formularioEnviado = false;

  datosCliente = {
    nombre: '',
    correo: '',
    clienteFrecuente: '',
    ciudad: '',
    comentarios: '',
    permisoDatos: false,
  };

  constructor(private fb: FormBuilder) {
    this.formFeedback = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      clienteFrecuente: ['', Validators.required],
      ciudad: ['', Validators.required],
      comentarios: ['', [Validators.required, Validators.minLength(10)]],
      permisoDatos: [false],
    });
  }

  enviarFormulario() {
    if (this.formFeedback.valid) {
      this.formularioEnviado = true;
      this.datosCliente = this.formFeedback.value;
    }
  }
}
