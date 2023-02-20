const mongoose = require('mongoose');

const namirnicaSchema = new mongoose.Schema({
    name: String
  });

// Create a virtual property `url` that's computed from `email`.
userSchema.virtual('url').get(function() {
    // return this.email.slice(this.email.indexOf('@') + 1);
  });

  const Namirnica = mongoose.model('Namirnica', namirnicaSchema);

const kruh = new Namirnica({ name: 'Kruh' });
// console.log(kruh.name);

// saving models
// await kruh.save();