import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  @Input() n1: string;

  constructor() {}

  ngOnInit() {}

  tabuada() {
    let div: HTMLElement = document.getElementById('container');
    for (var i = 0; i < 11; i++) {
      let resultado = this.n1 + ' x ' + ' = ' + Number(this.n1) * i;
      div.innerHTML += resultado;
    }
  }
}
