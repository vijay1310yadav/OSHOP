import { AuthorsService } from '../services/authors.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteChangedArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  title = "Authors: "
  authors;

  post = {
    title: "title",
    isFavorite: true
  }

  postLiked = {
    body: "Here is the body of the Tweet...",
    isLiked: false,
    likesCount: 25
  }



  onFavoriteChanged(FavoriteChangedArgs) {
    console.log("Favorite Changed!", FavoriteChangedArgs);
  }


  newTitle: string;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }


}
