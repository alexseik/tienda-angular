"use strict";


var products = require('./data/products.js')(products);

exports.fetchProducts = function (req, res) {
    return res.json(200, products.PRODUCTS);
};

exports.fetchProduct = function (req, res) {
    var id = req.params.id;
    if (id == undefined){
        return res.json(422, { error: 'The product id does not contain data.' })
    }
    if (id>products.PRODUCTS.length || id < 1){
        return res.json(422, { error: 'The product ' + id + ' does not exist.' })
    }
    return res.json(200, products.PRODUCTS[id-1]);
};

exports.saveProduct = function (req, res){
    var dto = req.body;

    if (dto.product == undefined){
        return res.json(422, { error: 'The product does not contain data.' })
    }

    if (dto.images == undefined){
        return res.json(422, { error: 'The product ' + dto.product.name + ' haven\'t got pictures.' })
    }

    for(var idx in products.PRODUCTS){
        if(products.PRODUCTS[idx].name === dto.product.name){
            return res.json(422, { error: 'The product ' + dto.product.name + ' it\'s already created.' });
        }
    }

    if (dto.images != undefined){
        dto.product.images = [];
        for (var idx in dto.images){
            dto.product.images = dto.product.images.concat(IMAGES[0]);
        }
    }
    dto.product.id = products.PRODUCTS.length + 1;
    return res.json(201, dto.product);
};

exports.updateProduct = function (req, res) {
    var id = req.params.id;
    var dto = req.body;
    if (id == undefined){
        return res.json(422, { error: 'The product id does not contain data.' })
    }
    if (dto == undefined){
        return res.json(422, { error: 'The DTO does not contain data.' })
    }
    if (dto.product == undefined && dto.images == undefined){
        return res.json(422, { error: 'The DTO does not contain data.' })
    }
    var result;
    if (dto.product != undefined){
        result = dto.product;
    }
    if (dto.images != undefined){
        result.images = [];
        for (var idx in dto.images){
            result.images = result.images.concat(IMAGES[0]);
        }
    }
    return res.json(200, dto.product);
};

exports.deleteProduct = function (req, res){
    var id = req.params.id;

    for(var i = 0; i < products.PRODUCTS.length; i++){
        if(products.PRODUCTS[i].id == id){
            return res.json(204);
        }
    }

    return res.json(200);
};

exports.fetchImageOfProduct = function (req, res){

    var options = {
        root: __dirname + '/data/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var fileName ='libro.jpg';
    var id = req.params.id;
    if (id % 2 == 0){
        fileName ='libro.jpg';
        res.contentType('image/jpeg');
    }
    else{
        fileName ='libro2.png';
        res.contentType('image/png');
    }
    res.contentType('image/jpeg');
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
}