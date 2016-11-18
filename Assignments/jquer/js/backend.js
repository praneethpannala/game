$(document).ready(function()
{
	// ajax calls
    $(".home").click(function(){
        $.ajax({url: "./templates/home.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="home";
    });
	
	$(".space").click(function(){
        $.ajax({url: "./templates/space.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="space";
    });
	$(".technology").click(function(){
        $.ajax({url: "./templates/technology.html", success: function(result)
		{
			
            $(".loader").html(result);
        }});
		location.hash="technology";
    });
	$(".nature").click(function(){
        $.ajax({url: "./templates/nature.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="nature";
    });
	
	
	
});

// when there is no specified url, home page will be loaded
	var homeAjax =function (){
		 $.ajax({url: "./templates/home.html", success: function(result)
			{
				$(".loader").html(result);
			}});
			location.hash="home";
	}
	homeAjax();

