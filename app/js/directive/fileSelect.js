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

angular.module("app").directive('selectOnClick', function () {
    "use strict";
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                this.select();
            });
        }
    };
});