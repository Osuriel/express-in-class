const { request } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const quotes = ['You should buy all this.', "You'll love our products", "Best purchase you'll ever make"];

router.get('/quote', function(req, res, next) {
  const randomQuoteIndex = Math.floor(
    Math.random() * quotes.length
  );

  res.json({quote: quotes[randomQuoteIndex]});
});

const users = [];

router.get('/create-user', function(req, res, next) {
  console.log('request body: ', req.body);

  users.push({ userName: req.body.userName, age: req.body.age});

  console.log('all users: ',  users);

  res.json({success: true });
  
});

module.exports = router;
