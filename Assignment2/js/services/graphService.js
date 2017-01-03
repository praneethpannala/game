(function(){
	"use strict";

	// service for all the ajax calls
	angular.module('app').service('graphService',function($http,$q){
		this.gettingJsonData= function(x){
			return $http.get(x).then(
			function(response){
				return $q.resolve(response.data);
			}, 
			function(response){
				return $q.reject(response.data);
			})
		};

	});
})();