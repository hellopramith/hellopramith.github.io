// Preloader
function loadImage( path, callback, x) {
	var img = new Image();
	img.src = path;
	img.onload = callback || function() {};
	img.onerror = function() {};	
	return img;
}

// Defines a new layer within the storyboard

var TourLayer = function( config, layerInit ) {
	this.name           = config.name || 'layer'; // never really used, most for debugging
	
	this.x              = config.x || 0; // initial x position within the canvas
	this.y              = config.y || 0; // initial y position within the canvas
	
	this.img            = config.img ? loadImage( config.img, imageLoaded, this.x ) : false; // the bitmap for this layer
	this.loaded         = false;
	
	this.width          = config.width || 0;
	this.height         = config.height || 0;
	this.widthOverride  = ('widthOverride' in config) ? config.widthOverride : false; // override width mainly for 'effect' layers that need to remain caluclated as visible even though they're not
	this.boundaryLeft   = ('boundaryLeft' in config) ? config.boundaryLeft : this.x; // for a left-to-right storyboard,
	this.boundaryLayer  = ('boundaryLayer' in config) ? config.boundaryLayer : false;
	this.doNotPan       = ('doNotPan' in config) ? config.doNotPan : false;
	
	this.rotate         = ('rotate' in config) ? config.rotate : false;
	this.angle          = ('angle' in config) ? config.angle : 0;
	this.rotateFactorX  = config.rotateFactorX || 0;
	this.rotateFactorY  = config.rotateFactorY || 0;
	
	this.scale         = ('scale' in config) ? config.scale : false;
	this.scaleX		   = ('scaleX' in config) ? config.scaleX : 1;
	this.scaleY        = ('scaleY' in config) ? config.scaleY : 1;
	
	this.sprite        = config.sprite || false;
	this.frameWidth    = ('frameWidth' in config) ? config.frameWidth : this.width;
	this.frameHeight   = ('frameHeight' in config) ? config.frameHeight : this.height;
	this.frames        = ('frames' in config) ? config.frames : 1;
	this.currentFrame  = ('currentFrame' in config) ? config.currentFrame : 0;
	this.framesElapsed = ('framesElapsed' in config) ? config.framesElapsed : 0;
	this.animationFrequency = ('animationFrequency' in config) ? config.animationFrequency : 1; // Move frame within sprite every x frames
	
	this.visible        = true;

	this.track = config.track || false;
	this.trackingOffsetX = config.trackingOffsetX || 0;
	this.trackingOffsetY = config.trackingOffsetY || 0;
	
	this.speed           = config.speed || 1; // the speed or correlation by which this layer moves in response to panning
	this.panOpposite     = false;
	
	this.animateOpacity = config.animateOpacity || false; // true to animate opacity using canvas.globalAlpha
	this.animations     = []; // stores references to tweens/static animations that are not influenced by timeline
	this.opacity        = config.opacity || 1; // initial opacity if we're animating this layer's opacity
	
	var self = this;
	
	totalLayers++;
	
	function imageLoaded( event ) {
		self.loaded = true;
		self.width  = self.widthOverride !== false ? self.widthOverride : this.width;
		self.height = this.height;
		layersLoaded++;
	}
	
	// layerInit is a misc init function to include let's say animiation constructor or any other custom init code
	if ( layerInit && typeof layerInit == 'function' ) {
		layerInit.call( this );
	}
}

TourLayer.prototype = {
	isWithinViewport: function( viewportX, viewportWidth ) {

		var layerActualX = this.x + viewportX; // the layer's x position relative to the entire story board

		if ( layerActualX < ( viewportX + viewportWidth ) && ( layerActualX > viewportX  || ( layerActualX + this.width ) > viewportX ) ) {
			if ( !this.visible ) {
				this.resumeAnimations();
			}
			this.visible = true;
			return true;
		}
		
		if ( this.visible ) {
			this.stopAnimations();
		}
		
		this.visible = false;

		return false;
	},
	resumeAnimations: function() {
		for ( var i = 0; i < this.animations.length; i++ ) {
			this.animations[ i ].resume();
		}
	},
	stopAnimations: function() {
		for ( var i = 0; i < this.animations.length; i++ ) {
			this.animations[ i ].stop();
		}
	}
};