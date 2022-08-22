import { Model } from "../core/Model"

export class OrderProduct extends Model  {
    constructor(self) {
        super(self)
        this.Customer = self.Customer
    }
}

export class ProductItem extends Model  {
    constructor(self) {
        super(self)
        this.OrderProduct = self.OrderProduct
        this.Product = self.Product
    }
}


export class OrderService extends Model  {
    constructor(self) {
        super(self)
        this.customer = self.customer
    }
}

export class ServiceItem extends Model {
    constructor(self) {
        super(self)
    }
}