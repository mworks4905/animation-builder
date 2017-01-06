var express = require('express');
var router = express.Router();
var User = require('../models/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/');
});

router.post('/', function(req, res, next){
  console.log('in the post route');
  var user = new User({
    username : req.body.username,
    password : req.body.password
  })
  user.save(function(err, response){
    console.log('saved user')
  })
  res.redirect('/')
})

module.exports = router;
