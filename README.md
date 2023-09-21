<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Slice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Slice constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
```

<a name="main"></a>

#### Slice( \[stop] )

Returns a `Slice` instance.

```javascript
var s = new Slice();
// returns <Slice>

s = new Slice();
// returns <Slice>
```

The constructor accepts the following arguments:

-   **stop**: ending index (exclusive). Default: `null`.

#### Slice( start, stop\[, step] )

Returns a `Slice` instance.

```javascript
var s = new Slice( 0, 10 );
// returns <Slice>

s = new Slice( 0, 10, 1 );
// returns <Slice>
```

The constructor accepts the following arguments:

-   **start**: starting index (inclusive).
-   **stop**: ending index (exclusive).
-   **step**: index increment. A numeric index increment argument must be a non-zero integer value. Default: `null`.

* * *

### Properties

<a name="static-prop-name"></a>

#### Slice.name

String value of the `Slice` constructor name.

```javascript
var str = Slice.name;
// returns 'Slice'
```

<a name="prop-start"></a>

#### Slice.prototype.start

**Read-only** property returning the slice starting index.

```javascript
var s = new Slice( 10 );
// returns <Slice>

var start = s.start;
// returns null

s = new Slice( 2, 10 );
// returns <Slice>

start = s.start;
// returns 2
```

<a name="prop-stop"></a>

#### Slice.prototype.stop

**Read-only** property returning the slice ending index.

<!-- eslint-disable no-global-assign, stdlib/no-redeclare -->

```javascript
var s = new Slice( null );
// returns <Slice>

var stop = s.stop;
// returns null

s = new Slice( 10 );
// returns <Slice>

stop = s.stop;
// returns 10

s = new Slice( 2, 10 );
// returns <Slice>

stop = s.stop;
// returns 10
```

<a name="prop-step"></a>

#### Slice.prototype.step

**Read-only** property returning the slice index increment.

```javascript
var s = new Slice( 10 );
// returns <Slice>

var step = s.step;
// returns null

s = new Slice( 2, 10 );
// returns <Slice>

step = s.step;
// returns null

s = new Slice( 2, 10, 1 );
// returns <Slice>

step = s.step;
// returns 1
```

* * *

### Methods

<a name="method-to-string"></a>

#### Slice.prototype.toString()

Serializes a `Slice` as a string.

```javascript
var s = new Slice( 10 );
// returns <Slice>

var str = s.toString();
// returns 'Slice(null,10,null)'

s = new Slice( 2, 10, 1 );
// returns <Slice>

str = s.toString();
// returns 'Slice(2,10,1)'
```

<a name="method-to-json"></a>

#### Slice.prototype.toJSON()

Serializes a `Slice` as a [JSON][json] object.

```javascript
var s = new Slice( 10 );
// returns <Slice>

var o = s.toJSON();
// returns { 'type': 'Slice', 'data': [ null, 10, null ] }

s = new Slice( 2, 10, 1 );
// returns <Slice>

o = s.toJSON();
// returns { 'type': 'Slice', 'data': [ 2, 10, 1 ] }
```

`JSON.stringify()` implicitly calls this method when stringifying a `Slice` instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Slice arguments may be either integers, `null`, or `undefined`, where a non-integer value indicates a slice parameter which should be determined based on the slice context (e.g., when used to index into an [`ndarray`][@stdlib/ndarray/ctor]).
-   Slice instances have no explicit functionality; however, they are used by [`ndarray`][@stdlib/ndarray] and other packages for creating views into multi-dimensional data structures.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-global-assign, stdlib/no-redeclare -->

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';

var s = new Slice( 9, -10, -1 );
// returns <Slice>

var start = s.start;
console.log( 'Start: %d', start );
// => 'Start: 9'

var stop = s.stop;
console.log( 'Stop: %d', stop );
// => 'Stop: -10'

var step = s.step;
console.log( 'Step: %d', step );
// => 'Step: -1'

var str = s.toString();
console.log( str );
// => 'Slice(9,-10,-1)'

var o = s.toJSON();
console.log( JSON.stringify( o ) );
// => '{"type":"Slice","data":[9,-10,-1]}'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-ctor

[test-image]: https://github.com/stdlib-js/slice-ctor/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/slice-ctor/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/slice-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/slice-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/slice-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-ctor/main/LICENSE

[json]: http://www.json.org/

[@stdlib/ndarray]: https://github.com/stdlib-js/ndarray/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

</section>

<!-- /.links -->
