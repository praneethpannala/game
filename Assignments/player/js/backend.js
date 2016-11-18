function gameClick(){
	var value = this.id;
	
	
	var player1 = $("#11").hasClass("divbackground");
	var player2 = $("#22").hasClass("background");
	
	if(player1){
		$("#11").removeClass("divbackground");
		$("#"+value).css("background-color","blue");
		$("#22").addClass("background");
		$("#"+value).text("PlayerOne")
		
	}
	if(player2){
		$("#11").addClass("divbackground");
		$("#22").removeClass("background");
		$("#"+value).css("background-color","red");
		$("#"+value).text("PlayerTwo")
		
	}
	
	$("#"+value).off('click');
	
	
}

$(document).ready(function()
{
	//$(".floating").one("click",gameClick);
	$(".players").delegate(".floating", "click",gameClick);
	
});