var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Grocery = require('../models/groceryModel');

// async function findGrocery () {
//     Grocery.findOne({ _id: groceryID }, function (err, cb) {
//     });
// }

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
    res.render('../views/grocery/createCertainGroceryGet', { groceryId: req.params.groceryId });
}

// this sends grocery data to the database
exports.createGroceryPost = (req, res, next) => {
    // create new Grocery model
    const grocery = new Grocery(
        { name: req.body.name }
    );

    // send data to database here
    grocery.save(function (err) {
        if (err) return handleError(err);
        // saved!
        // redirect to grocery page
        res.redirect('/grocery');
    });
}

exports.deleteAGrocery = async (req, res, next) => {
    const groceryID = req.params.groceryId;
    console.log(groceryID);

    async function deleteGrocery () {
        await Grocery.deleteOne({ _id: groceryID }); // returns {deletedCount: 1}
    }

    try {
        await deleteGrocery();
    }
    catch (error) {
        next(error);
    }
    // redirect to grocery page
    res.redirect('/grocery');




}