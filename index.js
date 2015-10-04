'use strict';
module.exports = function (a, b) {
	if (![a, b].every(Buffer.isBuffer)) {
		throw new TypeError('Arguments must be Buffers');
	}

	if (a.length !== b.length) {
		return false;
	}

	var ret = 0;

	for (var i = 0; i < a.length; i++) {
		ret |= a[i] ^ b[i];
	}

	return ret === 0;
};
