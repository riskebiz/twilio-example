var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.get('/', function(req, res) {
   

    res.status(200)
    .send({ success: true })

});

app.listen(process.env.PORT || 5000);
