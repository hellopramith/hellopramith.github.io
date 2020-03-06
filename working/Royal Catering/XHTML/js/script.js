function tabChange(p){
	$(p).parents('.p_tab').find('.p_tab_head').find('li').removeClass('p_tab_active');
	$(p).parent('li').addClass('p_tab_active');
	$(p).parents('.p_tab').find('.p_tabContent').hide();
	$(p).parents('.p_tab').find('#'+$(p).attr("id")+'C').show();
}
$(document).ready(function(){
	$('ul').each(function(){
		$(this).find('li:first-child').addClass('first-li');
		$(this).find('li:last-child').addClass('last-li');
	});
});