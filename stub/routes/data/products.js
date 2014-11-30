module.exports = function(products) {
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
    },{
        id : 23,
        ean13 : 9876587213215,
        name : "Manta cubre coche",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 24,
        ean13 : 9876543213212,
        name : "Cuaderno",
        pvp : 2.50,
        typeProduct : "",
        createdAt : new Date(2013, 5, 13, 9, 30, 45),
        updatedAt : new Date(2013, 5, 13, 18, 30, 45),
        productImages : [images.IMAGES[2]]
    },{
        id : 25,
        name : "Libro",
        ean13 : 9876543213213,
        pvp : 17.50,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 26,
        name : "Funda",
        ean13 : 9876543213214,
        pvp : 0.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : [images.IMAGES[1]]
    },{
        id : 27,
        ean13 : 9876543213215,
        name : "Block dibujo",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 28,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 29,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 30,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : [images.IMAGES[2]]
    },{
        id : 31,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : [images.IMAGES[0]]
    },{
        id : 32,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 33,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 34,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 35,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 36,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 37,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 38,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct: "material",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 39,
        ean13 : 9876543213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct: "material",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 40,
        ean13 : 9876567213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct: "material",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 41,
        ean13 : 9876510213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct: "material",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 42,
        ean13 : 9876512213215,
        name : "Block dibujo carboncillo DinA3",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 43,
        ean13 : 9876534213215,
        name : "Toner blanco epson",
        pvp : 20.80,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 44,
        ean13 : 9876587213215,
        name : "Manta cubre coche",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    },{
        id : 45,
        ean13 : 9876587213215,
        name : "Manta cubre coche",
        pvp : 3.30,
        typeProduct : "",
        createdAt : new Date(2012, 5, 13, 9, 30, 45),
        updatedAt : new Date(2012, 5, 13, 9, 30, 45),
        productImages : null
    }];

    module.exports.PRODUCTS = PRODUCTS;
    return module.exports;
};