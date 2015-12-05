$(function(){
	$("#navbar-li-index").addClass("active");
	$("ul.nav-taobao2 li a").each(function(){
		$(this).on("mouseenter",function(){
			$(this).parent().parent().find("a").each(function(){
				$($(this).attr("href")).removeClass("active");
			});
			$(this).tab("show");
		});
	});
});