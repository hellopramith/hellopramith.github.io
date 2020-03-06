(function($) {
    $.scrolldeck = function(options) {
        var currIndex = 0,
        buttons,
        slides,
        scrollpoints = [],
        sections = [],
        windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        i;

       $("#headerd").css('min-height',windowHeight)
        var defaults = {
            buttons: '.nav-button',
            slides: '.slide',
            duration: 4500,
            easing: 'easeInOutExpo',
            offset: 0
        };

        // INIT
        screen_height = $(window).height();
        screen_width = $(window).width();
        var scrolldeck = this;
        scrolldeck.settings = {};
        var init = function() {
	    var totWidth=0;

       scrolldeck.settings = $.extend({}, defaults, options);
       buttons = $(scrolldeck.settings.buttons);
       slides = $(scrolldeck.settings.slides);



       scrolldeck.controller = $.scrollorama({
          blocks:slides,
          offset:scrolldeck.settings.offset
        });

            // add animations with scrollorama

            var anim;

            // ANIMATE INS

            for (i=0; i<$('.animate-in').length; i++) {

                anim = $('.animate-in').eq(i);

                switch (anim.attr('data-animation')) {

                    case 'fly-in-left':

                        anim.parent().css('overflow','hidden');

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight/2,

                            duration: windowHeight/2,

                            property:'left',

                            start:-1200

                        });

                        break;

                    case 'fly-in-left-maadi':

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight/2,

                            duration: windowHeight/2,

                            property:'left',

                            start:-1200

                        });

                        break;

                    case 'fly-in-right':

                        anim.parent().css('overflow','hidden');

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight/2,

                            duration: windowHeight/2,

                            property:'right',

                            start:-1200

                        });

                        break;

                    case 'fly-in-right-maadi':

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight/2,

                            duration: windowHeight/2,

                            property:'right',

                            start:-1200

                        });

                        break;



                    case 'space-in':

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight*0.8,

                            duration: windowHeight*0.2,

                            property:'letter-spacing',

                            start:40

                        });

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight*0.8,

                            duration: windowHeight*0.2,

                            property:'opacity',

                            start:0

                        });

                        break;

                    case 'fade-in':

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight/2,

                            duration: windowHeight/2,

                            property:'opacity',

                            start:0

                        });

                        break;

                    default:

                        scrolldeck.controller.animate(anim, {

                            delay: windowHeight/2,

                            duration: windowHeight/2,

                            property:'opacity',

                            start:0

                        });

					}

            }

            // ANIMATE BUILDS

            for (i=0; i<$('.animate-build').length; i++) {

                anim = $('.animate-build').eq(i);

                switch (anim.attr('data-animation')) {

					case 'txtiam':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 1000,
                            property:'top',
                            start:75,
                            end:0,
                            pin:false
                        });
                        break;
					case 'txtpramith':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 300,
                            property:'opacity',
                            start:1,
                            end:0,
                            pin:false
                        });
                        break;
					case 'txtprakash':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 200,
                            property:'opacity',
                            start:1,
                            end:0,
                            pin:false
                        });
                        break;
					case 'txta':
                        scrolldeck.controller.animate(anim, {
                            delay: 124,
                            duration: 633,
                            property:'top',
                            start:259,
                            end:0,
                            pin:false
                        });
                        break;
					case 'txtuideveloper':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 1700,
                            property:'top',
                            start:231,
                            end:845,
                            pin:false
                        });
                        break;	
					case 'txttxt1':
                        scrolldeck.controller.animate(anim, {
                            delay: 100,
                            duration: 600,
                            property:'left',
                            start:324,
                            end:0,
                            pin:false
                        });
                        break;	
					case 'txttxt2':
                        scrolldeck.controller.animate(anim, {
                            delay: 9,
                            duration: 1000,
                            property:'left',
                            start:196,
                            end:0,
                            pin:false
                        });
                        break;	
					case 'skills-jquery':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 600,
                            property:'bottom',
                            start:-700,
                            end:22,
                            pin:false
                        });
                        break;	
					case 'skills-html5':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 500,
                            property:'bottom',
                            start:-700,
                            end:23,
                            pin:false
                        });
                        break;	
					case 'skills-css':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 600,
                            property:'left',
                            start:-700,
                            end:515,
                            pin:false
                        });
                        break;	
					case 'skills-photoshop':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 400,
                            property:'bottom',
                            start:-400,
                            end:121,
                            pin:false
                        });
                        break;	
					case 'skills-dreamweaver':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 400,
                            property:'bottom',
                            start:-700,
                            end:31,
                            pin:false
                        });
                        break;	
					case 'skills-javascript':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 600,
                            property:'bottom',
                            start:-700,
                            end:231,
                            pin:false
                        });
                        break;	
					case 'title-skills':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 700,
                            property:'bottom',
                            start:1000,
                            end:60,
                            pin:false
                        });
                        break;	
					case 'aboutCntL':
                        scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 700,
                            property:'left',
                            start:-538,
                            end:16,
                            pin:false
                        });
                        break;	
					case 'aboutCntR':
                        scrolldeck.controller.animate(anim, {
                            delay: 70,
                            duration: 600,
                            property:'bottom',
                            start:-200,
                            end:52,
                            pin:false
                        });
                        break;		
					case 'exp_block':
                        scrolldeck.controller.animate(anim, {
                            delay: 700,
                            duration: 200,
                            property:'opacity',
                            start:0.2,
                            end:1,
                            pin:false
                        });
                        break;	
					case 'downloadCV':
                        scrolldeck.controller.animate(anim, {
                            delay: 700,
                            duration: 200,
                            property:'opacity',
                            start:0.2,
                            end:1,
                            pin:false
                        });
                        break;		
                    default:

                        scrolldeck.controller.animate(anim, {

                            delay: (anim.attr('data-build')-1)*400,

                            duration: 400,

                            property:'opacity',

                            start:0,

                            pin:true

                        });

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

            buttons.click(function(e) {

                e.preventDefault();

                var slide = $($(this).attr('href'));

                currIndex = slide.index();

                scrollToSlide(slide);

            });



            // Keyboard events

            $(document).keydown(function(e){

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

            points.sort(function(a,b){

                return a - b;

            });

            return points[points.indexOf(scrollTop)+n];

        }





        // INIT

        init();

    };



})(jQuery);