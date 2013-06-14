/* Controllers */

var controllers = {
		'MainCtrl': 'MainCtrl',
		'RoomListCtrl': 'RoomListCtrl',
		'UserListCtrl': 'UserListCtrl',
		'DashboardCtrl': 'dashboard/Dashboard',
		'AddWidgetCtrl': 'dashboard/AddWidget',
		'SingleRoomCtrl': 'dashboard/SingleRoom'
}

var controllerDeps = [];

for(var i in controllers) {
	controllerDeps.push('controllers/' + controllers[i]);
}

var otherDeps = ['angularjs'];

define('controllers/controllers', otherDeps.concat(controllerDeps), function(angular) {
	var controllerModule = angular.module('controllers', [], function() {

	});
	
	var index = otherDeps.length;
	for(var ctrlName in controllers) {
		controllerModule.controller(ctrlName, arguments[index]);
		index++;
	}

	return controllerModule;
});