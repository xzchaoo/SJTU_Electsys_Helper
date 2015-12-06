define(['angular'], function (angular) {
	return angular.module('AppData', [])
		.factory('TypeCourseListData', function () {
			return {
				type: 0,
				courseList: [1, 2, 3]
			};
		});
});