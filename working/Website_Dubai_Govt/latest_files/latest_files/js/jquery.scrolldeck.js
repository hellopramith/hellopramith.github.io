/*
	scrolldeck - jQuery scrolldeck to create a vertically scrolling presentation deck
	by John Polacek (@johnpolacek)
	
	Dual licensed under MIT and GPL.
*/

(function($) {
    $.scrolldeck = function(options) {
		
		
		// VARS
		
		var currIndex = 0,
			buttons,
			slides,
			scrollpoints = [],
			sections = [],
			windowHeight = $(window).height(),
			i;
		
		var defaults = {
			buttons: '.navigation1',
			slides: '.slide',
			duration: 1000,
			easing: 'easeInOutExpo',
			offset: 0
		};
		
		
		// INIT
		
		var scrolldeck = this;
		scrolldeck.settings = {};
			
		var init = function() {
			
			scrolldeck.settings = $.extend({}, defaults, options);
			
			buttons = $(scrolldeck.settings.buttons);
			slides = $(scrolldeck.settings.slides);
			scrolldeck.controller = $.scrollorama({blocks:slides, offset:scrolldeck.settings.offset});
			
			// add animations with scrollorama
			var anim;
			// ANIMATE INS
			for (i=0; i<$('.animate-in').length; i++) {
				anim = $('.animate-in').eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'left', start:-1200 });
						break;
					case 'fly-in-right':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'right', start:-1200 });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: windowHeight-123, duration: 100, property:'letter-spacing', start:40 });
						scrolldeck.controller.animate(anim, { delay: windowHeight-122, duration: 100, property:'opacity', start:0 });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: 100, property:'opacity', start:0,end:1 });
						break;
					default:
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });
				}
			}
			
			// ANIMATE BUILDS
			for (i=0; i<$('.animate-build').length; i++) {
				anim = $('.animate-build').eq(i);
				switch (anim.attr('data-animation')) {
				
						case 'skylin0':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 1000,
						 	 property:'bottom',
						 	 start:-55,
							 end:0,
						    pin:false });
						break;	
						case 'skylin1':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 1000,
						 	 property:'bottom',
						 	 start:0,
							 end:50,
						    pin:false });
						break;	
						case 'skylin2':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 1450,
						 	 property:'bottom',
						 	 start:0,
							 end:30,
						    pin:false });
						break;	
						case 'skylin3':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 1000,
						 	 property:'bottom',
						 	 start:0,
							 end:50,
						    pin:false });
						break;	
						case 'r_price':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 500,
						 	 property:'bottom',
						 	 start:-20,
							 end:0,
						    pin:false });
						break;
						
						
						case 'stop1':
						scrolldeck.controller.animate(anim, { 
							delay: 12,
							 duration: 800,
						 	 property:'marginTop',
						 	 start:-80,
							 end:-423,
						    pin:false });
						break;
						case 'stop2':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 1000,
						 	 property:'marginTop',
						 	 start:0,
							 end:-153,
						    pin:false });
						break;
						case 's1h1':
						scrolldeck.controller.animate(anim, { 
							delay: 30,
							 duration: 150,
						 	 property:'top',
						 	 start:0,
							 end:-65,
						    pin:false });
						break;
					case 'mainVideo':
						scrolldeck.controller.animate(anim, { 
							delay: 00,
							 duration: 400,
						 	 property:'top',
						 	 start:499,
							 end:169,
						    pin:false});
						break;
					case 'slide3_r':
						scrolldeck.controller.animate(anim, { 
							delay: 400,
							 duration: 800,
						 	 property:'opacity',
						 	 start:0,
							 end:1,
						    pin:false});
						break;		
					case 'videoTitlemain':
						scrolldeck.controller.animate(anim, { 
							delay: 700,
							 duration: 100,
						 	 property:'opacity',
						 	 start:0,
							 end:1,
						    pin:false});
						break;	
					case 'leftVideoDesc':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 500,
						 	 property:'left',
						 	 start:-203,
							 end:0,
						    pin:false});
						break;	
					case 'videoTile1':
						scrolldeck.controller.animate(anim, { 
							delay: 000,
							 duration: 600,
						 	 property:'top',
						 	 start:499,
							 end:0,
						    pin:false});
						break;
					case 'videoTile2':
						scrolldeck.controller.animate(anim, { 
							delay: 10,
							 duration: 600,
						 	 property:'top',
						 	 start:599,
							 end:0,
						    pin:false});
						break;
					case 'videoTileb':
						scrolldeck.controller.animate(anim, { 
							delay: 10,
							 duration: 600,
						 	 property:'bottom',
						 	 start:-599,
							 end:0,
						    pin:false});
						break;	
					case 'videoTile3':
						scrolldeck.controller.animate(anim, { 
							delay: 20,
							 duration: 600,
						 	 property:'top',
						 	 start:599,
							 end:0,
						    pin:false});
						break;	
					case 'photoFrmTile1':
						scrolldeck.controller.animate(anim, { 
							delay: 000,
							 duration: 600,
						 	 property:'top',
						 	 start:599,
							 end:0,
						    pin:false});
						break;
					case 'photoFrmTile2':
						scrolldeck.controller.animate(anim, { 
							delay: 10,
							 duration: 400,
						 	 property:'top',
						 	 start:599,
							 end:0,
						    pin:false});
						break;
					case 'photoFrmTile3':
						scrolldeck.controller.animate(anim, { 
							delay: 20,
							 duration: 500,
						 	 property:'top',
						 	 start:599,
							 end:0,
						    pin:false});
						break;		
					case 'photoFrmTile4':
						scrolldeck.controller.animate(anim, { 
							delay: 10,
							 duration: 600,
						 	 property:'top',
						 	 start:599,
							 end:0,
						    pin:false});
						break;
					case 'photoFrmTile5':
						scrolldeck.controller.animate(anim, { 
							delay: 20,
							 duration: 600,
						 	 property:'top',
						 	 start:699,
							 end:0,
						    pin:false});
						break;
					case 'photoFrmTile6':
						scrolldeck.controller.animate(anim, { 
							delay: 30,
							 duration: 600,
						 	 property:'top',
						 	 start:799,
							 end:0,
						    pin:false});
						break;	
					case 'photoTiledummy':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 1000,
						 	 property:'left',
						 	 start:0,
							 end:1045,
						    pin:false});
						break;		
					case 'videoTiledummy':
						scrolldeck.controller.animate(anim, { 
							delay: 0,
							 duration: 900,
						 	 property:'left',
						 	 start:0,
							 end:1045,
						    pin:false});
						break;				
					case 'fly-in-left':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'left', start:-1200, pin:true });
						break;
					case 'fly-in-right':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'right', start:-1200, pin:true });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'letter-spacing', start:40, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					default:
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
				}
			}
			
			// set slide and animation scrollpoints
			scrollpoints = scrolldeck.controller.getScrollpoints();
			
			// if nav buttons, create array of section header slide indexes
			for (i=0; i<buttons.length;i++)
				sections.push(slides.index($($(buttons[i]).attr('href'))));
			
			// event handler for updating current slide index and current nav button
			scrolldeck.controller.onBlockChange(function() {
				// get slide index
				currIndex = scrolldeck.controller.blockIndex;
				
				// then update nav
				updateNav();
			});
			
			// Nav button click event
			buttons.on('click', function(e) {
				e.preventDefault();
				var slide = $($(this).attr('href'));
				currIndex = slide.index();
				scrollToSlide(slide);
			});
			
			// Keyboard events
			$(document).on('keydown', function(e){
				// up/left arrow = scroll up
				if ((e.keyCode == 37 || e.keyCode == 38) && currIndex !== 0) {
					scrollToSlide(getPrevScrollpoint());
				}
				// down/right arrow, space = scroll down
				else if ((e.keyCode == 39 || e.keyCode == 32 || e.keyCode == 40) && currIndex != slides.length-1) {
					scrollToSlide(getNextScrollpoint());
				}
			});
			
			// if slides are images, assign height to auto for proportional scaling
			for (i=0; i<slides.length; i++) {
				var el = slides.eq(i);
				if (el.prop('tagName').toUpperCase() === 'IMG') {
					el.css('height','auto');
				}
			}
			
			// if last slide is shorter than height of window, increase height
			var lastSlide = slides.eq(slides.length-1);
			if (lastSlide.outerHeight() < $(window).height()) {
				lastSlide.height(lastSlide.height()+$(window).height()-lastSlide.outerHeight());
			}
			
			updateNav();
		};
		
		
		
		// PRIVATE FUNCTIONS
		
		function updateNav() {
			if (buttons) {
				buttons.removeClass('current');
				var currSection = -1;
				for (i=0; i<sections.length;i++) {
					if (currIndex >= sections[i]) {
						currSection = i;
					}
				}
				if (currSection != -1) {
					buttons.eq(currSection).addClass('current');
				}
			}
		}
		
		function scrollToSlide(slide) {
			$(window)._scrollable().stop();
			$(window).scrollTo(slide, {
				duration: scrolldeck.settings.duration,
				easing: scrolldeck.settings.easing,
				offset: scrolldeck.settings.offset
			});
		}
		
		function getNextScrollpoint() {
			return getScrollpoint(2);
		}
		
		function getPrevScrollpoint() {
			return getScrollpoint(-1);
		}
		
		function getScrollpoint(n) {
			var scrollTop = $(window).scrollTop();
			// make temp dup scrollpoints array
			var points = scrollpoints.slice(0);
			// add current scroll position to new temp array
			points.push(scrollTop);
			// do sort to find nearest scrollpoint
			points.sort(function(a,b){return a - b;});
			return points[points.indexOf(scrollTop)+n];
		}
		
		
		// INIT
		init();
    };
     
})(jQuery);