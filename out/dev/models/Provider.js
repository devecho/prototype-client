/**
 * @module models/Provider
 * @requires lib/backbone
 */
define([
	'backbone'
], function(Backbone) {
	"use strict";

	/**
	 * @namespace models
	 * @class Provider
	 * @constructor
	 * @extends Backbone.Model
	 */
	var Model = Backbone.Model.extend({

		/**
		 * @property urlRoot
		 * @type {string}
		 * @protected
		 */
		urlRoot: 'providers/:id',

		/**
		 * @property attributes.type
		 * @type {string}
		 * @default 'provider'
		 * @readonly
		 * @protected
		 */
		/**
		 * @property attributes.name
		 * @type {string}
		 * @default ''
		 * @protected
		 */
		/**
		 * @property attributes.icon
		 * @type {string}
		 * @default ''
		 * @readonly
		 * @protected
		 */

		defaults: {
			type: 'provider',
			name: '',
			icon: ''
		},

		readOnly: {
			icon: true
		}
	});

	return Model;
});