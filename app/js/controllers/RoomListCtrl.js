define('controllers/RoomListCtrl', [], function() {

	var RoomListCtrl = function($scope) {
		$scope.oneAtATime = true;

		$scope.groups = [ {
			title : 'Public Rooms',
			rooms : []
		}, {
			title : 'Private Rooms',
			rooms : []
		} ];

		for ( var i = 0; i < $scope.groups.length; i++) {
			for ( var j = 0; j < 10; j++) {
				var maxUsers = Math.round(Math.random() * 95) + 5;
				var curUsers = Math.round(Math.random() * maxUsers);
				$scope.groups[i].rooms.push({
					id : j,
					title : 'Room ' + (j + 1),
					curUsers : curUsers,
					maxUsers : maxUsers
				});
			}
		}

		$scope.items = [ 'Item 1', 'Item 2', 'Item 3' ];

		$scope.addItem = function() {
			var newItemNo = $scope.items.length + 1;
			$scope.items.push('Item ' + newItemNo);
		};
	};

	return RoomListCtrl;
});