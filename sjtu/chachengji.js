//缓存一些信息
xzc.cache={};
//成绩缓存 否则服务器会经常拒绝 反正你成绩又不变
xzc.cache.chengji={};

//for debug
xzc.cache.chengji['2014-2015-1']=eval('[{"kechengdaima":"EN027 ","kechengmingcheng":"大学基础英语（3） ","xuefen":"3.0","chengji":"70.00","manfenfenshu":"100分"},{"kechengdaima":"PE003 ","kechengmingcheng":"体育（3） ","xuefen":"1.0","chengji":"91.00","manfenfenshu":"100分"},{"kechengdaima":"PH004 ","kechengmingcheng":"大学物理（B类）（2） ","xuefen":"3.0","chengji":"89.00","manfenfenshu":"100分"},{"kechengdaima":"PH029 ","kechengmingcheng":"大学物理实验（2） ","xuefen":"1.0","chengji":"82.00","manfenfenshu":"100分"},{"kechengdaima":"PI902 ","kechengmingcheng":"马克思哲学经典著作导读 ","xuefen":"2.0","chengji":"80.00","manfenfenshu":"100分"},{"kechengdaima":"PU916 ","kechengmingcheng":"现代日本政治 ","xuefen":"3.0","chengji":"85.00","manfenfenshu":"100分"},{"kechengdaima":"SE100 ","kechengmingcheng":"软件工程创新实践基础 ","xuefen":"2.0","chengji":"通过","manfenfenshu":"100分"},{"kechengdaima":"SE106 ","kechengmingcheng":"程序设计（2） ","xuefen":"4.0","chengji":"88.00","manfenfenshu":"100分"},{"kechengdaima":"SE111 ","kechengmingcheng":"计算机系统基础（2） ","xuefen":"4.0","chengji":"91.00","manfenfenshu":"100分"},{"kechengdaima":"SE226 ","kechengmingcheng":"可计算理论 ","xuefen":"2.0","chengji":"87.00","manfenfenshu":"100分"},{"kechengdaima":"SO923 ","kechengmingcheng":"新闻媒介与社会 ","xuefen":"2.0","chengji":"88.00","manfenfenshu":"100分"},{"kechengdaima":"TH009 ","kechengmingcheng":"形势与政策 ","xuefen":"1.0","chengji":"A","manfenfenshu":"100分"},{"kechengdaima":"TH012 ","kechengmingcheng":"毛泽东思想和中国特色社会主义理论体系概论 ","xuefen":"6.0","chengji":"79.00","manfenfenshu":"100分"}]');

//根据课程代码查课程信息:
//http://electsys.sjtu.edu.cn/edu/pyjh/kcxx.aspx?kcdm=EN027&nj=2015&xn=9&xq=70862045
//nj是必填的 哪一年的 否则获得的课程简介等都是空的
//试了一下好像xn xq 这几个字段是必填 但是 没有实际作用
//成绩页面的模板
xzc.templates.chengji='\
<div class="row">\
	<form class="form-horizontal">\
		<div class="form-group">\
			<label class="control-label col-xs-1">学年</label>\
			<div class="col-xs-2">\
				<select class="form-control" id="ddlXN">\
					<option value="2014-2015">2014-2015</option>\
					<option value="2013-2014">2013-2014</option>\
					<option value="2012-2013">2012-2013</option>\
					<option value="2011-2012">2011-2012</option>\
				</select>\
			</div>\
			<label class="control-label col-xs-1">学期</label>\
			<div class="col-xs-2">\
				<select class="form-control" id="ddlXQ">\
					<option value="1">1</option>\
					<option value="2">2</option>\
					<option value="3">3</option>\
				</select>\
			</div>\
			<div class="col-xs-1"><button id="query" type="button" class="btn btn-info">查询</button></div>\
		</div>\
	</form>\
</div>\
<div id="content_chengji"></div>\
<div id="content-jidian"></div>\
';
//显示成绩表格模板
/*
<!--长度太长就显示...-->\
		<div class="col-xs-3" style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"><span>{{:kechengmingcheng}}</span></div>\
*/
xzc.templates.chengji2='\
	<table id="table-chengji" class="table table-striped table-bordered table-hover table-condensed">\
	<tr>\
		<th><input type="checkbox"/></th>\
		<th>课程代码</th>\
		<th>课程名称</th>\
		<th>课程学分</th>\
		<th>课程成绩</th>\
	</tr>\
	{{for data}}\
	<tr>\
		<td><input type="checkbox"/></td>\
		<td>{{:kechengdaima}}</td>\
		<td>{{:kechengmingcheng}}</td>\
		<td>{{:xuefen}}</td>\
		<td>{{:chengji}}</td>\
	</tr>\
	{{/for}}\
	</table>\
';

function load_chengji(){
	var $content=$('#content').html($.templates(xzc.templates.chengji).render());
	$content.find('#query').click(load_chengji_query_click);
}

function _get_jidian(cj){
	//非数值
	if(isNaN(cj)){
		switch(cj.toLowerCase()){
			case "a+":return 4.3;
			case "a":return 4.0;
			case "a-":return 3.7;
			case "b+":return 3.3;
			case "b":return 3.0;
			case 'b-':return 2.7;
			case 'c+':return 2.3;
			case "c":return 2.0;
			case 'c-':return 1.7;
			case 'd':return 1.0;
			default: return -1;
		}
	}else{
		if(cj>=95)
			return 4.3;
		if(cj>=90)
			return 4.0;
		if(cj>=85)
			return 3.7;
		if(cj>=80)
			return 3.3;
		if(cj>=75)
			return 3.0;
		if(cj>=70)
			return 2.7;
		if(cj>=67)
			return 2.3;
		if(cj>=65)
			return 2.0;
		if(cj>=62)
			return 1.7;
		if(cj>=60)
			return 1.0;
		return 1;
	}
}
function calc_jidian(){
	var sum=0;
	var xuefen=0;
	var msg="";
	$('#table-chengji tr:has(:checked)').each(function(){
		var xf=Number($(this).find('td:eq(3)').text());
		var cj_txt=$(this).find('td:eq(4)').text();
		var cj=Number(cj_txt);
		var jd=_get_jidian(isNaN(cj)?cj_txt:cj);
		if(jd==-1){
			msg+=cj_txt+" ";
		}else{
			sum+=xf*jd;
			xuefen+=xf;
		}
	});
	var show=""+sum/xuefen;
	if(msg!="")
		show+="<br/>这些无法知道对应的分数:"+msg;
	$('#content-jidian').html(show);
}

//这里用到的是已经格式化的数据
function load_chengji_with_data(data){
	var $cc=$('#content_chengji').html($.templates(xzc.templates.chengji2).render({data:data}));
	var first=$cc.find('#table-chengji :checkbox:first');
	var other=$cc.find('#table-chengji :checkbox:not(:first)');
	first.change(function(){
		other.prop('checked',first.is(':checked'));
	});
	other.change(function(){
		first.prop('checked',_.every(other,function(item){
			return $(item).is(':checked');
		}));
		calc_jidian();
	});
}
/*
	最终的结果是一个数组 每一项是,每一项都是 string 以后再考虑要不要转成数值吧
	{
		kechengdaima:'EN027',
		kechengmingcheng:'体育(3)',
		xuefen:'1.0',
		chengji:'90.0',
		manfenfenshu:'100分'
	}
	这里接受的data实际上是html页面
*/
function format_chengji(data){
	var ret=[];
	$(data).find('#dgScore tr:gt(0)').each(function(){
		var tds=$(this).find('td');
		var item={
			kechengdaima		:	tds.eq(0).text(),
			kechengmingcheng	:	tds.eq(1).text(),
			xuefen				:	tds.eq(2).text(),
			chengji				:	tds.eq(3).text(),
			manfenfenshu		:	tds.eq(5).text(),
		};
		ret.push(item);
	});
	return ret;
}

function load_chengji_query_click(){
	var url="http://electsys.sjtu.edu.cn/edu/StudentScore/B_StudentScoreQuery.aspx";
	var d=$('<div>').load(url,function(){
		var form1=d.find('#Form1');
		form1.find('#btnSearch').attr('type','input');
		
		var xq=$('#ddlXQ').val();
		var xn=$('#ddlXN').val();
		//拼凑出cache_key
		var cache_key=xn+"-"+xq;
		//找一下是否重复
		if(xzc.cache.chengji[cache_key]){
			load_chengji_with_data(xzc.cache.chengji[cache_key]);
			return;
		}
		form1.find('#ddlXQ').val(xq);
		form1.find('#ddlXN').val(xn);

		var data=form1.serialize();
		form1.find('#btnSearch').attr('type','submit');
		$.ajax({
			url:url,
			data:data,
			type:"post",
			dataType:"html",
			success:function(data){
				//请勿频繁刷新本页面
				if(data.indexOf("请勿频繁刷新本页面")!=-1){
					alert("服务器忙,不让你查询,过会儿吧...");
				}else{
					data=format_chengji(data);
					xzc.cache.chengji[cache_key]=data;
					load_chengji_with_data(data);
				}
			}
		});
		/*d.load('url',data,function(){
			document.write(d.html());
		});*/

		//form1.find('#ddlXN').val($('#ddlXN').val());
		//form1.find('#ddlXQ').val($('#ddlXQ').val());
		//var data={};
		//_(form1.serializeArray()).each(function(item){
		//	data[item.name]=item.value;
		//});
		//主动将btnSearch加进去
		//data.btnSearch=form1.find('#btnSearch').val();
		//document.write(form1.serialize());
	//	alert(form1.html());
		//alert(form1.serializeArray());
	});
}