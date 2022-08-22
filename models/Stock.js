import { Model } from "../core/Model"

export class Stock extends Model {
    constructor(self) {
        super(self)
    }
}

export class IncomingStock extends Model {
    constructor(self) {
        super(self)
        this.Purchase = self.Purchase
    }
}

export class OutgoingStock extends Model {
    constructor(self) {
        super(self)
        this.OrderProduct = self.OrderProduct
    }
}