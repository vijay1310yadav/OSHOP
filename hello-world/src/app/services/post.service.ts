import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  private url = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) {

  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: false }))

  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }


  deletePost(id) {
    return this.http.delete(this.url + '/' + id)

  }

  getPosts() {
    return this.http.get(this.url);

  }
}
