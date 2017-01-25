(function() {
    "use strict";

    // Controller for storing all the data accessed in the input modal
    angular.module("myApp").controller("modalDataCtrl", ['$uibModalInstance', 'dataStoringService', 'information',
        'validationService', '$uibModal', '$uibModalStack',
        function($uibModalInstance, dataStoringService, information,
            validationService, $uibModal, $uibModalStack) {
            var self = {};

            self.details = {};

            // For emptying the data
            self.details.selectedPaymentType = "";
            self.details.selectedAccountType = "";
            self.details.selectedFrequencyType = "";
            self.details.selectedPeriodStarts = "";
            self.details.selectedPaymentTiming = "";
            self.details.selectedPaymentDueOn = "";
            self.details.selectedPaymentDueDay = "";
            self.details.selectedGrowth = "";
            self.details.selectedChargeAmount = "";

            console.log(self.details);



            // For sending the editable data to a DataStoringService
            var changedData;
            if (information != undefined) {

                changedData = dataStoringService.editingDetails(information);
                self.details.selectedPaymentType = information.key;
                self.details.selectedAccountType = changedData.AccountType;
                self.details.selectedFrequencyType = changedData.FrequencyType;
                self.details.selectedPeriodStarts = changedData.PeriodStarts;
                self.details.selectedPaymentTiming = changedData.PaymentTiming;
                self.details.selectedPaymentDueOn = changedData.PaymentDueOn;
                self.details.selectedPaymentDueDay = changedData.PaymentDueDay;
                self.details.selectedGrowth = changedData.Growth;
                self.details.selectedChargeAmount = changedData.ChargeAmount;
            }

            // Hiding and Showing the Modal Content of Payment Information and Payment Parameters
            self.paymentInfoView = true;
            self.paymentParamsView = false;
            self.hideBeforeButton = false;
            self.hideNextButton = true;
            self.hideGenerate = false;
            self.hideSave = true;

            // Moving to the next modal content i.e Payment Paramters
            // Sending all the inputs of the payment Information to the Data Storing Service


            function modalValidation(data) {
                var flag = true;
                self.message = data;
                console.log(self.message);
                for (var values in self.message) {
                    console.log(values);
                    console.log("Message errors=" + self.message[values]);
                    if (self.message[values] == "Please fill the form") {
                        flag = false;
                    }
                }
                return flag;
            }

            self.nextModal = function() {



                var paymentInfo = validationService.paymentInfoValidation(self.details);
                var flagResult = modalValidation(paymentInfo);

                if (flagResult == true) {
                    self.paymentInfoView = false;
                    self.paymentParamsView = true;
                    self.hideBeforeButton = true;
                    self.hideNextButton = false;
                    self.hideGenerate = true;

                    dataStoringService.paymentInfoData(self.details);
                }


            }

            // Moving to the previous modal content i.e Payment Information
            self.previousModalnext = function() {

                self.paymentInfoView = true;
                self.paymentParamsView = false;
                self.hideBeforeButton = false;
                self.hideNextButton = true;
                self.hideGenerate = false;

            }

            // Sending the input data of Payment Parameters to Data Storing Service
            // Saving all the data into the service and closing the modal
            self.Generate = function() {

                dataStoringService.paymentParamData(self.details);

                $uibModalInstance.close();
            }

            self.save = function() {

                dataStoringService.saveEditData(self);

                $uibModalInstance.close();
            }

            // Closing the modal without saving any data
            self.closeIt = function() {

                var modalInstance = $uibModal.open({

                    templateUrl: 'views/editWarningMessage.html',
                    backdrop: 'static',
                    keyboard: false,
                    controller: 'modalDataCtrl',
                    controllerAs: 'values',
                    resolve: {
                        information: function() {
                            return information;
                        }
                    }

                });

            }

            self.ignoreWarning = function() {
                $uibModalStack.dismissAll('closing');
            }

            self.cancelWarning = function() {
                $uibModalInstance.close();
            }

            return self;

        }
    ]);
})();