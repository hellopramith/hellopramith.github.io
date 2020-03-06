$(document).ready(function(){
	loadComplted();
});
function loadComplted() {
    screen_height=$(window).height();
    screen_width=$(window).width();
    var deck = new $.scrolldeck({
        buttons: '.navigation',
        slides: '.slide',
        duration: 600,
        easing: 'linear',
        offset: 0
    });
	var $window = $(window);
	var screen_height = $window.height();
	$window.resize(function(){ 
		resetResize();
	});		
	$window.bind('scroll', function(){ 
		//Move(); 
	});
}
function resetResize(){}

$(window).resize(function(){
	resetResize();
});
