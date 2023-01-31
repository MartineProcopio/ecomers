const adminRouter = require("express").Router();
const adminProductsRouter = require("./adminProducts.routes");

adminRouter.get("/", (req, res) => {
  res.render("admin/dashboard");
});

adminRouter.use("/products", adminProductsRouter);

module.exports = adminRouter;
