(function() {
    "use strict";

    angular.module("myApp").controller("modalCtrl", function(dataService, $q) {
      


        self.totalDetails = {};


        self.savingData = function() {

        

            if (self.selectedPaymentType in self.totalDetails) {
                var details = {};
                details.selectedFrequencyType = self.selectedFrequencyType;
                details.selectedPeriodStarts = self.selectedPeriodStarts;
                details.selectedAccountType = self.selectedAccountType;
                details.selectedPaymentTiming=self.selectedPaymentTiming;
                details.selectedPaymentDueOn=self.selectedPaymentDueOn;	
                details.selectedPaymentDueDay = self.selectedPaymentDueDay;
                details.selectedChargeAmount=self.selectedChargeAmount;

                self.totalDetails[self.selectedPaymentType].push(details);
            } 

            else {

                self.totalDetails[self.selectedPaymentType] = [];

                var details = {};
                details.selectedFrequencyType = self.selectedFrequencyType;
                details.selectedPeriodStarts = self.selectedPeriodStarts;
                details.selectedAccountType = self.selectedAccountType;
                details.selectedPaymentTiming=self.selectedPaymentTiming;
                details.selectedPaymentDueOn=self.selectedPaymentDueOn;
 	            details.selectedPaymentDueDay = self.selectedPaymentDueDay;
	            details.selectedChargeAmount=self.selectedChargeAmount;

	            self.totalDetails[self.selectedPaymentType].push(details);
	            console.log(self.totalDetails);

            }

            self.selectedPaymentType = "";
            self.selectedAccountType = "";
            self.selectedFrequencyType = "";
            self.selectedPeriodStarts = "";
            self.selectedPaymentTiming= "";
            self.selectedPaymentDueOn="";
            self.selectedPaymentDueDay="";
            self.selectedChargeAmount="";

            console.log


        };

        self.deleteData = function(key, index) {
            self.delConfirmData = function() {
                self.totalDetails[key].splice(index, 1);
            }
        };

        self.edit = function(key, index) {

            self.dataChange = angular.copy(self.totalDetails[key][index]);

            self.selectedPaymentType= key;
            console.log(key);
      		self.selectedAccountType= self.dataChange.selectedAccountType;
      		self.selectedFrequencyType= self.dataChange.selectedFrequencyType;
      		self.selectedPeriodStarts= self.dataChange.selectedPeriodStarts;
      		self.selectedPaymentTiming= self.dataChange.selectedPaymentTiming;
            self.selectedPaymentDueOn= self.dataChange.selectedPaymentDueOn;
            self.selectedPaymentDueDay= self.dataChange.selectedPaymentDueDay;
            self.selectedChargeAmount= self.dataChange.selectedChargeAmount;

            console.log(self.selectedAccountType);

            self.savingData = function() 
            {
                var details = {};
                details.selectedFrequencyType = self.selectedFrequencyType;
                details.selectedPeriodStarts = self.selectedPeriodStarts;
                details.selectedAccountType = self.selectedAccountType;
                details.selectedPaymentTiming= self.dataChange.selectedPaymentTiming;
            	details.selectedPaymentDueOn=self.dataChange.selectedPaymentDueOn;
            	details.selectedPaymentDueDay=self.dataChange.selectedPaymentDueDay;
            	details.selectedChargeAmount=self.dataChange.selectedChargeAmount;
            	console.log(details);

            	self.totalDetails[key][index]= details;
            };
        };

    //     self.nextModal = function() 
    //     {
    //     	if(self.isChecked== false)
    //     	{
    //     		var myEl = angular.element(document.querySelector('#payInfoModal'));
				// myEl.attr('");
				// myE1.attr(');
    //     	}
        	
    //     };


    	return self;

    });

})();