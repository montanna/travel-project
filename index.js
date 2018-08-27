var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});