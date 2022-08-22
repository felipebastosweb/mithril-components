import { Model } from "../core/Model"


export class Product extends Model {
    constructor(self) {
        super(self)
        this.title = self.title
        this.description = self.description
        this.price = self.price
    }
    
}
