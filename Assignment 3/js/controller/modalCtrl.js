(function() {
    "use strict";

    angular.module("myApp").controller("modalCtrl", function($scope, dataService, $q) {
        $scope.paymentType = [];
        $scope.frequecyType = [];
        $scope.AccountingType = [];
        $scope.ChargeAmountBasis = [];
        $scope.PaymentTiming = [];
        $scope.GrowthType = [];
        $scope.PaymentDueDay = [];
        $scope.PaymentDueOn = [];

        dataService.gettingJsonData("./jsons/c_paymentType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                $scope.paymentType.push(res[2]);
            }
        });

        dataService.gettingJsonData("./jsons/c_frequecyType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                $scope.frequecyType.push(res[2]);
            }
            console.log($scope.frequecyType);
        });

        dataService.gettingJsonData("./jsons/l_AccountingType.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.AccountingType.push(str);
            }
            console.log($scope.AccountingType);
        });


        dataService.gettingJsonData("./jsons/l_ChargeAmountBasis.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.ChargeAmountBasis.push(str);
            }
            console.log($scope.ChargeAmountBasis);
        });

        dataService.gettingJsonData("./jsons/l_PaymentTiming.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.PaymentTiming.push(str);
            }
            console.log($scope.PaymentTiming);
        });

        dataService.gettingJsonData("./jsons/l_GrowthType.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.GrowthType.push(str);
            }
            console.log($scope.GrowthType);
        });

        dataService.gettingJsonData("./jsons/l_PaymentDueDay.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.PaymentDueDay.push(str);
            }
            console.log($scope.PaymentDueDay);
        });

        dataService.gettingJsonData("./jsons/l_PaymentDueOn.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.PaymentDueOn.push(str);
            }
            console.log($scope.PaymentDueOn);
        });


        $scope.selectedPaymentType = "";
        $scope.selectedAccountType = "";
        $scope.selectedFrequencyType = "";
        $scope.selectedPeriodStarts = "";
        $scope.selectedPaymentTiming = "";
        $scope.selectedPaymentDueOn = "";
        $scope.selectedPaymentDueDay = "";
        $scope.selectedAccountingCost = "";
        $scope.selectedGrowth = "";
        $scope.selectedFixedGrowth = "";
        $scope.selectedNoOfSchedules = "";
        $scope.selectedAdjustEveryMonth = "";
        $scope.selectedChargeAmount = "";
        $scope.selectedContract = "";
        $scope.selectedAmountPerBasis = "";


        $scope.totalDetails = {};


        if ($scope.selectedFrequencyType== "other") {
        		disablePaymentDueOn= false;
        		disablePaymentDueDay= false;
        	}

        $scope.savingData = function() {

        

            if ($scope.selectedPaymentType in $scope.totalDetails) {
                var details = {};
                details.selectedFrequencyType = $scope.selectedFrequencyType;
                details.selectedPeriodStarts = $scope.selectedPeriodStarts;
                details.selectedAccountType = $scope.selectedAccountType;
                details.selectedPaymentTiming=$scope.selectedPaymentTiming;
                details.selectedPaymentDueOn=$scope.selectedPaymentDueOn;	
                details.selectedPaymentDueDay = $scope.selectedPaymentDueDay;
                details.selectedChargeAmount=$scope.selectedChargeAmount;

                $scope.totalDetails[$scope.selectedPaymentType].push(details);
            } else {

                $scope.totalDetails[$scope.selectedPaymentType] = [];

                var details = {};
                details.selectedFrequencyType = $scope.selectedFrequencyType;
                details.selectedPeriodStarts = $scope.selectedPeriodStarts;
                details.selectedAccountType = $scope.selectedAccountType;
                details.selectedPaymentTiming=$scope.selectedPaymentTiming;
                details.selectedPaymentDueOn=$scope.selectedPaymentDueOn;
 	            details.selectedPaymentDueDay = $scope.selectedPaymentDueDay;
	            details.selectedChargeAmount=$scope.selectedChargeAmount;

	            $scope.totalDetails[$scope.selectedPaymentType].push(details);
	            console.log($scope.totalDetails);

            }

            $scope.selectedPaymentType = "";
            $scope.selectedAccountType = "";
            $scope.selectedFrequencyType = "";
            $scope.selectedPeriodStarts = "";
            $scope.selectedPaymentTiming= "";
            $scope.selectedPaymentDueOn="";
            $scope.selectedPaymentDueDay="";
            $scope.selectedChargeAmount="";


        };

        $scope.deleteData = function(key, index) {
            $scope.delConfirmData = function() {
                $scope.totalDetails[key].splice(index, 1);
            }
        };

        $scope.edit = function(key, index) {

            $scope.dataChange = angular.copy($scope.totalDetails[key][index]);

            $scope.selectedPaymentType= key;
            console.log(key);
      		$scope.selectedAccountType= $scope.dataChange.selectedAccountType;
      		$scope.selectedFrequencyType= $scope.dataChange.selectedFrequencyType;
      		$scope.selectedPeriodStarts= $scope.dataChange.selectedPeriodStarts;
      		$scope.selectedPaymentTiming= $scope.dataChange.selectedPaymentTiming;
            $scope.selectedPaymentDueOn= $scope.dataChange.selectedPaymentDueOn;
            $scope.selectedPaymentDueDay= $scope.dataChange.selectedPaymentDueDay;
            $scope.selectedChargeAmount= $scope.dataChange.selectedChargeAmount;

            console.log($scope.selectedAccountType);

            $scope.savingData = function() 
            {
                var details = {};
                details.selectedFrequencyType = $scope.selectedFrequencyType;
                details.selectedPeriodStarts = $scope.selectedPeriodStarts;
                details.selectedAccountType = $scope.selectedAccountType;
                details.selectedPaymentTiming= $scope.dataChange.selectedPaymentTiming;
            	details.selectedPaymentDueOn=$scope.dataChange.selectedPaymentDueOn;
            	details.selectedPaymentDueDay=$scope.dataChange.selectedPaymentDueDay;
            	details.selectedChargeAmount=$scope.dataChange.selectedChargeAmount;
            	console.log(details);

            	$scope.totalDetails[key][index]= details;
            };
        };

        $scope.nextModal = function() 
        {
        	if($scope.isChecked== false)
        	{
        		var myEl = angular.element(document.querySelector('#payInfoModal'));
				myEl.attr('data-dismiss',"modal");
				myE1.attr('data-target',"#paymentParams");
        	}
        	else
        	{
		    	$scope.isChecked = true;
            	return true
        	}
        };




    });

})();