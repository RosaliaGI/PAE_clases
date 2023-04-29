import { Component } from '@angular/core';

interface Banner {
  titulo: string;
  descripcion: string;
  url?: string;
}


@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {

  banner: Banner = {
    titulo: 'Blah blah',
    descripcion: 'Descriiippp',
    url: 'http://google.com'
  }
}
