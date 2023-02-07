const { fail } = require('assert')
const { assert } = require('console')
const multer = require('multer')
const path = require('path')

//cibfiguracion de donde y como se almacenan las imagenes
const store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, '../','assets','imgs','products'))
    },
    filename:function(req,file,cb){
        cb(null,`product-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

const upload = multer({storage:store})

module.exports = upload