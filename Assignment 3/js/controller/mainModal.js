(function () {
	angular.module('myApp').controller('ModalDemoCtrl',
		['$uibModal','dataStoringService',function ($uibModal,dataStoringService)
	{
	  var self = {};
	 console.log()	
	  self.totalDetails= dataStoringService.gettingAllDetails();
	  self.animationsEnabled = true;

	  self.newModal = function (size,information) {
	  	console.log("modal");
	    var modalInstance = $uibModal.open({
	    
	      templateUrl: 'views/mainModal.html',
	      controller:'modalDataCtrl',
	      controllerAs:'values',
	      size: size,
	      resolve: {
	      	information: function(){
	      		return information;
	      	}
	      }
	      
	    });  
	  };

	  self.delete = function (size,key,index, information) {
	   	console.log(key);
	   	console.log(index);
	     var modalInstance = $uibModal.open({
	    
	      templateUrl: 'views/delete.html',
	      controller:'modalDataCtrl',
	      controllerAs:'values',
	      size: size,
	      resolve: {
	        inform: function () {
	          return key;
	        },
	        index: function(){
	        	return index;
	        }
	      }
	      
	    });  
	  };

	  self.edit= function(size,key,index)
	  {
	  	var data={}; 
	  	
	  	data.key=key;
	  	data.index=index;

	  	newModal(size,data);
	  }

	  return self;
	 
	}]);
})();