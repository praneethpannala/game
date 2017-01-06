(function () {
	"use strict";

	angular.module("myApp").controller("modalCtrl",function($scope,dataService,$q)
	{	
		$scope.paymentType=[];
		$scope.frequecyType=[];
		$scope.AccountingType=[];
		$scope.ChargeAmountBasis=[];
		$scope.PaymentTiming=[];
		$scope.GrowthType=[];
		$scope.PaymentDueDay=[];
		$scope.PaymentDueOn=[];
		
		dataService.gettingJsonData("./jsons/c_paymentType.json").
			then(function(data) {
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].path;
		        	var res = str.split("\\");
		        	$scope.paymentType.push(res[2]);
		        }
   			 });
       
		dataService.gettingJsonData("./jsons/c_frequecyType.json").
			then(function(data) {
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].path;
		        	var res = str.split("\\");
		        	$scope.frequecyType.push(res[2]);
		        }
		       	console.log($scope.frequecyType);
   			 });

		dataService.gettingJsonData("./jsons/l_AccountingType.json").
			then(function(success) {
				var data= success.result;
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].value;
		        	$scope.AccountingType.push(str);
		        }
		       	console.log($scope.AccountingType);
   			 });


		dataService.gettingJsonData("./jsons/l_ChargeAmountBasis.json").
			then(function(success) {
				var data= success.result;
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].value;
		        	$scope.ChargeAmountBasis.push(str);
		        }
		       	console.log($scope.ChargeAmountBasis);
   			 });

		dataService.gettingJsonData("./jsons/l_PaymentTiming.json").
			then(function(success) {
				var data= success.result;
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].value;
		        	$scope.PaymentTiming.push(str);
		        }
		       	console.log($scope.PaymentTiming);
   			 });

		dataService.gettingJsonData("./jsons/l_GrowthType.json").
			then(function(success) {
				var data= success.result;
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].value;
		        	$scope.GrowthType.push(str);
		        }
		       	console.log($scope.GrowthType);
   			 });

		dataService.gettingJsonData("./jsons/l_PaymentDueDay.json").
			then(function(success) {
				var data= success.result;
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].value;
		        	$scope.PaymentDueDay.push(str);
		        }
		       	console.log($scope.PaymentDueDay);
   			 });

		dataService.gettingJsonData("./jsons/l_PaymentDueOn.json").
			then(function(success) {
				var data= success.result;
		        for(var i=0;i< data.length;i++){
		        	var str=data[i].value;
		        	$scope.PaymentDueOn.push(str);
		        }
		       	console.log($scope.PaymentDueOn);
   			 });


		$scope.selectedPaymentType,$scope.selectedAccountType,$scope.selectedFrequencyType,
			$scope.selectedPeriodStarts,$scope.selectedPaymentTiming,$scope.selectedPaymentDueOn,
				$scope.selectedPaymentDueDay,$scope.selectedAccountingCost,$scope.selectedGrowth,
					$scope.selectedFixedGrowth,$scope.selectedNoOfSchedules,$scope.selectedAdjustEveryMonth,
						$scope.selectedChargeAmount,$scope.selectedContract,$scope.selectedAmountPerBasis="";		
		

		$scope.totalDetails={};

		$scope.savingData= function()
		{
			console.log("Main DATA SAVE");
			
			
			// for (var i = 0; i < $scope.totalDetails.length; i++) 
			// {
			// 	if ($scope.selectedPaymentType== ) {}
			// }

			if ($scope.selectedPaymentType in $scope.totalDetails) 
			{
				var details={};
				details.selectedFrequencyType= $scope.selectedFrequencyType;
				details.selectedPeriodStarts= $scope.selectedPeriodStarts;
				details.selectedAccountingCost= $scope.selectedAccountingCost;

				$scope.totalDetails[$scope.selectedPaymentType].push(details);
			} 
			else 
			{	
				$scope.totalDetails[$scope.selectedPaymentType]=[];

				var details={};
				details.selectedFrequencyType= $scope.selectedFrequencyType;
				details.selectedPeriodStarts= $scope.selectedPeriodStarts;
				details.selectedAccountingCost= $scope.selectedAccountingCost;

				$scope.totalDetails[$scope.selectedPaymentType].push(details);

			}

			console.log($scope.totalDetails);
			var data= Object.keys($scope.totalDetails);
			console.log(data);
			
			$scope.selectedPaymentType="";$scope.selectedAccountType,$scope.selectedFrequencyType,
			$scope.selectedPeriodStarts,$scope.selectedPaymentTiming,$scope.selectedPaymentDueOn,
				$scope.selectedPaymentDueDay,$scope.selectedAccountingCost,$scope.selectedGrowth,
					$scope.selectedFixedGrowth,$scope.selectedNoOfSchedules,$scope.selectedAdjustEveryMonth,
						$scope.selectedChargeAmount,$scope.selectedContract,$scope.selectedAmountPerBasis="";		

		};

		$scope.deleteData= function(key,index)
		{
			console.log(index);
			console.log(key);
			$scope.delConfirmData= function()
			{
				console.log("jsanc");
				$scope.totalDetails[key].splice(index,1);
				console.log($scope.totalDetails);
			}
		};

		$scope.edit=function(key,index)
		{

			$scope.dataChange= $scope.totalDetails[key];

			// for (var i = 0; i < $scope.totalDetails[key].length; i++) 
			// {
			// 	if(index== $scope.totalDetails[key])
			// }
			console.log($scope.dataChange);
			console.log("edit function");
			$scope.savingData= function()
			{
				var details={};
				details.selectedFrequencyType= $scope.selectedFrequencyType;
				details.selectedPeriodStarts= $scope.selectedPeriodStarts;
				details.selectedAccountingCost= $scope.selectedAccountingCost;	
			}
		};	

		$scope.nextModal=function(){
			$scope.isChecked = true;
    		return true
		};





	});

})();