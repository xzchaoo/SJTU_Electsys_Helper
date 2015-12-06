define(['angular'], function (angular) {
	return angular.module('AppConfig', [])
		.factory('AppConfigService', function () {
			return window.xzc;
		});
});