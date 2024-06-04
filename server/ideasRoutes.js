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
	const ideas = getAllFromDatabase("ideas");
	if (ideas) {
		res.status(200).json(ideas);
	} else {
		res.status(404).json({ error: "Error 404; Resource not found!" });
	}
});

router.post("/", (req, res) => {
	//create a new idea and save to the db
	const addIdea = addToDatabase("ideas", req.body);
	if (addIdea) {
		res.status(201).json(addIdea);
	} else {
		res.status(500).json({ error: "Error 500: Error adding Idea!" });
	}
});

router.get("/:ideaId", (req, res) => {
	const { ideaId } = req.params;
	//get a single idea by id
	const getIdea = getFromDatabaseById("ideas", ideaId);
	if (getIdea) {
		res.status(200).json(getIdea);
	} else {
		res.status(404).json({ error: "Error 404; Resource not found!" });
	}
});

router.put("/:ideaId", (req, res) => {
	const { ideaId } = req.params;
	//update a single idea by id
	if (ideaId) {
		const updateIdea = updateInstanceInDatabase("ideas", req.body);
		if (updateIdea) {
			res.status(200).json(updateIdea);
		} else {
			res.status(500).json({ error: "Error 500: Error updating the idea!" });
		}
	} else {
		res.status(400).json({ error: "Error 400: Invalid information supplied" });
	}
});

router.delete("/:ideaId", (req, res) => {
	const { ideaId } = req.params;
	//delete a single idea by id

	if (ideaId) {
		const deleteIdea = deleteFromDatabasebyId("ideas", ideaId);
		if (deleteIdea) {
			res.status(204).json();
		} else {
			res.status(400).json({ error: "Error 400: Error deleting idea!" });
		}
	} else {
		res.status(400).json({ error: "Error 400: Invalid information supplied" });
	}
});

// exporting the router
module.exports = router;
