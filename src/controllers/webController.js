const {Product} = require( './../database/models')

const webController = {
    error404: (req, res) => {
        res.render('error404');
    },

    index: async(req, res) => {
        const products = await Product.findAll();
        res.render("index", { products });
    }
}

module.exports = webController
