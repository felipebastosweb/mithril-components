import { Model } from "../core/Model"

export class Contact extends Model {
    constructor(self) {
        super(self)
        this.email = self.email
        this.telephone = self.telephone
        this.fax = self.fax
        this.site = self.site
    }
}
