import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ViewMode = 'random';

  courses =[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}

  ]

  id:number = this.courses.length +1;


  courseName = '';

  onAdd(){

    this.courses.push({id:this.id ++,name:this.courseName});
  }

  onDel(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  ngOnInit() {
  }

}
