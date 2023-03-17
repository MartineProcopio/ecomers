const {Product} = require('./../database/models')

const productController = {
    list: async (req,res)=>{
        const products = await Product.findAll()
        res.render('admin/products/list',{products})
    },

    create: (req, res) =>{
        const error = req.query.error
        res.render('admin/products/add', {error})
    },
    store: async(req, res) =>{
        try {
            const { name, price } = req.body;
        
            // equivale a ...
            // const name = req.body.name;
            // const price = req.body.price;
            await Product.create({
              name,
              price,
              imagen:req.file.filename,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            res.redirect("/admin/products/list");
          } catch (error) {
            console.error(error);
            res.redirect("/admin/products/create?error=campos_incorrecotos");
          }
    },

    delete: async(req, res) =>{
        console.log(req)
        console.log(res)
    },
}

module.exports = productController