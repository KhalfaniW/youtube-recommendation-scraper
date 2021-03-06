(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.C=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.u=function(a){this.m=a};
function ra(a,b){a.j={xa:b,Ya:!0};a.h=a.l||a.C}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.C};
function sa(a,b,c){a.h=c;return{value:b}}
function ta(a){a.l=0;var b=a.j.xa;a.j=null;return b}
function ua(a){this.h=new pa;this.i=a}
function va(a,b){qa(a.h);var c=a.h.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),ya(a)}a.h.i=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ya)throw b.xa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i["throw"],b,a.h.u):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.m)}};
b.prototype.J=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.T(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.U(h,g):this.o(g)};
b.prototype.m=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.K();this.B()};
b.prototype.K=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.T=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(z){try{l(q(z))}catch(A){m(A)}}:r}
var l,m,p=new b(function(q,r){l=q;m=r});
this.ia(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(z){return function(A){q[z]=A;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ia(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&Ca(h.i,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,D:q}}return{id:l,list:m,index:-1,D:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.D),this.h.previous.next=l.D,this.h.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
var w=this||self;function x(a,b,c){a=a.split(".");c=c||w;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Fa(a){if(a&&a!=w)return Ga(a.document);null===Ha&&(Ha=Ga(w.document));return Ha}
var Ia=/^[\w+/_-]+[=]{0,2}$/,Ha=null;function Ga(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ia.test(a)?a:""}
function y(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ja(){}
function Ka(a){a.qa=void 0;a.getInstance=function(){return a.qa?a.qa:a.qa=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Qa:C=Ra;return C.apply(null,arguments)}
function Sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function E(){return Date.now()}
function Ta(a,b){x(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.nk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ua(a){return a}
;function Va(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Va);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Va,Error);Va.prototype.name="CustomError";function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a,b){var c=Ma(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=w.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ua,createScript:Ua,createScriptURL:Ua})}catch(c){w.console&&w.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.j=b===tb?a:""}
sb.prototype.W=!0;sb.prototype.V=function(){return this.j.toString()};
sb.prototype.i=!0;sb.prototype.h=function(){return 1};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.j;La(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a,b){return a<b?-1:a>b?1:0}
;function H(a,b){this.j=b===Fb?a:""}
H.prototype.W=!0;H.prototype.V=function(){return this.j.toString()};
H.prototype.i=!0;H.prototype.h=function(){return 1};
function Gb(a){if(a instanceof H&&a.constructor===H)return a.j;La(a);return"type_error:SafeUrl"}
var Hb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ib=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof H)return a;a="object"==typeof a&&a.W?a.V():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return new H(a,Fb)}
var Fb={},Lb=new H("about:invalid#zClosurez",Fb);var Mb;a:{var Nb=w.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function I(a){return-1!=Mb.indexOf(a)}
;function Pb(a,b,c){this.j=c===Qb?a:"";this.l=b}
Pb.prototype.i=!0;Pb.prototype.h=function(){return this.l};
Pb.prototype.W=!0;Pb.prototype.V=function(){return this.j.toString()};
var Qb={};function Rb(a,b){var c=rb();c=c?c.createHTML(a):a;return new Pb(c,b,Qb)}
;function Sb(a,b){var c=b instanceof H?b:Kb(b);a.href=Gb(c)}
function Tb(a,b){a.src=ub(b);var c=Fa(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Ub(a){return a=wb(a,void 0)}
function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
function ac(a,b){var c=$b(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var bc=/#|$/;function cc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function dc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=Ja;var fc=I("Opera"),gc=I("Trident")||I("MSIE"),hc=I("Edge"),ic=I("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),jc=-1!=Mb.toLowerCase().indexOf("webkit")&&!I("Edge");function kc(){var a=w.document;return a?a.documentMode:void 0}
var lc;a:{var mc="",nc=function(){var a=Mb;if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nc&&(mc=nc?nc[1]:"");if(gc){var pc=kc();if(null!=pc&&pc>parseFloat(mc)){lc=String(pc);break a}}lc=mc}var qc=lc,rc={},sc;if(w.document&&gc){var tc=kc();sc=tc?tc:parseInt(qc,10)||void 0}else sc=void 0;var uc=sc;var vc=I("Firefox")||I("FxiOS"),wc=dc()||I("iPod"),xc=I("iPad"),yc=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(dc()||I("iPad")||I("iPod"));var zc={},Ac=null;
function Bc(a){var b=3;Ma(a);void 0===b&&(b=0);if(!Ac){Ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));zc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ac[h]&&(Ac[h]=g)}}}b=zc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var J=window;function Cc(a){var b=y("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ec[c])c=Ec[c];else{c=String(c);if(!Ec[c]){var f=/function\s+([^\(]+)/m.exec(c);Ec[c]=f?f[1]:"[Anonymous]"}c=Ec[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Dc(a,b){b||(b={});b[Fc(a)]=!0;var c=a.stack||"",d=a.pk;d&&!b[Fc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Dc(d,b));return c}
function Fc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ec={};function Gc(a){this.h=a||{cookie:""}}
n=Gc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.zk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ya}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ya:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Hc=new Gc("undefined"==typeof document?null:document);var Ic=!gc||9<=Number(uc);function Jc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Jc.prototype;n.clone=function(){return new Jc(this.x,this.y)};
n.equals=function(a){return a instanceof Jc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Kc(a,b){this.width=a;this.height=b}
n=Kc.prototype;n.clone=function(){return new Kc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Lc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Mc(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Nc.hasOwnProperty(d)?a.setAttribute(Nc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Nc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Oc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ic&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ub(g.name),'"');if(g.type){f.push(' type="',Ub(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Pc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Mc(f,g));2<d.length&&Qc(e,f,d);return f}
function Qc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||B(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(B(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?db(f):f,d)}}}
function Pc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Rc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Sc(a){var b=Tc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Uc(){var a=[];Sc(function(b){a.push(b)});
return a}
var Tc={Gb:"allow-forms",Hb:"allow-modals",Ib:"allow-orientation-lock",Jb:"allow-pointer-lock",Kb:"allow-popups",Lb:"allow-popups-to-escape-sandbox",Mb:"allow-presentation",Nb:"allow-same-origin",Ob:"allow-scripts",Pb:"allow-top-navigation",Qb:"allow-top-navigation-by-user-activation"},Vc=Xa(function(){return Uc()});
function Wc(){var a=Pc(document,"IFRAME"),b={};G(Vc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function K(){this.i=this.i;this.C=this.C}
K.prototype.i=!1;K.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Xc(a,b){a.i?b():(a.C||(a.C=[]),a.C.push(b))}
K.prototype.A=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function Yc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Zc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Zc.apply(null,d):Yc(d)}}
;var $c={};function ad(a){if(a!==$c)throw Error("Bad secret");}
;function bd(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var cd;function dd(){}
function ed(a,b){ad(b);this.h=a}
v(ed,dd);ed.prototype.toString=function(){return this.h.toString()};
var fd=null===(cd=bd())||void 0===cd?void 0:cd.emptyHTML;new ed(null!==fd&&void 0!==fd?fd:"",$c);var gd;function hd(){}
function id(a,b){ad(b);this.h=a}
v(id,hd);id.prototype.toString=function(){return this.h.toString()};
var jd=null===(gd=bd())||void 0===gd?void 0:gd.emptyScript;new id(null!==jd&&void 0!==jd?jd:"",$c);function kd(){}
function ld(a,b){ad(b);this.h=a}
v(ld,kd);ld.prototype.toString=function(){return this.h};new ld("about:blank",$c);new ld("about:invalid#zTSz",$c);function md(a){nd();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var nd=Ja;function od(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var pd=(new Date).getTime();function qd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function rd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],D=e[3],da=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var wa=D^z&(A^D);var oc=1518500249}else wa=z^A^D,oc=1859775393;else 60>r?(wa=z&A|D&(z|A),oc=2400959708):(wa=z^A^D,oc=3395469782);wa=((p<<5|p>>>27)&4294967295)+wa+da+oc+q[r]&4294967295;da=D;D=A;A=(z<<30|z>>>2)&4294967295;z=p;p=wa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+A&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+da&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],z=0,A=p.length;z<A;++z)r.push(p.charCodeAt(z));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var z=24;0<=z;z-=8)p[q++]=e[r]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ka:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function sd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),td(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=td(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function td(a){var b=rd();b.update(a);return b.Ka().toLowerCase()}
;function ud(a){var b=qd(String(w.location.href)),c;(c=w.__SAPISID||w.__APISID||w.__OVERRIDE_SID)?c=!0:(c=new Gc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?w.__SAPISID:w.__APISID,c||(c=new Gc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(w.location.href);return d&&c&&b?[b,sd(qd(d),
c,a||null)].join(" "):null}return null}
;function vd(){this.i=[];this.h=-1}
vd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
vd.prototype.get=function(a){return!!this.i[a]};
function wd(a){-1==a.h&&(a.h=ab(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function xd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
xd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function yd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function zd(a){w.setTimeout(function(){throw a;},0)}
var Ad;
function Bd(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Pc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ua;c.ua=null;e()}};
return function(e){d.next={ua:e};d=d.next;b.port2.postMessage(0)}}return function(e){w.setTimeout(e,0)}}
;function Cd(){this.i=this.h=null}
Cd.prototype.add=function(a,b){var c=Dd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Cd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Dd=new xd(function(){return new Ed},function(a){return a.reset()});
function Ed(){this.next=this.scope=this.h=null}
Ed.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ed.prototype.reset=function(){this.next=this.scope=this.h=null};function Fd(a,b){Gd||Hd();Id||(Gd(),Id=!0);Jd.add(a,b)}
var Gd;function Hd(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);Gd=function(){a.then(Kd)}}else Gd=function(){var b=Kd;
"function"!==typeof w.setImmediate||w.Window&&w.Window.prototype&&!I("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(Ad||(Ad=Bd()),Ad(b)):w.setImmediate(b)}}
var Id=!1,Jd=new Cd;function Kd(){for(var a;a=Jd.remove();){try{a.h.call(a.scope)}catch(b){zd(b)}yd(Dd,a)}Id=!1}
;function Ld(){this.i=-1}
;function Md(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(Md,Ld);Md.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Nd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Md.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Nd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Nd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Nd(this,e);f=0;break}}this.j=f;this.m+=b}};
Md.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Nd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Od="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function Pd(){}
Pd.prototype.next=function(){throw Od;};
Pd.prototype.M=function(){return this};
function Qd(a){if(a instanceof Pd)return a;if("function"==typeof a.M)return a.M(!1);if(Ma(a)){var b=0,c=new Pd;c.next=function(){for(;;){if(b>=a.length)throw Od;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Rd(a,b){if(Ma(a))try{G(a,b,void 0)}catch(c){if(c!==Od)throw c;}else{a=Qd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Od)throw c;}}}
function Sd(a){if(Ma(a))return db(a);a=Qd(a);var b=[];Rd(a,function(c){b.push(c)});
return b}
;function Td(a,b){this.j={};this.h=[];this.P=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Td)for(c=Ud(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ud(a){Vd(a);return a.h.concat()}
n=Td.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Wd;Vd(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Wd(a,b){return a===b}
n.isEmpty=function(){return 0==this.i};
n.clear=function(){this.j={};this.P=this.i=this.h.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.P++,this.h.length>2*this.i&&Vd(this),!0):!1};
function Vd(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.P++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Ud(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Td(this)};
n.M=function(a){Vd(this);var b=0,c=this.P,d=this,e=new Pd;e.next=function(){if(c!=d.P)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Od;var f=d.h[b++];return a?f:d.j[f]};
return e};function Xd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Zd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Xd(a).match(/\S+/g)||[],c=0<=Ya(c,b);return c}
function $d(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Zd(a,"inverted-hdpi")&&Yd(a,Za(a.classList?a.classList:Xd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var ae=!gc||9<=Number(uc),be;
if(be=gc){var ce;if(Object.prototype.hasOwnProperty.call(rc,"9"))ce=rc["9"];else{for(var de=0,ee=vb(String(qc)).split("."),fe=vb("9").split("."),ge=Math.max(ee.length,fe.length),he=0;0==de&&he<ge;he++){var ie=ee[he]||"",je=fe[he]||"";do{var ke=/(\d*)(\D*)(.*)/.exec(ie)||["","","",""],le=/(\d*)(\D*)(.*)/.exec(je)||["","","",""];if(0==ke[0].length&&0==le[0].length)break;de=Eb(0==ke[1].length?0:parseInt(ke[1],10),0==le[1].length?0:parseInt(le[1],10))||Eb(0==ke[2].length,0==le[2].length)||Eb(ke[2],le[2]);
ie=ke[3];je=le[3]}while(0==de)}ce=rc["9"]=0<=de}be=!ce}var me=be,ne=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{w.addEventListener("test",Ja,b),w.removeEventListener("test",Ja,b)}catch(c){}return a}();function oe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
oe.prototype.stopPropagation=function(){this.i=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function pe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
F(pe,oe);var qe={2:"touch",3:"pen",4:"mouse"};
pe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(ic){a:{try{ec(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:qe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&this.preventDefault()};
pe.prototype.stopPropagation=function(){pe.L.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
pe.prototype.preventDefault=function(){pe.L.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,me)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var re="closure_listenable_"+(1E6*Math.random()|0),se=0;function te(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ja=e;this.key=++se;this.X=this.ha=!1}
function ue(a){a.X=!0;a.listener=null;a.h=null;a.src=null;a.ja=null}
;function ve(a){this.src=a;this.listeners={};this.h=0}
ve.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=we(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new te(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
ve.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=we(e,b,c,d);return-1<b?(ue(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function xe(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(ue(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function we(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.ja==d)return e}return-1}
;var ye="closure_lm_"+(1E6*Math.random()|0),ze={},Ae=0;function Be(a,b,c,d,e){if(d&&d.once)Ce(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else c=De(c),a&&a[re]?Ee(a,b,c,B(d)?!!d.capture:!!d,e):Fe(a,b,c,!1,d,e)}
function Fe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=B(e)?!!e.capture:!!e,h=Ge(a);h||(a[ye]=h=new ve(a));c=h.add(b,c,d,g,f);if(!c.h){d=He();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ne||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ie(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ae++}}
function He(){var a=Je,b=ae?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ce(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else c=De(c),a&&a[re]?a.h.add(String(b),c,!0,B(d)?!!d.capture:!!d,e):Fe(a,b,c,!0,d,e)}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else(d=B(d)?!!d.capture:!!d,c=De(c),a&&a[re])?a.h.remove(String(b),c,d,e):a&&(a=Ge(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=we(b,c,d,e)),(c=-1<a?b[a]:null)&&Le(c))}
function Le(a){if("number"!==typeof a&&a&&!a.X){var b=a.src;if(b&&b[re])xe(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ie(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ae--;(c=Ge(b))?(xe(c,a),0==c.h&&(c.src=null,b[ye]=null)):ue(a)}}}
function Ie(a){return a in ze?ze[a]:ze[a]="on"+a}
function Me(a,b,c,d){var e=!0;if(a=Ge(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.X&&(f=Ne(f,d),e=e&&!1!==f)}return e}
function Ne(a,b){var c=a.listener,d=a.ja||a.src;a.ha&&Le(a);return c.call(d,b)}
function Je(a,b){if(a.X)return!0;if(!ae){var c=b||y("window.event"),d=new pe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Me(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Me(c[g],f,!1,d),e=e&&h}return e}return Ne(a,new pe(b,this))}
function Ge(a){a=a[ye];return a instanceof ve?a:null}
var Oe="__closure_events_fn_"+(1E9*Math.random()>>>0);function De(a){if("function"===typeof a)return a;a[Oe]||(a[Oe]=function(b){return a.handleEvent(b)});
return a[Oe]}
;function L(){K.call(this);this.h=new ve(this);this.B=this;this.m=null}
F(L,K);L.prototype[re]=!0;L.prototype.addEventListener=function(a,b,c,d){Be(this,a,b,c,d)};
L.prototype.removeEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
L.prototype.dispatchEvent=function(a){var b=this.m;if(b){var c=[];for(var d=1;b;b=b.m)c.push(b),++d}b=this.B;d=a.type||a;if("string"===typeof a)a=new oe(a,b);else if(a instanceof oe)a.target=a.target||b;else{var e=a;a=new oe(d,b);pb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.h=c[f];e=Pe(g,d,!0,a)&&e}a.i||(g=a.h=b,e=Pe(g,d,!0,a)&&e,a.i||(e=Pe(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.h=c[f],e=Pe(g,d,!1,a)&&e;return e};
L.prototype.A=function(){L.L.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ue(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function Ee(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Pe(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.X&&g.capture==c){var h=g.listener,k=g.ja||g.src;g.ha&&xe(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Qe(a){var b=[];Re(new Se,a,b);return b.join("")}
function Se(){}
function Re(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Re(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Te(d,c),c.push(":"),Re(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Te(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ue={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ve=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Te(a,b){b.push('"',a.replace(Ve,function(c){var d=Ue[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ue[c]=d);return d}),'"')}
;function We(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Xe(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){Ye(b,2,c)},function(c){Ye(b,3,c)})}catch(c){Ye(this,3,c)}}
function Ze(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ze.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var $e=new xd(function(){return new Ze},function(a){a.reset()});
function af(a,b,c){var d=$e.get();d.i=a;d.onRejected=b;d.context=c;return d}
function bf(a){return new Xe(function(b,c){c(a)})}
Xe.prototype.then=function(a,b,c){return cf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Xe.prototype.$goog_Thenable=!0;function df(a,b){return cf(a,null,b,void 0)}
Xe.prototype.cancel=function(a){if(0==this.h){var b=new ef(a);Fd(function(){ff(this,b)},this)}};
function ff(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ff(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):gf(c),hf(c,e,3,b)))}a.j=null}else Ye(a,3,b)}
function jf(a,b){a.i||2!=a.h&&3!=a.h||kf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function cf(a,b,c,d){var e=af(null,null,null);e.h=new Xe(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ef?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;jf(a,e);return e.h}
Xe.prototype.B=function(a){this.h=0;Ye(this,2,a)};
Xe.prototype.F=function(a){this.h=0;Ye(this,3,a)};
function Ye(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof Xe){jf(d,af(e||Ja,f||null,a));var g=!0}else if(We(d))d.then(e,f,a),g=!0;else{if(B(d))try{var h=d.then;if("function"===typeof h){lf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,kf(a),3!=b||c instanceof ef||mf(a,c))}}
function lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function kf(a){a.o||(a.o=!0,Fd(a.C,a))}
function gf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Xe.prototype.C=function(){for(var a;a=gf(this);)hf(this,a,this.h,this.u);this.o=!1};
function hf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,nf(b,c,d);else try{b.j?b.i.call(b.context):nf(b,c,d)}catch(e){of.call(null,e)}yd($e,b)}
function nf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function mf(a,b){a.m=!0;Fd(function(){a.m&&of.call(null,b)})}
var of=zd;function ef(a){Va.call(this,a)}
F(ef,Va);ef.prototype.name="cancel";function M(a){K.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
F(M,K);n=M.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function pf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=bb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Y(b)}}
n.Y=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ja):(c&&cb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.R=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];qf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Y(c)}}return 0!=e}return!1};
function qf(a,b,c){Fd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(G(b,this.Y,this),delete this.j[a])}else this.h.length=0,this.j={}};
n.A=function(){M.L.A.call(this);this.clear();this.l.length=0};function rf(a){this.h=a}
rf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Qe(b))};
rf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
rf.prototype.remove=function(a){this.h.remove(a)};function sf(a){this.h=a}
F(sf,rf);function tf(a){this.data=a}
function uf(a){return void 0===a||a instanceof tf?a:new tf(a)}
sf.prototype.set=function(a,b){sf.L.set.call(this,a,uf(b))};
sf.prototype.i=function(a){a=sf.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
sf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function vf(a){this.h=a}
F(vf,sf);vf.prototype.set=function(a,b,c){if(b=uf(b)){if(c){if(c<E()){vf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=E()}vf.L.set.call(this,a,b)};
vf.prototype.i=function(a){var b=vf.L.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<E()||c&&c>E())vf.prototype.remove.call(this,a);else return b}};function wf(){}
;function xf(){}
F(xf,wf);xf.prototype.clear=function(){var a=Sd(this.M(!0)),b=this;G(a,function(c){b.remove(c)})};function yf(a){this.h=a}
F(yf,xf);n=yf.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.M=function(a){var b=0,c=this.h,d=new Pd;d.next=function(){if(b>=c.length)throw Od;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function zf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(zf,yf);function Af(a,b){this.i=a;this.h=null;if(gc&&!(9<=Number(uc))){Bf||(Bf=new Td);this.h=Bf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Bf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(Af,xf);var Cf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Bf=null;function Df(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Cf[b]})}
n=Af.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(Df(a),b);Ef(this)};
n.get=function(a){a=this.h.getAttribute(Df(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(Df(a));Ef(this)};
n.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Pd;d.next=function(){if(b>=c.length)throw Od;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ef(this)};
function Ef(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ff(a,b){this.i=a;this.h=b+"::"}
F(Ff,xf);Ff.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ff.prototype.get=function(a){return this.i.get(this.h+a)};
Ff.prototype.remove=function(a){this.i.remove(this.h+a)};
Ff.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new Pd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function Gf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Hf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",Hf,void 0);function N(a){Gf(Hf,arguments)}
function O(a,b){return a in Hf?Hf[a]:b}
function If(){return O("PLAYER_CONFIG",{})}
;var Jf=[];function Kf(a){Jf.forEach(function(b){return b(a)})}
function Lf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mf(b),Kf(b)}}:a}
function Mf(a){var b=y("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b))}
function Nf(a){var b=y("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Of=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};x("yt.msgs_",Of,void 0);function Pf(a){Gf(Of,arguments)}
;function Qf(a,b,c,d){Hc.set(""+a,b,{ya:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function P(a){a=Rf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sf(a,b){var c=Rf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Rf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function Tf(a){a&&(a.dataset?a.dataset[Uf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Vf(a,b){return a?a.dataset?a.dataset[Uf(b)]:a.getAttribute("data-"+b):null}
var Wf={};function Uf(a){return Wf[a]||(Wf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function Q(a,b){"function"===typeof a&&(a=Lf(a));return window.setTimeout(a,b)}
function Xf(a){window.clearTimeout(a)}
;var Yf=w.ytPubsubPubsubInstance||new M,Zf=w.ytPubsubPubsubSubscribedKeys||{},$f=w.ytPubsubPubsubTopicToKeys||{},ag=w.ytPubsubPubsubIsSynchronous||{};function bg(a,b){var c=cg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Zf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ag[a]?f():Q(f,0)}catch(g){Mf(g)}},void 0);
Zf[d]=!0;$f[a]||($f[a]=[]);$f[a].push(d);return d}return 0}
function dg(a){var b=cg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete Zf[c]}))}
function eg(a,b){var c=cg();c&&c.publish.apply(c,arguments)}
function fg(a){var b=cg();if(b)if(b.clear(a),a)gg(a);else for(var c in $f)gg(c)}
function cg(){return w.ytPubsubPubsubInstance}
function gg(a){$f[a]&&(a=$f[a],G(a,function(b){Zf[b]&&delete Zf[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Y;M.prototype.publish=M.prototype.R;M.prototype.clear=M.prototype.clear;x("ytPubsubPubsubInstance",Yf,void 0);x("ytPubsubPubsubTopicToKeys",$f,void 0);x("ytPubsubPubsubIsSynchronous",ag,void 0);x("ytPubsubPubsubSubscribedKeys",Zf,void 0);var hg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ig=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function jg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(hg,""),c=c.replace(ig,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else kg(a,b,c)}
function kg(a,b,c){c=void 0===c?null:c;var d=lg(a),e=document.getElementById(d),f=e&&Vf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=bg(d,b),b=""+Na(b),mg[b]=f),g||(e=ng(a,d,function(){Vf(e,"loaded")||(Tf(e),eg(d),Q(Sa(fg,d),0))},c)))}
function ng(a,b,c,d){d=void 0===d?null:d;var e=Pc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Tb(e,md(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function og(a){a=lg(a);var b=document.getElementById(a);b&&(fg(a),b.parentNode.removeChild(b))}
function pg(a,b){if(a&&b){var c=""+Na(b);(c=mg[c])&&dg(c)}}
function lg(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var mg={};function qg(){}
function rg(a,b){return sg(a,1,b)}
;function tg(){qg.apply(this,arguments)}
v(tg,qg);function sg(a,b,c){isNaN(c)&&(c=void 0);var d=y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Q(a,c||0)}
function ug(a){if(!isNaN(a)){var b=y("yt.scheduler.instance.cancelJob");b?b(a):Xf(a)}}
tg.prototype.start=function(){var a=y("yt.scheduler.instance.start");a&&a()};
tg.prototype.pause=function(){var a=y("yt.scheduler.instance.pause");a&&a()};
Ka(tg);tg.getInstance();var vg=[],wg=!1;function xg(){if(!P("disable_ad_status_on_html5_clients")&&(!P("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Hc.get("CONSENT","").startsWith("YES+"))&&"1"!=gb(If(),"args","privembed")){var a=function(){wg=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{jg("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}vg.push(rg(function(){if(!(wg||"google_ad_status"in window)){try{pg("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}wg=!0;N("DCLKSTAT",3)}},5E3))}}
function yg(){return parseInt(O("DCLKSTAT",0),10)}
;var zg=0;x("ytDomDomGetNextId",y("ytDomDomGetNextId")||function(){return++zg},void 0);var Ag={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Bg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ag||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Cg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Bg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Bg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Bg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=w.ytEventsEventsListeners||{};x("ytEventsEventsListeners",ib,void 0);var Dg=w.ytEventsEventsCounter||{count:0};x("ytEventsEventsCounter",Dg,void 0);
function Eg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=B(e[4])&&B(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Fg=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Gg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Eg(a,b,c,d);if(e)return e;e=++Dg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Bg(h);if(!Rc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Bg(h);
h.currentTarget=a;return c.call(a,h)};
g=Lf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Fg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function Hg(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Fg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var Ig=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Jg(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.I=Gg(window,"mousemove",C(this.J,this));a=C(this.F,this);"function"===typeof a&&(a=Lf(a));this.K=window.setInterval(a,25)}
F(Jg,K);Jg.prototype.J=function(a){void 0===a.h&&Cg(a);var b=a.h;void 0===a.i&&Cg(a);this.h=new Jc(b,a.i)};
Jg.prototype.F=function(){if(this.h){var a=Ig();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
Jg.prototype.A=function(){window.clearInterval(this.K);Hg(this.I)};var Kg={};
function Lg(a){var b=void 0===a?{}:a;a=void 0===b.Qa?!0:b.Qa;b=void 0===b.hb?!1:b.hb;if(null==y("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?E()-Math.max(c,0):-1;x("_lact",c,window);x("_fact",c,window);-1==c&&Mg();Gg(document,"keydown",Mg);Gg(document,"keyup",Mg);Gg(document,"mousedown",Mg);Gg(document,"mouseup",Mg);a&&(b?Gg(window,"touchmove",function(){Ng("touchmove",200)},{passive:!0}):(Gg(window,"resize",function(){Ng("resize",200)}),Gg(window,"scroll",function(){Ng("scroll",200)})));
new Jg(function(){Ng("mouse",100)});
Gg(document,"touchstart",Mg,{passive:!0});Gg(document,"touchend",Mg,{passive:!0})}}
function Ng(a,b){Kg[a]||(Kg[a]=!0,rg(function(){Mg();Kg[a]=!1},b))}
function Mg(){null==y("_lact",window)&&Lg();var a=E();x("_lact",a,window);-1==y("_fact",window)&&x("_fact",a,window);(a=y("ytglobal.ytUtilActivityCallback_"))&&a()}
function Og(){var a=y("_lact",window),b;null==a?b=-1:b=Math.max(E()-a,0);return b}
;var Pg=window,R=Pg.ytcsi&&Pg.ytcsi.now?Pg.ytcsi.now:Pg.performance&&Pg.performance.timing&&Pg.performance.now&&Pg.performance.timing.navigationStart?function(){return Pg.performance.timing.navigationStart+Pg.performance.now()}:function(){return(new Date).getTime()};var Qg=Sf("initial_gel_batch_timeout",1E3),Rg=Math.pow(2,16)-1,Sg=null,Tg=0,Ug=void 0,Vg=0,Wg=0,Xg=0,Yg=!0,Zg=w.ytLoggingTransportGELQueue_||new Map;x("ytLoggingTransportGELQueue_",Zg,void 0);var $g=w.ytLoggingTransportTokensToCttTargetIds_||{};x("ytLoggingTransportTokensToCttTargetIds_",$g,void 0);function ah(a){a=void 0===a?!1:a;return new Xe(function(b){Xf(Vg);Xf(Wg);Wg=0;Ug&&Ug.isReady()?(bh(b,a),Zg.clear()):(ch(),b())})}
function ch(){P("web_gel_timeout_cap")&&!Wg&&(Wg=Q(ah,6E4));Xf(Vg);var a=O("LOGGING_BATCH_TIMEOUT",Sf("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Yg&&(a=Qg);Vg=Q(ah,a)}
function bh(a,b){var c=Ug;b=void 0===b?!1:b;for(var d=Math.round(R()),e=Zg.size,f=u(Zg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=nb({context:dh(c.H||eh())});h.events=k;(k=$g[g])&&fh(h,g,k);delete $g[g];gh(h,d);hh(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Tg=Math.round(R()-d)},
onError:function(){e--;e||a()},
ub:b});Yg=!1}}
function gh(a,b){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&P("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Rg/2));d++;d>Rg&&(d=1);N("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Sg&&Tg&&P("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Sg,roundtripMs:String(Tg)});Sg=c;Tg=0}}
function fh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var ih=w.ytLoggingGelSequenceIdObj_||{};x("ytLoggingGelSequenceIdObj_",ih,void 0);
function jh(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||R());e[a]=b;a=Og();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.O&&(a=e.context,b=d.O,ih[b]=b in ih?ih[b]+1:0,a.sequence={index:ih[b],groupKey:b},d.La&&delete ih[d.O]);d=d.N;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),$g[d.token]=a,a=d.token);d=Zg.get(a)||[];Zg.set(a,d);d.push(e);c&&(Ug=new c);c=Sf("web_logging_max_batch")||
100;e=R();d.length>=c?ah(!0):10<=e-Xg&&(ch(),Xg=e)}
;function kh(){var a=lh;y("yt.ads.biscotti.getId_")||x("yt.ads.biscotti.getId_",a,void 0)}
function mh(a){x("yt.ads.biscotti.lastId_",a,void 0)}
;var nh={q:!0,search_query:!0};function oh(a){for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?eb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],nh.hasOwnProperty(f[0])||("ReferenceError"===k.name?Nf(k):Mf(k))}}return c}
function ph(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function qh(a){"?"==a.charAt(0)&&(a=a.substr(1));return oh(a)}
function rh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ac(a,e)+d}
;function sh(a){var b=th;a=void 0===a?y("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=pd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(da){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?J:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;e.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(e.u_h=J.screen.height,e.u_w=J.screen.width,
e.u_ah=J.screen.availHeight,e.u_aw=J.screen.availWidth,e.u_cd=J.screen.colorDepth);J.navigator&&J.navigator.plugins&&(e.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(e.u_nmime=J.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(da){}try{var m=h.outerWidth;var p=h.outerHeight}catch(da){}try{var q=h.innerWidth;var r=h.innerHeight}catch(da){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,p,q,
r];l=b.h.top;try{var z=(l||window).document,A="CSS1Compat"==z.compatMode?z.documentElement:z.body;var D=(new Kc(A.clientWidth,A.clientHeight)).round()}catch(da){D=new Kc(-12245933,-12245933)}z=D;D={};A=new vd;w.SVGElement&&w.document.createElementNS&&A.set(0);l=Wc();l["allow-top-navigation-by-user-activation"]&&A.set(1);l["allow-popups-to-escape-sandbox"]&&A.set(2);w.crypto&&w.crypto.subtle&&A.set(3);w.TextDecoder&&w.TextEncoder&&A.set(4);A=wd(A);D.bc=A;D.bih=z.height;D.biw=z.width;D.brdim=k.join();
b=b.i;b=(D.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,D.wgl=!!J.WebGLRenderingContext,D);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var th=new function(){var a=window.document;this.h=window;this.i=a};
x("yt.ads_.signals_.getAdSignalsString",function(a){return ph(sh(a))},void 0);var uh="XMLHttpRequest"in w?function(){return new XMLHttpRequest}:null;
function vh(){if(!uh)return null;var a=uh();return"open"in a?a:null}
function wh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var xh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},yh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
zh=!1;
function Ah(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Wb)[1]||null,e=Yb(a);d&&e?(d=c,c=a.match(Wb),d=d.match(Wb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Yb(c)==e&&(Number(c.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;d=P("web_ajax_ignore_global_headers_if_set");for(var f in xh)e=O(xh[f]),!e||!c&&Yb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Yb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=ph(sh(void 0));return b}
function Bh(a){var b=window.location.search,c=Yb(a),d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=qh(b),f={};G(yh,function(g){e[g]&&(f[g]=e[g])});
return rh(a,f||{},!1)}
function Ch(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Dh(a,b);var d=Eh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Xf(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||w;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ra&&b.ra.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Ca&&0<b.timeout&&(f=Q(function(){e||(e=!0,Xf(f),b.Ca.call(b.context||w))},b.timeout))}else Fh(a,b)}
function Fh(a,b){var c=b.format||"JSON";a=Dh(a,b);var d=Eh(a,b),e=!1,f=Gh(a,function(k){if(!e){e=!0;h&&Xf(h);var l=wh(k),m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Hh(a,c,k,b.qk);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||w;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ra&&b.ra.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Z&&0<b.timeout){var g=b.Z;var h=Q(function(){e||(e=!0,f.abort(),Xf(h),g.call(b.context||w,f))},b.timeout)}return f}
function Dh(a,b){b.tk&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.tb;d&&(d[c]&&delete d[c],a=rh(a,d||{},!0));return a}
function Eh(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.G,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.sk||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=qh(e),pb(e,f),e=b.Da&&"JSON"==b.Da?JSON.stringify(e):$b(e));f=e||f&&!jb(f);!zh&&f&&"POST"!=b.method&&(zh=!0,Mf(Error("AJAX request with postData should use POST")));
return e}
function Hh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ih(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=Jh(g)})}d&&Kh(e);
return e}
function Kh(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else Kh(a[b])}}
function Ih(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Jh(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Gh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=vh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=Bh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ah(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Lh(){return"INNERTUBE_API_KEY"in Hf&&"INNERTUBE_API_VERSION"in Hf}
function eh(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),Ra:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Sa:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ua:O("INNERTUBE_CONTEXT_HL",void 0),Ta:O("INNERTUBE_CONTEXT_GL",void 0),Va:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",Xa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wa:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function dh(a){var b={client:{hl:a.Ua,gl:a.Ta,clientName:a.Sa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ra}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&P("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(qh(O("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Mh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mk||O("AUTHORIZATION"))||(a?b="Bearer "+y("gapi.auth.getToken")().lk:b=ud([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function Nh(a){a=Object.assign({},a);delete a.Authorization;var b=ud();if(b){var c=new Md;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bc(c.digest())}return a}
;function Oh(a){var b=new zf;(b=b.isAvailable()?a?new Ff(b,a):b:null)||(a=new Af(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new vf(a):null;this.i=document.domain||window.location.hostname}
Oh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,E()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Qe(b))}catch(f){return}else e=escape(b);Qf(a,e,c,this.i)};
Oh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Hc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Oh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Hc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ph;function Qh(){Ph||(Ph=new Oh("yt.innertube"));return Ph}
function Rh(a,b,c,d){if(d)return null;d=Qh().get("nextId",!0)||1;var e=Qh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Nh(c),requestTime:Math.round(R())};Qh().set("nextId",d+1,86400,!0);Qh().set("requests",e,86400,!0);return d}
function Sh(a){var b=Qh().get("requests",!0)||{};delete b[a];Qh().set("requests",b,86400,!0)}
function Th(a){var b=Qh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Nh(Mh(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),hh(a,d.method,e,{}));delete b[c]}}Qh().set("requests",b,86400,!0)}}
;function Uh(a,b){this.version=a;this.args=b}
;function Vh(a,b){this.topic=a;this.h=b}
Vh.prototype.toString=function(){return this.topic};var Wh=y("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Y;M.prototype.publish=M.prototype.R;M.prototype.clear=M.prototype.clear;x("ytPubsub2Pubsub2Instance",Wh,void 0);var Xh=y("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",Xh,void 0);var Yh=y("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Yh,void 0);var Zh=y("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Zh,void 0);
x("ytPubsub2Pubsub2SkipSubKey",null,void 0);function $h(a,b){var c=ai();c&&c.publish.call(c,a.toString(),a,b)}
function bi(a){var b=ci,c=ai();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=y("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Xh[d])try{if(f&&b instanceof Vh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.P){var l=new h;h.P=l.version}var m=h.P}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Mf(p)}},Zh[b.toString()]?y("yt.scheduler.instance")?rg(g):Q(g,0):g())});
Xh[d]=!0;Yh[b.toString()]||(Yh[b.toString()]=[]);Yh[b.toString()].push(d);return d}
function di(){var a=ei,b=bi(function(c){a.apply(void 0,arguments);fi(b)});
return b}
function fi(a){var b=ai();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete Xh[c]}))}
function ai(){return y("ytPubsub2Pubsub2Instance")}
;var gi=[],hi=!1;function ii(a,b){hi||(gi.push({type:"EVENT",eventType:a,payload:b}),10<gi.length&&gi.shift())}
;function ji(a){if(!a)throw Error();throw a;}
function ki(a){return a}
function S(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
S.all=function(a){return new S(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)li(S.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
S.resolve=function(a){return new S(function(b,c){a instanceof S?a.then(b,c):b(a)})};
S.reject=function(a){return new S(function(b,c){c(a)})};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ki,e=null!==b&&void 0!==b?b:ji;return new S(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){mi(c,c,d,f,g)}),c.onRejected.push(function(){ni(c,c,e,f,g)})):"FULFILLED"===c.state.status?mi(c,c,d,f,g):"REJECTED"===c.state.status&&ni(c,c,e,f,g)})};
function li(a,b){a.then(void 0,b)}
function mi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?oi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ni(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?oi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function oi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?oi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function pi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function qi(a){return new Promise(function(b,c){pi(a,b,c)})}
function T(a){return new S(function(b,c){pi(a,b,c)})}
;function ri(a,b){return new S(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;var si=wc||xc;function ti(a){var b=Mb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function U(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(U,Error);var ui={},vi=(ui.AUTH_INVALID="No user identifier specified.",ui.EXPLICIT_ABORT="Transaction was explicitly aborted.",ui.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ui.MISSING_OBJECT_STORE="Object store not created.",ui.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ui.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ui.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ui);
function wi(a,b,c){b=void 0===b?{}:b;c=void 0===c?vi[a]:c;U.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,wi.prototype);hi||(gi.push({type:"ERROR",payload:this}),10<gi.length&&gi.shift())}
v(wi,U);function xi(a){wi.call(this,"MISSING_OBJECT_STORE",{uk:a},vi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,xi.prototype)}
v(xi,wi);function yi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
n=yi.prototype;n.add=function(a,b,c){return zi(this,[a],"readwrite",function(d){return Ai(d,a).add(b,c)})};
n.clear=function(a){return zi(this,[a],"readwrite",function(b){return Ai(b,a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return zi(this,[a],"readonly",function(c){return Ai(c,a).count(b)})};
n["delete"]=function(a,b){return zi(this,[a],"readwrite",function(c){return Ai(c,a)["delete"](b)})};
n.get=function(a,b){return zi(this,[a],"readwrite",function(c){return Ai(c,a).get(b)})};
function zi(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.h.transaction(b,c);d=Bi(e,d)["catch"](function(f){var g=a.h.name,h=b.join();f instanceof wi||f instanceof U||("QuotaExceededError"===f.name?f=new wi("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):yc&&"UnknownError"===f.name?f=new wi("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,U.prototype),f.args=[{name:"IdbError",wk:f.name,dbName:g,objectStoreNames:h}]));throw f;});
Ci(a,d,b.join(),c);return d}
function Ci(a,b,c,d){cc(a,function f(){var g,h,k=this,l,m,p;return Aa(f,function(q){if(1==q.h)return g=Math.round(R()),q.l=2,sa(q,b,4);2!=q.h?(h=Math.round(R()),Di(k,!0,c,h-g),q.h=0,q.l=0):(l=ta(q),m=Math.round(R()),p=m-g,l instanceof wi&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&ii("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof wi&&"UNKNOWN_ABORT"===l.type&&(ii("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:p,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0),Di(k,!1,c,p),q.h=0)})})}
function Di(a,b,c,d){ii("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function Ei(a){this.h=a}
n=Ei.prototype;n.add=function(a,b){return T(this.h.add(a,b))};
n.clear=function(){return T(this.h.clear()).then(function(){})};
n.count=function(a){return T(this.h.count(a))};
function Fi(a,b){return Gi(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?Fi(this,a):T(this.h["delete"](a))};
n.get=function(a){return T(this.h.get(a))};
n.index=function(a){return new Hi(this.h.index(a))};
n.getName=function(){return this.h.name};
function Gi(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ii(a).then(function(d){return ri(d,c)})}
function Ji(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=wi;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Bi(a,b){var c=new Ji(a);return Ki(c,b)}
function Ki(a,b){var c=new Promise(function(d,e){li(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Ji.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new wi("EXPLICIT_ABORT");};
Ji.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function Ai(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new Ei(c),a.i.set(c,d));return d}
function Hi(a){this.h=a}
Hi.prototype.count=function(a){return T(this.h.count(a))};
Hi.prototype["delete"]=function(a){return Li(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Hi.prototype.get=function(a){return T(this.h.get(a))};
Hi.prototype.getKey=function(a){return T(this.h.getKey(a))};
function Li(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ii(a).then(function(d){return ri(d,c)})}
function Mi(a,b){this.request=a;this.cursor=b}
function Ii(a){return T(a).then(function(b){return null===b?null:new Mi(a,b)})}
n=Mi.prototype;n.advance=function(a){this.cursor.advance(a);return Ii(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return Ii(this.request)};
n["delete"]=function(){return T(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.getValue=function(){return this.cursor.value};
n.update=function(a){return T(this.cursor.update(a))};function Ni(a,b,c){return cc(this,function e(){var f,g,h,k,l,m,p,q,r,z;return Aa(e,function(A){if(1==A.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.sb,m=g.upgrade,p=g.closed,r=function(){q||(q=new yi(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&ii("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var da=r(),wa=new Ji(f.transaction);m&&m(da,D.oldVersion,D.newVersion,wa)}),h&&f.addEventListener("blocked",function(){h()}),sa(A,qi(f),2);
z=A.m;k&&z.addEventListener("versionchange",function(){k(r())});
z.addEventListener("close",function(){ii("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:z.version});l&&l()});
return A["return"](r())})})}
function Oi(a,b){b=void 0===b?{}:b;return cc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return sa(h,qi(e),0)})})}
;function Pi(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Qi(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Ni(a,b,c)}
Pi.prototype["delete"]=function(a){a=void 0===a?{}:a;return Oi(this.name,a)};
Pi.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,sb:c,upgrade:this.options.upgrade},e=function(){return cc(a,function g(){var h=this,k,l,m;return Aa(g,function(p){switch(p.h){case 1:return p.l=2,sa(p,Qi(h.name,h.options.version,d),4);case 4:k=p.m;if(!vc){p.h=5;break}a:{var q=u(Object.keys(h.options.bb));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.h=5;break}if(!vc||h.i){p.h=7;break}h.i=!0;return sa(p,h["delete"](),8);case 8:return p["return"](e());case 7:throw new xi(l);
case 5:return p["return"](k);case 2:m=ta(p);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return p["return"](Qi(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Ri=new Pi({bb:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Si(a){return cc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return sa(e,Ri.open(),2);d=e.m;return e["return"](zi(d,["databases"],"readwrite",function(f){var g=Ai(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return T(g.h.put(a,void 0)).then(function(){})})}))})})}
function Ti(){return cc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return sa(d,Ri.open(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new L;var Ui;
function Vi(){return cc(this,function b(){var c,d;return Aa(b,function(e){switch(e.h){case 1:var f;if(f=si)f=/WebKit\/([0-9]+)/.exec(Mb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!P("ytidb_allow_on_ios_safari_v8_and_v9")||hc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return sa(e,Si(d),4);case 4:return sa(e,Ti(),5);case 5:return e["return"](!0);case 2:return ta(e),e["return"](!1)}})})}
function Wi(){if(void 0!==Ui)return Ui;hi=!0;return Ui=Vi().then(function(a){hi=!1;return a})}
;var Xi;function Yi(){Xi||(Xi=new Oh("yt.offline"));return Xi}
;function Zi(){L.call(this);this.o=this.u=this.j=!1;this.l=$i();aj(this);bj(this)}
v(Zi,L);function $i(){var a=window.navigator.onLine;return void 0===a?!0:a}
function bj(a){window.addEventListener("online",function(){a.l=!0;a.j&&a.dispatchEvent("ytnetworkstatus-online");cj(a);if(a.o&&P("offline_error_handling")){var b=Yi().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Mf(d)}Yi().set("errors",{},2592E3,!0)}}})}
function aj(a){window.addEventListener("offline",function(){a.l=!1;a.j&&a.dispatchEvent("ytnetworkstatus-offline");cj(a)})}
function cj(a){a.u&&(Nf(new U("NetworkStatusManager state did not match poll",R()-0)),a.u=!1)}
;function dj(a){a=void 0===a?{}:a;L.call(this);var b=this;this.l=this.u=0;Zi.h||(Zi.h=new Zi);this.j=Zi.h;this.j.j=!0;a.Za&&(this.j.o=!0);a.ka?(this.ka=a.ka,Ee(this.j,"ytnetworkstatus-online",function(){ej(b,"publicytnetworkstatus-online")}),Ee(this.j,"ytnetworkstatus-offline",function(){ej(b,"publicytnetworkstatus-offline")})):(Ee(this.j,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),Ee(this.j,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
v(dj,L);function ej(a,b){a.ka?a.l?(ug(a.u),a.u=rg(function(){a.o!==b&&(a.dispatchEvent(b),a.o=b,a.l=R())},a.ka-(R()-a.l))):(a.dispatchEvent(b),a.o=b,a.l=R()):a.dispatchEvent(b)}
;var fj;function gj(a,b){b=void 0===b?{}:b;Wi().then(function(){fj||(fj=new dj({Za:!0}));fj.j.l!==$i()&&Nf(new U("NetworkStatusManager isOnline does not match window status"));Fh(a,b)})}
function hj(a,b){b=void 0===b?{}:b;Wi().then(function(){Fh(a,b)})}
;function ij(a){var b=this;this.H=null;a?this.H=a:Lh()&&(this.H=eh());sg(function(){Th(b)},0,5E3)}
ij.prototype.isReady=function(){!this.H&&Lh()&&(this.H=eh());return!!this.H};
function hh(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nf(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new U("innertube xhrclient not ready",b,c,d);Mf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",G:c,Da:"JSON",Z:function(){d.Z()},
Ca:d.Z,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
Ba:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
vk:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.H.Va)&&(g=e);var h=a.H.Xa||!1,k=Mh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.H.innertubeApiVersion+"/"+b;var l={alt:"json"};a.H.Wa&&f.headers.Authorization||(l.key=a.H.innertubeApiKey);var m=rh(""+g+e,l||{},!0);Wi().then(function(p){if(d.retry&&P("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(P("networkless_gel")&&!p||!P("networkless_gel"))var q=Rh(b,
c,k,h);if(q){var r=f.onSuccess,z=f.Ba;f.onSuccess=function(A,D){Sh(q);r(A,D)};
c.Ba=function(A,D){Sh(q);z(A,D)}}}try{P("use_fetch_for_op_xhr")?Ch(m,f):P("networkless_gel")&&d.retry?(f.method="POST",!d.ub&&P("nwl_send_fast_on_unload")?hj(m,f):gj(m,f)):(f.method="POST",f.G||(f.G={}),Fh(m,f))}catch(A){if("InvalidAccessError"==A.name)q&&(Sh(q),q=0),Nf(Error("An extension is blocking network request."));
else throw A;}q&&sg(function(){Th(a)},0,5E3)})}
;function V(a,b,c){c=void 0===c?{}:c;var d=ij;O("ytLoggingEventsDefaultDisabled",!1)&&ij==ij&&(d=null);jh(a,b,d,c)}
;var jj=[{za:function(a){return"Cannot read property '"+a.key+"'"},
sa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{za:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function kj(){this.h=[];this.i=[]}
var lj;var mj=new M;function nj(a,b,c,d){c+="."+a;a=oj(b);d[c]=a;return c.length+a.length}
function oj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var pj=new Set,qj=0,rj=0,sj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function tj(a){uj(a,"WARNING")}
function uj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(P("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(!P("web_yterr_killswitch")||window&&window.yterr||g)&&!(5<=qj)&&0!==a.sampleWeight)){f=Cc(a);g=f.message||"Unknown Error";d=f.name||"UnknownError";var h=f.stack||a.h||"Not available";h.startsWith(d+": "+g)&&(e=h.split("\n"),e.shift(),h=e.join("\n"));e=f.lineNumber||"Not available";f=f.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var q=c,r=0;r<m.length&&!(m[r]&&
(k+=nj(r,m[r],p,q),500<k));r++);else if("object"===typeof m)for(q in q=void 0,r=c,m){if(m[q]&&(k+=nj(q,m[q],p,r),500<k))break}else c[p]=oj(m),k+=c[p].length;else c[p]=oj(m),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,q=oj(m[l]),c[k]=q,p+=k.length+q.length,500<p))break}else c.params=oj(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);c={message:g,name:d,lineNumber:e,
fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(jj);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.sa[c.name])for(e=u(g.sa[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["params.error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["params.error."+e[h]]=d[h+1];c.message=g.za(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(pj.has(c.message)||
0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?(mj.R("handleError",c),P("record_app_crashed_web")&&0===rj&&V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"}),rj++):"WARNING"===b&&mj.R("handleWarning",c);if(P("kevlar_gel_error_routing")){a=b;a:{g=u(sj);for(d=g.next();!d.done;d=g.next())if(ti(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);g=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):
[];0!==g.length&&(1!==g.length||isNaN(Number(g[0]))?2!==g.length||isNaN(Number(g[0]))||isNaN(Number(g[1]))||(d.lineNumber=Number(g[0]),d.columnNumber=Number(g[1])):d.lineNumber=Number(g[0]));lj||(lj=new kj);g=lj;e=c.message;f=c.name;a:{h=u(g.i);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.h)){h=l.weight;break a}h=u(g.h);for(l=h.next();!l.done;l=h.next())if(l=l.value,l.Ja(c)){h=l.weight;break a}h=1}e={level:"ERROR_LEVEL_UNKNOWN",message:e,errorClassName:f,sampleWeight:h};
"ERROR"===a?e.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(e.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href};O("FEXP_EXPERIMENTS")&&(d.experimentIds=O("FEXP_EXPERIMENTS"));d.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+g.i.length+"&cb="+g.h.length},{key:"client.params.serviceWorker",value:"false"}];if(g=c.params)for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.kvPairs.push({key:"client."+h,value:String(g[h])});
g=O("SERVER_NAME",void 0);f=O("SERVER_VERSION",void 0);g&&f&&(d.kvPairs.push({key:"server.name",value:g}),d.kvPairs.push({key:"server.version",value:f}));V("clientError",{errorMetadata:d,stackTrace:a,logMessage:e});ah()}}if(!P("suppress_error_204_logging")){a=c.params||{};b={tb:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},G:{url:O("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);
if(b.G){c.stack&&(b.G.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.G["client."+d]=a[d];if(a=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.G[d]=a[d];a=O("SERVER_NAME",void 0);g=O("SERVER_VERSION",void 0);a&&g&&(b.G["server.name"]=a,b.G["server.version"]=g)}Fh(O("ECATCHER_REPORT_HOST","")+"/error_204",b)}pj.add(c.message);qj++}}}
function vj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function wj(){this.i=!1;this.h=null}
wj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,jg(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?xj(g,c,d,f,h):(og(b),tj(new U("Unable to load Botguard","from "+b)))},e)):a&&(e=Pc(document,"SCRIPT"),e.textContent=a,e.nonce=Fa(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?xj(this,c,d,f,a):tj(Error("Unable to load Botguard from JS")))};
function xj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ja)}catch(f){tj(f)}else{try{a.h=new e(b)}catch(f){tj(f)}c&&c(b)}}
wj.prototype.dispose=function(){this.h=null};var yj=new wj;function zj(){return!!yj.h}
function Aj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return yj.h?yj.h.hot?yj.h.hot(void 0,void 0,a):yj.h.invoke(void 0,void 0,a):null}
;var Bj=E().toString();
function Cj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=E();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Bj)for(a=1,b=0;b<Bj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Bj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Dj=w.ytLoggingDocDocumentNonce_||Cj();x("ytLoggingDocDocumentNonce_",Dj,void 0);var Ej={Sd:0,ec:1,nc:2,Ug:3,Td:4,Sj:5,Gh:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};var Fj=1;function Gj(a){this.h=a}
function Hj(a){return new Gj({trackingParams:a})}
Gj.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Gj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Gj.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Ij(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Jj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Kj(a){return O(Jj(void 0===a?0:a),void 0)}
x("yt_logging_screen.getRootVeType",Kj,void 0);function Lj(a){return(a=Kj(void 0===a?0:a))?new Gj({veType:a,youtubeData:void 0}):null}
function Mj(){var a=O("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=O(Ij(a));if(!b&&!O("USE_CSN_FALLBACK",!0))return null;b||0!=a||(P("kevlar_client_side_screens")||P("c3_client_side_screens")?b="UNDEFINED_CSN":b=O("EVENT_ID"));return b?b:null}
x("yt_logging_screen.getCurrentCsn",W,void 0);function Nj(a,b,c){var d=Mj();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function Oj(a){return Mj()[a]}
x("yt_logging_screen.getCttAuthInfo",Oj,void 0);function Pj(a,b,c,d){c=void 0===c?0:c;if(a!==O(Ij(c))||b!==O(Jj(c)))if(Nj(a,d,c),N(Ij(c),a),N(Jj(c),b),0==c||P("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&jh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Dj,clientScreenNonce:a},ij)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
x("yt_logging_screen.setCurrentScreen",Pj,void 0);function Qj(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=Ya(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match(Wb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Vb(d).toString(36),e=e?$b(e):"",Qf(b,e,k||5))}else k=b,e="ST-"+Vb(d).toString(36),k=k?$b(k):"",Qf(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=ac(a,l)+m;a=a instanceof H?a:Kb(a);c.href=Gb(a)}return!0}
;function Rj(a){Uh.call(this,1,arguments);this.csn=a}
v(Rj,Uh);var ci=new Vh("screen-created",Rj),Sj=[],Uj=Tj,Vj=0;function Wj(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:$a(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&tj(Error("Child VE logged with no data"));d={N:Oj(b),O:b};"UNDEFINED_CSN"==b?Xj("visualElementAttached",c,d):a?jh("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function Yj(a,b){var c=P("use_default_events_client")?void 0:ij,d={csn:a,ve:b.getAsJson(),eventType:1},e={N:Oj(a),O:a};"UNDEFINED_CSN"==a?Xj("visualElementShown",d,e):c?jh("visualElementShown",d,c,e):V("visualElementShown",d,e)}
function Zj(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={N:Oj(b),O:b};"UNDEFINED_CSN"==b?Xj("visualElementGestured",c,d):a?jh("visualElementGestured",c,a,d):V("visualElementGestured",c,d)}
function Tj(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Bc(b)}
function Xj(a,b,c){Sj.push({payloadName:a,payload:b,options:c});Vj||(Vj=di())}
function ei(a){if(Sj){for(var b=u(Sj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,jh(c.payloadName,c.payload,null,c.options));Sj.length=0}Vj=0}
;function ak(a,b,c){Wj(P("use_default_events_client")?void 0:ij,a,b,[c])}
;var bk={ac:29434,dc:3611,Ee:3854,Uf:42993,Bi:4724,ij:96370,vb:27686,wb:85013,xb:23462,zb:42016,Ab:62407,Bb:26926,yb:43781,Cb:51236,Db:79148,Eb:50160,Fb:77504,Rb:87907,Sb:18630,Tb:54445,Ub:80935,Vb:105675,Wb:37521,Xb:47786,Yb:98349,Zb:6827,cc:7282,hc:32276,fc:76278,ic:93911,jc:106531,kc:27259,lc:27262,mc:27263,oc:21759,pc:27107,qc:62936,sc:49568,tc:38408,uc:80637,wc:68727,xc:68728,yc:80353,zc:80356,Ac:74610,Bc:45707,Cc:83962,Dc:83970,Ec:46713,Fc:89711,Gc:74612,Hc:93265,Ic:74611,Kc:113533,Lc:93252,
Mc:99357,Oc:94521,Pc:114252,Qc:113532,Rc:94522,Nc:94583,Sc:88E3,Tc:93253,Uc:93254,Vc:94387,Wc:94388,Xc:93255,Yc:97424,Jc:72502,Zc:110111,bd:76019,cd:89431,dd:110466,ed:77240,fd:60508,gd:105350,hd:73393,jd:113534,kd:92098,ld:84517,md:83759,nd:80357,od:86113,pd:72598,qd:72733,rd:107349,sd:97615,td:31402,ud:84774,vd:95117,wd:98930,xd:98931,yd:98932,zd:43347,Ad:45474,Bd:100352,Cd:84758,Dd:98443,Ed:74613,Fd:74614,Gd:64502,Hd:74615,Id:74616,Jd:74617,Kd:77820,Ld:74618,Md:93278,Nd:93274,Od:93275,Pd:93276,
Qd:22110,Rd:29433,Ud:82047,Vd:113550,Wd:75836,Xd:75837,Yd:42352,Zd:84512,ae:76065,be:75989,ce:16623,de:32594,ee:27240,ge:32633,he:74858,je:3945,ie:16989,ke:45520,le:25488,me:25492,ne:25494,oe:55760,pe:14057,qe:18451,re:57204,se:57203,te:17897,ue:57205,we:18198,xe:17898,ye:17909,ze:43980,Ae:46220,Be:11721,Ce:49954,De:96369,Fe:56251,Ge:25624,He:16906,Ie:99999,Je:68172,Ke:27068,Le:47973,Me:72773,Ne:26970,Oe:26971,Pe:96805,Qe:17752,Re:73233,Se:109512,Te:22256,Ue:14115,Ve:22696,We:89278,Xe:89277,Ye:109513,
Ze:43278,af:43459,bf:43464,cf:89279,df:43717,ef:55764,ff:22255,gf:89281,hf:40963,jf:43277,kf:43442,lf:91824,mf:96367,nf:36850,pf:72694,qf:37414,rf:36851,sf:73491,tf:54473,uf:43375,vf:46674,wf:32473,xf:72901,yf:72906,zf:50947,Af:50612,Bf:50613,Cf:50942,Df:84938,Ef:84943,Ff:84939,Gf:84941,Hf:84944,If:84940,Jf:84942,Kf:35585,Lf:51926,Mf:79983,Nf:63238,Of:18921,Pf:63241,Qf:57893,Rf:41182,Sf:33424,Tf:22207,Vf:36229,Wf:22206,Xf:22205,Yf:18993,Zf:19001,ag:18990,cg:18991,dg:18997,eg:18725,fg:19003,gg:36874,
hg:44763,jg:33427,kg:67793,lg:22182,mg:37091,ng:34650,og:50617,pg:47261,qg:22287,rg:25144,sg:97917,tg:62397,ug:36961,vg:108035,wg:27426,xg:27857,yg:27846,zg:27854,Ag:69692,Bg:61411,Cg:39299,Dg:38696,Eg:62520,Fg:36382,Gg:108701,Hg:50663,Ig:36387,Jg:14908,Kg:37533,Lg:105443,Mg:61635,Ng:62274,Og:65702,Pg:65703,Qg:65701,Rg:76256,Sg:37671,Tg:49953,Vg:36216,Wg:28237,Xg:39553,Yg:29222,Zg:26107,ah:38050,bh:26108,dh:26109,eh:26110,fh:66881,gh:28236,hh:14586,ih:57929,jh:74723,kh:44098,lh:44099,mh:23528,nh:61699,
oh:59149,ph:101951,qh:97346,rh:95102,sh:64882,uh:63595,vh:63349,wh:95101,xh:75240,yh:27039,zh:68823,Ah:21537,Bh:83464,Ch:75707,Dh:83113,Eh:101952,Fh:101953,Hh:79610,Ih:24402,Jh:24400,Kh:32925,Lh:57173,Mh:64423,Nh:64424,Oh:33986,Ph:100828,Qh:21409,Rh:11070,Sh:11074,Th:17880,Uh:14001,Wh:30709,Xh:30707,Yh:30711,Zh:30710,ai:30708,Vh:26984,bi:63648,ci:63649,di:51879,fi:111059,gi:5754,hi:20445,ii:110386,ji:113746,ki:66557,li:17310,mi:28631,ni:21589,oi:68012,ri:60480,si:31571,ti:76980,vi:41577,wi:45469,
xi:38669,yi:13768,zi:13777,Ai:62985,Ci:59369,Di:43927,Ei:43928,Fi:12924,Gi:100355,Ii:56219,Ji:27669,Ki:10337,Hi:47896,Li:107598,Mi:96639,Ni:107536,Oi:96661,Pi:96658,Qi:116646,Ri:96660,Si:104443,Ti:96659,Ui:106442,Vi:63667,Wi:63668,Xi:63669,Yi:78314,Zi:55761,aj:96368,bj:67374,cj:48992,dj:49956,ej:31961,fj:26388,gj:23811,hj:5E4,jj:47355,kj:47356,lj:37935,mj:45521,nj:21760,oj:83769,pj:49977,qj:49974,rj:93497,sj:93498,tj:34325,uj:115803,vj:100081,wj:35309,xj:68314,yj:25602,zj:100339,Aj:59018,Bj:18248,
Cj:50625,Dj:9729,Ej:37168,Fj:37169,Gj:21667,Hj:16749,Ij:18635,Jj:39305,Kj:18046,Lj:53969,Mj:8213,Nj:93926,Oj:102852,Pj:110099,Qj:22678,Rj:69076,Tj:100856,Uj:17736,Vj:3832,Wj:55759,Xj:64031,Yj:93044,Zj:93045,ak:34388,bk:17657,ck:17655,dk:39579,ek:39578,fk:77448,gk:8196,hk:11357,ik:69877,jk:8197,kk:82039};function ck(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ck.prototype.clone=function(){var a=new ck,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=mb(c):a[b]=c}return a};function dk(){K.call(this);this.h=[]}
v(dk,K);dk.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Ja)}K.prototype.A.call(this)};var ek=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function fk(a){a=a||"";if(window.spf){var b=a.match(ek);spf.style.load(a,b?b[1]:"",void 0)}else gk(a)}
function gk(a){var b=hk(a),c=document.getElementById(b),d=c&&Vf(c,"loaded");d||c&&!d||(c=ik(a,b,function(){Vf(c,"loaded")||(Tf(c),eg(b),Q(Sa(fg,b),0))}))}
function ik(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=md(a);d.rel="stylesheet";d.href=ub(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function hk(a){var b=Pc(document,"A");Sb(b,new H(a,Fb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function jk(a,b,c,d){K.call(this);var e=this;this.u=this.ea=a;this.J=b;this.B=!1;this.api={};this.ca=this.I=null;this.K=new M;Xc(this,Sa(Yc,this.K));this.m={};this.U=this.da=this.l=this.ma=this.h=null;this.T=!1;this.o=this.F=null;this.fa={};this.Ga=["onReady"];this.la=null;this.ta=NaN;this.aa={};this.j=d;kk(this);this.ga("WATCH_LATER_VIDEO_ADDED",this.cb.bind(this));this.ga("WATCH_LATER_VIDEO_REMOVED",this.eb.bind(this));this.ga("onAdAnnounce",this.Ia.bind(this));this.Ha=new dk(this);Xc(this,Sa(Yc,
this.Ha));this.ba=0;c?this.ba=Q(function(){e.loadNewVideoConfig(c)},0):d&&(lk(this),mk(this))}
v(jk,K);n=jk.prototype;n.getId=function(){return this.J};
n.loadNewVideoConfig=function(a){if(!this.i){this.ba&&(Xf(this.ba),this.ba=0);a instanceof ck||(a=new ck(a));this.ma=a;this.h=a.clone();lk(this);this.da||(this.da=nk(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=od(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=od(Number(a)||String(a));mk(this);this.B&&ok(this)}};
function lk(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.J,a.j?a.j.rootElementId=a.J:a.h.attrs.id=a.J);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
n.Na=function(){return this.ma};
function ok(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function pk(a){var b=!0,c=qk(a);c&&a.h&&(a=rk(a),b=Vf(c,"version")===a);return b&&!!y("yt.player.Application.create")}
function mk(a){if(!a.i&&!a.T){var b=pk(a);if(b&&"html5"==(qk(a)?"html5":null))a.U="html5",a.B||sk(a);else if(tk(a),a.U="html5",b&&a.o)a.ea.appendChild(a.o),sk(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.F=function(){c=!0;var d=uk(a,"player_bootstrap_method")?y("yt.player.Application.createAlternate")||y("yt.player.Application.create"):y("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.ea,e,a.j);sk(a)};
a.T=!0;b?a.F():(jg(rk(a),a.F),(b=a.j?a.j.cssUrl:a.h.assets.css)&&fk(b),vk(a)&&!c&&x("yt.player.Application.create",null,void 0))}}}
function qk(a){var b=Lc(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function sk(a){if(!a.i){var b=qk(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,!uk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||wk(a)):a.ta=Q(function(){sk(a)},50)}}
function wk(a){kk(a);a.B=!0;var b=qk(a);b.addEventListener&&(a.I=xk(a,b,"addEventListener"));b.removeEventListener&&(a.ca=xk(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=xk(a,b,e))}for(var f in a.m)a.I(f,a.m[f]);ok(a);a.da&&a.da(a.api);a.K.R("onReady",a.api)}
function xk(a,b,c){var d=b[c];return function(){try{return a.la=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.la=e,Nf(e))}}}
function kk(a){a.B=!1;if(a.ca)for(var b in a.m)a.ca(b,a.m[b]);for(var c in a.aa)Xf(parseInt(c,10));a.aa={};a.I=null;a.ca=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ga.bind(a);a.api.removeEventListener=a.jb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Oa.bind(a);a.api.getPlayerType=a.Pa.bind(a);a.api.getCurrentVideoConfig=a.Na.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.ab.bind(a)}
n.ab=function(){return this.B};
n.ga=function(a,b){var c=this,d=nk(this,b);if(d){if(!(0<=Ya(this.Ga,a)||this.m[a])){var e=yk(this,a);this.I&&this.I(a,e)}this.K.subscribe(a,d);"onReady"==a&&this.B&&Q(function(){d(c.api)},0)}};
n.jb=function(a,b){if(!this.i){var c=nk(this,b);c&&pf(this.K,a,c)}};
function nk(a,b){var c=b;if("string"==typeof b){if(a.fa[b])return a.fa[b];c=function(){var d=y(b);d&&d.apply(w,arguments)};
a.fa[b]=c}return c?c:null}
function yk(a,b){var c="ytPlayer"+b+a.J;a.m[b]=c;w[c]=function(d){var e=Q(function(){if(!a.i){a.K.R(b,d);var f=a.aa,g=String(e);g in f&&delete f[g]}},0);
kb(a.aa,String(e))};
return c}
n.Ia=function(a){eg("a11y-announce",a)};
n.cb=function(a){eg("WATCH_LATER_VIDEO_ADDED",a)};
n.eb=function(a){eg("WATCH_LATER_VIDEO_REMOVED",a)};
n.Pa=function(){return this.U||(qk(this)?"html5":null)};
n.Oa=function(){return this.la};
function tk(a){a.cancel();kk(a);a.U=null;a.h&&(a.h.loaded=!1);var b=qk(a);b&&(pk(a)||!vk(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.ea;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.F){var a=rk(this);pg(a,this.F)}Xf(this.ta);this.T=!1};
n.A=function(){tk(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){Mf(b)}this.fa=null;for(var a in this.m)w[this.m[a]]=null;this.ma=this.h=this.api=null;delete this.ea;delete this.u;K.prototype.A.call(this)};
function vk(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function rk(a){return a.j?a.j.jsUrl:a.h.assets.js}
function uk(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==oh(c||"")[b]}
;var zk={},Ak="player_uid_"+(1E9*Math.random()>>>0);
function Bk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Lc(d):e=d;d=e;e=Ak+"_"+Na(d);var f=zk[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new jk(d,e,a,b);zk[e]=f;eg("player-added",f.api);Xc(f,Sa(Ck,f));return f.api}
function Ck(a){delete zk[a.getId()]}
;function Dk(a){a=void 0===a?!1:a;K.call(this);this.h=new M(a);Xc(this,Sa(Yc,this.h))}
F(Dk,K);Dk.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
Dk.prototype.m=function(a,b){this.i||this.h.R.apply(this.h,arguments)};function Ek(a,b,c){Dk.call(this);this.j=a;this.l=b;this.o=c}
v(Ek,Dk);function Fk(a,b,c){if(!a.i){var d=a.j;d.i||a.l!=d.h||(a={id:a.o,command:b},c&&(a.data=c),d.h.postMessage(Qe(a),d.l))}}
Ek.prototype.A=function(){this.l=this.j=null;Dk.prototype.A.call(this)};function Gk(a){K.call(this);this.h=a;this.h.subscribe("command",this.Ea,this);this.j={};this.m=!1}
v(Gk,K);n=Gk.prototype;n.start=function(){this.m||this.i||(this.m=!0,Fk(this.h,"RECEIVING"))};
n.Ea=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=C(this.lb,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Hk(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=Ik(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=Jk(a,c))&&this.m&&!this.i&&Fk(this.h,a,c))}}};
n.lb=function(a,b){this.m&&!this.i&&Fk(this.h,a,this.na(a,b))};
n.na=function(a,b){if(null!=b)return{value:b}};
function Hk(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
n.A=function(){var a=this.h;a.i||pf(a.h,"command",this.Ea,this);this.h=null;for(var b in this.j)Hk(this,b);K.prototype.A.call(this)};function Kk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Lk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Mk(a)}
function Mk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Nk(a,b,c,d){if(B(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ok(a,b){Gk.call(this,b);this.l=a;this.start()}
v(Ok,Gk);Ok.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Ok.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function Ik(a,b){switch(a){case "loadVideoById":return b=Mk(b),[b];case "cueVideoById":return b=Mk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Nk(b),[b];case "cuePlaylist":return b=Nk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Jk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ok.prototype.na=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Gk.prototype.na.call(this,a,b)};
Ok.prototype.A=function(){Gk.prototype.A.call(this);delete this.l};function Pk(a,b,c){K.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Ya(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v(Pk,K);Pk.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Nf(e)}}};
Pk.prototype.A=function(){window.removeEventListener("message",this.u);K.prototype.A.call(this)};function Qk(){var a=this.i=new Pk(!!O("WIDGET_ID_ENFORCE")),b=C(this.ib,this);a.m=b;a.o=null;this.i.channel="widget";if(a=O("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
n=Qk.prototype;n.ib=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,Rk(this,a)),this.m[a]=!0)):this.Aa(a,b,c)};
n.Aa=function(){};
function Rk(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ma=function(){this.o=!0;this.sendMessage("initialDelivery",this.oa());this.sendMessage("onReady");G(this.l,this.Fa,this);this.l=[]};
n.oa=function(){return null};
function Sk(a,b){a.sendMessage("infoDelivery",b)}
n.Fa=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
n.sendMessage=function(a,b){this.Fa({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.i=null};function Tk(a){Qk.call(this);this.h=a;this.j=[];this.addEventListener("onReady",C(this.fb,this));this.addEventListener("onVideoProgress",C(this.pb,this));this.addEventListener("onVolumeChange",C(this.qb,this));this.addEventListener("onApiChange",C(this.kb,this));this.addEventListener("onPlaybackQualityChange",C(this.mb,this));this.addEventListener("onPlaybackRateChange",C(this.nb,this));this.addEventListener("onStateChange",C(this.ob,this));this.addEventListener("onWebglSettingsChanged",C(this.rb,
this))}
v(Tk,Qk);n=Tk.prototype;n.Aa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Kk(a)){var d=b;if(B(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Mk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Lk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Nk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Kk(a)&&Sk(this,this.oa())}};
n.fb=function(){var a=C(this.Ma,this);this.i.h=a};
n.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
n.oa=function(){if(!this.h)return null;var a=this.h.getApiInterface();cb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=E()/1E3;return b};
n.ob=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Sk(this,a)};
n.mb=function(a){Sk(this,{playbackQuality:a})};
n.nb=function(a){Sk(this,{playbackRate:a})};
n.kb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.qb=function(){Sk(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
n.pb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Sk(this,a)};
n.rb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Sk(this,a)};
n.dispose=function(){Qk.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Uk(a,b,c){K.call(this);this.h=a;this.l=c;this.m=Gg(window,"message",C(this.o,this));this.j=new Ek(this,a,b);Xc(this,Sa(Yc,this.j))}
v(Uk,K);Uk.prototype.o=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.m("command",b.command,b.data,a.origin))}};
Uk.prototype.A=function(){Hg(this.m);this.h=null;K.prototype.A.call(this)};function Vk(){var a=mb(Wk),b;return df(new Xe(function(c,d){a.onSuccess=function(e){wh(e)?c(e):d(new Xk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Xk("Unknown request error","net.unknown",e))};
a.Z=function(e){d(new Xk("Request timed out","net.timeout",e))};
b=Fh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ef&&b.abort();
return bf(c)})}
function Xk(a,b,c){Va.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Xk,Va);function Yk(){this.i=0;this.h=null}
Yk.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),We(a)?a:Zk(a)):2===this.i&&b?(a=b.call(c,this.h),We(a)?a:$k(a)):this};
Yk.prototype.getValue=function(){return this.h};
Yk.prototype.$goog_Thenable=!0;function $k(a){var b=new Yk;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Zk(a){var b=new Yk;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function al(a){Va.call(this,a.message||a.description||a.name);this.isMissing=a instanceof bl;this.isTimeout=a instanceof Xk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ef}
v(al,Va);al.prototype.name="BiscottiError";function bl(){Va.call(this,"Biscotti ID is missing from server")}
v(bl,Va);bl.prototype.name="BiscottiMissingError";var Wk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},cl=null;
function lh(){if(P("disable_biscotti_fetch_on_html5_clients"))return bf(Error("Fetching biscotti ID is disabled."));if(P("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Hc.get("CONSENT","").startsWith("YES+"))return bf(Error("User has not consented - not fetching biscotti id."));if("1"===gb(If(),"args","privembed"))return bf(Error("Biscotti ID is not available in private embed mode"));cl||(cl=df(Vk().then(dl),function(a){return el(2,a)}));
return cl}
function dl(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new bl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new bl;a=a.id;mh(a);cl=Zk(a);fl(18E5,2);return a}
function el(a,b){var c=new al(b);mh("");cl=$k(c);0<a&&fl(12E4,a-1);throw c;}
function fl(a,b){Q(function(){df(Vk().then(dl,function(c){return el(b,c)}),Ja)},a)}
function gl(){try{var a=y("yt.ads.biscotti.getId_");return a?a():lh()}catch(b){return bf(b)}}
;function hl(a){if("1"!==gb(If(),"args","privembed")){a&&kh();try{gl().then(function(){},function(){}),Q(hl,18E5)}catch(b){Mf(b)}}}
;var X=y("ytglobal.prefsUserPrefsPrefs_")||{};x("ytglobal.prefsUserPrefsPrefs_",X,void 0);function il(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Hc.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
n=il.prototype;n.get=function(a,b){jl(a);kl(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){jl(a);kl(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
n.remove=function(a){jl(a);kl(a);delete X[a]};
n.save=function(){Qf(this.h,this.dump(),63072E3,this.i)};
n.clear=function(){for(var a in X)delete X[a]};
n.dump=function(){var a=[],b;for(b in X)a.push(b+"="+encodeURIComponent(String(X[b])));return a.join("&")};
function kl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function jl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ll(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(il);function ml(){this.i=new Set;this.h=new Set;this.j=new Map}
ml.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(ml);function nl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!ol(a)||c.some(function(e){return!ol(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())pl(a,d.value);return a}
function pl(a,b){for(var c in b)if(ol(b[c])){if(c in a&&!ol(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});pl(a[c],b[c])}else if(ql(b[c])){if(c in a&&!ql(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);rl(a[c],b[c])}else a[c]=b[c];return a}
function rl(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,ol(d)?a.push(pl({},d)):ql(d)?a.push(rl([],d)):a.push(d);return a}
function ol(a){return"object"===typeof a&&!Array.isArray(a)}
function ql(a){return"object"===typeof a&&Array.isArray(a)}
;var sl={},tl=0;
function ul(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ti("cobalt")){if(a){a instanceof H||(a="object"==typeof a&&a.W?a.V():String(a),Jb.test(a)?a=new H(a,Fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Ib))&&Hb.test(b[1])?new H(a,Fb):null));a=Gb(a||Lb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Pb)){b="object"==typeof a;var f=null;b&&a.i&&(f=a.h());a=Rb(wb(b&&a.W?a.V():String(a)),f)}a instanceof Pb&&a.constructor===Pb?a=a.j:(La(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Qe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Oc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Gh(a,b,"POST",e,d);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Gh(a,b,"GET","",d);else{b:{try{var g=new Wa({url:a});if(g.j&&g.i||g.l){var h=Xb(a.match(Wb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(bc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var z=a.indexOf("&",q);if(0>z||z>l)z=l;q+=3;r=decodeURIComponent(a.substr(q,z-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(A){}f=!1}f?vl(a)?(b&&b(),f=!0):f=!1:f=!1;f||wl(a,b)}}
function vl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function wl(a,b){var c=new Image,d=""+tl++;sl[d]=c;c.onload=c.onerror=function(){b&&sl[d]&&b();delete sl[d]};
c.src=a}
;function xl(a,b){Uh.call(this,1,arguments)}
v(xl,Uh);function yl(a,b){Uh.call(this,1,arguments)}
v(yl,Uh);var zl=new Vh("aft-recorded",xl),Al=new Vh("timing-sent",yl);var Bl=window;function Cl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Dl=Bl.performance||Bl.mozPerformance||Bl.msPerformance||Bl.webkitPerformance||new Cl;var El=!1;C(Dl.clearResourceTimings||Dl.webkitClearResourceTimings||Dl.mozClearResourceTimings||Dl.msClearResourceTimings||Dl.oClearResourceTimings||Ja,Dl);function Fl(a){var b=Gl(a);if(b.aft)return b.aft;a=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Hl(a){var b;(b=y("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ta("ytcsi."+(a||"")+"data_",b));return b}
function Il(a){a=Hl(a);a.info||(a.info={});return a.info}
function Gl(a){a=Hl(a);a.tick||(a.tick={});return a.tick}
function Jl(a){var b=Hl(a).nonce;b||(b=Cj(),Hl(a).nonce=b);return b}
function Kl(a){var b=Gl(a||""),c=Fl(a);c&&!El&&($h(zl,new xl(Math.round(c-b._start),a)),El=!0)}
;function Ll(){var a=y("ytcsi.debug");a||(a=[],x("ytcsi.debug",a,void 0),x("ytcsi.reference",{},void 0));return a}
function Ml(a){a=a||"";var b=y("ytcsi.reference");b||(Ll(),b=y("ytcsi.reference"));if(b[a])return b[a];var c=Ll(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Nl=w.ytLoggingLatencyUsageStats_||{};x("ytLoggingLatencyUsageStats_",Nl,void 0);function Ol(){this.h=0}
function Pl(){Ol.h||(Ol.h=new Ol);return Ol.h}
Ol.prototype.tick=function(a,b,c){Ql(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Ol.prototype.info=function(a,b){var c=Object.keys(a).join("");Ql(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,V("latencyActionInfo",c))};
Ol.prototype.span=function(a,b){var c=Object.keys(a).join("");Ql(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a))};
function Ql(a,b){Nl[b]=Nl[b]||{count:0};var c=Nl[b];c.count++;c.time=R();a.h||(a.h=sg(function(){var d=R(),e;for(e in Nl)Nl[e]&&6E4<d-Nl[e].time&&delete Nl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||tj(c)),!0):!1}
;var Y={},Rl=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid=
"requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",
Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",
Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Sl="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Tl={},Ul=(Tl.ccs="CANARY_STATE_",
Tl.mver="MEASUREMENT_VERSION_",Tl.pis="PLAYER_INITIALIZED_STATE_",Tl.yt_pt="LATENCY_PLAYER_",Tl.pa="LATENCY_ACTION_",Tl.yt_vst="VIDEO_STREAM_TYPE_",Tl),Vl="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Wl(a){return!!O("FORCE_CSI_ON_GEL",!1)||P("csi_on_gel")||!!Hl(a).useGel}
function Xl(a){a=Hl(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Yl(a,b,c){if(null!==b)if(Il(c)[a]=b,Wl(c)){var d=b;b=Xl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Rl){b=Rl[a];0<=Ya(Sl,b)&&(d=!!d);a in Ul&&"string"===typeof d&&(d=Ul[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=nl({},e)}else 0<=Ya(Vl,a)||tj(new U("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Wl(c)&&(b=Ml(c||""),nl(b.info,f),b=Xl(c),"gelInfos"in b||(b.gelInfos={}),nl(b.gelInfos,f),c=Jl(c),Pl().info(f,c))}else Ml(c||"").info[a]=b}
function Zl(a,b,c){var d=Gl(c);if(P("use_first_tick")&&$l(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Dl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Dl.mark(e))}e=b||R();d[a]=e;e=Xl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||R();if(Wl(c)){Ml(c||"").tick[a]=b||R();e=Jl(c);if("_start"===a){var f=Pl();Ql(f,"baseline_"+e)||V("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Pl().tick(a,e,b);Kl(c);e=!0}else e=!1;if(!e){if(!y("yt.timing."+(c||"")+"pingSent_")&&
(f=O((c||"")+"TIMING_ACTION",void 0),e=Gl(c),y("ytglobal.timing"+(c||"")+"ready_")&&f&&$l("_start")&&Fl(c)))if(Kl(c),c)am(c);else{f=!0;var g=O("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&am(c)}Ml(c||"").tick[a]=b||R()}return d[a]}
function $l(a,b){var c=Gl(b);return a in c}
function am(a){if(!Wl(a)){var b=Gl(a),c=Il(a),d=b._start,e=O("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:O((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Fl(a);var h=Gl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Il(a).yt_pvis&&"youtube"===e&&(Yl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=R();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;P("debug_csi_data")&&(c=y("yt.timing.csiData"),c||(c=[],Ta("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var r=void 0===r?"":r;vl(f,r)||ul(f,void 0,void 0,void 0,r)}else ul(f);x("yt.timing."+(a||"")+"pingSent_",!0,void 0);$h(Al,new yl(m.aft+(Number(g)||0),a))}}
var bm=window;bm.ytcsi&&(bm.ytcsi.info=Yl,bm.ytcsi.tick=Zl);function cm(){this.l=[];this.m=[];this.h=[];this.i=!1;this.o=new Map}
function dm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i&&a.j&&a.j();var g=W(c),h=Lj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Wj(a.client,g,h,[Hj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Wj(a.client,g,h,[Hj(d.playerResponse.trackingParams)]))})}
function em(a,b,c,d){if(a.i&&!d)a.l.push([b,c]);else{var e=W(d);c=c||Lj(d);e&&c&&Wj(a.client,e,c,[b])}}
cm.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;Zj(this.client,b,Hj(a.clickTrackingParams));return!0};
function fm(a,b,c){c=void 0===c?{}:c;a.i=!0;a.j=function(){gm(a,b,c);var f=Lj(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,em(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){h=g.value;g=h[0];var k=h[1];if(a.i)a.m.push([g,k]);else{var l=Hj(g);if(h=W())g=a.client,k={csn:h,ve:l.getAsJson(),clientData:k},l={N:Oj(h),O:h},"UNDEFINED_CSN"==h?Xj("visualElementStateChanged",k,l):g?jh("visualElementStateChanged",k,g,l):V("visualElementStateChanged",k,l)}}}};
W(c.layer)||a.j();if(c.wa)for(var d=u(c.wa),e=d.next();!e.done;e=d.next())dm(a,e.value,c.layer);else uj(Error("Delayed screen needs a data promise."))}
function gm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.gb?c.gb:c.layer;var e=W(d);d=Lj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.va,l=c.N,m=Uj(),p={csn:m,pageVe:(new Gj({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&tj(new U("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={N:l,O:m};g?jh("screenCreated",p,g,k):V("screenCreated",p,k);$h(ci,new Rj(m));var q=m}catch(r){vj(r,{yk:b,rootVe:d,parentVisualElement:void 0,rk:e,xk:f,va:c.va});uj(r);return}Pj(q,b,c.layer,c.N);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=P("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Ej));for(f=b.next();!f.done;f=b.next())if(W(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={N:Oj(e),O:e,
La:f},"UNDEFINED_CSN"==e?Xj("visualElementHidden",d,f):b?jh("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Yl("csn",q);ml.getInstance().clear();d=Lj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&Yj(q,d);a.i=!1;a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value===c.layer&&d&&em(a,b,d,c.layer)}
;var Z=null,hm=null,im=null,jm={};function km(a){var b=a.id;a=a.ve_type;var c=Fj++;a=new Gj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});jm[b]=a;b=W();c=Lj();b&&c&&ak(b,c,a)}
function lm(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function mm(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Pj(b,a),a=Lj()))for(var c in jm){var d=jm[c];d&&ak(b,a,d)}}
function nm(a){jm[a.id]=Hj(a.tracking_params)}
function om(a){var b=W();a=jm[a.id];b&&a&&Zj(P("use_default_events_client")?void 0:ij,b,a)}
function pm(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=jm[a[c]];d&&Yj(b,d)}}
;x("yt.setConfig",N,void 0);x("yt.config.set",N,void 0);x("yt.setMsg",Pf,void 0);x("yt.msgs.set",Pf,void 0);x("yt.logging.errors.log",uj,void 0);
x("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);if(!a){var b=O("PLAYER_VARS",void 0);b&&(a={args:b})}hl(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);if((c=O("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){if(!c.serializedForcedExperimentIds){var d=
window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=qh(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=Bk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=Bk(a);Z.addEventListener("onScreenChanged",mm);Z.addEventListener("onLogClientVeCreated",km);Z.addEventListener("onLogServerVeCreated",nm);Z.addEventListener("onLogVeClicked",om);Z.addEventListener("onLogVesShown",pm);Z.addEventListener("onVideoDataChange",
lm);a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?im=new Tk(Z):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(hm=new Uk(window.parent,a,b),im=new Ok(Z,hm.j));xg()},void 0);
var qm=Lf(function(){Zl("ol");var a=il.getInstance(),b=!!((ll("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Zd(document.body,"exp-invert-logo"))if(c&&!Zd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Zd(d,"inverted-hdpi")){var e=Xd(d);Yd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Zd(document.body,"inverted-hdpi")&&$d();b!=c&&(b="f"+(Math.floor(119/31)+1),d=ll(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());cm.h||(cm.h=new cm);a=cm.h;c=16623;var f=void 0===f?{}:f;Object.values(bk).includes(c)||(tj(new U("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.wa?fm(a,c,f):gm(a,c,f)}),rm=Lf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
O("PL_ATT")&&yj.dispose();for(var a=0,b=vg.length;a<b;a++)ug(vg[a]);vg.length=0;og("//static.doubleclick.net/instream/ad_status.js");wg=!1;N("DCLKSTAT",0);Zc(im,hm);Z&&(Z.removeEventListener("onScreenChanged",mm),Z.removeEventListener("onLogClientVeCreated",km),Z.removeEventListener("onLogServerVeCreated",nm),Z.removeEventListener("onLogVeClicked",om),Z.removeEventListener("onLogVesShown",pm),Z.removeEventListener("onVideoDataChange",lm),Z.destroy());jm={}});
window.addEventListener?(window.addEventListener("load",qm),window.addEventListener("unload",rm)):window.attachEvent&&(window.attachEvent("onload",qm),window.attachEvent("onunload",rm));Ta("yt.abuse.player.botguardInitialized",y("yt.abuse.player.botguardInitialized")||zj);Ta("yt.abuse.player.invokeBotguard",y("yt.abuse.player.invokeBotguard")||Aj);Ta("yt.abuse.dclkstatus.checkDclkStatus",y("yt.abuse.dclkstatus.checkDclkStatus")||yg);
Ta("yt.player.exports.navigate",y("yt.player.exports.navigate")||Qj);Ta("yt.util.activity.init",y("yt.util.activity.init")||Lg);Ta("yt.util.activity.getTimeSinceActive",y("yt.util.activity.getTimeSinceActive")||Og);Ta("yt.util.activity.setTimestamp",y("yt.util.activity.setTimestamp")||Mg);}).call(this);
