
var SBComponentManager = function() {
	var self = this;

	self.components = {};
};

SBComponentManager.prototype.create = function(id) {
	var self = this;

	if (self.components[id]) {
		return new SBComponent(id, self.components[id]);
	}

	var schema = $('sb-component#' + id).html();

	self.components[id] = schema;

	return new SBComponent(id, schema);
};
