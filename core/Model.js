
export class Model {
    constructor(self) {
        this.id = (self.id != null)
            ? self.id : null
        this.create_date = (self.create_date != null)
            ? self.create_date : Date.now()
        this.update_date = (self.update_date != null)
            ? self.update_date : Date.now()
    }
}

