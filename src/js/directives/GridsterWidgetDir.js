'use strict';

define(
		'directives/GridsterWidgetDir',
		[ 'angularjs', 'jquery', 'gridster'],
		function(angular, $) {
			var gridsterWidgetDir = function($timeout) {
				return {
					restrict : 'E',
					link : function($scope, $element, $attributes, $controller) {
						$element.addClass('gs_w');
						$timeout(function() {
							$scope.$parent.registerWidget($($element));							
						}, 0);
					}
				};
			};

			return gridsterWidgetDir;
		});