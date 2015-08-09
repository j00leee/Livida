$( document ).ready(function(){
	$("#switch-guy-shirt").click(function (){
		$("#green").show();
		$("#blue").hide();
		$("#switch-guy-shirt").click(function (){
			$("#red").show();
			$("#green").hide();
			$("#switch-guy-shirt").click(function (){
				$("#yellow").show();
				$("#red").hide();
			});
		});
	});
});