//所有学院的基本信息
var xy_list = [{
	"id": "11000",
	"name": "化学化工学院"
}, {
	"id": "12000",
	"name": "安泰经济与管理学院"
}, {
	"id": "13000",
	"name": "国际与公共事务学院"
}, {
	"id": "14000",
	"name": "外国语学院"
}, {
	"id": "14200",
	"name": "日语系"
}, {
	"id": "15000",
	"name": "农业与生物学院"
}, {
	"id": "16000",
	"name": "环境科学与工程学院"
}, {
	"id": "17000",
	"name": "药学院"
}, {
	"id": "18000",
	"name": "医学院（并校前）"
}, {
	"id": "19000",
	"name": "凯原法学院"
}, {
	"id": "20000",
	"name": "媒体与设计学院"
}, {
	"id": "21000",
	"name": "微电子学院"
}, {
	"id": "22000",
	"name": "继续教育学院"
}, {
	"id": "23000",
	"name": "马克思主义学院"
}, {
	"id": "24000",
	"name": "致远学院"
}, {
	"id": "25100",
	"name": "体育系"
}, {
	"id": "26000",
	"name": "巴黎高科卓越工程师学院"
}, {
	"id": "29100",
	"name": "塑性成形技术与装备研究院"
}, {
	"id": "30000",
	"name": "医学院(原二医大)"
}, {
	"id": "33000",
	"name": "图书馆"
}, {
	"id": "35000",
	"name": "高等教育研究院"
}, {
	"id": "35100",
	"name": "中美物流研究院"
}, {
	"id": "36000",
	"name": "国际教育学院"
}, {
	"id": "37000",
	"name": "密西根学院"
}, {
	"id": "38000",
	"name": "上海高级金融学院"
}, {
	"id": "39000",
	"name": "创业学院"
}, {
	"id": "40000",
	"name": "上海中医药大学"
}, {
	"id": "40001",
	"name": "华东师范大学"
}, {
	"id": "40100",
	"name": "网络信息中心"
}, {
	"id": "40110",
	"name": "高性能计算中心"
}, {
	"id": "40200",
	"name": "教育技术中心"
}, {
	"id": "40300",
	"name": "档案馆"
}, {
	"id": "40400",
	"name": "分析测试中心"
}, {
	"id": "40500",
	"name": "出版社"
}, {
	"id": "40600",
	"name": "交大附属中学"
}, {
	"id": "41000",
	"name": "工程训练中心"
}, {
	"id": "41300",
	"name": "航空航天学院"
}, {
	"id": "41500",
	"name": "系统生物医学研究院"
}, {
	"id": "41600",
	"name": "Med-X研究院"
}, {
	"id": "41700",
	"name": "人文艺术研究院"
}, {
	"id": "41800",
	"name": "先进产业技术研究院"
}, {
	"id": "41900",
	"name": "自然科学研究院"
}, {
	"id": "42000",
	"name": "海洋水下工程科学研究院"
}, {
	"id": "42100",
	"name": "钱学森图书馆"
}, {
	"id": "42200",
	"name": "教学发展中心"
}, {
	"id": "50100",
	"name": "党委办公室"
}, {
	"id": "50120",
	"name": "党、校史研究室"
}, {
	"id": "50200",
	"name": "党委组织部"
}, {
	"id": "50300",
	"name": "纪委"
}, {
	"id": "50400",
	"name": "党委宣传部"
}, {
	"id": "50500",
	"name": "学指委、团委(含学生处、人武部)"
}, {
	"id": "50501",
	"name": "军事教研室"
}, {
	"id": "50600",
	"name": "工会妇委会"
}, {
	"id": "50700",
	"name": "改革与发展研究室"
}, {
	"id": "50800",
	"name": "党委统战部"
}, {
	"id": "50900",
	"name": "信息安全管理办公室"
}, {
	"id": "60100",
	"name": "校长办公室"
}, {
	"id": "60200",
	"name": "教务处"
}, {
	"id": "60300",
	"name": "研究生院"
}, {
	"id": "60400",
	"name": "科学技术发展研究院"
}, {
	"id": "60500",
	"name": "国际合作与交流处"
}, {
	"id": "60600",
	"name": "人力资源处"
}, {
	"id": "60700",
	"name": "财务处"
}, {
	"id": "60800",
	"name": "保卫处"
}, {
	"id": "60900",
	"name": "规划发展处"
}, {
	"id": "61000",
	"name": "基建处"
}, {
	"id": "61100",
	"name": "资产管理处"
}, {
	"id": "61200",
	"name": "实验室与设备处"
}, {
	"id": "61300",
	"name": "后勤保障处"
}, {
	"id": "61400",
	"name": "211/985办公室"
}, {
	"id": "61410",
	"name": "211/985办公室"
}, {
	"id": "61700",
	"name": "文科建设处"
}, {
	"id": "61800",
	"name": "发展联络处"
}, {
	"id": "62000",
	"name": "信息化办公室"
}, {
	"id": "62100",
	"name": "学科发展与建设处(原)"
}, {
	"id": "62300",
	"name": "地方合作办公室"
}, {
	"id": "62400",
	"name": "招投标办公室"
}, {
	"id": "62500",
	"name": "科研生产质量管理办公室"
}, {
	"id": "69100",
	"name": "其他部门"
}, {
	"id": "70000",
	"name": "医学院"
}, {
	"id": "80000",
	"name": "后勤集团"
}, {
	"id": "80310",
	"name": "校医院"
}, {
	"id": "80510",
	"name": "校医院"
}, {
	"id": "90000",
	"name": "上海交大产业投资管理（集团）有限公司"
}, {
	"id": "99000",
	"name": "人才交流中心"
}, {
	"id": "99003",
	"name": "上海立信会计学院"
}, {
	"id": "99007",
	"name": "华东理工大学"
}, {
	"id": "01000",
	"name": "船舶海洋与建筑工程学院"
}, {
	"id": "02000",
	"name": "机械与动力工程学院"
}, {
	"id": "02500",
	"name": "航空航天工程系"
}, {
	"id": "03000",
	"name": "电子信息与电气工程学院"
}, {
	"id": "03300",
	"name": "计算机科学与工程系"
}, {
	"id": "03600",
	"name": "信息安全工程学院"
}, {
	"id": "03700",
	"name": "软件学院"
}, {
	"id": "04000",
	"name": "电力学院（原）"
}, {
	"id": "05000",
	"name": "材料科学与工程学院"
}, {
	"id": "07000",
	"name": "理学院"
}, {
	"id": "07100",
	"name": "数学系"
}, {
	"id": "07200",
	"name": "物理与天文系"
}, {
	"id": "08000",
	"name": "生命科学技术学院"
}, {
	"id": "08200",
	"name": "生物医学工程学院"
}, {
	"id": "09000",
	"name": "人文学院"
}, {
	"id": "09600",
	"name": "科学史与科学文化研究院"
}];

//每个学院下的课程
var xy_to_courses = {
	"11000": ["CA901", "PO903"],
	"12000": ["AC352", "AM001", "AM007", "AM025", "AM030", "AM043", "AM062", "AM070", "AM108", "AU010", "BU007", "BU104", "BU320", "BU348", "BU372", "BU426", "BU463", "EC010", "EC016", "EC017", "EC100", "FI005", "FI006", "PS002", "PU943", "SO087", "SO900"],
	"13000": ["AM008", "HI071", "PU040", "PU086", "PU905", "PU907", "PU911", "PU933", "PU934", "PU936", "PU937", "PU938", "PU940", "PU941", "PU942", "SO090", "SO937", "SO940", "WA002"],
	"14000": ["EN051", "EN903", "EN908", "FO005", "FO006", "FO008", "HI904", "JA001", "JA016", "LI903", "SA001"],
	"14200": [],
	"15000": ["AM046", "BI022", "BI027", "BI049", "BI913", "CL908", "EV007", "EV040", "FS004", "FS013", "FS014", "GA407", "PI016", "PL004", "PL015", "PL029", "PL030"],
	"16000": ["EV024", "EV033", "EV901", "SO922"],
	"17000": ["BI907", "BI917", "BM901", "BM902", "PM005"],
	"18000": [],
	"19000": ["LA910"],
	"20000": ["AD001", "AD003", "AD006", "AD023", "AD407", "AR007", "AR902", "CL902", "DR001", "DR002", "EC905", "JC027", "JC028", "PH010", "PH020", "PU906", "SO923", "SO934", "SO935", "SO939", "SO941"],
	"21000": [],
	"22000": [],
	"23000": ["CH931", "CL010", "CL029", "CL914", "LO901", "PI901", "PI902", "PU004", "PU981"],
	"24000": [],
	"25100": ["PE005", "PE901", "PE902"],
	"26000": [],
	"29100": [],
	"30000": [],
	"33000": ["AM016", "IN901"],
	"35000": [],
	"35100": [],
	"36000": [],
	"37000": [],
	"38000": [],
	"39000": [],
	"40000": [],
	"40001": [],
	"40100": [],
	"40110": [],
	"40200": [],
	"40300": [],
	"40400": ["PH904"],
	"40500": [],
	"40600": [],
	"41000": ["AU015", "CS352", "EE013", "IO007", "ME031", "ME043", "ME044", "ME045", "ME049", "ME063", "ME070", "ME082", "ME901"],
	"41300": ["ME908"],
	"41500": [],
	"41600": [],
	"41700": ["JC026", "MU034", "SO089"],
	"41800": [],
	"41900": [],
	"42000": [],
	"42100": [],
	"42200": [],
	"50100": [],
	"50120": [],
	"50200": [],
	"50300": [],
	"50400": [],
	"50500": ["PS006", "PS906", "SO004", "SO046", "SO068", "SO078", "SO301", "SO936", "TY001", "TY002", "TY003"],
	"50501": [],
	"50600": [],
	"50700": [],
	"50800": [],
	"50900": [],
	"60100": [],
	"60200": [],
	"60300": [],
	"60400": [],
	"60500": [],
	"60600": [],
	"60700": [],
	"60800": [],
	"60900": [],
	"61000": [],
	"61100": [],
	"61200": [],
	"61300": [],
	"61400": [],
	"61410": [],
	"61700": [],
	"61800": [],
	"62000": [],
	"62100": [],
	"62300": [],
	"62400": [],
	"62500": [],
	"69100": [],
	"70000": ["BM906", "BM909", "PS907", "PU041", "SO032"],
	"80000": [],
	"80310": ["BM016"],
	"80510": ["BM021"],
	"90000": [],
	"99000": [],
	"99003": [],
	"99007": [],
	"02": [],
	"03": [],
	"04": [],
	"01000": ["AM904", "AR901", "AV012", "EC901", "EM024", "NA002", "NA004", "NA005", "OC901"],
	"02000": ["AU004", "AV001", "AV015", "CS013", "CS057", "EV009", "EV039", "EV041", "EV042", "HI068", "ME041", "ME047", "ME074", "ME075", "ME076", "ME079", "ME083", "ME085", "ME086", "ME902", "ME903", "ME904", "MT906", "NU005", "NU006", "NU007", "NU920", "PH907", "PO010", "PO023", "PO026", "PO027", "PO028", "PO202"],
	"02500": [],
	"03000": ["CS902", "EE030", "EI229", "PH063"],
	"03300": [],
	"03600": [],
	"03700": [],
	"04000": [],
	"05000": ["MT008", "MT019", "MT901"],
	"07000": [],
	"07100": ["MA905", "MA909"],
	"07200": ["PH048", "PH049", "PH051", "PH052", "PH409", "PH902", "PH903", "PH906"],
	"08000": ["BI001", "BI041", "BI055", "BI093", "BI903", "BI911", "BI915", "BM011", "BM903"],
	"08200": [],
	"09000": ["CH067", "CH901", "CH903", "CH904", "CH912", "CH926", "CH927", "CL002", "CL011", "CL023", "CL024", "CL906", "CL918", "FT018", "FT023", "HI069", "HI070", "HI900", "HI903", "HI905", "HI910", "HI928", "HU902", "JC903", "LI906", "MU004", "MU024", "MU036", "MU037", "MU139", "MU901", "MU902", "MU903", "PI031", "PI906", "PI919", "SO043", "SO076", "SO077"],
	"09600": ["HI102", "HI902", "MA901", "PI001", "PI005", "PI030", "PI916"],
	"61400": []
};


define(['angular'], function (angular) {
	angular.module('AppServices.SJTUService', [])
		//用于缓存Course信息
		.factory('CourseCache', function ($cacheFactory) {
			return $cacheFactory('CourseCache');
		})
		.factory('CommonDataProvider', function () {
			return {};
		})
		.factory('HttpDataProvider', ['CommonDataProvider', function (parent) {
			return $.extend(parent, {
				//根据院系获得其开课情况
				getKaikeListByXY: function (xyid) {
					//TODO
				}
			});
		}])
		.factory('MockDataProvider', function () {
			return {
				getKaikeListByXY: function (xyid) { //TODO
				}
			};
		})
		.factory('SJTUService', ['$http', '$q', 'CourseCache', 'HttpDataProvider', function ($http, $q, CourseCache, dp) {
			//根据bsid获得开课信息
			function getKaike(bsid) {
				var url = xzc.urls.kaikeinfo + bsid;
				var d = $q.defer();
				$http.get(url).success(function (data) {
					var $dom = $(data);
					var mainTeacher = null;
					var teacherList = [];
					$dom.find('#TeacherInfo1_dataListT table.alltab').each(function () {
						var $table = $(this);
						var teacher = {
							gh: $table.find('tr').eq(0).find('td').eq(1).text().trim(),
							name: $table.find('tr').eq(1).find('td').eq(1).text().trim(),
							sex: $table.find('tr').eq(2).find('td').eq(1).text().trim(),
							xw: $table.find('tr').eq(3).find('td').eq(1).text().trim(),
							mz: $table.find('tr').eq(4).find('td').eq(1).text().trim(),
							byxx: $table.find('tr').eq(5).find('td').eq(1).text().trim(),
							zc: $table.find('tr').eq(0).find('td').eq(1).text().trim()
						};
						if (!mainTeacher) mainTeacher = teacher;
						teacherList.push(teacher);
					});
					var $tds = $dom.find('#LessonArrangeDetail1_dataListKc table tr td');
					if ($tds.size() > 0) {
						var kaike = {
							cid: $tds.eq(0).text().split('：')[1].trim(), //课程代码
							name: $tds.eq(1).text().split('：')[1].trim(), //课程名称
							kh: $tds.eq(2).text().split('：')[1].trim(), //课号
							kcxs: $tds.eq(3).text().split('：')[1].trim(), //课程形式
							xn: $tds.eq(4).text().split('：')[1].trim(), //学年
							xq: $tds.eq(5).text().split('：')[1].trim(), //学期
							jsyt: $tds.eq(6).text().split('：')[1].trim(), //教室用途
							xf: $tds.eq(7).text().split('：')[1].trim(), //学分
							qsz: $tds.eq(8).text().split('：')[1].trim(), //起始周
							jsz: $tds.eq(9).text().split('：')[1].trim(), //结束周
							ksqk: $tds.eq(10).text().split('：')[1].trim(), //考试情况
							dszqk: $tds.eq(11).text().split('：')[1].trim(), //单双周情况
							zdrs: $tds.eq(12).text().split('：')[1].trim(), //最大人数
							yxkrs: $tds.eq(13).text().split('：')[1].trim(), //已选课人数
							zsrs: $tds.eq(14).text().split('：')[1].trim(), //最少人数
							bz: $tds.eq(15).text().split('：')[1].trim(), //备注
							mainTeacher: mainTeacher,
							teacherList: teacherList
						};
						d.resolve(kaike);
					} else {
						d.resolve(null);
					}

				});
				return d.promise;
			}
			return {
				getKaikeListByXY: function (xyid) {
					var list = new Array();
					var promises = [];
					for (var bsid = 366248; bsid <= 366248 + 10; ++bsid) {
						list.push({});
						(function (index) {
							promises.push(getKaike(bsid).then(function (kk) {
								list[index] = kk;
								return kk;
							}));
						})(bsid - 366248);
					}
					return {
						list: list,
						promise: $q.all(promises)
					};
				},
				getKaike: getKaike,
				//获得课程下的
				getCoursesByXY: function (xy) {
					var courses = xy_to_courses[xy];
					var ret = new Array(courses.length);
					for (var i = 0; i < courses.length; ++i) {
						var cid = courses[i];
						var course = CourseCache.get(cid);
						if (course) {
							ret[i] = course;
							continue;
						}
						course = ret[i] = {
							cid: cid,
							url: xzc.urls.courseinfo + cid
						};

						(function (course) {
							$http.get(course.url).success(function (data) {
								var $dom = $(data);
								course.name = $dom.find('#lblMc').text();
								course.xf = $dom.find('#lblXf').text();
								course.xy = $dom.find('#lblYx').text();
								course.xf = $dom.find('#lblXf').text();
								course.xs = $dom.find('#lblXs').text();
								CourseCache.put(course.cid, course);
							});
						})(course);
					}
					return ret;
				},

				//获得院系列表
				getXYList: function () {
					return xy_list;
				},

				//判断是否登陆
				isLogin: function () {
					var d = $q.defer();
					$http.get(xzc.urls.userinfo).success(function (data) {
						d.resolve(data.indexOf('您不能操作该功能') == -1);
					});
					return d.promise;
				},

				//获取用户信息
				getUserinfo: function () {
					var d = $q.defer();
					$http.get(xzc.urls.userinfo).success(function (data) {
						var $dom = $(data);
						if (data.indexOf('您不能操作该功能') != -1)
							d.reject('你还没有登陆'); //未登录
						else {
							var userinfo = {
								xy: $dom.find('#lblYxmc').text(),
								zy: $dom.find('#lblZymc').text(),
								bj: $dom.find('#lblBj').text(),
								xh: $dom.find('#lblXh').text(),
								name: $dom.find('#lblXm').text()
							};
							d.resolve(userinfo);
						}
					});
					return d.promise;
				}
			};
		}])
});