(function() {

    "use strict";

    // directive for the tabularCol
    angular.module('app').directive('tabularcol', function() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: "../views/tabularCol.html",
        }
    });

})();    