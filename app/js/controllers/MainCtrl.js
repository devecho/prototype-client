define('controllers/MainCtrl', [], function() {
	var MainCtrl = function($scope) {
		$scope.rooms = [{id: 0, title: 'Room 1'}, {id: 1, title: 'Room 2'}]
	};
	return MainCtrl;
});