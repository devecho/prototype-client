requirejs.config({
	baseUrl: '',

	shim: {
		'lib/handlebars':  {
			exports: 'Handlebars'
		},
		'lib/backbone':    {
			exports: 'Backbone',
			deps:    ['lib/jquery', 'lib/underscore']
		},
		'lib/jquery':      {
			exports: 'jQuery',
			deps:    []
		},
		'lib/underscore':  {
			exports: '_',
			deps:    []
		},
		'lib/fancyscroll': {
			exports: 'jQuery.fn.jsFancyScroll',
			deps:    ['lib/jquery']
		}
	},

	paths: {
		'backbone': 'plugins/backbone-extension',
		'txt':      'plugins/requirejs.text'
	}
});

define('app', [], function() {
	return new function() {
		var config = {
			paths: {
			}
		};

		return {
			servicePath: function() {

			}
		};
	};
});

requirejs(['backbone', 'routers/Main', 'lib/fancyscroll'], function(Backbone,
                                                                    MainRouter) {
	var mainRouter = new MainRouter();
	Backbone.history.start();
});
