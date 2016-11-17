$(document).ready(function()
{
	
	$.getJSON("data.js", function(result)
		{
			for(var index in result[0])
			{
				var x= "<tr><th>"+index+"</th></tr>";
				$("table").append(x);
			}
			console.log(result);
            $.each(result, function(i, field)
			{
				console.log(field);
				var z= "<tr>"+"<td>"+field.firstName+ "</td>"+
			"<td>"+field.lastName+ "</td>"+
			"<td>"+field.empId+ "</td></tr>";
			console.log(z);
				$("table").append(z);
			});	
			
			
        });
			
});
