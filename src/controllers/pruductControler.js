const db = require('./../database/models')

const productControler = {
    list: async (req,res)=>{
        const products = await db.Product.findAll()
        res.render('admin/products/list',{products})
    }
}

module.exports = productControler