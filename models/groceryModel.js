const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  name: String
});

// Create a virtual property `url`
grocerySchema.virtual('url').get(function () {
  return `/grocery/${this._id}`;
});

const Grocery = mongoose.model('Grocery', grocerySchema);

const kruh = new Grocery({ name: 'Kruh' });
// console.log(kruh.name);

// saving models
// await kruh.save();

module.exports = Grocery;