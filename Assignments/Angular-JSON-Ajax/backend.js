var app= angular.module('myApp',[]);

app.controller('myCtrl',function($scope,myService)
	{
		$scope.names="";
		function myFun(data)
		{
			$scope.names= data;
		}
		myService.myfunc(myFun);

	});

app.service('myService',function($http)
	{
		this.myfunc= function(callBack)
		{
			return $http.get("jsondata.json")
  				.then(function(response) {
  					callBack(response.data);	
  				});
		}

	});