import m from "mithril"

class Toast {
    constructor(vnode) {
        this.title = vnode.title
        this.datetime = vnode.datetime
        this.message = vnode.message
        this.alt = vnode.alt
    }
    view(vnode) {
        return
            m(".toast", {
                role:"alert",
                "aria-live": "assertive",
                "aria-atomic": "true"
            },
            [
                m(".toast.header", [
                    m("img.rounded-me-2", {alt: this.alt}),
                    m("strong.me-auto", this.title),
                    m("small", this.datetime),
                    m("button.btn-close", {
                        "data-bs-dismiss": "toast",
                        "aria-label": "Close"
                    })
                ]),
                m(".toast-body", this.message)
            ]
        )
    }
}
