(function($) 
	{ "use strict";

		$(function() {
			var header = $(".start-style");
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll >= 10) {
					header.removeClass('start-style').addClass("scroll-on");
				} else {
					header.removeClass("scroll-on").addClass('start-style');
				}
			});
		});		

		//Menu On Hover
			
		$('body').on('mouseenter mouseleave','.nav-item',function(e){
				if ($(window).width() > 750) {
					var _d=$(e.target).closest('.nav-item');_d.addClass('show');
					setTimeout(function(){
					_d[_d.is(':hover')?'addClass':'removeClass']('show');
					},1);
				}
		});	
	  
	  
	  })
	// Header scroll class
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10) {
			$('#header').addClass('header-scrolled');
			$(".header-scrolled").css("top", "0px", "position", "fixed");
		} else {
			$('#header').removeClass('header-scrolled').css("top", "0px", "position", "absolute");
		}
	});

	if ($(window).scrollTop() > 10) {
		$('.header_top').addClass('header-scrolled1');
	}
	
	// Smooth scroll for the navigation and links with .scrollto classes
	$('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
				if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
				top_space = $('#header').outerHeight();

				if (! $('#header').hasClass('header-scrolled')) {
				top_space = top_space - 20;
				}
			}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.main-nav, .mobile-nav').length) {
					$('.main-nav .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});
	
	$(document).ready(function(){
	  $('.toggle').click(function(){
		$('.sidebar-contact').toggleClass('active')
		$('.toggle').toggleClass('active')
	  })
	})	
		
		function validateMainForm()
			{
				var x = document.forms["contactform"]["phone"].value;
				if (x == null || x == "" || x.length != 10 || isNaN(x) || x < 1111111111 || x > 9999999999) 
				{
					alert("10 Digits Number must be filled out");
					return false;
				}
				var y = document.forms["contactform"]["email"].value;
				if (y == null || y == "") 
				{
					alert("Email ID must be filled out");
					return false;
				}
				var y = document.forms["contactform"]["name"].value;
				if (y == null || y == "") 
				{
					alert("Full Name must be filled out");
					return false;
				}
				var y = document.forms["contactform"]["city"].value;
				if (y == null || y == "") 
				{
					alert("Country / Location must be filled out");
					return false;
				}
				var y = document.forms["contactform"]["cname"].value;
				if (y == null || y == "") 
				{
					alert("Company Name must be filled out");
					return false;
				}
				var z = document.forms["contactform"]["comments"].value;
				if (z == null || z == "") 
				{
					alert("Your Message must be filled out");
					return false;
				}
			}
			
			
		