const express = require('express');
const Recipe = require('../models/recipe');

const router = express.Router();

// GET - index page
router.get("/", async (req, res) => {
    try {
        const populatedrecipes = await Recipe.find({}).populate('owner');

        res.render('recipes/index.ejs', { recipes: populatedrecipes });
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

// GET - new recipe page
router.get("/new", (req, res) => {
    res.render('recipes/new.ejs');
});

// POST - create recipe
router.post("/", async (req, res) => {
    try {
        const formData = req.body;

        formData.owner = req.session.user._id;

        await Recipe.create(formData);

        res.redirect('/recipes');
    } catch (error) {
        res.send(error)
    }
});

// GET - show page
router.get("/:recipeId", async (req, res) => {
    try {
        const recipeId = req.params.recipeId;
        const recipe = await Recipe.findById(recipeId).populate('owner');

        res.render('recipes/show.ejs', { recipe })
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// GET - edit page
router.get("/:recipeId/edit", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        res.render('recipes/edit.ejs', { recipe });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// PUT - update recipe
router.put("/:recipeId", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        if (recipe.owner.equals(req.session.user._id)) {
            await recipe.updateOne(req.body)
            res.redirect('/recipes')
        } else {
            res.send("You don't have permission to do that.");
        }
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// DELETE - delete recipe
router.delete("/:recipeId", async (req, res) => {
    try {
        const recipeId = req.params.recipeId;
        const recipe = await Recipe.findById(recipeId);
        if (recipe.owner.equals(req.session.user._id)) {
            await recipe.deleteOne();
            res.redirect('/recipes');
        } else {
            res.send("You don't have permission to do that");
        }
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


module.exports = router;