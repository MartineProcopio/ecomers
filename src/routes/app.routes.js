const appRouter = require("express").Router();
const adminRouter = require("./admin/admin.routes")
const logger = require("../middlewares/logmiddlware");
const upload = require("../middlewares/multemiddleware");
const webController = require("../controllers/webController");
const productController = require("../controllers/productController");

appRouter.get("/",logger, webController.index);

appRouter.get("/products/list", productController.list);
appRouter.get("/products/create", productController.create);
appRouter.get('/products/:id', productController.detail);
appRouter
  .post("/products/store", 
  upload.single('imagen'),
      productController.store
  );
appRouter.post("/products/delete", productController.delete);

appRouter.use("/admin", adminRouter);

appRouter.get("/*", webController.error404);

module.exports = appRouter;
