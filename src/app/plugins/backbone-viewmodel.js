define([ 'lib/backbone', 'lib/underscore' ], function (Backbone, _) {
	Backbone.ViewModel = function (options) {
		this.model = options.model;
		this._previousAttributes = {};
		this.delegateEvents();
	};

	_.extend(Backbone.ViewModel.prototype, Backbone.Events, {
		model: null,

		attributes: null,

		_previousAttributes: null,

		delegateEvents: function () {
			var self = this;
			this.listenTo(this.model, 'change', function () {
				self.update();
			});
		},

		update: function () {
			var triggers = [];
			for (var key in this.attributes) {
				if (this.get(key) !== this._previousAttributes[i]) {
					this._previousAttributes[i] = _.result(this.attributes, key);
					triggers.push('change:' + i);
				}
			}
			if (triggers.length > 0) {
				for (var i = 0; i < triggers.length; i++) {
					this.trigger(triggers[i]);
				}
				this.trigger('change');
			}
		},

		get: function (key) {
			return _.result(this.attributes, key);
		}
	});

	Backbone.ViewModel.extend = Backbone.Model.extend;

	_.extend(Backbone.View.prototype, {
		constructor: function (options) {
			this.viewModel = options.viewModel || null;
			Backbone.View.apply(this, arguments);
		}
	});
});