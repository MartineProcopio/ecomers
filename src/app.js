const express = require("express");
const appRouter = require("./routes/app.routes");
const path = require("path");

const app = express();

app.use(express.json()); //para que entienda json
app.use(express.urlencoded({ extended: false })); //para que entienda formularios
app.use(express.static(path.join(__dirname,'assets','imgs','products')))

app.set("views", path.join(__dirname, "views")); //acomoda el formato de las carpetas, __dirname carpeta a donde estas
app.set("view engine", "ejs"); // motor de vistas

app.use(appRouter); //ejecutando ruta de web.routes

module.exports = app;
