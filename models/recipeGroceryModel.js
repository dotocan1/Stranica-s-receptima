const mongoose = require('mongoose');

const groceryRecipeSchema = new mongoose.Schema({
    grocery: { type: Schema.Types.ObjectId, ref: "Grocery", required: true },
    recipe: { type: Schema.Types.ObjectId, ref: "Recipe", required: true }
});

const RecipeGrocery = mongoose.model('RecipeGrocery', grocerySchema);

module.exports = Grocery;