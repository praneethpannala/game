(function() {
    "use strict";

    angular.module('myApp').service("validationService", function() {
        var data = {};

        this.paymentInfoValidation = function(result) {

            data.PaymentType = result.selectedPaymentType;
            data.AccountType = result.selectedAccountType;
            data.FrequencyType = result.selectedFrequencyType;
            data.PeriodStarts = result.selectedPeriodStarts;
            data.PaymentTiming = result.selectedPaymentTiming;
            data.PaymentDueOn = result.selectedPaymentDueOn;
            data.PaymentDueDay = result.selectedPaymentDueDay;

            if (data.FrequencyType == "Other") {
                delete data.PaymentDueOn;
                delete data.PaymentDueDay;
                console.log("FrequencyType on Other=" + data);
            } else if ((data.FrequencyType != "Monthly") && (data.PaymentDueOn != "Specific Day of Period")) {
                delete data.PaymentDueDay;
                console.log("Payment Due on Specific=" + data);
                console.log(data);
            } else if (data.FrequencyType == "Monthly") {
                delete data.PaymentDueOn;
                console.log("FrequencyType on Monthly=" + data);
                console.log(data);
            }

            var errors = {};
            for (var values in data) {
                if (data[values] == "") {
                    errors[values] = "Please fill the form";
                }
            }
            console.log(errors);

            return errors;

        }


    });

})();