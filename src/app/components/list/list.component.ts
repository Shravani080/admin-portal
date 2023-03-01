import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],

})
export class ListComponent{
title ='List component'
@Input() beverages: string[];
@Output() dataEvent = new EventEmitter<string[]>();

constructor() {
    this.beverages = [];
}
names: string[] = ['siri', 'sasi', 'diya'];

   sendData() {
    this.dataEvent.emit(this.names);
  }

}