(function () {
	"use strict";

	angular.module("myApp").controller("modalCtrl",function($scope,dataService,$q)
	{	
		$scope.paymentType="";
		$scope.frequecyType="";
		$scope.AccountingType="";
		$scope.ChargeAmountBasis="";
		$scope.PaymentTiming="";
		$scope.GrowthType="";
		$scope.PaymentDueDay="";
		$scope.PaymentDueOn="";
		
		var paymentType= dataService.gettingJsonData("./jsons/c_paymentType.json");
		var frequecyType=dataService.gettingJsonData("./jsons/c_frequecyType.json");
		var AccountingType= dataService.gettingJsonData("./jsons/l_AccountingType.json");
		var ChargeAmountBasis=dataService.gettingJsonData("./jsons/l_ChargeAmountBasis.json");
		var PaymentTiming= dataService.gettingJsonData("./jsons/l_PaymentTiming.json");
		var GrowthType=dataService.gettingJsonData("./jsons/l_GrowthType.json");
		var PaymentDueDay=dataService.gettingJsonData("./jsons/l_PaymentDueDay.json");
		var PaymentDueOn=dataService.gettingJsonData("./jsons/l_PaymentDueOn.json");

		$q.all([paymentType,frequecyType,AccountingType,ChargeAmountBasis,PaymentTiming,
			GrowthType,PaymentDueDay,PaymentDueOn]).then(
			function(data){
				$scope.paymentType=data[0];
				$scope.frequecyType=data[1];
				$scope.AccountingType=data[2].result;
				$scope.ChargeAmountBasis=data[3].result;
				$scope.PaymentTiming=data[4].result;
				$scope.GrowthType=data[5].result;
				$scope.PaymentDueDay=data[6].result;
				$scope.PaymentDueOn=data[7].result;

				console.log($scope.paymentType); 
				console.log($scope.frequecyType);
				console.log($scope.AccountingType);	
				console.log($scope.ChargeAmountBasis);			
				console.log($scope.PaymentTiming);				
				console.log($scope.GrowthType);
				console.log($scope.PaymentDueDay);	
				console.log($scope.PaymentDueOn);	

			},function(error){

				console.log("Data has not been receieved");

			});


		$scope.paymentAlert,$scope.accountingAlert,$scope.FrequencyAlert,
				$scope.PeriodStartAlert,$scope.PaymentTimingAlert,$scope.PaymentDueOnAlert,
				$scope.PaymentDueDayAlert,$scope.AccountingCostCenterAlert=false;


		$scope.movetoPaymentParams= function()
		{
			
		}		




	});

})();