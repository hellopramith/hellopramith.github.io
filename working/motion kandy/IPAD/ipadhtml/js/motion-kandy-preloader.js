$(document).ready(function(){
	$('#loaderpart').show();
	if (($(window).height())>168){
		$('#loadinglogo').css('margin-top',($(window).height()/2)-74)
	}
	else{
		$('#loadinglogo').css('margin-top',0)
	}
	loaderActive();
	if (navigator.userAgent.match(/iPad/i)) {
      $('.item').on('touchstart', function(e) {
          var $this = $(this);
          expand($this,$(this).attr('id'));
		});
		$('.item').on('touchend', function(e) {
		  var $this = $(this);
		  collapse($this);
		});
	}
});


touchMove=function(event) {
   event.preventDefault();
}


function loaderActive(){
	onVideoEnable();
	$('body').jpreLoader({
	}, function() {	
			$("#loadingtext").html("100%");
	 	    $("#preloader").delay('100').hide();
	        $('body').removeClass('loaderFix');
            $("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").show();
            screen_height=$(window).height();
    		screen_width=$(window).width();
            //loadVideoHome();

	 if (($(window).height())>588){
			$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)
			}
			else{
				$('#home .screenVideo').css('margin-top',0)
		 }
		loadComplted();
	});
}

function loadVideoHome(){
	//var homevideo = $('.screenVideo').find('video')[0];
	//homevideo.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/mk_home.mp4', 'video/mp4'), homevideo.firstChild.nextSibling);
	//homevideo.preload="auto";
	//homevideo.load();
}


function loadVideo() {
	var kandyvideo1 = $('#kandyvideos').find('video')[0];
	kandyvideo1.insertBefore(createSource('http://www.motionkandy.com/videos/ogg/beplused.ogv', 'video/ogg'), kandyvideo1.firstChild);
    kandyvideo1.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/beplused.mp4', 'video/mp4'), kandyvideo1.firstChild.nextSibling);
    kandyvideo1.preload="none";
    var kandyvideo2 = $('#kandyvideos').find('video')[1];
    kandyvideo2.insertBefore(createSource('http://www.motionkandy.com/videos/ogg/gbm.ogv', 'video/ogg'), kandyvideo2.firstChild);
    kandyvideo2.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/gbm.mp4', 'video/mp4'), kandyvideo2.firstChild.nextSibling);
    kandyvideo2.preload="none";
    var kandyvideo3 = $('#kandyvideos').find('video')[2];
    kandyvideo3.insertBefore(createSource('http://www.motionkandy.com/videos/ogg/prime_success.ogv', 'video/ogg'), kandyvideo3.firstChild);
   kandyvideo3.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/prime_success.mp4', 'video/mp4'), kandyvideo3.firstChild.nextSibling);
   kandyvideo3.preload="none";
   var kandyvideo4 = $('#kandyvideos').find('video')[3];
   kandyvideo4.insertBefore(createSource('http://www.motionkandy.com/videos/ogg/adforce.ogv', 'video/ogg'), kandyvideo4.firstChild);
   kandyvideo4.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/adforce.mp4', 'video/mp4'), kandyvideo4.firstChild.nextSibling);
   kandyvideo4.preload="none";
   var kandyvideo5 = $('#kandyvideos').find('video')[4];
   kandyvideo5.insertBefore(createSource('http://www.motionkandy.com/videos/ogg/tiger1.ogv', 'video/ogg'), kandyvideo5.firstChild);
   kandyvideo5.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/tigerIDnew.mp4', 'video/mp4'), kandyvideo5.firstChild.nextSibling);
   kandyvideo5.preload="none";
}


function createSource(src, type) {
	var source = document.createElement('source');
	source.src = src;
	source.type = type;
	return source;
}