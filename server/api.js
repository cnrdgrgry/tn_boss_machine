const express = require("express");
const apiRouter = express.Router();

//Import in and mount minion routes

const minionRoutes = require("./minionRoutes");
apiRouter.use("/minions", minionRoutes);

//Import in and mount idea routes

const ideaRoutes = require("./ideasRoutes");
apiRouter.use("/ideas", ideaRoutes);

//Import in and mount meeting routes

const meetingRoutes = require("./meetingsRoutes");
apiRouter.use("/meetings", meetingRoutes);

//exporting apiRouter
module.exports = apiRouter;
