var counter = 0;
$( document ).ready(function(){
	$( "#male" ).click(function() {
  		$("#switch-guy-shirt").show();
	});
	$("#switch-guy-shirt").click(function (){
        $(".avatar-male-color").hide();
        if(counter == 0){
            $("#green").show();
		}
		if(counter == 1){
            $("#red").show();
		}
		else if(counter == 2){
            $("#yellow").show();
		}
		else if(counter == 3){
            $("#blue").show();
		}
        counter++;
		if(counter == 4){
            counter = 0;
        }
	});
	$( "#female" ).click(function() {
  		$("#switch-girl-shirt").show();
	});
	$("#switch-girl-shirt").click(function (){
        $(".avatar-male-color").hide();
        if(counter == 0){
            $("#green").show();
		}
		if(counter == 1){
            $("#red").show();
		}
		else if(counter == 2){
            $("#yellow").show();
		}
		else if(counter == 3){
            $("#blue").show();
		}
        counter++;
		if(counter == 4){
            counter = 0;
        }
	});


});
