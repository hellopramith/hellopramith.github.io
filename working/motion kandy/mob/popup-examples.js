

function callPopup(p){
	
	$('.videoPopupframe').fadeOut();
	$('.videoPopupframe').css('left',0);
	$('.videoPopupframe').css('width','100%');
	$('.videoPopupframe').find('.videoPopupframeInner').css('width','100%');
	$('.videoPopupframe').find('.videoPopupframeInner').css('height','auto');
	
	$('.videoPopupframe').find('video').css('width','100%');
	$('.videoPopupframe').find('video').css('height','auto');
		$('.videoPopupframe').css('padding',0);
		$('.videoPopupframe').css('margin',0);
	$('#videoPopupframe-'+p).fadeIn();
}
function closeVidpopup(p){
	$(p).parent('.videoPopupframe').find('video')[0].pause();
	$('.videoPopupframe').fadeOut();
}
