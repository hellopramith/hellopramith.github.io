
var initiateLoader=0;
var browserIE=0;

$(document).ready(function(){

	if (($(window).height())>168){

	$('#loadinglogo').css('margin-top',($(window).height()/2)-74)

	}

	else{

		$('#loadinglogo').css('margin-top',0)

	}
	jQuery.each(jQuery.browser, function(i, val) {

	if($.client.os == 'Windows' && $.client.browser=='Safari'){
					$('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');

					 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');

					  
					 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
					 
					 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
					 
					 $('#notUpToDatepartAS').addClass('ishow'); $('#notUpToDatepartAS').removeClass('ihide');
					 
					 return false;
	}
	 if($.browser.msie){
		 
		 browserIE=1;

				 if($.browser.version<'9.0'){
					 
					 $("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").remove();
						 
					 $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');
	
					 $('#notUpToDatepartFF').addClass('ihide'); $('#loaderpart').removeClass('ishow');
			
					 
					 $('#notUpToDatepartIE').addClass('ishow'); $('#notUpToDatepartIE').removeClass('ihide');
					 
					 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
					 
					  $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
					  
					  return false;
				 }

				 else{

					 $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');
	
					 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');
			
					 
					 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
					 
					 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
					 
					  $('#notUpToDatepartIEgt').addClass('ishow'); $('#notUpToDatepartIEgt').removeClass('ihide');

				 }
	 }
	 

	  else if(i=="mozilla" && jQuery.browser.version.substr(0,2)<12){


		 $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');

		 $('#notUpToDatepartFF').addClass('ishow'); $('#notUpToDatepartFF').removeClass('ihide');

 
		 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
		 
		 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
		 
		 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');

		 return false;

	 }

   
	 else if(i=="mozilla" && jQuery.browser.version.substr(0,2)>=12){
		 
		  $('#loaderpart').addClass('ishow'); $('#loaderpart').removeClass('ihide');

		 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');

		 
		 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
		 
		 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
		 
		 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
		 
		 if (initiateLoader==0){
		   loaderActive();
		}
	 }

	 if( $.browser.opera ){
		 
		 
		if(jQuery.browser.version.substr(0,4)>=11.6){
				  $('#loaderpart').addClass('ishow'); $('#loaderpart').removeClass('ihide');
		
				 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');
				  
				 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
				 
				 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
				 
				 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
				 
				  $('#notUpToDatepartOP').addClass('ihide'); $('#notUpToDatepartOP').removeClass('ishow');
				  
				   
		}
		else{
				 $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');
		
				 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');
		

				 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
				 
				 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
				 
				 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
				 
				 $('#notUpToDatepartOP').addClass('ishow'); $('#notUpToDatepartOP').removeClass('ihide');
				 
				 return false;
		}
		  
	  }



			if(!document.createElement('video').canPlayType==true){
				
			
				 $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');

				 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');
		
			  
				 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
				 
				 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
				 
				 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow'); 
					 
				 $('#notUpToDatepartCOMMON').addClass('ishow'); $('#notUpToDatepartAS').removeClass('ihide'); 
				 
				 
				 if($.browser.safari){
					 $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');

					 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');

					  
					 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
					 
					 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
					 
					 $('#notUpToDatepartAS').addClass('ishow'); $('#notUpToDatepartAS').removeClass('ihide');
					 
					 return false;
				 }
				 else if( $.browser.opera ){
					  $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');
		
					 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');

					  
					 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
					 
					 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
					 
					 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
					 
					 $('#notUpToDatepartOP').addClass('ishow'); $('#notUpToDatepartOP').removeClass('ihide');
					 
					 return false;
				 }
				 else if( $.browser.mozilla ){
					  $('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');
		
					 $('#notUpToDatepartFF').addClass('ishow'); $('#notUpToDatepartFF').removeClass('ihide');

					  
					 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
					 
					 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
					 
					 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
					 
					 $('#notUpToDatepartOP').addClass('ihide'); $('#notUpToDatepartOP').removeClass('ishow');
					 
					 return false;
				 }
				 else{
					$('#loaderpart').addClass('ihide'); $('#loaderpart').removeClass('ishow');

					 $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');

					  
					 $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
					 
					 $('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');
					 
					 $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow'); 
					 
					 $('#notUpToDatepartCOMMON').addClass('ishow'); $('#notUpToDatepartAS').removeClass('ihide'); 
				 }
				

				 return false;

			}

			else{
				

		         $('#loaderpart').show();
				 
				 $('#notUpToDatepartFF').hide();

				 
				 
				 $('#notUpToDatepartIE').hide();
				 
				 $('#notUpToDatepartIEgt').hide();
			 
				 $('#notUpToDatepartAS').hide();

                 
				 
				 if (initiateLoader==0 && browserIE==0){
					loaderActive();
				}

              }

			
			$("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").hide();

});});


function loadIE9(){
	$('#loaderpart').addClass('ishow'); $('#loaderpart').removeClass('ihide');
	
   $('#notUpToDatepartFF').addClass('ihide'); $('#notUpToDatepartFF').removeClass('ishow');

  
   
   $('#notUpToDatepartIE').addClass('ihide'); $('#notUpToDatepartIE').removeClass('ishow');
   
   $('#notUpToDatepartAS').addClass('ihide'); $('#notUpToDatepartAS').removeClass('ishow');
   
	$('#notUpToDatepartIEgt').addClass('ihide'); $('#notUpToDatepartIEgt').removeClass('ishow');	
	
	if (initiateLoader==0){
		loaderActiveIE();
	}
}



function loaderActive(){
	 
onVideoEnable();
	initiateLoader=1;
	$('body').jpreLoader({

		

	}, function() {	//jPreLoader callback function

		//clearInterval(timer);

		

			$("#loadingtext").html("100%");



			if($('#loaderpart').is(':visible')){

				

				$("#preloader").delay('100').hide();



				$('body').removeClass('loaderFix');



				$("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").show();

				screen_height=$(window).height();

			loadVideoHome();
			screen_width=$(window).width();



			$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.whyustext').css('top',screen_height);



	



	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-sayingtitle').css('top',screen_height);



if (($(window).height())>588){

	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)

	}

	else{

		$('#home .screenVideo').css('margin-top',0)

	}



			



			setTimeout(function(){



				loadComplted();



				



			},0);



			}



			else if($('#loaderpart').hasClass('ishow')){



				$("#preloader").delay('100').hide();



				$('body').removeClass('loaderFix');



				$("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").show();

			loadVideoHome();
				screen_height=$(window).height();



			screen_width=$(window).width();



			$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.whyustext').css('top',screen_height);



	



	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-sayingtitle').css('top',screen_height);



if (($(window).height())>588){

	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)

	}

	else{

		$('#home .screenVideo').css('margin-top',0)

	}



			



			setTimeout(function(){



				loadComplted();



				



			},0);screen_height=$(window).height();



			screen_width=$(window).width();



			$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.whyustext').css('top',screen_height);



	



	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-sayingtitle').css('top',screen_height);







			



			setTimeout(function(){



				loadComplted();

			},0);



			}

});


}

function loadVideoHome(){
  var homevideo = $('.screenVideo').find('video')[0];
  homevideo.insertBefore(createSource('http://www.motionkandy.com/videos/ogg/mk_homen.ogv', 'video/ogg'), homevideo.firstChild);
  homevideo.insertBefore(createSource('http://www.motionkandy.com/videos/mp4/mk_homen.mp4', 'video/mp4'), homevideo.firstChild.nextSibling);
  homevideo.preload="auto";
  homevideo.load();
}
var notloadedVid=0;
$('.vjs-big-play-button').click(function(){
	
		loadVideoStream();
	
});
function loadVideoStream(){
	
if(notloadedVid==0){
	var kandyvideo3 = $('#kandyvideos').find('video')[0];
	var kandyvideo2 = $('#kandyvideos').find('video')[1];
 	var kandyvideo1 = $('#kandyvideos').find('video')[2];
 
 
 	var kandyvideo4 = $('#kandyvideos').find('video')[3];
	var kandyvideo5 = $('#kandyvideos').find('video')[4];
	  kandyvideo3.preload="auto";
	  kandyvideo3.load();
	 kandyvideo2.preload="auto";
  kandyvideo2.load();
  kandyvideo1.preload="auto";
  kandyvideo1.load();
  kandyvideo4.preload="auto";
  kandyvideo4.load();
  kandyvideo5.preload="auto";
  kandyvideo5.load();
}
notloadedVid==1;
  
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



function loaderActiveIE(){
$('.forIE').show();
$('.fornonIE').remove();
	initiateLoader=1;
	$('body').jpreLoader({

		

	}, function() {	//jPreLoader callback function

		//clearInterval(timer);

		

			$("#loadingtext").html("100%");



			if($('#loaderpart').is(':visible')){

				

				$("#preloader").delay('100').hide();



				$('body').removeClass('loaderFix');



				$("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").show();

				screen_height=$(window).height();

			
			screen_width=$(window).width();



			$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.whyustext').css('top',screen_height);



	



	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-sayingtitle').css('top',screen_height);



if (($(window).height())>588){

	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)

	}

	else{

		$('#home .screenVideo').css('margin-top',0)

	}



			



			setTimeout(function(){



				IEloadComplted();



				



			},0);



			}



			else if($('#loaderpart').hasClass('ishow')){



				$("#preloader").delay('100').hide();



				$('body').removeClass('loaderFix');



				$("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").show();

			
				screen_height=$(window).height();



			screen_width=$(window).width();



			$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.whyustext').css('top',screen_height);



	



	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-sayingtitle').css('top',screen_height);



if (($(window).height())>588){

	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)

	}

	else{

		$('#home .screenVideo').css('margin-top',0)

	}



			



			setTimeout(function(){



				IEloadComplted();



				



			},0);screen_height=$(window).height();



			screen_width=$(window).width();



			$('.balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.whyustext').css('top',screen_height);



	



	$('.client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-sayingtitle').css('top',screen_height);







			



			setTimeout(function(){



				IEloadComplted();

			},0);



			}
			
			
			

});


}
