const express = require('express');
const shortid = require('shortid');
const router = express.Router();
const db = require('../database');

router.get('/', function(req, res, next) {
  let users = db.get('users');

  res.status(200).json({
    status: 'success',
    data: users,
  }); 

}).get('/:id', function(req, res, next) {
  let user = db.get('users').find({usersId: req.params.id})

  res.status(200).json({
    status: 'success',
    data: user
  }); 
}).post('/', function(req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  let usersId = shortid.generate();
  console.log(usersId)
  db.get('users').push({...req.body, usersId }).write();

  res.status(200).json({
    status: 'success',
    data: usersId,
  });

}).delete('/:id', function(req, res, next) {
  let id = req.params.id;
  db.get('users').remove({usersId: id}).write();

  res.status(200).json({
    status: 'success',
    data: id,
  })

}).put('/:id', function(req, res, next) {
  let id = req.params.id;
  
  db.get('users').find({usersId: id}).assign(req.body).write();

  res.status(200).json({
    status: 'success',
    data: req.body,
  })
})

module.exports = router;