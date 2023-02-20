const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String
});

// Create a virtual property `url`
recipeSchema.virtual('url').get(function () {
  return `/recipe/${this._id}`;
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const kruh = new Recipe({ name: 'Kruh' });
// console.log(kruh.name);

// saving models
// await kruh.save();

module.exports = Recipe;