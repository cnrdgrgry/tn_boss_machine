//requiring express and create and instance of Router

const express = require("express");
const router = express.Router();

//requiring database + helper functions.

const {
	getAllFromDatabase,
	addToDatabase,
	createMeeting,
	deleteAllFromDatabase,
} = require("./db");

//defining the routes

router.get("/", (req, res) => {
	//get all from db
	const meetings = getAllFromDatabase("meetings");
	if (meetings) {
		res.status(200).json(meetings);
	} else {
		res.status(404).json({ error: "Error 404; Resource not found!" });
	}
});

router.post("/", (req, res) => {
	//create a new meeting and save to the db

	const newMeeting = createMeeting();
	const addMeeting = addToDatabase("meetings", newMeeting);
	if (addMeeting) {
		res.status(201).json(addMeeting);
	} else {
		res.status(500).json({ error: "Error 500: Error creating meeting!" });
	}
});

router.delete("/", (req, res) => {
	const meetings = getAllFromDatabase("meetings");
	if (meetings) {
		//delete a ALL meetings in one go

		const deleteMeetings = deleteAllFromDatabase("meetings");
		if (deleteMeetings) {
			res.status(204).json();
		} else {
			res.status(400).json({ error: "Error 400: Error deleting meetings!" });
		}
	} else {
		res.status(400).json({ error: "Error 400: Invalid information supplied" });
	}
});

// exporting the router
module.exports = router;
