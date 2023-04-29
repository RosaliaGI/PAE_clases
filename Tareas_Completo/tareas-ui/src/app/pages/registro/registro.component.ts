import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent {
  formRegistro: FormGroup;

  // le puedo quitar el private porque solo lo uso aquí
  constructor(formBuilder: FormBuilder) {
    this.formRegistro = formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
      accept: [false, Validators.requiredTrue],
    }
    );
  }
}
