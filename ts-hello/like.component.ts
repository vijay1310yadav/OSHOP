


export class LikeComponent{

    constructor(private _likes:number, private _isStatus:boolean){

    }

    onLiked(){
        if (this._isStatus == true){
            this._likes --;

        }
        else{
            this._likes ++;
        }
        this._isStatus = !this._isStatus;
    }

    get likes(){
        return this._likes;
    }
    get isStatus(){
        return this._isStatus;
    }

}