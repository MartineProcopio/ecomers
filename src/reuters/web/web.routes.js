const express = require("express");
const productControler = require("../../controllers/pruductControler");
const models = require("../../database/models");
const webRouter = express.Router(); //instancia de routeador
const loger = require('../../middlewares/logmiddlware')

webRouter.get("/", loger ,(req, res) => {
  res.render("index");
});

webRouter.post("/products", async (req, res) => {
  const product = await models.Product.create({ name: "Remera", price: 100.5 });
  res.send(product);
});

webRouter.get("/products", productControler.list);

module.exports = webRouter;
