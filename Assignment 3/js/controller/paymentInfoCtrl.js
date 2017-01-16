(function() {
	"use strict";
    // paymentInfo ctrl
	angular.module("myApp").controller("paymentInfoCtrl",['dataService', function(dataService) 
	 {
	 	var self={};
        self.paymentType = [];
        self.frequecyType = [];
        self.AccountingType = [];
        self.PaymentTiming = [];
        self.PaymentDueDay = [];
        self.PaymentDueOn = [];

        // Ajax call of C_Payment Type JSON
        dataService.gettingJsonData("./jsons/c_paymentType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                self.paymentType.push(res[2]);
            }
        });
        // Ajax call of c_frequecyType JSON
        dataService.gettingJsonData("./jsons/c_frequecyType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                self.frequecyType.push(res[2]);
            }
        });
         // Ajax call of l_AccountingType JSON
        dataService.gettingJsonData("./jsons/l_AccountingType.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.AccountingType.push(str);
            }
        });

         // Ajax call of l_PaymentTiming JSON
      

        dataService.gettingJsonData("./jsons/l_PaymentTiming.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.PaymentTiming.push(str);
            }
        });
        // Ajax call of l_PaymentDueDay JSON
        dataService.gettingJsonData("./jsons/l_PaymentDueDay.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.PaymentDueDay.push(str);
            }
        });
        // Ajax call of l_PaymentDueOn JSON
        dataService.gettingJsonData("./jsons/l_PaymentDueOn.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.PaymentDueOn.push(str);
            }
        });


        return self;

	 }]);	
})();