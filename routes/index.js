var express = require('express');
const db = require('quick.db')
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'HYPED | Home' });
  res.redirect('https://beta.hypeds.com/')
  db.add("Clicks_Home", 1)
});

module.exports = router;
