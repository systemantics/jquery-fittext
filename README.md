# jQuery fitText – Fit text into any HTML element

## Description

jQuery fitText shortens the `.text()` inside the selected element(s) word-wise until it fits into the height of the element. An configurable ellipsis `…` is added.

Extra cool feature: The ellipsis can also be HTML code, for instance `<a href="full-text.html">read more</a>`.

## Out in the wild

We are using fitText on almost all our production websites, a recent example including the [Pew Center of Arts & Heritage website](http://www.pcah.us/).

## Documentation

Using fitText is easy:

	$(".teaser").fitText();

The only requirement is that the selected elements need to have a height set at the time when fitText is called.

## Recommended HTML structure

As fitText modifies the `.text()`, the selected elements should only have text content. Other child nodes will be removed when fitText is applied.

## Recommended CSS

The selected elements are required to have a height set at the time when fitText is called. fitText will only happen to have some effect if that height is smaller than the height the element would have if set to `height: auto`.

## And it’s responsive, too!

fitText is ready to be used in responsive designs. You can safely apply fitText multiple times on selected elements.

## Troubleshooting with webfonts

If your site uses webfonts, results might be incorrect on some browsers because fitText is applied before the webfonts are applied. In this case, use some Javascript like the Google webfont loader to wait until the webfonts are loaded before applying fitText.

## Options

fitText recognizes a single option, denoted in curly brackets.

- `ellipsis`: A string specifying the HTML code to be used as ellipsis. Default: `"..."`

## Advanced use: A custom “read more” ellipsis

Let’s say you have a series of teaser elements with text and “read more” links, like this:

	<div class="teaser">
		Some teaser text that is very long and needs shortening.
		After the last word, the read more link should be added.
		<a class="more" href="article-17.html">Read more</a>
	</div>

You want fitText to produce some HTML like this:

	<div class="teaser">
		Some teaser text that is very ... <a class="more" href="article-17.html">Read more</a>
	</div>

This can be achieved by the following code:

	$(".teaser").each(function () {
		var el = $(this);
		el
			.fitText({
				ellipsis: '... ' + el.find(".more").outerHTML()
			});
	});

Again, remember this is responsive! Feel free to apply fitText as many times as you want if the selected element’s height changes.

## License

This plugin is distributed under the terms of the
GNU Lesser General Public license. The license can be
obtained from [http://www.gnu.org/licenses/lgpl.html](http://www.gnu.org/licenses/lgpl.html).

Copyright &copy; 2013–2014 [Systemantics GmbH](http://www.systemantics.net/)

## Changelog

### v0.10:
 
- Initial release.
