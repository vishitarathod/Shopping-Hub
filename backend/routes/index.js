import express from 'express'
import auth from './auth.route.js';
import product from './product.route.js';

const router = express.Router()

router.use('/', auth)
router.use('/product', product)

export default router