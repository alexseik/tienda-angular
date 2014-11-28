angular.module("app").directive("ngFileSelect",function(){
    "use strict";
    return {
        link: function($scope,el){

            el.bind("change", function(e){

                $scope.files = (e.srcElement || e.target).files;
                $scope.updateImage();
            });

        }

    };
});