import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  beverages = ['milk', 'tea', 'juice','wine'];
  receivedData: string[];

  constructor() {
    this.receivedData = []; 
  }
  receiveData(data: string[]) {
    this.receivedData = data;
  }
}
