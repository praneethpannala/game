
var app= angular.module("myApp",[]);

// controller
app.controller('addingemployee',function($scope,myservice)
{	
	//manipulating the imported .CSV file
	$scope.showContent = function($fileContent)
    {
	   $scope.content = myservice.import($fileContent);
		// Saving the imported data into a variable for accessing 	
		$scope.employees= $scope.content;
	};
	
	// initialising the required variables
	$scope.name="";
	$scope.empid="";
	$scope.company="";
	$scope.contact="";
	$scope.location="";
	$scope.employees=[];
	
	$scope.addemp= function()
	{
		if($scope.name=="" || $scope.empid=="" || $scope.company=="" || $scope.contact== "" || $scope.location=="")
		{
			alert("Please enter all the details of the employee");
		}
		else
		{
			var employee= myservice.enteringdetails( $scope.name,$scope.empid,$scope.company,
											$scope.contact,$scope.location);
			$scope.employees.push(employee);	
			alert("Employee details has been saved");	
		}
	};
	
	// deleting the required info from the data
	$scope.delete= function(name)
	{
		for(var i=0 ;i < $scope.employees.length;i++)
		{
			if(name== $scope.employees[i].name)
			{
				$scope.employees.splice(i,1);				
			}
		}
	};
	
	// exporting our info into .CSV format
	$scope.export = function()
	{
        var data= myservice.JSONToCSVConvertor($scope.employees, true);
	};
	
	$scope.viewlist= false;
	$scope.enterdetails= true;
	
	$scope.allemp= function()
	{
		$scope.viewlist= true;
		$scope.enterdetails= false;	
	};
	
	$scope.enter= function()
	{
		$scope.viewlist= false;
		$scope.enterdetails= true;
	};
	
	$scope.show= false;
	
	// editing the data and saving it
	$scope.editempdetails= function(x)
	{
		$scope.show= true;
		
		$scope.saveempdetails= function()
		{
			$scope.show= false;			
			if($scope.name=="" || $scope.empid=="" || $scope.company=="" || $scope.contact== "" || $scope.location=="")
			{
				alert("Please enter all the details of the employee");
			}
			else
			{
				for(var i=0 ;i < $scope.employees.length;i++)
				{
					$scope.employees[i].name=$scope.name;
					$scope.employees[i].empid=$scope.empid;
					$scope.employees[i].company= $scope.company;
					$scope.employees[i].contact=$scope.contact;
					$scope.employees[i].location= $scope.location;
					alert("Employee details has been saved");			
				}										
			}				
		};
	};	
});

app.service("myservice",function()
{
	// storing the given object into an object
	this.enteringdetails= function(name,empid,company,contact,location)
	{
		var employee={};
		employee.name= name;
		employee.empid= empid;
		employee.company=company;
		employee.contact=contact;
		employee.location=location;
		return employee;
	}
	
	// converting the imported .CSV file into JSON
	this.import=  function($fileContent)
	{
		var csv = $fileContent;	
		var lines=csv.split("\n");
		var result = [];
		var headers=["name","empid","company","contact","location"];
		for(var i=1;i<lines.length;i++)
		{
			var obj = {};
			var currentline=lines[i].split(",");
			for(var j=0;j<headers.length;j++)
			{
			  obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}
		  
		  return result; 
	};
	
	// converting the JSON to .CSV format
    this.JSONToCSVConvertor= function(JSONData, ShowLabel) 
	{
		var arrData = JSONData;
		var CSV = '';    

		if (ShowLabel) 
		{
			var row = "";	
			for (var index in arrData[0]) 
			{
				row += index + ',';
			}
			row = row.slice(0, -1);
			CSV += row + '\r\n';
		}	
		for (var i = 0; i < arrData.length; i++)
		{
			var row = "";				
			for (var index in arrData[i]) 
			{
				row += '' + arrData[i][index] + ',';
			}
			row.slice(0, row.length - 1);
			CSV += row + '\r\n';
		}
		 if (CSV == '') 
		 {        
			alert("Invalid data");
			return;
		 }   
		var fileName = "Innominds";
		var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
		var link = document.createElement('a')
		link.href = uri;
		link.style = "visibility:hidden";
		link.download = fileName + ".csv";
		link.click();
		
	};
	
});

// reading the imported .CSV file
app.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			console.log(scope);
			console.log(element);
			console.log(attrs);
			console.log(attrs.onReadFile);
            var fn = $parse(attrs.onReadFile);
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});