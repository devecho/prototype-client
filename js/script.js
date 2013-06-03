var app = angular.module('app', ['ui.bootstrap', 'ui.state']);

app.config(function($stateProvider, $routeProvider) {
	$stateProvider
    .state('settings', {
        url: '/settings',
        views: {
            'main': {
                templateUrl: 'tpl/settings/settings.html'
            }
        }
    })
    .state('settings.contacts', {
        url: '/contacts',
        views: {
            'area': {
                templateUrl: 'tpl/settings/contact-list.html'
            }
        }
    })
    .state('rooms', {
        url: '/rooms',
        views: {
            'main': {
                templateUrl: 'tpl/rooms/list.html'
            },
            'sidebar': {
            	templateUrl: 'tpl/users/list.html'
            }
        }
    });
});

function UserListCtrl($scope) {
	$scope.users = [{name: 'Daniel Manzke'},
	                {name: 'Leo Selig'},
	                {name: 'Max Mustermann'},
	                {name: 'Bethina Beispiel'}];
}

angular.module('app').directive('ngRoute', [function() {
	var getRoute = function($el) {
		var startRoute = $el.attr('ng-route');
		if(startRoute.charAt(0) === '/') {
			return startRoute;
		}
		var parts = [];
		var $curEl = $el;
		while($curEl.length > 0) {
			parts.unshift($curEl.attr('ng-route'));
			$curEl = $curEl.parent().closest('*[ng-route]');
		}
		return '#/' + parts.join('/');
	}
	
	var directiveDef = {
			link: function(scope, $el, iAttrs, controller) {
				var route = getRoute($el);
				scope['_route_' + route] = false;
				
			}
	};
	return directiveDef;
}]);

angular.module('routing', function($timeout, $locationProvider) {
	  /*$routeProvider
	  .when('rooms/', {
		  controller: RoomListCtrl
	  })
	  .when('rooms/:id',  {
		templateUrl: 'book.html',
		controller: RoomListCtr,
		resolve: {
		  // I will cause a 1 second delay
		  delay: function($q, $timeout) {
		    var delay = $q.defer();
		    $timeout(delay.resolve, 1000);
		    return delay.promise;
		  }
		}
	  })
	  .otherwise(function() {
		  alert('rooms/');
	  });*/
	});

function MainCtrl() {
	
}

function RoomListCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [{
	  title: 'Public Rooms',
	  rooms: []
  },
  {
	  title: 'Private Rooms',
	  rooms: []
  }];
  
  for(var i = 0; i < $scope.groups.length; i++) {
	for(var j = 0; j < 10; j++) {
		var maxUsers = Math.round(Math.random() * 95) + 5;
		var curUsers = Math.round(Math.random() * maxUsers);
		$scope.groups[i].rooms.push({
			id: j,
			title: 'Room ' + (j + 1),
			curUsers: curUsers,
			maxUsers: maxUsers
		});
	}
  }

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}