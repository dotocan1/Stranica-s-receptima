var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/categoryModel');

// this lists all categories
exports.listAllCategories = async (req, res, next) => {
    // and then renders the page 
    try {
        console.log('hey')
        // find all documents
        const categoryArray = await Category.find()
            .sort([["name", "ascending"]]);
        res.render('../views/category/listCategories', { categoryArray: categoryArray });
    }
    catch (error) {
        next(error);
    }
}

// this renders the create a category page
exports.createCategoryGet = (req, res, next) => {
    res.render("createCategoryGet", { arr: arr });
}

// this sends category data to the database
exports.createCategoryPost = (req, res, next) => {
    const category = new Category();
}
