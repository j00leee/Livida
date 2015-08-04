var name = "Julie";

$( document ).ready(function() {
    $("#name").text(name);
    
    $( "#continue" ).click(function() {
  		$("#firsttext").show();
	});
	$( "#dont-cut-btn" ).click(function() {
  		$("#secondtext").show();
	});
	$( "#tell-them-btn" ).click(function() {
  		$("#thirdtext").show();
	});
	$( "#cut-btn" ).click(function() {
  		$("#fourthtext").show();
	});
	$( "#go-to-school-btn" ).click(function() {
  		$("#fifthtext").show();
	});
	$( "#memories-btn" ).click(function() {
  		$("#sixthtext").show();
	});
	$( "#leader-btn" ).click(function() {
  		$("#seventhtext").show();
	});
	$( "#always-visit-btn" ).click(function() {
  		$("#eighthtext").show();
	});
	$( "#okay-dont-cut-btn" ).click(function() {
  		$("#ninthtext").show();
	});
	$( "#just-cut-btn" ).click(function() {
  		$("#tenthtext").show();
	});


});