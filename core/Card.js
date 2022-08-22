import m from "mithril"

export class ImageCard {
    constructor(vnode) {
        this.alt = vnode.imageAlt
        this.src = vnode.imageSrc
        this.width = vnode.imageWidth
        this.height = vnode.imageHeight
    }
    view(vnode) {
        // TODO: colocar slide de imagens mudando automaticamente quando colocar o mouse em cima
        return m("img.card-img-top", {src: this.src, alt: this.alt, width: this.width, height: this.height}) 
    }
}

export class Card {
    constructor(vnode) {
        this.id = vnode.id
        this.title = vnode.title
        this.imageSrc = vnode.imageSrc
        this.imageAlt = vnode.imageAlt
        this.imageWidth = vnode.imageWidth
        this.imageHeight = vnode.imageHeight
    }
    view(vnode) {
        return m(".col-xs-12.col-sm-6.col-md-4.col-lg-3", {style: "padding-top: 10px; padding-bottom: 10px;"}, [
            m(".card.border-0.shadow-sm", [
                // TODO: colocar texto alternativo
                m(new ImageCard({imageSrc: this.imageSrc, imageAlt: this.imageAlt, width: "100%", imageHeight: "100px"})),
                m(".card-body", [
                    m(".card-title", [
                        m("a", {href: "#!/project/id"}, this.title),
                    ]),
                ]),
                m(".card-footer.border-0", [
                    m(".btn-group", [
                        // TODO: adicionar o produto no carrinho remoto
                        // TODO: gerenciar estado do carrinho para mudar o icone
                        m("a.btn.shadow-sm", {href: "#!/project/id", title: "Clique para adicionar o projeto no carrinho"}, m("i.bi.bi-cart")),
                        // TODO: salvar remotamente o like
                        // TODO: gerenciar estado do like para mudar o icone
                        m("a.btn.shadow-sm", {href: "#!/project/id/like", title: "Clique se gostar do projeto"}, m("i.bi.bi-hand-thumbs-up")),
                        // TODO: abrir modal com qualificação do produto (estrelas e comentário)
                        // TODO: salvar votos na qualificação do produto
                        m("a.btn.shadow-sm", {href: "#!/product/id"}, m("i.bi.bi-star", "")),
                    ]),
                ]),
            ]),
        ]);
    }
}