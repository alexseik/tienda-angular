"use strict";

var IMAGES = [{
    id : 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    route : "/product/1/img_boli1.jpg",
    size : 35,
    format : "JPG",
    product : 1
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    route : "/product/1/img_boli2.jpg",
    size : 58,
    format : "JPG",
    product : 1
},{
    id : 3,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    route : "/product/2/img_Cuaderno1.jpg",
    size : 40,
    format : "JPG",
    product : 2
}];

var PRODUCTS = [{
    id : 1,
    ean13 : 9876543213211,
    name : "Bolígrafo",
    pvp : 0.50,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    productImages : [IMAGES[0],IMAGES[1]]
},{
    id : 2,
    ean13 : 9876543213212,
    name : "Cuaderno",
    pvp : 2.50,
    createdAt : new Date(2013, 5, 13, 9, 30, 45),
    updatedAt : new Date(2013, 5, 13, 9, 30, 45),
    productImages : [IMAGES[2]]
},{
    id : 3,
    name : "Libro",
    ean13 : 9876543213213,
    pvp : 17.50,
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 4,
    name : "Funda",
    ean13 : 9876543213214,
    pvp : 0.30,
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 5,
    ean13 : 9876543213215,
    name : "Block dibujo carboncillo DinA3",
    pvp : 3.30,
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