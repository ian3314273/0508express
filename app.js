var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/about', (req, res) => {
   res.send('about');
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.get('/API/json', (req, res) =>{
    res.json({
        id:1,
        name: 'Ben'
    });
});
module.exports = app;
