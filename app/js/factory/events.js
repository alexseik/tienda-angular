angular.module('app')
    .constant('events',{
        message : {
            _TICKET_LOAD_COMPLETE_ : "ticket_load_complete",
            _USER_LOAD_COMPLETE_ : "user_load_complete",
            _PRODUCT_SAVE_COMPLETE : "product_save_complete",
            _PRODUCT_REMOVE_COMPLETE: "product_remove_complete",
            _PRODUCT_LOAD_COMPLETE : "product_load_complete",
            _PRODUCTS_LOAD_COMPLETE : "products_load_complete",
            _PRODUCTS_LOAD_ERROR : "products_load_error"
        }
    });