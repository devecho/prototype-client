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
		'angular-ui' : {
			deps : [ 'angularjs' ]
		}
	},
	paths : {
		'angularjs' : '../lib/angular',
		'jquery' : '../lib/jquery',
		'bootstrap' : '../lib/bootstrap/js/bootstrap',
		'bootstrap-ui' : '../lib/bootstrap-ui/main',
		'bootstrap-ui-templates' : '../lib/bootstrap-ui/templates',
		'angular-ui' : '../lib/angular-ui'
	}
});

requirejs([ 'controllers/controllers', 'services/services',
		'directives/directives', 'filters/filters', 'angularjs', 'angular-ui',
		'bootstrap', 'jquery', 'bootstrap-ui', 'bootstrap-ui-templates' ],

function(ControllerModule, ServiceModule, DirectiveModule, FilterModule) {

	var appModule = angular.module('app', [ 'ui.bootstrap', 'ui.state',
			ControllerModule.name, ServiceModule.name, DirectiveModule.name,
			FilterModule.name, ]);

	appModule.config(function($stateProvider, $routeProvider) {
		$stateProvider.state('settings', {
			url : '/settings',
			views : {
				'main' : {
					templateUrl : 'partials/settings/settings.html'
				}
			}
		}).state('settings.contacts', {
			url : '/contacts',
			views : {
				'area' : {
					templateUrl : 'partials/settings/contact-list.html'
				}
			}
		}).state('rooms', {
			url : '/rooms',
			views : {
				'main' : {
					templateUrl : 'partials/rooms/list.html'
				},
				'sidebar' : {
					templateUrl : 'partials/users/list.html'
				}
			}
		});
	});

	angular.bootstrap(document, [ 'app' ]);
});