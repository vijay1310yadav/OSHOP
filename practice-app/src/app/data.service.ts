import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  btnclick(){
    console.log("Clicked button 1 via service");
  }
  getUser(){
    return this.http.get("https://reqres.in/api/users")
  }


  todosData=[
  {id:1,
  title: "Pick a medium.",
  details:`To-do lists come in all shapes and sizes, so it’s all about what works for the individual. 
  Some research suggests writing information by hand helps us remember it better, 
  but if you last picked up a pen in 1995, fear not: There’s a huge range of digital apps that help create personal to-do lists.`
  },
 
  {id:2,
  title:"This is Note:2 Make multiples.",
  details:`Create a few lists of stuff that needs to get done. One should be a master list, 
  with every item you’d like to accomplish in the long-term: Clean out the closet, sign up for a language class, etc. 
  Another can be a weekly project list, with everything that needs to take place in the next seven days. 
  The third should be a HIT (that’s high-impact tasks) list, with the tasks that need to get done today: Call Aunt Sue for her birthday, 
  pick up the dry cleaning, finish that presentation for work. Every day, see which items from the master list and weekly project list should move to the HIT list.`
  },
  
  {id:3,
  title: "Number 3 is to Pick a medium.",
  details:`To-do lists come in all shapes and sizes, so it’s all about what works for the individual.
  Some research suggests writing information by hand helps us remember it better, but if you last picked up a pen in 1995, fear not: There’s a huge range of digital apps that help create personal to-do lists.`
  },
 
  {id:4,
  title:"Make multiples.",
  details:`Create a few lists of stuff that needs to get done. One should be a master list, 
  with every item you’d like to accomplish in the long-term: Clean out the closet, sign up for a language class, etc. 
  Another can be a weekly project list, with everything that needs to take place in the next seven days. 
  The third should be a HIT (that’s high-impact tasks) list, with the tasks that need to get done today: Call Aunt Sue for her birthday, pick up the dry cleaning, finish that presentation for work. Every day, see which items from the master list and weekly project list should move to the HIT list.`
  },
 
  {id:5,
  title: " Number five, Pick a medium.",
  details:`
  To-do lists come in all shapes and sizes, so it’s all about what works for the individual. 
  Some research suggests writing information by hand helps us remember it better, but if you last picked up a pen in 1995, fear not: There’s a huge range of digital apps that help create personal to-do lists.`
  },
 
  {id:6 ,
  title:"No more copied title.",
  details:`Create a few lists of stuff that needs to get done. One should be a master list, with every item you’d like to accomplish in the long-term: Clean out the closet, sign up for a language class, etc. Another can be a weekly project list, with everything that needs to take place in the next seven days. The third should be a HIT (that’s high-impact tasks) list, with the tasks that need to get done today: Call Aunt Sue for her birthday, pick up the dry cleaning, finish that presentation for work. Every day, see which items from the master list and weekly project list should move to the HIT list.`
  }];
  
  


}
