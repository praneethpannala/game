(function(){
	"use strict";

	angular.module("myApp").directive("deleteModal",function(){
		return {
			restrict: 'EA',
			templateUrl: 'views/delete.html'
		}
	});
	
})();


