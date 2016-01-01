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
});

test('minComp should not destroy correctness', t => {
	const a1 = new Buffer('abcde');
	const a2 = new Buffer('abcde');
	const b1 = new Buffer('abcdef');
	const c1 = new Buffer('abcdeg');

	t.true(fn(a1, a2, 0));
	t.true(fn(a1, a2, a1.length));
	t.true(fn(a1, a2, a1.length + 1));

	t.false(fn(a1, b1, 0));
	t.false(fn(a1, b1, a1.length));
	t.false(fn(a1, b1, a1.length + 1));

	t.false(fn(b1, c1, 0));
	t.false(fn(b1, c1, b1.length - 1));
	t.false(fn(b1, c1, b1.length));
	t.false(fn(b1, c1, b1.length + 1));

	t.true(fn(new Buffer('foo'), new Buffer('foo'), 512));
});
