var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Ruslan Permana" }');
});

app.get('/home', function (req, res) {
    res.send('{ "response": "Hello World Home" }');
});
app.get('/about', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
