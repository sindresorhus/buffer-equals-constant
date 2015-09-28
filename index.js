'use strict';
module.exports = function (a, b) {
	if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		throw new TypeError('Arguments must be Buffers');
	}

	if (a.length !== b.length) {
		return false;
	}

	var length = a.length;
	var i = 0;
	while (i < length && a[i] === b[i]) {
		++i;
	}

	return (i === length);
};
