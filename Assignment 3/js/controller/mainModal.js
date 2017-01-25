(function() {
    // Dashboard Controller
    angular.module('myApp').controller('ModalDemoCtrl', ['$uibModal', 'dataStoringService', function($uibModal, dataStoringService) {
        var self = {};

        // Total Details of the dash board
        self.totalDetails = dataStoringService.gettingAllDetails();
        console.log(self.totalDetails);

        self.animationsEnabled = true;

        // Opening the input form modal
        self.newModal = function(size, information) {
            var modalInstance = $uibModal.open({

                templateUrl: 'views/mainModal.html',
                controller: 'modalDataCtrl',
                controllerAs: 'values',
                backdrop: 'static',
                keyboard: false,
                size: size,
                resolve: {
                    information: function() {
                        return information;
                    }
                }

            });
        };

        // Opening the Delete modal
        self.delete = function(size, key, index) {

            var modalInstance = $uibModal.open({

                templateUrl: 'views/delete.html',
                controller: 'deleteCtrl',
                controllerAs: 'dataToBeDeleted',
                backdrop: 'static',
                keyboard: false,
                size: size,
                resolve: {
                    deletingData: function() {
                        return {
                            key: key,
                            index: index
                        }
                    }

                }

            });
        };

        // Modal for editing the data
        self.edit = function(size, key, index) {
            var data = {};

            data.key = key;
            data.index = index;

            self.newModal(size, data);
        }

        return self;

    }]);
})();