/**
* Parses RSS, ATOM and XSPF lists and returns them as a numerical array:
* [title,author,file,link,image,category,id,start,description,date,latitude,longitude]
* An onParseComplete event is broadcasted upon succesful completion.
*
* @example
* var prs = new com.jeroenwijering.utils.FeedParser();
* prs.onParseComplete = function() { trace(this.parseArray.length); };
* prs.parse("http://www.jeroenwijering.com/rss/");
*
* @author	Jeroen Wijering
* @version	1.19
**/


import com.jeroenwijering.utils.StringMagic;


class com.jeroenwijering.utils.FeedParser {


	/** URL of the xml file to parse. **/
	private var parseURL:String;
	/** The array the XML is parsed into **/
	public var parseArray:Array; 
	/** Flash XML object the file is loaded into. **/
	private var parseXML:XML;
	/** Tags allowed for RSS Format **/
	private var RSS_TAGS:Object = {
		title:"title",
		author:"author",
		link:"link",
		guid:"id",
		category:"category"
	};
	/** Tags allowed for ATOM Format **/
	private var ATOM_TAGS:Object = {
		title:"title",
		id:"id"
	};
	/** Tags allowed for XSPF Format **/
	private var XSPF_TAGS:Object = {
		title:"title",
		creator:"author",
		info:"link",
		location:"file",
		image:"image",
		identifier:"id",
		album:"category"
	};


	/** Constructor. Nothing there but a crappy hack to support tags with a ':' included **/
	function FeedParser() {
		RSS_TAGS["itunes:author"] = "author";
		RSS_TAGS["geo:lat"] = "latitude";
		RSS_TAGS["geo:long"] = "longitude"; 
		ATOM_TAGS["geo:lat"] = "latitude";
		ATOM_TAGS["geo:long"] = "longitude";
	};


	/** 
	* Parse an XML list.
	*
	* @param url	URL of the playlist that should be parsed.
	**/
	public function parse(url:String):Void {
		var ref = this;
		parseURL = url;
		parseArray = new Array();
		parseXML = new XML();
		parseXML.ignoreWhite = true;
		parseXML.onLoad = function(success:Boolean) {
			if(success) {
				var fmt = this.firstChild.nodeName.toLowerCase();
				if( fmt == 'rss') {	ref.parseRSS();} 
				else if (fmt == 'feed') { ref.parseASF(); } 
				else if (fmt == 'playlist') { ref.parseXSPF(); } 
				else { parseArray.push({title:"Feed not understood: "+ref.parseURL}); }
			} else {
				parseArray.push({title:"Feed not found: "+ref.parseURL});
			}
			parseArray.length == 0 ? parseArray.push({title:"Empty feed: "+ref.parseURL}):null;
			delete ref.parseXML;
			ref.onParseComplete();
		};
		if(_root._url.indexOf("file://") > -1) { parseXML.load(parseURL); } 
		else if(parseURL.indexOf('?') > -1) { parseXML.load(parseURL+'&'+random(999)); } 
		else { parseXML.load(parseURL+'?'+random(999)); }
	};


	/** Convert RSS structure to array. **/
	private function parseRSS():Void {
		var tpl = parseXML.firstChild.firstChild.firstChild;
		while(tpl != null) { 
			if (tpl.nodeName.toLowerCase() == "item") {
					var obj = new Object();
					for(var j=0; j<tpl.childNodes.length; j++) {
						var nod:XMLNode = tpl.childNodes[j];
						if(RSS_TAGS[nod.nodeName.toLowerCase()] != undefined) {
							obj[RSS_TAGS[nod.nodeName.toLowerCase()]] = nod.firstChild.nodeValue;
						} else if(nod.nodeName.toLowerCase() == "description") {
							obj["description"] = StringMagic.stripTagsBreaks(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "pubdate") {
							obj["date"] = StringMagic.rfc2Date(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "dc:date") {
							obj["date"] = StringMagic.iso2Date(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "media:thumbnail") {
							obj["image"] = nod.attributes.url;
						} else if(nod.nodeName.toLowerCase() == "itunes:image") {
							obj["image"] = nod.attributes.href;
						} else if((nod.nodeName.toLowerCase() == "enclosure" || nod.nodeName.toLowerCase() == "media:content") && 
								 (nod.attributes.type == "audio/mpeg" || nod.attributes.type == "video/x-flv"
								 || nod.attributes.type == "image/jpeg" || nod.attributes.type == "image/png"
								 || nod.attributes.type == "image/gif")) {
							obj["file"] = nod.attributes.url;
						} else if(nod.nodeName.toLowerCase() == "media:group") { 
							for(var k=0; k< nod.childNodes.length; k++) {
								nod.childNodes[k].attributes.type == "video/x-flv" ? obj["file"] = nod.childNodes[k].attributes.url: null;
								nod.childNodes[k].nodeName.toLowerCase() == "media:thumbnail" ? obj["image"] = nod.childNodes[k].attributes.url: null;
							}
						}
					}
					if(obj["latitude"] == undefined && lat != undefined) {
						obj["latitude"] = lat;
						obj["longitude"] = lng;
					} 
					obj["image"] == undefined && obj["file"].indexOf(".jpg") > 0 ? obj["image"] = obj["file"]: null;
					obj["author"] == undefined ? obj["author"] = ttl: null;
					parseArray.push(obj);
			} else if (tpl.nodeName == "title") { var ttl = tpl.firstChild.nodeValue; }
			else if (tpl.nodeName == "geo:lat") { var lat = tpl.firstChild.nodeValue; }
			else if (tpl.nodeName == "geo:long") { var lng = tpl.firstChild.nodeValue; }
			tpl = tpl.nextSibling;
		}
	};


	/** Convert ATOM structure to array **/
	private function parseASF():Void {
		var tpl = parseXML.firstChild.firstChild;
		while(tpl != null) {
			if (tpl.nodeName.toLowerCase() == "entry") {
					var obj = new Object();
					for(var j=0; j<tpl.childNodes.length; j++) {
						var nod:XMLNode = tpl.childNodes[j];
						if(ATOM_TAGS[nod.nodeName.toLowerCase()] != undefined) {
							obj[ATOM_TAGS[nod.nodeName.toLowerCase()]] = nod.firstChild.nodeValue;
						} else if(nod.nodeName.toLowerCase() == "link" && nod.attributes.rel == "alternate") {
							obj["link"] =  nod.attributes.href;
						} else if(nod.nodeName.toLowerCase() == "summary") {
							obj["description"] = StringMagic.stripTagsBreaks(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "published") {
							obj["date"] = StringMagic.iso2Date(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "updated") {
							obj["date"] = StringMagic.iso2Date(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "modified") {
							obj["date"] = StringMagic.iso2Date(nod.firstChild.nodeValue);
						} else if(nod.nodeName.toLowerCase() == "category") {
							obj["category"] = nod.attributes.term;
						} else if(nod.nodeName.toLowerCase() == "author") { 
							for(var k=0; k< nod.childNodes.length; k++) {
								nod.childNodes[k].nodeName.toLowerCase() == "name" ? obj["author"] = nod.childNodes[k].firstChild.nodeValue: null;
							}
						} else if((nod.nodeName.toLowerCase() == "link" && nod.attributes.rel == "enclosure") &&   
								 (nod.attributes.type == "audio/mpeg" || nod.attributes.type == "video/x-flv"
								 || nod.attributes.type == "image/jpeg" || nod.attributes.type == "image/png"
								 || nod.attributes.type == "image/gif")) {
							obj["file"] = nod.attributes.href;
						} 
					}
					obj["author"] == undefined ? obj["author"] = ttl: null;
					parseArray.push(obj);
			} else if (tpl.nodeName == "title") { var ttl = tpl.firstChild.nodeValue; }
			tpl = tpl.nextSibling;
		}
	};


	/** Convert XSPF structure to array. **/
	private function parseXSPF():Void {
		var tpl = parseXML.firstChild.firstChild;
		while(tpl != null) { 
			if (tpl.nodeName == 'trackList') {
				for(var i=0; i<tpl.childNodes.length; i++) {
					var obj = new Object();
					for(var j=0; j<tpl.childNodes[i].childNodes.length; j++) {
						var nod:XMLNode = tpl.childNodes[i].childNodes[j];
						if(XSPF_TAGS[nod.nodeName.toLowerCase()] != undefined) {
							obj[XSPF_TAGS[nod.nodeName.toLowerCase()]] = nod.firstChild.nodeValue;
						} else if( nod.nodeName.toLowerCase() == "meta" && nod.attributes.rel == "http://www.jeroenwijering.com/start") {
							obj["start"] = nod.firstChild.nodeValue;
						} else if(nod.nodeName.toLowerCase() == "annotation") {
							obj["description"] = StringMagic.stripTagsBreaks(nod.firstChild.nodeValue);
						}
					}
					parseArray.push(obj);
				} 
			}
			tpl = tpl.nextSibling;
		}
	};


	/** Invoked when parsing is completed. **/
	public function onParseComplete() { };


}