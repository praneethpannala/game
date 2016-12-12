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

app.controller('info',function(myService,$scope,$q,myFactory)
	{
		$scope.home,$scope.education,$scope.skills,$scope.interests="";
		$scope.name="";
		$scope.sal="";
		$scope.age="";
		$scope.exp="";
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

		$scope.newfriend= function(){
			var z= myFactory.newFrnd($scope.name,$scope.sal,
			 	$scope.age,$scope.exp);
			$scope.friends.push(z);


		}
			
		

	
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

app.factory('myFactory',function(){
		
		var newFrnd= function(name,sal,age,exp){
			var obj={};
			obj.FirstName= name;
			obj.Salary= sal;
			obj.Age= age;
			obj.Experience= exp;
			console.log(obj);
			return obj;
		}
		
		return {newFrnd : newFrnd};
	});


app.directive('navBar',function(){
	return{
		restrict: 'E',
		templateUrl: '../templates/navbar.html'
	}
});

})();