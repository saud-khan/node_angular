var app = angular.module("contentApp",[]);
 
//Do configuration and routing here
app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            controller: "homeCtrl",
            templateUrl: "js/view/home.html"
        })
        .when("/info",{
            controller: "infoCtrl",
            templateUrl: "js/view/info.html"
        })
        .when("/areaguides",{
            controller: "areaguidesCtrl",
            templateUrl: "js/view/areaguides.html"
        })
        .when("/attractions",{
            controller: "attractionsCtrl",
            templateUrl: "js/view/attractions.html"
        })
        .when("/restaurants",{
            controller: "restaurantsCtrl",
            templateUrl: "js/view/restaurants.html"
        })
        .when("/nightlife",{
            controller: "nightlifeCtrl",
            templateUrl: "js/view/nightlife.html"
        })
        .when("/activities",{
            controller: "activitiesCtrl",
            templateUrl: "js/view/activities.html"
        })
        .when("/signup",{
            controller: "regCtrl",
            templateUrl: "js/view/signup.html"
        });
    $routeProvider.otherwise({"redirectTo": "/"});  //.otherwise("/"); //does not work
});