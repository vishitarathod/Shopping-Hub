import Product from "../models/product.js"

class ProductController {
    createProduct = async (req, res) => {
        try {
            var fileinfo = req.file;
            const product = await Product.create({ ...req.body, product_image: fileinfo.filename })
            res.send(product)
        } catch (error) {
            res.send(error)
        }
    }

    getAllProducts = async (req, res) => {
        try {
            const products = await Product.findAll()
            res.json({count:products.length , products})
        } catch (error) {
            res.send(error)
        }
    }

    getProductById = async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id)
            const fileName=product.product_image.toString('utf8')
            res.json({product,fileName})
        } catch (e) {
            res.status(404).send(e.message)
        }
    }

    updateProduct = async (req, res) => {
        res.send('login success')
    }

    deleteProduct = async (req, res) => {
        try {
            await Product.destroy({
                where: { id: req.params.id }
            })
            res.send("Delete success!")
        } catch (error) {
            res.send(error)
        }
    }

}

export default new ProductController()