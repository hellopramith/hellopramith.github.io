$(document).ready(function(){
	onloadCall();
	var isMacLike = navigator.userAgent.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
	if(isMacLike){

	}
	else{ 
	 $('body').niceScroll();	
	}
	
	 
	$('.contactFormUL').find("label").inFieldLabels();
	$('.headerLeft').live('mouseover',function(){
		$(this).find('.menuList').show().stop().animate({
			height:150
		},100) 
	});
	$('.headerLeft').live('mouseout',function(){
		$(this).find('.menuList').show().stop().animate({
			height:0
		},100,function(){$(this).hide()}) 
	});
	
	
	$(".homeslider").find('li').css('width',$(window).width()).css('height',$(window).height());
	$(".homeslider").easySlider({
		auto: true,
		continuous: true,
		speed: 1000,
		pause: 8000,
		nextId: "sliderhomenext",
		prevId: "sliderhomeprev"
	});
	
	
	$("#easySlider_1").easySlider({
		auto: false,
		continuous: true,
		nextId: "slider1next",
		prevId: "slider1prev"
	});
	$("#easySlider_1").addClass('activated');
	$("#slider1next").addClass('nextslide');
	$("#slider1prev").addClass('prevslide');
	$('.clientlogo').live('mouseover',function(){
		$(this).find('img').stop().toggle();
	});
	$('.clientlogo').live('mouseout',function(){
		$(this).find('img').stop().toggle();
	});
	
	
	 $('#nivoSlider_1,#nivoSlider_2').nivoSlider({
		  effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
		  slices:10,
		  animSpeed:1000,
		  pauseTime:3000,
		  startSlide:0, //Set starting Slide (0 index)
		  directionNav:false, //Next & Prev
		  directionNavHide:true, //Only show on hover
		  controlNav:false, //1,2,3...
		  keyboardNav:false, //Use left & right arrows
		  pauseOnHover:false, //Stop animation while hovering
		  manualAdvance:false, //Force manual transitions
		  captionOpacity:0.8, //Universal caption opacity
		  beforeChange: function(){},
		  afterChange: function(){},
		  slideshowEnd: function(){} //Triggers after all slides have been shown
	 });
	
});
function callnivoSlider(sd){
	$('#nivoSlider_'+sd).nivoSlider({
		  effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
		  slices:10,
		  animSpeed:1000,
		  pauseTime:3000,
		  startSlide:0, //Set starting Slide (0 index)
		  directionNav:false, //Next & Prev
		  directionNavHide:true, //Only show on hover
		  controlNav:false, //1,2,3...
		  keyboardNav:false, //Use left & right arrows
		  pauseOnHover:false, //Stop animation while hovering
		  manualAdvance:false, //Force manual transitions
		  captionOpacity:0.8, //Universal caption opacity
		  beforeChange: function(){},
		  afterChange: function(){},
		  slideshowEnd: function(){} //Triggers after all slides have been shown
	 });
}

$(".inline").live("click", function (t) {
        if ($(this).attr("href").substr(0, 1) == "#") {
            t.preventDefault();
            me = $(this);
            anchor = $(this).attr("href");
			$("html,body").stop().animate({
				scrollTop: $(anchor).offset().top 
			}, 800);
			$(".inline").removeClass('active');
			$(this).addClass('active');
		}
});

$(window).resize(function(){
	onloadCall();
});
function onloadCall(){
	$('.slide').css('min-height',$(window).height());
	$('.maxWidthwindow').css('min-height',$(window).height());
	$('.slide1').css('height',$(window).height());
	$('.slide1').find('.homeslider').find('li').css('height',$(window).height());
	if($(window).height()>580){
		$('.slide5').css('height',$(window).height());
		$('.slide5').find('.maxWidthwindow').css('height',$(window).height());
	}
	else{
		$('.slide5').css('height',580);
		$('.slide5').find('.maxWidthwindow').css('height',580);
	}
}
function stuProductionCnt(std,elem){
	$('.studioProductionCnt').hide();
	$('#studioProductionCnt_'+std).show();
	$('.studioProductionIndex').find('a').removeClass('active');
	$(elem).addClass('active');
}
function ourProjectsCnt(std,elem){
	$('.ourProjectsCnt').hide();
	$('#ourProjectsCnt_'+std).show();
	$('.projectMenuListUL').find('a').removeClass('active');
	$(elem).addClass('active');
	if($("#easySlider_"+std).hasClass('activated')){
		
	}
	else{
	$("#easySlider_"+std).easySlider({
		auto: false,
		continuous: true,
		nextId: "slider"+std+"next",
		prevId: "slider"+std+"prev"
	});
	if (std==2){
		$('#nivoSlider_3,#nivoSlider_4').nivoSlider({
		  effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
		  slices:10,
		  animSpeed:1000,
		  pauseTime:3000,
		  startSlide:0, //Set starting Slide (0 index)
		  directionNav:false, //Next & Prev
		  directionNavHide:true, //Only show on hover
		  controlNav:false, //1,2,3...
		  keyboardNav:false, //Use left & right arrows
		  pauseOnHover:false, //Stop animation while hovering
		  manualAdvance:false, //Force manual transitions
		  captionOpacity:0.8, //Universal caption opacity
		  beforeChange: function(){},
		  afterChange: function(){},
		  slideshowEnd: function(){} //Triggers after all slides have been shown
	 });	 
	}
	if (std==3){
		$('#nivoSlider_5,#nivoSlider_51').nivoSlider({
		  effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
		  slices:10,
		  animSpeed:1000,
		  pauseTime:3000,
		  startSlide:0, //Set starting Slide (0 index)
		  directionNav:false, //Next & Prev
		  directionNavHide:true, //Only show on hover
		  controlNav:false, //1,2,3...
		  keyboardNav:false, //Use left & right arrows
		  pauseOnHover:false, //Stop animation while hovering
		  manualAdvance:false, //Force manual transitions
		  captionOpacity:0.8, //Universal caption opacity
		  beforeChange: function(){},
		  afterChange: function(){},
		  slideshowEnd: function(){} //Triggers after all slides have been shown
	 });	 
	}
	if (std==4){
		$('#nivoSlider_6,#nivoSlider_7,#nivoSlider_8').nivoSlider({
		  effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
		  slices:10,
		  animSpeed:1000,
		  pauseTime:3000,
		  startSlide:0, //Set starting Slide (0 index)
		  directionNav:false, //Next & Prev
		  directionNavHide:true, //Only show on hover
		  controlNav:false, //1,2,3...
		  keyboardNav:false, //Use left & right arrows
		  pauseOnHover:false, //Stop animation while hovering
		  manualAdvance:false, //Force manual transitions
		  captionOpacity:0.8, //Universal caption opacity
		  beforeChange: function(){},
		  afterChange: function(){},
		  slideshowEnd: function(){} //Triggers after all slides have been shown
	 });	 
	}
	if (std==5){
		$('#nivoSlider_9,#nivoSlider_10').nivoSlider({
		  effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
		  slices:10,
		  animSpeed:1000,
		  pauseTime:3000,
		  startSlide:0, //Set starting Slide (0 index)
		  directionNav:false, //Next & Prev
		  directionNavHide:true, //Only show on hover
		  controlNav:false, //1,2,3...
		  keyboardNav:false, //Use left & right arrows
		  pauseOnHover:false, //Stop animation while hovering
		  manualAdvance:false, //Force manual transitions
		  captionOpacity:0.8, //Universal caption opacity
		  beforeChange: function(){},
		  afterChange: function(){},
		  slideshowEnd: function(){} //Triggers after all slides have been shown
	 });	 
	}
	
	
	$("#easySlider_"+std).addClass('activated');
	$("#slider"+std+"next").addClass('nextslide');
	$("#slider"+std+"prev").addClass('prevslide');
	}
	
	
	
	
}
function launchThanks(){
	$('.contactFormUL').hide().css('overflow','hidden').animate({height:0},1000);
	$('.contactThanks').show().css('overflow','visible').animate({height:'auto'},1000);
}
function launchForm(){
	$('.contactThanks').hide().css('overflow','hidden').animate({height:0},1000);
	$('.contactFormUL').show().css('overflow','visible').animate({height:'auto'},1000);
}