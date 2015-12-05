xzc.templates.jidian='\
	<div class="row">\
		<div class="col-xs-1">\
			<button id="jidian-add" type="button" class="btn btn-info btn-block">添加</button>\
		</div>\
	</div>\
	<div id="content-jidian">\
	</div>\
';
xzc.templates.jidian2='\
	<div class="row">\
		<form class="form-horizontal">\
			<div class="form-group">\
				<label class="col-xs-1 control-label">学分</label>\
				<div class="col-xs-2"><input type="text" class="form-control"/></div>\
				<label class="col-xs-1 control-label">分数</label>\
				<div class="col-xs-2"><input type="text" class="form-control"/></div>\
			</div>\
		</form>\
	</div>\
';
function load_jidian(){
	$('#content').html($.templates(xzc.templates.jidian).render()).find('#jidian-add').click(function(){
		$($.templates(xzc.templates.jidian2).render()).appendTo($('#content-jidian'));
	});
}
