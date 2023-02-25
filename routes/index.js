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

// GET page for reading a certain grocery
router.get('/grocery/:groceryId', groceryController.createCertainGroceryGet);

// POST method for sending data
router.post('/grocery/create', groceryController.createGroceryPost);

// POST method for deleting a grocery
router.post('/grocery/delete', groceryController.deleteGrocery);

// POST method for updating a grocery
router.post('/grocery/update', groceryController.updateGrocery);

// CATEGORY ROUTES

/* GET grocery page with all groceries listed */
router.get('/category', categoryController.listAllCategories);

// GET page for creating groceries
router.get('/category/create', categoryController.createCategoryGet);

// GET page for reading a certain category
router.get('/category/:categoryId', categoryController.createCertainCategoryGet);

// POST method for sending data to database

// RECIPE ROUTES

/* GET recipe page with all recipes listed */
router.get('/recipe', recipeController.listAllRecipes);

// GET page for creating recipes
router.get('/recipe/create', recipeController.createRecipeGet);

// GET page for reading a certain recipe
router.get('/recipe/:recipeId', recipeController.createCertainRecipeGet);

module.exports = router;
