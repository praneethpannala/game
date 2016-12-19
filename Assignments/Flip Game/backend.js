var app= angular.module('myApp',[]);

app.controller('myCtrl',function($scope,$window,$interval,$timeout) {

	 $scope.list = [
  {
   "picture": "google.png",
   "value": 1,
   "id":1
  },
  {
   "picture": "starbucks.png",
   "value": 2,
    "id":1

  },
  {
   "picture": "puma.jpg",
   "value": 3,
    "id":1

  },
  {
   "picture": "mozilla.png",
   "value": 4,
    "id":1

  },
  {
   "picture": "hp.jpg",
   "value": 5,
    "id":1

  },
  {
   "picture": "fanta.jpg",
   "value": 6,
    "id":1

  },
  {
   "picture": "google.png",
   "value": 1,
    "id":1

  },
  {
   "picture": "starbucks.png",
   "value": 2,
    "id":1

  },
  {
   "picture": "puma.jpg",
   "value": 3,
    "id":1

  },
  {
   "picture": "mozilla.png",
   "value": 4,
    "id":1

  },
  {
   "picture": "hp.jpg",
   "value": 5,
    "id":1

  },
  {
   "picture": "fanta.jpg",
   "value": 6,
    "id":1

  }];

  $scope.reloadRoute = function() {

   $window.location.reload();
   
	}

    //generic shuffling function
    $scope.shuffle = function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };


    $scope.countDown = 60; 
    var timer= $interval(function(){
    	$scope.countDown--; 
    	console.log($scope.countDown);
    	},1000);

    $timeout(function() 
	{
		console.log("sbd");
		$interval.cancel(timer);
	
	},10000);
 

});


app.directive('actualdir',function(){
	return {
		restrict:'EA',
		scope:false,

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
				 console.log("counter=" +counter);

				
				if (counter == 0) 
  				{
  					box1= x;
  					div1 = angular.element(box1).parent().children();
  					console.log("counter=" +counter);
  					firstDiv= z;
  					console.log("value="+z);
 					console.log(x);

  					showFront(box1,div1[1]);
  					counter++;
  				}
  				else if(counter==1)
  				{
  					console.log("counter=" +counter);
					console.log(z);
 					console.log(x);

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
							
					} }, 500);
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