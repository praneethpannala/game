function gameClick(){
	var value = this.id;
	
	
	var player1 = $("#11").hasClass("floating-box divbackground");
	var player2 = $("#22").hasClass("floating-box divbackground");
	
	if(player1){
		$("#11").removeClass("floating-box divbackground");
		$("#1").addClass("divbackground");
		$("#22").addClass("floating-box divbackground");
		$("#"+value).text("PlayerOne")
		
	}
	if(player2){
		$("#11").addClass("floating-box divbackground");
		$("#22").removeClass("floating-box divbackground");
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