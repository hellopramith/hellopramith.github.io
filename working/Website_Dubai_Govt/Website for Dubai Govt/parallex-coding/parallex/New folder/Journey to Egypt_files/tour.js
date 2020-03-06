var layersLoaded = 0, totalLayers = 0;

(function() {
		// Canvas
	var canvas, ctx, canvasWidth, canvasHeight, approxCanvasWidth,
		// Mouse
		mouseX = 0, mouseY = 0, lastMouseX = 0, mousePanning = false, mouseGrabbedX = 0, lastMouseMoveTime = 0, timeElapsedSinceMouseMove = 0, lastPanXDelta = 0,
		// Keyboard
		keyboardVelocity = 0,
		// Timeline
		timelinePosition = 0, lastTimelinePosition = 0, timelineDelta, userDraggedEnough = false,
		// Panning
		doKineticPanning = false, panningDirection = -1, kineticPanningVelocity = 0, panXDelta,
		// Layers
		layers = [], trackingLayers = [], boundaryLayer, backgroundGradient, tourWidth = 11100, lastScreenOn = false,
		// Info boxes
		popups = [],
		// Audio
		panningTrack;
	
	document.addEventListener('DOMContentLoaded', function() {
		if ( usingIE9 !== true ) {
			$('#upgrade-notice').show();
			$('#loading-bar, #loading-area').hide();
			$('#continue-anyway').click(function( event ) {
				event.preventDefault();
				$('#upgrade-notice').hide();
				$('#loading-bar, #loading-area').show();
				$('#fixed-browser-prompt').css('display', 'block');
				init();
			});
			return;
		}
		
		init();
	});

	function init() {
		canvas = document.getElementById('tour');
		ctx = canvas.getContext('2d');
		panningTrack = document.getElementById('panning-track');
		panningTrack.muted = false;
		
		approxCanvasWidth = document.getElementById('loading-page').clientWidth;
		
		document.getElementById('audio-toggle').onclick = function() {
			if ( this.className.match(/off/) ) {
				this.className = '';
				panningTrack.muted = false;
			} else {
				this.className = 'off';
				panningTrack.muted = true;
			}
		};
		
		// End video stuff
		
		$('.video-thumbnail').click(function() {
			var id = $( this ).data('video-container');
			$('#audio-toggle:not(.off)').click();
			
			$('.player').hide().each(function() {
				this.pause();
			});
			$('#theatre').css({ width: canvasWidth, height: canvasHeight }).show();
			$( id ).show().get(0).play();
			
		});
		
		$('#theatre').click(function() {
			$('.player').hide().each(function() {
				this.pause();
			});
			$( this ).fadeOut();
		});
		
		$('.player').click(function( event ) {
			event.stopPropagation();
		});
		
		// END End video stuff
		
		window.onresize = function() {
			canvas.width = canvasWidth = canvas.clientWidth;
			canvas.height = canvasHeight = canvas.clientHeight;
			ctx.fillStyle = backgroundGradient;
			
			if ( window.innerHeight > 726 ) {
				canvas.style.marginTop = ( ( window.innerHeight - 720 ) / 2 ) + 'px';
				document.getElementById('fixed-footer').style.bottom = ( ( window.innerHeight - 720 ) / 2 ) + 'px'; 
			} else {
				canvas.style.marginTop = 0;
				document.getElementById('fixed-footer').style.bottom = 0;
			}
		};
		
		canvas.onmousedown = function( event ) {
			mouseX        = event.offsetX;
			mouseY        = event.offsetY;
			lastMouseX    = mouseX;
			mousePanning  = true;
			mouseGrabbedX = event.pageX;
			lastMouseMoveTime = 0;
			timeElapsedSinceMouseMove = 0;
			lastPanXDelta = 0;
			
			lastTimelinePosition = timelinePosition;
			
			doKineticPanning = false;
			kineticPanningVelocity = 0;
			
			keyboardVelocity = 0;

			canvas.style.cursor = "url(/img/drag-cursor-dragging.cur), col-resize";

			event.preventDefault();
		};
		
		function mouseup( event ) {
			if ( mousePanning ) {
				doKineticPanning = true;
				timeElapsedSinceMouseMove = Math.max(10, Date.now() - lastMouseMoveTime);
				lastMouseMoveTime = 0;
				// fix here
				kineticPanningVelocity *= 1 - Math.min(1, Math.max(0, timeElapsedSinceMouseMove / 100))
			}

			mousePanning = false;
			mouseGrabbedX = 0;
			lastPanXDelta = 0;
			canvas.style.cursor = "url(/img/drag-cursor.cur), col-resize";
		}
		
		canvas.onmouseup = mouseup;
		
		canvas.onmouseout = function( event ) {
			mouseup( event );
			timeElapsedSinceMouseMove = 1000; // fix here
		};
		
		canvas.onmousemove = function ( event ) {
			mouseX = event.offsetX;
			mouseY = event.offsetY;
				
			if ( mousePanning ) {
				lastMouseMoveTime = Date.now();
				var mouseMoveXDelta = mouseX - lastMouseX;
				lastMouseX = mouseX;

				timelineDelta    = mouseX - mouseGrabbedX;
				panningDirection = mouseMoveXDelta < 0 ? -1 : 1;
				// Using timelineDelta as a vector alone would be too much, so we clamp it
				
				//kineticPanningVelocity = Math.abs( timelineDelta / 8 );
				kineticPanningVelocity = Math.abs( mouseMoveXDelta ) * 1.2;
			}
		}

		document.onkeydown = function ( event ) {
			switch ( event.keyCode ) {
				case 39:
					keyboardVelocity++;
					event.preventDefault();
					break;
				case 37:
					keyboardVelocity--;
					event.preventDefault();
					break;
			}
		};

		function update() {
			
			for ( var i = 0, layer; i < trackingLayers.length; i++ ) {
				layer = trackingLayers[ i ];
				layer.x = mouseX + layer.trackingOffsetX;
				layer.y = mouseY + layer.trackingOffsetY;
			}
			
			if ( kineticPanningVelocity === 0 ) {
				doKineticPanning = false;
			}
			
			panXDelta = 0;
			
			if ( keyboardVelocity !== 0 ) {
				panXDelta = -keyboardVelocity * 16;	
				keyboardVelocity *= .95;
				if ( Math.abs( keyboardVelocity ) < 0.01 ) {
					keyboardVelocity = 0;
				}
			} else if ( doKineticPanning ) {
				panXDelta = kineticPanningVelocity * panningDirection;
				kineticPanningVelocity *= 0.95;

				if ( kineticPanningVelocity <= 0.01 ) {
					doKineticPanning = false;
					kineticPanningVelocity = 0;
				}
			} else if ( mousePanning ) {
				panXDelta =  mouseX - mouseGrabbedX - lastPanXDelta;
			} else {
				panXDelta = 0;
				return;
			}
			
			// Hacky as hell :(
			// Final screen boundary check
			if ( boundaryLayer.x + panXDelta + boundaryLayer.width <= canvasWidth ) {
				panXDelta = canvasWidth - boundaryLayer.x - boundaryLayer.width;
				
				if ( !lastScreenOn ) {
					lastScreenOn = true;
					$('#fixed-footer').stop().fadeOut();
					$('#last-screen').stop().fadeIn(1000);
				}
			} else {
				if ( lastScreenOn ) {
					lastScreenOn = false;
					$('#fixed-footer').stop().fadeIn();
					$('#last-screen').stop().fadeOut('fast');
				}
			}
			
			timelinePosition -= panXDelta;
			timelinePosition = Math.max(timelinePosition, 0);
			
			for ( i = 0; i < layers.length; i++ ) {
				layer = layers[ i ];
				
				if ( layer.track || layer.doNotPan ) {
					continue;
				}
				
				layer.x += panXDelta * ( layer.visible ? layer.speed : 1 );
				layer.x = Math.min( layer.boundaryLeft, layer.x );
			}
			
			lastPanXDelta = panXDelta + lastPanXDelta;
		}
		
		function processInfoBoxes() {
			var viewportMidway = timelinePosition + ( canvasWidth / 2 );
			
			// Check if we've reached the final screen
			
			for ( var i = 0, popup; i < popups.length; i++ ) {
				popup = popups[ i ];
				
				if ( popup.visible ) {
					if ( viewportMidway > popup.hideOnX || viewportMidway < popup.showOnX ) {
						popup.visible = false;
						$( popup.el ).stop().animate({opacity: 0}, function() {
							$( this ).hide();
						});
					} else {
						popup.el.style.left = parseInt( popup.el.style.left ) + Math.round( panXDelta * popup.speed )  + 'px';
					}
				} else {
					if ( viewportMidway > popup.showOnX && viewportMidway < popup.hideOnX ) {
						popup.visible = true;
						$( popup.el ).css( $.extend({ display: 'block', left: popup.left + popup.layer.x }, popup.top !== false ? { top: popup.top-20 } : { bottom: popup.bottom - 20 }) ).stop().animate({opacity: 1, bottom: popup.bottom })
					}
				}
			}
		}

		function draw() {
			//ctx.clearRect(0, 0, canvasWidth, canvasHeight);
			
			ctx.globalAlpha = 1;
			ctx.save();
			ctx.translate(-timelinePosition, 0);
			// fill with sky gradient defined in init code
            ctx.fillRect(0, 0, tourWidth, 540)
			ctx.restore();
			
			
			for ( var i = 0, layer; i < layers.length; i++ ) {
				
				layer = layers[ i ];
				
				if ( !layer.loaded || ( !layer.doNotPan && !layer.isWithinViewport(timelinePosition, canvasWidth) ) ) {
					continue;
				}
				
				ctx.globalAlpha = layer.animateOpacity ? layer.opacity : 1;
				
				if ( layer.sprite ) {					
					layer.framesElapsed++;
					if ( layer.framesElapsed >= layer.animationFrequency ) {
						layer.currentFrame = layer.currentFrame == layer.frames-1 ? 0 : layer.currentFrame+1;
						layer.framesElapsed = 0;
					}
					ctx.drawImage( layer.img, layer.currentFrame * layer.frameWidth, 0, layer.frameWidth, layer.frameHeight, layer.x, layer.y, layer.frameWidth, layer.frameHeight );
				} else {			
				
					if ( layer.scale ) {
						ctx.save();
						//ctx.translate(10, layer.y + );
						ctx.scale( layer.scaleX, layer.scaleY );
						ctx.drawImage( layer.img, layer.x * ( 1 / layer.scaleX ), layer.y * ( 1  / layer.scaleY )  );
						ctx.restore();
						//console.log(layer.y);
					}
					else {
					if ( layer.rotate ) {
						ctx.save();
						ctx.translate(layer.x + layer.width * layer.rotateFactorX, layer.y + layer.height * layer.rotateFactorY );
						ctx.rotate(layer.angle * Math.PI / 180);
						ctx.drawImage( layer.img, -layer.width * layer.rotateFactorX, -layer.height * layer.rotateFactorY, layer.width, layer.height );
						ctx.restore();
					} else {
						ctx.drawImage( layer.img, layer.x, layer.y );
					}
					}
					
					if ( layer.scale ) {
						//ctx.restore();
					}
				}
			}
		}
		
		//
		// LAYERS
		//
		// We must explicitly provide width & height in pixels for things like the throbber to work properly
		// FIX: if an overlay (say a glow layer) doesn't have the same dimensions as the layer it's overlaying, it doesn't catch up in time with it
		// To fix the above, set the boundaryLeft of the overlay to boundaryLeft of the overlain layer and set widthOverride to the overlain layer's width
		// Special layers that do not pan with the rest e.g. plane (set doNotPan property to true)
		
		// STARS
		layers.push( new TourLayer({ name: 'stars',    img: '/assets/images/stars.png', x: 0, width: 2934, height: 483, speed: 0.3 }) );
		layers.push( new TourLayer({ name: 'stars glow', img: '/assets/images/stars.png', x: 200, width: 2934, height: 483, speed: 0.3, opacity: 0, animateOpacity: true }, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0.3 }, 1500 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();

			this.animations.push( glow );
		}));
		
		// SHOOTING STARS
		layers.push( new TourLayer({ name: 'shooting star', img: '/assets/images/shooting-star.png', x: 3000, y: -52, width: 49, height: 52, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 1000 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).to( { y: 500, x: -400 }, 1500 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;				
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( shoot );
		}));
		
		layers.push( new TourLayer({ name: 'shooting star 2', img: '/assets/images/shooting-star2.png', x: 3300, y: -78, width: 79, height: 78, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).delay( 500 ).to( { opacity: 0 }, 1000 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).delay( 500 ).to( { y: 500, x: -400 }, 1500 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( shoot );
		}));
		
		layers.push( new TourLayer({ name: 'shooting star 3', img: '/assets/images/shooting-star.png', x: 5000, y: -52, width: 49, height: 52, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 1000 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).to( { y: 500, x: -400 }, 1500 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( shoot );
		}));
		layers.push( new TourLayer({ name: 'shooting star 4', img: '/assets/images/shooting-star2.png', x: 5300, y: -78, width: 79, height: 78, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).delay( 300 ).to( { opacity: 0 }, 1300 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).delay( 500 ).to( { y: 500, x: -400 }, 1600 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( shoot );
		}));
		
		layers.push( new TourLayer({ name: 'shooting star 5', img: '/assets/images/shooting-star2.png', x: 6300, y: -78, width: 79, height: 78, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).delay( 300 ).to( { opacity: 0 }, 1300 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).delay( 500 ).to( { y: 500, x: -400 }, 1600 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( shoot );
		}));
		
		layers.push( new TourLayer({ name: 'shooting star 6', img: '/assets/images/shooting-star2.png', x: 7500, y: -78, width: 79, height: 78, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).delay( 300 ).to( { opacity: 0 }, 1300 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).delay( 500 ).to( { y: 500, x: -400 }, 1600 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( shoot );
		}));
		
		// SUN
		layers.push( new TourLayer({ name: 'sun', img: '/assets/images/sun.png', x: 6500, y: 400, width: 417, height: 365, speed: 0, animateOpacity: true, opacity: 1 }, function() {
			var layer = this, lastX = 0;
			var fadeIn = new TWEEN.Tween( this ).to( { opacity: 1 }, 6000 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var rise = new TWEEN.Tween( { y: this.y, x: 0 } ).to( { y: 0, x: 700 }, 11000 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );
			
			this.animations.push( rise );
			this.animations.push( fadeIn );
		}));
		layers.push( new TourLayer({ name: 'sun glow', img: '/assets/images/sun.png', x: 6500, y: 400, width: 417, height: 365, speed: 0, animateOpacity: true, opacity: 0}, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 0.7 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0.0 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			var layer = this, lastX = 0;
			var rise = new TWEEN.Tween( { y: this.y, x: 0 } ).to( { y: 0, x: 700 }, 11000 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );
			
			glow.chain( fade );
			fade.chain( glow );
			glow.start();

			this.animations.push( glow );
			this.animations.push( rise );
		}));
		layers.push( new TourLayer({ name: 'sun rise', img: '/assets/images/sun-rise.png', x: 6500, y: 400, width: 417, height: 365, speed: 0, animateOpacity: true, opacity: 1}, function() {
			var layer = this, lastX = 0;
			var fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 6000 ).easing( TWEEN.Easing.Cubic.EaseOut );
			var rise = new TWEEN.Tween( { y: this.y, x: 0 } ).to( { y: 0, x: 700 }, 11000 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Cubic.EaseOut );

			this.animations.push( fade );
			this.animations.push( rise );
		}));
		
		// AIRPLANE
		layers.push( new TourLayer({ name: 'plane', img: '/assets/images/plane.png', x: 5000, y: 100, width: 445, height: 143, speed: 0 }, function() {
			var layer = this, lastX = 0;
			var glide = new TWEEN.Tween( { x: 0 } ).to( { x: -10000 }, 80000 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
			});

			this.animations.push( glide );  
		}));
		
		// CLOUDS
		layers.push( new TourLayer({ name: 'clouds',     img: '/assets/images/clouds.png', x: 6200, width: 3110, height: 450, speed: 0.6 }));
		
		// SKYLINE
		layers.push( new TourLayer({ name: 'skyline',    img: '/assets/images/skyline.png', x: 700, y: 276, width: 4772, height: 359, speed: 0.6 }));
		
		// CAIRO TOWER LIGHTS
		layers.push( new TourLayer({ name: 'tower warning',  img: '/assets/images/tower-warning.png', x: 700, y: 276, width: 1850, widthOverride: 4772, height: 359, speed: 0.6, opacity: 0, animateOpacity: true}, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();
			this.animations.push( glow );
		}));
		layers.push( new TourLayer({ name: 'tower room glow',  img: '/assets/images/tower-room-glow.png', x: 700, y: 276, width: 1850, widthOverride: 4772, height: 359, speed: 0.6, opacity: 0, animateOpacity: true}, function() {
			var glow = new TWEEN.Tween( this ).delay(500).to( { opacity: 1 }, 1000 ).easing( TWEEN.Easing.Elastic.EaseIn ),
				fade = new TWEEN.Tween( this ).delay(4000).to( { opacity: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();
			this.animations.push( glow );
		}));
		
		// DESERT BACKGROUND
		layers.push( new TourLayer({ name: 'desert', img: '/assets/images/desert.png', x: 930, y: 206, width: 9920, height: 514, speed: 0.9 }));
		
		// MOSQUE
		layers.push( new TourLayer({ name: 'mosque', img: '/assets/images/mosque.png', x: 7900, y: 0, width: 1276, height: 706, speed: 0.9 }));
		
		// QUAD BIKE
		layers.push( new TourLayer({ name: 'quad', img: '/assets/images/quad.png', x: 8050, y: 630, width: 434, height: 410, speed: 0, scale: true, scaleX: 0.1, scaleY: 0.1 }, function() {
			var layer = this, lastX = 0;
 			var glide = new TWEEN.Tween( { x: 0, y: layer.y } ).to( { x: 280, y: 380 }, 2000 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Quadratic.EaseOut );
			
			var blow = new TWEEN.Tween( layer ).to( { scaleX: 0.7, scaleY: 0.7 }, 2000 ).onUpdate(function() {
				//layer.y = 720 - ( layer.height * this.scaleY );
				//layer.y *= layer.scaleY;
				
				//console.log( layer.y  );
			}).easing( TWEEN.Easing.Quadratic.EaseOut );

			this.animations.push( glide );
			this.animations.push( blow);
			//this.animations.push( shrink );
		}));

		// MOON
		layers.push( new TourLayer({ name: 'moon',      img: '/assets/images/moon.png', x: 1071, y: 235, width: 60, height: 80, speed: 0.7 }) );
		layers.push( new TourLayer({ name: 'moon glow', img: '/assets/images/moon-glow.png', x: 1071, y: 235, width: 60, height: 80, speed: 0.7, opacity: 0.2, animateOpacity: true }, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 2000 ).easing( TWEEN.Easing.Quadratic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0.2 }, 2000 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();

			this.animations.push( glow );
		}));
		
		// BIG BALLOON
 		layers.push( new TourLayer({ name: 'balloon 1', img: '/assets/images/balloon1.png', x: 9300, y: 80, width: 205, height: 250, speed: 0.9 }, function() {
			var ascend = new TWEEN.Tween( this ).to( { y: 130 }, 10000 ).easing( TWEEN.Easing.Quadratic.EaseInOut ),
				descend   = new TWEEN.Tween( this ).to( { y: 80 }, 10000 ).easing( TWEEN.Easing.Quadratic.EaseInOut );
			ascend.chain( descend );
			descend.chain( ascend );
			
			// since the animation is chained, we only push the initial one
			// stopping and resuming animations will only affect this tween
			// the chained tween will be removed/s
			this.animations.push( ascend );  
		}));
		
		// SMALL BALLOON
		layers.push( new TourLayer({ name: 'balloon 2',  img: '/assets/images/balloon2.png', x: 9000, y: 160, width: 329, height: 315, speed: 0.9 }, function() {
			var ascend = new TWEEN.Tween( this ).to( { y: 90 }, 16000 ).easing( TWEEN.Easing.Quadratic.EaseInOut ),
				descend   = new TWEEN.Tween( this ).to( { y: 160 }, 16000 ).easing( TWEEN.Easing.Quadratic.EaseInOut );
			ascend.chain( descend );
			descend.chain( ascend );
				
			this.animations.push( ascend );
		}));
		
		// BEACH ROCK AT THE END
		layers.push( new TourLayer({ name: 'the rock',      img: '/assets/images/therock.png', x: 9500, y: 401, width: 1582, height: 319, speed: 1 }));
		// BIG KITE
		layers.push( new TourLayer({ name: 'big kite',      img: '/assets/images/big-kite.png', x: 9870, y: 188, width: 346, height: 365, speed: 0.9, rotate: true, angle: 0, rotateFactorX: 1, rotateFactorY: 1 }, function() {
			var layer = this, lastAngle = 0, rotation = { angle: 0 };

			var ebb = new TWEEN.Tween( rotation ).to( { angle: -7 }, 1800 ).easing( TWEEN.Easing.Linear.EaseNone ).onUpdate(function() {
				layer.angle += this.angle - lastAngle;
				lastAngle = this.angle;
			});
			var flow = new TWEEN.Tween( rotation ).to( { angle: 7 }, 1800 ).easing( TWEEN.Easing.Linear.EaseNone ).onUpdate(function() {
				layer.angle += this.angle - lastAngle;
				lastAngle = this.angle;
			});
			
			ebb.chain( flow );
			flow.chain( ebb );
			
			this.animations.push( ebb );
			
		}));
		// SMALL KITE
		layers.push( new TourLayer({ name: 'small kite',    img: '/assets/images/small-kite.png', x: 10120, y: 220, width: 245, height: 182, speed: 0.9 }, function() {
			var hori = { x: 0, y: this.y };
			var layer = this, lastX = 0;

			var ebb = new TWEEN.Tween( hori ).to( { x: 5, y: 225 }, 2000 ).easing( TWEEN.Easing.Linear.EaseNone ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			});
			var flow = new TWEEN.Tween( hori ).to( { x: -5, y: 215 }, 2000 ).easing( TWEEN.Easing.Linear.EaseNone ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			});
			
			ebb.chain( flow );
			flow.chain( ebb );
			
			this.animations.push( ebb )	
		}));		
		
		// NILE
		layers.push( new TourLayer({ name: 'nile',          img: '/assets/images/nile.png', x: 4141, y: 347, width: 1691, height: 373, speed: 1 }) );
		layers.push( new TourLayer({ name: 'nile glow', img: '/assets/images/nile-glow.png', x: 4141, y: 347, width: 1691, height: 373, speed: 1, opacity: 0, animateOpacity: true }, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 1800 ).easing( TWEEN.Easing.Quadratic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0.1 }, 1800 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();

			this.animations.push( glow );	
		}));
		
		// SWAN
		layers.push( new TourLayer({ name: 'swan', img: '/assets/images/swan.png', x: 4700, y: 664, width: 66, height: 56, speed: 1 }) );
		layers.push( new TourLayer({ name: 'swan head', img: '/assets/images/swan-head.png', x: 4740, y: 664, width: 25, height: 25, speed: 1, rotate: true, angle: 0, rotateFactorX: 0, rotateFactorY: 1 }, function(){
			var rotation = { angle: 0 };
			var layer = this, lastAngle = 0;

			var down = new TWEEN.Tween( rotation ).delay( 500 ).to( { angle:  60 }, 200 ).easing( TWEEN.Easing.Linear.EaseNone ).onUpdate(function() {
				layer.angle += this.angle - lastAngle;
				lastAngle = this.angle;
			});
			var up = new TWEEN.Tween( rotation ).to( { angle: 0 }, 400 ).easing( TWEEN.Easing.Linear.EaseNone ).onUpdate(function() {
				layer.angle += this.angle - lastAngle;
				lastAngle = this.angle;
			});
			
			var delay = new TWEEN.Tween( rotation ).delay( 8000 );
			
			down.chain( up );
			up.chain( delay );
			delay.chain( down );
			
			this.animations.push( down );
		}));

		
		// BIRDS ABOVE NILE
		layers.push( new TourLayer({ name: 'bird flock',    img: '/assets/images/bird-flock.png', x: 4500, y: 180, width: 885, height: 299, speed: 1.1 }));
		
		// FLYING PIGEON
		layers.push( new TourLayer({ name: 'flying pigeon', img: '/assets/images/bird-sprite.png', x: 5500, y: 720, width: 124, height: 90, speed: 0, sprite: true, frameWidth: 124, frameHeight: 90, frames: 13, animationFrequency: 3 }, function(){
			var layer = this, lastX = 0;
			var shoot = new TWEEN.Tween( { y: this.y, x: 0 } ).to( { y: -90, x: -900 }, 4500 ).onUpdate(function() {
				layer.x += this.x - lastX;
				lastX = this.x;
				layer.y = this.y;
			}).easing( TWEEN.Easing.Linear.EaseNone );

			this.animations.push( shoot );	
		}));
		
		// MAIN SPHINX
		layers.push( new TourLayer({ name: 'sphinx',        img: '/assets/images/sphinx.png', x: 2700, y: 329, width: 1155, height: 409, speed: 1.1 }));
		
		// PYRAMID ON TOP OF GOLF FIELD
		layers.push( new TourLayer({ name: 'golf',          img: '/assets/images/golf.png', x: 1300, y: 203, width: 1610, height: 517, speed: 1.2 }));
		
		// RED FLAG POLE
		//layers.push( new TourLayer({ name: 'flag',          img: '/assets/images/flag.png', x: 1491, y: 323, width: 51, height: 397, speed: 1.1 }));
		layers.push( new TourLayer({ name: 'flag sprite',   img: '/assets/images/flag-sprite.png', x: 1491, y: 428, width: 155, height: 292, speed: 1.1, sprite: true, frames: 30, currentFrame: 0, animationFrequency: 3, frameWidth: 155, frameHeight: 292 }));
		
		// RAM SPHINX ROW (back)
		layers.push( new TourLayer({ name: 'rams back',     img: '/assets/images/rams-back.png', x: 7650, y: 478, width: 263, height: 192, speed: 0.95 }));
		// DESERT STRETCH FRONT
		layers.push( new TourLayer({ name: 'front desert',  img: '/assets/images/desert-front.png', x: 5200, y: 0, width: 1318, height: 720, speed: 0.95 }));
		// RAM SPHINX ROW (front)
		layers.push( new TourLayer({ name: 'rams front',    img: '/assets/images/rams-front.png', x: 7050, y: 389, width: 1405, height: 331, speed: 0.96 }));
		
		// LUXOR (back)
		layers.push( new TourLayer({ name: 'luxor back',    img: '/assets/images/luxor-back.png', x: 5550, y: 370, width: 1148, height: 350, speed: 1 }));
		// LUXOR
		layers.push( new TourLayer({ name: 'luxor',         img: '/assets/images/luxor.png', x: 6340, y: 46, width: 1103, height: 674, speed: 1.06 }));
		layers.push( new TourLayer({ name: 'luxor glow',    img: '/assets/images/luxor-glow.png', x: 6340, y: 142, width: 729, widthOverride: 1103, height: 578, speed: 1.06, opacity: 0, animateOpacity: true}, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );

			this.animations.push( glow );
		}));

		// FIRST ROOM
		layers.push( new TourLayer({ name: 'room',          img: '/assets/images/room.png', width: 1310, height: 720 }));
 		layers.push( new TourLayer({ name: 'lamp glow',     img: '/assets/images/lamp-glow.png', x: 797, y: 262, width: 151, height: 174, animateOpacity: true, opacity: 0 }, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 0.9 }, 200 ).delay( 2000 ).easing( TWEEN.Easing.Elastic.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 2000 ).easing( TWEEN.Easing.Elastic.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();
				
			this.animations.push( glow );
		}));
		layers.push( new TourLayer({ name: 'room pillars',  img: '/assets/images/room-pillars.png', width: 1634, height: 720, speed: 1.07 }));
		layers.push( new TourLayer({ name: 'window glow',   img: '/assets/images/room-window-glow.png', width: 402, height: 720, animateOpacity: true, opacity: 0 }, function() {
			
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 1200 ).easing( TWEEN.Easing.Sinusoidal.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0 }, 1200 ).easing( TWEEN.Easing.Sinusoidal.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();
				
			this.animations.push( glow );
		}));
		
		// FIRST SCREEN
		layers.push( new TourLayer({ name: 'HUD', img: '/assets/images/HUD.png', width: 800, height: 567, speed: 3 }) );
		layers.push( new TourLayer({ name: 'direction arrow glow', img: '/assets/images/direction-glow.png', width: 800, height: 133, x: 0, y: 287, speed: 3, animateOpacity: true, opacity: 0.4}, function() {		
			var glow = new TWEEN.Tween( this ).to( { opacity: 0.8 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.EaseIn ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0.4 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.EaseIn );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();
				
			this.animations.push( glow );
		}));
		
		// FINAL SCREEN
		layers.push( new TourLayer({ name: 'final screen', img: '/assets/images/final-screen.png', x: 10100, width: 1453, height: 720, speed: 1, boundaryLayer: true }) );
		layers.push( new TourLayer({ name: 'final logo', img: '/assets/images/logo.png', x: 10660, y: 105, width: 365, height: 367, speed: 1, opacity: 0.01, animateOpacity: true}, function() {
			var fadeIn = new TWEEN.Tween( this ).to( { opacity: 1}, 1500 ).easing( TWEEN.Easing.Sinusoidal.EaseIn );
			this.animations.push( fadeIn );
		}));
		
		// TRACKING click & drag message
		layers.push( new TourLayer({ name: 'click & drag', img: '/assets/images/click-and-drag.png', x: 0, y: 0, track: true, trackingOffsetX: 30, trackingOffsetY: 6, width: 158, height: 14, animateOpacity: true, opacity: 1 }, function() {
			var glow = new TWEEN.Tween( this ).to( { opacity: 1 }, 400 ),
				fade = new TWEEN.Tween( this ).to( { opacity: 0.3 }, 400 );
			glow.chain( fade );
			fade.chain( glow );
			glow.start();
				
			this.animations.push( glow );
		}));


		// Find out which is the boundary layer to prevent the story from panning further to the right at the end
		// This layer is used in update() for the above calculation
		// and it solely determines where the story stops (by aligning its right edge to the end of the screen)
		for ( var i = 0; i < layers.length; i++ ) {
			if ( layers[ i ].boundaryLayer ) {
				boundaryLayer = layers[ i ];
			}
			
			// Find tracking layers
			if ( layers[ i ].track ) {
				trackingLayers.push( layers[ i ] );
			}
		}

		//
		// POPUPS
		//
		// We attach each InfoBox to a specific layer to match panning speeds
		popups.push( new InfoBox({ html: "<h3>The Egyptian Pyramids</h3><img class='thumb' src='/img/popup-thumbs/giza.jpg'><p>Get lost in icons of antiquity. Explore Ancient Egypt's most famous, fascinating and mysterious archaeological site. Witness the work of the Pharaohs. </p>", attachTo: 'golf', showOnX: 1637, hideOnX: ( 1637 + approxCanvasWidth / 2), left: 618, bottom: 455 }, layers) );
		popups.push( new InfoBox({ html: "<h3>The Great Sphinx of Giza</h3><img class='thumb' src='/img/popup-thumbs/sphinx.jpg'><p>Carved from the bedrock of the Giza plateau, the Sphinx is truly a mysterious marvel from the days of ancient Egypt. The body of a lion with the head of a king or god, the sphinx has come to symbolize strength and wisdom.</p>", attachTo: 'sphinx', showOnX: 3000, hideOnX: ( 3000 + approxCanvasWidth / 2), left: 540, bottom: 335 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Cairo Tower</h3><img class='thumb' src='/img/popup-thumbs/cairotower.jpg'><p>Take in a breathtaking open air panoramic view from Egypt's tallest tower. See the whole of Cairo whilst dining in the revolving restaurant.</p>", attachTo: 'skyline', showOnX: 3600, hideOnX: ( 3600 + approxCanvasWidth / 2), left: 1752, bottom: 465 }, layers) );
		popups.push( new InfoBox({ html: "<h3>The Nile</h3><img class='thumb' src='/img/popup-thumbs/nile.jpg'><p>The Nile is regarded as the world's longest river, which runs across 10 different countries. Ride along its subtle waves and experience Egypt's vast culture.</p>", attachTo: 'nile', showOnX: 4350, hideOnX: ( 4350 + approxCanvasWidth / 2), left: 480, bottom: 170 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Bird Watching</h3><img class='thumb' src='/img/popup-thumbs/birdwatch.jpg'><p>There are some areas that are considered important bottlenecks for migratory birds. These are great sites for observing the spring migration. If you're lucky enough to be in <a target='_blank' href='http://en.egypt.travel/city/index/ain-sukhna'>Ain Sukhna</a> at the right time, you have a big chance to spot migrating birds along the Galala Plateau, passerines among the scrubs and gardens, as well as seabirds such as White-eyed Gulls and Swift Terns along the coast.</p>", attachTo: 'bird flock', showOnX: 4900, hideOnX: ( 4900 +  approxCanvasWidth / 2 ), left: 780, bottom: 370 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Seeing Doubles</h3><img class='thumb' src='/img/popup-thumbs/komombo.jpg'><p>Dedicated to Sobek and Horus the Elder, the Temple of Kom Ombo has two identical entrances, hypostyle halls and sanctuaries. Built on an outcrop at a bend in the Nile the temple is a testament to the importance Ancient Egyptian priests placed in the natural cycles and crocodiles of the Nile. Visit the temple to see mummified crocodiles, clay coffins and spectacular reliefs on the walls.</p>", attachTo: 'front desert', showOnX: 5600, hideOnX: ( 5600 +  approxCanvasWidth / 2 ), left: 760, bottom: 290 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Luxor</h3><img class='thumb' src='/img/popup-thumbs/luxor.jpg'><p>Visit Luxor to experience an 'open air museum'.  Take a step back into history and see the wonders of ancient Egypt.</p>", attachTo: 'luxor', showOnX: 6200, hideOnX: ( 6200 +  approxCanvasWidth / 2 ), left: 290, bottom: 415 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Temples of Karnac</h3><img class='thumb' src='/img/popup-thumbs/karnak.jpg'><p>See the majestic temples of Karnac and get lost in the surrounding kiosks, pylons and obelisks.</p>", attachTo: 'rams front', showOnX: 7360, hideOnX: ( 7360 +  approxCanvasWidth / 2 ), left: 620, bottom: 270 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Mohamed Ali Mosque</h3><img class='thumb' src='/img/popup-thumbs/mohammedalimosque.jpg'><p>Visiting <a target='_blank' href='http://en.egypt.travel/city/index/cairo'>Cairo</a>, you will easily locate the Mohamed Ali Mosque, due to its prominent features: its dome rises up to 52 metres high and two east side minarets reach not less than 84 meters. While wandering around the mosque, you will soon discover why it also holds the name of the \"Alabaster Mosque.\"</p>", attachTo: 'mosque', showOnX: 8500, hideOnX: ( 8500 +  approxCanvasWidth / 2 ), left: 450, bottom: 410 }, layers) );
		popups.push( new InfoBox({ html: "<h3>Beautiful Beaches</h3><img class='thumb' src='/img/popup-thumbs/beaches.jpg'><p>Wake up to the sight of crystal clear waters, dive among remarkable reefs and check out ship wrecks off the coast. Take deep dives into turquoise waters under clear blue skies.</p>", attachTo: 'the rock', showOnX: 9800, hideOnX: ( 9800 +  approxCanvasWidth / 2 ), left: 370, bottom: 300 }, layers) );

		
		var loadedBar = document.getElementById('loading-bar-loaded').style,
			loadedPercent = document.getElementById('loading');
		
		window.setTimeout(function checkAllLayersLoaded() {
			loadedBar.width = ( layersLoaded / totalLayers * 300 ) + 'px';
			loadedPercent.textContent =  Math.round( layersLoaded / totalLayers * 100 ) + '% loaded';
			
			// Keep checking that all layers have loaded every so often
			for ( var i = 0; i < layers.length; i++ ) {
				if ( !layers[ i ].loaded ) {
					window.setTimeout(checkAllLayersLoaded, 200);
					return;
				}
			}

			// All image assets have now been loaded at this point
			// Reveal canvas!!
			document.getElementsByTagName('body')[0].className = 'touring';
			document.getElementById('loading-page').style.display = 'none';
			document.getElementById('canvas-wrapper').style.display = 'block';					
			document.getElementById('fixed-footer').style.display = 'block';			
			
			// Set the canvas HTML width attribute to the calculated pixel width having CSS width: 100% prior
			canvas.width = canvasWidth = canvas.clientWidth;
			canvas.height = canvasHeight = canvas.clientHeight;		
			document.getElementById('canvas-wrapper').style.height = canvas.style.height;
			
			backgroundGradient = ctx.createLinearGradient(0, 0, tourWidth, 540);
			backgroundGradient.addColorStop(0, '#122e50');
			backgroundGradient.addColorStop(1, '#5fa6cd');
			ctx.fillStyle = backgroundGradient;
			
			if ( window.innerHeight > 726 ) {
				canvas.style.marginTop = ( ( window.innerHeight - 720 ) / 2 ) + 'px';
				document.getElementById('fixed-footer').style.bottom = ( ( window.innerHeight - 720 ) / 2 ) + 'px'; 
			} else {
				canvas.style.marginTop = 0;
				document.getElementById('fixed-footer').style.bottom = 0 + 'px'
			}
			
			window.scroll(0, canvasHeight);
			
 			window.setInterval(function loop() {
				update();
				processInfoBoxes();
				TWEEN.update();
				draw();
			}, 16);
			
			document.getElementById('intro-track').play();
			
			window.setTimeout( function checkTimeline() {
				// if we've scrolled enough, get rid of the drag instructions
				if ( !userDraggedEnough && timelinePosition > 200 ) {
					userDraggedEnough = true;
					
					for ( var i = 0; i < layers.length; i++ ) {
						if ( layers[ i ].name == 'click & drag' ) {
							layers[ i ].stopAnimations();
							layers.splice(i, 1);
							break;
						}
					}
					
					for ( var i = 0; i < trackingLayers.length; i++ ) {
						if ( trackingLayers[ i ].name == 'click & drag' ) {
							trackingLayers.splice(i, 1);
							break;
						}
					}
					
					panningTrack.play();
				} else {
					window.setTimeout(checkTimeline, 300);
				}
			}, 500);
		}, 100);
	}
})();