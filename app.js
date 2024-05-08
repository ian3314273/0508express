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
        name: 'Ian'
    });
});
app.get('/API/img', (req, res)=>{
    res.sendFile('C:/Users/User/WebstormProjects/0508express/image.webp');
});
app.get('/method', (req, res) => {
    let data =  req.query;
    console.log(data);
    console.log(data.team);
    res.send('get data');
});
app.post('/method', (req, res) => {
    let data = req.body;
    console.log(data);
    console.log(data.team);
    res.send('post' + data.text);
});
module.exports = app;
