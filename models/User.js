import { Model } from "../core/Model"

export class User extends Model {
    constructor(self) {
        super(self)
        this.username = self.username
        this.password = self.password
        this.telephone = self.telephone
        this.email = self.email
        this.last_access_date = self.last_access_date
    }
    changePassword(password) {
        this.password = password
    }
    login_change_last_access() {
        this.last_access_date = Date.now()
    }
    logout_change_last_access() {
        this.last_access_date = Date.now()
    }
}
