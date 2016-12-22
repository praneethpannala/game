var app= angular.module('myApp',[]);


app.controller('myCtrl',function($scope,$window,$interval,myService,$timeout) {

	$scope.list = "";
	$scope.countDown=""; 
	$scope.start= function(){
		 //timer for the game
	   	$scope.countDown = 10; 
	    $timeout(function(){
	    	//console.log("Praneeth");
	    	
	    },500);
	    
	    var timer= $interval(function()
	    	{
		    	$scope.countDown--; 
		    	$scope.$broadcast('eventName', { data: $scope.countDown });
		    	counting(); 
		    },1000);

	    // checking when the time finishes
	    function counting() 
	    {
		   	if ($scope.countDown==0) 
		   	{	
				//console.log("COntroller timer has been cancelled");
				$interval.cancel(timer);
		   	}
	    }
	
	 };

	myService.mySerFun("../json/data.json").then(
		function(result){
			$scope.list=myService.shuffle(result);;
		}, function(error){
			//console.log(error.statusText);
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

		controller: function($scope, $element, $attrs,$timeout,$interval,$window){
			$scope.countDown="";
			 var self = this;
			 var counter= 0;
			 var firstDiv,secondDiv="";
			 var div1,div2,box1,box2;
			 var successFlips=0; 
			var timer =""
			 $scope.$on('eventName', function (event, args){

					$scope.countDown=args.data;
					if($scope.countDown == 9 ){
						timer= $interval(function(){	
		    		counting();
		    		result();
			    	console.log("Timer");

			    },1000);
					}
					//console.log("Count in ON : "+$scope.countDown);
					// //console.log("directive time=" + $scope.reducetime);
				});


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
      		
      		
      		function counting(){
				   	if ($scope.countDown==0) 
				   	{	
						//console.log("directive timer has been cancelled");
						$interval.cancel(timer);
				   	}
			    }
			function result() 
				{
					//console.log("hsab");
					//console.log("In result successFlips : ",successFlips," countDown : ",$scope.countDown);

					if(successFlips == 6 && $scope.countDown > 0){
						 	alert("You won");

					}
					else if(successFlips != 6 && $scope.countDown == 0)	
					{
						//console.log("You Lost");
						$interval.cancel(timer);
						alert("You lost");

					 	location.reload();
					 }	
				}
			function flip(x,z)
			{
				
		   
			    

				if (counter == 0) 
  				{
  					box1= x;
  					div1 = angular.element(box1).parent().children();
  					firstDiv= z;
  					//console.log("first click"+ counter);
  					showFront(box1,div1[1]);
  					counter++;
  				}
  				else if(counter==1)
  				{
  					box2=x;
  					div2 = angular.element(box2).parent().children();
  					secondDiv=  z;
  					showFront(box2,div2[1]);
  					//console.log("second click"+ counter);
  					counter=0;
  					korakala(firstDiv,secondDiv);	
  				}

				function korakala(firstDiv,secondDiv) 
				{
					$timeout(function() 
					{
						if (firstDiv != secondDiv)
						{	
							showBack(div1[1],box1);
							showBack(div2[1],box2);		
						}
						else 
						{
							successFlips++;	
							//console.log(successFlips);
						}
						
					},500); 				
				}

				
			
			}

			self.init = function()
			{
		        $scope.ele= function(a)
		        {
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