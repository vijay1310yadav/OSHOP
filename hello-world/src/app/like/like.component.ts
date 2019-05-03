import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{

  @Input('likesCount') likesCount: number;
  @Input('isClicked') isLiked: boolean;


   onLiked() {
    // if (this.isLiked == true) {
    //   this.likesCount--;
    // }
    // else {
    //   this.likesCount++;
    // }

    this.likesCount += (this.isLiked) ? -1 :  1;
    this.isLiked = !this.isLiked;
  }


}
