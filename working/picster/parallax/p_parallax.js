$(document).ready(function(){
	loadComplted();
	$(".linkow ul").niceScroll();
	$("html").niceScroll();
	setTimeout(function(){
		$("#header").animate({
			minHeight:98
		},1000);
	},3000);
});

function loadComplted() {

    screen_height=$(window).height();
    screen_width=$(window).width();

    RepositionNav();
    var deck = new $.scrolldeck({

        buttons: '.navigation',

        slides: '.slide',

        duration: 600,

        easing: 'linear',

        offset: 0

    });


	var $window = $(window);

	var $homeBG = $('#home');

	var windowHeight = $window.height(); //get the height of the window

	/*$("#headerd, #home, #skills, #about, #links, #contact").bind("inview", function (event, visible) {
			if (visible) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});*/


			
/*
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia) -8 + "px";
	}



	function Move(){ 

		var pos = $window.scrollTop(); //position of the scrollbar


		if($homeBG.hasClass("inview")){

			$homeBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 600, 0.3)}); 
		}


	}*/



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
