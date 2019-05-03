import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  h1Style:boolean = false;
  h1Style1:boolean = false;
  h1Style2:boolean = false;

  users: object;

  btnClick(){
    console.log("Clicked button 1");
    this.h1Style = true;  
    this.data.btnclick();
  }


  btnClick1(){
    console.log("Clicked button 2");
    this.h1Style1 = true;  
  }

  btnClick2(){
    
    this.h1Style2 = true;  
    console.log("Clicked button 3," + this.h1Style2);
  }

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
        this.users = data;
      }
    );
  }

}


