const ProductsModel = require('../models/products');

async function get(req, res) {
  const { id } = req.params

  const products = id ?
    await ProductsModel.findOne({ id }) :
    await ProductsModel.find()

  res.send(products)
}

async function post(req, res) {
  const {
    name, brand, price
  } = req.body

  await ProductsModel.create({
    name: name,
    brand: brand,
    price: price,
  })

  res.send({
    message: 'success'
  })
}

async function put(req, res) {
  const { id } = req.params

  const product = await ProductsModel.update(id, req.body, { new: true })

  res.send({
    message: 'success',
    product: product.item,
  })
}

async function remove(req, res) {
  //
}

module.exports = {
  get,
  post,
  put,
  remove
}
