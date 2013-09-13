/**
 * @module views/def/Site
 * @requires backbone
 * @requires lib/handlebars
 */
define([
	'backbone',
    'lib/handlebars',
    'txt!tpl/dashboard/main.html'
], function(Backbone, Handlebars, mainTpl) {
	mainTpl = Handlebars.compile(mainTpl);

	/**
	 * @namespace views.dashboard
	 * @class Dashboard
	 * @constructor
	 * @extends Backbone.View
	 */
	var Dashboard = Backbone.View.extend({
		className : 'v-dashboard',

		/**
		 * @method render
		 * @chainable
		 * @public
		 */
		render: function() {
			this.$el.html(mainTpl());
		}
	});

	return Dashboard;
});