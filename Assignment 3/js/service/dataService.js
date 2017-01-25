(function() {
    "use strict";

    // service for all the ajax calls
    angular.module('myApp').service('dataService', function($http) {
        this.gettingJsonData = function(x) {
            return $http.get(x).then(
                function(response) {
                    return response.data;
                })
        };

    });
})();