define('controllers/UserListCtrl', [], function() {
	var UserListCtrl = function($scope) {
		$scope.users = [ {
			name : 'Daniel Manzke'
		}, {
			name : 'Leo Selig'
		}, {
			name : 'Max Mustermann'
		}, {
			name : 'Bethina Beispiel'
		} ];
	}
	
	return UserListCtrl;
});