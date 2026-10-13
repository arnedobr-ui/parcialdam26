const express = require('express')
const router = express.Router()
const {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productosController')

router.get('/producto', getProductos)       // <-- revisar esta línea
router.post('/productos', createProducto)
router.put('/productos/:id', updateProducto)
router.delete('/productos/:id', deleteProducto)

module.exports = router
