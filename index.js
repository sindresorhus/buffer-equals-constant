'use strict';
module.exports = (a, b, minComp) => {
	if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		throw new TypeError('Arguments must be buffers');
	}

	const aLen = a.length;
	const bLen = b.length;
	const len = Math.max(aLen, bLen, minComp || 0);
	let ret = 0;

	for (let i = 0; i < len; i++) {
		ret |= a[i % aLen] ^ b[i % bLen];
	}

	ret |= aLen ^ bLen;

	return ret === 0;
};
