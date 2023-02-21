var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Grocery = require('../models/groceryModel');

// this lists all groceries
exports.listAllGroceries = (req, res, next) => {
    res.render('listGroceries');
}

// this renders the create a grocery page
exports.createGroceryGet = (req, res, next) => {
    res.render("createGroceryGet");
}

// this sends grocery data to the database
exports.createGroceryPost = (req, res, next) => {
    const grocery = new Grocery(){
        
    }
}
