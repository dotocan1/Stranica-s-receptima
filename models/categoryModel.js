const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String
});

// Create a virtual property `url`
categorySchema.virtual('url').get(function () {
  return `/category/${this._id}`;
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;