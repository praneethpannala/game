(function() {

    "use strict";

    //directive for the navbar
    var app = angular.module("app");
    app.directive('navbar', function() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: "../views/navbar.html",
        }
    });



})();