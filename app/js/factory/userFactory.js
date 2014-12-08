/*angular.module('app').factory('User', function($log,$http,UserService){
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
});*/


angular.module('app').factory('User', function($log,UserService,messagingService, events){
    'use strict';

    return function(userId){
        var user = {
            id : "",
            createdAt : "",
            updatedAt : "",
            name : "",
            nif : "",
            details : "",
            email : "",
            role : "",
            address: [],
            phone: [],

            load : function (userId){
                var self = this;
                UserService.getById(userId).success(function(data){
                    angular.extend(self,data);
                    messagingService.publish(
                        events.message._USER_LOAD_COMPLETE_,
                        [self]
                    );
                }).error(function(data,status){
                    $log.error("Server KO. Status: " + status + " Msg: " + data);
                });
            }
        };
        if (userId !== undefined){
            user.load(userId);
        }
        return user;
    };
});