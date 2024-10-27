const express = require('express');
const Ingredient = require('../models/ingredient');

const router = express.Router();

// GET - index page
router.get("/", async (req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        res.render('ingredients/index.ejs', { ingredients: ingredients });
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

// GET - new ingrident page
router.get("/new", (req, res) => {
    res.send("ingredient new");
    
});

// POST - create ingredient
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
router.put("/:ingredientId", (req, res) => {
    res.send("ingredient update request");
    
});

// PUT - update ingredient
router.delete("/:ingredientId", (req, res) => {
    res.send("test");
    
});


module.exports = router;