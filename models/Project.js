import { Model } from "../core/Model"

export class Project extends Model {
    constructor(self) {
        super(self)
        this.Owner = self.Owner
        this.title = self.title
        this.description = self.description
        this.objective = self.objective
        this.start_date = self.start_date
        this.end_date = self.end_date
    }
}

export class ProjectTask extends Model {
    constructor(self) {
        super(self)
        this.Project = self.Project
        this.title = self.title
        this.description = self.description
        this.start_date = self.start_date
        this.update_date = self.update_date
    }
    // TODO: convert milisseconds result to days result
    duration() {
        /***
         * Return subtraction of date
         * **/
        return Math.abs(this.end_date - this.start_date)
    }
}