(function() {
	"use strict";
	angular.module('myApp').service('dataStoringService',function(){

		var totalDetails = {};
		var data={};
		// Data for storing Payment Info Data
		this.paymentInfoData= function(result)
		{	

			data.PaymentType=result.selectedPaymentType;
			data.AccountType=result.selectedAccountType;
			data.FrequencyType=result.selectedFrequencyType;
			data.PeriodStarts=result. selectedPeriodStarts;
			data.PaymentTiming=result. selectedPaymentTiming;
			data.PaymentDueOn=result. selectedPaymentDueOn;
			data.PaymentDueDay=result. selectedPaymentDueDay;
		}
		// Function for storing payment Param info
		this.paymentParamData= function(result)
		{
			data.Growth=result.selectedGrowth;
			data.ChargeAmount=result.selectedChargeAmount;
			var PaymentType= data.PaymentType;
			delete data.PaymentType;

			if (PaymentType in totalDetails) 
			{
				totalDetails[PaymentType].push(angular.copy(data));
			} 
			else 
			{
				totalDetails[PaymentType]=[];
				totalDetails[PaymentType].push(angular.copy(data));
			}
		}
		// Sending all the details to the view
		this.gettingAllDetails= function(){
			return totalDetails;
		}

		var index;
		// Deleting the required details
		this.removeData = function(data)
		{
			
			totalDetails[data.key].splice(data.index, 1);
      	}
      	// Editing the details
      	this.editingDetails= function(information)
      	{
      		index= information.index;
      		return totalDetails[information.key][information.index];
      	}
      	// Saving the edited Details
      	this.saveEditData= function(result)
      	{
      		data.Growth=result.selectedGrowth;
			data.ChargeAmount=result.selectedChargeAmount;
			var PaymentType= data.PaymentType;
			delete data.PaymentType;
			totalDetails[PaymentType][index]= angular.copy(data);
      	}
     

	
	});
})();