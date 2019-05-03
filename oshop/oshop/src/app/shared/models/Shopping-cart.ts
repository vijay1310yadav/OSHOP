

import { ShoppingCartItems } from './shopping-cart-item';
import { Product } from './product';
export class ShoppingCart {
    items: ShoppingCartItems[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItems }) {
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItems({ ...item, id: productId }));
        }
    }


    // Object.assign(x, item);
    // x.id = productId;
    // this.items.push(x);

    // this.items.push(new ShoppingCartItems(item.product, item.quantity));

    //     }
    // }


    // constructor(public itemsMap: { [productId: string]: ShoppingCartItems }) {
    //     for (let productId in itemsMap) {
    //         let item = itemsMap[productId];
    //         this.items.push(new ShoppingCartItems(item.product, item.quantity));
    //     }
    // }


    getQuantity(product: Product) {
        // console.log(product);
        let item = this.itemsMap[product.id];
        // console.log("This is the product", item);
        return item ? item.quantity : 0;
    }


    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }





    // items: ShoppingCartItems[] = [];
    // constructor(public itemsMap: { [productId: string]: ShoppingCartItems }) {
    //     for (let productId in itemsMap)
    //         this.items.push(itemsMap[productId]);
    // }
    // get totalItemsCount() {
    //     let count = 0;
    //     for (let productId in this.itemsMap)
    //         count += this.itemsMap[productId].quantity;
    //     return count;
    // }
}

// import { ShoppingCartItems } from './shopping-cart-item';

// export class ShoppingCart {

//     constructor(public items: { [key: string]: ShoppingCartItems }) { }

//     get productIds() {
//         return Object.keys(this.items);
//     }

//     get totalItemsCount() {
//         let count = 0;
//         for (let productId in this.items)
//             count += this.items[productId].quantity;
//         // console.log("This is a count: ", count)
//         return count;
//     }
// }