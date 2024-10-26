const express = require('express');
const Recipe = require('../models/recipe');

const router = express.Router();

// GET - index page
router.get("/", (req, res) => {
    res.send("test");
});

// GET - new recipe page
router.get("/new", (req, res) => {
    res.send("test");
    
});

// POST - create recipe
router.post("/", async (req, res) => {
    res.send("test");
    
});

// GET - show page
router.get("/:recipeId", (req, res) => {
    res.send("test");
    
});

// GET - edit page
router.get("/:recipeId/edit", (req, res) => {
    res.send("test");
    
});

// PUT - update recipe
router.put("/:recipeId", (req, res) => {
    res.send("test");
    
});

// PUT - update recipe
router.delete("/:recipeId", (req, res) => {
    res.send("test");
    
});


module.exports = router;