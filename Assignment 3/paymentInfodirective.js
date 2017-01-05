(function () {
	"use strict";

	angular.module("myApp").directive("paymentInformation",function(){
		return {
			restrict: 'EA',
			templateUrl: 'paymentInformation.html'
		}
	});

	angular.module("myApp").directive("paymentParams",function(){
		return {
			restrict: 'EA',
			templateUrl: 'paymentParams.html'
		}
	});

})();
