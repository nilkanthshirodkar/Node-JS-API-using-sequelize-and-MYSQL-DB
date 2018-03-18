"use strict";

var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var fs = require('fs');

router.get('/', function(req, res){
    User.findAll().then(function(user){
        res.json(user);
        res.end();
      })
});

router.post('/login', function(req, res){
  User.findOne({
    where: {
      email: req.query.email,
      password: req.query.password,
    }
  }).then(function(user){
    res.json(user);
    res.end();
  })
});

router.post('/register', function(req, res){
  var user = User.build();
  user.name = req.query.fname,
  user.password = req.query.password,
  user.email = req.query.email,
  user.phone = req.query.phone,
  user.save().then(function(user){
    res.json(user);
    res.end();

  })

});

router.post('/recipe', function(req, res){
  var Recipe = recipe.build();
  Recipe.name = req.query.name,
  Recipe.image = req.query.image,
  Recipe.ingredient = req.query.ingredient,
  Recipe.description = req.query.description,
  Recipe.userId = req.query.userId,
  Recipe.save().then(function(Recipe){
    res.json(Recipe);
    res.end();

  })

});

router.get('/recipe', function(req, res){
  recipe.findAll({
    where: {
			userId: req.query.userId
		}
  }).then(function(recipe){
    res.json(recipe);
    res.end();

  })

});

router.get('/allrecipe', function(req, res){
  recipe.findAll({
  }).then(function(recipe){
    res.json(recipe);
    res.end();

  })

});


module.exports = router;



