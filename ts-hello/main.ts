import { LikeComponent } from './like.component';

import {Point} from './point';
import {Like} from './like';



let result = new LikeComponent(50, false);
result.onLiked();
console.log(`TotalLikes = ${result.likes}, Status = ${result.isStatus}`);


// let point = new Point(1,12);
// point.draw();
// let x = point.x;
// point.x=12;






