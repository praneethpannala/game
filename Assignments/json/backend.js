$(document).ready(function()
{
	
	$.getJSON("data.js", function(result)
		{
			console.log(result);
			for(var index in result[0])
			{
				var x = "<th>"+index+"</th>";
				$("table").append(x);
			}
			
            $.each(result, function(i, field)
			{
				var z= "<tr>"+"<td>"+field.FirstName+ "</td>"+
					"<td>"+field.LastName+ "</td>"+
					"<td>"+field.EmpID+ "</td>"+
					"<td>"+field.Company+"</td>"+"</tr>";
						$("table").append(z);
			});	
			
			
        });
			
});
