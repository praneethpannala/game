$(document).ready(function()
{

	var a=[1,2,3,4];
	
	function displaydom(a)
	{
		console.log(a);
		for(var i=0;i<a.length;i++)
		{
			$("ol").append(a[i]+ "<br>");
		}
	}
	
	displaydom(a);
	
	
	$("#toggle").on("click", function()
	{
		var b = prompt("Please enter a value", "" );
		var flag= true;
		for(var i=0;i<a.length;i++)
		{
			if(b == a[i])
			{
				flag=false;
			}
		}
		
		if(flag)
		{
			a.push(b);
		}
		else
		{
			alert(" The given input already exists");	
		}	
	});
	
	
	var interval=setInterval(function() 
	{
		$("ol").empty();
		displaydom(a)
	},2000);
	
	setTimeout(function() 
	{
		clearInterval(interval);
		a=[5,6,8,9];
		$("ol").empty();
		displaydom(a)
	},10000);
	
	

	
		
});