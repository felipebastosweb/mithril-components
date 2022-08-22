import m from "mithril"
import { FormInput } from "../core/Form"
//import { CartItem } from "../models/Cart"

export class CartItemForm {
    constructor(self) {
        //this.CartItem = self.CartItem
        this.CartItem = {}
        this.CartItem.Product = {name: "product fake"}
        this.CartItem.quantity = 1
    }
    view(vnode) {
        return m(".row.form-group.border", {style: "margin-top: 10px; margin-bottom: 10px;"}, [
            m(".col-6", this.CartItem.Product.name),
            m(".col-2", [
                m(FormInput, {
                    name: "cartItem",
                    type: "number",
                    value: this.CartItem.quantity,
                    min: "0",
                    placeholder: ""
                })
            ]),
            m(".col-1", [
                m("button.btn", [
                    m("i.bi.bi-trash")
                ])
            ])
        ])
    }
}

export class CartButtonGroup {
    constructor(self) {}
    view(vnode) {
        return m(".form-group.col-12",
        [
            m("button[type=button].btn.col-4", "Cancelar"),
            m(
                "button[type=button].btn.btn-outline-secondary.col-4",
                "Salvar Rascunho"
            ),
            m(
                "button[type=submit].btn.btn-success.col-4",
                "Finalizar Compra"
            )
        ])
    }
}

export class CartForm {
    constructor(self) {}
    view(vnode) {
        return m("form#cart-form", [
                m(".form-group", m("p", "")),
                m(CartItemForm),
                m(CartItemForm),
                m(CartItemForm),
                m(CartItemForm),
                m(".form-group", m("p", "")),
                // buttons
                m(CartButtonGroup)
        ])
    }
}