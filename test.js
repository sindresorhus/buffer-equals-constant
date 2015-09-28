import test from 'ava';
import fn from './';

test(t => {
	const a = new Buffer('abcdf');
	const b = new Buffer('abcdf');
	const c = new Buffer('abcde');
	const d = new Buffer('abcdef');

	t.true(fn(a, b));
	t.false(fn(b, c));
	t.false(fn(c, d));
	t.true(fn(a, a));
	t.false(fn(new Buffer('abc'), new Buffer('a0c')));
	t.throws(() => fn(new Buffer(1), 'abc'));
	t.end();
});
