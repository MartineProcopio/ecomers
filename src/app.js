const express = require('express');
const webRouter = require('./reuters/web.routes');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname,'views')) //acomoda el formato de las carpetas, __dirname carpeta a donde estas

app.set('view engine', 'ejs'); // motor de vistas

app.use(webRouter) //ejecutando ruta de web.routes

module.exports = app