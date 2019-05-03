import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private service: PostService) {

  }


  createPost(newTitle: HTMLInputElement) {
    let post = { title: newTitle.value }
    newTitle.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response;
          this.posts.splice(0, 0, post);
        },
        error => {
          alert('Unexpected Error occured!');
          console.log(error);
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert('Unexpected Error occured!');
          console.log(error);
        })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404) {
            alert("ERROR: Post has been already deleted...");
          }
          else {
            alert('Unexpected Error occured!');
            console.log(error);
          }
        });
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      }, error => { alert('Unexpected Error occured!') });
  }



}
