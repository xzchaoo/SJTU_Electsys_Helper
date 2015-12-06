define(['angular', 'AppConfig', 'AppServices', 'AppData'], function (angular) {
	return angular.module('app', ['AppConfig', 'AppServices', 'AppData'])
		.config(function ($sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist([
				'self',
				'http://127.0.0.1/**'
			]);
		})
		.run(['$rootScope', 'SJTUService', function ($rootScope, sjtu) {
			$rootScope.sjtu = sjtu;
		}])
		.controller('AppController', ['$scope', 'SJTUService', function ($scope, sjtu) {
			$scope.isLogin = function () {
				sjtu.isLogin().then(function (result) {
					alert('result=' + result);
				});
			};
			$scope.getUserinfo = function () {
				sjtu.getUserinfo().then(function (ui) {
					alert(JSON.stringify(ui));
				});
			};
			//列举366248 - > 370028
			$scope.list = function () {
				for (var i = 366248; i <= 370028; ++i) {
					(function (i) {
						sjtu.getKaike(i).then(function (data) {
							document.write(i);
							document.write('&nbsp;');
							document.write(data.xn + '-' + data.xq);
							document.write('&nbsp;');
							document.write(data.yxkrs + '/' + data.zdrs);
							document.write('<br/>')
						});
					})(i);
				}
			};
		}]).directive('xbody', function () {
			return {
				restrict: 'E',
				templateUrl: xzc.baseUrl + '/body.html'
			};
		}).directive('userpanel', function () {
			return {
				restrict: 'E',
				templateUrl: xzc.baseUrl + '/userpanel.html',
				controller: ['$scope', 'SJTUService', function ($scope, sjtu) {
					$scope.isLogin = false;
					$scope.userinfo = {};
					sjtu.getUserinfo().then(function (userinfo) {
						$scope.isLogin = true;
						$scope.userinfo = userinfo;
					});
				}]
			};
		}).directive('typepanel', function () {
			return {
				restrict: 'E',
				templateUrl: xzc.baseUrl + "/typepanel.html",
				controller: ['$scope', 'SJTUService', 'TypeCourseListData', function ($scope, sjtu, data) {
					$scope.selectIndex = 0;
					$scope.xyList = sjtu.getXYList();
					$scope.onTypeSelect = function (index, xy) {
						$scope.selectIndex = index;
						data.type = index;
						var ret = sjtu.getKaikeListByXY(xy.id);
						data.courseList = ret.list;
						ret.promise.then(function (list) {
							data.courseList = _.filter(list, function (v) {
								return v != null
							});
						});
					};
					$scope.onTypeSelect(0, $scope.xyList[0]);
				}]
			}
		}).directive('kaikelistpanel', function () {
			return {
				restrict: 'E',
				templateUrl: xzc.baseUrl + "/kaike-list-panel.html",
				controller: ['$scope', 'SJTUService', 'TypeCourseListData', function ($scope, sjtu, data) {
					$scope.data = data;
				}]
			};
		}).directive('xtest', function () {
			return {
				restrict: 'E',
				scope: {
					msg: '='
				},
				template: '{{msg}},<button ng-click="alert(16);">改变ceshitest</button>',
				controller: function ($scope) {
					$scope.alert = function (msg) {
						$scope.msg = 'msg!';
					};
				}
			};
		});
});