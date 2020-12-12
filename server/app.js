const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectLivereload = require("connect-livereload");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const publicDirectory = path.join(__dirname, '../src');
liveReloadServer.watch(publicDirectory);

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const issuesRouter = require('./routes/issues');

const app = express();

app.use(cors());
app.use(connectLivereload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicDirectory));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/issues', issuesRouter);

module.exports = app;
