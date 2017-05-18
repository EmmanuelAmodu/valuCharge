$(document).ready(function(){
	$(".main-form").addClass("bounceInLeft animated");
	$(".main-form.right").addClass("bounceInRight animated");

	window.setTimeout(function(){
		$("nav").addClass("bounceInDown animated");
	}, 250);

	window.setTimeout(function(){
		$(".footer").addClass("bounceInUp animated");
	}, 500);

	window.setTimeout(function(){
		$('.nav-items').click();
	}, 1200);

	window.setTimeout(function(){
		$('.nav-items').click();
	}, 2500);

	$('.nav-items').click(function(){
		$("#nav-icon").toggleClass('open');
		$(".nav-menu ul.nav-list").toggleClass('fadeInRight animated');
	});
});
