var app= angular.module('myApp',[]);

app.directive('actualdir',function(){
	return {

		controller: function($scope, $element, $attrs,$timeout){
			 var self = this;
			 var counter= 0;
			 var firstDiv,secondDiv="";
			 var div1,div2,box1,box2;
      	

      		function showFront(x,y) {
      			angular.element(x).addClass("myObj");
				angular.element(x).removeClass("normal");
				angular.element(y).addClass("normal");
				angular.element(y).removeClass("myObj");
      		}

      		function showBack(x,y) {
      			angular.element(x).addClass("myObj");
				angular.element(x).removeClass("normal");
				angular.element(y).addClass("normal");
				angular.element(y).removeClass("myObj");
      		}
      		
      		
			function flip(x,z)
			{
				
				if (counter == 0) 
  				{
  					box1= x;
  					div1 = angular.element(box1).parent().children();
  					firstDiv= z;
  					showFront(box1,div1[1]);
  					counter++;
  				}
  				else if(counter==1)
  				{
  					box2=x;
  					div2 = angular.element(box2).parent().children();
  					secondDiv= z;
  					showFront(box2,div2[1]);
  					
  						korakala(firstDiv,secondDiv);	
  				}

				function korakala(firstDiv,secondDiv) 
				{
					counter=0;
					$timeout(function() {

					if (firstDiv != secondDiv)
					{	showBack(div1[1],box1);
						showBack(div2[1],box2);
							
					} }, 500);
				}
			
			}

			self.init = function()
			{
		        $scope.ele= function(a){
		        	console.log(a.target);

			        flip(a.target,a.currentTarget.getAttribute("value"));
		        }  
		    }

		},	

		 link : function(scope,element,attrs, ctrl){
		 	ctrl.init();
		 }
	}
});