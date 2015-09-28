'use strict';
module.exports = function (a, b) {
	if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		throw new TypeError('Arguments must be Buffers');
	}

	var ret = 0;

	for (var i = 0; i < a.length; i++) {
		ret |= a[i] ^ b[i];
	}

	return a.length === b.length && ret === 0;
};
