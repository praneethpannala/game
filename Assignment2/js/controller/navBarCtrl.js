(function() {
  "use strict";

  angular.module('app').controller('navBarCtrl',function($scope) {
  		$scope.data=false;	
  		
			$scope.sideNavOpen=function(){
				$scope.data= true;
				$($('#side-menu')[0]).css("height", $(document).height() - 103);
			}
			$scope.sideNavClose= function(){
				$scope.data=false;
			}
  }); 

})();