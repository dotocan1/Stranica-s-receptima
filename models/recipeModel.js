const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  grocery: { type: Schema.Types.ObjectId, ref: "Grocery", required: true }
});

// Create a virtual property `url`
recipeSchema.virtual('url').get(function () {
  return `/recipe/${this._id}`;
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;