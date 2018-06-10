import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola, esta es una etiqueta párrafo
    </p>
    <button class="btn btn-dark mx-2" (click)="tamano = tamano + 5">
     <i class="fa 2x fa-plus"></i>
    </button>

    <button class="btn btn-dark mx-2" (click)="tamano = tamano - 5">
     <i class="fa 2x fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 15;

  constructor() { }

  ngOnInit() {
  }

}
