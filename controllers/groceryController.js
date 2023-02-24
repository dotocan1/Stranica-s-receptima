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
        res.render('../views/grocery/listGroceries', { groceryArray: groceryArray });
    }
    catch (error) {
        next(error);
    }
}

// this renders the create a grocery page
exports.createGroceryGet = (req, res, next) => {
    res.render("../views/grocery/createGroceryGet");
}

// this renders a certain grocery page
exports.createCertainGroceryGet = (req, res, next) => {
    // console.log(req.params.groceryId);
    res.render('../views/grocery/createCertainGroceryGet', {groceryId: req.params.groceryId});
}

// this sends grocery data to the database
exports.createGroceryPost = (req, res, next) => {
    // console.log("Ovo je ime namirnice: " + req.body.name);
    
    // send data to database here
        
    // redirect to grocery page
    res.redirect('/grocery');


}
