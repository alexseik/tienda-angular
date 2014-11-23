angular.module("app").directive('header', function () {
    "use strict";
    return {
        restrict: 'A', //This means that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        scope: false, // This is one of the cool things :). Will be explained in post.
        templateUrl: "/view/header.html"
    };
});
