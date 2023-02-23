var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipeModel');

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
exports.createRecipeGet = (req, res, next) => {
    res.render("createRecipeGet", { arr: arr });
}

// this sends recipe data to the database
exports.createRecipePost = (req, res, next) => {
    const recipe = new Recipe();
}
