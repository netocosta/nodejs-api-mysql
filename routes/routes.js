const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products', (req, res) => {
  res.send({
    ok: true
  })
})

//router.post('/products', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.remove)

module.exports = router