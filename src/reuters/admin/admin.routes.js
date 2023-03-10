const adminRouter = require("express").Router();
const adminControler = require("../../controllers/adminControler");
const adminProductsRouter = require("./adminProducts.routes");

adminRouter.get('/',adminControler.index)

adminRouter.use("/products", adminProductsRouter);

module.exports = adminRouter;
