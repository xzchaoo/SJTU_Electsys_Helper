//页面抓数据统一用这个
function getParams(d,other,xyid){
    var params={
        __EVENTARGUMENT:'',//d.find('#__EVENTARGUMENT').val(),
        __EVENTTARGET:'gridGModule$ctl'+xyid+'$radioButton',//102是人文 103社会科学 104自然
        __EVENTVALIDATION:d.find('#__EVENTVALIDATION').val(),
        __LASTFOCUS:d.find('#__LASTFOCUS').val(),
        __VIEWSTATE:d.find('#__VIEWSTATE').val(),
        __VIEWSTATEGENERATOR:d.find('#__VIEWSTATEGENERATOR').val(),
    };
    params['gridGModule$ctl'+xyid+'$radioButton']='radioButton';
    return $.extend(params,other);
}

/*
    列出类型为type的通选课数据到$table里
*/
function doLoadtest1(type,$table){
    var tsk=tsk_list[type];
    var $caption=$('<caption>').text(tsk.name).appendTo($table);
    return $.w(function(delay,def){
        return d_courses(type).then(function($d){
            for(var i in tsk.courses){
                def=def.then(delay(2000,$d,tsk.courses[i]));
            }    
            return def.promise();
        });
    },function(def/*not used*/,$d,cid){
        var cname=cid_to_name[cid];
        var $tr=$('<tr>').appendTo($table);
        var td=$('<td>').appendTo($tr);
        return d_arrange($d,type,cid).then(function($d){
            var sectionList=get_arrange_list($d,{
                xyid:0,
                cid:cid,
                cname:cname
            });
            var text=_.reduce(sectionList,function(text,s){
                return text+$.templates(section_json_template).render(s);
            },"");
            td.text(text);
        });
    }).then(function(){
        $caption.text('"'+tsk.name+'":[');
        $('<td>').text('],').appendTo($('<tr>').appendTo($table));
    });
}
/*
    以json方式列出来
*/
function list_tongshi_as_json(){
    var $table=$('<table class="table table-striped">').appendTo($('#content'));
    doLoadtest1('02',$table);
}

/*
    $d某个学院的d
    获取它的课程列表
*/
function get_course_ids($d,xyid){
    var flag=is_tsk(xyid);
    var ret=[];
    //通选课和任选课布局有点不一样 因此要个xyid
    $d.find(flag?'#gridMain':'#OutSpeltyEP1_gridMain').find('tr:gt(0)').each(function(){
        ret.push($(this).find('input').val());
    });
    return ret;
}
function is_tsk(xyid){
    return xyid=='02'||xyid=='03'||xyid=='04';
}

/*
    列出所有学院和他们的课程
*/
function list_all_xy_and_its_courses_json(){
    var ret={};
    return $.w(function(delay,def){//for每个xy
        for(var i in xy_list){
            def=def.then(delay(100,xy_list[i].id));
        }
        return def.promise();
    },function(def,xyid){//列出课程id
        return d_courses(xyid).then(function($d){
            ret[xyid]=get_course_ids($d);
        });
    }).then(function(){
        document.write(JSON.stringify(ret));
    });
}
/*
    以json方式列出所有
*/
function list_all_as_json(){
    var data=[];
    return $.w(function(delay,def){
        //for每个学院    
        for(var ii in xyid_list){
            var xyid=xyid_list[ii];
            def=def.then(delay(2000,xyid));
        }
        return def.promise();
    },function(def,xyid){
        //for每个课程
        return $.w(function(delay,def){
            return d_courses(xyid).then(function($d){//$d是课程列表的d
                var cids=get_course_ids($d,xyid);//这里获得了这个xy的所有课程id
                for(var ii in cids){
                    var cid=cids[ii];
                    def=def.then(delay(2000,$d,xyid,cid));
                }
                return def.promise();
            });
        },function(def,$d,xyid,cid){
            return d_arrange($d,xyid,cid).then(function($d){
                //for每个开课
                var sectionList=get_arrange_list($d,{
                    xyid:xyid,
                    cid:cid,
                    cname:cid_to_name[cid],
                });
                for(var i in sectionList)
                    data.push(sectionList[i]);
                def.resolve(sectionList);
                return def.promise();
            }).then(function(sl){
                document.write(JSON.stringify(sl));
            });
        });
    }).then(function(){
        document.write('<br/><br/><br/><br/><br/><br/>')
        document.write(JSON.stringify(data));
    });
}


/*根据bsid获得课程对象 可以直接做个映射代替?*/
function get_section(bsid){
    for(var xyid in xy_course_map){
        var ss=xy_course_map[xyid];
        for(var i in ss)
            if(ss[i].bsid==bsid)
                return ss[i];
    }    
}

/*
    根据xyid,cid返回viewLessonArrange.aspx页面的d
    参数d必须是前一个页面,也就是课程列表的d
    获得课程安排
*/
function d_arrange($d,xyid,cid){
    var def=$.def();
    var url=get_url_by_xyid(xyid);
    var params=getParams($d,{
        lessonArrange:'课程安排',
        OutSpeltyEP1$dpNj:2014,
        OutSpeltyEP1$dpYx:xyid,
        OutSpeltyEP1$lessonArrange:'课程安排',
        myradiogroup:cid,
    },xyid);
    $('<div>').load(url,params,function(){
        def.resolve($(this));
    });
    return def.promise();
}
/*
    获得http://electsys.sjtu.edu.cn/edu/lesson/viewLessonArrange.aspx这个页面的数据
    d是这个页面的jQuery对象
    attach是最后附加到每个obj上的对象 具体看代码
*/
function get_arrange_list($d,attach){
    var ret=[];
    $d.find('#LessonTime1_gridMain tr:gt(0)').each(function(){
        var tds=$(this).find('td');
        var obj={
            bsid:tds.find('input').first().val(),
            js:_.str.trim(tds.eq(1).text()),
            zc:_.str.trim(tds.eq(2).text()),
            xs:_.str.trim(tds.eq(4).text()),
            jhrs:_.str.trim(tds.eq(5).text()),
            sdrs:_.str.trim(tds.eq(6).text()),
            zmp:_.str.trim(tds.eq(9).text()),
            bz:_.str.trim(tds.eq(10).text()),
        };
        $.extend(obj,attach);
        ret.push(obj);
    });
    return ret;
}

/*
    做最终的选课提交
    $d一定是开课情况的d
*/
function do_last_xuanke($d,s){
    var def=$.def();
    var params=getParams($d,{
        myradiogroup:s.bsid,
        LessonTime1$btnChoose:'选定此教师'
    });
    $('<div>').load(xuanke_submit_url,params,function(){
        def.resolve($(this),arguments[1]=='success');
    });
    return def.promise();
}

/*
    根据xyid获得对应的选课页面url
*/
function get_url_by_xyid(xyid){
    if(xyid=="02"||xyid=="03"||xyid=="04"){
        return tsk_url;
    }else{
        return rxk_url;
    }
}

/*
    获得某个xyid(学院)的开课列表
*/
function d_courses(xyid){
    var url=get_url_by_xyid(xyid);
    var def=$.def();
    $('<div>').load(url,function(){
        var params=getParams($(this),{
            OutSpeltyEP1$btnQuery:'查 询',
            OutSpeltyEP1$dpNj:2014,
            OutSpeltyEP1$dpYx:xyid,
        },xyid);
        /*$.ajax({
            url:url,
            type:'POST',
            data:params,
            error:function(){
                alert('error');
            }
        });*/
        $('<div>').load(url,params,function(){
            def.resolve($(this));
        })
    });
    return def.promise();
}



function xuanke_s(s){
    var url=get_url_by_xyid(s.xyid);
    return $.when(d_courses(s.xyid))//第一步获取选课页面
        .then(function($d){//第二步获取选课页面的开课安排
        return d_arrange($d,s.xyid,s.cid);
    }).then(function($d){//第三步进行选课提交
        return do_last_xuanke($d,s);
    });    
}
/*
    对s进行选课
    利用各种方法组织一次选课
*/
function xuanke(bsid,online){
    var s=get_section(bsid);
    if(!s){
        if(online){
            return get_detail2(bsid,true).then(xuanke_s);
        }else
            throw new Error("bsid无效,没有对应的课程:"+bsid);
    }
    return xuanke_s(s);
}

var xuanke_content;
function load_xuanke(){
    $('#content').html('');
    //xuanke_content=$($.templates(xzc.templates.xuanke).render()).appendTo($('#content'));
    var $table=$('<table class="table table-striped">').appendTo($('#content'));
    var $tr;
    var count=0;
    
    //var $select=$('<select>').appendTo($('#content')).change(function(){
        //alert($(this).val());
    //});
    
    var list=_.sortBy(xy_list,function(v){
        return parseInt(v.id);
    });
    //for(var i in list){
     //   var xyid=list[i].id;
     //   var xyname=list[i].name;
    //    $('<option>').text(xyname).val(xyid).appendTo($select);
    //}
    var xy_tables={};
    for(var i in list){
        var xyid=list[i].id;
		if(xyid!="04"&&xyid!="02"&&xyid!="03")
			continue;
        var xyname=list[i].name;
        if(count%8==0){
            $tr=$('<tr>').appendTo($table);
        }
        ++count;
        var td=$('<td>').appendTo($tr);
        var label=$('<label>').css({width:'100%',height:'100%'}).appendTo(td);
        $('<input type="checkbox">').data('xyid',xyid).appendTo(label).change(function(){
            var checked=$(this).is(':checked');
            var xyid=$(this).data('xyid');
            var $table=xy_tables[xyid];
            if(!$table){
                $table=xy_tables[xyid]=$('<table class="table table-striped">');
                $('<caption>').text(xy_map[xyid]).appendTo($table);
                list_xy_state(xyid,$table);
            }
            if(checked){
                $table.appendTo($('#content'));
            }else{
                $table.remove();
				xy_tables[xyid]=null;
            }
        });
        $('<span>').text(xyname).appendTo(label);
    }
    //get_kcxx('PU108').then(function(r){
    //    document.write(_.pairs(r));
    //});
    //get_detail2('369011').then(function(r){
    //    document.write(_.pairs(r));
    //});
    //xuanke('368178',true).then(function($d,success){
     //   alert(success?'success':'fail...');
    //});
    //list_all_xy_state();
    /*xuanke('368379').then(function(){
        return xuanke('367978');
    }).then(function(){
        return xuanke('368196');
    });*/

    //list_all_as_json();
    //list_tongshi_as_json();
}


function list_xy_state_insert(xyid){
    var $table=$('<table class="table table-striped">').appendTo(xuanke_content);
    var xyname=xy_map[xyid]
    $('<caption>').text(xyname).appendTo($table);
    list_xy_state(xyid,$table);
}
/*
    列出一个学院里的所有课程的状态到$table里
*/
function list_xy_state(xyid,$table){
    return $.w(function(delay,def){
        var cs=xy_course_map[xyid];
        for(var ii in cs){
            def=def.then(delay(10,cs[ii]));
        }
        return def.promise();
    },function(def,c){
        var $tr=$('<tr>').hide().appendTo($table);
        $('<a>').attr('href',view_detail2_url+c.bsid).attr('target','blank').text(c.bsid).appendTo($('<td>').css('width','50px').appendTo($tr));
        $('<a>').attr('href',view_course_url+c.cid).attr('target','blank').text(c.cname).appendTo($('<td>').css('width','150px').appendTo($tr));
		//$('<td>').css('width','150px').text(c.cname).appendTo($tr);
        /*$('<button>').text('一键选课').click(function(){
            xuanke(c.bsid).then(function($d,success){
                alert(success);
            });
        }).appendTo(($('<td>').css('width','100px').appendTo($tr)));*/
        $('<td>').html(c.js+'<br/>'+c.zc).appendTo($tr).css('width','100px');
        var rs=$('<td>').text('-').appendTo($tr).css('width','100px');
        $('<td>').text(c.zmp).appendTo($tr).css('width','200px');
        $('<td>').text(c.bz).appendTo($tr);

        get_detail2(c.bsid).then(function(r){
            var cur=parseInt(r.cur);
            var jhrs=parseInt(r.jhrs);
            //只显示没有满人的
			if(cur<jhrs){
                rs.text(r.cur+'--'+r.jhrs);
                $tr.show();
            }else{
                $tr.remove();
            }
            def.resolve();
        });

        return def.promise();
    });
}

//可以获得xyid cid cname cyname xs xf
function get_kcxx(cid){
    var def=$.def();
    $('<div>').load(view_course_url+cid,function(){
        var trs=$(this).find('table:eq(2) tr');
        var xyname=_.str.trim(trs.eq(2).find('td:eq(1)').text());
        var ret={
            xyid:xy_map[xyname],
            cid:_.str.trim(trs.eq(0).find('td:eq(1)').text()),
            cname:_.str.trim(trs.eq(1).find('td:eq(1)').text()),
            xyname:xyname,
            xf:_.str.trim(trs.eq(3).find('td:eq(1)').text()),
            xs:_.str.trim(trs.eq(4).find('td:eq(1)').text()),
        };
        def.resolve(ret);
    });
    return def.promise();
}
/*
	根据bsid获得在detail2里的数据
    一个标准的section形如:
    {"xyid":"09600","cid":"PI030","cname":"认知科学哲学","bsid":"368080","js":"王球","zc":"讲师(高校)","xs":"32","jhrs":"60","sdrs":"10","zmp":"1-11 二(11-13)","bz":""}
    通过这个函数只能获得xyid cid cname bsid js zc jhrs sdrs bz
    额外的有cur xf
    缺少xs zmp

    使用more=true可以加载更多
*/
function get_detail2(bsid,more){
    var def=$.def();
    var d=$('<div>').load(view_detail2_url+bsid+'&randomNumber='+Math.random(),function(){
        var tds=d.find('#LessonArrangeDetail1_dataListKc table td');
        var trs=d.find('#TeacherInfo1_dataListT table tr');
        var ret={
            cid:_.str.trim(tds.eq(0).text().split('：')[1]),
            cname:_.str.trim(tds.eq(1).text().split('：')[1]),
            xf:_.str.trim(tds.eq(2).text().split('：')[1]),
            jhrs:_.str.trim(tds.eq(12).text().split('：')[1]),
            cur:_.str.trim(tds.eq(13).text().split('：')[1]),
            sdrs:_.str.trim(tds.eq(14).text().split('：')[1]),
            bz:_.str.trim(tds.eq(15).text().split('：')[1]),
            js:_.str.trim(trs.eq(1).find('td:eq(1)').text()),
            zc:_.str.trim(trs.eq(6).find('td:eq(1)').text()),
        };
        if(more){
            get_kcxx(ret.cid).then(function(r){
                $.extend(ret,r);
                def.resolve(ret);
            });
        }else{
            def.resolve(ret);
        }
    });
    return def.promise();
}

/*
    利用静态数据列出所有院系的选课情况
*/
function list_all_xy_state(){
    return $.w(function(delay,def){
        var count=0;
        for(var xyid in xy_course_map){
           def=def.then(delay(0,xyid));
        }
        //因为数据太多这里只列出 3类 通识课
        //def=def.then(delay(100,'02')).then(delay(100,'03')).then(100,'04');
        return def.promise();
    },function(def,xyid){
        var $table=$('<table class="table table-striped">').appendTo($('#content'));
        $('<caption>').text(xy_map[xyid]).appendTo($table);
        return list_xy_state(xyid,$table);
    });
}