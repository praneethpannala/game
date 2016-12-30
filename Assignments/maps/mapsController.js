(function() {
	"use strict";

	angular.module("mapping").
		controller("mapCtrl",function($scope){
			$scope.name="Hey";
			$scope.circle={

				chicago: {population:2714856, position: [41.878113, -87.629798]},
		   		newyork: {population:8405837, position: [40.714352, -74.005973]},
      			losangeles: {population:3857799, position: [34.052234, -118.243684]},
      			vancouver: {population:603502, position: [49.25, -123.1]}
      		};

      		$scope.getRadius = function(num) {
		      return Math.sqrt(num) * 100;
		    }

	});													
})();