$(document).ready(function()
{
    $(".home").click(function(){
        $.ajax({url: "home.html", success: function(result)
		{
            $("body").html(result);
        }});
    });
});