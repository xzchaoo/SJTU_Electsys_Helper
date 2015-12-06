//用于存放全局变量
window.xzc = {
	author: 'xzchaoo',
	baseUrl: 'http://127.0.0.1/1',
	urls: {
		userinfo: 'http://electsys.sjtu.edu.cn/edu/student/sdtModifyIndividualInfo.aspx',
		courseinfo: 'http://electsys.sjtu.edu.cn/edu/pyjh/kcxx.aspx?nj=2014&kcdm=',
		kaikeinfo: 'http://electsys.sjtu.edu.cn/edu/lesson/viewLessonArrangeDetail2.aspx?bsid='
	}
};
var head = document.getElementsByTagName('head')[0];
head.innerHTML = '';
var s = document.createElement('script');
s.type = 'text/javascript';
s.src = xzc.baseUrl + '/js/require.js';
s['data-main'] = xzc.baseUrl + '/main';
s.onload = onload;
head.appendChild(s);

function onload() {
	requirejs.config({
		//默认情况下到 /1/js目录下去加载资源
		baseUrl: xzc.baseUrl + "/js",
		//如果资源名称是以app开头,比如app/bpp 那么就去加载/1/app/bpp.js
		paths: {
			jquery: xzc.baseUrl + '/node_modules/jquery/dist/jquery.min',
			angular: xzc.baseUrl + '/node_modules/angular/angular.min',
			bootstrap: xzc.baseUrl + '/node_modules/bootstrap/dist/js/bootstrap.min',
			lodash: xzc.baseUrl + '/node_modules/lodash/index'
		},
		shim: {
			angular: {
				deps: ['jquery'],
				exports: 'angular'
			},
			bootstrap: {
				deps: ['jquery']
			}
		}
	});
	require(['jquery', 'angular', 'app', 'bootstrap','lodash'], function ($, angular, app) {
		$('frameset').remove();
		$('noframes').remove();
		if (!$('body')[0]) {
			$('<body></body>').appendTo($('html'));
		}
		$('body').html('');
		//加载css
		$('<link>').attr('rel', 'stylesheet').attr('href', xzc.baseUrl + '/node_modules/bootstrap/dist/css/bootstrap.min.css').appendTo($('head'));
		buildBody();
		angular.bootstrap(document, ['app']);
	});
}

function buildBody() {
	var $body = $('body');
	//$.get(xzc.baseUrl+"/body.html",function(data){
	//		$(data).appendTo($body);
	//require('bootstrap');
	//	});
	$('<xbody/>').appendTo($body);
}