 (function() {

    "use strict";

   // directive for the graphs
    angular.module('app').directive('graphs', function() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: "../views/graphs.html",
        }
    });


})();