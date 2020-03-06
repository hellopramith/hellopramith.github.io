/*

JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo

Demo: Recreating the Nikebetterworld.com Parallax Demo

Author: Ian Lunn

Author URL: http://www.ianlunn.co.uk/

Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/

Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/



License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.



Dual licensed under the MIT and GPL licenses:

http://www.opensource.org/licenses/mit-license.php

http://www.gnu.org/licenses/gpl.html

*/

function load_animation(){
	$('#formIDe').each (function(){
		 this.reset();
	});
	$('body').addClass('bodyFixheight');
    $("html").niceScroll();
	loadVideo();
	screen_height=$(window).height();

    screen_width=$(window).width();

	$("#home").css('z-index',1);

	$("#whyus").css('z-index',2);

	$("#ourprocess").css('z-index',3);

	$("#clientsayings").css('z-index',4);

	$("#requestquote").css('z-index',5);

	$("#kandyvideos").css('z-index',6);

	$("#top").css('z-index',10);

	$("#home").css('min-height',$(window).height())

	//$("#home").find('.screenVideo').css('min-height',$(window).height())

	$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-default4b,.balloon-defaultr1,.whyustext').css('top',screen_height);

	$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-defaultr1,.balloon-default4b,.whyustext').css('bottom','auto');

	$('.balloon-defaultwh').css('top',1187);

	$('.scroll-balloonwh-c_l1t1').css('top',560);

	$('.scroll-balloonwh-c_l1t2').css('top',660);

	$('.scroll-balloonwh-c_l1t3').css('top',560);

	$('.scroll-balloonwh-c_l2t1').css('top',360);

	$('.scroll-balloonwh-c_l2t2').css('top',660);

	$('.scroll-balloonwh-c_l2t3').css('top',800);



	

	

	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-bubble1,.scroll-bubble2,.scroll-bubble3').css('top',screen_height);

	

	$('.scroll-sayingtitle').css('top',400);

	

	$('.balloon-default1').css('z-index',9);

	$('.balloon-defaultr1').css('z-index',8);

	$('.clouds2l-default').css('z-index',8);

	$('.balloon-default2').css('z-index',7);

	$('.balloon-default3').css('z-index',6);

	$('.balloon-default4').css('z-index',5);

	$('.clouds2r2-default').css('z-index',4);

	$('.clouds2r1-default').css('z-index',3);

	$('.balloon-defaultwh').css('z-index',9);

	

	

	$('.whyustext').css('z-index',5);

	$('.balloon-default1').css('left',(screen_width/2)-($('.balloon-default1').width()/2));

	$('.balloon-defaultwh').css('left',(screen_width/2)-($('.balloon-defaultwh').width()/2));

	$('.balloon-defaultr1').css('left',(screen_width/2));

	$('.balloon-default2').css('left',(screen_width/2)-($('.balloon-default2').width()*2)+42);

	

	$('.balloon-default2-b').css('right',(screen_width/2)-($('.balloon-default2').width()*2)+142);

	

	$('.balloon-default3').css('left',(screen_width/2)-($('.balloon-default2').width()));

	$('.balloon-default3-b').css('left',(screen_width/2)-($('.balloon-default2').width())-200);



	$('.balloon-default4').css('right',(screen_width/2)-($('.balloon-default2').width())-($('.balloon-default3').width()+70));

	$('.balloon-default4b').css('left',(screen_width/2)-($('.balloon-default2').width())-($('.balloon-default3').width()-70));

	$('.storeBtnlml').css('left',(screen_width/2)-($('.storeBtnlml').width()/2));

	

	$('.whyustext').css('left',(screen_width/2)-45);

	

    $('.clouds2l-default').css('top',100);

	$('.clouds2r1-default').css('top',0);

	$('.clouds2r2-default').css('top',400);

	

    RepositionNav();





 //  $('#whyus').parallax("50%", 2500, 0.4, false);

	//$('#clientsayings').parallax("50%", 2500, 0.4, true);

	

	//$("#home, #whyus, #ourprocess, #kandyvideos, #clientsayings, #requestquote").height(screen_height)

	

    var deck = new $.scrolldeck({

        buttons: '.navigation',

        slides: '.pages',

        duration: 600,

        easing: 'linear',

        offset: 0

    });



}

var videoAddFlag=0;
var tag = document.getElementById("homevideo");
function onVideoEnable(){
tag.addEventListener('canplaythrough', function(e) {
	$('#playerLoader').hide();
	if(videoAddFlag==0){
		homemovieFix();
		videoAddFlag=2;
	}
	
		

}, false);
}

function homemovieFix(){

		$('#playmeStart').hide();

		$('#pauseme').show();
		$('.screenVideo').find('video').css('visibility','visible');	
		$('.screenVideo').find('video')[0].play();  
		
var tagended = document.getElementById("homevideo");
tagended.addEventListener('ended', function(e) {
		
		loadVideoStream()
		
}, false);
			
	
/*$('.screenVideo').find('video')[0].load(); 	
$('.screenVideo').find('video').bind('progress', function() {
	
  //if($('.screenVideo').find('video').get(0).duration==3){
	 $('.screenVideo').find('video').prop('muted', false);
	$('.screenVideo').find('video')[0].play();  
	$('#playmeStart').hide();
 	$('#pauseme').show();
	$('.screenVideo').find('video').css('visibility','visible');
 // }
  //else{
 // homemovieFix();
  //}
});*/
	/*setTimeout(function(){

	if($('.screenVideo').find('video')[0].currentTime>0.3){

			$('#playmeStart').hide();

			$('#pauseme').show();

		$('.screenVideo').find('video').css('visibility','visible');	

		}

	else{

		homemovieFix()

	}

	},0);*/

}

function loadComplted() {

	

	if (($(window).height())>588){

	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)

	}

	else{

		$('#home .screenVideo').css('margin-top',0)

	}

	 //when the document is ready...

//$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4').css('top',$(window).height());



	/*setTimeout(function(){

		$('.header-i-bg').animate({

			top:-60

		},2500);

		$('#top').addClass('tophoverActivated');

	},2000);*/

//$('.requestQuoteBlk-r-thanks').css('top','-'+$('.requestQuoteBlk-r-thanks').height()-212);


  //homemovieFix();


	

	

	

load_animation();



$('#client-sayings').css('height',$(window).height());





$('.scroll-sayingtitle').css('left',($(window).width()/2)-266-100);

$('.client-saying-default1').css('left',($(window).width()/2)-266-100);

$('.client-saying-default2').css('left',($(window).width()/2)-250-260);

$('.client-saying-default3').css('left',($(window).width()/2)-243+175);

$('.client-saying-default5').css('left',($(window).width()/2)-243);



	//save selectors as variables to increase performance

	var $window = $(window);

	var $homeBG = $('#home');

	var homesprite = $('#home .sprite');

	var $whyusBG = $('#whyus');

	var whyussprite = $('#whyus .sprite');

	var $ourprocessBG = $('#ourprocess');

	var ourprocesssprite = $('#ourprocess .sprite');

	var $kandyvideosBG = $('#kandyvideos');

	var kandyvideossprite = $('#kandyvideos .sprite');

	var $clientsayingsBG = $('#clientsayings');

	var clientsayingssprite = $('#clientsayings .sprite');

	var $requestquoteBG = $('#requestquote');

	var requestquotesprite = $('#requestquote .sprite');



	

	var windowHeight = $window.height(); //get the height of the window

	

	

	//apply the class "inview" to a section that is in the viewport

	$("#home, #whyusin, #ourprocess, #kandyvideos, #clientsayings, #requestquote, #store").bind("inview", function (event, visible) {

			if (visible) {
				
			//$('.menu').find('.item').removeClass('active');			
			//$('.menu').find('.'+$(this).attr('id')+'Aclink').addClass('active');	

			$(this).addClass("inview");
			
			$(this).css('min-height',$(window).height())

			} else {

			$(this).removeClass("inview");
			
		//	$('.menu').find('.'+$(this).attr('id')+'Aclink').removeClass('active');

			}

		});


			

	//function that places the navigation in the center of the window

	// function RepositionNav(){

	// 	var windowHeight = $window.height(); //get the height of the window

	// 	var navHeight = $('#nav').height() / 2;

	// 	var windowCenter = (windowHeight / 2); 

	// 	var newtop = windowCenter - navHeight;

	// 	$('#nav').css({"top": newtop}); //set the new top position of the navigation list

	// }

	

	//function that is called for every pixel the user scrolls. Determines the position of the background

	/*arguments: 

		x = horizontal position of background

		windowHeight = height of the viewport

		pos = position of the scrollbar

		adjuster = adjust the position of the background

		inertia = how fast the background moves in relation to scrolling

	*/

	function newPos(x, windowHeight, pos, adjuster, inertia){

		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia) -8 + "px";

	}

	function newPos01(x, windowHeight, pos, adjuster, inertia){

		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";

	}

	function newPos1(windowHeight, pos, adjuster, inertia){

		return  (-((windowHeight + pos) - adjuster) * inertia) ;

	}

	//function to be called whenever the window is scrolled or resized

	function Move(){ 

		var pos = $window.scrollTop(); //position of the scrollbar

		

		// Ausgabe: Position, Window height

		//$("#meta").html("pos: "+pos+" windowHeight: "+windowHeight);

		

		// home: 0

		if($homeBG.hasClass("inview")){

			//call the newPos function and change the background position

			$homeBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 600, 0.3)}); 

			//call the newPos function and change the secnond background position

			//homesprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 1143, 0.6)});

		}

		

		// whyus: 1000

		if($whyusBG.hasClass("inview")){

			/*//call the newPos function and change the background position

			$whyusBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1800, 0.3)});

			var ptr=(((windowHeight + pos) - 3) * 0.1) 

			//$whyusBG.find('.wrapper').css({'marginTop': ptr+'px'});

			whyussprite.css({'backgroundPosition': newPos01(80, windowHeight, pos, 9580, 0.06)});

			$('.spritesun').css({'backgroundPosition': newPos(30, windowHeight, pos, 2200, 0.19)});

			var p = newPos1(windowHeight, pos, 2200, 0.19);

			if (p<81){

				 $('.spritesun').addClass('spritesunFixed');	

			}

			else{

				 $('.spritesun').removeClass('spritesunFixed');	

			}*/

			

		}

		

		// ourprocess: 2000

		if($ourprocessBG.hasClass("inview")){

			//call the newPos function and change the background position

			$ourprocessBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2800, 0.3)}); 

			//call the newPos function and change the secnond background position

			//ourprocesssprite.css({'backgroundPosition': newPos01(center, windowHeight, pos, 6580, 0.06)});

			

			

		}

		

		// kandyvideos: 3000

		if($kandyvideosBG.hasClass("inview")){

			//call the newPos function and change the background position

			$kandyvideosBG.css({'backgroundPosition': newPos01(50, windowHeight, pos, 3850, 0.01)}); 

			//call the newPos function and change the secnond background position

			//kandyvideossprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 3660, -0.6)});

		}



		// clientsayings: 4000

		if($clientsayingsBG.hasClass("inview")){

			//call the newPos function and change the background position

		//	$clientsayingsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4800, 0.3)}); 

			//call the newPos function and change the secnond background position

			//clientsayingssprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 5300, 0.6)});

		}



		// requestquote: 5000

		if($requestquoteBG.hasClass("inview")){

			//call the newPos function and change the background position

		//	$requestquoteBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5800, 0.3)}); 

			//call the newPos function and change the secnond background position

			//requestquotesprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 6350, 0.6)});

		}



		

	}

		

	//RepositionNav(); //Reposition the Navigation to center it in the window when the script loads

	

	$window.resize(function(){ //if the user resizes the window...

		//Move(); //move the background images in relation to the movement of the scrollbar

		//RepositionNav(); //reposition the navigation list so it remains vertically central

		resetResize();

	});		

	

	$window.bind('scroll', function(){ //when the user is scrolling...

		Move(); //move the background images in relation to the movement of the scrollbar

	});

	

}

/*

$('.tophoverActivated').live('mouseover',function(){

	$('.header-i-bg').stop().animate({

		top:0

	},800);

});

$('.tophoverActivated').live('mouseout',function(){

		$('.header-i-bg').stop().animate({

		   top:-60

		},800);

});*/



function popup(p){

	$('.popupStyles-motionKandy').fadeOut();
	//$('.formError').hide();	
	$('#'+p).fadeIn();

	$('.scroll-pane').jScrollPane();
	$('.formError').hide();	
}

function popupclose(p){

	$('#'+p).fadeOut();
	$('.formError').show();	
	//$('.formError').css('z-index','9000');

}

function successCall(){
	googleConv();
	$('.formError').hide();
	$('.footer_logo').focus();
	
	$('#requestQuoteBlk-r-thanks').show();

	$('#requestQuoteBlk-r-form').animate({

		top:- $('#requestQuoteBlk-r-form').height()-85,

		opacity:0

	},1200,function(){

		$('#requestQuoteBlk-r-form').hide();

	});
//$('.formError').hide();	
	$('#requestQuoteBlk-r-thanks').animate({

		top:0,

		opacity:1

	},1200);
	//$('.formError').hide();	
}

function formCall(){
	$('#formIDe').each (function(){
		 this.reset();
	});
	$('.captchaformError').addClass('ihide');
//$('.formError').hide();	
$('.captchaformError').removeClass('ihide');
	$('#requestQuoteBlk-r-form').show();
	$(function(){ $(".requestQuoteBlk-r-ul label").inFieldLabels(); });
	$('#requestQuoteBlk-r-form').animate({

		top:0,

		opacity:1

	},1200);

	$('#requestQuoteBlk-r-thanks').animate({

		top:- $('.requestQuoteBlk-r-thanks').height()-212,

		opacity:0

	},1200,function(){

		$('#requestQuoteBlk-r-thanks').hide();

	});
//$('.formError').hide();	
}





function callPopup(p){

	$('.videoPopupframe').fadeOut();

	$('#videoPopupframe-'+p).fadeIn();
	
	

}

function closeVidpopup(p){

	$(p).parent('.videoPopupframe').find('video')[0].pause();

	$('.videoPopupframe').fadeOut();
	


}
function IEcloseVidpopup(p){
	player = new JarisFLVPlayer($(p).parent('.videoPopupframe').find('object').attr('id'));
	player.pause();
	$('.videoPopupframe').fadeOut();
}
function resetResize(){
		screen_height1=$(window).height();

    screen_width1=$(window).width();
	$('.balloon-default1').css('left',(screen_width1/2)-($('.balloon-default1').width()/2));

	$('.balloon-defaultwh').css('left',(screen_width1/2)-($('.balloon-defaultwh').width()/2));

	$('.balloon-defaultr1').css('left',(screen_width1/2));

	$('.balloon-default2').css('left',(screen_width1/2)-($('.balloon-default2').width()*2)+42);

	

	$('.balloon-default2-b').css('right',(screen_width1/2)-($('.balloon-default2').width()*2)+142);

	

	$('.balloon-default3').css('left',(screen_width1/2)-($('.balloon-default2').width()));

	$('.balloon-default3-b').css('left',(screen_width1/2)-($('.balloon-default2').width())-200);



	$('.balloon-default4').css('right',(screen_width1/2)-($('.balloon-default2').width())-($('.balloon-default3').width()+70));

	$('.balloon-default4b').css('left',(screen_width1/2)-($('.balloon-default2').width())-($('.balloon-default3').width()-70));

	$('.storeBtnlml').css('left',(screen_width1/2)-($('.storeBtnlml').width()/2));

	

	$('.whyustext').css('left',(screen_width1/2)-45);

	

$('.scroll-sayingtitle').css('left',($(window).width()/2)-266-100);

$('.client-saying-default1').css('left',($(window).width()/2)-266-100);

$('.client-saying-default2').css('left',($(window).width()/2)-250-260);

$('.client-saying-default3').css('left',($(window).width()/2)-243+175);

$('.client-saying-default5').css('left',($(window).width()/2)-243);
$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-bubble1,.scroll-bubble2,.scroll-bubble3').css('top',screen_height1);


if (($(window).height())>168){

	$('#loadinglogo').css('margin-top',($(window).height()/2)-74)

	}

	else{

		$('#loadinglogo').css('margin-top',0)

}
}

$(window).resize(function(){
	resetResize();
});


function IEload_animation(){
	$('body').addClass('bodyFixheight');
    $("html").niceScroll();
	screen_height=$(window).height();

    screen_width=$(window).width();

	$("#home").css('z-index',1);

	$("#whyus").css('z-index',2);

	$("#ourprocess").css('z-index',3);

	$("#clientsayings").css('z-index',4);

	$("#requestquote").css('z-index',5);

	$("#kandyvideos").css('z-index',6);

	$("#top").css('z-index',10);

	$("#home").css('min-height',$(window).height())

	//$("#home").find('.screenVideo').css('min-height',$(window).height())

	$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-default4b,.balloon-defaultr1,.whyustext').css('top',screen_height);

	$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-defaultr1,.balloon-default4b,.whyustext').css('bottom','auto');

	$('.balloon-defaultwh').css('top',1187);

	$('.scroll-balloonwh-c_l1t1').css('top',560);

	$('.scroll-balloonwh-c_l1t2').css('top',660);

	$('.scroll-balloonwh-c_l1t3').css('top',560);

	$('.scroll-balloonwh-c_l2t1').css('top',360);

	$('.scroll-balloonwh-c_l2t2').css('top',660);

	$('.scroll-balloonwh-c_l2t3').css('top',800);


	

	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-bubble1,.scroll-bubble2,.scroll-bubble3').css('top',screen_height);

	

	$('.scroll-sayingtitle').css('top',400);

	

	$('.balloon-default1').css('z-index',9);

	$('.balloon-defaultr1').css('z-index',8);

	$('.clouds2l-default').css('z-index',8);

	$('.balloon-default2').css('z-index',7);

	$('.balloon-default3').css('z-index',6);

	$('.balloon-default4').css('z-index',5);

	$('.clouds2r2-default').css('z-index',4);

	$('.clouds2r1-default').css('z-index',3);

	$('.balloon-defaultwh').css('z-index',9);



	$('.whyustext').css('z-index',5);

	$('.balloon-default1').css('left',(screen_width/2)-($('.balloon-default1').width()/2));

	$('.balloon-defaultwh').css('left',(screen_width/2)-($('.balloon-defaultwh').width()/2));

	$('.balloon-defaultr1').css('left',(screen_width/2));

	$('.balloon-default2').css('left',(screen_width/2)-($('.balloon-default2').width()*2)+42);

	

	$('.balloon-default2-b').css('right',(screen_width/2)-($('.balloon-default2').width()*2)+142);

	

	$('.balloon-default3').css('left',(screen_width/2)-($('.balloon-default2').width()));

	$('.balloon-default3-b').css('left',(screen_width/2)-($('.balloon-default2').width())-200);



	$('.balloon-default4').css('right',(screen_width/2)-($('.balloon-default2').width())-($('.balloon-default3').width()+70));

	$('.balloon-default4b').css('left',(screen_width/2)-($('.balloon-default2').width())-($('.balloon-default3').width()-70));

	$('.storeBtnlml').css('left',(screen_width/2)-($('.storeBtnlml').width()/2));

	

	$('.whyustext').css('left',(screen_width/2)-45);

	

    $('.clouds2l-default').css('top',100);

	$('.clouds2r1-default').css('top',0);

	$('.clouds2r2-default').css('top',400);

	

    RepositionNav();



    var deck = new $.scrolldeck({

        buttons: '.navigation',

        slides: '.pages',

        duration: 600,

        easing: 'linear',

        offset: 0

    });



	
	
}


function IEloadComplted(){


	

	if (($(window).height())>588){

	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)

	}

	else{

		$('#home .screenVideo').css('margin-top',0)

	}

	

IEload_animation();



$('#client-sayings').css('height',$(window).height());





$('.scroll-sayingtitle').css('left',($(window).width()/2)-266-100);

$('.client-saying-default1').css('left',($(window).width()/2)-266-100);

$('.client-saying-default2').css('left',($(window).width()/2)-250-260);

$('.client-saying-default3').css('left',($(window).width()/2)-243+175);

$('.client-saying-default5').css('left',($(window).width()/2)-243);



	//save selectors as variables to increase performance

	var $window = $(window);

	var $homeBG = $('#home');

	var homesprite = $('#home .sprite');

	var $whyusBG = $('#whyus');

	var whyussprite = $('#whyus .sprite');

	var $ourprocessBG = $('#ourprocess');

	var ourprocesssprite = $('#ourprocess .sprite');

	var $kandyvideosBG = $('#kandyvideos');

	var kandyvideossprite = $('#kandyvideos .sprite');

	var $clientsayingsBG = $('#clientsayings');

	var clientsayingssprite = $('#clientsayings .sprite');

	var $requestquoteBG = $('#requestquote');

	var requestquotesprite = $('#requestquote .sprite');



	

	var windowHeight = $window.height(); //get the height of the window

	

	

	//apply the class "inview" to a section that is in the viewport

	$("#home, #whyusin, #ourprocess, #kandyvideos, #clientsayings, #requestquote, #store").bind("inview", function (event, visible) {

			if (visible) {
				
			$('.menu').find('.item').removeClass('active');			
			//$('.menu').find('.'+$(this).attr('id')+'Aclink').addClass('active');	

			$(this).addClass("inview");
			
			$(this).css('min-height',$(window).height())

			} else {

			$(this).removeClass("inview");
			
		//	$('.menu').find('.'+$(this).attr('id')+'Aclink').removeClass('active');

			}

		});


			

	//function that places the navigation in the center of the window

	// function RepositionNav(){

	// 	var windowHeight = $window.height(); //get the height of the window

	// 	var navHeight = $('#nav').height() / 2;

	// 	var windowCenter = (windowHeight / 2); 

	// 	var newtop = windowCenter - navHeight;

	// 	$('#nav').css({"top": newtop}); //set the new top position of the navigation list

	// }

	

	//function that is called for every pixel the user scrolls. Determines the position of the background

	/*arguments: 

		x = horizontal position of background

		windowHeight = height of the viewport

		pos = position of the scrollbar

		adjuster = adjust the position of the background

		inertia = how fast the background moves in relation to scrolling

	*/

	function newPos(x, windowHeight, pos, adjuster, inertia){

		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia) -8 + "px";

	}

	function newPos01(x, windowHeight, pos, adjuster, inertia){

		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";

	}

	function newPos1(windowHeight, pos, adjuster, inertia){

		return  (-((windowHeight + pos) - adjuster) * inertia) ;

	}

	//function to be called whenever the window is scrolled or resized

	function Move(){ 

		var pos = $window.scrollTop(); //position of the scrollbar

		

		// Ausgabe: Position, Window height

		//$("#meta").html("pos: "+pos+" windowHeight: "+windowHeight);

		

		// home: 0

		if($homeBG.hasClass("inview")){

			//call the newPos function and change the background position

			$homeBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 600, 0.3)}); 

			//call the newPos function and change the secnond background position

			//homesprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 1143, 0.6)});

		}

		

		// whyus: 1000

		if($whyusBG.hasClass("inview")){

			/*//call the newPos function and change the background position

			$whyusBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1800, 0.3)});

			var ptr=(((windowHeight + pos) - 3) * 0.1) 

			//$whyusBG.find('.wrapper').css({'marginTop': ptr+'px'});

			whyussprite.css({'backgroundPosition': newPos01(80, windowHeight, pos, 9580, 0.06)});

			$('.spritesun').css({'backgroundPosition': newPos(30, windowHeight, pos, 2200, 0.19)});

			var p = newPos1(windowHeight, pos, 2200, 0.19);

			if (p<81){

				 $('.spritesun').addClass('spritesunFixed');	

			}

			else{

				 $('.spritesun').removeClass('spritesunFixed');	

			}*/

			

		}

		

		// ourprocess: 2000

		if($ourprocessBG.hasClass("inview")){

			//call the newPos function and change the background position

			$ourprocessBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2800, 0.3)}); 

			//call the newPos function and change the secnond background position

			//ourprocesssprite.css({'backgroundPosition': newPos01(center, windowHeight, pos, 6580, 0.06)});

			

			

		}

		

		// kandyvideos: 3000

		if($kandyvideosBG.hasClass("inview")){

			//call the newPos function and change the background position

			$kandyvideosBG.css({'backgroundPosition': newPos01(50, windowHeight, pos, 3850, 0.01)}); 

			//call the newPos function and change the secnond background position

			//kandyvideossprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 3660, -0.6)});

		}



		// clientsayings: 4000

		if($clientsayingsBG.hasClass("inview")){

			//call the newPos function and change the background position

		//	$clientsayingsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4800, 0.3)}); 

			//call the newPos function and change the secnond background position

			//clientsayingssprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 5300, 0.6)});

		}



		// requestquote: 5000

		if($requestquoteBG.hasClass("inview")){

			//call the newPos function and change the background position

		//	$requestquoteBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5800, 0.3)}); 

			//call the newPos function and change the secnond background position

			//requestquotesprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 6350, 0.6)});

		}



		

	}

		

	//RepositionNav(); //Reposition the Navigation to center it in the window when the script loads

	

	$window.resize(function(){ //if the user resizes the window...

		//Move(); //move the background images in relation to the movement of the scrollbar

		//RepositionNav(); //reposition the navigation list so it remains vertically central

		resetResize();

	});		

	

	$window.bind('scroll', function(){ //when the user is scrolling...

		Move(); //move the background images in relation to the movement of the scrollbar

	});

	

	
}