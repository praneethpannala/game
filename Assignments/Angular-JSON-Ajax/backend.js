( function () {
	"use strict";
var app= angular.module('myApp',[]);

app.controller('nameCtrl',function($scope,myService)
	{
		$scope.names="";
		function myFun(data)
		{
			console.log(data);
			$scope.names= data;
		}
		myService.myfunc(myFun,"jsondata.json");


		$scope.delete= function(i){
			
			$scope.names.splice(i, 1);
		};
	});

app.controller('adminCtrl',function($scope,myService)
	{
		$scope.names="";
		function myFun(data)
		{
			$scope.names= data;
		}

		myService.myfunc(myFun,"jsondata2.json");

		$scope.delete= function(i){
			$scope.names.splice(i, 1);
		};
	});



app.service('myService',function($http)
	{
		this.myfunc= function(callBack,x)
		{
			return $http.get(x)
  				.then(function(response) {
  					callBack(response.data);	
  				});
		}

	});

app.directive('myJson', function() {
  return {
  	restrict: 'E',
  	scope:{
  		names :'=',
  		eliminate:"&"
  	},
    templateUrl: 'myjsondirective.html'
  };
});

})();