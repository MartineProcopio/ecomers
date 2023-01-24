const server = require('./src/app');
const config = require('./src/config');

server.listen(config.server.port, ()=>{
    console.log('Escuchando en el puerto '+ config.server.port)
})