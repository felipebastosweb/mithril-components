import m from "mithril"

export class Container {
    constructor(self) {
        this.tag = self.tag == null ? "" : self.tag 
        this.class = self.class,
        this.args = self.args
        this.body = self.body
    }
    view() {
        return m(this.tag + this.class, this.args, this.body)
    }
}

export class ContainerFluid extends Container {
    constructor(self) {
        super(self)
        // set .container-fluid if not is substring of this.class
        if(! this.class.match(".container-fluid"))
            this.class = ".container-fluid"
    }
    view = () => super.view()
}

export class HeaderFluid extends Container {
    constructor(self) {
        super(self)
        this.tag = "header"
    }
    view = () => super.view()
}

export class SectionFluid extends Container {
    constructor(self) {
        super(self)
        this.tag = "section"
    }
    view = () => super.view()
}

export class ArticleFluid extends Container {
    constructor(self) {
        super(self)
        this.tag = "article"
    }
    view = () => super.view()
}


export class FooterFluid extends Container {
    constructor(self) {
        super(self)
        this.tag = "footer"
    }
    view = () => super.view()
}