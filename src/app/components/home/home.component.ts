import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: String = 'Rafael Souza';
  zeros: String = '00';
  raNumber: number = 50832021008;
  currentDate = new Date();

  constructor() {}

  ngOnInit() {}

  getName(): String {
    return this.name;
  }

  getRaNumber(): number {
    return this.raNumber;
  }

  getZeros(): String {
    return this.zeros;
  }

  getCompleteNumber(): String {
    return 'RA: ' + this.getZeros().toString() + this.getRaNumber().toString();
  }

  getDate(): Date {
    return this.currentDate;
  }
}
