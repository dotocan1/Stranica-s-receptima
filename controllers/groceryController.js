var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Grocery = require('../models/groceryModel');

// this lists all groceries
exports.listAllGroceries = async (req, res, next) => {
    // and then renders the page 
    try {
        // find all documents
        const groceryArray = await Grocery.find()
            .sort([["name", "ascending"]]);
        res.render('listGroceries', { groceryArray: groceryArray });
    }
    catch (error) {
        next(error);
    }
}

// this renders the create a grocery page
exports.createGroceryGet = (req, res, next) => {
    res.render("createGroceryGet", { arr: arr });
}

// this sends grocery data to the database
exports.createGroceryPost = (req, res, next) => {
    const grocery = new Grocery();
}
