var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stranica s receptima' });
});

/* GET recipe page with all recipes listed */
router.get('/recipe', function(req, res, next) {
  res.render('listRecipes');
});

/* GET grocery page with all groceries listed */
router.get('/grocery', function(req, res, next) {
  res.render('listGroceries');
});

/* GET category page with all categories listed */
router.get('/category', function(req, res, next) {
  res.render('listCategories');
});

module.exports = router;
