$(document).ready(function()
{
	
	console.log("suiadbhi");
    $(".home").click(function(){
        $.ajax({url: "home.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="home";
    });
	
	$(".space").click(function(){
        $.ajax({url: "space.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="space";
    });
	$(".technology").click(function(){
        $.ajax({url: "technology.html", success: function(result)
		{
			
            $(".loader").html(result);
        }});
		location.hash="technology";
    });
	$(".nature").click(function(){
        $.ajax({url: "nature.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="nature";
    });
	

	
});



var homeAjax =function (){
	console.log("ravi");
	 $.ajax({url: "home.html", success: function(result)
		{
            $(".loader").html(result);
        }});
		location.hash="home";
}
homeAjax();

