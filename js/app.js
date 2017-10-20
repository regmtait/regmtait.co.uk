// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function() {};
	var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	var length = methods.length;
	var console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());
$(document).ready(function() {

		//=========== [ Lazy loading ]
	$(function() {
		$(".lazy").lazyload({
			effect: "fadeIn",
			effectspeed: 600,
			failure_limit: 10
		});
	});

	//=========== [ bx slider ]
	$('.bxslider').bxSlider({
		auto: false,
		mode: 'fade'
	});

	menuhide = true;
	
	//=========== [ Welcome ]
	var now = new Date();
	var hrs = now.getHours();
	var welcome = "Hi, there.";
	if (hrs >= 0) {
		welcome = "You should be in bed.";
	} else {
		if (hrs >= 5) welcome = "Good morning.";
		if (hrs >= 12) welcome = "Good afternoon.";
		if (hrs >= 18) welcome = "Good evening.";
		$('h1 span.welcome').text(welcome + " ");
	}

	$('#extra').hide();
	$('.extra').click(function(event) {
		$("#extra").animate({
			height: "toggle",
			opacity: "toggle"
		}, "slow");
		$('.extra').toggleClass('current');
		event.preventDefault();
	});

		$('.js-menu-toggle').click(function(event) {
		$('nav').toggleClass('js-hide');
		event.preventDefault();
		
		if (menuhide === true) {
		$('a.js-menu-toggle').text('[ - Menu]');
		menuhide = false;
		} else {
		$('a.js-menu-toggle').text('[ + Menu]');
		menuhide = true;
		}	
	});
});
$(window).bind('pageshow', function() {
	$('body').css({
		opacity: 1
	});
});