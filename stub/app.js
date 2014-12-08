"use strict";

//imports
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');

//var methodOverride = require('method-override');
var morgan         = require('morgan');
//var errorhandler = require('errorhandler')



var product = require('./routes/product');
var user = require('./routes/user');
var ticket = require('./routes/ticket');
var invoice = require('./routes/invoice');

var router = express.Router();
var app = express();

// Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
//app.use(app.router);
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/rest/user', expressJwt({secret: "secret"}));

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    //app.use(errorhandler({ dumpExceptions: true, showStack: true }));
}

if ('production' == env) {
    //app.use(errorhandler());
}


router.all('*', function(req, res, next) {
    // add details of what is allowed in HTTP request headers to the response headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    //res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization');
    // the next() function continues execution and will move onto the requested URL/URI
    next();
});

router.options('*', function(req, res) {
    res.send(200);
});

//Routes
//Product rest api
router.get('/rest/product', product.fetchProducts);
router.get('/rest/product/:id', product.fetchProduct);
router.post('/rest/product', product.saveProduct);
router.put('/rest/product/:id', product.updateProduct);
router.delete('/rest/product/:id', product.deleteProduct);
router.get('/rest/product/:id/image/:id', product.fetchImageOfProduct);

router.get('/rest/user', user.fetchUsers);
router.get('/rest/user/:id', user.fetchUser);
router.post('rest/user',user.saveUser);
router.put('/rest/user/:id', user.updateUser);
router.delete('/rest/user/:id', user.deleteUser);
router.post('/authenticate', user.authenticate);
//app.options.('/authenticate', user.authenticate);

//Ticket rest api
router.get('/rest/ticket', ticket.fetchTickets);
router.get('/rest/ticket/:id', ticket.fetchTicket);
router.get('/rest/user/:id/ticket', ticket.fetchTicketsByClient);
router.get('/rest/invoice/:id/ticket', ticket.fetchTicketsByInvoice);
router.post('/rest/ticket', ticket.saveTicket);
router.put('/rest/ticket/:id', ticket.updateTicket);
router.delete('/rest/ticket/:id',ticket.deleteTicket);


//Invoice rest api
router.get('/rest/invoice', invoice.fetchInvoices);
router.get('/rest/invoice/:id', invoice.fetchInvoice);
router.post('/rest/invoice', invoice.saveInvoice);
router.put('/rest/invoice/:id', invoice.updateInvoice);
router.delete('/rest/invoice/:id', invoice.deleteInvoice);

app.use('/', router);

//app.use('/', router);
//Server run
/*module.exports = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});*/
var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
