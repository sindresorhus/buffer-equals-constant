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
```

## API

### bufferEqualsConstant(a, b)

Returns a boolean of whether `a` and `b` have the same bytes.

#### a

Type: `Buffer`

Buffer to compare.

#### b

Type: `Buffer`

Buffer to compare.


## Related

- [buffer-equals](https://github.com/sindresorhus/buffer-equals) - Node.js 0.12 `buffer.equals()` ponyfill
- [buf-compare](https://github.com/sindresorhus/buf-compare) - Node.js 0.12 `Buffer.compare()` ponyfill
- [buf-indexof](https://github.com/sindresorhus/buf-indexof) - Node.js 4.0 `buffer.indexOf()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
