var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 
  	$urlRouterProvider.otherwise('/');

	$stateProvider

    .state('party', {
        url: '/party',
        template: '<h1>This Is A State</h1>'
    });
 }]);   


myApp.controller()