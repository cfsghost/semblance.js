
var global = this;

(function() {

	if (!document.styleSheets)
		return;

	var styleSheet = document.styleSheets[document.styleSheets.length - 1];
	var rules = {
		'sb-component': '{ display: none; }'
	};

	for (var rule in rules) {
		if (styleSheet.addRule) {
			styleSheet.addRule(rule, rules[rule]);
		} else {
			// IE browser
			styleSheet.insertRule(rule + rules[rule], styleSheet.cssRules.length);
		}
	}

	// Initializing Semblance.js modules
	global.semblance = new Semblance();
})();
