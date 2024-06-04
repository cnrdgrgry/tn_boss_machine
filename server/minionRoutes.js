//requiring express and create and instance of Router

const express = require("express");
const router = express.Router();

//requiring database + helperfunctions.

const {
	getAllFromDatabase,
	getFromDatabaseById,
	addToDatabase,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
} = require("./db");

//defining the routes

router.get("/", (req, res) => {
	//get an array of all
	const minions = getAllFromDatabase("minions");
	if (minions) {
		res.status(200).json(minions);
	} else {
		res.status(404).json({ error: "Error 404; Resource not found!" });
	}
});

router.post("/", (req, res) => {
	//create a new minion and save to the db
	const addMinion = addToDatabase("minions", req.body);
	if (addMinion) {
		res.status(200).json(addMinion);
	} else {
		res.status(500).json({ error: "Error 500: Error making minion!" });
	}
});

router.get("/:minionId", (req, res) => {
	const { minionId } = req.params;
	//get a single minion by id
});

router.put("/", (req, res) => {
	const { minionId } = req.params;
	//update a single minion by id
});

router.delete("/", (req, res) => {
	const { minionId } = req.params;
	//delete a single minion by id
});

// exporting the router
module.exports = router;
