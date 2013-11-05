/**
 * @module collections/Providers
 * @requires lib/backbone
 * @requirs models/Provider
 */
define([
	'backbone',
    'models/Provider'
], function(Backbone, Provider) {
	"use strict";

	/**
	 * @namespace collections
	 * @class Providers
	 * @constructor
	 * @extends Backbone.Model
	 */
	var Collection = Backbone.Model.extend({

		/**
		 * @property urlRoot
		 * @type {string}
		 * @protected
		 */
		urlRoot: 'providers/',

		/**
		 * @property model
		 * @typo {Function}
		 * @default models.Provider
		 * @protected
		 */
		model: Provider
	});

	return Collection;
});