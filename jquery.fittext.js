/*
  fitText Plugin for jQuery
  Version: v0.10

  Copyright (C) 2013-2014 by Systemantics GmbH

  Systemantics GmbH
  Bleichstr. 11
  41747 Viersen
  GERMANY

  Web:    www.systemantics.net
  Email:  hello@systemantics.net

  This plugin is distributed under the terms of the
  GNU Lesser General Public license. The license can be obtained
  from http://www.gnu.org/licenses/lgpl.html.
 */

(function ($) {
	$.fn.fitText = function(options) {
		var els = $(this),
			options = $.extend({
				ellipsis : "..."
			}, options || {});

		els.each(function () {
			var el = $(this),
				h = el.height(),
				text = el.data("fittext-text");
			if (text == null) {
				text = el.text();
				el.data("fittext-text", text);
			}
			el.css("height", "auto");
			while (text.length > 0 && el.height() > h) {
				var i = text.lastIndexOf(" ");
				if (i == -1) {
					text = "";
				} else {
					text = text.substr(0, i);
				}
				el
					.empty()
					.text(text)
					.append(options.ellipsis);
			}
		});

		return els;
	};
})(jQuery);
