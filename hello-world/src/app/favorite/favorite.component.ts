import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input('isFavorite') isFavorite: boolean;

  @Output('change') click = new EventEmitter();

  onClick() {


      this.isFavorite = !this.isFavorite;
    this.click.emit({ valueIs: this.isFavorite });
  }

}

export interface FavoriteChangedArgs {

  valueIs: boolean;
}