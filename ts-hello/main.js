"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var result = new like_component_1.LikeComponent(50, true);
result.likes = 12;
result.isStatus = false;
result.onLiked();
console.log("TotalLikes = " + result.likes + ", Status = " + result.isStatus);
// let point = new Point(1,12);1
// point.draw();
// let x = point.x;
// point.x=12;
