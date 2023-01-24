const express = require('express');
const models = require('./../database/models')
const webRouter = express.Router();//instancia de routeador

webRouter.get('/',(req,res)=>{
    res.render('index')
})

webRouter.post('/products',async(req,res)=>{
    const product =  await models.Product.create({name:'Remera',price:100.50})
    res.send(product)
})

webRouter.get('/products',async(req,res)=>{
    const products =  await models.Product.findAll()
    res.send(products)
})

module.exports = webRouter