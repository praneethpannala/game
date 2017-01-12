(function () {
	"use strict";

	// Controller for storing all the data accessed in the input modal
	 angular.module("myApp").controller("modalDataCtrl", ['$uibModalInstance',
	  'dataStoringService','information',function($uibModalInstance,dataStoringService,information) 
	 {
	 	var self={};

	 	// For emptying the data
	    self.selectedPaymentType = "";
        self.selectedAccountType = "";
        self.selectedFrequencyType = "";
        self.selectedPeriodStarts = "";
        self.selectedPaymentTiming = "";
        self.selectedPaymentDueOn = "";
        self.selectedPaymentDueDay = "";
        self.selectedGrowth = "";
        self.selectedChargeAmount = "";
       	
        // For sending the editable data to a DataStoringService
       	console.log(information);
       	if (information != undefined) 
       	{
       	
       		console.log("data for editingDetails");
	       	var changedData=dataStoringService.editingDetails(information);
	       	self.selectedPaymentType= information.key;
	        self.selectedAccountType = changedData.AccountType;
	        self.selectedFrequencyType = changedData.FrequencyType;
	        self.selectedPeriodStarts = changedData.PeriodStarts;
	        self.selectedPaymentTiming = changedData.PaymentTiming;
	        self.selectedPaymentDueOn = changedData.PaymentDueOn;
	        self.selectedPaymentDueDay = changedData.PaymentDueDay;
	        self.selectedGrowth = changedData.Growth;
	        self.selectedChargeAmount = changedData.ChargeAmount;
      	}

       	
       	// Hiding and Showing the Modal Content of Payment Information and Payment Parameters
        self.paymentInfoView=true;
        self.paymentParamsView=false;
        self.hideBeforeButton=false;
        self.hideNextButton=true;
        self.hideGenerate=false;
        self.hideSave= true;

        // Moving to the next modal content i.e Payment Paramters
        // Sending all the inputs of the payment Information to the Data Storing Service
        self.nextModal= function() {
        	self.paymentInfoView=false;
        	self.paymentParamsView=true;
	        self.hideBeforeButton=true;
	        self.hideNextButton=false;
	        self.hideGenerate=true;

	        dataStoringService.paymentInfoData(self);
        }
        // Moving to the previous modal content i.e Payment Information
        self.previousModalnext=function(){
        	self.paymentInfoView=true;
	        self.paymentParamsView=false;
	        self.hideBeforeButton=false;
	        self.hideNextButton=true;
	        self.hideGenerate=false;

	    }
	    // Sending the input data of Payment Parameters to Data Storing Service
	    // Saving all the data into the service and closing the modal
        self.Generate = function () {

        	dataStoringService.paymentParamData(self);

		    $uibModalInstance.close();
		}

		self.save = function(){

			dataStoringService.saveEditData(self);

		    $uibModalInstance.close();
		}

		// Closing the modal without saving any data
		self.closeIt = function(){
			 $uibModalInstance.close();
		}  


		return self;  

	 }])
})();