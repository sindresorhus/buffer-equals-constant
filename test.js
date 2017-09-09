import test from 'ava';
import m from '.';

test('main', t => {
	const a = Buffer.from('abcdf');
	const b = Buffer.from('abcdf');
	const c = Buffer.from('abcde');
	const d = Buffer.from('abcdef');

	t.true(m(a, b));
	t.false(m(b, c));
	t.false(m(c, d));
	t.true(m(a, a));
	t.false(m(Buffer.from('abc'), Buffer.from('a0c')));
	t.throws(() => m(Buffer.alloc(1), 'abc'));
});

test('minComp should not destroy correctness', t => {
	const a1 = Buffer.from('abcde');
	const a2 = Buffer.from('abcde');
	const b1 = Buffer.from('abcdef');
	const c1 = Buffer.from('abcdeg');

	t.true(m(a1, a2, 0));
	t.true(m(a1, a2, a1.length));
	t.true(m(a1, a2, a1.length + 1));

	t.false(m(a1, b1, 0));
	t.false(m(a1, b1, a1.length));
	t.false(m(a1, b1, a1.length + 1));

	t.false(m(b1, c1, 0));
	t.false(m(b1, c1, b1.length - 1));
	t.false(m(b1, c1, b1.length));
	t.false(m(b1, c1, b1.length + 1));

	t.true(m(Buffer.from('foo'), Buffer.from('foo'), 512));
});
