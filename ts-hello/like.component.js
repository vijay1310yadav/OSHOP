"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likes, isStatus) {
        this.likes = likes;
        this.isStatus = isStatus;
    }
    LikeComponent.prototype.onLiked = function () {
        if (this.isStatus == true) {
            this.likes--;
        }
        else {
            this.likes++;
        }
        this.isStatus = !this.isStatus;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
