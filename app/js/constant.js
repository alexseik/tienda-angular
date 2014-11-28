angular.module("app").constant("serverConstants",
    {
        //baseUrl: "http://mooble-server-dev.appspot.com/api"
        baseUrl: "http://localhost:3000/rest", //dev with stub
        typeProduct : [
            {value: 1, text:'literatura'},
            {value: 2, text:'texto'},
            {value: 3, text:'material'},
            {value: 4, text:'cuadernillo'},
            {value: 5, text:'novela'},
            {value: 6, text:'literatura infantil'}
        ]
    }
);