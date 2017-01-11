(function () {
	"use strict";
	 angular.module("myApp").controller("modalDataCtrl", ['$uibModalInstance',
	  'dataStoringService', function($uibModalInstance,dataStoringService) 
	 {
	 	var self={};

	    self.selectedPaymentType = "";
        self.selectedAccountType = "";
        self.selectedFrequencyType = "";
        self.selectedPeriodStarts = "";
        self.selectedPaymentTiming = "";
        self.selectedPaymentDueOn = "";
        self.selectedPaymentDueDay = "";
        self.selectedGrowth = "";
        self.selectedFixedGrowth = "";
        self.selectedChargeAmount = "";
       

        self.paymentInfoView=true;
        self.paymentParamsView=false;
        self.hideBeforeButton=false;
        self.hideNextButton=true;
        self.hideGenerate=false;

        self.nextModal= function(){
        	self.paymentInfoView=false;
        	self.paymentParamsView=true;
	        self.hideBeforeButton=true;
	        self.hideNextButton=false;
	        self.hideGenerate=true;

	        dataStoringService.paymentInfoData(self.selectedPaymentType,
	        	self.selectedAccountType,self.selectedFrequencyType,
	        		self.selectedPeriodStarts,self.selectedPaymentTiming,
	        			self.selectedPaymentDueOn,self.selectedPaymentDueDay);
        }

        self.previousModalnext=function(){
        	self.paymentInfoView=true;
	        self.paymentParamsView=false;
	        self.hideBeforeButton=false;
	        self.hideNextButton=true;
	        self.hideGenerate=false;

	    }

        self.cancel = function () {

        	dataStoringService.paymentParamData(self.selectedGrowth,
        		self.selectedChargeAmount);

		    $uibModalInstance.dismiss('cancel');
		  }

		self.delConfirmData = function(key,index){
			console.log(key);
			console.log(index);
		}  



		return self;  

	 }])
})();