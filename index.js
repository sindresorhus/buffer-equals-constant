'use strict';
module.exports = function (a, b, minComp) {
	if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		throw new TypeError('Arguments must be Buffers');
	}

	var aLen = a.length;
	var bLen = b.length;
	var len = Math.max(aLen, bLen, minComp || 0);
	var ret = 0;

	for (var i = 0; i < len; i++) {
		ret |= a[i % aLen] ^ b[i % bLen];
	}
	ret |= aLen ^ bLen;

	return ret === 0;
};
