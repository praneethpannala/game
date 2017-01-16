(function () {
	"use strict";

	angular.module('myApp').service("validationService",function(){
		var data= {};

		this.paymentInfoValidation= function(result)
		{
			data.PaymentType=result.selectedPaymentType;
			data.AccountType=result.selectedAccountType;
			data.FrequencyType=result.selectedFrequencyType;
			data.PeriodStarts=result.selectedPeriodStarts;
			data.PaymentTiming=result.selectedPaymentTiming;
			data.PaymentDueOn=result.selectedPaymentDueOn;
			data.PaymentDueDay=result.selectedPaymentDueDay;
			
			var errors={};	
			for (var values in data)
			{
				if(data[values]== "")
				{
					errors[values]="Please fill the form";
				}
			}
			console.log(errors);

			return errors;
			
		}

		// this.paymentParamValidation= function(result){
		// 	console.log(result);
		// 	data.ChargeAmount = result.selectedChargeAmount;
		// 	console.log(data);
		// 	var errors={};	
		// 	if(result.selectedChargeAmount== "")
		// 	{
		// 		errors[result.selectedChargeAmount]="Please fill the form";
		// 	}
			
		// 	console.log("PaymentParam Validaton="+errors);

		// 	return errors;
		// }


	});

})();




