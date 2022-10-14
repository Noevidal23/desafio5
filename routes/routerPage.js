const router = require('express').Router()
const crud = require('./container/crud')

const producto = new crud


function getId(req, res, next) {
    req.body.id = producto.getId()
    next()
}



router.get('/productos', (req, res) => {
     res.render('view/products', producto.getAll())
})


router.post('/productos', getId, (req, res) => {
    
    producto.createProduct(req.body)
    res.redirect('/productos')
})



router.get('/', (req, res, next) => {
    res.render('view/form')
})


module.exports = router