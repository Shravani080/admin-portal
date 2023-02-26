import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// interface PersonI {
//   name: string,
//   age: number,
//   country: string,
// }

export class AppComponent {
  title: string = 'admin-portal';
  age: number = 23;
  person = {name:'shravani',age: 22, country: ""};
  todos = ['React','Angular','View'];
  isAdmin = false
  users = [
    {name:'chinni',age:22,country:'india'},
    {name:'kanny',age:21,country:'india'},
    {name:'tinku',age:26,country:'india'},
  ]

}
