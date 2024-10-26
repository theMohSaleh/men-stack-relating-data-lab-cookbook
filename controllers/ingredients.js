const express = require('express');
const Ingredient = require('../models/ingredient');

const router = express.Router();

// GET - index page
router.get("/", (req, res) => {
    res.send("ingredient index");
});

// GET - new ingrident page
router.get("/new", (req, res) => {
    res.send("ingredient new");
    
});

// POST - create recipe
router.post("/", async (req, res) => {
    res.send("ingrident create post");
    
});

// GET - show page
router.get("/:ingredientId", (req, res) => {
    res.send("ingrident show");
    
});

// GET - edit page
router.get("/:ingredientId/edit", (req, res) => {
    res.send("ingredient edit page");
    
});

// PUT - update ingredient
router.put("/:recipeId", (req, res) => {
    res.send("ingredient update request");
    
});

// PUT - update ingredient
router.delete("/:ingredientId", (req, res) => {
    res.send("test");
    
});


module.exports = router;