'use strict';

/* Directives */

define('directives/directives', [ 'angularjs', 'directives/UseCSSDir', 'directives/GridsterDir',
		'directives/GridsterWidgetDir' ], function(angular, UseCSSDir, GridsterDir,
		GridsterWidgetDir) {
	var directiveModule = angular.module('app.directives', [], function() {

	});

	directiveModule.directive('useCss', UseCSSDir);
	directiveModule.directive('gridster', GridsterDir);
	directiveModule.directive('widget', GridsterWidgetDir);

	return directiveModule;
});