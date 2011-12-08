/*globals $ */
$.fn.dataTableExt.oSort['currency-asc'] = function (a, b) {
	'use strict';

	var x, y;

	/* Remove any commas (assumes that if present all strings will have a fixed number of d.p) */
	x = (a === "-" || a === "--" || a === '' || a.toLowerCase().replace('/', '') === 'na') ? -1 : a.replace(/,/g, "");
	y = (b === "-" || b === "--" || b === '' || b.toLowerCase().replace('/', '') === 'na') ? -1 : b.replace(/,/g, "");

	/* Remove the currency sign */
	if (typeof x === "string" && isNaN(x.substr(0, 1), 10)) {
		x = x.substring(1);
	}
	if (typeof y === "string" && isNaN(y.substr(0, 1), 10)) {
		y = y.substring(1);
	}

	/* Parse and return */
	x = parseFloat(x, 10);
	y = parseFloat(y, 10);

	return y - x;
};
$.fn.dataTableExt.oSort['currency-desc'] = function (a, b) {
	'use strict';

	var x, y;

	/* Remove any commas (assumes that if present all strings will have a fixed number of d.p) */
	x = (a === "-" || a === "--" || a === '' || a.toLowerCase().replace('/', '') === 'na') ? -1 : a.replace(/,/g, "");
	y = (b === "-" || b === "--" || b === '' || b.toLowerCase().replace('/', '') === 'na') ? -1 : b.replace(/,/g, "");

	/* Remove the currency sign */
	if (typeof x === "string" && isNaN(x.substr(0, 1), 10)) {
		x = x.substring(1);
	}
	if (typeof y === "string" && isNaN(y.substr(0, 1), 10)) {
		y = y.substring(1);
	}

	/* Parse and return */
	x = parseFloat(x, 10);
	y = parseFloat(y, 10);

	return x - y;
};