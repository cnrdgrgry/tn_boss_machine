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

//Require custom middleWare checkMillionDollarIdea
const checkMillionDollarIdea = require("./checkMillionDollarIdea");

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

router.post("/", checkMillionDollarIdea, async (req, res) => {
	try {
		const ideas = await getAllFromDatabase("ideas");
		// Create a new idea and save to the db
		const newId = ideas.length + 1;
		const newIdea = { id: newId, ...req.body };
		const addIdea = await addToDatabase("ideas", newIdea);
		if (addIdea) {
			res.status(201).json(addIdea);
		} else {
			res.status(500).json({ error: "Error 500: Error adding Idea!" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
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
			res.status(404).json({ error: "Error 404: Error updating the idea!" });
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
			res.status(404).json({ error: "Error 404: Error deleting idea!" });
		}
	} else {
		res.status(400).json({ error: "Error 400: Invalid information supplied" });
	}
});

// exporting the router
module.exports = router;
