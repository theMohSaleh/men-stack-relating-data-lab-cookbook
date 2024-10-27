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

// GET - new ingreidents page
router.get("/new", async (req, res) => {
    res.render('ingredients/new.ejs');
});

// POST - create ingredient
router.post("/", async (req, res) => {
    try {
        const formData = req.body;

        await Ingredient.create(formData);

        res.redirect('/ingredients');
    } catch (error) {
        res.send(error)
    }
});

// DELETE - delete ingredient
router.delete("/:ingredientId", async (req, res) => {
    try {
        const ingredientId = req.params.ingredientId;
        const ingredient = await Ingredient.findById(ingredientId);
        await ingredient.deleteOne();
        res.redirect('/ingredients');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


module.exports = router;