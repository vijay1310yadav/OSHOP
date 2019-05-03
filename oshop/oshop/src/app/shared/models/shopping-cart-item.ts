
export class ShoppingCartItems {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<ShoppingCartItems>) {
        Object.assign(this, init);
    }

    get totalPrice() { return this.price * this.quantity; }
}


// import { Product } from 'src/app/models/product';

// export class ShoppingCartItems {

//     constructor(public product: Product,
//         public quantity: number) { }

//     get totalPrice() {
//         return this.product.price * this.quantity;
//     }
// }