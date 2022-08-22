import m from "mithril"

export class FormLabel {
    constructor(self) {
        this.for = self.for
        this.body = self.body
    }
    view() {
        return m("label.form-label", {
                for: this.for
            },
            this.body
        )
    }
}

export class FormInput {
    constructor(self) {
        this.id = self.id
        this.name = self.name
        this.type = self.type
        this.placeholder = self.placeholder
        this.required = self.required
        this.readonly = self.readonly
        this.value = self.value
        this.min = self.min
    }
    view () {
        return m("input.form-control", {
            id: this.id,
            name: this.name,
            type: this.type,
            placeholder: this.placeholder,
            required: this.required,
            readonly: this.readonly,
            value: this.value,
            min: this.min
        })
    }
}

export class FormTextarea {
    constructor(self) {
        this.id = self.id
        this.name = self.name
        this.cols = self.cols
        this.rows = self.rows
        this.value = self.value
        this.placeholder = self.placeholder
    }
    view() {
        return m("textarea.form-control", {
            id: this.id,
            name: this.name,
            cols: this.cols,
            rows: this.rows,
            value: this.content,
            placeholder: this.placeholder,
        })
    }
}

export class FormSelectOptions {
    constructor(self) {}
    view(vnode) {
        return m("select.form-control", {
                name: this.name,
                type: this.type
            },
            [
                this.options.forEach(element => {
                  m(
                    "option",
                    {
                        value: element.value,
                    }),
                    element.body
                })
            ]
        )
    }
}
