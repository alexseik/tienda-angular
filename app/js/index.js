var app = {
    initialize: function () {
        'use strict';

        FastClick.attach(document.body);
        this.bindEvents();
    },
    bindEvents: function () {
        'use strict';
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        'use strict';
        angular.element(document).ready(function () {

            angular.bootstrap(document, ["app"]);

        });
    }
};