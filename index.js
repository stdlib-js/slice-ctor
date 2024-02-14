// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var k=String.fromCharCode,x=isNaN,S=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,a,o,p,l,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,x(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function j(e){return"string"==typeof e}function A(e){var r,t;if(!j(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var C=Object.prototype,O=C.toString,R=C.__defineGetter__,N=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__,W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||Z.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L="function"==typeof Object.defineProperty?Object.defineProperty:null,U=Object.defineProperty;function X(e){return"number"==typeof e}function z(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function M(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+z(n):z(n)+e,i&&(e="-"+e)),e}var Y=String.prototype.toLowerCase,J=String.prototype.toUpperCase;function q(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!X(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=M(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=M(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===J.call(e.specifier)?J.call(t):Y.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function B(e){return"string"==typeof e}var D=Math.abs,H=String.prototype.toLowerCase,K=String.prototype.toUpperCase,Q=String.prototype.replace,ee=/e\+(\d)$/,re=/e-(\d)$/,te=/^(\d+)$/,ie=/^(\d+)e/,ne=/\.0$/,ae=/\.0*e/,oe=/(\..*[^0])0*e/;function se(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!X(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":D(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Q.call(t,oe,"$1e"),t=Q.call(t,ae,"e"),t=Q.call(t,ne,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Q.call(t,ee,"e+0$1"),t=Q.call(t,re,"e-0$1"),e.alternate&&(t=Q.call(t,te,"$1."),t=Q.call(t,ie,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===K.call(e.specifier)?K.call(t):H.call(t)}function ce(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function pe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ce(i):ce(i)+e}var le=String.fromCharCode,ue=isNaN,fe=Array.isArray;function ge(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function de(e){var r,t,i,n,a,o,s,c,p;if(!fe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(B(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=ge(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,ue(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,ue(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=q(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ue(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ue(a)?String(i.arg):le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=se(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=M(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=pe(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var he=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function we(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function be(e){var r,t,i,n;for(t=[],n=0,i=he.exec(e);i;)(r=e.slice(n,he.lastIndex-i[0].length)).length&&t.push(r),t.push(we(i)),n=he.lastIndex,i=he.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function ve(e){return"string"==typeof e}function ye(e){var r,t;if(!ve(e))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[be(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return de.apply(null,r)}var me=Object.prototype,_e=me.toString,Ee=me.__defineGetter__,ke=me.__defineSetter__,xe=me.__lookupGetter__,Se=me.__lookupSetter__,Ve=function(){try{return L({},"x",{}),!0}catch(e){return!1}}()?U:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===_e.call(e))throw new TypeError(ye("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===_e.call(t))throw new TypeError(ye("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(xe.call(e,r)||Se.call(e,r)?(i=e.__proto__,e.__proto__=me,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ee&&Ee.call(e,r,t.get),o&&ke&&ke.call(e,r,t.set),e};function Te(e,r,t){Ve(e,r,{configurable:!1,enumerable:!1,get:t})}function Ie(e){return"number"==typeof e}var $e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Fe(){return $e&&"symbol"==typeof Symbol.toStringTag}var je=Object.prototype.toString,Ae=Object.prototype.hasOwnProperty,Ce="function"==typeof Symbol?Symbol:void 0,Oe="function"==typeof Ce?Ce.toStringTag:"",Re=Fe()?function(e){var r,t,i,n,a;if(null==e)return je.call(e);t=e[Oe],a=Oe,r=null!=(n=e)&&Ae.call(n,a);try{e[Oe]=void 0}catch(r){return je.call(e)}return i=je.call(e),r?e[Oe]=t:delete e[Oe],i}:function(e){return je.call(e)},Ne=Number,Pe=Ne.prototype.toString,Ze=Fe();function We(e){return"object"==typeof e&&(e instanceof Ne||(Ze?function(e){try{return Pe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Re(e)))}function Ge(e){return Ie(e)||We(e)}G(Ge,"isPrimitive",Ie),G(Ge,"isObject",We);var Le=Number.POSITIVE_INFINITY,Ue=Ne.NEGATIVE_INFINITY,Xe=Math.floor;function ze(e){return e<Le&&e>Ue&&Xe(r=e)===r;var r}function Me(e){return Ie(e)&&ze(e)}function Ye(e){return We(e)&&ze(e.valueOf())}function Je(e){return Me(e)||Ye(e)}function qe(e){return"number"==typeof e}function Be(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function De(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Be(n):Be(n)+e,i&&(e="-"+e)),e}G(Je,"isPrimitive",Me),G(Je,"isObject",Ye);var He=String.prototype.toLowerCase,Ke=String.prototype.toUpperCase;function Qe(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!qe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=De(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=De(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ke.call(e.specifier)?Ke.call(t):He.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function er(e){return"string"==typeof e}var rr=Math.abs,tr=String.prototype.toLowerCase,ir=String.prototype.toUpperCase,nr=String.prototype.replace,ar=/e\+(\d)$/,or=/e-(\d)$/,sr=/^(\d+)$/,cr=/^(\d+)e/,pr=/\.0$/,lr=/\.0*e/,ur=/(\..*[^0])0*e/;function fr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!qe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":rr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=nr.call(t,ur,"$1e"),t=nr.call(t,lr,"e"),t=nr.call(t,pr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=nr.call(t,ar,"e+0$1"),t=nr.call(t,or,"e-0$1"),e.alternate&&(t=nr.call(t,sr,"$1."),t=nr.call(t,cr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ir.call(e.specifier)?ir.call(t):tr.call(t)}function gr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function dr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+gr(i):gr(i)+e}var hr=String.fromCharCode,wr=isNaN,br=Array.isArray;function vr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function yr(e){var r,t,i,n,a,o,s,c,p;if(!br(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(er(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=vr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,wr(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,wr(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Qe(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!wr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=wr(a)?String(i.arg):hr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=fr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=De(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=dr(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var mr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _r(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Er(e){var r,t,i,n;for(t=[],n=0,i=mr.exec(e);i;)(r=e.slice(n,mr.lastIndex-i[0].length)).length&&t.push(r),t.push(_r(i)),n=mr.lastIndex,i=mr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function kr(e){return"string"==typeof e}function xr(e){var r,t,i;if(!kr(e))throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Er(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return yr.apply(null,t)}function Sr(e){return Me(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function Vr(){var e,r,t,i;if(0===(e=arguments.length)?(r=null,t=null,i=null):1===e?(r=null,t=arguments[0],i=null):2===e?(r=arguments[0],t=arguments[1],i=null):(r=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Vr))return new Vr(r,t,i);if(!Sr(r))throw new TypeError(xr("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!Sr(t))throw new TypeError(xr("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!Sr(i))throw new TypeError(xr("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));if(0===i)throw new RangeError(xr("invalid argument. Third argument cannot be zero. Value: `%s`.",i));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===i?null:i,this}return G(Vr,"name","Slice"),Te(Vr.prototype,"start",(function(){return this._start})),Te(Vr.prototype,"stop",(function(){return this._stop})),Te(Vr.prototype,"step",(function(){return this._step})),G(Vr.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),G(Vr.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}})),Vr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Slice=r();
//# sourceMappingURL=index.js.map
