$(document).ready(function(){
	onloadCall();
	$('body').niceScroll();	 
	$('.contactFormUL').find("label").inFieldLabels();
	$('.headerLeft').hover(function(){
		$(this).find('.menuList').stop().slideDown(); 
	 },function(){
		$(this).find('.menuList').delay(10).stop().slideUp();  
	});	
	$("#easySlider_1").easySlider({
		auto: true,
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
	
});

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
	onloadCall()
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
		auto: true,
		continuous: true,
		nextId: "slider"+std+"next",
		prevId: "slider"+std+"prev"
	});
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