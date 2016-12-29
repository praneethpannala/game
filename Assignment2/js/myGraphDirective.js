(function() {

    "use strict";

    //directive for the navbar
    var app = angular.module("app");
    app.directive('navbar', function() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: "./views/navbar.html",
        }
    });

    // directive for the graphs
    app.directive('graphs', function() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: "./views/graphs.html",
        }
    });

    // directive for the tabularCol
    app.directive('tabularcol', function() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: "./views/tabularCol.html",
        }
    });


})();