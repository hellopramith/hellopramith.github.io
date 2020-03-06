function load_animation(){
	$('#formIDe').each (function(){
		 this.reset();
	});
   $('body').addClass('bodyFixheight');
	loadVideo();
	screen_height=$(window).height();

	$('body').css('width',$(window).width())
    screen_width=$(window).width();
	$("#home").css('height',screen_height);
	$("#home").css('min-height',screen_height);
	$('.balloon-default1').css('left',(screen_width/2)-($('.balloon-default1').width()/2));
	$('.balloon-defaultwh').css('left',(screen_width/2)-($('.balloon-defaultwh').width()/2));
	$('.balloon-defaultr1').css('left',(screen_width/2));
	$('.balloon-default2').css('left',(screen_width/2)-($('.balloon-default2').width()*2)+42);
	$('.balloon-default2-b').css('right',(screen_width/2)-($('.balloon-default2').width()*2)+142);
	$('.balloon-default3').css('left',(screen_width/2)-($('.balloon-default2').width()));
	$('.balloon-default3-b').css('left',(screen_width/2)-($('.balloon-default2').width())-200);
	$('.balloon-default4').css('right',(screen_width/2)-($('.balloon-default2').width())-($('.balloon-default3').width()+70));
	$('.balloon-default4b').css('left',(screen_width/2)-($('.balloon-default2').width())-($('.balloon-default3').width()-70));
	$('.storeBtnlml').css('left',(screen_width/2)-($('.storeBtnlml').width()/2));
	$('.whyustext').css('left',(screen_width/2)-45);
	$('.scroll-sayingtitle').css('left',($(window).width()/2)-266-100);
	$('.client-saying-default1').css('left',($(window).width()/2)-266-100);
	$('.client-saying-default2').css('left',($(window).width()/2)-250-260);
	$('.client-saying-default3').css('left',($(window).width()/2)-243+175);
	$('.client-saying-default5').css('left',($(window).width()/2)-243);
}

function onVideoEnable(){
	$('#playerLoader').hide();
	$('#playmeStart').show();
	$('.screenVideo').find('video').css('visibility','visible');	
	homemovieFix();
}



function homemovieFix(){
	$('#playmeStart').show();
	$('#pauseme').show();
	$('.screenVideo').find('video').css('visibility','visible');	

		//$('.screenVideo').find('video')[0].play();  

		var tagended = document.getElementById("homevideo");
}


function loadComplted() {
	if (($(window).height())>588){
    	$('#home .screenVideo').css('margin-top',($(window).height()/2)-264)
	}
	else{
		$('#home .screenVideo').css('margin-top',0)
	}
	load_animation();
}


function popup(p){
	$('.popupStyles-motionKandy').fadeOut();
	$('#'+p).fadeIn();
	$('.scroll-pane').jScrollPane();
	$('.formError').hide();	
}

function popupclose(p){
	$('#'+p).fadeOut();
	$('.formError').show();	
}

function successCall(){
	googleConv();
	$('.formError').hide();
	$('.footer_logo').focus();
	$('#requestQuoteBlk-r-thanks').show();
	$('#requestQuoteBlk-r-form').animate({
		top:- $('#requestQuoteBlk-r-form').height()-85,
		opacity:0
	},1200,function(){
		$('#requestQuoteBlk-r-form').hide();
	});
	$('#requestQuoteBlk-r-thanks').animate({
		top:0,
		opacity:1
	},1200);
}

function formCall(){
	$('#formIDe').each (function(){
		 this.reset();
	});
	$('.captchaformError').addClass('ihide');
	$('.captchaformError').removeClass('ihide');
	$('#requestQuoteBlk-r-form').show();
	$('#requestQuoteBlk-r-form').animate({
		top:0,
		opacity:1
	},1200);

	$('#requestQuoteBlk-r-thanks').animate({
		top:- $('.requestQuoteBlk-r-thanks').height()-212,
		opacity:0
		},1200,function(){
		$('#requestQuoteBlk-r-thanks').hide();
	});
}


function callPopup(p){
	$('.videoPopupframe').fadeOut();
	$('#videoPopupframe-'+p).fadeIn();
}

function closeVidpopup(p){
	$(p).parent('.videoPopupframe').find('video')[0].pause();
	$('.videoPopupframe').fadeOut();
}
