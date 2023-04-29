import { Component } from '@angular/core';

import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})

export class TareasComponent {
  tareas: Array<Tarea> = [];
  tarea: Tarea = {
    titulo: '',
    descripcion: '',
    status: ''
  };

  // al poner private, se crea una propiedad privadade la clase
  constructor(private tareaService: TareaService) {
    this.traerTareas();
  }

  traerTareas() {
    this.tareaService.getTareas().subscribe((response: any) => {
      this.tareas = response;
    });
  }

  //opcion1
  // detectarEnter(event: KeyboardEvent) {
  //   if (event.key === 'Enter') {
  //     this.filtrar();
  //   }
  // }

  setTarea(tarea: Tarea) {
    this.tareaService.getTareas().subscribe((response: any) => {
      this.traerTareas();
    });
  }
}
