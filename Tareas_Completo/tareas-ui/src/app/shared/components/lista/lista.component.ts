import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];
  itemsFiltrados: any[] = [];
  buscar: string = '';

  @Output() onSeleccted: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.itemsFiltrados = this.items;
  }

  filtrar() {
    const buscar = this.buscar.toLowerCase();
    this.itemsFiltrados = this.items.filter((item) => {
      return item.title?.toLowerCase().includes(buscar);
    });
  }

  seleccionar(item: any) {
    this.onSeleccted.emit(item);
  }
}
