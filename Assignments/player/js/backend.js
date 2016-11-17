function gameClick(){
	var value = this.id;
	
	
	var player1 = $("#11").hasClass("divbackground");
	var player2 = $("#22").hasClass("background");
	
	if(player1){
		$("#11").removeClass("divbackground");
		$("#"+value).addClass("divbackground");
		$("#22").addClass("background");
		$("#"+value).text("PlayerOne")
		
	}
	if(player2){
		$("#11").addClass("divbackground");
		$("#22").removeClass("background");
		$("#"+value).addClass("background");
		$("#"+value).text("PlayerTwo")
		
	}
	
	$("#"+value).off('click');
	
	
}

$(document).ready(function()
{
	
	$("#1").on("click",gameClick);
	$("#2").on("click",gameClick);
	$("#3").on("click",gameClick);
	$("#4").on("click",gameClick);
	
});