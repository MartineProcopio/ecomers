const adminProductsRouter = require("express").Router();
const models = require("../../database/models");

adminProductsRouter.get("/create", (req, res) => {
  const error = req.query.error;
  res.render("admin/products/add", { error });
});

adminProductsRouter.post("/", async (req, res) => {
  try {
    const { name, price } = req.body;

    // equivale a ...
    // const name = req.body.name;
    // const price = req.body.price;
    const product = await models.Product.create({
      name,
      price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.redirect("/admin/products");
  } catch (error) {
    console.error(error);
    res.redirect("/admin/products/create?error=campos incorrecotos");
  }
});

module.exports = adminProductsRouter;
