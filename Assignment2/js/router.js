(function() {
	"use strict";

	angular.module('app').config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider

		.state('home',{
			url : '/',
			views:{
					'navbar':{ templateUrl:'./views/navbar.html' },
					'tabularCol':{
						templateUrl:'./views/tabularCol.html',
						controller:'tableController'
					}
				}
			})
				

	}]);


})();