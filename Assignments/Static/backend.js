var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.films= [
	       {"name":"Bahubali",
		   "budget":250,
		   "director":"Rajamouli"},
		   {"name":"Robot 2.0",
		   "budget":350,
		   "director":"Shankar"},
		   {"name":"Titani",
		   "budget":550,
		   "director":"Cameroon"}];
});