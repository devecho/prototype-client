'use strict';

define(
		[],
		function() {
			var useCSSDir = function() {
				return {
					restrict : 'A',
					link : function($scope, $element, $attributes, $controller) {
						requirejs(['css!' + $attributes['useCss']], function() {});
					}

				};
			}

			return useCSSDir;
		});