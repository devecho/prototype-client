define('resources/resources', [ 'config', 'angularjs', 'restangular' ],
		function(config, angular) {
			var resourceModule = angular.module('resources', [ 'restangular' ],
					function(RestangularProvider) {
						RestangularProvider.setBaseUrl(config.service.baseURL);
						RestangularProvider.setRequestSuffix('/index.json');
					});
			return resourceModule;
		});