import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: String = 'Rosalía';

  constructor() {
    setTimeout(() => {
      this.nombre = 'María';
    }, 3000);
  }
}
