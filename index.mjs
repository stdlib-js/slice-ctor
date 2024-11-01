// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function o(t){return s(t)||r(t)||n(t)}function l(){var t,e,s,r;if(0===(t=arguments.length)?(e=null,s=null,r=null):1===t?(e=null,s=arguments[0],r=null):2===t?(e=arguments[0],s=arguments[1],r=null):(e=arguments[0],s=arguments[1],r=arguments[2]),!(this instanceof l))return new l(e,s,r);if(!o(e))throw new TypeError(i("1izEf",e));if(!o(s))throw new TypeError(i("1izEg",s));if(!o(r))throw new TypeError(i("1izEh",r));if(0===r)throw new RangeError(i("1izEi",r));return this._start=void 0===e?null:e,this._stop=void 0===s?null:s,this._step=void 0===r?null:r,this}t(l,"name","Slice"),e(l.prototype,"start",(function(){return this._start})),e(l.prototype,"stop",(function(){return this._stop})),e(l.prototype,"step",(function(){return this._step})),t(l.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),t(l.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));export{l as default};
//# sourceMappingURL=index.mjs.map
