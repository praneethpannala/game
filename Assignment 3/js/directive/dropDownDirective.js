(function() {
    "use strict";
    angular.module("myApp").directive('dropdown', function() {
        return {
            restrict: 'EA',
            templateUrl: 'views/dropdown-template.html',
            scope: {
                data: '=',
                select: '='
            },
            link: function(scope) {

                scope.selectOption = function(list) {
                    scope.select = list;
                }
            }
        }
    });
})();