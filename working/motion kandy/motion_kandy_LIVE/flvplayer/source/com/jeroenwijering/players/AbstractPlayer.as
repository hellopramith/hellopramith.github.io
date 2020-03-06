/**
* Abstract player class, extended by all other players.
* Class loads config and file XML's and sets up MCV triangle.
*
* @author	Jeroen Wijering
* @version	1.6
**/


import com.jeroenwijering.players.*;
import com.jeroenwijering.utils.FeedParser;


class com.jeroenwijering.players.AbstractPlayer { 


	/** Array with all config values **/
	private var configArray:Object = {
		autoscroll:"",
		autostart:"",
		backcolor:"",
		bufferlength:"",
		callback:"",
		captions:"",
		displayheight:"",
		enablejs:"",
		file:"",
		frontcolor:"",
		fsreturnpage:"",
		fullscreenmode:"",
		fullscreenpage:"",
		height:"",
		lightcolor:"",
		linkfromdisplay:"",
		linktarget:"",
		logo:"",
		overstretch:"",
		playerclip:"",
		repeat:"",
		rotatetime:"",
		showdigits:"",
		showeq:"",
		showfsbutton:"",
		showicons:"",
		shownavigation:"",
		shuffle:"",
		streamscript:"",
		thumbsinplaylist:"",
		transition:"",
		volume:"",
		width:""
	}
	private var fileElements:Object = { title:"",author:"",link:"",image:"",id:"",category:"",start:"" }
	/** Accepted types of mediafiles **/
	private var fileTypes:Array;
	/** reference to the XML parser **/
	private var fileParser:FeedParser;
	/** Array with all playlist items **/
	private var fileArray:Array;
	/** reference to the controller **/
	private var controller:AbstractController;


	/**
	* Player application startup
	*
	* @param tgt	movieclip that contains all player graphics
	* @param fil	file that should be played
	**/
	public function AbstractPlayer(tgt:MovieClip,fil:String) {
		configArray["playerclip"] = tgt;
		configArray["playerclip"]._visible = false;
		fil == undefined ? null: configArray["file"] = fil;
		loadConfig();
	};


	/** Set configArray variables or load them from flashvars. **/
	private function loadConfig() {
		configArray["width"] == "undefined" ? configArray["width"] = Stage.width: null;
		configArray["height"] == "undefined" ? configArray["height"] = Stage.height: null;
		for(var cfv in configArray) {
			_root[cfv] == undefined ? null: configArray[cfv] = unescape(_root[cfv]);
		}
		configArray["displayheight"] == "undefined" ? configArray["displayheight"] = configArray["height"]-20: null;
		if(configArray["fullscreenmode"] == "true") {
			var pso = SharedObject.getLocal("com.jeroenwijering.players", "/");
			configArray["file"] = pso.data.file;
			configArray["captions"] = pso.data.captions;
			configArray["fsreturnpage"] = pso.data.fsreturnpage;
		}
		configArray["enablejs"] == "true" ? enableLoadFile(): null;
		loadFile(configArray["file"]);
	};


	/** 
	* Load an XML playlist or single media file. 
	* 
	* @param fil	The file to load.
	* @param tit	Optional title to display.
	* @param lnk	Optional external link.
	* @param img	Optional preview image.
	* @param fid		Optional file ID.
	**/
	public function loadFile(fil,tit,lnk,img,fid) {
		if(controller != undefined) {
			controller.getEvent("stop");
			delete controller;
		}
		configArray["file"] = fil;
		tit == undefined ? null: _root.title = tit;
		lnk == undefined ? null: _root.link = lnk;
		img == undefined ? null: _root.image = img;
		fid == undefined ? null: _root.id = fid;
		fileArray = new Array();
		var fnd = false;
		for(var i in fileTypes) {
			if(fil.toLowerCase().indexOf(fileTypes[i].toLowerCase()) > -1) { fnd = true; }
		}
		if (fnd == true) {
			fileArray[0] = new Object();
			fileArray[0]['file'] = fil;
			for(var cfv in fileElements) {
				_root[cfv] == undefined ? null: fileArray[0][cfv] = unescape(_root[cfv]);
			}
			if(configArray["fullscreenmode"] == "true") {
				var pso = SharedObject.getLocal("com.jeroenwijering.players", "/");
				fileArray[0]["id"] = pso.data.id;
			}
			configArray["playerclip"]._visible = true;
			_root.activity._visible = false;
			setupMCV();
		} else { 
			var ref = this;
			fileParser = new FeedParser();
			fileParser.onParseComplete = function() { 
				ref.fileArray = this.parseArray;
				ref.configArray["playerclip"]._visible = true;
				_root.activity._visible = false;
				ref.setupMCV();
			};
			fileParser.parse(fil);
		}	
	};


	/** Setup all necessary MCV blocks. **/
	private function setupMCV():Void {
		controller = new AbstractController(configArray,fileArray);
		var asv = new AbstractView(controller,configArray,fileArray);
		var vws:Array = new Array(asv);
		var asm = new AbstractModel(vws,controller,configArray,fileArray);
		var mds:Array = new Array(asm);
		controller.startMCV(mds);
	};


	/** Enable javascript access to loadFile command **/
	private function enableLoadFile() {
		if(flash.external.ExternalInterface.available) {
			var lfc:Boolean = flash.external.ExternalInterface.addCallback("loadFile",this,loadFile);
		}
	};


}