var counter = 0;
$( document ).ready(function(){
	$("#switch-guy-shirt").click(function (){
		if(counter == 0){
			$("#green").show();
			$("#blue").hide();
		}
		else if(counter == 1){
			$("#red").show();
			$("#green").hide();
		}
		else if(counter == 2){
			$("#yellow").show();
			$("#red").hide();
		}
		else{
			counter = 0;
		}
		counter++;
	});
});