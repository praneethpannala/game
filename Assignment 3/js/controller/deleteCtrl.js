(function() {
	"use strict";
	// Controller For Deleting the data
	angular.module('myApp').controller('deleteCtrl',['$uibModalInstance',
	  'dataStoringService','deletingData',function($uibModalInstance,
	  	dataStoringService,deletingData)
	  {
	  	var self={};

	  	// Confirmation of deletion
	  	self.delConfirmData = function(){
	  		
			dataStoringService.removeData(deletingData);

		    $uibModalInstance.close();
		}  

		// Closing the modal without deleting any data 

		self.closeDeleteModal= function(){

			$uibModalInstance.close();
		}

		return self;

	  }]);

})();