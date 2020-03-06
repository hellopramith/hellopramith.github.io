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

        windowWidth = $(window).width(),

        i;



        var defaults = {

            buttons: '.nav-button',

            slides: '.slide',

            duration: 600,

            easing: 'easeInOutExpo',

            offset: 0

        };

        // INIT

        var scrolldeck = this;

        scrolldeck.settings = {};

        var init = function() {

           //  $(".windows_info").html("<small>"+screen_height+"x"+screen_width+"</small>");

            var totWidth=0;

             //$('.pages').css('min-height', screen_height);

            scrolldeck.settings = $.extend({}, defaults, options);

            buttons = $(scrolldeck.settings.buttons);

            slides = $(scrolldeck.settings.slides);



            $(".left-videos").css("width", windowWidth);

            $(".scroller").width(windowWidth*$(".scroller div.left-videos").length);

            $(".scroller_page").width(windowWidth*$(".scroller_page div.left-videos").length+100);

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

                    case 'fly-in-left':

                        anim.parent().css('overflow','hidden');

                        scrolldeck.controller.animate(anim, {

                            delay: (anim.attr('data-build')-1)*400,

                            duration: 400,

                            property:'left',

                            start:-1200,

                            pin:true

                        });

                        break;

                    case 'fly-in-right':

                        anim.parent().css('overflow','hidden');

                        scrolldeck.controller.animate(anim, {

                            delay: (anim.attr('data-build')-1)*400,

                            duration: 400,

                            property:'right',

                            start:-1200,

                            pin:true

                        });

                        break;

                    case 'space-in':

                        scrolldeck.controller.animate(anim, {

                            delay: (anim.attr('data-build')-1)*400,

                            duration: 400,

                            property:'letter-spacing',

                            start:40,

                            pin:true

                        });

                        scrolldeck.controller.animate(anim, {

                            delay: (anim.attr('data-build')-1)*400,

                            duration: 400,

                            property:'opacity',

                            start:0,

                            pin:true

                        });

                        break;

                    case 'fade-in':

                        scrolldeck.controller.animate(anim, {

                            delay: (anim.attr('data-build')-1)*400,

                            duration: 400,

                            property:'opacity',

                            start:0,

                            pin:true

                        });

                        break;

                    case 'scroll-maadi':

                        scrolldeck.controller.animate(anim, {

                            delay: 400,

                            duration: anim.width(),

                            property:'right',

                            start:0,

                            end:anim.width()-$(window).width(),

                            pin:true

                        });

                        break;

					case 'scroll-cloud1':

                        scrolldeck.controller.animate(anim, {

                             delay: 100,

                            duration: $('#kandyvideos').find('.scroller').width(),

                            property:'bottom',

                            start:12,

                            end:windowHeight+200,

                            pin:true

                        });

                        break;

					case 'scroll-cloud2':

                        scrolldeck.controller.animate(anim, {

                            delay: 500,

                            duration: $('#kandyvideos').find('.scroller').width()+100,

                            property:'bottom',

                            start:0,

                            end:windowHeight-200,

                            pin:false

                        });

                        break;

						

						

					/*New design v3*/	

					case 'scroll-whyustext':

                         scrolldeck.controller.animate(anim, {

                            delay: 0,

                            duration: 2200,

                            property:'top',

                            start:$(window).height(),

                            end:-($('.balloon-default1').height()),

                            pin:false

                        });

                        break;	
					case 'scroll-balloon1':
                         scrolldeck.controller.animate(anim, {
                            delay:0,
                            duration: 400,
                            property:'top',
                            start:600,
                            end:75,
                            pin:false
                        });
                        break;
					case 'scroll-balloonr1':
                         scrolldeck.controller.animate(anim, {
                            delay: 0,
                            duration: 750,
                            property:'top',
                            start:$('.balloon-default1').height()+700,
                            end:500,
                            pin:false
                        });
                        break;
					/*case 'scroll-balloon1':

                         scrolldeck.controller.animate(anim, {

                            delay: 300,

                            duration: 5200,

                            property:'top',

                            start:$(window).height()/3,

                            end:-$('.balloon-default1').height()*2,

                            pin:false

                        });

                        break;

					case 'scroll-balloonr1':

                         scrolldeck.controller.animate(anim, {

                            delay: 200,

                            duration: 3000,

                            property:'top',

                            start:$(window).height()+$('.balloon-default1').height()/2,

                            end:-$('.balloon-defaultr1').height()*2,

                            pin:false

                        });

                        break;	*/

					case 'scroll-balloonwh':

                         scrolldeck.controller.animate(anim, {

                            delay: 500,

                            duration: 1200,

                            property:'top',

                            start:1387,

                            end:1187,

                            pin:false

                        });

                        break;	

						

					case 'scroll-balloonwh-c_l1t1':

                         scrolldeck.controller.animate(anim, {

                            delay: 923,

                            duration: 850,

                            property:'top',

                            start:1060,

                            end:385,

                            pin:false

                        });

                        break;		

					case 'scroll-balloonwh-c_l1t2':

                         scrolldeck.controller.animate(anim, {

                            delay: 923,

                            duration: 900,

                            property:'top',

                            start:960,

                            end:515,

                            pin:false

                        });

                        break;	

					case 'scroll-balloonwh-c_l1t3':

                         scrolldeck.controller.animate(anim, {

                            delay: 1123,

                            duration: 900,

                            property:'top',

                            start:860,

                            end:642,

                            pin:false

                        });

                        break;

					case 'scroll-balloonwh-c_l2t1':

                         scrolldeck.controller.animate(anim, {

                            delay: 923,

                            duration: 1000,

                            property:'top',

                            start:660,

                            end:356,

                            pin:false

                        });

                        break;

					case 'scroll-balloonwh-c_l2t2':

                         scrolldeck.controller.animate(anim, {

                            delay: 1023,

                            duration: 900,

                            property:'top',

                            start:960,

                            end:492,

                            pin:false

                        });

                        break;					

					case 'scroll-balloonwh-c_l2t3':

                         scrolldeck.controller.animate(anim, {

                            delay: 1300,

                            duration: 900,

                            property:'top',

                            start:1100,

                            end:700,

                            pin:false

                        });

                        break;	

					case 'scroll-balloon2':

                         scrolldeck.controller.animate(anim, {

                            delay: 700,

                            duration: 3200,

                            property:'top',

                            start:$(window).height(),

                            end:-$('.balloon-default2').height(),

                            pin:false

                        });

                        break;

					case 'scroll-balloon2-b':

                         scrolldeck.controller.animate(anim, {

                            delay: 1700,

                            duration: 6300,

                            property:'top',

                            start:$(window).height()*2,

                            end:-$('.balloon-default1').height(),

                            pin:false

                        });

                        break;	

						

					

					case 'scroll-balloon3':

                         scrolldeck.controller.animate(anim, {

                            delay: 1250,

                            duration: 10720,

                            property:'top',

                            start:$(window).height()+$('.balloon-default3').height(),

                            end:0,

                            pin:false

                        });

                        break;	

					case 'scroll-balloon3-b':

                         scrolldeck.controller.animate(anim, {

                            delay: 1500,

                            duration: 10000,

                            property:'top',

                            start:1953,

                            end:$(window).height()-200,

                            pin:false

                        });

                        break;

				 		

					case 'scroll-balloon4':

                         scrolldeck.controller.animate(anim, {

                            delay: 900,

                            duration: 1500,

                            property:'top',

                            start:$(window).height()+$('.balloon-default4').height(),

                            end:200,

                            pin:false

                        });

                        break;

					case 'scroll-balloon4b':

                         scrolldeck.controller.animate(anim, {

                            delay: 1800,

                            duration: 2000,

                            property:'top',

                            start:1953,

                            end:$(window).height()-800,

                            pin:false

                        });

                        break;	

					case 'scroll-clouds2l':

                         scrolldeck.controller.animate(anim, {

                            delay: 100,

                            duration: 5000,

                            property:'left',

                            start:-$('.balloon-default1').width()/2,

                            end:($(window).width()/2)-($('.balloon-default1').width()/2),

                            pin:false

                        });

                        break;

					case 'scroll-clouds2r1':

                         scrolldeck.controller.animate(anim, {

                            delay: 500,

                            duration: 3000,

                            property:'left',

                            start:($(window).width()/2)-($('.balloon-default1').width()/2)+300,

                            end:($(window).width()/2)-($('.balloon-default1').width()/2)+800,

                            pin:false

                        });

                        break;

					case 'scroll-clouds2r2':

                         scrolldeck.controller.animate(anim, {

                             delay: 500,

                            duration: 1000,

                            property:'left',

                            start:($(window).width()/2)-($('.balloon-default1').width()/2)+400,

                            end:($(window).width()/2)-($('.balloon-default1').width()/2)+800,

                            pin:false

                        });

                        break;		

						case 'left-section1':

                         scrolldeck.controller.animate(anim, {

                            delay: 5,

                            duration: 510,

                            property:'top',

                            start:$(window).height()+75,

                            end:35,

                            pin:false

                        });

                        break;

						case 'left-section2':

                         scrolldeck.controller.animate(anim, {

                            delay: 8,

                            duration: 550,

                            property:'top',

                            start:$(window).height()+130,

                            end:154,

                            pin:false

                        });

                        break;

						case 'left-section3':

                         scrolldeck.controller.animate(anim, {

                            delay: 5,

                            duration: 600,

                            property:'top',

                            start:$(window).height()+235,

                            end:278,

                            pin:false

                        });

                        break;

						case 'right-section1':

                         scrolldeck.controller.animate(anim, {

                            delay: 0,

                            duration: 500,

                            property:'top',

                            start:$(window).height()+25,

                            end:6,

                            pin:false

                        });

                        break;

						case 'right-section2':

                         scrolldeck.controller.animate(anim, {

                            delay: 10,

                            duration: 500,

                            property:'top',

                            start:$(window).height()+75,

                            end:125,

                            pin:false

                        });

                        break;

						case 'right-section3':

                         scrolldeck.controller.animate(anim, {

                            delay: 5,

                            duration: 505,

                            property:'top',

                            start:$(window).height()+125,

                            end:224,

                            pin:false

                        });

                        break;

						case 'right-section4':

                         scrolldeck.controller.animate(anim, {

                            delay: 0,

                            duration: 700,

                            property:'top',

                            start:$(window).height()+225,

                            end:318,

                            pin:false

                        });

                        break;

						case 'ourprocess-ic':

                         scrolldeck.controller.animate(anim, {

                            delay: 000,

                            duration: 600,

                            property:'top',

                            start:200,

                            end:0,

                            pin:false

                        });

                        break;

						case 'kreatTxt':

                         scrolldeck.controller.animate(anim, {

                            delay: 250,

                            duration: 200,

                            property:'top',

                            start:120,

                            end:0,

                            pin:false

                        });

                        break;

						case 'our_processFoot':

                         scrolldeck.controller.animate(anim, {

                            delay: 650,

                            duration: 400,

                            property:'top',

                            start:120,

                            end:0,

                            pin:false

                        });

                        break;

						case 'our_processFootimg':

                         scrolldeck.controller.animate(anim, {

                            delay: 650,

                            duration: 600,

                            property:'top',

                            start:420,

                            end:14,

                            pin:false

                        });

                        break;

						

					case 'scroll-sayingtitle':

                         scrolldeck.controller.animate(anim, {

                            delay: 0,

                            duration: 300,

                            property:'top',

                            start:400,

                            end:56,

                            pin:false

                        });

                        break;	

					case 'scroll-saying1':

                         scrolldeck.controller.animate(anim, {

                            delay: 250,

                            duration: 1500,

                            property:'top',

                            start:$(window).height()-100,

                            end:-680,

                            pin:false

                        });

                        break;

					case 'scroll-saying2':

                         scrolldeck.controller.animate(anim, {

                            delay: 450,

                            duration: 1150,

                            property:'top',

                            start:$(window).height()+$('.client-saying-default1').height(),

                            end:-691,

                            pin:false

                        });

                        break;

					case 'scroll-saying3':

                         scrolldeck.controller.animate(anim, {

                            delay: 400,

                            duration: 1000,

                            property:'top',

                            start:$(window).height()+$('.client-saying-default1').height()+$('.client-saying-default2').height(),

                            end:-197,

                            pin:false

                        });

                        break;	

					case 'scroll-saying4':

                         scrolldeck.controller.animate(anim, {

                            delay: 450,

                            duration: 1000,

                            property:'top',

                            start:$(window).height()+$('.client-saying-default1').height()+$('.client-saying-default2').height()+$('.client-saying-default3').height(),

                            end:368,

                            pin:false

                        });

                        break;

					case 'scroll-saying5':

                         scrolldeck.controller.animate(anim, {

                            delay: 1000,

                            duration: 350,

                            property:'top',

                            start:$(window).height(),

                            end:$(window).height()-($('.client-saying-default5').height()/4),

                            pin:true

                        });

                        break;

					case 'scroll-bubble1':

                         scrolldeck.controller.animate(anim, {

                            delay: 350,

                            duration: 20000,

                            property:'top',

                            start:$(window).height()+$('.client-saying-default1').height()+$('.client-saying-default2').height()+$('.client-saying-default3').height(),

                            end:-50,

                            pin:false

                        });

                        break;

					case 'scroll-bubble2':

                         scrolldeck.controller.animate(anim, {

                            delay: 100,

                            duration: 11500,

                            property:'top',

                            start:$(window).height()+$('.client-saying-default1').height()+$('.client-saying-default2').height(),

                            end:-50,

                            pin:false

                        });

                        break;

					case 'scroll-bubble3':

                         scrolldeck.controller.animate(anim, {

                            delay: 1500,

                            duration: 2350,

                            property:'top',

                            start:$(window).height(),

                            end:-50,

                            pin:false

                        });

                        break;			

						

					 case 'kandyvideos-bulb':

                         scrolldeck.controller.animate(anim, {

                            delay: 0,

                            duration: 550,

                            property:'top',

                            start:-240,

                            end:0,

                            pin:false

                        });

                        break;	

						

					/*case 'scroll-saying6':

                         scrolldeck.controller.animate(anim, {

                            delay:1600,

                            duration: 1000,

                            property:'top',

                            start:$(window).height(),

                            end:$(window).height()-$('.client-saying-default6').height(),

                            pin:true

                        });

                        break;	*/

					/*case 'requestQuoteBlk_r':

                         scrolldeck.controller.animate(anim, {

                            delay:800,

                            duration: 1000,

                            property:'bottom',

                            start:$(window).height()+$('.requestQuoteBlk-r').height(),

                            end:$(window).height()-$('.requestQuoteBlk-r').height()-2,

                            pin:true

                        });

                        break;

					case 'requestQuoteBlk_l':

                         scrolldeck.controller.animate(anim, {

                            delay:10,

                            duration: 800,

                            property:'bottom',

                            start:-$(window).height()+$('.requestQuoteBlk-r').height(),

                            end:98,

                            pin:true

                        });

                        break;					

                    case 'scroll-right':

                        scrolldeck.controller.animate(anim, {

                            delay: 400,

                            duration: anim.width(),

                            property:'right',

                            start:anim.prev().width(),

                            end:anim.prev().width()+anim.width()-windowHeight,

                            pin:true

                        });

                        break;*/

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

            $(document).keydown(function(e){});



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