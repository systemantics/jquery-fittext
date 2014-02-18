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
