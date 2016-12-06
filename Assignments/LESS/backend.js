( function() {

 var app= angular.module('myApp',[]);

app.controller('myCtrl',function($scope,myService)
	{
		$scope.records="";
		function myFun(data)
		{
			console.log(data);
			$scope.records= data;
		}
		myService.myfunc(myFun,"document.json");

		$scope.orderBy = function(x) {
			console.log(x);
        	 $scope.myOrderBy = x;
   		}
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
})();

