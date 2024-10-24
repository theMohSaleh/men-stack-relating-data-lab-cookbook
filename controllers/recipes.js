const express = require('express');
const Recipe = require('../models/recipe');

const router = express.Router();

// GET - index page
router.get("/", (req, res) => {
    res.send("hddsfdsf");
});

// GET - new recipe page
router.get("/new", (req, res) => {
    res.send("hddsfdsf");
});

// POST - create recipe
router.post("/", async (req, res) => {

});

// GET - show page
router.get("/:recipeId", (req, res) => {
    
});


module.exports = router;