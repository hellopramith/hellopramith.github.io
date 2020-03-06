/*

* jPreLoader - jQuery plugin

* Create a Loading Screen to preload images and content for you website

*

* Name:			jPreLoader.js

* Author:		Kenny Ooi - http://www.inwebson.com

* Date:			January 01, 2012		

* Version:		1.0

* Example:		http://demo.inwebson.com/jpreloader/

*	

*/



(function($) {

	var items = new Array(),

		errors = new Array(),

		onComplete = function() {},

		current = 0;

	

	var jpreOptions = {

		splashVPos: '0%',

		loaderVPos: '0%',

		splashID: '#jpreContent',

		showSplash: false,

		showPercentage: true,

		debugMode: false,

		splashFunction: function() {}

	}

	

	var getImages = function(element) {
		
	
		$(element).find('*:not(script),*:not(video),*:not(source),*:not(.vjs-tech)').each(function() {

			var url = "";



			if ($(this).css('background-image').indexOf('none') == -1) {

				url = $(this).css('background-image');

				if(url.indexOf('url') != -1) {

					var temp = url.match(/url\((.*?)\)/);

					url = temp[1].replace(/\"/g, '');

				}

			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {

				url = $(this).attr('src');

			}

			

			if (url.length > 0) {

				items.push(url);

			}

		});

	}

	

	var preloading = function() {

		for (var i = 0; i < items.length; i++) {

			loadImg(items[i]);

		}

	}

	

	var loadImg = function(url) {

		var imgLoad = new Image();

		$(imgLoad)

		.load(function() {

			completeLoading();

		})

		.error(function() {

			errors.push($(this).attr('src'));

			completeLoading();

		})

		.attr('src', url);

	}

	

	var completeLoading = function() {

		current++;



		var per = Math.round((current / items.length) * 100);

		$(jBar).stop().animate({

			width: per + '%'

		}, 500, 'linear');

		

		if(jpreOptions.showPercentage) {

			$(jPer).text('website '+per+"% loaded...");

		}

		

		if(current >= items.length) {

		

			current = items.length;

			

			if (jpreOptions.debugMode) {

				var error = debug();

				

			} 
			
			loadComplete();

		}

	}

	

	var loadComplete = function() {

		$(jBar).stop().animate({

			width: '100%'

		}, 500, 'linear', function() {
			
			
			
			$('#loadingPerc').fadeOut(800, function() {

				$('#loadingPerc').remove();

			});

			$(jOverlay).fadeOut(800, function() {

				$(jOverlay).remove();

				onComplete();
				
				

			});

		});	

	}

	

	var debug = function() {

		if(errors.length > 0) {

			var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'

			str	+= errors.length + ' image files cound not be found. \n\r';	

			str += 'Please check your image paths and filenames:\n\r';

			for (var i = 0; i < errors.length; i++) {

				str += '- ' + errors[i] + '\n\r';

			}

			return true;

		} else {

			return false;

		}

	}

	

	var createContainer = function(tar) {



		jOverlay = $('<div></div>')

		.attr('id', 'jpreOverlay')

		.css({

			position: "relative",

			top: 0,

			left: 0,

			width: '100%',

			height: '100%',

			zIndex: 9999999

		})

		.appendTo('#loaderpart');

		

		

		jLoader = $('<div></div>')

		.attr('id', 'jpreLoader')

		.appendTo(jOverlay);

		

		var posWidth = $(window).width() - $(jLoader).width();

		$(jLoader).css({

			position: 'absolute',

			top: jpreOptions.loaderVPos,

			left: Math.round((50 / $(window).width()) * posWidth) + '%'

		});

		

		jBar = $('<div></div>')

		.attr('id', 'jpreBar')

		.css({

			width: '0%',

			height: '100%'

		})

		.appendTo(jLoader);

		

		if(jpreOptions.showPercentage) {

			jPer = $('<span>website 0% loaded...</span>')

			.attr('id', 'jprePercentage')

			.css({

				position: 'relative',

				height: '100%'

			})

			.appendTo('#loadingtext')

			.html('Loading...');

		}

	}

	

	$.fn.jpreLoader = function(options, callback) {
		

        if(options) {

            $.extend(jpreOptions, options );

        }

		if(typeof callback == 'function') {

			onComplete = callback;

		}

		

		createContainer(this);

		getImages(this);

		preloading();

        return this;

    };



})(jQuery);