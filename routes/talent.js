var express = require('express');
var router = express.Router();
var Talent = require('../models/talent');

/* GET talent listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
