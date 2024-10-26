const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredients',
        }
    ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;