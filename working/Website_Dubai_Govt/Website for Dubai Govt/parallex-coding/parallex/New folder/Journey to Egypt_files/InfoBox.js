var InfoBox = function( config, layers ) {
	this.showOnX = config.showOnX || 0; // reveal info box when the timeline value midscreen is greater than this & less than hideOnX
	this.hideOnX = config.hideOnX || config.showOnX + 500,
	this.left    = config.left || this.showOnX; // the x offset relative to the layer this info box is attached to
	this.top     = config.top || false; // specify either CSS top or bottom in integer pixels (relative to the page)
	this.bottom  = config.bottom || 0; // it's preferable to specify bottom CSS position (relative to the page)
	this.speed   = 1; // this value is taken automatically from the layer
	this.visible = config.visible || false;
	this.html    = config.html || '';
	this.attachTo = '';
	this.layer    = false;
	
	var element = document.createElement('div');
	element.className = 'info';
	element.innerHTML = '<div class="info-content">' + this.html + '</div><div class="info-tip"></div>';
	element.onselectstart = function() { return false; };
	
	this.el = element;
	
	document.getElementById('canvas-wrapper').appendChild( element );
	
	if ( config.attachTo && layers ) {
		this.attachTo = config.attachTo;
		
		for ( var i = 0; i < layers.length; i++ ) {
			if ( layers[ i ].name == this.attachTo ) {
				this.speed = layers[ i ].speed;
				this.layer = layers[ i ];
				break;
			}	
		}
	}
	
};

InfoBox.prototype = { };