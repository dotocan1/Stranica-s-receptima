var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Grocery = require('../models/groceryModel');

// this lists all groceries
exports.listAllGroceries = async (req, res, next) => {

    // TODO: code that lists all the groceries
    // and then renders the page
    // find all documents
    await Grocery.find()
        .sort([["name", "ascending"]])
        .exec(function (err, listAllGroceries) {
            if (err) {
                return next(err);
            };

            // successful
            res.render('listGroceries', { listAllGroceries: listAllGroceries });
        })
};

// this renders the create a grocery page
exports.createGroceryGet = (req, res, next) => {
    res.render("createGroceryGet");
}

// this sends grocery data to the database
exports.createGroceryPost = (req, res, next) => {
    const grocery = new Grocery();
}
