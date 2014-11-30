angular.module('app').factory('User', function($log,$http,UserService){
    'use strict';

    var User = function(user){

        this.initialize = function (){
            var self = this;
            UserService.getById(user).success(function(data){
                angular.extend(self,data);
            }).error(function(data,status){
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        };

        this.initialize();
    };

    return User;
});