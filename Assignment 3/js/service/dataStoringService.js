(function() {
	"use strict";
	angular.module('myApp').service('dataStoringService',function(){

		var totalDetails = {};
		var data={};
		this.paymentInfoData= function(PaymentType,AccountType,
			FrequencyType,PeriodStarts,PaymentTiming,PaymentDueOn,
			PaymentDueDay)
		{	
			
			data.PaymentType=PaymentType;
			data.AccountType= AccountType;
			data.FrequencyType= FrequencyType;
			data.PeriodStarts= PeriodStarts;
			data.PaymentTiming= PaymentTiming;
			data.PaymentDueOn= PaymentDueOn;
			data.PaymentDueDay= PaymentDueDay;
			console.log(data);
		}

		this.paymentParamData= function(Growth,ChargeAmount)
		{
			data.Growth= Growth;
			data.ChargeAmount= ChargeAmount;
			var PaymentType= data.PaymentType;
			delete data.PaymentType;
			console.log(data);

			if (PaymentType in totalDetails) 
			{
				totalDetails[PaymentType].push(angular.copy(data));
				console.log(totalDetails);
			} 
			else 
			{
				totalDetails[PaymentType]=[];
				totalDetails[PaymentType].push(angular.copy(data));
				console.log(totalDetails);
			}
		}

		this.gettingAllDetails= function(){
			return totalDetails;
		}

		this.deleteData = function(key,index)
		{
			totalDetails[key].splice(index, 1);
      	}

	
	});
})();