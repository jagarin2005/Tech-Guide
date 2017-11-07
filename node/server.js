'use strict';

var express = require('express');
var bodyParser = require('body-parser');
// var fetch = require('node-fetch');
var data = require('./src/data.json');

var app = express();

var port = process.env.API_PORT || 3001;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credential', 'true');
  res.setHeader('Access-Control-Allow-Methods','GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  next();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', function(req, res) {
  res.json({ message: 'API with node.js and express.js'});
});

app.get('/api/:users', function(req, res) {
   res.json({ user: req.params.users });
});

app.get('/api/:users/followers', function(req, res) {
  res.send(data);
})

app.listen(port, function() {
  console.log(`API running on port ${port}`);
});
