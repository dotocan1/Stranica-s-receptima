var express = require('express');
var router = express.Router();

const groceryController = require("../controllers/groceryController");
const recipeController = require("../controllers/recipeController");
const categoryController = require("../controllers/categoryController");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Stranica s receptima' });
});

// GROCERY ROUTES

/* GET grocery page with all groceries listed */
router.get('/grocery', groceryController.listAllGroceries);

// GET page for creating groceries
router.get('/grocery/create', groceryController.createGroceryGet);

// POST method for sending data to database


// CATEGORY ROUTES

/* GET grocery page with all groceries listed */
router.get('/category', categoryController.listAllCategories);

// GET page for creating groceries
// router.get('/category/create', categoryController.createGroceryGet);

// POST method for sending data to database



// RECIPE ROUTES

/* GET grocery page with all groceries listed */
router.get('/recipe', recipeController.listAllRecipes);

module.exports = router;
