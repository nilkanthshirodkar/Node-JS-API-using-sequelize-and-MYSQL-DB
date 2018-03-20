"use strict";

var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var fs = require('fs');
var multer  = require('multer');
var upload  = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname;
    var extension = originalname.split(".");
      cb(null, file.originalname+ '.' + extension)
  }
})

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

router.post('/recipeupload', upload.single('photo'), function (req, res) {
  console.log(req);
  var Recipe = recipe.build();
  Recipe.name = req.body.recipeName,
  Recipe.image = req.file.filename,
  Recipe.ingredient = req.body.recipeingredient,
  Recipe.description = req.body.recipedescription,
  Recipe.userId = req.body.userid,
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



