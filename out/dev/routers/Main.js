/**
 * @module routers/Main
 * @requires backbone
 * @requires views/main/Site
 */
define(['backbone', 'views/main/Site'], function(Backbone, SiteView) {

	/**
	 * @namespace routers
	 * @class Main
	 * @constructor
	 * @extends Backbone.Router
	 */
	var MainRouter = Backbone.Router.extend({
		_siteView: null,

		/**
		 * @property routes
		 * @type {Object}
		 * @public
		 */
		routes: {
			'': 'routeDefault',
			'dashboard': 'dashboard',
			'settings': 'settings'
		},

		/**
		 * @method initialize
		 * @chainable
		 * @public
		 */
		initialize: function() {
			this._siteView = new SiteView();
			this._siteView.render().appendTo('body');
			return this;
		},

		/**
		 * @method routeDefault
		 * @chainable
		 * @public
		 */
		routeDefault: function() {
			this.dashboard();
			return this;
		},

		/**
		 * @method dashboard
		 * @chainable
		 * @public
		 */
		dashboard: function() {
			this.before(function() {
				this._siteView.dashboard();
			});
			return this;
		},

		/**
		 * @method settings
		 * @chainable
		 * @public
		 */
		settings: function() {
			this.before(function() {
				this._siteView.settings();
			});
			return this;
		},

		/**
		 * @method before
		 * @chainable
		 * @public
		 */
		before: function(callback) {
			callback.call(this);
		}
	});

	return MainRouter;
});
