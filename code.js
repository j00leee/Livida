var name = "Julie";

$( document ).ready(function() {
    $("#name").text(name);

    $( "#continue" ).click(function() {
  		$("#firsttext").show();
	});
	$( "#dont-cut-btn" ).click(function() {
  		$("#secondtext").show();
  		$("#cut-btn").prop("disabled",true);
	});
	$( "#tell-them-btn" ).click(function() {
  		$("#thirdtext").show();
  		$("#wrong").prop("disabled",true);
	});
	$( "#cut-btn" ).click(function() {
  		$("#fourthtext").show();
  		$("#dont-cut-btn").prop("disabled",true);
  	});
	$( "#go-to-school-btn" ).click(function() {
  		$("#fifthtext").show();
  		$("#memories-btn").prop("disabled",true);
	});
	$( "#memories-btn" ).click(function() {
  		$("#sixthtext").show();
  		$("#go-to-school-btn").prop("disabled",true);
	});
	$( "#leader-btn" ).click(function() {
  		$("#seventhtext").show();
  		$("#always-visit-btn").prop("disabled",true);
	});
	$( "#always-visit-btn" ).click(function() {
  		$("#eighthtext").show();
  		$("#leader-btn").prop("disabled",true);
	});
	$( "#okay-dont-cut-btn" ).click(function() {
  		$("#ninthtext").show();
  		$("#just-cut-btn").prop("disabled",true);
	});
	$( "#just-cut-btn" ).click(function() {
  		$("#tenthtext").show();
  		$("#okay-dont-cut-btn").prop("disabled",true);
	});
	$( "#wrong").click(function() {
		$("#eleventhtext").show();
		$("#tell-them-btn").prop("disabled",true);
	});

});
