(function () {
	"use strict";

	angular.module("myApp").directive("tableDirective",function(){
		return {
			restrict: 'EA',
			templateUrl: 'tableDirective.html'
		}
	});

})();