"use strict";

//imports
var express = require('express');
var expressJwt = require('express-jwt');


var product = require('./routes/product');
var user = require('./routes/user');

var http = require('http');
var path = require('path');




var app = express();

// Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/rest', expressJwt({secret: "secret"}));

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});


//Routes
app.get('/rest/product', product.fetchProducts);
app.get('/rest/user', user.fetchUsers);
app.post('/authenticate', user.authenticate);

//Server run
module.exports = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
