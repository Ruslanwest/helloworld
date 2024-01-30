var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Asep kebarat-baratan" }');
});

app.get('/home', function (req, res) {
    res.send('{ "response": "Hello World Jalu Segala solusi" }');
});
app.get('/about', function (req, res) {
    res.send('{ "response": " Great!, It works! Yuda" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
