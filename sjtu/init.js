function require_css(url){
	$('<link>').attr('rel','stylesheet').attr('href',url).appendTo($('head'));
}
function initJS(){
	require_css("http://127.0.0.1/css/bootstrap.css");
	require_css("http://127.0.0.1/css/sjtu.css");
	
	$('[data-toggle=tooltip]').tooltip();
	$('.x-user-center > a').click(load_user_center);
	$('.x-kebiao > a').click(load_kebiao);
	$('.x-jieguo > a').click(load_jieguo);
	$('.x-about > a').click(load_about);
	$('.x-chengji > a').click(load_chengji);
	$('.x-jidian > a').click(load_jidian);
	$('.x-xuanke > a').click(load_xuanke);
}


$(function(){
	getStudentInfo(function(){
	
		$('body').css('padding-top','60px');
		var b = $.templates(xzc.body).render({
			name:student_info.name
		});
		b=$(b).appendTo($('body'));
		initJS();
		load_user_center();
		
	});
});