define('controllers/RoomListCtrl', [], function() {

	var RoomListCtrl = function($scope, Restangular) {
		var roomResource = Restangular.all('rooms');
		
		$scope.oneAtATime = true;

		$scope.rooms = [];
		
		$scope.refresh = function() {
			roomResource.getList().then(function(rooms) {
				$scope.rooms = rooms;
			})			
		}
		
		$scope.refresh();
	};

	return RoomListCtrl;
});