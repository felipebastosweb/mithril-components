import { Model } from "../core/Model";

/***
 * https://www.sohamkamani.com/javascript/enums/
 * **/

const CartStatus = {
    started: 0,
    buying: 1,
    draft: 7,
    ended: 9,
}

export class Cart extends Model {
    //
    constructor(self) {
        super(self)
        this.quantityItems = self.quantityItems
        this.items = self.items
        this.total_price = self.total_price
        this.cartStatus = self.CartStatus
    }

    addItem(item) {
        if(item == null) {
            //
        }
        this.items.push(item)
        // TODO: change to a observer pattern
        
        this.calculate_total_price_of_items()
    }

    incrementQuantityItems() {
        this.quantityItems += 1
    }

    decrementQuantityItems() {
        this.quantityItems -= 1
    }

    removeItem(item) {
        if (item == null) {
            //
            return
        }
        index = this.items.indexOf(item)
        // no index with undefined item value
        this.items.splice(index, 1)
    }

    calculate_total_price_of_items() {
        this.items.forEach(item => {
            this.total_price += item.total_price
        });
    }


}

export class CartItem extends Model {
    constructor(self) {
        super(self)
        this.Cart = self.Cart
        this.Product = self.Product
        this.quantity = self.quantity
        this.total_price = 0
    }

    calculate_total_price() {
        this.total_price = this.Product.price * this.quantity
        return this.total_price
    }
    // TODO: ao mudar a quantity recalcular o total_price
}