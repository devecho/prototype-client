/* Controllers */

define('controllers/controllers', [ 'angularjs', 'controllers/MainCtrl', 'controllers/RoomListCtrl', 'controllers/UserListCtrl' ],
		function(angular, MainCtrl, RoomListCtrl, UserListCtrl) {
			var controllerModule = angular.module('controllers', [],
					function() {

					});

			controllerModule.controller('MainCtrl', MainCtrl);
			controllerModule.controller('RoomListCtrl', RoomListCtrl);
			controllerModule.controller('UserListCtrl', UserListCtrl);

			return controllerModule;
		});