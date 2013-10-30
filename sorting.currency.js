/*globals $ */
function cleanCurrency(input) {
	'use strict';
	var output;

	/* Remove any commas (assumes that if present all strings will have a fixed number of d.p) */
	output = (input === "-" || input === "--" || input === '' || input.toLowerCase().replace('/', '') === 'na') ? -1 : input.replace(/,/g, "");

	/* Remove the currency sign */
	if (typeof output === "string" && isNaN(output.substr(0, 1), 10)) {
		output = output.substring(1);
	}

	/* Parse and return */
	output = parseFloat(output, 10);

	return output;
}
$.extend( $.fn.dataTableExt.oSort, {
	"currency-asc" : function (a, b) {
		'use strict';
		var x = cleanCurrency(a);
		var y = cleanCurrency(b);
		return x - y;
	},
	"currency-desc" : function (a, b) {
		'use strict';
		var x = cleanCurrency(a);
		var y = cleanCurrency(b);
		return y - x;
	}
});