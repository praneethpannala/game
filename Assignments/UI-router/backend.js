(function() {

"use strict";
var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 
  	$urlRouterProvider.otherwise('/home');

	$stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'info'
    })

    .state('education', {
        url: '/education',
        templateUrl: 'education.html',
        controller: 'info'
    })

	.state('skills', {
	        url: '/skills',
	        templateUrl: 'skills.html',
          controller: 'info'
   })
	.state('interests', {
	        url: '/interests',
	        templateUrl: 'interests.html',
            controller: 'info'
    });

 }]); 

app.controller('info',function(myService,$scope,$rootScope)
	{
		$rootScope.data="";
		console.log(this);
		myService.myfunc(myFun,"myjson.json");
		$scope.home="";
		function myFun(data)
		{		
			console.log(data);	
			$rootScope.data= data.home;
			$scope.home= data.home;
			console.log($scope.home);
		}	

		$scope.education= $rootScope.education;
		$scope.skills- $rootScope.skills;
		$scope.interests= $rootScope.interests;

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


app.directive('navBar',function(){
	return{
		restrict: 'E',
		templateUrl: 'navbar.html'
	}
});


})();