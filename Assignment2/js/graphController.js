(function() {
	"use strict";

	angular.module('app').controller('graphController',function($scope,graphService){

		// data for the chats initialisation
		  $scope.commodityData = null;
		  $scope.forecastData= null;

		  //commodity function for creating graph
    function commodityFunction(myData) {
    	console.log("Commodity data:" + myData);
        var commoditychart = new CanvasJS.Chart("commoditiesContainer", {
            title: {
                text: "Boxes per Acre"
            },
            animationEnabled: true,
            data: myData


        });
        commoditychart.render();
    }

    // forecast function for creating the graph
     function forecastFunction(myData) {
     	console.log("Forecast data:" + myData);

        var forecastchart = new CanvasJS.Chart("forecastContainer", {

        	axisY: {
		        title: "Total Yield"
		      },
		      
            animationEnabled: true,
            data: myData


        });

        forecastchart.render();    
    }


    // service for getting commodity data
		graphService.gettingJsonData("./json/commodityGraph.json").then(
			function(result) {

				 $scope.commodityData = (result);
	            for (var i = 0; i < $scope.commodityData.length; i++) {
	                $scope.commodityData[i].type = "stackedBar";
	                $scope.commodityData[i].showInLegend = true;
					$scope.commodityData[i].axisYType= "secondary";
	                	                				

	            };
	            console.log($scope.commodityData);
	            commodityFunction($scope.commodityData);

			},
			function(error){
				console.log("Commodity Data has not been receieved");
			}
			);


		// service for getting forecast data
		graphService.gettingJsonData("./json/forecastGraph.json").then(
			function(result){
				 $scope.forecastData = (result);
	            for (var i = 0; i < $scope.forecastData.length; i++) {
	                $scope.forecastData[i].type = "column";
	                $scope.forecastData[i].showInLegend = true;
	                $scope.forecastData[i].height="500";
	            };
	            console.log("Forecast service" + $scope.forecastData);
	            forecastFunction($scope.forecastData);

			},
			function(error){
				console.log("Forecast Data has not been receieved");
			}
			);
	
	});

})();