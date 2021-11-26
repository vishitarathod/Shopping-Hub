import express from 'express'
import productController from '../controllers/product.controller.js'
import upload from '../helper/uploadImage.js'

const router = express.Router()

router.post('/createProduct', upload.single('product_image'), productController.createProduct)

router.get('/getAllProducts', productController.getAllProducts)

router.get('/getProductById/:id', productController.getProductById)

router.put('/updateProduct/:id', productController.updateProduct)

router.delete('/deleteProduct/:id', productController.deleteProduct)

export default router