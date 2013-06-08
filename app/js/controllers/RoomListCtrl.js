define('controllers/RoomListCtrl', [], function() {

	var RoomListCtrl = function($scope, Restangular) {
		var roomResource = Restangular.all('rooms');
		
		$scope.oneAtATime = true;

		$scope.groups = [ {
			title : 'Public Rooms',
			rooms : []
		}, {
			title : 'Private Rooms',
			rooms : []
		} ];
		
		$scope.refresh = function() {
			roomResource.getList().then(function(rooms) {
				$scope.groups[0].rooms = rooms;
				$scope.groups[1].rooms = rooms;
			})			
		}
	};

	return RoomListCtrl;
});