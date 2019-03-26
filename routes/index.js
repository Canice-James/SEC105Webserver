var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/canice', function(req, res, next) {
  res.render('canice',);
});

/* GET home page. */
router.get('/shafferson', function(req, res, next) {
  res.render('shafferson', { title: 'Express' });
});

module.exports = router;
