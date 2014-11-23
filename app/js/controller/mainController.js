angular.module("app").controller("MainController", function ($scope, $window, $rootScope,$location, $log) {
    'use strict';

    $scope.authenticatedUser = null;

    $scope.goTo = function (location) {
        if ($location.path() !== location) {
            $location.path(location);
        }
    };

    $rootScope.safeApply = function (callback) {
        var phase = this.$root.$$phase;
        if (phase === "$apply" || phase === "$digest") {
            $log.debug("APPLY : PHASE INCORRECT = " + phase);
            if (callback && (typeof(callback) === "function")) {
                callback();
            }
        } else {
            this.$apply(callback);
        }
    };

    $scope.back = function () {
        $window.history.back();
    };

});