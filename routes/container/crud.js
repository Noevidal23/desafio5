class crud {
    catalogo = {
        inventario: false,
        productos: []
    }

    getId() {
        this.catalogo.inventario = true
        const len = this.catalogo.productos.length
        if (len > 0) {
            return len + 1
        }
        else
            return 1
    }

    getAll() {
        return this.catalogo
    }

    createProduct(object) {
        this.catalogo.productos.push(object)
       
    }
}

module.exports = crud