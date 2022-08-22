import m from "mithril"
import {FormLabel, FormInput, FormTextarea, FormSelectOptions} from "../core/Form"

class ContactEmail {
    constructor(vnode) {}
    view(vnode) {
        return m(".form-group.col-xs-12.col-md-6", [
                m(FormLabel, {body: "E-mail"}),
                m(
                    FormInput, {
                        name: "email",
                        type: "email",
                        placeholder: "Seu E-mail"
                    }
                )
            ]
        )
    }
}

class ContactPhone {
    constructor(vnode) {}
    view(vnode) {
        return m(
            ".form-group.col-xs-12.col-md-6", 
            [
                m(FormLabel, {body: "Telefone"}),
                m(
                    FormInput, {
                        name: "phone",
                        type: "tel",
                        placeholder: "Seu Telefone"
                    }
                )
            ]
        )
    }
}

class ContactSubject {
    constructor() {}
    view(vnode) {
        return m(
            ".form-group.col-12",
            [
                m(FormLabel, {body: "Assunto"}),
                m(
                    FormInput, {
                        name: "subject",
                        type: "text",
                        placeholder: "Assunto"
                    }
                )
            ]
        )
    }
}

class ContactMessage {
    constructor(vnode) {}
    view(vnode) {
        return m(
            ".form-group.col-12",
            [
                m(FormLabel, {body: "Conteúdo"}),
                m(FormTextarea, {
                    name: "message",
                    //cols: "10",
                    rows: "5",
                    placeholder: "Sua mensagem aqui"
                })
            ]
        )
    }
}

class FormButtonGroup {
    constructor(vnode) {}
    view(vnode) {
        return m(
            ".form-group.col-12",
            [
                m(
                    "button[type=button].btn.btn-outline-secondary.col-6",
                    "Cancelar"
                ),
                m(
                    "button[type=submit].btn.btn-success.col-6",
                    "Enviar"
                )
            ]
        )
    }
}

export class ContactForm {
    constructor(vnode) {}
    onSubmit(vnode) {
        if (vnode.attrs.email) {
            // TODO: change request to CartService
            m.request({
                method: "POST",
                url: "/api/cart",
                data: {
                    email: vnode.attrs.email,
                    phone: vnode.attrs.phone,
                    subject: vnode.attrs.subject,
                    message: vnode.attrs.message,
                }
            })
        }
    }

    view(vnode) {
        return m("form#contact-form.row", [
            m(".form-group", m("h1", "Entrar em Contato")),
                m(ContactEmail),
                m(ContactPhone),
                m(ContactSubject),
                m(ContactMessage),
                m(".form-group", m("p", "")),
                // buttons
                m(FormButtonGroup)
        ])
    }
}
