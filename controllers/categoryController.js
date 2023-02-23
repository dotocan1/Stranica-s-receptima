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
    res.render("../views/category/createCategoryGet.pug");
}

// this sends category data to the database
exports.createCategoryPost = (req, res, next) => {
    const category = new Category();
}

// this renders a certain category page
exports.createCertainCategoryGet = (req, res, next) => {
    // console.log(req.params.categoryId);
    res.render('../views/category/createCertainCategoryGet', {categoryId: req.params.categoryId});
}
