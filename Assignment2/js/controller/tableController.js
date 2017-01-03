(function() {
  "use strict";

  angular.module('app').controller('tableController',["$scope","graphService",function($scope,graphService){

    // initialising the data for tables
    $scope.waterResult="";
    $scope.forecastRecord="";

    // service for getting the water records data
    graphService.gettingJsonData("./json/waterRecordsTable.json").then(
      function(result){
       $scope.data= result;
       console.log(result);
      },
      function(error){
        console.log("waterRecordsTable has not been receieved");
      }
      );


    // service for getting the forecast data
     graphService.gettingJsonData("./json/forecastRecordsTable.json").then(
      function(result){
       $scope.forecastRecord= result;
       console.log(result);
      },
      function(error){
        console.log("ForecastRecordsTable has not been receieved");
      }
      );

  
  }]);

})();