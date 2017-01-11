(function () {
	angular.module('myApp').controller('ModalDemoCtrl', function ($uibModal, $log, $document)
	{
	  var $ctrl = this;

	  $ctrl.animationsEnabled = true;

	  $ctrl.open = function (size, parentSelector) {
	    var parentElem = parentSelector ? 
	      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
	    var modalInstance = $uibModal.open({
	      animation: $ctrl.animationsEnabled,
	      ariaLabelledBy: 'modal-title',
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'views/paymentInformation.html',
	      controllerAs:'values',
	      size: size,
	      appendTo: parentElem,
	      resolve: {
	        self: function () {
	          return $ctrl.self;
	        }
	      }
	    });

	  
	  };

	 
	});
})();