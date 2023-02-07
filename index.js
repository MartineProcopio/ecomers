const http = require('http')
const app = require('./src/app');
const config = require('./src/config');

const server = http.createServer(app)


server.listen(config.server.port, ()=>{
    console.log('Escuchando en el puerto '+ config.server.port)
})

server.on('error',()=>{
    console.log('se produjo un error en el servidor')
})