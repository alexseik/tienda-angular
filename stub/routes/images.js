module.exports = function(images) {
    "use strict";

    var IMAGES = [{
        id : 1,
        createdAt : new Date(2014, 5, 13, 9, 30, 45),
        updatedAt : new Date(2014, 9, 10, 9, 30, 45),
        route : "/product/1/image/1",
        size : 35,
        format : "JPG",
        product : 1
    },{
        id : 2,
        createdAt : new Date(2014, 5, 13, 9, 30, 45),
        updatedAt : new Date(2014, 9, 10, 9, 30, 45),
        route : "/product/1/image/2",
        size : 58,
        format : "JPG",
        product : 1
    },{
        id : 3,
        createdAt : new Date(2014, 5, 13, 9, 30, 45),
        updatedAt : new Date(2014, 9, 10, 9, 30, 45),
        route : "/product/2/image/3",
        size : 40,
        format : "JPG",
        product : 2
    }];

    module.exports.IMAGES = IMAGES;

    return module.exports;
};
