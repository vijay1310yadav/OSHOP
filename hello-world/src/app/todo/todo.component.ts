import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  appTitle: string = "ToDo App";

  New_todo = "";

  todos = [];

  id: number = this.todos.length + 1;
  hidden: boolean;

  addNewTodo() {
    this.todos.push({ id: this.id++, task: this.New_todo });
    this.hidden = true;

  }

  onDelete(task) {

    let taskIndex = this.todos.indexOf(task);
    this.todos.splice(taskIndex, 1);
  }



}
