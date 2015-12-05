var jq=document.createElement("script");
jq.src="http://127.0.0.1/js/jquery-1.11.1.js";
jq.onload=function(){
	
	//À©Õ¹jQuery
	$.w=function(deter,single){
		return deter(function(delay){
			var args=Array.prototype.slice.call(arguments,1);
			args.unshift($.def());
			return function(){
				var def=$.def();
				setTimeout(function(){
					var ret=single.apply(null,args);
					$.when(ret).then(def.resolve);
				},delay);
				return def.promise();
			};
		},$.when());
	};
	$.def=$.Deferred;

	document.body=document.createElement('body');
	$('head').html('');
	$('<title>SJTU</title>').appendTo($('head'));

	var requires=[
		"http://127.0.0.1/js/underscore.js",
		"http://127.0.0.1/js/underscore.string.js",
		"http://127.0.0.1/js/jsviews.js",
		"http://127.0.0.1/js/bootstrap.js",
		"http://127.0.0.1/js/jquery.cookie.js",

		"http://127.0.0.1/sjtu/public.js",
		"http://127.0.0.1/sjtu/template.js",
		"http://127.0.0.1/sjtu/chachengji.js",
		"http://127.0.0.1/sjtu/xuankejieguo.js",
		"http://127.0.0.1/sjtu/jidian.js",
		"http://127.0.0.1/sjtu/xuanke_data.js",
		"http://127.0.0.1/sjtu/xuanke.js",
		"http://127.0.0.1/sjtu/init.js"
	];
	$.w(function(delay,def){
		for(var ii in requires){
			def=def.then(delay(0,requires[ii]));
		}
		return def.promise();
	},function(def,url){
		$.getScript(url+'?r='+Math.random(),function(){
			def.resolve();
		});
		return def.promise();
	}).then(function(){
		//tt2mlev2tpe41a55g43u2vfs;
		//expires=Fri, 03 Jun 2016 04:49:44 GMT;
		//path=/; domain=electsys.sjtu.edu.cn;
		//alert($.cookie('ASP.NET_SessionId','tt2mlev2tpe41a55g43u2vfs'));
		//alert($.cookie('ASP.NET_SessionId'));
	});
};

var head=document.getElementsByTagName('head')[0];
head.innerHTML="";
head.appendChild(jq);

	/*
	function orderLoad(index,requires){
		$.getScript(requires[index]+"?r="+Math.random(),function(){
			if(index+1<requires.length)
				orderLoad(index+1,requires);
		});
	}
	orderLoad(0,requires);*/