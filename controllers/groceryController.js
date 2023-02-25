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

exports.deleteGrocery = async (req, res, next) => {
    const groceryID = req.params.groceryId;
    console.log('Ovo je id: ' + req.params.groceryId);

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

exports.updateGrocery = async (req, res, next) => {

    const filter = { _id: req.params.groceryId };
    const update = { name: req.body.name };

    // `doc` is the document _after_ `update` was applied because of
    // `new: true`
    let doc = await Grocery.findOneAndUpdate(filter, update, {
        new: true
    });

    res.redirect('/grocery');


}