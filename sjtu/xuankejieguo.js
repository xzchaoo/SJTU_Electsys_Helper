//获得bsid
function _get_bsid(url){
	var re=new RegExp("bsid=(\\d+)");
	var result=url.match(re);
	return result ? result[1] : "" ;
}

//要保证输入 形如    课程代码： SE223  注意那两点
function _get_value(text){
	return text.substring(text.indexOf('：')+1).trim();
}

//根据bsid抽出课程信息
function _get_lession_detail2(bsid){
	var url=xzc.urls.lession_detail;
	var info={};
	$.ajax({
		url:url,
		data:{bsid:bsid},
		async:false,
		type:"get",
		dataType:"html",
		success:function(data){
			var $tds=$(data).find('#LessonArrangeDetail1_dataListKc table td');
			info.kechengdaima=_get_value($tds.eq(0).text());
			info.kechengmingcheng=_get_value($tds.eq(1).text());
			info.kehao=_get_value($tds.eq(2).text());
			info.xuenian=_get_value($tds.eq(4).text());
			info.xueqi=_get_value($tds.eq(5).text());
			info.xuefen=_get_value($tds.eq(7).text());
			info.qishizhou=_get_value($tds.eq(8).text());
			info.jieshuzhou=_get_value($tds.eq(9).text());
			info.kaoshiqingkuang=_get_value($tds.eq(10).text());
			info.danshuangzhouqingkuang=_get_value($tds.eq(11).text());

			//这里将他们转为int
			info.zuidarenshu=parseInt(_get_value($tds.eq(12).text()));
			info.yixuankerenshu=parseInt(_get_value($tds.eq(13).text()));
			
			info.beizhu=_get_value($tds.eq(15).text());
			info.bsid=bsid;
		}
	});
	return info;
}

function load_jieguo(){
	var url="http://electsys.sjtu.edu.cn/edu/student/elect/electResultOuter.aspx";
	var d=$('<div>').load(url,function(){
		var data=[];
		//拼凑结果
		d.find('#ElectResult1_gridMain tr:gt(0)').each(function(){
			var $tds=$(this).find('td');
			/*var item={
				kechengmingcheng:$tds.eq(0).text(),
				kehao:$tds.eq(1).text(),
				xueqixuefen:$tds.eq(2).text(),
				jiaoshixingming:$tds.eq(3).text(),
				zhouanpai:$tds.eq(4).text(),
				beizhu:$tds.eq(5).text(),
				shifouchenggong:$tds.eq(6).text(),
				lunci:$tds.eq(7).text(),
				bsid:_get_bsid($tds.last().find('a').attr('href')),
			};*/
			var bsid=_get_bsid($tds.last().find('a').attr('href'));
			var item=_get_lession_detail2(bsid);

			//补充教师姓名
			item.jiaoshixingming=$tds.eq(3).text();

			data.push(item);
			//.appendTo($(document.body));
		});
		load_jieguo_with_data(data);
	});
}

xzc.body_jieguo='\
	<div class="row">\
		<div class="col-xs-3">课程名称</div>\
		<div class="col-xs-1 text-center">学期学分</div>\
		<div class="col-xs-1 text-center">课程代码</div>\
		<div class="col-xs-1">选课情况</div>\
		<div class="col-xs-1 text-center">教师姓名</div>\
		<div class="col-xs-1 text-center">bsid</div>\
		<div class="col-xs-1 text-center">原始详细页面</div>\
	</div>\
{{for data}}\
	<div class="row x-kebiao-row">\
		<div class="col-xs-3">{{:kechengmingcheng}}</div>\
		<div class="col-xs-1 text-center">{{:xuefen}}</div>\
		<div class="col-xs-1 text-center">{{:kechengdaima}}</div>\
		{{if yixuankerenshu < zuidarenshu }}\
			<div class="col-xs-1 text-center text-danger">\
		{{else}}\
			<div class="col-xs-1 text-center">\
		{{/if}}\
			{{:yixuankerenshu}}/{{:zuidarenshu}}</div>\
		<div class="col-xs-1 text-center">{{:jiaoshixingming}}</div>\
		<div class="col-xs-1 text-center">{{:bsid}}</div>\
		<!--这里没有办法只有考虑写死-->\
		<div class="col-xs-1 text-center"><a href="http://electsys.sjtu.edu.cn/edu/lesson/viewLessonArrangeDetail2.aspx?bsid={{:bsid}}" class="btn btn-success btn-block" target="_blank">Go</a></div>\
	</div>\
{{/for}}\
';


function load_jieguo_with_data(data){
	$('#content').html($.templates(xzc.body_jieguo).render({data:data}));
}