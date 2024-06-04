//requiring express and create and instance of Router

const express = require("express");
const router = express.Router();

//requiring database + helper functions.

const {
	getAllFromDatabase,
	getFromDatabaseById,
	addToDatabase,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
} = require("./db");

//defining the routes

router.get("/", (req, res) => {
	//get all from db
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
	const getMinion = getFromDatabaseById("minions", minionId);
	if (getMinion) {
		res.status(200).json(getMinion);
	} else {
		res.status(404).json({ error: "Error 404; Resource not found!" });
	}
});

router.put("/:minionId", (req, res) => {
	const { minionId } = req.params;
	//update a single minion by id
	if (minionId) {
		const updateMinion = updateInstanceInDatabase("minions", req.body);
		if (updateMinion) {
			res.status(201).json(updateMinion);
		} else {
			res.status(500).json({ error: "Error 500: Error updating minion!" });
		}
	} else {
		res.status(500).json({ error: "Error 500: Invalid information supplied" });
	}
});

router.delete("/:minionId", (req, res) => {
	const { minionId } = req.params;
	//delete a single minion by id
});

// exporting the router
module.exports = router;
