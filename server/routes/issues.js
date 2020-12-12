const express = require('express');
const shortid = require('shortid');
const router = express.Router();
const db = require('../database/database');

router.get('/', function(req, res, next) {
  let issues = db.get('issues');
  res.status(200).json({
    status: 'success',
    data: issues,
  }); 

}).post('/', function(req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  let status = 'Open';
  let issuesId = shortid.generate();
  db.get('issues').push({...req.body, issuesId, status}).write();

  res.status(200).json({
    status: 'success',
    data: req.body,
  });

}).delete('/:id', function(req, res, next) {
  let id = req.params.id;
  db.get('issues').remove({issuesId: id}).write();

  res.status(200).json({
    status: 'success',
    data: id,
  })

}).put('/:id', function(req, res, next) {
  let id = req.params.id;
  
  db.get('issues').find({issuesId: id}).assign(req.body).write();

  res.status(200).json({
    status: 'success',
    data: req.body,
  })
})

module.exports = router;