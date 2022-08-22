import { Model } from "../core/Model"


class Purchase extends Model {
    constructor(self) {
        super(self)
        this.Supplier = self.Supplier
        this.items = self.items
    }
}

class PurchaseItem extends Model {
    constructor(self) {
        super(self)
        this.Purchase = self.Purchase
        this.Product = self.Product
        this.Quantity = self.Quantity
        this.Price = self.Price
        this.TotalPrice = self.TotalPrice
    }
}