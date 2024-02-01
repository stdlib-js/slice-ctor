// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,n,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,s=parseInt(n,10),!isFinite(s)){if(!t(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(n=(-s).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=s.toString(r),s||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,y,"e"),n=f.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):u.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,T=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,a,o,l,u,p,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,p=0;p<e.length;p++)if(c(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,T(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),l+=n.arg||"",u+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function N(e){var r,t,n;if(!F(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=O(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var $=Object.prototype,A=$.toString,P=$.__defineGetter__,C=$.__defineSetter__,R=$.__lookupGetter__,G=$.__lookupSetter__;var Z=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,get:t})}function z(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var B=U()?function(e){var r,t,n,i,a;if(null==e)return X.call(e);t=e[q],a=q,r=null!=(i=e)&&Y.call(i,a);try{e[q]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[q]=t:delete e[q],n}:function(e){return X.call(e)},D=Number,H=D.prototype.toString;var K=U();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function ee(e){return z(e)||Q(e)}W(ee,"isPrimitive",z),W(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=D.NEGATIVE_INFINITY,ne=Math.floor;function ie(e){return e<re&&e>te&&ne(r=e)===r;var r}function ae(e){return z(e)&&ie(e)}function oe(e){return Q(e)&&ie(e.valueOf())}function se(e){return ae(e)||oe(e)}function ce(e){return ae(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function le(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof le))return new le(r,t,n);if(!ce(r))throw new TypeError(N("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!ce(t))throw new TypeError(N("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!ce(n))throw new TypeError(N("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(N("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}W(se,"isPrimitive",ae),W(se,"isObject",oe),W(le,"name","Slice"),L(le.prototype,"start",(function(){return this._start})),L(le.prototype,"stop",(function(){return this._stop})),L(le.prototype,"step",(function(){return this._step})),W(le.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),W(le.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));export{le as default};
//# sourceMappingURL=mod.js.map
