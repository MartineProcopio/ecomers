const adminRouter = require("express").Router();
const adminController = require("../../controllers/adminController");

adminRouter.get("/", adminController.index);

module.exports = adminRouter;
