// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(t){return n(t)||r(t)||s(t)}function l(){var t,e,n,r;if(0===(t=arguments.length)?(e=null,n=null,r=null):1===t?(e=null,n=arguments[0],r=null):2===t?(e=arguments[0],n=arguments[1],r=null):(e=arguments[0],n=arguments[1],r=arguments[2]),!(this instanceof l))return new l(e,n,r);if(!o(e))throw new TypeError(i("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!o(n))throw new TypeError(i("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",n));if(!o(r))throw new TypeError(i("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",r));if(0===r)throw new RangeError(i("invalid argument. Third argument cannot be zero. Value: `%s`.",r));return this._start=void 0===e?null:e,this._stop=void 0===n?null:n,this._step=void 0===r?null:r,this}t(l,"name","Slice"),e(l.prototype,"start",(function(){return this._start})),e(l.prototype,"stop",(function(){return this._stop})),e(l.prototype,"step",(function(){return this._step})),t(l.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),t(l.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));export{l as default};
//# sourceMappingURL=index.mjs.map
