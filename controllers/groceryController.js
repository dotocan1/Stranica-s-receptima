var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Grocery = require('../models/groceryModel');

// this lists all groceries
exports.listAllGroceries = async (req, res, next) => {

    // TODO: code that lists all the groceries
    // and then renders the page
    // find all documents
    const groceryArray = await Grocery.find()
        .sort([["name", "ascending"]]);
    res.render('listGroceries', {groceryArray: groceryArray});
}

// this renders the create a grocery page
exports.createGroceryGet = (req, res, next) => {
    res.render("createGroceryGet", { arr: arr });
}

// this sends grocery data to the database
exports.createGroceryPost = (req, res, next) => {
    const grocery = new Grocery();
}
