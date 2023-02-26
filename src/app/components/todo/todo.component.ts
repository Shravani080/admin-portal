import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  title: string = 'my-todos';
  todos = ['Angular', 'React', 'Vue', 'Flutter'];
  newTodo: any = '';
  editTodo: any = null;

  onDelete(index: number) {
    this.todos.splice(index, 1);
  }
  onEdit(index: number) {
    this.editTodo = index;
    this.newTodo = this.todos[index];
  }
  // onAdd() {
  //   this.todos.push(this.newTodo);
  //   this.newTodo = '';
  // }
  // onUpdate() {
  //   this.todos[this.editTodo] = this.newTodo;
  //   this.editTodo = null;
  //   this.newTodo = '';
  // }

  onAddOrUpdate() {
    if (this.editTodo === null) {
      this.todos.push(this.newTodo);
    } else {
      this.todos[this.editTodo] = this.newTodo;
      this.editTodo = null;
    }
    this.newTodo = '';
  }
}
