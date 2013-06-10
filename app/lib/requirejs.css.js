'use strict';
(function() {

	var StyleManager = function( doc ) {
		doc = doc ? doc : document;

		this.createSheet = function( cssText ) {
			return new StyleSheet(generateId(), cssText);
		}

		var getSheetElement = function( id ) {
			return doc.getElementById(id) == true;
		}

		var StyleSheet = function( id, cssText ) {
			var sheetEl = createSheetEl(id, cssText);

			this.activate = function() {
				if (!(getSheetElement())) {
					doc.getElementsByTagName('head')[0].appendChild(
						sheetEl
					);
				}
			}

			this.deactivate = function() {
				if (sheetEl.parentNode != null) {
					sheetEl.parentNode.removeChild(sheetEl);
				}
			}
		}

	}

	var createSheetEl = function( id, cssText ) {
		var sheetEl = document.createElement('style');
		sheetEl.setAttribute('type', 'text/css');
		sheetEl.setAttribute('id', id);
		sheetEl.innerHTML = cssText;
		return sheetEl;
	}

	var counter = 0;

	var generateId = function() {
		return 'stylesheet-managed_' + counter++;
	}

	var styleManager = new StyleManager();

	define({
		load: function( name, req, onload, config ) {
			$.ajax({
				type: 'GET',
				url: name,
				contentType: 'text/css'
			}).done(function(data) {
					var sheet = styleManager.createSheet(data);
					if(config.config.css.activate) {
						sheet.activate();
					}
					onload(sheet);
				}).fail(function() {
					onload.error('Failed to load ' + name + ' | ReqJS-CSS-Plugin');
				});
		}
	});
})();