const express = require('express');
const cors = require('cors');
const http = require('http');
const config = require('./config');

const { users: usersRouter, issues: issuesRouter } = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/issues', issuesRouter);


app.set('port', config.get('port'))

http.createServer(app).listen(app.get('port'), function() {
  console.log(`Server is listening on port ${config.get('port')}`)
})


app.use(function(err, req, res, next) {
  if (app.get('env') == 'development') {
    const errorHandler = app.use(express.errorHandler())
    errorHandler(err, req, res, next)
  } else {
    res.send(500);
  }
})