const appRouter = require("express").Router();
const webRouter = require("./web/web.routes");
const adminRouter = require("./admin/admin.routes");

appRouter.use("/", webRouter);
appRouter.use("/admin", adminRouter);

appRouter.get("/*", (req, res) => {
  res.send("404");
});

module.exports = appRouter;
