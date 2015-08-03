var name = "Julie";

$( document ).ready(function() {
    $("#name").text(name);
    
    $( "#continue" ).click(function() {
  		$("#firsttext").show();
	});
	$( "#dont" ).click(function() {
  		$("#secondtext").show();
	});
	$( "#right" ).click(function() {
  		$("#thirdtext").show();
	});
	$( "#do" ).click(function() {
  		$("#fourthtext").show();
	});
	$( "#correct" ).click(function() {
  		$("#fifthtext").show();
	});
	$( "#incorrect" ).click(function() {
  		$("#sixthtext").show();
	});
	$( "#r" ).click(function() {
  		$("#seventhtext").show();
	});
	$( "#w" ).click(function() {
  		$("#eighthtext").show();
	});
	$( "#c" ).click(function() {
  		$("#ninthtext").show();
	});
	$( "#i" ).click(function() {
  		$("#tenthtext").show();
	});


});