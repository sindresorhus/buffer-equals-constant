# buffer-equals-constant [![Build Status](https://travis-ci.org/sindresorhus/buffer-equals-constant.svg?branch=master)](https://travis-ci.org/sindresorhus/buffer-equals-constant)

> Check if two buffers have the same bytes in [constant time](https://en.wikipedia.org/wiki/Timing_attack)


## Install

```
$ npm install --save buffer-equals-constant
```


## Usage

```js
var bufferEqualsConstant = require('buffer-equals-constant');

bufferEqualsConstant(new Buffer('foo'), new Buffer('foo'));
//=> true

bufferEqualsConstant(new Buffer('foo'), new Buffer('bar'));
//=> false

bufferEqualsConstant(new Buffer('foo'), new Buffer('foo'), 512);
//=> true
```

## API

### bufferEqualsConstant(a, b, [minComp])

Returns a boolean of whether `a` and `b` have the same bytes.

#### a

Type: `Buffer`

Buffer to compare.

#### b

Type: `Buffer`

Buffer to compare.

#### minComp

Type: `number`

Default: `Math.max(a.length, b.length)`

Minimal number of comparisons used to determine equality.

If the length of `a` or `b` depends on the input of your algorithm, a [possible attacker](https://en.wikipedia.org/wiki/Timing_attack) may gain information about these lengths by varying the input:

```js
var secret = Buffer('secret');
bufferEqualsConstant(input, secret);
```

Based on the execution time of different `input.length` an attacker may discover `secret.length === 6`, because `bufferEqualsConstant` will perform the same number of operations for all `input` with `0 <= input.length <= secret.length`, but needs more operations if `input.length > secret.length`.

To alleviate this problem `minComp` can be used:

```js
bufferEqualsConstant(input, Buffer('secret'), 1024);
```

NB: execution time also depends on many optimizations (e.g. [Branch Prediction](http://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-an-unsorted-array/11227902#11227902)), which could not be completely eliminated with `minComp`.


## Related

- [buffer-equals](https://github.com/sindresorhus/buffer-equals) - Node.js 0.12 `buffer.equals()` ponyfill
- [buf-compare](https://github.com/sindresorhus/buf-compare) - Node.js 0.12 `Buffer.compare()` ponyfill
- [buf-indexof](https://github.com/sindresorhus/buf-indexof) - Node.js 4.0 `buffer.indexOf()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
