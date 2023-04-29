import { Component } from '@angular/core';
import { Tarea } from 'src/app/shared/interfaces/tarea';	// <--- Importa la interfaz

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  tareas: Array<Tarea> = [];  // <--- Declara la variable tareas como un array de Tarea, en este se puede Array<string|number>
  cargando: boolean = false;

  cadenaONumero: string | number; // <--- Declara la variable como string o number, si no se incialiaza s epuede usar constructor
  constructor() {
    this.cadenaONumero = 0;
    this.cargando = true;
    setTimeout(() => {
      this.tareas = [
        { titulo: 'Tarea 1', descripcion: 'Descripción de la tarea 1', status: 'Pendiente' },
        { titulo: 'Tarea 2', descripcion: 'Descripción de la tarea 2', status: 'nueva' }]
      this.cargando = false;
    }, 3000);
  }

  //tareas: Tarea[] = [];  // <--- Declara la variable tareas como un array de Tarea

}
