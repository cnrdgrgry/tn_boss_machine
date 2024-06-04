
//requiring express and create and instance of Router

const express = require('express');
const router = express.Router()

//defining the routes

router.get('/', (req, res)
//get an array of all
);

router.post("/", (req, res)
//create a new minion and save to the db
);

router.get("/:minionId", (req, res)
    const { minionId } = req.params;
//get a single minion by id
);

router.put("/", (req, res)
    const { minionId } = req.params;
//update a single minion by id
);

router.delete("/", (req, res)
    const { minionId } = req.params;
//delete a single minion by id
);

// exporting the router
module.exports = router;