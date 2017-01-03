(function() {
  "use strict";

  angular.module('app').controller('navBarCtrl',function($scope) {
  		$scope.data=false;	
  		
			$scope.hey=function(){
				$scope.data= true;
				$($('#side-menu')[0]).css("height", $(document).height() - 103);
			}
			$scope.close= function(){
				$scope.data=false;
			}
  }); 

})();