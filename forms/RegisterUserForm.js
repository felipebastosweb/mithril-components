import m from "mithril"

import {FormLabel, FormInput, FormTextarea} from "./Form"

export class RegisterUserForm {
    constructor(vnode) {
        
    }

    view (vnode) {
        return m("form", [
            m("input[type=hidden]", {
                value: this.model.name,
                onchange: m.withAttr("value", this.model.name)
            })
        ]);
    }
}

