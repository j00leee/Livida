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
      alert("Once you pick a choice, please scroll down. Enjoy!");
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
      $("#meter20").show();
      $("#meter10").hide();
  	});
	$( "#encourage-btn" ).click(function() {
  		$("#fifthtext").show();
  		$("betray-btn").prop("disabled",true);
	});
	$( "#betray-btn" ).click(function() {
  		$("#sixthtext").show();
  		$("#encourage-btn").prop("disabled",true);
      $("#meter30").show();
      $("#meter20").hide();
	});
	$( "#good-btn" ).click(function() {
  		$("#seventhtext").show();
  		$("#kind-btn").prop("disabled",true);
	});
	$( "#kind-btn" ).click(function() {
  		$("#ninthtext").show();
  		$("#good-btn").prop("disabled",true);
      $("#meter40").show();
      $("#meter30").hide();
	});
	$( "#wrong").click(function() {
		$("#eleventhtext").show();
		$("#tell-them-btn").prop("disabled",true);
    $("#meter20").show();
    $("#meter10").hide();
	});

});
