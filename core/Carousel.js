import m from "mithril"

class Carousel {
    constructor(vnode) {
        this.items = []
    }
    view(vnode) {
        return m(".carousel.slide", {"data-bs-ride": "carousel"}, [
            m(".carousel-inner", [
                m(".carousel-item.active", [
                    m("img.d-block.w-100", {src: "", alt: ""})
                ])
            ])
        ])
    }
}
