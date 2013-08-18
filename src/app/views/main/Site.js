/**
 * @module views/main/Site
 * @requires backbone
 * @requires lib/handlebars
 */
define([
	'backbone',
	'lib/handlebars',
	'txt!tpl/main/site.html'
], function(Backbone, Handlebars, mainTpl) {
	mainTpl = Handlebars.compile(mainTpl);

	/**
	 * @namespace views.def
	 * @class Site
	 * @constructor
	 * @extends Backbone.View
	 */
	var Site = Backbone.View.extend({
		className : 'v-site',

		/**
		 * @method render
		 * @chainable
		 * @public
		 */
		render : function() {
			this.$el.html(mainTpl());
			Backbone.View.prototype.render.apply(this, arguments);
			return this;
		},

		/**
		 * @method dashboard
		 * @chainable
		 * @public
		 */
		dashboard: function() {
			this.$el.find('.tab-dashboard > a').tab('show');
			var self = this;
			requirejs(['views/dashboard/Dashboard'], function(Dashboard) {
				var dashboard = self.subView('#dashboard')[0];
				if(!dashboard) {
					dashboard = new Dashboard();
					self.subView('#dashboard', dashboard, true);
				}
				dashboard.render();
			});
			return this;
		},

		/**
		 * @method settings
		 * @chainable
		 * @public
		 */
		settings: function() {
			this.$el.find('.tab-settings > a').tab('show');
			var self = this;
			requirejs(['views/settings/Settings'], function(Settings) {
				var settings = self.subView('#settings')[0];
				if(!settings) {
					settings = new Settings();
					self.subView('#settings', settings, true);
				}
				settings.render();
			});
		}
	});

	return Site;
});
