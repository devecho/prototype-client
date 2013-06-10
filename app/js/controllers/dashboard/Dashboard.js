define([], function() {

	var DashboardCtrl = function($scope) {
		$scope.widgets = [ {
			text : 'Widget #1',
			row : 1,
			col : 1,
			sizex : 1,
			sizey : 1,
			templateURL : 'partials/dashboard/widget-add.html'
		}, {
			text : 'Widget #2',
			row : 2,
			col : 1,
			sizex : 1,
			sizey : 1,
			templateURL : 'partials/dashboard/widget-add.html'
		}, {
			text : 'Widget #3',
			row : 1,
			col : 2,
			sizex : 1,
			sizey : 1,
			templateURL : 'partials/dashboard/widget-add.html'
		}, {
			text : 'Widget #4',
			row : 2,
			col : 2,
			sizex : 1,
			sizey : 1,
			templateURL : 'partials/dashboard/widget-add.html'
		} ];
	};

	return DashboardCtrl;
});