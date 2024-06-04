const express = require("express");
const apiRouter = express.Router();

//Import in and mount minion routes

const minionsRoutes = require("./minionsRoutes");
apiRouter.use("./minions", minionsRoutes);

//exporting apiRouter
module.exports = apiRouter;
