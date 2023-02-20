const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String
});

// Create a virtual property `url`
categorySchema.virtual('url').get(function () {
  return `/category/${this._id}`;
});

const Category = mongoose.model('Category', categorySchema);

const kruh = new Category({ name: 'Kruh' });
// console.log(kruh.name);

// saving models
// await kruh.save();

module.exports = Category;