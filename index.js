'use strict';
module.exports = function (a, b, minComp) {
	if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		throw new TypeError('Arguments must be Buffers');
	}

	var len = Math.max(a.length, b.length, minComp || 0);
	var ret = 0;

	for (var i = 0; i < len; i++) {
		ret |= a[i] ^ b[i];
	}
	ret |= a.length ^ b.length;

	return ret === 0;
};
