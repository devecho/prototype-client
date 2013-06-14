'use strict';

define(
		'directives/GridsterDir',
		[ 'angularjs', 'jquery', 'gridster'],
		function(angular, $) {
			var gridsterDir = function() {
				return {
					restrict : 'C',
					link : function($scope, $element, $attributes, $controller) {
						var gridster;
						var $ul = $($element.find('ul'));
						//$ul.addClass('gridster');
						var gridster = $ul.gridster().data('gridster');
						
						$scope.registerWidget = function($widgetEl) {
							gridster.register_widget($widgetEl);
						}
					}
				};
			}

			return gridsterDir;
		});