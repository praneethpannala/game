var app= angular.module('myApp',[]);

app.controller('myCtrl',function($scope)
{
		
});

app.directive('actualdir',function(){
	return {

		controller: function($scope, $element, $attrs){

			 var self = this;	
			hey()
			{
				console.log("hsb")
			}

			self.init = function()
			{
				element.bind('click',hey)
		    }



		},	
		 link : function(scope,element,attrs, ctrl){
		 	ctrl.init();
		 }
	}
});