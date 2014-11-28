"use strict";

var images = require('./images.js')(images);

var PRODUCTS = [{
    id : 1,
    ean13 : 9876543213211,
    name : "Bolígrafo",
    pvp : 0.50,
    typeProduct : "",
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    productImages : [images.IMAGES[1],images.IMAGES[0]]
},{
    id : 2,
    ean13 : 9876543213212,
    name : "Cuaderno",
    pvp : 2.50,
    typeProduct : "",
    createdAt : new Date(2013, 5, 13, 9, 30, 45),
    updatedAt : new Date(2013, 5, 13, 18, 30, 45),
    productImages : [images.IMAGES[2]]
},{
    id : 3,
    name : "Libro",
    ean13 : 9876543213213,
    pvp : 17.50,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 4,
    name : "Funda",
    ean13 : 9876543213214,
    pvp : 0.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : [images.IMAGES[1]]
},{
    id : 5,
    ean13 : 9876543213215,
    name : "Block dibujo",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 7,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 8,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 9,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : [images.IMAGES[2]]
},{
    id : 10,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : [images.IMAGES[0]]
},{
    id : 11,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 12,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 13,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 14,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 15,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 16,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 17,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct: "material",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 18,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct: "material",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 19,
    ean13 : 9876567213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct: "material",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 20,
    ean13 : 9876510213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct: "material",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 21,
    ean13 : 9876512213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 22,
    ean13 : 9876534213215,
    name : "Toner blanco epson",
    pvp : 20.80,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 23,
    ean13 : 9876587213215,
    name : "Manta cubre coche",
    pvp : 3.30,
    typeProduct : "",
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
}];


exports.fetchProducts = function (req, res) {
    return res.json(200, PRODUCTS);
};

exports.fetchProduct = function (req, res) {
    var id = req.params.id;
    if (id == undefined){
        return res.json(422, { error: 'The product id does not contain data.' })
    }
    if (id>PRODUCTS.length || id < 1){
        return res.json(422, { error: 'The product ' + id + ' does not exist.' })
    }
    return res.json(200, PRODUCTS[id-1]);
};

exports.saveProduct = function (req, res){
    var dto = req.body;

    if (dto.product == undefined){
        return res.json(422, { error: 'The product does not contain data.' })
    }

    if (dto.images == undefined){
        return res.json(422, { error: 'The product ' + dto.product.name + ' haven\'t got pictures.' })
    }

    for(var idx in PRODUCTS){
        if(PRODUCTS[idx].name === dto.product.name){
            return res.json(422, { error: 'The product ' + dto.product.name + ' it\'s already created.' });
        }
    }

    if (dto.images != undefined){
        dto.product.images = [];
        for (var idx in dto.images){
            dto.product.images = dto.product.images.concat(IMAGES[0]);
        }
    }
    dto.product.id = PRODUCTS.length + 1;
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

    for(var i = 0; i < PRODUCTS.length; i++){
        if(PRODUCTS[i].id == id){
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