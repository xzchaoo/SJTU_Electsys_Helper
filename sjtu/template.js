


xzc.body=' \
<div class="navbar navbar-fixed-top navbar-inverse"> \
	<div class="container"> \
		<div class="row"> \
			<div class="col-xs-12"> \
			   <div class="navbar-header"> \
					<a class="navbar-brand" href="javascript:void(0)" title="test" data-placement="bottom" data-toggle="tooltip"tabindex="-1">SJTU</a> \
				</div> \
				<ul class="nav navbar-nav"> \
					<li class="x-name"><a href="javascript:void(0)" tabindex="-1">{{:name}}</a></li> \
					<li class="x-user-center"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">个人中心</a></li> \
					<li class="x-kebiao"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">查看本学期课婊</a></li> \
					<li class="x-jieguo"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">查看选课结果</a></li> \
					<li class="x-chengji"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">查成绩</a></li> \
					<li class="x-jidian"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">积点计算</a></li> \
					<li class="x-xuanke"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">选课</a></li> \
					<li class="x-about"><a href="javascript:void(0)" data-toggle="tab"tabindex="-1">关于</a></li> \
					<li class=""><a href="http://electsys.sjtu.edu.cn/edu/student/sdtMain.aspx" target="_blank"tabindex="-1">去课程主页</a></li> \
				</ul> \
			</div> \
		</div> \
	</div> \
</div>\
\
\
<div id="x-container" class="container"> \
	<div id="content" class="content"> \
	</div> \
</div> \
<div class="footer">\
	<div class="container">\
		<div class="row">\
			<div class="col-xs-12 text-center">\
				方便选课,目前只实现了这些功能,其他的功能以后再添加\
			</div>\
		</div>\
	</div>\
</div>\
<div class="footer2">\
	<div class="container">\
		<div class="row">\
			<div class="pull-left">Powered by jQuery Bootstrap JsViews underscore ... 被IE大神虐暴了,以前听说IE兼容性差只是听说,我还是决定不支持IE了...</div>\
		</div>\
	</div>\
</div>\
';


xzc.body1='\
	<div class="row"> \
		<div class="col-xs-3"> \
			<button class="btn btn-success" type="button">注销</button> \
		</div> \
	</div> \
';


var student_info={
	name:"",
	dept:"",
	clazz:"",
	id:"",
	gender:"",
	pro:"",
	pid:""
};


function getStudentInfo(nextCallback){
	var url="http://electsys.sjtu.edu.cn/edu/student/sdtModifyIndividualInfo.aspx";
	var d=$('<div>').html('123').load(url,function(){
		student_info.name=d.find('#lblXm').text();
		student_info.dept=d.find('#lblYxmc').text();
		student_info.clazz=d.find('#lblBj').text();
		student_info.id=d.find('#lblXh').text();
		student_info.gender=d.find('#lblXb').text();
		student_info.pro=d.find('#lblZymc').text();
		//student_info.pid="";
		nextCallback();
	});
}


xzc.body_user_center='\
	<div class="row">\
		<div class="col-xs-12">\
			<form class="form-horizontal">\
				<div class="form-group">\
					<label class="col-xs-2 control-label">学号</label>\
					<div class="col-xs-2">\
						<label class="form-control-static">{{:id}}</label>\
					</div>\
				</div>\
				<div class="form-group">\
					<label class="col-xs-2 control-label">姓名</label>\
					<div class="col-xs-2">\
						<label class="form-control-static">{{:name}}</label>\
					</div>\
				</div>\
				<div class="form-group">\
					<label class="col-xs-2 control-label">学院</label>\
					<div class="col-xs-2">\
						<label class="form-control-static">{{:dept}}</label>\
					</div>\
				</div>\
				<div class="form-group">\
					<label class="col-xs-2 control-label">专业</label>\
					<div class="col-xs-2">\
						<label class="form-control-static">{{:pro}}</label>\
					</div>\
				</div>\
				<div class="form-group">\
					<label class="col-xs-2 control-label">班级</label>\
					<div class="col-xs-2">\
						<label class="form-control-static">{{:clazz}}</label>\
					</div>\
				</div>\
			</form>\
		</div>\
	</div>\
';



function load_user_center(){
	$('#content').html($.templates(xzc.body_user_center).render({
		name:student_info.name,
		clazz:student_info.clazz,
		dept:student_info.dept,
		id:student_info.id,
		pro:student_info.pro
	}));
}



xzc.body_kebiao='\
	<div class="form-group">\
		<label class="control-label">{{:name}}</label>\
	</div>\
';


function load_kebiao(){
	$('#content').html('暂无');
	return;
	var url=xzc.urls.kebiao;
	
	var d=$('<div>').load(url,function(){
		$.ajax({
			url:url,
			type:"post",
			dataType:"html",
			data:{
			'__VIEWSTATE':d.find('#__VIEWSTATE').val(),
			'__VIEWSTATEGENERATOR':d.find('#__VIEWSTATEGENERATOR').val(),
			'__EVENTVALIDATION':d.find('#__EVENTVALIDATION').val(),
			'dpXn':d.find('#dpXn').val(),
			'dpXq':d.find('#dpXq').val(),
			'btnOk':d.find('#btnOk').val()
			},
			success:function(data){
				$(data).find('#gridMain tr:gt(0)').each(function(){
					var $tds=$(this).find('td');
					$($.templates(xzc.body_kebiao).render({
						name:$tds.eq(0).text()
					})).appendTo($(document.body));
				});
			}
		});
	});
}



function load_kebiao_with_data(data){
	$('#content').html();
}


xzc.body_about='\
<div class="row">\
	<dic class="col-xs-12">\
		目标是将常用的功能聚集在一起,其他普通的功能就回原来的页面去处理吧.\
	</div>\
</div>\
';


function load_about(){
	var d=window.open("http://electsys.sjtu.edu.cn/edu/student/sdtMain.aspx");
	$(d.document).ready(function(){
		d.document.body=d.document.createElement('body');
	});
	$('#content').html($.templates(xzc.body_about).render());
}

