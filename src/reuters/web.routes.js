const express = require('express');

const webRouter = express.Router();//instancia de routeador

webRouter.get('/',(req,res)=>{
    res.render('index')
})

module.exports = webRouter