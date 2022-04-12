var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'HYPED | Home' });
  res.sendFile('/home/runner/hypedscom/html/index.html')
});

module.exports = router;
