requirejs.config({
	baseUrl : 'js/',
	shim : {
		'angularjs' : {
			// These script dependencies should be loaded before loading
			// backbone.js
			deps : [],
			// Once loaded, use the global 'Backbone' as the
			// module value.
			exports : 'angular'
		},
		'underscore' : {
			exports : '_',
		},
		'jquery' : {
			exports : 'jQuery'
		},
		'bootstrap' : {
			deps : [ 'jquery' ]
		},
		'bootstrap-ui' : {
			deps : [ 'angularjs', 'bootstrap' ]
		},
		'bootstrap-ui-templates' : {
			deps : [ 'bootstrap-ui' ]
		},
		'ngResource' : {
			deps : [ 'angularjs' ]
		},
		'angular-ui' : {
			deps : [ 'angularjs' ]
		},
		'restangular' : {
			exports : 'Restangular',
			deps : [ 'angularjs', 'ngResource', 'underscore' ]
		},
		'gridster' : {
			deps : [ 'jquery' ]
		}
	},
	paths : {
		'angularjs' : '../lib/angular',
		'underscore' : '../lib/underscore',
		'jquery' : '../lib/jquery',
		'bootstrap' : '../lib/bootstrap/js/bootstrap',
		'bootstrap-ui' : '../lib/bootstrap-ui/main',
		'bootstrap-ui-templates' : '../lib/bootstrap-ui/templates',
		'ngResource' : '../lib/ngResource',
		'angular-ui' : '../lib/angular-ui',
		'restangular' : '../lib/restangular',
		'gridster' : '../lib/gridster/gridster',
		'css' : '../lib/requirejs.css'
	},
	config : {
		'css' : {
			activate : true
		}
	}
});

requirejs([ 'controllers/controllers', 'services/services',
		'directives/directives', 'filters/filters', 'resources/resources',
		'angularjs', 'angular-ui', 'bootstrap', 'jquery', 'bootstrap-ui',
		'bootstrap-ui-templates' ],

function(ControllerModule, ServiceModule, DirectiveModule, FilterModule,
		ResourceModule) {

	var appModule = angular.module('app', [ 'ui.bootstrap', 'ui.state',
			ResourceModule.name, ControllerModule.name, ServiceModule.name,
			DirectiveModule.name, FilterModule.name, ]);

	appModule.config(function($stateProvider, $urlRouterProvider, $routeProvider) {
		$stateProvider.state('settings', {
			url : '/settings',
			views : {
				'main' : {
					templateUrl : 'partials/main/layout.html'
				}
			}
		}).state('settings.contacts', {
			url : '/contacts',
			views : {
				'main' : {
					templateUrl : 'partials/main/layout.html'
				},
				'area' : {
					templateUrl : 'partials/settings/contact-list.html'
				}
			}
		}).state('dashboard', {
			controller : function($scope) {
				$scope;
			},
			url : '/dashboard',
			views : {
				'main' : {
					templateUrl : 'partials/main/layout.html'
				}
			}
		}).state('room', {
			controller : function($scope) {
				$scope;
			},
			url : '/room/:id',
			views : {
				'main' : {
					templateUrl : 'partials/main/layout.html'
				}
			}
		});
		$urlRouterProvider.when('', '/dashboard');
		$urlRouterProvider.when('/', '/dashboard');
	}).run(function($rootScope, $location) {
	    $rootScope.location = $location;
	});

	angular.bootstrap(document, [ 'app' ]);
});