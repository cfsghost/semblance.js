
var SBComponent = function(id, schema) {
	var self = this;

	self.id = id;
	self.schema = schema;
	self.$dom = $(schema);
	self.childs = {};
	self.containers = {};
	self.components = [];

	// Process all child components
	self.$dom.find('sb-component').each(function(index, comp) {

		var $comp = $(comp);
		var name = $comp.attr('name');
		self.childs[name] = $comp.html();
		self.containers[name] = $comp.parent();

		$comp.remove();
	});

	self.$dom.find('sb-variable').each(function(index, comp) {
		var $comp = $(comp);
		var name = $comp.attr('name');
		$comp.replaceWith('<span name=\"' + name + '\" sb-type=\"sb-variable\"></span>');
	});
};

SBComponent.prototype.setFieldValue = function(fieldName, value) {
	var self = this;

	function setValue($dom) {
		switch($dom[0].tagName) {
		case 'IMG':
			$dom.attr('src', value);
			break;

		default:
			$dom.text(value);
		}
	}

	if (self.$dom.attr('name') == fieldName) {
		setValue(self.$dom);
	} else {
		self.$dom.find('[name=\"' + fieldName + '\"]').each(function() {
			setValue($(this));
		});
	}
};

SBComponent.prototype.addFieldClass = function(fieldName, classes) {
	var self = this;

	if (self.$dom.attr('name') == fieldName) {
		self.$dom.addClass(classes);
	} else {
		self.$dom.find('[name=\"' + fieldName + '\"]').addClass(classes);
	}
};

SBComponent.prototype.removeFieldClass = function(fieldName, classes) {
	var self = this;

	if (self.$dom.attr('name') == fieldName) {
		self.$dom.removeClass(classes);
	} else {
		self.$dom.find('[name=\"' + fieldName + '\"]').removeClass(classes);
	}
};

SBComponent.prototype.createSubComponent = function(fieldName) {
	var self = this;

	var comp = new SBComponent(null, self.childs[fieldName]);

	// Put component on specific position
	self.containers[fieldName].append(comp.$dom);

	self.components.push(comp);

	return comp;
};
