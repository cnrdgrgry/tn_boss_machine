const express = require("express");
const apiRouter = express.Router();

//Import in and mount minion routes

const minionRoutes = require("./minionRoutes");
apiRouter.use("/minions", minionRoutes);

//Import in and mount idea routes

const ideaRoutes = require("./ideasRoutes");
apiRouter.use("/ideas", ideaRoutes);

//exporting apiRouter
module.exports = apiRouter;
