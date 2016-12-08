(function() {

"use strict";
var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 
  	$urlRouterProvider.otherwise('/home');

	$stateProvider

    .state('home', {
        url: '/home',
        templateUrl: '../templates/home.html',
    	controller: 'info'
    })

    .state('home.details', {
        url: '/details',
        templateUrl: '../templates/details.html',
    	controller: 'info'
    })

    .state('home.education', {
        url: '/education',
        templateUrl: '../templates/education.html',
        controller: 'info'
    })

	.state('home.skills', {
	        url: '/skills',
	        templateUrl: '../templates/skills.html',
          controller: 'info'
   })

	.state('home.interests', {
	        url: '/interests',
	        templateUrl: '../templates/interests.html',
            controller: 'info'
    })

    .state('home.friends', {
	        url: '/friends',
	        templateUrl: '../templates/friends.html',
            controller: 'info'
    });

 }]); 

app.controller('info',function(myService,$scope,$rootScope,$q)
	{
		$scope.home,$scope.education,$scope.skills,$scope.interests="";

		var myjson= myService.myfunc("../js/myjson.json");
		var	friends= myService.myfunc("../js/friends.json");

		$q.all([myjson,friends]).then(
			function(data){
				console.log(data);
				$scope.home= data[0].home;	
				$scope.education= data[0].education;
				$scope.skills= data[0].skills;
				$scope.interests= data[0].interests;
				$scope.friends= data[1];
				console.log($scope.friends);
			},
			function(error){
				console.log(error);
			});
	
	});	

app.service('myService',function($http,$q)
	{
		this.myfunc= function(x)
		{
			return $http.get(x)
  				.then(function(response) {
	  					return $q.resolve(response.data);	
	  				}, 
	  				function(response){
	  					return $q.reject(response.data);	
	  				} 
  				);
		}

	});

app.directive('navBar',function(){
	return{
		restrict: 'E',
		templateUrl: '../templates/navbar.html'
	}
});

})();