(function() {
	"use strict";
	angular.module("myApp").controller("paymentParamsCtrl",['dataService',function(dataService) 
	 {
	 	var self={};
	 	 self.GrowthType = [];
	 	 self.ChargeAmountBasis = [];

	 	 dataService.gettingJsonData("./jsons/l_GrowthType.json").
	        	then(function(success) {
	            var data = success.result;
	            for (var i = 0; i < data.length; i++) {
	                var str = data[i].value;
	                self.GrowthType.push(str);
	            }
	            console.log(self.GrowthType);
	       	});

	    dataService.gettingJsonData("./jsons/l_ChargeAmountBasis.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.ChargeAmountBasis.push(str);
            }
            console.log(self.ChargeAmountBasis);
        });    	

	    return self;
	        	
	 }]);
})();