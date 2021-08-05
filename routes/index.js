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

module.exports = router;
