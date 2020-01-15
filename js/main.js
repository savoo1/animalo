// $( ".step2 .leftside form .container-radio input:checked" ).click(function() {
// 	.prop('disabled', true);
// });
$( ".step2 .leftside form .container-radio input" ).click(function() {
	var attr = $(this).attr('checked');

	if (typeof attr !== typeof undefined && attr !== false) {
	   $(this).prop('checked', false);
	   $(this).removeAttr('checked', 'checked');
	   $(".step2 .leftside form .forbtn").removeClass("forbtnactivated");

	   $(".page2bg").css("transform", "rotate(0deg)");
       $(".page2bg").css("max-width", "75%");
	   $(".page2bg").css("margin-top", "0px");
	}else{
	   $(".step2 .leftside form .container-radio input").removeAttr('checked', 'checked');

	   $(this).prop('checked', true);
		$(this).attr('checked', 'checked');

		$(".step2 .leftside form .forbtn").addClass("forbtnactivated");

		if($(this).parent().hasClass("catsradio")){
			$(".page2bg").css("transform", "rotate(-20deg)");
			$(".page2bg").css("max-width", "80%");
	   		$(".page2bg").css("margin-top", "0px");
		} 
		if($(this).parent().hasClass("dogsradio")){
			$(".page2bg").css("transform", "rotate(-40deg)");
			$(".page2bg").css("max-width", "80%");
	   		$(".page2bg").css("margin-top", "0px");
		} 
		if($(this).parent().hasClass("birdsradio")){
			$(".page2bg").css("transform", "rotate(-50deg)");
			$(".page2bg").css("max-width", "78%");
	   		$(".page2bg").css("margin-top", "0px");
		} 
		if($(this).parent().hasClass("rodentsradio")){
			$(".page2bg").css("transform", "rotate(0deg)");
			$(".page2bg").css("max-width", "100%");
	   		$(".page2bg").css("margin-top", "0px");
		} 
		if($(this).parent().hasClass("fishradio")){
			$(".page2bg").css("transform", "rotate(-20deg)");
			$(".page2bg").css("max-width", "70%");
			$(".page2bg").css("margin-top", "60px");
		} 
	}
});



$( ".step3_4 .leftside form .verifaypassword" ).focus(function() {
  $(this).css("border", "1px solid #825EE3");
  $(this).removeAttr('placeholder');
});






// steps changer

$( ".changestep1" ).click(function(e) {
	e.preventDefault();
	$(".step1").css("opacity", "0");
	
	$(".dots .activedot").removeClass("activedot");
	$(".dots a:nth-child(2)").addClass("activedot");

	setTimeout(function(){
		$(".step1").css("display", "none");
		$(".step2").css("display", "flex");
		$(".step2").css("opacity", "1");
	}, 150);
});

$( ".changestep2" ).click(function(e) {
	e.preventDefault();
	$(".step2").css("opacity", "0");
	
	$(".dots .activedot").removeClass("activedot");
	$(".dots a:nth-child(3)").addClass("activedot");

	setTimeout(function(){
		$(".step2").css("display", "none");
		$(".step3").css("display", "flex");
		$(".step3").css("opacity", "1");
	}, 150);
});


$( ".changestep3" ).click(function(e) {
	e.preventDefault();
	$(".step3").css("opacity", "0");
	
	setTimeout(function(){
		$(".step3").css("display", "none");
		$(".step4").css("display", "flex");
		$(".step4").css("opacity", "1");
	}, 150);
});


$( ".changestep4" ).click(function(e) {
	e.preventDefault();
	$(".step4").css("opacity", "0");
	setTimeout(function(){
		$(".step4").css("display", "none");
		$(".step5").css("display", "block");
		$(".dots").css("display", "none");
		setTimeout(function(){
			$(".step5").css("opacity", "1");
		}, 50);
		setTimeout(function(){
			$(".step5 .leftside .textdiv h1").css("opacity", "1");
			setTimeout(function(){
				$(".step5 .leftside .textdiv .firstp").css("opacity", "1");
				setTimeout(function(){
					$(".step5 .leftside .textdiv .lastp").css("opacity", "1");
					setTimeout(function(){
						$(".step5 .right-side img").css("opacity", "1");
						setTimeout(function(){
							$(".step5 .leftside .textdiv button").css("opacity", "1");
						}, 350);
					}, 350);
				}, 350);
			}, 350);
		}, 250);

	}, 150);
});
















