$( document ).ready(function(){
	$("#switch").click(function (){
		$("#green").show();
		$("#blue").hide();
		$("#switch").click(function (){
			$("#red").show();
			$("#green").hide();
			$("#switch").click(function (){
				$("#yellow").show();
				$("#red").hide();
			});
		});
	});
});