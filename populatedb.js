#! /usr/bin/env node

console.log('This script populates recipes to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require('async')
const Grocery = require('./models/groceryModel')
const Category = require('./models/categoryModel')
const Recipe = require('./models/recipeModel')

const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Prepare for Mongoose 7

require('dotenv').config()
const mongoDB = process.env.URL_MONGO;

main().catch(err => console.log(err));
async function main () {
  await mongoose.connect(mongoDB);
}

const groceries = []
const categories = []
const recipes = []

function groceryCreate (name, cb) {
  groceryDetail = { name: name }

  const grocery = new Grocery(groceryDetail);

  grocery.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New grocery: ' + grocery);
    groceries.push(grocery)
    cb(null, grocery)
  });
}

function categoryCreate (name, cb) {
  const category = new Category({ name: name });

  category.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New category: ' + category);
    categories.push(category)
    cb(null, category);
  });
}

function recipeCreate (name, category_ID, cb) {
  const recipe = new Recipe({ name: name, category_ID: category_ID });

  recipe.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New recipe: ' + recipe);
    recipes.push(recipe)
    cb(null, recipe);
  });
}


function createGroceries (cb) {
  async.parallel([
    function (callback) {
      groceryCreate('Kruh', callback);
    },
    function (callback) {
      groceryCreate('Sir', callback);
    },
    function (callback) {
      groceryCreate('Mlijeko', callback);
    },
  ],
    // optional callback
    cb);
}


function createCategories (cb) {
  async.parallel([
    function (callback) {
      categoryCreate('Dorucak', callback);
    },
    function (callback) {
      categoryCreate('Rucak', callback);
    },
    function (callback) {
      categoryCreate('Vecera', callback);
    },
  ],
    // optional callback
    cb);
}

function createRecipes (cb) {
  async.parallel([
    function (callback) {
      recipeCreate('Pasta s vrhnjem', '000', callback);
    },
    function (callback) {
      recipeCreate('Pasta s tunom', '001', callback);
    },
  ],
    // optional callback
    cb);
}



async.series([
  createGroceries,
  createCategories,
  createRecipes
],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    }
    else{
      console.log('Shut down the program...');
    }
    // All done, disconnect from database
    mongoose.connection.close();
  });



