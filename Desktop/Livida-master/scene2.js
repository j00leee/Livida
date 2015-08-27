var name = "Julie";

$( document ).ready(function() {
    $("#name").text(name);

    $("#continue").click(function ()
     {
         $(this).hide();
     }
);

    $( "#continue" ).click(function() {
  		$("#firsttext").show();
	});
	$( "#not-all-work-btn" ).click(function() {
  		$("#secondtext").show();
  		$("#all-work-btn").prop("disabled",true);
	});
	$( "#tell-them-btn" ).click(function() {
  		$("#thirdtext").show();
  		$("#wrong").prop("disabled",true);
	});
	$( "#all-work-btn" ).click(function() {
  		$("#fourthtext").show();
  		$("#not-all-work-btn").prop("disabled",true);
  	});
	$( "#encourage-btn" ).click(function() {
  		$("#fifthtext").show();
  		$("betray-btn").prop("disabled",true);
	});
	$( "#betray-btn" ).click(function() {
  		$("#sixthtext").show();
  		$("#encourage-btn").prop("disabled",true);
	});
	$( "#good-btn" ).click(function() {
  		$("#seventhtext").show();
  		$("#kind-btn").prop("disabled",true);
	});
	$( "#kind-btn" ).click(function() {
  		$("#ninthtext").show();
  		$("#good-btn").prop("disabled",true);
	});
	$( "#wrong").click(function() {
		$("#eleventhtext").show();
		$("#tell-them-btn").prop("disabled",true);
	});

});
