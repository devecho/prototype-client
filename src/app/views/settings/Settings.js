/**
 * @module views/def/Site
 * @requires backbone
 * @requires lib/handlebars
 */
define([
	'backbone',
    'lib/handlebars',
    'txt!tpl/settings/main.html'
], function(Backbone, Handlebars, mainTpl) {
	mainTpl = Handlebars.compile(mainTpl);

	/**
	 * @namespace views.settings
	 * @class Settings
	 * @constructor
	 * @extends Backbone.View
	 */
	var Settings = Backbone.View.extend({
		className : 'v-settings',

		/**
		 * @method render
		 * @chainable
		 * @public
		 */
		render: function() {
			this.$el.html(mainTpl());
		}
	});

	return Settings;
});