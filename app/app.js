var express    = require('express');
var path       = require('path');
var app        = express();

require(__dirname + '/autoload')(app);

module.exports = app;
