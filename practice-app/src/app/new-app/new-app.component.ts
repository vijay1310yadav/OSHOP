import { DataService } from './../data.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.scss']
})
export class NewAppComponent implements OnInit {





  constructor(private data: DataService) { }

  isHidden = false;

  todosList;

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  addNewTodo() {
    this.todosList.push(this.data.todosData);

  }

  onDelete(task) {

    let taskIndex = this.todosList.indexOf(task);
    this.todosList.splice(taskIndex, 1);
  }

  onEdit(task) {

    this.todosList.details = "edited details";
    console.log(this.todosList.details);

  }

  ngOnInit() {


    this.todosList = this.data.todosData;

  }


}
