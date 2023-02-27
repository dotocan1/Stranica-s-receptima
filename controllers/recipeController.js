var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipeModel');
const Grocery = require('../models/groceryModel');

// this lists all recipes
exports.listAllRecipes = async (req, res, next) => {
    // and then renders the page 
    try {
        // find all documents
        const recipeArray = await Recipe.find()
            .sort([["name", "ascending"]]);
        res.render('../views/recipe/listRecipes', { recipeArray: recipeArray });
    }
    catch (error) {
        next(error);
    }
}

// this renders the create a recipe page
exports.createRecipe = async (req, res, next) => {

    try {
        // find all groceries
        const groceryArray = await Grocery.find()
            .sort([["name", "ascending"]]);

            // render the recipe page
        res.render('../views/recipe/createRecipe', { groceryArray: groceryArray });
    }
    catch (error) {
        next(error);
    }
}

// this renders a certain recipe page
exports.createCertainRecipeGet = (req, res, next) => {
    // console.log(req.params.recipeId);
    res.render('../views/recipe/createCertainRecipeGet', { recipeId: req.params.recipeId });
}

// this sends recipe data to the database
exports.createRecipePost = (req, res, next) => {
    const recipe = new Recipe();
}
