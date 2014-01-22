
var global = this;

(function() {

	if (!document.styleSheets)
		return;

	var styleSheet = document.styleSheets[document.styleSheets.length - 1];
	var rules = {
		'sb-component': '{ display: none; }'
	};

	for (var rule in rules) {
		// IE browser
		if (styleSheet.insertRule) {
			styleSheet.insertRule(rule + rules[rule], styleSheet.cssRules.length);
		} else {
			styleSheet.addRule(rule, rules[rule]);
		}
	}

	// Initializing Semblance.js modules
	global.semblance = new Semblance();
})();
