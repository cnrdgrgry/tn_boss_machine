const express = require("express");
const apiRouter = express.Router();

//Import in and mount minion routes

const minionRoutes = require("./minionRoutes");
apiRouter.use("/minions", minionRoutes);

//exporting apiRouter
module.exports = apiRouter;
