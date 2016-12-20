var app= angular.module('myApp',[]);


app.controller('myCtrl',function($scope,$window,$interval,myService) {

	 $scope.list = "";

	 $scope.start= function(){
		 //timer for the game
	    $scope.countDown = 60; 
	    var timer= $interval(function()
	    	{
		    	$scope.countDown--; 
		    	console.log($scope.countDown);
		    	counting();
		    },1000);
	    // checking when the time finishes
	    function counting() 
	    {
		   	if ($scope.countDown==0) 
		   	{	
				console.log("sbd");
				$interval.cancel(timer);
		   	}
	    }
	
	 };

	myService.mySerFun("data.json").then(
		function(result){
			$scope.list=myService.shuffle(result);;
		}, function(error){
			console.log(error.statusText);
		});

	$(document).ready(function () 
	{
		$('#startgame').modal('show');
	});
 

});


app.service('myService',function($http,$q) {
	this.mySerFun= function(x){
		return $http.get(x).then(
			function(response){
				return $q.resolve(response.data);
			}, 
			function(response){
				return $q.reject(response.data);
			})
		};


	this.shuffle = function (array) {
          var arrayCopy = angular.copy(array);
          var len = arrayCopy.length;
          var newArray = [];
          while(len > 0){
            var i = Math.floor(Math.random() * len);
            newArray.push(arrayCopy[i]);
            arrayCopy.splice(i,1);
            len--;
          }
          return newArray;
        }			


});

app.directive('actualdir',function(){
	return {
		restrict:'EA',
		scope:false,

		controller: function($scope, $element, $attrs,$timeout,$window){
			$scope.hey="namaste";
			 var self = this;
			 var counter= 0;
			 $scope.reducetime=60;
			 var firstDiv,secondDiv="";
			 var div1,div2,box1,box2;
			 var successFlips=0;      	

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
  					secondDiv=  z;
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
								
						}
						else {
							successFlips++;
							result();
						}  
					}, 500);
				}


				 function output(){
				 //timer for the game
				    var timer= $interval(function()
				    	{
					    	$scope.reducetime--; 
					    	console.log($scope.reducetime);
					    	counting();
					    	result();
					    },1000);
				    // checking when the time finishes
				    function counting() 
				    {
					   	if ($scope.reducetime==0) 
					   	{

							console.log("sbd");
							$interval.cancel(timer);
							alert("You lost the game");
							$window.location.reload();
					   	}
				    }
				};

				function result() 
				{
					if (successFlips == 6 && $scope.reducetime>0)
					{
						 	alert("You won");
					}
					else
					{
						alert("You lost");
					 	$window.location.reload();
					 }	
				}
			
			}

			self.init = function()
			{
		        $scope.ele= function(a){
		        	var x = a.currentTarget;
		        	var z = angular.element(x).parent()[0].getAttribute('value');
			        flip(x, z);
			        
		        } 
		         
		    }

		},	

		 link : function(scope,element,attrs, ctrl){
		 	ctrl.init();
		 }
	}
});