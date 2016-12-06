(function() {

"use strict";
var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 
  	$urlRouterProvider.otherwise('/home');

	$stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'navbar.html',
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
	
		myService.myfunc(myFun,"myjson.json");
		$scope.home,$scope.education,$scope.skills,$scope.interests="";
		function myFun(data)
		{		
			$scope.home= data.home;	
			$scope.education= data.education;
			$scope.skills= data.skills;
			$scope.interests= data.interests;
			console.log($scope.education);
			
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


app.directive('navBar',function(){
	return{
		restrict: 'E',
		templateUrl: 'navbar.html'
	}
});


})();