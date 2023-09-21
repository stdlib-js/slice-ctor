// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__;var a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,p,s;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),p="get"in a,s="set"in a,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,a.get),s&&i&&i.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t,e,r){a(t,e,{configurable:!1,enumerable:!1,get:r})}function p(t){return"number"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[d],i=d,e=null!=(o=t)&&_.call(o,i);try{t[d]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[d]=r:delete t[d],n}:function(t){return b.call(t)},v=Number,g=v.prototype.toString;var h=y();function S(t){return"object"==typeof t&&(t instanceof v||(h?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function w(t){return p(t)||S(t)}c(w,"isPrimitive",p),c(w,"isObject",S);var j=Number.POSITIVE_INFINITY,T=v.NEGATIVE_INFINITY,O=Math.floor;function E(t){return t<j&&t>T&&O(e=t)===e;var e}function I(t){return p(t)&&E(t)}function N(t){return S(t)&&E(t.valueOf())}function P(t){return I(t)||N(t)}function V(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function F(t){return I(t)||function(t){return null===t}(t)||function(t){return void 0===t}(t)}function A(){var t,e,r,n;if(0===(t=arguments.length)?(e=null,r=null,n=null):1===t?(e=null,r=arguments[0],n=null):2===t?(e=arguments[0],r=arguments[1],n=null):(e=arguments[0],r=arguments[1],n=arguments[2]),!(this instanceof A))return new A(e,r,n);if(!F(e))throw new TypeError(V("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!F(r))throw new TypeError(V("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",r));if(!F(n))throw new TypeError(V("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(V("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===e?null:e,this._stop=void 0===r?null:r,this._step=void 0===n?null:n,this}c(P,"isPrimitive",I),c(P,"isObject",N),c(A,"name","Slice"),f(A.prototype,"start",(function(){return this._start})),f(A.prototype,"stop",(function(){return this._stop})),f(A.prototype,"step",(function(){return this._step})),c(A.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),c(A.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));export{A as default};
//# sourceMappingURL=mod.js.map
