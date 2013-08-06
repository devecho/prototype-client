define('controllers/MainCtrl', [], function() {
	var MainCtrl = function($scope, $location) {
		$scope.rooms = [ {
			id : 0,
			title : 'Room 1'
		}, {
			id : 1,
			title : 'Room 2'
		} ];

		$scope.activeTabs = {
			dashboard : false,
			rooms : []
		};

		$scope.$on('$locationChangeSuccess', function(next, current) {
			var hash = current.split('#/')[1];
			$scope.activeTabs.dashboard = (hash === 'dashboard');
			for(var i = 0; i < $scope.rooms.length; i++) {
				$scope.activeTabs.rooms[i] = (hash === ('rooms/' + $scope.rooms[i].id));
			}
		});

		$scope.onTabSelected = function(tab) {
			var route;
			if (typeof tab === 'string') {
				switch (tab) {
				case 'dashboard':
					route = 'dashboard';
					break;
				}
			} else {
				route = 'rooms/' + tab.room.id;
			}
			window.location.hash = '#/' + route;
		};
	};
	return MainCtrl;
});