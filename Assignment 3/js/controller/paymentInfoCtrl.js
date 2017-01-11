(function() {
	"use strict";
	angular.module("myApp").controller("paymentInfoCtrl",['dataService', function(dataService) 
	 {
	 	var self={};
        self.paymentType = [];
        self.frequecyType = [];
        self.AccountingType = [];
        self.PaymentTiming = [];
        self.PaymentDueDay = [];
        self.PaymentDueOn = [];

        dataService.gettingJsonData("./jsons/c_paymentType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                self.paymentType.push(res[2]);
            }
        });

        dataService.gettingJsonData("./jsons/c_frequecyType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                self.frequecyType.push(res[2]);
            }
            console.log(self.frequecyType);
        });

        dataService.gettingJsonData("./jsons/l_AccountingType.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.AccountingType.push(str);
            }
            console.log(self.AccountingType);
        });


      

        dataService.gettingJsonData("./jsons/l_PaymentTiming.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.PaymentTiming.push(str);
            }
            console.log(self.PaymentTiming);
        });

        dataService.gettingJsonData("./jsons/l_PaymentDueDay.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.PaymentDueDay.push(str);
            }
            console.log("PaymentDueDay"+self.PaymentDueDay);
        });

        dataService.gettingJsonData("./jsons/l_PaymentDueOn.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                self.PaymentDueOn.push(str);
            }
            console.log("PaymentDueOn"+self.PaymentDueOn);
        });


        return self;

	 }]);	
})();