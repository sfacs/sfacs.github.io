$(window).load(function() {
		$( window ).resize(function() {
				$(".navbar.submenu").css('top', $(".stretchoverlay img").height() - $("#topbar").height() - $(".navbar.submenu").height()); 
				$("header").css('min-height', $(".stretchoverlay img").height()); 
		});
		$(".navbar.submenu").css('top', $(".stretchoverlay img").height() - $("#topbar").height() - $(".navbar.submenu").height()); 
		$("header").css('min-height', $(".stretchoverlay img").height()); 
});
