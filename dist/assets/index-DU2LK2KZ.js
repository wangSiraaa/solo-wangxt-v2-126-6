var Bx=Object.defineProperty;var Hx=(t,e,n)=>e in t?Bx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ze=(t,e,n)=>Hx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tv={exports:{}},Lu={},nv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),qx=Symbol.for("react.context"),Yx=Symbol.for("react.forward_ref"),Kx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Jx=Symbol.for("react.lazy"),om=Symbol.iterator;function Qx(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rv=Object.assign,sv={};function zo(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||iv}zo.prototype.isReactComponent={};zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ov(){}ov.prototype=zo.prototype;function Uh(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||iv}var Fh=Uh.prototype=new ov;Fh.constructor=Uh;rv(Fh,zo.prototype);Fh.isPureReactComponent=!0;var am=Array.isArray,av=Object.prototype.hasOwnProperty,Oh={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)av.call(e,i)&&!lv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ol,type:t,key:s,ref:o,props:r,_owner:Oh.current}}function e3(t,e){return{$$typeof:ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ol}function t3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?t3(""+t.key):e.toString(36)}function vc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ol:case Gx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+af(o,0):i,am(r)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),vc(r,e,n,"",function(c){return c})):r!=null&&(zh(r)&&(r=e3(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",am(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+af(s,a);o+=vc(s,e,n,l,r)}else if(l=Qx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+af(s,a++),o+=vc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gl(t,e,n){if(t==null)return t;var i=[],r=0;return vc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function n3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},_c={transition:null},i3={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:_c,ReactCurrentOwner:Oh};function uv(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:gl,forEach:function(t,e,n){gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gl(t,function(){e++}),e},toArray:function(t){return gl(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=zo;Xe.Fragment=Wx;Xe.Profiler=Xx;Xe.PureComponent=Uh;Xe.StrictMode=jx;Xe.Suspense=Kx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i3;Xe.act=uv;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)av.call(e,l)&&!lv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ol,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$x,_context:t},t.Consumer=t};Xe.createElement=cv;Xe.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Yx,render:t}};Xe.isValidElement=zh;Xe.lazy=function(t){return{$$typeof:Jx,_payload:{_status:-1,_result:t},_init:n3}};Xe.memo=function(t,e){return{$$typeof:Zx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=_c.transition;_c.transition={};try{t()}finally{_c.transition=e}};Xe.unstable_act=uv;Xe.useCallback=function(t,e){return un.current.useCallback(t,e)};Xe.useContext=function(t){return un.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return un.current.useEffect(t,e)};Xe.useId=function(){return un.current.useId()};Xe.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return un.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Xe.useRef=function(t){return un.current.useRef(t)};Xe.useState=function(t){return un.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return un.current.useTransition()};Xe.version="18.3.1";nv.exports=Xe;var Be=nv.exports;const r3=Vx(Be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s3=Be,o3=Symbol.for("react.element"),a3=Symbol.for("react.fragment"),l3=Object.prototype.hasOwnProperty,c3=s3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u3={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)l3.call(e,i)&&!u3.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o3,type:t,key:s,ref:o,props:r,_owner:c3.current}}Lu.Fragment=a3;Lu.jsx=fv;Lu.jsxs=fv;tv.exports=Lu;var L=tv.exports,E0={},dv={exports:{}},Ln={},hv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var $=D.length;D.push(q);e:for(;0<$;){var ne=$-1>>>1,ye=D[ne];if(0<r(ye,q))D[ne]=q,D[$]=ye,$=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],$=D.pop();if($!==q){D[0]=$;e:for(var ne=0,ye=D.length,Ne=ye>>>1;ne<Ne;){var Y=2*(ne+1)-1,ee=D[Y],ce=Y+1,fe=D[ce];if(0>r(ee,$))ce<ye&&0>r(fe,ee)?(D[ne]=fe,D[ce]=$,ne=ce):(D[ne]=ee,D[Y]=$,ne=Y);else if(ce<ye&&0>r(fe,$))D[ne]=fe,D[ce]=$,ne=ce;else break e}}return q}function r(D,q){var $=D.sortIndex-q.sortIndex;return $!==0?$:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=D)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(D){if(x=!1,v(D),!m)if(n(l)!==null)m=!0,I(C);else{var q=n(c);q!==null&&K(S,q.startTime-D)}}function C(D,q){m=!1,x&&(x=!1,d(P),P=-1),p=!0;var $=h;try{for(v(q),f=n(l);f!==null&&(!(f.expirationTime>q)||D&&!M());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ye=ne(f.expirationTime<=q);q=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&i(l),v(q)}else i(l);f=n(l)}if(f!==null)var Ne=!0;else{var Y=n(c);Y!==null&&K(S,Y.startTime-q),Ne=!1}return Ne}finally{f=null,h=$,p=!1}}var A=!1,T=null,P=-1,W=5,y=-1;function M(){return!(t.unstable_now()-y<W)}function N(){if(T!==null){var D=t.unstable_now();y=D;var q=!0;try{q=T(!0,D)}finally{q?F():(A=!1,T=null)}}else A=!1}var F;if(typeof _=="function")F=function(){_(N)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=N,F=function(){U.postMessage(null)}}else F=function(){g(N,0)};function I(D){T=D,A||(A=!0,F())}function K(D,q){P=g(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,I(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var $=h;h=q;try{return D()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=h;h=D;try{return q()}finally{h=$}},t.unstable_scheduleCallback=function(D,q,$){var ne=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,D={id:u++,callback:q,priorityLevel:D,startTime:$,expirationTime:ye,sortIndex:-1},$>ne?(D.sortIndex=$,e(c,D),n(l)===null&&D===n(c)&&(x?(d(P),P=-1):x=!0,K(S,$-ne))):(D.sortIndex=ye,e(l,D),m||p||(m=!0,I(C))),D},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(D){var q=h;return function(){var $=h;h=q;try{return D.apply(this,arguments)}finally{h=$}}}})(pv);hv.exports=pv;var f3=hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d3=Be,bn=f3;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,Ia={};function _s(t,e){yo(t,e),yo(t+"Capture",e)}function yo(t,e){for(Ia[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w0=Object.prototype.hasOwnProperty,h3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},um={};function p3(t){return w0.call(um,t)?!0:w0.call(cm,t)?!1:h3.test(t)?um[t]=!0:(cm[t]=!0,!1)}function m3(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g3(t,e,n,i){if(e===null||typeof e>"u"||m3(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kh=/[\-:]([a-z])/g;function Bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kh,Bh);Xt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kh,Bh);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kh,Bh);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hh(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g3(e,n,r,i)&&(n=null),i||r===null?p3(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=d3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),js=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),Vh=Symbol.for("react.strict_mode"),T0=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),A0=Symbol.for("react.suspense"),R0=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,lf;function ca(t){if(lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lf=e&&e[1]||""}return`
`+lf+t}var cf=!1;function uf(t,e){if(!t||cf)return"";cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function v3(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=uf(t.type,!1),t;case 11:return t=uf(t.type.render,!1),t;case 1:return t=uf(t.type,!0),t;default:return""}}function C0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case js:return"Portal";case T0:return"Profiler";case Vh:return"StrictMode";case A0:return"Suspense";case R0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:C0(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return C0(t(e))}catch{}}return null}function _3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return C0(e);case 8:return e===Vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x3(t){var e=xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=x3(t))}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function P0(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sv(t,e){e=e.checked,e!=null&&Hh(t,"checked",e,!1)}function b0(t,e){Sv(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?D0(t,e.type,n):e.hasOwnProperty("defaultValue")&&D0(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function D0(t,e,n){(e!=="number"||Bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function co(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function L0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ua(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Mv(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function I0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y3=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){y3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var S3=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function N0(t,e){if(e){if(S3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function U0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F0=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var O0=null,uo=null,fo=null;function gm(t){if(t=cl(t)){if(typeof O0!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Ou(e),O0(t.stateNode,t.type,e))}}function Rv(t){uo?fo?fo.push(t):fo=[t]:uo=t}function Cv(){if(uo){var t=uo,e=fo;if(fo=uo=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function Pv(t,e){return t(e)}function bv(){}var ff=!1;function Dv(t,e,n){if(ff)return t(e,n);ff=!0;try{return Pv(t,e,n)}finally{ff=!1,(uo!==null||fo!==null)&&(bv(),Cv())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var z0=!1;if(Wi)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){z0=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{z0=!1}function M3(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Sa=!1,Hc=null,Vc=!1,k0=null,E3={onError:function(t){Sa=!0,Hc=t}};function w3(t,e,n,i,r,s,o,a,l){Sa=!1,Hc=null,M3.apply(E3,arguments)}function T3(t,e,n,i,r,s,o,a,l){if(w3.apply(this,arguments),Sa){if(Sa){var c=Hc;Sa=!1,Hc=null}else throw Error(re(198));Vc||(Vc=!0,k0=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(xs(t)!==t)throw Error(re(188))}function A3(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vm(r),t;if(s===i)return vm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Iv(t){return t=A3(t),t!==null?Nv(t):null}function Nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=bn.unstable_scheduleCallback,_m=bn.unstable_cancelCallback,R3=bn.unstable_shouldYield,C3=bn.unstable_requestPaint,Rt=bn.unstable_now,P3=bn.unstable_getCurrentPriorityLevel,Xh=bn.unstable_ImmediatePriority,Fv=bn.unstable_UserBlockingPriority,Gc=bn.unstable_NormalPriority,b3=bn.unstable_LowPriority,Ov=bn.unstable_IdlePriority,Iu=null,Ei=null;function D3(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:N3,L3=Math.log,I3=Math.LN2;function N3(t){return t>>>=0,t===0?32:31-(L3(t)/I3|0)|0}var yl=64,Sl=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=n&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function U3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F3(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=U3(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function B0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zv(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function O3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function kv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bv,qh,Hv,Vv,Gv,H0=!1,Ml=[],vr=null,_r=null,xr=null,Fa=new Map,Oa=new Map,ur=[],z3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function Xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cl(e),e!==null&&qh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k3(t,e,n,i,r){switch(e){case"focusin":return vr=Xo(vr,t,e,n,i,r),!0;case"dragenter":return _r=Xo(_r,t,e,n,i,r),!0;case"mouseover":return xr=Xo(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fa.set(s,Xo(Fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oa.set(s,Xo(Oa.get(s)||null,t,e,n,i,r)),!0}return!1}function Wv(t){var e=Zr(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){Hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=V0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);F0=i,n.target.dispatchEvent(i),F0=null}else return e=cl(n),e!==null&&qh(e),t.blockedOn=n,!1;e.shift()}return!0}function ym(t,e,n){xc(t)&&n.delete(e)}function B3(){H0=!1,vr!==null&&xc(vr)&&(vr=null),_r!==null&&xc(_r)&&(_r=null),xr!==null&&xc(xr)&&(xr=null),Fa.forEach(ym),Oa.forEach(ym)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,H0||(H0=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,B3)))}function za(t){function e(r){return $o(r,t)}if(0<Ml.length){$o(Ml[0],t);for(var n=1;n<Ml.length;n++){var i=Ml[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&$o(vr,t),_r!==null&&$o(_r,t),xr!==null&&$o(xr,t),Fa.forEach(e),Oa.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Wv(n),n.blockedOn===null&&ur.shift()}var ho=Zi.ReactCurrentBatchConfig,jc=!0;function H3(t,e,n,i){var r=lt,s=ho.transition;ho.transition=null;try{lt=1,Yh(t,e,n,i)}finally{lt=r,ho.transition=s}}function V3(t,e,n,i){var r=lt,s=ho.transition;ho.transition=null;try{lt=4,Yh(t,e,n,i)}finally{lt=r,ho.transition=s}}function Yh(t,e,n,i){if(jc){var r=V0(t,e,n,i);if(r===null)Mf(t,e,i,Xc,n),xm(t,i);else if(k3(r,t,e,n,i))i.stopPropagation();else if(xm(t,i),e&4&&-1<z3.indexOf(t)){for(;r!==null;){var s=cl(r);if(s!==null&&Bv(s),s=V0(t,e,n,i),s===null&&Mf(t,e,i,Xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mf(t,e,i,null,n)}}var Xc=null;function V0(t,e,n,i){if(Xc=null,t=jh(i),t=Zr(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P3()){case Xh:return 1;case Fv:return 4;case Gc:case b3:return 16;case Ov:return 536870912;default:return 16}default:return 16}}var hr=null,Kh=null,yc=null;function Xv(){if(yc)return yc;var t,e=Kh,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return yc=r.slice(t,1<i?1-i:void 0)}function Sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Sm(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Sm,this.isPropagationStopped=Sm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=In(ko),ll=Et({},ko,{view:0,detail:0}),G3=In(ll),hf,pf,qo,Nu=Et({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(hf=t.screenX-qo.screenX,pf=t.screenY-qo.screenY):pf=hf=0,qo=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),Mm=In(Nu),W3=Et({},Nu,{dataTransfer:0}),j3=In(W3),X3=Et({},ll,{relatedTarget:0}),mf=In(X3),$3=Et({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),q3=In($3),Y3=Et({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K3=In(Y3),Z3=Et({},ko,{data:0}),Em=In(Z3),J3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ey[t])?!!e[t]:!1}function Jh(){return ty}var ny=Et({},ll,{key:function(t){if(t.key){var e=J3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?Sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iy=In(ny),ry=Et({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=In(ry),sy=Et({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),oy=In(sy),ay=Et({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=In(ay),cy=Et({},Nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=In(cy),fy=[9,13,27,32],Qh=Wi&&"CompositionEvent"in window,Ma=null;Wi&&"documentMode"in document&&(Ma=document.documentMode);var dy=Wi&&"TextEvent"in window&&!Ma,$v=Wi&&(!Qh||Ma&&8<Ma&&11>=Ma),Tm=" ",Am=!1;function qv(t,e){switch(t){case"keyup":return fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function hy(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(Am=!0,Tm);case"textInput":return t=e.data,t===Tm&&Am?null:t;default:return null}}function py(t,e){if($s)return t==="compositionend"||!Qh&&qv(t,e)?(t=Xv(),yc=Kh=hr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $v&&e.locale!=="ko"?null:e.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!my[t.type]:e==="textarea"}function Kv(t,e,n,i){Rv(i),e=$c(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,ka=null;function gy(t){a_(t,0)}function Uu(t){var e=Ks(t);if(yv(e))return t}function vy(t,e){if(t==="change")return e}var Zv=!1;if(Wi){var gf;if(Wi){var vf="oninput"in document;if(!vf){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),vf=typeof Cm.oninput=="function"}gf=vf}else gf=!1;Zv=gf&&(!document.documentMode||9<document.documentMode)}function Pm(){Ea&&(Ea.detachEvent("onpropertychange",Jv),ka=Ea=null)}function Jv(t){if(t.propertyName==="value"&&Uu(ka)){var e=[];Kv(e,ka,t,jh(t)),Dv(gy,e)}}function _y(t,e,n){t==="focusin"?(Pm(),Ea=e,ka=n,Ea.attachEvent("onpropertychange",Jv)):t==="focusout"&&Pm()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(ka)}function yy(t,e){if(t==="click")return Uu(e)}function Sy(t,e){if(t==="input"||t==="change")return Uu(e)}function My(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:My;function Ba(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!w0.call(e,r)||!di(t[r],e[r]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=bm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function Qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bc(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ey(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qv(n.ownerDocument.documentElement,n)){if(i!==null&&ep(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dm(n,s);var o=Dm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wy=Wi&&"documentMode"in document&&11>=document.documentMode,qs=null,G0=null,wa=null,W0=!1;function Lm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;W0||qs==null||qs!==Bc(i)||(i=qs,"selectionStart"in i&&ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&Ba(wa,i)||(wa=i,i=$c(G0,"onSelect"),0<i.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qs)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},_f={},t_={};Wi&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Fu(t){if(_f[t])return _f[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return _f[t]=e[n];return t}var n_=Fu("animationend"),i_=Fu("animationiteration"),r_=Fu("animationstart"),s_=Fu("transitionend"),o_=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){o_.set(t,e),_s(e,[t])}for(var xf=0;xf<Im.length;xf++){var yf=Im[xf],Ty=yf.toLowerCase(),Ay=yf[0].toUpperCase()+yf.slice(1);Dr(Ty,"on"+Ay)}Dr(n_,"onAnimationEnd");Dr(i_,"onAnimationIteration");Dr(r_,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(s_,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,T3(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nm(r,a,c),s=l}}}if(Vc)throw t=k0,Vc=!1,k0=null,t}function pt(t,e){var n=e[Y0];n===void 0&&(n=e[Y0]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function Sf(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[Tl]){t[Tl]=!0,mv.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||Sf(n,!1,t),Sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Sf("selectionchange",!1,e))}}function l_(t,e,n,i){switch(jv(e)){case 1:var r=H3;break;case 4:r=V3;break;default:r=Yh}n=r.bind(null,e,n,t),r=void 0,!z0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Dv(function(){var c=s,u=jh(n),f=[];e:{var h=o_.get(t);if(h!==void 0){var p=Zh,m=t;switch(t){case"keypress":if(Sc(n)===0)break e;case"keydown":case"keyup":p=iy;break;case"focusin":m="focus",p=mf;break;case"focusout":m="blur",p=mf;break;case"beforeblur":case"afterblur":p=mf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=j3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oy;break;case n_:case i_:case r_:p=q3;break;case s_:p=ly;break;case"scroll":p=G3;break;case"wheel":p=uy;break;case"copy":case"cut":case"paste":p=K3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wm}var x=(e&4)!==0,g=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=Ua(_,d),S!=null&&x.push(Va(_,S,v)))),g)break;_=_.return}0<x.length&&(h=new p(h,m,null,n,u),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==F0&&(m=n.relatedTarget||n.fromElement)&&(Zr(m)||m[ji]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Zr(m):null,m!==null&&(g=xs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=Mm,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=wm,S="onPointerLeave",d="onPointerEnter",_="pointer"),g=p==null?h:Ks(p),v=m==null?h:Ks(m),h=new x(S,_+"leave",p,n,u),h.target=g,h.relatedTarget=v,S=null,Zr(u)===c&&(x=new x(d,_+"enter",m,n,u),x.target=v,x.relatedTarget=g,S=x),g=S,p&&m)t:{for(x=p,d=m,_=0,v=x;v;v=Ms(v))_++;for(v=0,S=d;S;S=Ms(S))v++;for(;0<_-v;)x=Ms(x),_--;for(;0<v-_;)d=Ms(d),v--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ms(x),d=Ms(d)}x=null}else x=null;p!==null&&Um(f,h,p,x,!1),m!==null&&g!==null&&Um(f,g,m,x,!0)}}e:{if(h=c?Ks(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=vy;else if(Rm(h))if(Zv)C=Sy;else{C=xy;var A=_y}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=yy);if(C&&(C=C(t,c))){Kv(f,C,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&D0(h,"number",h.value)}switch(A=c?Ks(c):window,t){case"focusin":(Rm(A)||A.contentEditable==="true")&&(qs=A,G0=c,wa=null);break;case"focusout":wa=G0=qs=null;break;case"mousedown":W0=!0;break;case"contextmenu":case"mouseup":case"dragend":W0=!1,Lm(f,n,u);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Lm(f,n,u)}var T;if(Qh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $s?qv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($v&&n.locale!=="ko"&&($s||P!=="onCompositionStart"?P==="onCompositionEnd"&&$s&&(T=Xv()):(hr=u,Kh="value"in hr?hr.value:hr.textContent,$s=!0)),A=$c(c,P),0<A.length&&(P=new Em(P,t,null,n,u),f.push({event:P,listeners:A}),T?P.data=T:(T=Yv(n),T!==null&&(P.data=T)))),(T=dy?hy(t,n):py(t,n))&&(c=$c(c,"onBeforeInput"),0<c.length&&(u=new Em("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}a_(f,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ua(t,n),s!=null&&i.unshift(Va(t,s,r)),s=Ua(t,e),s!=null&&i.push(Va(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Um(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ua(n,s),l!=null&&o.unshift(Va(n,l,a))):r||(l=Ua(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cy=/\r\n?/g,Py=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(Cy,`
`).replace(Py,"")}function Al(t,e,n){if(e=Fm(e),Fm(t)!==e&&n)throw Error(re(425))}function qc(){}var j0=null,X0=null;function $0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var q0=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(t){return Om.resolve(null).then(t).catch(Ly)}:q0;function Ly(t){setTimeout(function(){throw t})}function Ef(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);za(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),vi="__reactFiber$"+Bo,Ga="__reactProps$"+Bo,ji="__reactContainer$"+Bo,Y0="__reactEvents$"+Bo,Iy="__reactListeners$"+Bo,Ny="__reactHandles$"+Bo;function Zr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zm(t);t!==null;){if(n=t[vi])return n;t=zm(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[vi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Ou(t){return t[Ga]||null}var K0=[],Zs=-1;function Lr(t){return{current:t}}function gt(t){0>Zs||(t.current=K0[Zs],K0[Zs]=null,Zs--)}function dt(t,e){Zs++,K0[Zs]=t.current,t.current=e}var Cr={},en=Lr(Cr),gn=Lr(!1),os=Cr;function So(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Yc(){gt(gn),gt(en)}function km(t,e,n){if(en.current!==Cr)throw Error(re(168));dt(en,e),dt(gn,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,_3(t)||"Unknown",r));return Et({},n,i)}function Kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,os=en.current,dt(en,t),dt(gn,gn.current),!0}function Bm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=c_(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,gt(gn),gt(en),dt(en,t)):gt(gn),dt(gn,n)}var Ui=null,zu=!1,wf=!1;function u_(t){Ui===null?Ui=[t]:Ui.push(t)}function Uy(t){zu=!0,u_(t)}function Ir(){if(!wf&&Ui!==null){wf=!0;var t=0,e=lt;try{var n=Ui;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,zu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),Uv(Xh,Ir),r}finally{lt=e,wf=!1}}return null}var Js=[],Qs=0,Zc=null,Jc=0,On=[],zn=0,as=null,Oi=1,zi="";function Gr(t,e){Js[Qs++]=Jc,Js[Qs++]=Zc,Zc=t,Jc=e}function f_(t,e,n){On[zn++]=Oi,On[zn++]=zi,On[zn++]=as,as=t;var i=Oi;t=zi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ui(e)+r|n<<r|i,zi=s+t}else Oi=1<<s|n<<r|i,zi=t}function tp(t){t.return!==null&&(Gr(t,1),f_(t,1,0))}function np(t){for(;t===Zc;)Zc=Js[--Qs],Js[Qs]=null,Jc=Js[--Qs],Js[Qs]=null;for(;t===as;)as=On[--zn],On[zn]=null,zi=On[--zn],On[zn]=null,Oi=On[--zn],On[zn]=null}var Pn=null,Tn=null,_t=!1,oi=null;function d_(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Tn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Oi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Tn=null,!0):!1;default:return!1}}function Z0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function J0(t){if(_t){var e=Tn;if(e){var n=e;if(!Hm(t,e)){if(Z0(t))throw Error(re(418));e=yr(n.nextSibling);var i=Pn;e&&Hm(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(Z0(t))throw Error(re(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function Vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Rl(t){if(t!==Pn)return!1;if(!_t)return Vm(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$0(t.type,t.memoizedProps)),e&&(e=Tn)){if(Z0(t))throw h_(),Error(re(418));for(;e;)d_(t,e),e=yr(e.nextSibling)}if(Vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=Pn?yr(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=Tn;t;)t=yr(t.nextSibling)}function Mo(){Tn=Pn=null,_t=!1}function ip(t){oi===null?oi=[t]:oi.push(t)}var Fy=Zi.ReactCurrentBatchConfig;function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gm(t){var e=t._init;return e(t._payload)}function p_(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=wr(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,S){return _===null||_.tag!==6?(_=Df(v,d.mode,S),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,S){var C=v.type;return C===Xs?u(d,_,v.props.children,S,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&Gm(C)===_.type)?(S=r(_,v.props),S.ref=Yo(d,_,v),S.return=d,S):(S=Cc(v.type,v.key,v.props,null,d.mode,S),S.ref=Yo(d,_,v),S.return=d,S)}function c(d,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Lf(v,d.mode,S),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function u(d,_,v,S,C){return _===null||_.tag!==7?(_=rs(v,d.mode,S,C),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Df(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vl:return v=Cc(_.type,_.key,_.props,null,d.mode,v),v.ref=Yo(d,null,_),v.return=d,v;case js:return _=Lf(_,d.mode,v),_.return=d,_;case lr:var S=_._init;return f(d,S(_._payload),v)}if(ua(_)||Wo(_))return _=rs(_,d.mode,v,null),_.return=d,_;Cl(d,_)}return null}function h(d,_,v,S){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vl:return v.key===C?l(d,_,v,S):null;case js:return v.key===C?c(d,_,v,S):null;case lr:return C=v._init,h(d,_,C(v._payload),S)}if(ua(v)||Wo(v))return C!==null?null:u(d,_,v,S,null);Cl(d,v)}return null}function p(d,_,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,a(_,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vl:return d=d.get(S.key===null?v:S.key)||null,l(_,d,S,C);case js:return d=d.get(S.key===null?v:S.key)||null,c(_,d,S,C);case lr:var A=S._init;return p(d,_,v,A(S._payload),C)}if(ua(S)||Wo(S))return d=d.get(v)||null,u(_,d,S,C,null);Cl(_,S)}return null}function m(d,_,v,S){for(var C=null,A=null,T=_,P=_=0,W=null;T!==null&&P<v.length;P++){T.index>P?(W=T,T=null):W=T.sibling;var y=h(d,T,v[P],S);if(y===null){T===null&&(T=W);break}t&&T&&y.alternate===null&&e(d,T),_=s(y,_,P),A===null?C=y:A.sibling=y,A=y,T=W}if(P===v.length)return n(d,T),_t&&Gr(d,P),C;if(T===null){for(;P<v.length;P++)T=f(d,v[P],S),T!==null&&(_=s(T,_,P),A===null?C=T:A.sibling=T,A=T);return _t&&Gr(d,P),C}for(T=i(d,T);P<v.length;P++)W=p(T,d,P,v[P],S),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?P:W.key),_=s(W,_,P),A===null?C=W:A.sibling=W,A=W);return t&&T.forEach(function(M){return e(d,M)}),_t&&Gr(d,P),C}function x(d,_,v,S){var C=Wo(v);if(typeof C!="function")throw Error(re(150));if(v=C.call(v),v==null)throw Error(re(151));for(var A=C=null,T=_,P=_=0,W=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(W=T,T=null):W=T.sibling;var M=h(d,T,y.value,S);if(M===null){T===null&&(T=W);break}t&&T&&M.alternate===null&&e(d,T),_=s(M,_,P),A===null?C=M:A.sibling=M,A=M,T=W}if(y.done)return n(d,T),_t&&Gr(d,P),C;if(T===null){for(;!y.done;P++,y=v.next())y=f(d,y.value,S),y!==null&&(_=s(y,_,P),A===null?C=y:A.sibling=y,A=y);return _t&&Gr(d,P),C}for(T=i(d,T);!y.done;P++,y=v.next())y=p(T,d,P,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),_=s(y,_,P),A===null?C=y:A.sibling=y,A=y);return t&&T.forEach(function(N){return e(d,N)}),_t&&Gr(d,P),C}function g(d,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case vl:e:{for(var C=v.key,A=_;A!==null;){if(A.key===C){if(C=v.type,C===Xs){if(A.tag===7){n(d,A.sibling),_=r(A,v.props.children),_.return=d,d=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&Gm(C)===A.type){n(d,A.sibling),_=r(A,v.props),_.ref=Yo(d,A,v),_.return=d,d=_;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===Xs?(_=rs(v.props.children,d.mode,S,v.key),_.return=d,d=_):(S=Cc(v.type,v.key,v.props,null,d.mode,S),S.ref=Yo(d,_,v),S.return=d,d=S)}return o(d);case js:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Lf(v,d.mode,S),_.return=d,d=_}return o(d);case lr:return A=v._init,g(d,_,A(v._payload),S)}if(ua(v))return m(d,_,v,S);if(Wo(v))return x(d,_,v,S);Cl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=Df(v,d.mode,S),_.return=d,d=_),o(d)):n(d,_)}return g}var Eo=p_(!0),m_=p_(!1),Qc=Lr(null),eu=null,eo=null,rp=null;function sp(){rp=eo=eu=null}function op(t){var e=Qc.current;gt(Qc),t._currentValue=e}function Q0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function po(t,e){eu=t,rp=eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(rp!==t)if(t={context:t,memoizedValue:e,next:null},eo===null){if(eu===null)throw Error(re(308));eo=t,eu.dependencies={lanes:0,firstContext:t}}else eo=eo.next=t;return e}var Jr=null;function ap(t){Jr===null?Jr=[t]:Jr.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ap(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,ap(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$h(t,n)}}function Wm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(h=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){f=m.call(p,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,h=typeof m=="function"?m.call(p,f,h):m,h==null)break e;f=Et({},f,h);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=f}}function jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ul={},wi=Lr(ul),Wa=Lr(ul),ja=Lr(ul);function Qr(t){if(t===ul)throw Error(re(174));return t}function cp(t,e){switch(dt(ja,e),dt(Wa,t),dt(wi,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:I0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=I0(e,t)}gt(wi),dt(wi,e)}function wo(){gt(wi),gt(Wa),gt(ja)}function __(t){Qr(ja.current);var e=Qr(wi.current),n=I0(e,t.type);e!==n&&(dt(Wa,t),dt(wi,n))}function up(t){Wa.current===t&&(gt(wi),gt(Wa))}var yt=Lr(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tf=[];function fp(){for(var t=0;t<Tf.length;t++)Tf[t]._workInProgressVersionPrimary=null;Tf.length=0}var Ec=Zi.ReactCurrentDispatcher,Af=Zi.ReactCurrentBatchConfig,ls=0,Mt=null,Nt=null,kt=null,iu=!1,Ta=!1,Xa=0,Oy=0;function $t(){throw Error(re(321))}function dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function hp(t,e,n,i,r,s){if(ls=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?Hy:Vy,t=n(i,r),Ta){s=0;do{if(Ta=!1,Xa=0,25<=s)throw Error(re(301));s+=1,kt=Nt=null,e.updateQueue=null,Ec.current=Gy,t=n(i,r)}while(Ta)}if(Ec.current=ru,e=Nt!==null&&Nt.next!==null,ls=0,kt=Nt=Mt=null,iu=!1,e)throw Error(re(300));return t}function pp(){var t=Xa!==0;return Xa=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Mt.memoizedState=kt=t:kt=kt.next=t,kt}function Yn(){if(Nt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=kt===null?Mt.memoizedState:kt.next;if(e!==null)kt=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},kt===null?Mt.memoizedState=kt=t:kt=kt.next=t}return kt}function $a(t,e){return typeof e=="function"?e(t):e}function Rf(t){var e=Yn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ls&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=u,cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cf(t){var e=Yn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=Mt,i=Yn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,mp(E_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,qa(9,M_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(re(349));ls&30||S_(n,e,r)}return r}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M_(t,e,n,i){e.value=n,e.getSnapshot=i,w_(e)&&T_(t)}function E_(t,e,n){return n(function(){w_(e)&&T_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function T_(t){var e=Xi(t,1);e!==null&&fi(e,t,1,-1)}function Xm(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=By.bind(null,Mt,t),[e.memoizedState,t]}function qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return Yn().memoizedState}function wc(t,e,n,i){var r=pi();Mt.flags|=t,r.memoizedState=qa(1|e,n,void 0,i===void 0?null:i)}function ku(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&dp(i,o.deps)){r.memoizedState=qa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=qa(1|e,n,s,i)}function $m(t,e){return wc(8390656,8,t,e)}function mp(t,e){return ku(2048,8,t,e)}function R_(t,e){return ku(4,2,t,e)}function C_(t,e){return ku(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b_(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,P_.bind(null,e,t),n)}function gp(){}function D_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function I_(t,e,n){return ls&21?(di(n,e)||(n=zv(),Mt.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function zy(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Af.transition;Af.transition={};try{t(!1),e()}finally{lt=n,Af.transition=i}}function N_(){return Yn().memoizedState}function ky(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=an();fi(n,t,i,r),O_(n,e,i)}}function By(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,ap(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=an(),fi(n,t,i,r),O_(n,e,i))}}function U_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function F_(t,e){Ta=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$h(t,n)}}var ru={readContext:qn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Hy={readContext:qn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:$m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wc(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return wc(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ky.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:gp,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=zy.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=pi();if(_t){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Bt===null)throw Error(re(349));ls&30||S_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$m(E_.bind(null,i,s,t),[t]),i.flags|=2048,qa(9,M_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Bt.identifierPrefix;if(_t){var n=zi,i=Oi;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vy={readContext:qn,useCallback:D_,useContext:qn,useEffect:mp,useImperativeHandle:b_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:L_,useReducer:Rf,useRef:A_,useState:function(){return Rf($a)},useDebugValue:gp,useDeferredValue:function(t){var e=Yn();return I_(e,Nt.memoizedState,t)},useTransition:function(){var t=Rf($a)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:N_,unstable_isNewReconciler:!1},Gy={readContext:qn,useCallback:D_,useContext:qn,useEffect:mp,useImperativeHandle:b_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:L_,useReducer:Cf,useRef:A_,useState:function(){return Cf($a)},useDebugValue:gp,useDeferredValue:function(t){var e=Yn();return Nt===null?e.memoizedState=t:I_(e,Nt.memoizedState,t)},useTransition:function(){var t=Cf($a)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:N_,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Er(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(fi(e,t,r,i),Mc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Er(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(fi(e,t,r,i),Mc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Er(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(fi(e,t,i,n),Mc(e,t,i))}};function qm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function z_(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=vn(e)?os:en.current,i=e.contextTypes,s=(i=i!=null)?So(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=vn(e)?os:en.current,r.context=So(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),tu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function To(t,e){try{var n="",i=e;do n+=v3(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function k_(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ou||(ou=!0,dd=i),nd(t,e)},n}function B_(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Km(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rS.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var jy=Zi.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?m_(e,null,n,i):Eo(e,t.child,n,i)}function Qm(t,e,n,i,r){n=n.render;var s=e.ref;return po(e,r),i=hp(t,e,n,i,s,r),n=pp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(_t&&n&&tp(e),e.flags|=1,rn(t,e,i,r),e.child)}function eg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,i,r)):(t=Cc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return id(t,e,n,i,r)}function V_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(no,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(no,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(no,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(no,wn),wn|=i;return rn(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=vn(n)?os:en.current;return s=So(e,s),po(e,r),n=hp(t,e,n,i,s,r),i=pp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(_t&&i&&tp(e),e.flags|=1,rn(t,e,n,r),e.child)}function tg(t,e,n,i,r){if(vn(n)){var s=!0;Kc(e)}else s=!1;if(po(e,r),e.stateNode===null)Tc(t,e),z_(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=vn(n)?os:en.current,c=So(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ym(e,o,i,c),cr=!1;var h=e.memoizedState;o.state=h,tu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||cr?(typeof u=="function"&&(ed(e,n,u,i),l=e.memoizedState),(a=cr||qm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=vn(n)?os:en.current,l=So(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Ym(e,o,i,l),cr=!1,h=e.memoizedState,o.state=h,tu(e,i,o,r);var m=e.memoizedState;a!==f||h!==m||gn.current||cr?(typeof p=="function"&&(ed(e,n,p,i),m=e.memoizedState),(c=cr||qm(e,n,c,i,h,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bm(e,n,!1),$i(t,e,s);i=e.stateNode,jy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&Bm(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&km(t,e.context,!1),cp(t,e.containerInfo)}function ng(t,e,n,i,r){return Mo(),ip(r),e.flags|=256,rn(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return J0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=od(n),e.memoizedState=sd,t):vp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Xy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function vp(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,i){return i!==null&&ip(i),Eo(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pf(Error(re(422))),Pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gu({mode:"visible",children:i.children},r,0,null),s=rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Eo(e,t.child,null,o),e.child.memoizedState=od(o),e.memoizedState=sd,s);if(!(e.mode&1))return Pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Pf(s,i,void 0),Pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),fi(i,t,r,-1))}return Ep(),i=Pf(Error(re(421))),Pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=yr(r.nextSibling),Pn=e,_t=!0,oi=null,t!==null&&(On[zn++]=Oi,On[zn++]=zi,On[zn++]=as,Oi=t.id,zi=t.overflow,as=e),e=vp(e,i.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Q0(t.return,e,n)}function bf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function X_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bf(e,!0,n,null,s);break;case"together":bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $y(t,e,n){switch(e.tag){case 3:W_(e),Mo();break;case 5:__(e);break;case 1:vn(e.type)&&Kc(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Qc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(dt(yt,yt.current&1),t=$i(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return X_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,V_(t,e,n)}return $i(t,e,n)}var $_,ad,q_,Y_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(wi.current);var s=null;switch(n){case"input":r=P0(t,r),i=P0(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=L0(t,r),i=L0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qc)}N0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ko(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qy(t,e,n){var i=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&Yc(),qt(e),null;case 3:return i=e.stateNode,wo(),gt(gn),gt(en),fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(md(oi),oi=null))),ad(t,e),qt(e),null;case 5:up(e);var r=Qr(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return qt(e),null}if(t=Qr(wi.current),Rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)pt(da[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":dm(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":pm(i,s),pt("invalid",i)}N0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,t),r=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":_l(i),hm(i,s,!0);break;case"textarea":_l(i),mm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[Ga]=i,$_(t,e,!1,!1),e.stateNode=t;e:{switch(o=U0(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)pt(da[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":dm(t,i),r=P0(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":pm(t,i),r=L0(t,i),pt("invalid",t);break;default:r=i}N0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Av(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Hh(t,s,l,o))}switch(n){case"input":_l(t),hm(t,i,!1);break;case"textarea":_l(t),mm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?co(t,!!i.multiple,s,!1):i.defaultValue!=null&&co(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Qr(ja.current),Qr(wi.current),Rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Al(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Al(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return qt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&e.mode&1&&!(e.flags&128))h_(),Mo(),e.flags|=98560,s=!1;else if(s=Rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[vi]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else oi!==null&&(md(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ut===0&&(Ut=3):Ep())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return wo(),ad(t,e),t===null&&Ha(e.stateNode.containerInfo),qt(e),null;case 10:return op(e.type._context),qt(e),null;case 17:return vn(e.type)&&Yc(),qt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ko(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,Ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Ao&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=nu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return qt(e),null}else 2*Rt()-s.renderingStartTime>Ao&&n!==1073741824&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Yy(t,e){switch(np(e),e.tag){case 1:return vn(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wo(),gt(gn),gt(en),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return up(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return wo(),null;case 10:return op(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var bl=!1,Jt=!1,Ky=typeof WeakSet=="function"?WeakSet:Set,_e=null;function to(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var rg=!1;function Zy(t,e){if(j0=jc,t=e_(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(X0={focusedElem:t,selectionRange:n},jc=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:ri(e.type,x),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return m=rg,rg=!1,m}function Aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[Ga],delete e[Y0],delete e[Iy],delete e[Ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qc));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}var Vt=null,si=!1;function er(t,e,n){for(n=n.child;n!==null;)J_(t,e,n),n=n.sibling}function J_(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:Jt||to(n,e);case 6:var i=Vt,r=si;Vt=null,er(t,e,n),Vt=i,si=r,Vt!==null&&(si?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(si?(t=Vt,n=n.stateNode,t.nodeType===8?Ef(t.parentNode,n):t.nodeType===1&&Ef(t,n),za(t)):Ef(Vt,n.stateNode));break;case 4:i=Vt,r=si,Vt=n.stateNode.containerInfo,si=!0,er(t,e,n),Vt=i,si=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ld(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!Jt&&(to(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,er(t,e,n),Jt=i):er(t,e,n);break;default:er(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ky),e.forEach(function(i){var r=oS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,si=!1;break e;case 3:Vt=a.stateNode.containerInfo,si=!0;break e;case 4:Vt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(Vt===null)throw Error(re(160));J_(s,o,r),Vt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),hi(t),i&4){try{Aa(3,t,t.return),Hu(3,t)}catch(x){Tt(t,t.return,x)}try{Aa(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Jn(e,t),hi(t),i&512&&n!==null&&to(n,n.return);break;case 5:if(Jn(e,t),hi(t),i&512&&n!==null&&to(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sv(r,s),U0(a,o);var c=U0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Av(r,f):u==="dangerouslySetInnerHTML"?wv(r,f):u==="children"?Na(r,f):Hh(r,u,f,c)}switch(a){case"input":b0(r,s);break;case"textarea":Mv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?co(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?co(r,!!s.multiple,s.defaultValue,!0):co(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Jn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Jn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Jn(e,t),hi(t);break;case 13:Jn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yp=Rt())),i&4&&og(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,Jn(e,t),Jt=c):Jn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(f=_e=u;_e!==null;){switch(h=_e,p=h.child,h.tag){case 0:case 11:case 14:case 15:Aa(4,h,h.return);break;case 1:to(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:to(h,h.return);break;case 22:if(h.memoizedState!==null){lg(f);continue}}p!==null?(p.return=h,_e=p):lg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tv("display",o))}catch(x){Tt(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jn(e,t),hi(t),i&4&&og(t);break;case 21:break;default:Jn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=sg(t);fd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sg(t);ud(t,a,o);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jy(t,e,n){_e=t,e2(t)}function e2(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=bl;var c=Jt;if(bl=o,(Jt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?cg(r):l!==null?(l.return=o,_e=l):cg(r);for(;s!==null;)_e=s,e2(s),s=s.sibling;_e=r,bl=a,Jt=c}ag(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):ag(t)}}function ag(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Jt||e.flags&512&&cd(e)}catch(h){Tt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function lg(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function cg(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{cd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{cd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var Qy=Math.ceil,su=Zi.ReactCurrentDispatcher,_p=Zi.ReactCurrentOwner,Xn=Zi.ReactCurrentBatchConfig,Qe=0,Bt=null,Lt=null,Wt=0,wn=0,no=Lr(0),Ut=0,Ya=null,cs=0,Vu=0,xp=0,Ra=null,pn=null,yp=0,Ao=1/0,Ni=null,ou=!1,dd=null,Mr=null,Dl=!1,pr=null,au=0,Ca=0,hd=null,Ac=-1,Rc=0;function an(){return Qe&6?Rt():Ac!==-1?Ac:Ac=Rt()}function Er(t){return t.mode&1?Qe&2&&Wt!==0?Wt&-Wt:Fy.transition!==null?(Rc===0&&(Rc=zv()),Rc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:jv(t.type)),t):1}function fi(t,e,n,i){if(50<Ca)throw Ca=0,hd=null,Error(re(185));al(t,n,i),(!(Qe&2)||t!==Bt)&&(t===Bt&&(!(Qe&2)&&(Vu|=n),Ut===4&&fr(t,Wt)),_n(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ao=Rt()+500,zu&&Ir()))}function _n(t,e){var n=t.callbackNode;F3(t,e);var i=Wc(t,t===Bt?Wt:0);if(i===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?Uy(ug.bind(null,t)):u_(ug.bind(null,t)),Dy(function(){!(Qe&6)&&Ir()}),n=null;else{switch(kv(i)){case 1:n=Xh;break;case 4:n=Fv;break;case 16:n=Gc;break;case 536870912:n=Ov;break;default:n=Gc}n=l2(n,t2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t2(t,e){if(Ac=-1,Rc=0,Qe&6)throw Error(re(327));var n=t.callbackNode;if(mo()&&t.callbackNode!==n)return null;var i=Wc(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lu(t,i);else{e=i;var r=Qe;Qe|=2;var s=i2();(Bt!==t||Wt!==e)&&(Ni=null,Ao=Rt()+500,is(t,e));do try{nS();break}catch(a){n2(t,a)}while(!0);sp(),su.current=s,Qe=r,Lt!==null?e=0:(Bt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=B0(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=Ya,is(t,0),fr(t,i),_n(t,Rt()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!eS(r)&&(e=lu(t,i),e===2&&(s=B0(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=Ya,is(t,0),fr(t,i),_n(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Wr(t,pn,Ni);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=yp+500-Rt(),10<e)){if(Wc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=q0(Wr.bind(null,t,pn,Ni),e);break}Wr(t,pn,Ni);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qy(i/1960))-i,10<i){t.timeoutHandle=q0(Wr.bind(null,t,pn,Ni),i);break}Wr(t,pn,Ni);break;case 5:Wr(t,pn,Ni);break;default:throw Error(re(329))}}}return _n(t,Rt()),t.callbackNode===n?t2.bind(null,t):null}function pd(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=lu(t,e),t!==2&&(e=pn,pn=n,e!==null&&md(e)),t}function md(t){pn===null?pn=t:pn.push.apply(pn,t)}function eS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~xp,e&=~Vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function ug(t){if(Qe&6)throw Error(re(327));mo();var e=Wc(t,0);if(!(e&1))return _n(t,Rt()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var i=B0(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=Ya,is(t,0),fr(t,e),_n(t,Rt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,pn,Ni),_n(t,Rt()),null}function Sp(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ao=Rt()+500,zu&&Ir())}}function us(t){pr!==null&&pr.tag===0&&!(Qe&6)&&mo();var e=Qe;Qe|=1;var n=Xn.transition,i=lt;try{if(Xn.transition=null,lt=1,t)return t()}finally{lt=i,Xn.transition=n,Qe=e,!(Qe&6)&&Ir()}}function Mp(){wn=no.current,gt(no)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,by(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(np(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yc();break;case 3:wo(),gt(gn),gt(en),fp();break;case 5:up(i);break;case 4:wo();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:op(i.type._context);break;case 22:case 23:Mp()}n=n.return}if(Bt=t,Lt=t=wr(t.current,null),Wt=wn=e,Ut=0,Ya=null,xp=Vu=cs=0,pn=Ra=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Jr=null}return t}function n2(t,e){do{var n=Lt;try{if(sp(),Ec.current=ru,iu){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}iu=!1}if(ls=0,kt=Nt=Mt=null,Ta=!1,Xa=0,_p.current=null,n===null||n.return===null){Ut=1,Ya=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Zm(o);if(p!==null){p.flags&=-257,Jm(p,o,a,s,e),p.mode&1&&Km(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){Km(s,c,e),Ep();break e}l=Error(re(426))}}else if(_t&&a.mode&1){var g=Zm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Jm(g,o,a,s,e),ip(To(l,a));break e}}s=l=To(l,a),Ut!==4&&(Ut=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=k_(s,l,e);Wm(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mr===null||!Mr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=B_(s,a,e);Wm(s,S);break e}}s=s.return}while(s!==null)}s2(n)}catch(C){e=C,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function i2(){var t=su.current;return su.current=ru,t===null?ru:t}function Ep(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(cs&268435455)&&!(Vu&268435455)||fr(Bt,Wt)}function lu(t,e){var n=Qe;Qe|=2;var i=i2();(Bt!==t||Wt!==e)&&(Ni=null,is(t,e));do try{tS();break}catch(r){n2(t,r)}while(!0);if(sp(),Qe=n,su.current=i,Lt!==null)throw Error(re(261));return Bt=null,Wt=0,Ut}function tS(){for(;Lt!==null;)r2(Lt)}function nS(){for(;Lt!==null&&!R3();)r2(Lt)}function r2(t){var e=a2(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?s2(t):Lt=e,_p.current=null}function s2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=qy(n,e,wn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Wr(t,e,n){var i=lt,r=Xn.transition;try{Xn.transition=null,lt=1,iS(t,e,n,i)}finally{Xn.transition=r,lt=i}return null}function iS(t,e,n,i){do mo();while(pr!==null);if(Qe&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(O3(t,s),t===Bt&&(Lt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,l2(Gc,function(){return mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=lt;lt=1;var a=Qe;Qe|=4,_p.current=null,Zy(t,n),Q_(n,t),Ey(X0),jc=!!j0,X0=j0=null,t.current=n,Jy(n),C3(),Qe=a,lt=o,Xn.transition=s}else t.current=n;if(Dl&&(Dl=!1,pr=t,au=r),s=t.pendingLanes,s===0&&(Mr=null),D3(n.stateNode),_n(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ou)throw ou=!1,t=dd,dd=null,t;return au&1&&t.tag!==0&&mo(),s=t.pendingLanes,s&1?t===hd?Ca++:(Ca=0,hd=t):Ca=0,Ir(),null}function mo(){if(pr!==null){var t=kv(au),e=Xn.transition,n=lt;try{if(Xn.transition=null,lt=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,au=0,Qe&6)throw Error(re(331));var r=Qe;for(Qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:Aa(8,u,s)}var f=u.child;if(f!==null)f.return=u,_e=f;else for(;_e!==null;){u=_e;var h=u.sibling,p=u.return;if(K_(u),u===c){_e=null;break}if(h!==null){h.return=p,_e=h;break}_e=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hu(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(Qe=r,Ir(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{lt=n,Xn.transition=e}}return!1}function fg(t,e,n){e=To(n,e),e=k_(t,e,1),t=Sr(t,e,1),e=an(),t!==null&&(al(t,1,e),_n(t,e))}function Tt(t,e,n){if(t.tag===3)fg(t,t,n);else for(;e!==null;){if(e.tag===3){fg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=To(n,t),t=B_(e,t,1),e=Sr(e,t,1),t=an(),e!==null&&(al(e,1,t),_n(e,t));break}}e=e.return}}function rS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Rt()-yp?is(t,0):xp|=n),_n(t,e)}function o2(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=an();t=Xi(t,e),t!==null&&(al(t,e,n),_n(t,n))}function sS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o2(t,n)}function oS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),o2(t,n)}var a2;a2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,$y(t,e,n);mn=!!(t.flags&131072)}else mn=!1,_t&&e.flags&1048576&&f_(e,Jc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tc(t,e),t=e.pendingProps;var r=So(e,en.current);po(e,n),r=hp(null,e,i,t,r,n);var s=pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,lp(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&tp(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lS(i),t=ri(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=tg(null,e,i,t,n);break e;case 11:e=Qm(null,e,i,t,n);break e;case 14:e=eg(null,e,i,ri(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),tg(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),tu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=To(Error(re(423)),e),e=ng(t,e,i,n,r);break e}else if(i!==r){r=To(Error(re(424)),e),e=ng(t,e,i,n,r);break e}else for(Tn=yr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,oi=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),i===r){e=$i(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&J0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$0(i,r)?o=null:s!==null&&$0(i,s)&&(e.flags|=32),G_(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&J0(e),null;case 13:return j_(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Eo(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Qm(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Qc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!gn.current){e=$i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Q0(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Q0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,po(e,n),r=qn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),eg(t,e,i,r,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Tc(t,e),e.tag=1,vn(i)?(t=!0,Kc(e)):t=!1,po(e,n),z_(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return X_(t,e,n);case 22:return V_(t,e,n)}throw Error(re(156,e.tag))};function l2(t,e){return Uv(t,e)}function aS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new aS(t,e,n,i)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lS(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===Wh)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return rs(n.children,r,s,e);case Vh:o=8,r|=8;break;case T0:return t=Vn(12,n,e,r|2),t.elementType=T0,t.lanes=s,t;case A0:return t=Vn(13,n,e,r),t.elementType=A0,t.lanes=s,t;case R0:return t=Vn(19,n,e,r),t.elementType=R0,t.lanes=s,t;case _v:return Gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case vv:o=9;break e;case Gh:o=11;break e;case Wh:o=14;break e;case lr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function Gu(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=_v,t.lanes=n,t.stateNode={isHidden:!1},t}function Df(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Lf(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=df(0),this.expirationTimes=df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Tp(t,e,n,i,r,s,o,a,l){return t=new cS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function uS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function c2(t){if(!t)return Cr;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(vn(n))return c_(t,n,e)}return e}function u2(t,e,n,i,r,s,o,a,l){return t=Tp(n,i,!0,t,r,s,o,a,l),t.context=c2(null),n=t.current,i=an(),r=Er(n),s=Vi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,al(t,r,i),_n(t,i),t}function Wu(t,e,n,i){var r=e.current,s=an(),o=Er(r);return n=c2(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(fi(t,r,o,s),Mc(t,r,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function fS(){return null}var f2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rp(t){this._internalRoot=t}ju.prototype.render=Rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Wu(t,e,null,null)};ju.prototype.unmount=Rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){Wu(null,t,null,null)}),e[ji]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&Wv(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hg(){}function dS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cu(o);s.call(c)}}var o=u2(e,i,t,0,null,!1,!1,"",hg);return t._reactRootContainer=o,t[ji]=o.current,Ha(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=cu(l);a.call(c)}}var l=Tp(t,0,!1,null,null,!1,!1,"",hg);return t._reactRootContainer=l,t[ji]=l.current,Ha(t.nodeType===8?t.parentNode:t),us(function(){Wu(e,l,n,i)}),l}function $u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cu(o);a.call(l)}}Wu(e,o,t,r)}else o=dS(n,e,t,r,i);return cu(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&($h(e,n|1),_n(e,Rt()),!(Qe&6)&&(Ao=Rt()+500,Ir()))}break;case 13:us(function(){var i=Xi(t,1);if(i!==null){var r=an();fi(i,t,1,r)}}),Ap(t,1)}};qh=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=an();fi(e,t,134217728,n)}Ap(t,134217728)}};Hv=function(t){if(t.tag===13){var e=Er(t),n=Xi(t,e);if(n!==null){var i=an();fi(n,t,e,i)}Ap(t,e)}};Vv=function(){return lt};Gv=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};O0=function(t,e,n){switch(e){case"input":if(b0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ou(i);if(!r)throw Error(re(90));yv(i),b0(i,r)}}}break;case"textarea":Mv(t,n);break;case"select":e=n.value,e!=null&&co(t,!!n.multiple,e,!1)}};Pv=Sp;bv=us;var hS={usingClientEntryPoint:!1,Events:[cl,Ks,Ou,Rv,Cv,Sp]},Zo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pS={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iv(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Iu=Ll.inject(pS),Ei=Ll}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(re(200));return uS(t,e,null,n)};Ln.createRoot=function(t,e){if(!Cp(t))throw Error(re(299));var n=!1,i="",r=f2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Tp(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,Ha(t.nodeType===8?t.parentNode:t),new Rp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Iv(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return us(t)};Ln.hydrate=function(t,e,n){if(!Xu(e))throw Error(re(200));return $u(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=f2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u2(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,Ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ju(e)};Ln.render=function(t,e,n){if(!Xu(e))throw Error(re(200));return $u(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(re(40));return t._reactRootContainer?(us(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Ln.unstable_batchedUpdates=Sp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return $u(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function d2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d2)}catch(t){console.error(t)}}d2(),dv.exports=Ln;var mS=dv.exports,pg=mS;E0.createRoot=pg.createRoot,E0.hydrateRoot=pg.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="169",gS=0,mg=1,vS=2,h2=1,_S=2,Di=3,Pr=0,ln=1,_i=2,Tr=0,go=1,gg=2,vg=3,_g=4,xS=5,$r=100,yS=101,SS=102,MS=103,ES=104,wS=200,TS=201,AS=202,RS=203,gd=204,vd=205,CS=206,PS=207,bS=208,DS=209,LS=210,IS=211,NS=212,US=213,FS=214,_d=0,xd=1,yd=2,Ro=3,Sd=4,Md=5,Ed=6,wd=7,p2=0,OS=1,zS=2,Ar=0,kS=1,BS=2,HS=3,VS=4,GS=5,WS=6,jS=7,m2=300,Co=301,Po=302,Td=303,Ad=304,qu=306,Rd=1e3,es=1001,Cd=1002,Gn=1003,XS=1004,Il=1005,ai=1006,If=1007,ts=1008,qi=1009,g2=1010,v2=1011,Ka=1012,bp=1013,fs=1014,ki=1015,fl=1016,Dp=1017,Lp=1018,bo=1020,_2=35902,x2=1021,y2=1022,ci=1023,S2=1024,M2=1025,vo=1026,Do=1027,E2=1028,Ip=1029,w2=1030,Np=1031,Up=1033,Pc=33776,bc=33777,Dc=33778,Lc=33779,Pd=35840,bd=35841,Dd=35842,Ld=35843,Id=36196,Nd=37492,Ud=37496,Fd=37808,Od=37809,zd=37810,kd=37811,Bd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,jd=37817,Xd=37818,$d=37819,qd=37820,Yd=37821,Ic=36492,Kd=36494,Zd=36495,T2=36283,Jd=36284,Qd=36285,eh=36286,$S=3200,qS=3201,YS=0,KS=1,dr="",mi="srgb",Nr="srgb-linear",Fp="display-p3",Yu="display-p3-linear",uu="linear",mt="srgb",fu="rec709",du="p3",Es=7680,xg=519,ZS=512,JS=513,QS=514,A2=515,eM=516,tM=517,nM=518,iM=519,th=35044,yg="300 es",Bi=2e3,hu=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const Pa=Math.PI/180,Za=180/Math.PI;function Gi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function Op(t,e){return(t%e+e)%e}function rM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function sM(t,e,n){return t!==e?(n-t)/(e-t):0}function ba(t,e,n){return(1-n)*t+n*e}function oM(t,e,n,i){return ba(t,e,1-Math.exp(-n*i))}function aM(t,e=1){return e-Math.abs(Op(t,e*2)-e)}function lM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function cM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function uM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function fM(t,e){return t+Math.random()*(e-t)}function dM(t){return t*(.5-Math.random())}function hM(t){t!==void 0&&(Sg=t);let e=Sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pM(t){return t*Pa}function mM(t){return t*Za}function gM(t){return(t&t-1)===0&&t!==0}function vM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _M(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mg={DEG2RAD:Pa,RAD2DEG:Za,generateUUID:Gi,clamp:sn,euclideanModulo:Op,mapLinear:rM,inverseLerp:sM,lerp:ba,damp:oM,pingpong:aM,smoothstep:lM,smootherstep:cM,randInt:uM,randFloat:fM,randFloatSpread:dM,seededRandom:hM,degToRad:pM,radToDeg:mM,isPowerOfTwo:gM,ceilPowerOfTwo:vM,floorPowerOfTwo:_M,setQuaternionFromProperEuler:xM,normalize:at,denormalize:li};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],m=i[8],x=r[0],g=r[3],d=r[6],_=r[1],v=r[4],S=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*g+a*v+l*A,s[6]=o*d+a*S+l*T,s[1]=c*x+u*_+f*C,s[4]=c*g+u*v+f*A,s[7]=c*d+u*S+f*T,s[2]=h*x+p*_+m*C,s[5]=h*g+p*v+m*A,s[8]=h*d+p*S+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,m=n*f+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nf.makeScale(e,n)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new Ge;function R2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yM(){const t=pu("canvas");return t.style.display="block",t}const Eg={};function Nc(t){t in Eg||(Eg[t]=!0,console.warn(t))}function SM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function MM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function EM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wg=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tg=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[Nr]:{transfer:uu,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[mi]:{transfer:mt,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yu]:{transfer:uu,primaries:du,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Tg),fromReference:t=>t.applyMatrix3(wg)},[Fp]:{transfer:mt,primaries:du,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Tg),fromReference:t=>t.applyMatrix3(wg).convertLinearToSRGB()}},wM=new Set([Nr,Yu]),st={enabled:!0,_workingColorSpace:Nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!wM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Jo[e].toReference,r=Jo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Jo[t].primaries},getTransfer:function(t){return t===dr?uu:Jo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Jo[e].luminanceCoefficients)}};function _o(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class TM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=pu("canvas")),ws.width=e.width,ws.height=e.height;const i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_o(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_o(n[i]/255)*255):n[i]=_o(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AM=0;class C2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ff(r[o].image)):s.push(Ff(r[o]))}else s=Ff(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RM=0;class cn extends Ho{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=es,r=es,s=ai,o=ts,a=ci,l=qi,c=cn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Gi(),this.name="",this.source=new C2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=m2;cn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(d+1)/2,A=(u+h)/4,T=(f+x)/4,P=(m+g)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends Ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new C2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends CM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class P2 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==m){let g=1-a;const d=l*h+c*p+u*m+f*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,d*_);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}const S=a*_;if(l=l*g+h*S,c=c*g+p*S,u=u*g+m*S,f=f*g+x*S,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*f+l*p-c*h,e[n+1]=l*m+u*h+c*f-a*p,e[n+2]=c*m+u*p+a*h-l*f,e[n+3]=u*m-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"YXZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"ZXY":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"ZYX":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"YZX":this._x=h*u*f+c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f-h*p*m;break;case"XZY":this._x=h*u*f-c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f+h*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Of.copy(this).projectOnVector(e),this.sub(Of)}reflect(e){return this.sub(Of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Of=new k,Ag=new hs;class dl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Ul.subVectors(this.max,Qo),Ts.subVectors(e.a,Qo),As.subVectors(e.b,Qo),Rs.subVectors(e.c,Qo),tr.subVectors(As,Ts),nr.subVectors(Rs,As),Or.subVectors(Ts,Rs);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Or.z,Or.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Or.z,0,-Or.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Or.y,Or.x,0];return!zf(n,Ts,As,Rs,Ul)||(n=[1,0,0,0,1,0,0,0,1],!zf(n,Ts,As,Rs,Ul))?!1:(Fl.crossVectors(tr,nr),n=[Fl.x,Fl.y,Fl.z],zf(n,Ts,As,Rs,Ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new k,new k,new k,new k,new k,new k,new k,new k],Qn=new k,Nl=new dl,Ts=new k,As=new k,Rs=new k,tr=new k,nr=new k,Or=new k,Qo=new k,Ul=new k,Fl=new k,zr=new k;function zf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zr.fromArray(t,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=n.dot(zr),u=i.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bM=new dl,ea=new k,kf=new k;class hl{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(kf)),this.expandByPoint(ea.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new k,Bf=new k,Ol=new k,ir=new k,Hf=new k,zl=new k,Vf=new k;class Ku{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bf.copy(e).add(n).multiplyScalar(.5),Ol.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(Bf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ol),a=ir.dot(this.direction),l=-ir.dot(Ol),c=ir.lengthSq(),u=Math.abs(1-o*o);let f,h,p,m;if(u>0)if(f=o*l-a,h=o*a-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bf).addScaledVector(Ol,h),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Hf.subVectors(n,e),zl.subVectors(i,e),Vf.crossVectors(Hf,zl);let o=this.direction.dot(Vf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(ir,zl));if(l<0)return null;const c=a*this.direction.dot(Hf.cross(ir));if(c<0||l+c>o)return null;const u=-a*ir.dot(Vf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,m,x,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,m,x,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,m,x,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,m=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+m*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,m=c*u,x=c*f;n[0]=h+x*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,m=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,m=a*u,x=a*f;n[0]=l*u,n[4]=m*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=m*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+m,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=p*f-m,n[2]=m*f-p,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DM,e,LM)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),rr.crossVectors(i,Mn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),rr.crossVectors(i,Mn)),rr.normalize(),kl.crossVectors(Mn,rr),r[0]=rr.x,r[4]=kl.x,r[8]=Mn.x,r[1]=rr.y,r[5]=kl.y,r[9]=Mn.y,r[2]=rr.z,r[6]=kl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],m=i[2],x=i[6],g=i[10],d=i[14],_=i[3],v=i[7],S=i[11],C=i[15],A=r[0],T=r[4],P=r[8],W=r[12],y=r[1],M=r[5],N=r[9],F=r[13],H=r[2],U=r[6],I=r[10],K=r[14],D=r[3],q=r[7],$=r[11],ne=r[15];return s[0]=o*A+a*y+l*H+c*D,s[4]=o*T+a*M+l*U+c*q,s[8]=o*P+a*N+l*I+c*$,s[12]=o*W+a*F+l*K+c*ne,s[1]=u*A+f*y+h*H+p*D,s[5]=u*T+f*M+h*U+p*q,s[9]=u*P+f*N+h*I+p*$,s[13]=u*W+f*F+h*K+p*ne,s[2]=m*A+x*y+g*H+d*D,s[6]=m*T+x*M+g*U+d*q,s[10]=m*P+x*N+g*I+d*$,s[14]=m*W+x*F+g*K+d*ne,s[3]=_*A+v*y+S*H+C*D,s[7]=_*T+v*M+S*U+C*q,s[11]=_*P+v*N+S*I+C*$,s[15]=_*W+v*F+S*K+C*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],m=e[3],x=e[7],g=e[11],d=e[15];return m*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],_=f*g*c-x*h*c+x*l*p-a*g*p-f*l*d+a*h*d,v=m*h*c-u*g*c-m*l*p+o*g*p+u*l*d-o*h*d,S=u*x*c-m*f*c+m*a*p-o*x*p-u*a*d+o*f*d,C=m*f*l-u*x*l-m*a*h+o*x*h+u*a*g-o*f*g,A=n*_+i*v+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*h*s-f*g*s-x*r*p+i*g*p+f*r*d-i*h*d)*T,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(u*g*s-m*h*s+m*r*p-n*g*p-u*r*d+n*h*d)*T,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*d-n*l*d)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(m*f*s-u*x*s-m*i*p+n*x*p+u*i*d-n*f*d)*T,e[10]=(o*x*s-m*a*s+m*i*c-n*x*c-o*i*d+n*a*d)*T,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=C*T,e[13]=(u*x*r-m*f*r+m*i*h-n*x*h-u*i*g+n*f*g)*T,e[14]=(m*a*r-o*x*r-m*i*l+n*x*l+o*i*g-n*a*g)*T,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,m=s*f,x=o*u,g=o*f,d=a*f,_=l*c,v=l*u,S=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(x+d))*C,r[1]=(p+S)*C,r[2]=(m-v)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(m+v)*T,r[9]=(g-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cs.set(r[0],r[1],r[2]).length();const o=Cs.set(r[4],r[5],r[6]).length(),a=Cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/s,u=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Bi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,m;if(a===Bi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===hu)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Bi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let m,x;if(a===Bi)m=(o+s)*f,x=-2*f;else if(a===hu)m=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cs=new k,ei=new xt,DM=new k(0,0,0),LM=new k(1,1,1),rr=new k,kl=new k,Mn=new k,Rg=new xt,Cg=new hs;class Yi{constructor(e=0,n=0,i=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cg.setFromEuler(this),this.setFromQuaternion(Cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IM=0;const Pg=new k,Ps=new hs,Ci=new xt,Bl=new k,ta=new k,NM=new k,UM=new hs,bg=new k(1,0,0),Dg=new k(0,1,0),Lg=new k(0,0,1),Ig={type:"added"},FM={type:"removed"},bs={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Qt extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new k,n=new Yi,i=new hs,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Dg,e)}rotateZ(e){return this.rotateOnAxis(Lg,e)}translateOnAxis(e,n){return Pg.copy(e).applyQuaternion(this.quaternion),this.position.add(Pg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Dg,e)}translateZ(e){return this.translateOnAxis(Lg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bl.copy(e):Bl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(ta,Bl,this.up):Ci.lookAt(Bl,ta,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Ps.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ig),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FM),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ig),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,UM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new k(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new k,Pi=new k,Wf=new k,bi=new k,Ds=new k,Ls=new k,Ng=new k,jf=new k,Xf=new k,$f=new k,qf=new Ct,Yf=new Ct,Kf=new Ct;class Bn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Pi.subVectors(i,n),Wf.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Pi),l=ti.dot(Wf),c=Pi.dot(Pi),u=Pi.dot(Wf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return qf.setScalar(0),Yf.setScalar(0),Kf.setScalar(0),qf.fromBufferAttribute(e,n),Yf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qf,s.x),o.addScaledVector(Yf,s.y),o.addScaledVector(Kf,s.z),o}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Pi.subVectors(e,n),ti.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ls.subVectors(s,i),jf.subVectors(e,i);const l=Ds.dot(jf),c=Ls.dot(jf);if(l<=0&&c<=0)return n.copy(i);Xf.subVectors(e,r);const u=Ds.dot(Xf),f=Ls.dot(Xf);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ds,o);$f.subVectors(e,s);const p=Ds.dot($f),m=Ls.dot($f);if(m>=0&&p<=m)return n.copy(s);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Ls,a);const g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return Ng.subVectors(s,r),a=(f-u)/(f-u+(p-m)),n.copy(r).addScaledVector(Ng,a);const d=1/(g+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Zf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Op(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=mi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const i=b2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=Uf(e.r),this.g=Uf(e.g),this.b=Uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return st.fromWorkingColorSpace(Kt.copy(this),e),Math.round(sn(Kt.r*255,0,255))*65536+Math.round(sn(Kt.g*255,0,255))*256+Math.round(sn(Kt.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=mi){st.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Hl);const i=ba(sr.h,Hl.h,n),r=ba(sr.s,Hl.s,n),s=ba(sr.l,Hl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new je;je.NAMES=b2;let OM=0;class ys extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=go,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=vd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gd&&(i.blendSrc=this.blendSrc),this.blendDst!==vd&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class io extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=p2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new k,Vl=new $e;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vl.fromBufferAttribute(this,n),Vl.applyMatrix3(e),this.setXY(n,Vl.x,Vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=li(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=li(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=li(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class D2 extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class L2 extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jt extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zM=0;const Un=new xt,Jf=new Qt,Is=new k,En=new dl,na=new dl,zt=new k;class Dt extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R2(e)?L2:D2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(En.min,na.min),En.expandByPoint(zt),zt.addVectors(En.max,na.max),En.expandByPoint(zt)):(En.expandByPoint(na.min),En.expandByPoint(na.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),zt.add(Is)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const c=new k,u=new k,f=new k,h=new $e,p=new $e,m=new $e,x=new k,g=new k;function d(P,W,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,W),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,W),m.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),m.sub(h);const M=1/(p.x*m.y-m.x*p.y);isFinite(M)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(M),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(M),a[P].add(x),a[W].add(x),a[y].add(x),l[P].add(g),l[W].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,W=_.length;P<W;++P){const y=_[P],M=y.start,N=y.count;for(let F=M,H=M+N;F<H;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new k,S=new k,C=new k,A=new k;function T(P){C.fromBufferAttribute(r,P),A.copy(C);const W=a[P];v.copy(W),v.sub(C.multiplyScalar(C.dot(W))).normalize(),S.crossVectors(A,W);const M=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,M)}for(let P=0,W=_.length;P<W;++P){const y=_[P],M=y.start,N=y.count;for(let F=M,H=M+N;F<H;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[m++]=c[p++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ug=new xt,kr=new Ku,Gl=new hl,Fg=new k,Wl=new k,jl=new k,Xl=new k,Qf=new k,$l=new k,Og=new k,ql=new k;class An extends Qt{constructor(e=new Dt,n=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Qf.fromBufferAttribute(f,e),o?$l.addScaledVector(Qf,u):$l.addScaledVector(Qf.sub(n),u))}n.add($l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Gl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Gl,Fg)===null||kr.origin.distanceToSquared(Fg)>(e.far-e.near)**2))&&(Ug.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Ug),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){const g=h[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,C=v;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Yl(this,d,e,i,c,u,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const _=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Yl(this,o,e,i,c,u,f,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){const g=h[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,C=v;S<C;S+=3){const A=S,T=S+1,P=S+2;r=Yl(this,d,e,i,c,u,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const _=g,v=g+1,S=g+2;r=Yl(this,o,e,i,c,u,f,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function kM(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pr,a),l===null)return null;ql.copy(a),ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ql);return c<n.near||c>n.far?null:{distance:c,point:ql.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Wl),t.getVertexPosition(l,jl),t.getVertexPosition(c,Xl);const u=kM(t,e,n,i,Wl,jl,Xl,Og);if(u){const f=new k;Bn.getBarycoord(Og,Wl,jl,Xl,f),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,f,new $e)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,f,new $e)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Bn.getNormal(Wl,jl,Xl,h.normal),u.face=h,u.barycoord=f}return u}class Vo extends Dt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function m(x,g,d,_,v,S,C,A,T,P,W){const y=S/T,M=C/P,N=S/2,F=C/2,H=A/2,U=T+1,I=P+1;let K=0,D=0;const q=new k;for(let $=0;$<I;$++){const ne=$*M-F;for(let ye=0;ye<U;ye++){const Ne=ye*y-N;q[x]=Ne*_,q[g]=ne*v,q[d]=H,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[d]=A>0?1:-1,u.push(q.x,q.y,q.z),f.push(ye/T),f.push(1-$/P),K+=1}}for(let $=0;$<P;$++)for(let ne=0;ne<T;ne++){const ye=h+ne+U*$,Ne=h+ne+U*($+1),Y=h+(ne+1)+U*($+1),ee=h+(ne+1)+U*$;l.push(ye,Ne,ee),l.push(Ne,Y,ee),D+=6}a.addGroup(p,D,W),p+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Lo(t[n]);for(const r in i)e[r]=i[r]}return e}function BM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function I2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const HM={clone:Lo,merge:nn};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class N2 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new k,zg=new $e,kg=new $e;class kn extends N2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,zg,kg),n.subVectors(kg,zg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Us=1;class WM extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Ns,Us,e,n);r.layers=this.layers,this.add(r);const s=new kn(Ns,Us,e,n);s.layers=this.layers,this.add(s);const o=new kn(Ns,Us,e,n);o.layers=this.layers,this.add(o);const a=new kn(Ns,Us,e,n);a.layers=this.layers,this.add(a);const l=new kn(Ns,Us,e,n);l.layers=this.layers,this.add(l);const c=new kn(Ns,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class U2 extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Co,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jM extends ds{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new U2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vo(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Tr});s.uniforms.tEquirect.value=n;const o=new An(r,s),a=n.minFilter;return n.minFilter===ts&&(n.minFilter=ai),new WM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const e0=new k,XM=new k,$M=new Ge;class jr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=e0.subVectors(i,n).cross(XM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(e0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$M.getNormalMatrix(e),r=this.coplanarPoint(e0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new hl,Kl=new k;class F2{constructor(e=new jr,n=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],m=r[9],x=r[10],g=r[11],d=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-d).normalize(),i[1].setComponents(l+s,h+c,g+p,S+d).normalize(),i[2].setComponents(l+o,h+u,g+m,S+_).normalize(),i[3].setComponents(l-o,h-u,g-m,S-_).normalize(),i[4].setComponents(l-a,h-f,g-x,S-v).normalize(),n===Bi)i[5].setComponents(l+a,h+f,g+x,S+v).normalize();else if(n===hu)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<f.length;p++){const m=f[h],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,m=f.length;p<m;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Zu extends Dt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],m=[],x=[],g=[];for(let d=0;d<u;d++){const _=d*h-o;for(let v=0;v<c;v++){const S=v*f-s;m.push(S,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+c*d,S=_+c*(d+1),C=_+1+c*(d+1),A=_+1+c*d;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_E=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r4=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u4=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:YM,alphahash_pars_fragment:KM,alphamap_fragment:ZM,alphamap_pars_fragment:JM,alphatest_fragment:QM,alphatest_pars_fragment:eE,aomap_fragment:tE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:aE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:hE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:gE,color_vertex:vE,common:_E,cube_uv_reflection_fragment:xE,defaultnormal_vertex:yE,displacementmap_pars_vertex:SE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:wE,colorspace_fragment:TE,colorspace_pars_fragment:AE,envmap_fragment:RE,envmap_common_pars_fragment:CE,envmap_pars_fragment:PE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:HE,envmap_vertex:DE,fog_vertex:LE,fog_pars_vertex:IE,fog_fragment:NE,fog_pars_fragment:UE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:OE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:kE,lights_pars_begin:BE,lights_toon_fragment:VE,lights_toon_pars_fragment:GE,lights_phong_fragment:WE,lights_phong_pars_fragment:jE,lights_physical_fragment:XE,lights_physical_pars_fragment:$E,lights_fragment_begin:qE,lights_fragment_maps:YE,lights_fragment_end:KE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:JE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:e4,map_fragment:t4,map_pars_fragment:n4,map_particle_fragment:i4,map_particle_pars_fragment:r4,metalnessmap_fragment:s4,metalnessmap_pars_fragment:o4,morphinstance_vertex:a4,morphcolor_vertex:l4,morphnormal_vertex:c4,morphtarget_pars_vertex:u4,morphtarget_vertex:f4,normal_fragment_begin:d4,normal_fragment_maps:h4,normal_pars_fragment:p4,normal_pars_vertex:m4,normal_vertex:g4,normalmap_pars_fragment:v4,clearcoat_normal_fragment_begin:_4,clearcoat_normal_fragment_maps:x4,clearcoat_pars_fragment:y4,iridescence_pars_fragment:S4,opaque_fragment:M4,packing:E4,premultiplied_alpha_fragment:w4,project_vertex:T4,dithering_fragment:A4,dithering_pars_fragment:R4,roughnessmap_fragment:C4,roughnessmap_pars_fragment:P4,shadowmap_pars_fragment:b4,shadowmap_pars_vertex:D4,shadowmap_vertex:L4,shadowmask_pars_fragment:I4,skinbase_vertex:N4,skinning_pars_vertex:U4,skinning_vertex:F4,skinnormal_vertex:O4,specularmap_fragment:z4,specularmap_pars_fragment:k4,tonemapping_fragment:B4,tonemapping_pars_fragment:H4,transmission_fragment:V4,transmission_pars_fragment:G4,uv_pars_fragment:W4,uv_pars_vertex:j4,uv_vertex:X4,worldpos_vertex:$4,background_vert:q4,background_frag:Y4,backgroundCube_vert:K4,backgroundCube_frag:Z4,cube_vert:J4,cube_frag:Q4,depth_vert:ew,depth_frag:tw,distanceRGBA_vert:nw,distanceRGBA_frag:iw,equirect_vert:rw,equirect_frag:sw,linedashed_vert:ow,linedashed_frag:aw,meshbasic_vert:lw,meshbasic_frag:cw,meshlambert_vert:uw,meshlambert_frag:fw,meshmatcap_vert:dw,meshmatcap_frag:hw,meshnormal_vert:pw,meshnormal_frag:mw,meshphong_vert:gw,meshphong_frag:vw,meshphysical_vert:_w,meshphysical_frag:xw,meshtoon_vert:yw,meshtoon_frag:Sw,points_vert:Mw,points_frag:Ew,shadow_vert:ww,shadow_frag:Tw,sprite_vert:Aw,sprite_frag:Rw},ue={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},gi={basic:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([ue.common,ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([ue.lights,ue.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gi.physical={uniforms:nn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Zl={r:0,b:0,g:0},Hr=new Yi,Cw=new xt;function Pw(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=m(_);S===null?d(a,l):S&&S.isColor&&(d(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===qu)?(u===void 0&&(u=new An(new Vo(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Lo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hr.copy(v.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(Hr)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,(f!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new An(new Zu(2,2),new Ki({name:"BackgroundMaterial",uniforms:Lo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(Zl,I2(t)),i.buffers.color.setClear(Zl.r,Zl.g,Zl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:g}}function bw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,M,N,F,H){let U=!1;const I=f(F,N,M);s!==I&&(s=I,c(s.object)),U=p(y,F,N,H),U&&m(y,F,N,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(y,M,N,F),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,M,N){const F=N.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let U=H[M.id];U===void 0&&(U={},H[M.id]=U);let I=U[F];return I===void 0&&(I=h(l()),U[F]=I),I}function h(y){const M=[],N=[],F=[];for(let H=0;H<n;H++)M[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,M,N,F){const H=s.attributes,U=M.attributes;let I=0;const K=N.getAttributes();for(const D in K)if(K[D].location>=0){const $=H[D];let ne=U[D];if(ne===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;I++}return s.attributesNum!==I||s.index!==F}function m(y,M,N,F){const H={},U=M.attributes;let I=0;const K=N.getAttributes();for(const D in K)if(K[D].location>=0){let $=U[D];$===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),H[D]=ne,I++}s.attributes=H,s.attributesNum=I,s.index=F}function x(){const y=s.newAttributes;for(let M=0,N=y.length;M<N;M++)y[M]=0}function g(y){d(y,0)}function d(y,M){const N=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;N[y]=1,F[y]===0&&(t.enableVertexAttribArray(y),F[y]=1),H[y]!==M&&(t.vertexAttribDivisor(y,M),H[y]=M)}function _(){const y=s.newAttributes,M=s.enabledAttributes;for(let N=0,F=M.length;N<F;N++)M[N]!==y[N]&&(t.disableVertexAttribArray(N),M[N]=0)}function v(y,M,N,F,H,U,I){I===!0?t.vertexAttribIPointer(y,M,N,H,U):t.vertexAttribPointer(y,M,N,F,H,U)}function S(y,M,N,F){x();const H=F.attributes,U=N.getAttributes(),I=M.defaultAttributeValues;for(const K in U){const D=U[K];if(D.location>=0){let q=H[K];if(q===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const $=q.normalized,ne=q.itemSize,ye=e.get(q);if(ye===void 0)continue;const Ne=ye.buffer,Y=ye.type,ee=ye.bytesPerElement,ce=Y===t.INT||Y===t.UNSIGNED_INT||q.gpuType===bp;if(q.isInterleavedBufferAttribute){const fe=q.data,Ue=fe.stride,V=q.offset;if(fe.isInstancedInterleavedBuffer){for(let Le=0;Le<D.locationSize;Le++)d(D.location+Le,fe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<D.locationSize;Le++)g(D.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Le=0;Le<D.locationSize;Le++)v(D.location+Le,ne/D.locationSize,Y,$,Ue*ee,(V+ne/D.locationSize*Le)*ee,ce)}else{if(q.isInstancedBufferAttribute){for(let fe=0;fe<D.locationSize;fe++)d(D.location+fe,q.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let fe=0;fe<D.locationSize;fe++)g(D.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let fe=0;fe<D.locationSize;fe++)v(D.location+fe,ne/D.locationSize,Y,$,ne*ee,ne/D.locationSize*fe*ee,ce)}}else if(I!==void 0){const $=I[K];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(D.location,$);break;case 3:t.vertexAttrib3fv(D.location,$);break;case 4:t.vertexAttrib4fv(D.location,$);break;default:t.vertexAttrib1fv(D.location,$)}}}}_()}function C(){P();for(const y in i){const M=i[y];for(const N in M){const F=M[N];for(const H in F)u(F[H].object),delete F[H];delete M[N]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const N in M){const F=M[N];for(const H in F)u(F[H].object),delete F[H];delete M[N]}delete i[y.id]}function T(y){for(const M in i){const N=i[M];if(N[y.id]===void 0)continue;const F=N[y.id];for(const H in F)u(F[H].object),delete F[H];delete N[y.id]}}function P(){W(),o=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Dw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];for(let x=0;x<h.length;x++)n.update(m,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ci&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==qi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ki&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function Iw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new jr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,v=_*4;let S=d.clippingState||null;l.value=S,S=u(m,h,v,p);for(let C=0;C!==v;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const d=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Nw(t){let e=new WeakMap;function n(o,a){return a===Td?o.mapping=Co:a===Ad&&(o.mapping=Po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Td||a===Ad)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uw extends N2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ro=4,Bg=[.125,.215,.35,.446,.526,.582],qr=20,t0=new Uw,Hg=new je;let n0=null,i0=0,r0=0,s0=!1;const Xr=(1+Math.sqrt(5))/2,Fs=1/Xr,Vg=[new k(-Xr,Fs,0),new k(Xr,Fs,0),new k(-Fs,0,Xr),new k(Fs,0,Xr),new k(0,Xr,-Fs),new k(0,Xr,Fs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){n0=this._renderer.getRenderTarget(),i0=this._renderer.getActiveCubeFace(),r0=this._renderer.getActiveMipmapLevel(),s0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(n0,i0,r0),this._renderer.xr.enabled=s0,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Co||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),n0=this._renderer.getRenderTarget(),i0=this._renderer.getActiveCubeFace(),r0=this._renderer.getActiveMipmapLevel(),s0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:fl,format:ci,colorSpace:Nr,depthBuffer:!1},r=Wg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fw(s)),this._blurMaterial=Ow(s,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,t0)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Hg),u.toneMapping=Ar,u.autoClear=!1;const p=new io({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new An(new Vo,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Hg),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Jl(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Co||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,t0)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vg[(r-s-1)%Vg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qr-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):qr;g>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qr}`);const d=[];let _=0;for(let T=0;T<qr;++T){const P=T/x,W=Math.exp(-P*P/2);d.push(W),T===0?_+=W:T<g&&(_+=2*W)}for(let T=0;T<d.length;T++)d[T]=d[T]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-ro?r-v+ro:0),A=4*(this._cubeSize-S);Jl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(f,t0)}}function Fw(t){const e=[],n=[],i=[];let r=t;const s=t-ro+1+Bg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ro?l=Bg[o-t+ro-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,m=6,x=3,g=2,d=1,_=new Float32Array(x*m*p),v=new Float32Array(g*m*p),S=new Float32Array(d*m*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,W=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(W,x*m*A),v.set(h,g*m*A);const y=[A,A,A,A,A,A];S.set(y,d*m*A)}const C=new Dt;C.setAttribute("position",new on(_,x)),C.setAttribute("uv",new on(v,g)),C.setAttribute("faceIndex",new on(S,d)),e.push(C),r>ro&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wg(t,e,n){const i=new ds(t,e,n);return i.texture.mapping=qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ow(t,e,n){const i=new Float32Array(qr),r=new k(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function jg(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Xg(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function kp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Td||l===Ad,u=l===Co||l===Po;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Gg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Gg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function kw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Nc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const x=h.morphAttributes[m];for(let g=0,d=x.length;g<d;g++)e.remove(x[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const m in p){const x=p[m];for(let g=0,d=x.length;g<d;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,m=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,S=_.length;v<S;v+=3){const C=_[v+0],A=_[v+1],T=_[v+2];h.push(C,A,A,T,T,C)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const C=v+0,A=v+1,T=v+2;h.push(C,A,A,T,T,C)}}else return;const g=new(R2(h)?L2:D2)(h,1);g.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Hw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,h*o,m),n.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];n.update(g,i,1)}function f(h,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,m);let d=0;for(let _=0;_<m;_++)d+=p[_];for(let _=0;_<x.length;_++)n.update(d,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Vw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Gw(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),P=new P2(T,C,A,f);P.type=ki,P.needsUpdate=!0;const W=S*4;for(let M=0;M<f;M++){const N=d[M],F=_[M],H=v[M],U=C*A*4*M;for(let I=0;I<N.count;I++){const K=I*W;m===!0&&(r.fromBufferAttribute(N,I),T[U+K+0]=r.x,T[U+K+1]=r.y,T[U+K+2]=r.z,T[U+K+3]=0),x===!0&&(r.fromBufferAttribute(F,I),T[U+K+4]=r.x,T[U+K+5]=r.y,T[U+K+6]=r.z,T[U+K+7]=0),g===!0&&(r.fromBufferAttribute(H,I),T[U+K+8]=r.x,T[U+K+9]=r.y,T[U+K+10]=r.z,T[U+K+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new $e(C,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Ww(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class z2 extends cn{constructor(e,n,i,r,s,o,a,l,c,u=vo){if(u!==vo&&u!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vo&&(i=fs),i===void 0&&u===Do&&(i=bo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const k2=new cn,$g=new z2(1,1),B2=new P2,H2=new PM,V2=new U2,qg=[],Yg=[],Kg=new Float32Array(16),Zg=new Float32Array(9),Jg=new Float32Array(4);function Go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qg[r];if(s===void 0&&(s=new Float32Array(r),qg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ju(t,e){let n=Yg[e];n===void 0&&(n=new Int32Array(e),Yg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function Yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Jg.set(i),t.uniformMatrix2fv(this.addr,!1,Jg),Ot(n,i)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Zg.set(i),t.uniformMatrix3fv(this.addr,!1,Zg),Ot(n,i)}}function Zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Kg.set(i),t.uniformMatrix4fv(this.addr,!1,Kg),Ot(n,i)}}function Jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($g.compareFunction=A2,s=$g):s=k2,n.setTexture2D(e||s,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||H2,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||V2,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||B2,r)}function uT(t){switch(t){case 5126:return jw;case 35664:return Xw;case 35665:return $w;case 35666:return qw;case 35674:return Yw;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Jw;case 35667:case 35671:return Qw;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(t,e){t.uniform1fv(this.addr,e)}function dT(t,e){const n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function hT(t,e){const n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function pT(t,e){const n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function mT(t,e){const n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gT(t,e){const n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vT(t,e){const n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _T(t,e){t.uniform1iv(this.addr,e)}function xT(t,e){t.uniform2iv(this.addr,e)}function yT(t,e){t.uniform3iv(this.addr,e)}function ST(t,e){t.uniform4iv(this.addr,e)}function MT(t,e){t.uniform1uiv(this.addr,e)}function ET(t,e){t.uniform2uiv(this.addr,e)}function wT(t,e){t.uniform3uiv(this.addr,e)}function TT(t,e){t.uniform4uiv(this.addr,e)}function AT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||k2,s[o])}function RT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||H2,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||V2,s[o])}function PT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||B2,s[o])}function bT(t){switch(t){case 5126:return fT;case 35664:return dT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return vT;case 5124:case 35670:return _T;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return ET;case 36295:return wT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return PT}}class DT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class LT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bT(n.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const o0=/(\w+)(\])?(\[|\.)?/g;function Qg(t,e){t.seq.push(e),t.map[e.id]=e}function NT(t,e,n){const i=t.name,r=i.length;for(o0.lastIndex=0;;){const s=o0.exec(i),o=o0.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qg(n,c===void 0?new DT(a,t,e):new LT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new IT(a),Qg(n,f)),n=f}}}class Uc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);NT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function e1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UT=37297;let FT=0;function OT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function zT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===du&&n===fu?i="LinearDisplayP3ToLinearSRGB":e===fu&&n===du&&(i="LinearSRGBToLinearDisplayP3"),t){case Nr:case Yu:return[i,"LinearTransferOETF"];case mi:case Fp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function t1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+OT(t.getShaderSource(e),o)}else return r}function kT(t,e){const n=zT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function BT(t,e){let n;switch(e){case kS:n="Linear";break;case BS:n="Reinhard";break;case HS:n="Cineon";break;case VS:n="ACESFilmic";break;case WS:n="AgX";break;case jS:n="Neutral";break;case GS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new k;function HT(){st.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function GT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ha(t){return t!==""}function n1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(t){return t.replace(jT,$T)}const XT=new Map;function $T(t,e){let n=Ve[e];if(n===void 0){const i=XT.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(n)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r1(t){return t.replace(qT,YT)}function YT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function s1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===h2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function ZT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Co:case Po:e="ENVMAP_TYPE_CUBE";break;case qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function QT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case p2:e="ENVMAP_BLENDING_MULTIPLY";break;case OS:e="ENVMAP_BLENDING_MIX";break;case zS:e="ENVMAP_BLENDING_ADD";break}return e}function e6(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function t6(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=KT(n),c=ZT(n),u=JT(n),f=QT(n),h=e6(n),p=VT(n),m=GT(s),x=r.createProgram();let g,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ha).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ha).join(`
`),d.length>0&&(d+=`
`)):(g=[s1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),d=[s1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ar?BT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,kT("linearToOutputTexel",n.outputColorSpace),HT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),o=nh(o),o=n1(o,n),o=i1(o,n),a=nh(a),a=n1(a,n),a=i1(a,n),o=r1(o),a=r1(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+g+o,S=_+d+a,C=e1(r,r.VERTEX_SHADER,v),A=e1(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(M){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(A).trim();let U=!0,I=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{const K=t1(r,C,"vertex"),D=t1(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+K+`
`+D)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||H==="")&&(I=!1);I&&(M.diagnostics={runnable:U,programLog:N,vertexShader:{log:F,prefix:g},fragmentShader:{log:H,prefix:d}})}r.deleteShader(C),r.deleteShader(A),P=new Uc(r,x),W=WT(r,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,UT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let n6=0;class i6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new r6(e),n.set(e,i)),i}}class r6{constructor(e){this.id=n6++,this.code=e,this.usedTimes=0}}function s6(t,e,n,i,r,s,o){const a=new zp,l=new i6,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,M,N,F,H){const U=F.fog,I=H.geometry,K=y.isMeshStandardMaterial?F.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||K),q=D&&D.mapping===qu?D.image.height:null,$=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ye=ne!==void 0?ne.length:0;let Ne=0;I.morphAttributes.position!==void 0&&(Ne=1),I.morphAttributes.normal!==void 0&&(Ne=2),I.morphAttributes.color!==void 0&&(Ne=3);let Y,ee,ce,fe;if($){const hn=gi[$];Y=hn.vertexShader,ee=hn.fragmentShader}else Y=y.vertexShader,ee=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);const Ue=t.getRenderTarget(),V=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,et=!!y.map,me=!!y.matcap,b=!!D,We=!!y.aoMap,Re=!!y.lightMap,Ie=!!y.bumpMap,Ce=!!y.normalMap,se=!!y.displacementMap,oe=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,J=y.clearcoat>0,ie=y.dispersion>0,Q=y.iridescence>0,Pe=y.sheen>0,de=y.transmission>0,Se=G&&!!y.anisotropyMap,tt=J&&!!y.clearcoatMap,ae=J&&!!y.clearcoatNormalMap,Me=J&&!!y.clearcoatRoughnessMap,ze=Q&&!!y.iridescenceMap,ke=Q&&!!y.iridescenceThicknessMap,Ee=Pe&&!!y.sheenColorMap,qe=Pe&&!!y.sheenRoughnessMap,He=!!y.specularMap,ut=!!y.specularColorMap,O=!!y.specularIntensityMap,ge=de&&!!y.transmissionMap,Z=de&&!!y.thicknessMap,te=!!y.gradientMap,he=!!y.alphaMap,ve=y.alphaTest>0,Ke=!!y.alphaHash,Pt=!!y.extensions;let dn=Ar;y.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(dn=t.toneMapping);const nt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:ee,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:V,instancingColor:V&&H.instanceColor!==null,instancingMorph:V&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Nr,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:me,envMap:b,envMapMode:b&&D.mapping,envMapCubeUVHeight:q,aoMap:We,lightMap:Re,bumpMap:Ie,normalMap:Ce,displacementMap:p&&se,emissiveMap:oe,normalMapObjectSpace:Ce&&y.normalMapType===KS,normalMapTangentSpace:Ce&&y.normalMapType===YS,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:Se,clearcoat:J,clearcoatMap:tt,clearcoatNormalMap:ae,clearcoatRoughnessMap:Me,dispersion:ie,iridescence:Q,iridescenceMap:ze,iridescenceThicknessMap:ke,sheen:Pe,sheenColorMap:Ee,sheenRoughnessMap:qe,specularMap:He,specularColorMap:ut,specularIntensityMap:O,transmission:de,transmissionMap:ge,thicknessMap:Z,gradientMap:te,opaque:y.transparent===!1&&y.blending===go&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ve,alphaHash:Ke,combine:y.combine,mapUv:et&&g(y.map.channel),aoMapUv:We&&g(y.aoMap.channel),lightMapUv:Re&&g(y.lightMap.channel),bumpMapUv:Ie&&g(y.bumpMap.channel),normalMapUv:Ce&&g(y.normalMap.channel),displacementMapUv:se&&g(y.displacementMap.channel),emissiveMapUv:oe&&g(y.emissiveMap.channel),metalnessMapUv:R&&g(y.metalnessMap.channel),roughnessMapUv:E&&g(y.roughnessMap.channel),anisotropyMapUv:Se&&g(y.anisotropyMap.channel),clearcoatMapUv:tt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(y.sheenRoughnessMap.channel),specularMapUv:He&&g(y.specularMap.channel),specularColorMapUv:ut&&g(y.specularColorMap.channel),specularIntensityMapUv:O&&g(y.specularIntensityMap.channel),transmissionMapUv:ge&&g(y.transmissionMap.channel),thicknessMapUv:Z&&g(y.thicknessMap.channel),alphaMapUv:he&&g(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ce||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!I.attributes.uv&&(et||he),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:dn,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_i,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)M.push(N),M.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const M=x[y.type];let N;if(M){const F=gi[M];N=HM.clone(F.uniforms)}else N=y.uniforms;return N}function A(y,M){let N;for(let F=0,H=u.length;F<H;F++){const U=u[F];if(U.cacheKey===M){N=U,++N.usedTimes;break}}return N===void 0&&(N=new t6(t,M,y,s),u.push(N)),N}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function W(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:W}}function o6(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function a6(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function o1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function a1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,m,x,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=x,d.group=g),e++,d}function a(f,h,p,m,x,g){const d=o(f,h,p,m,x,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,m,x,g){const d=o(f,h,p,m,x,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||a6),i.length>1&&i.sort(h||o1),r.length>1&&r.sort(h||o1)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function l6(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new a1,t.set(i,[o])):r>=s.length?(o=new a1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function c6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new je};break;case"SpotLight":n={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function u6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let f6=0;function d6(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h6(t){const e=new c6,n=u6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new xt,o=new xt;function a(c){let u=0,f=0,h=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,_=0,v=0,S=0,C=0,A=0,T=0;c.sort(d6);for(let W=0,y=c.length;W<y;W++){const M=c[W],N=M.color,F=M.intensity,H=M.distance,U=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=N.r*F,f+=N.g*F,h+=N.b*F;else if(M.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(M.sh.coefficients[I],F);T++}else if(M.isDirectionalLight){const I=e.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const K=M.shadow,D=n.get(M);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=M.shadow.matrix,_++}i.directional[p]=I,p++}else if(M.isSpotLight){const I=e.get(M);I.position.setFromMatrixPosition(M.matrixWorld),I.color.copy(N).multiplyScalar(F),I.distance=H,I.coneCos=Math.cos(M.angle),I.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),I.decay=M.decay,i.spot[x]=I;const K=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,K.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=K.matrix,M.castShadow){const D=n.get(M);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=U,S++}x++}else if(M.isRectAreaLight){const I=e.get(M);I.color.copy(N).multiplyScalar(F),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),i.rectArea[g]=I,g++}else if(M.isPointLight){const I=e.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),I.distance=M.distance,I.decay=M.decay,M.castShadow){const K=M.shadow,D=n.get(M);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=M.shadow.matrix,v++}i.point[m]=I,m++}else if(M.isHemisphereLight){const I=e.get(M);I.skyColor.copy(M.color).multiplyScalar(F),I.groundColor.copy(M.groundColor).multiplyScalar(F),i.hemi[d]=I,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=T,i.version=f6++)}function l(c,u){let f=0,h=0,p=0,m=0,x=0;const g=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const v=c[d];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function l1(t){const e=new h6(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function p6(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new l1(t),e.set(r,[a])):s>=o.length?(a=new l1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class m6 extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g6 extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const v6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x6(t,e,n){let i=new F2;const r=new $e,s=new $e,o=new Ct,a=new m6({depthPacking:qS}),l=new g6,c={},u=n.maxTextureSize,f={[Pr]:ln,[ln]:Pr,[_i]:_i},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:v6,fragmentShader:_6}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new Dt;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new An(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h2;let d=this.type;this.render=function(A,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const W=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Tr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=d!==Di&&this.type===Di,H=d===Di&&this.type!==Di;for(let U=0,I=A.length;U<I;U++){const K=A[U],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||F===!0||H===!0){const ne=this.type!==Di?{minFilter:Gn,magFilter:Gn}:{};D.map!==null&&D.map.dispose(),D.map=new ds(r.x,r.y,ne),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const $=D.getViewportCount();for(let ne=0;ne<$;ne++){const ye=D.getViewport(ne);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),N.viewport(o),D.updateMatrices(K,ne),i=D.getFrustum(),S(T,P,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===Di&&_(D,P),D.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(W,y,M)};function _(A,T){const P=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,p,x,null)}function v(A,T,P,W){let y=null;const M=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=y.uuid,F=T.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let U=H[F];U===void 0&&(U=y.clone(),H[F]=U,T.addEventListener("dispose",C)),y=U}if(y.visible=T.visible,y.wireframe=T.wireframe,W===Di?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=t.properties.get(y);N.light=P}return y}function S(A,T,P,W,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),H=A.material;if(Array.isArray(H)){const U=F.groups;for(let I=0,K=U.length;I<K;I++){const D=U[I],q=H[D.materialIndex];if(q&&q.visible){const $=v(A,q,W,y);A.onBeforeShadow(t,A,T,P,F,$,D),t.renderBufferDirect(P,null,F,$,A,D),A.onAfterShadow(t,A,T,P,F,$,D)}}}else if(H.visible){const U=v(A,H,W,y);A.onBeforeShadow(t,A,T,P,F,U,null),t.renderBufferDirect(P,null,F,U,A,null),A.onAfterShadow(t,A,T,P,F,U,null)}}const N=A.children;for(let F=0,H=N.length;F<H;F++)S(N[F],T,P,W,y)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const W=c[P],y=A.target.uuid;y in W&&(W[y].dispose(),delete W[y])}}}const y6={[_d]:xd,[yd]:Ed,[Sd]:wd,[Ro]:Md,[xd]:_d,[Ed]:yd,[wd]:Sd,[Md]:Ro};function S6(t){function e(){let O=!1;const ge=new Ct;let Z=null;const te=new Ct(0,0,0,0);return{setMask:function(he){Z!==he&&!O&&(t.colorMask(he,he,he,he),Z=he)},setLocked:function(he){O=he},setClear:function(he,ve,Ke,Pt,dn){dn===!0&&(he*=Pt,ve*=Pt,Ke*=Pt),ge.set(he,ve,Ke,Pt),te.equals(ge)===!1&&(t.clearColor(he,ve,Ke,Pt),te.copy(ge))},reset:function(){O=!1,Z=null,te.set(-1,0,0,0)}}}function n(){let O=!1,ge=!1,Z=null,te=null,he=null;return{setReversed:function(ve){ge=ve},setTest:function(ve){ve?ce(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!O&&(t.depthMask(ve),Z=ve)},setFunc:function(ve){if(ge&&(ve=y6[ve]),te!==ve){switch(ve){case _d:t.depthFunc(t.NEVER);break;case xd:t.depthFunc(t.ALWAYS);break;case yd:t.depthFunc(t.LESS);break;case Ro:t.depthFunc(t.LEQUAL);break;case Sd:t.depthFunc(t.EQUAL);break;case Md:t.depthFunc(t.GEQUAL);break;case Ed:t.depthFunc(t.GREATER);break;case wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){O=ve},setClear:function(ve){he!==ve&&(t.clearDepth(ve),he=ve)},reset:function(){O=!1,Z=null,te=null,he=null}}}function i(){let O=!1,ge=null,Z=null,te=null,he=null,ve=null,Ke=null,Pt=null,dn=null;return{setTest:function(nt){O||(nt?ce(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!O&&(t.stencilMask(nt),ge=nt)},setFunc:function(nt,hn,Ti){(Z!==nt||te!==hn||he!==Ti)&&(t.stencilFunc(nt,hn,Ti),Z=nt,te=hn,he=Ti)},setOp:function(nt,hn,Ti){(ve!==nt||Ke!==hn||Pt!==Ti)&&(t.stencilOp(nt,hn,Ti),ve=nt,Ke=hn,Pt=Ti)},setLocked:function(nt){O=nt},setClear:function(nt){dn!==nt&&(t.clearStencil(nt),dn=nt)},reset:function(){O=!1,ge=null,Z=null,te=null,he=null,ve=null,Ke=null,Pt=null,dn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,m=!1,x=null,g=null,d=null,_=null,v=null,S=null,C=null,A=new je(0,0,0),T=0,P=!1,W=null,y=null,M=null,N=null,F=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(K)[1]),U=I>=1):K.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),U=I>=2);let D=null,q={};const $=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ye=new Ct().fromArray($),Ne=new Ct().fromArray(ne);function Y(O,ge,Z,te){const he=new Uint8Array(4),ve=t.createTexture();t.bindTexture(O,ve),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Z;Ke++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ge+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ve}const ee={};ee[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Ro),Re(!1),Ie(mg),ce(t.CULL_FACE),b(Tr);function ce(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function fe(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function Ue(O,ge){return u[O]!==ge?(t.bindFramebuffer(O,ge),u[O]=ge,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function V(O,ge){let Z=h,te=!1;if(O){Z=f.get(ge),Z===void 0&&(Z=[],f.set(ge,Z));const he=O.textures;if(Z.length!==he.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ke=he.length;ve<Ke;ve++)Z[ve]=t.COLOR_ATTACHMENT0+ve;Z.length=he.length,te=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,te=!0);te&&t.drawBuffers(Z)}function Le(O){return p!==O?(t.useProgram(O),p=O,!0):!1}const et={[$r]:t.FUNC_ADD,[yS]:t.FUNC_SUBTRACT,[SS]:t.FUNC_REVERSE_SUBTRACT};et[MS]=t.MIN,et[ES]=t.MAX;const me={[wS]:t.ZERO,[TS]:t.ONE,[AS]:t.SRC_COLOR,[gd]:t.SRC_ALPHA,[LS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[CS]:t.DST_ALPHA,[RS]:t.ONE_MINUS_SRC_COLOR,[vd]:t.ONE_MINUS_SRC_ALPHA,[DS]:t.ONE_MINUS_DST_COLOR,[PS]:t.ONE_MINUS_DST_ALPHA,[IS]:t.CONSTANT_COLOR,[NS]:t.ONE_MINUS_CONSTANT_COLOR,[US]:t.CONSTANT_ALPHA,[FS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(O,ge,Z,te,he,ve,Ke,Pt,dn,nt){if(O===Tr){m===!0&&(fe(t.BLEND),m=!1);return}if(m===!1&&(ce(t.BLEND),m=!0),O!==xS){if(O!==x||nt!==P){if((g!==$r||v!==$r)&&(t.blendEquation(t.FUNC_ADD),g=$r,v=$r),nt)switch(O){case go:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gg:t.blendFunc(t.ONE,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case go:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _g:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}d=null,_=null,S=null,C=null,A.set(0,0,0),T=0,x=O,P=nt}return}he=he||ge,ve=ve||Z,Ke=Ke||te,(ge!==g||he!==v)&&(t.blendEquationSeparate(et[ge],et[he]),g=ge,v=he),(Z!==d||te!==_||ve!==S||Ke!==C)&&(t.blendFuncSeparate(me[Z],me[te],me[ve],me[Ke]),d=Z,_=te,S=ve,C=Ke),(Pt.equals(A)===!1||dn!==T)&&(t.blendColor(Pt.r,Pt.g,Pt.b,dn),A.copy(Pt),T=dn),x=O,P=!1}function We(O,ge){O.side===_i?fe(t.CULL_FACE):ce(t.CULL_FACE);let Z=O.side===ln;ge&&(Z=!Z),Re(Z),O.blending===go&&O.transparent===!1?b(Tr):b(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const te=O.stencilWrite;o.setTest(te),te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(O){W!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),W=O)}function Ie(O){O!==gS?(ce(t.CULL_FACE),O!==y&&(O===mg?t.cullFace(t.BACK):O===vS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),y=O}function Ce(O){O!==M&&(U&&t.lineWidth(O),M=O)}function se(O,ge,Z){O?(ce(t.POLYGON_OFFSET_FILL),(N!==ge||F!==Z)&&(t.polygonOffset(ge,Z),N=ge,F=Z)):fe(t.POLYGON_OFFSET_FILL)}function oe(O){O?ce(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function R(O){O===void 0&&(O=t.TEXTURE0+H-1),D!==O&&(t.activeTexture(O),D=O)}function E(O,ge,Z){Z===void 0&&(D===null?Z=t.TEXTURE0+H-1:Z=D);let te=q[Z];te===void 0&&(te={type:void 0,texture:void 0},q[Z]=te),(te.type!==O||te.texture!==ge)&&(D!==Z&&(t.activeTexture(Z),D=Z),t.bindTexture(O,ge||ee[O]),te.type=O,te.texture=ge)}function G(){const O=q[D];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(O){ye.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),ye.copy(O))}function Ee(O){Ne.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Ne.copy(O))}function qe(O,ge){let Z=l.get(ge);Z===void 0&&(Z=new WeakMap,l.set(ge,Z));let te=Z.get(O);te===void 0&&(te=t.getUniformBlockIndex(ge,O.name),Z.set(O,te))}function He(O,ge){const te=l.get(ge).get(O);a.get(ge)!==te&&(t.uniformBlockBinding(ge,te,O.__bindingPointIndex),a.set(ge,te))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,q={},u={},f=new WeakMap,h=[],p=null,m=!1,x=null,g=null,d=null,_=null,v=null,S=null,C=null,A=new je(0,0,0),T=0,P=!1,W=null,y=null,M=null,N=null,F=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:fe,bindFramebuffer:Ue,drawBuffers:V,useProgram:Le,setBlending:b,setMaterial:We,setFlipSided:Re,setCullFace:Ie,setLineWidth:Ce,setPolygonOffset:se,setScissorTest:oe,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Me,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:tt,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:ke,viewport:Ee,reset:ut}}function c1(t,e,n,i){const r=M6(i);switch(n){case x2:return t*e;case S2:return t*e;case M2:return t*e*2;case E2:return t*e/r.components*r.byteLength;case Ip:return t*e/r.components*r.byteLength;case w2:return t*e*2/r.components*r.byteLength;case Np:return t*e*2/r.components*r.byteLength;case y2:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case Up:return t*e*4/r.components*r.byteLength;case Pc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ld:return Math.max(t,16)*Math.max(e,8)/4;case Pd:case Dd:return Math.max(t,8)*Math.max(e,8)/2;case Id:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Kd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case T2:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qd:case eh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function M6(t){switch(t){case qi:case g2:return{byteLength:1,components:1};case Ka:case v2:case fl:return{byteLength:2,components:1};case Dp:case Lp:return{byteLength:2,components:4};case fs:case bp:case ki:return{byteLength:4,components:1};case _2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function E6(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):pu("canvas")}function x(R,E,G){let J=1;const ie=oe(R);if((ie.width>G||ie.height>G)&&(J=G/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*ie.width),Pe=Math.floor(J*ie.height);f===void 0&&(f=m(Q,Pe));const de=E?m(Q,Pe):f;return de.width=Q,de.height=Pe,de.getContext("2d").drawImage(R,0,0,Q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Pe+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==Gn&&R.minFilter!==ai}function d(R){t.generateMipmap(R)}function _(R,E,G,J,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=E;if(E===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),E===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Pe=ie?uu:st.getTransfer(J);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Pe===mt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(R,E){let G;return R?E===null||E===fs||E===bo?G=t.DEPTH24_STENCIL8:E===ki?G=t.DEPTH32F_STENCIL8:E===Ka&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fs||E===bo?G=t.DEPTH_COMPONENT24:E===ki?G=t.DEPTH_COMPONENT32F:E===Ka&&(G=t.DEPTH_COMPONENT16),G}function S(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gn&&R.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),T(E),E.isVideoTexture&&u.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),W(E)}function T(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,J=h.get(G);if(J){const ie=J[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(R),Object.keys(J).length===0&&h.delete(G)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const G=R.source,J=h.get(G);delete J[E.__cacheKey],o.memory.textures--}function W(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ie=0;ie<E.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,ie=G.length;J<ie;J++){const Q=i.get(G[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(R)}let y=0;function M(){y=0}function N(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function F(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const G=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(G,R,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function U(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ne(G,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function I(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ne(G,R,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function K(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const D={[Rd]:t.REPEAT,[es]:t.CLAMP_TO_EDGE,[Cd]:t.MIRRORED_REPEAT},q={[Gn]:t.NEAREST,[XS]:t.NEAREST_MIPMAP_NEAREST,[Il]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[If]:t.LINEAR_MIPMAP_NEAREST,[ts]:t.LINEAR_MIPMAP_LINEAR},$={[ZS]:t.NEVER,[iM]:t.ALWAYS,[JS]:t.LESS,[A2]:t.LEQUAL,[QS]:t.EQUAL,[nM]:t.GEQUAL,[eM]:t.GREATER,[tM]:t.NOTEQUAL};function ne(R,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===If||E.magFilter===Il||E.magFilter===ts||E.minFilter===ai||E.minFilter===If||E.minFilter===Il||E.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gn||E.minFilter!==Il&&E.minFilter!==ts||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const J=E.source;let ie=h.get(J);ie===void 0&&(ie={},h.set(J,ie));const Q=F(E);if(Q!==R.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Pe=ie[R.__cacheKey];Pe!==void 0&&(ie[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(E)),R.__cacheKey=Q,R.__webglTexture=ie[Q].texture}return G}function Ne(R,E,G){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const ie=ye(R,E),Q=E.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+G);const Pe=i.get(Q);if(Q.version!==Pe.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const de=st.getPrimaries(st.workingColorSpace),Se=E.colorSpace===dr?null:st.getPrimaries(E.colorSpace),tt=E.colorSpace===dr||de===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ae=x(E.image,!1,r.maxTextureSize);ae=se(E,ae);const Me=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let ke=_(E.internalFormat,Me,ze,E.colorSpace,E.isVideoTexture);ne(J,E);let Ee;const qe=E.mipmaps,He=E.isVideoTexture!==!0,ut=Pe.__version===void 0||ie===!0,O=Q.dataReady,ge=S(E,ae);if(E.isDepthTexture)ke=v(E.format===Do,E.type),ut&&(He?n.texStorage2D(t.TEXTURE_2D,1,ke,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ke,ae.width,ae.height,0,Me,ze,null));else if(E.isDataTexture)if(qe.length>0){He&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,qe[0].width,qe[0].height);for(let Z=0,te=qe.length;Z<te;Z++)Ee=qe[Z],He?O&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,ze,Ee.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Me,ze,Ee.data);E.generateMipmaps=!1}else He?(ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,ae.width,ae.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,ze,ae.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ae.width,ae.height,0,Me,ze,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,qe[0].width,qe[0].height,ae.depth);for(let Z=0,te=qe.length;Z<te;Z++)if(Ee=qe[Z],E.format!==ci)if(Me!==null)if(He){if(O)if(E.layerUpdates.size>0){const he=c1(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const Ke=Ee.data.subarray(ve*he/Ee.data.BYTES_PER_ELEMENT,(ve+1)*he/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,ve,Ee.width,Ee.height,1,Me,Ke,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,ae.depth,Me,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Ee.width,Ee.height,ae.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,ae.depth,Me,ze,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Ee.width,Ee.height,ae.depth,0,Me,ze,Ee.data)}else{He&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,qe[0].width,qe[0].height);for(let Z=0,te=qe.length;Z<te;Z++)Ee=qe[Z],E.format!==ci?Me!==null?He?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,ze,Ee.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Me,ze,Ee.data)}else if(E.isDataArrayTexture)if(He){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,ae.width,ae.height,ae.depth),O)if(E.layerUpdates.size>0){const Z=c1(ae.width,ae.height,E.format,E.type);for(const te of E.layerUpdates){const he=ae.data.subarray(te*Z/ae.data.BYTES_PER_ELEMENT,(te+1)*Z/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Me,ze,he)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,ze,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ae.width,ae.height,ae.depth,0,Me,ze,ae.data);else if(E.isData3DTexture)He?(ut&&n.texStorage3D(t.TEXTURE_3D,ge,ke,ae.width,ae.height,ae.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,ze,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ae.width,ae.height,ae.depth,0,Me,ze,ae.data);else if(E.isFramebufferTexture){if(ut)if(He)n.texStorage2D(t.TEXTURE_2D,ge,ke,ae.width,ae.height);else{let Z=ae.width,te=ae.height;for(let he=0;he<ge;he++)n.texImage2D(t.TEXTURE_2D,he,ke,Z,te,0,Me,ze,null),Z>>=1,te>>=1}}else if(qe.length>0){if(He&&ut){const Z=oe(qe[0]);n.texStorage2D(t.TEXTURE_2D,ge,ke,Z.width,Z.height)}for(let Z=0,te=qe.length;Z<te;Z++)Ee=qe[Z],He?O&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me,ze,Ee):n.texImage2D(t.TEXTURE_2D,Z,ke,Me,ze,Ee);E.generateMipmaps=!1}else if(He){if(ut){const Z=oe(ae);n.texStorage2D(t.TEXTURE_2D,ge,ke,Z.width,Z.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,ze,ae)}else n.texImage2D(t.TEXTURE_2D,0,ke,Me,ze,ae);g(E)&&d(J),Pe.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Y(R,E,G){if(E.image.length!==6)return;const J=ye(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const Q=i.get(ie);if(ie.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const Pe=st.getPrimaries(st.workingColorSpace),de=E.colorSpace===dr?null:st.getPrimaries(E.colorSpace),Se=E.colorSpace===dr||Pe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!tt&&!ae?Me[te]=x(E.image[te],!0,r.maxCubemapSize):Me[te]=ae?E.image[te].image:E.image[te],Me[te]=se(E,Me[te]);const ze=Me[0],ke=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),qe=_(E.internalFormat,ke,Ee,E.colorSpace),He=E.isVideoTexture!==!0,ut=Q.__version===void 0||J===!0,O=ie.dataReady;let ge=S(E,ze);ne(t.TEXTURE_CUBE_MAP,E);let Z;if(tt){He&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,ze.width,ze.height);for(let te=0;te<6;te++){Z=Me[te].mipmaps;for(let he=0;he<Z.length;he++){const ve=Z[he];E.format!==ci?ke!==null?He?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ve.width,ve.height,ke,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,qe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ve.width,ve.height,ke,Ee,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,qe,ve.width,ve.height,0,ke,Ee,ve.data)}}}else{if(Z=E.mipmaps,He&&ut){Z.length>0&&ge++;const te=oe(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,te.width,te.height)}for(let te=0;te<6;te++)if(ae){He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,ke,Ee,Me[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Me[te].width,Me[te].height,0,ke,Ee,Me[te].data);for(let he=0;he<Z.length;he++){const Ke=Z[he].image[te].image;He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ke.width,Ke.height,ke,Ee,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,qe,Ke.width,Ke.height,0,ke,Ee,Ke.data)}}else{He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Ee,Me[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,ke,Ee,Me[te]);for(let he=0;he<Z.length;he++){const ve=Z[he];He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,ke,Ee,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,qe,ke,Ee,ve.image[te])}}}g(E)&&d(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ee(R,E,G,J,ie,Q){const Pe=s.convert(G.format,G.colorSpace),de=s.convert(G.type),Se=_(G.internalFormat,Pe,de,G.colorSpace);if(!i.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>Q),Me=Math.max(1,E.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,Se,ae,Me,E.depth,0,Pe,de,null):n.texImage2D(ie,Q,Se,ae,Me,0,Pe,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,i.get(G).__webglTexture,0,Re(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const J=E.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=v(E.stencilBuffer,ie),Pe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Re(E);Ie(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Q,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,R)}else{const J=E.textures;for(let ie=0;ie<J.length;ie++){const Q=J[ie],Pe=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),Se=_(Q.internalFormat,Pe,de,Q.colorSpace),tt=Re(E);G&&Ie(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,Se,E.width,E.height):Ie(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,tt,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,ie=Re(E);if(E.depthTexture.format===vo)Ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===Do)Ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),ce(E.__webglDepthbuffer[J],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ce(E.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(R,E,G){const J=i.get(R);E!==void 0&&ee(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ue(R)}function Le(R){const E=R.texture,G=i.get(R),J=i.get(E);R.addEventListener("dispose",A);const ie=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let Se=0;Se<E.mipmaps.length;Se++)G.__webglFramebuffer[de][Se]=t.createFramebuffer()}else G.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)G.__webglFramebuffer[de]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let de=0,Se=ie.length;de<Se;de++){const tt=i.get(ie[de]);tt.__webglTexture===void 0&&(tt.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ie(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const Se=ie[de];G.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const tt=s.convert(Se.format,Se.colorSpace),ae=s.convert(Se.type),Me=_(Se.internalFormat,tt,ae,Se.colorSpace,R.isXRRenderTarget===!0),ze=Re(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,G.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ne(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(G.__webglFramebuffer[de][Se],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else ee(G.__webglFramebuffer[de],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let de=0,Se=ie.length;de<Se;de++){const tt=ie[de],ae=i.get(tt);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ne(t.TEXTURE_2D,tt),ee(G.__webglFramebuffer,R,tt,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(tt)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),ne(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(G.__webglFramebuffer[Se],R,E,t.COLOR_ATTACHMENT0,de,Se);else ee(G.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,de,0);g(E)&&d(de),n.unbindTexture()}R.depthBuffer&&Ue(R)}function et(R){const E=R.textures;for(let G=0,J=E.length;G<J;G++){const ie=E[G];if(g(ie)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(ie).__webglTexture;n.bindTexture(Q,Pe),d(Q),n.unbindTexture()}}}const me=[],b=[];function We(R){if(R.samples>0){if(Ie(R)===!1){const E=R.textures,G=R.width,J=R.height;let ie=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(R),de=E.length>1;if(de)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);const tt=i.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,tt,0)}t.blitFramebuffer(0,0,G,J,0,0,G,J,ie,t.NEAREST),l===!0&&(me.length=0,b.length=0,me.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(me.push(Q),b.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);const tt=i.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,tt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Re(R){return Math.min(r.maxSamples,R.samples)}function Ie(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function se(R,E){const G=R.colorSpace,J=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Nr&&G!==dr&&(st.getTransfer(G)===mt?(J!==ci||ie!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=M,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=K,this.rebindTextures=V,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ie}function w6(t,e){function n(i,r=dr){let s;const o=st.getTransfer(r);if(i===qi)return t.UNSIGNED_BYTE;if(i===Dp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Lp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===_2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===g2)return t.BYTE;if(i===v2)return t.SHORT;if(i===Ka)return t.UNSIGNED_SHORT;if(i===bp)return t.INT;if(i===fs)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===fl)return t.HALF_FLOAT;if(i===x2)return t.ALPHA;if(i===y2)return t.RGB;if(i===ci)return t.RGBA;if(i===S2)return t.LUMINANCE;if(i===M2)return t.LUMINANCE_ALPHA;if(i===vo)return t.DEPTH_COMPONENT;if(i===Do)return t.DEPTH_STENCIL;if(i===E2)return t.RED;if(i===Ip)return t.RED_INTEGER;if(i===w2)return t.RG;if(i===Np)return t.RG_INTEGER;if(i===Up)return t.RGBA_INTEGER;if(i===Pc||i===bc||i===Dc||i===Lc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pd||i===bd||i===Dd||i===Ld)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Id||i===Nd||i===Ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Id||i===Nd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fd||i===Od||i===zd||i===kd||i===Bd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===qd||i===Yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Od)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===Kd||i===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ic)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===T2||i===Jd||i===Qd||i===eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class T6 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A6={type:"move"};class a0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A6)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const R6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:R6,fragmentShader:C6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new Zu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b6 extends Ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,m=null;const x=new P6,g=n.getContextAttributes();let d=null,_=null;const v=[],S=[],C=new $e;let A=null;const T=new kn;T.layers.enable(1),T.viewport=new Ct;const P=new kn;P.layers.enable(2),P.viewport=new Ct;const W=[T,P],y=new T6;y.layers.enable(1),y.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=v[Y];return ee===void 0&&(ee=new a0,v[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=v[Y];return ee===void 0&&(ee=new a0,v[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=v[Y];return ee===void 0&&(ee=new a0,v[Y]=ee),ee.getHandSpace()};function F(Y){const ee=S.indexOf(Y.inputSource);if(ee===-1)return;const ce=v[ee];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",U);for(let Y=0;Y<v.length;Y++){const ee=S[Y];ee!==null&&(S[Y]=null,v[Y].disconnect(ee))}M=null,N=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ds(p.framebufferWidth,p.framebufferHeight,{format:ci,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,ce=null,fe=null;g.depth&&(fe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=g.stencil?Do:vo,ce=g.stencil?bo:fs);const Ue={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ds(h.textureWidth,h.textureHeight,{format:ci,type:qi,depthTexture:new z2(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(Y){for(let ee=0;ee<Y.removed.length;ee++){const ce=Y.removed[ee],fe=S.indexOf(ce);fe>=0&&(S[fe]=null,v[fe].disconnect(ce))}for(let ee=0;ee<Y.added.length;ee++){const ce=Y.added[ee];let fe=S.indexOf(ce);if(fe===-1){for(let V=0;V<v.length;V++)if(V>=S.length){S.push(ce),fe=V;break}else if(S[V]===null){S[V]=ce,fe=V;break}if(fe===-1)break}const Ue=v[fe];Ue&&Ue.connect(ce)}}const I=new k,K=new k;function D(Y,ee,ce){I.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ce.matrixWorld);const fe=I.distanceTo(K),Ue=ee.projectionMatrix.elements,V=ce.projectionMatrix.elements,Le=Ue[14]/(Ue[10]-1),et=Ue[14]/(Ue[10]+1),me=(Ue[9]+1)/Ue[5],b=(Ue[9]-1)/Ue[5],We=(Ue[8]-1)/Ue[0],Re=(V[8]+1)/V[0],Ie=Le*We,Ce=Le*Re,se=fe/(-We+Re),oe=se*-We;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const R=Le+se,E=et+se,G=Ie-oe,J=Ce+(fe-oe),ie=me*et/E*R,Q=b*et/E*R;Y.projectionMatrix.makePerspective(G,J,ie,Q,R,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function q(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,ce=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),y.near=P.near=T.near=ee,y.far=P.far=T.far=ce,(M!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,N=y.far);const fe=Y.parent,Ue=y.cameras;q(y,fe);for(let V=0;V<Ue.length;V++)q(Ue[V],fe);Ue.length===2?D(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),$(Y,y,fe)};function $(Y,ee,ce){ce===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Za*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function ye(Y,ee){if(u=ee.getViewerPose(c||o),m=ee,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let V=0;V<ce.length;V++){const Le=ce[V];let et=null;if(p!==null)et=p.getViewport(Le);else{const b=f.getViewSubImage(h,Le);et=b.viewport,V===0&&(e.setRenderTargetTextures(_,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let me=W[V];me===void 0&&(me=new kn,me.layers.enable(V),me.viewport=new Ct,W[V]=me),me.matrix.fromArray(Le.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Le.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(et.x,et.y,et.width,et.height),V===0&&(y.matrix.copy(me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(me)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const V=f.getDepthInformation(ce[0]);V&&V.isValid&&V.texture&&x.init(e,V,r.renderState)}}for(let ce=0;ce<v.length;ce++){const fe=S[ce],Ue=v[ce];fe!==null&&Ue!==void 0&&Ue.update(fe,ee,c||o)}ne&&ne(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ne=new O2;Ne.setAnimationLoop(ye),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const Vr=new Yi,D6=new xt;function L6(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,I2(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),m(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===ln&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===ln&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,S=_.envMapRotation;v&&(g.envMap.value=v,Vr.copy(S),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(D6.makeRotationFromEuler(Vr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I6(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function u(_){const v=f();_.__bindingPointIndex=v;const S=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let W=0,y=P.length;W<y;W++){const M=P[W];if(p(M,A,W,C)===!0){const N=M.__offset,F=Array.isArray(M.value)?M.value:[M.value];let H=0;for(let U=0;U<F.length;U++){const I=F[U],K=x(I);typeof I=="number"||typeof I=="boolean"?(M.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,N+H,M.__data)):I.isMatrix3?(M.__data[0]=I.elements[0],M.__data[1]=I.elements[1],M.__data[2]=I.elements[2],M.__data[3]=0,M.__data[4]=I.elements[3],M.__data[5]=I.elements[4],M.__data[6]=I.elements[5],M.__data[7]=0,M.__data[8]=I.elements[6],M.__data[9]=I.elements[7],M.__data[10]=I.elements[8],M.__data[11]=0):(I.toArray(M.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,S,C){const A=_.value,T=v+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function m(_){const v=_.uniforms;let S=0;const C=16;for(let T=0,P=v.length;T<P;T++){const W=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=W.length;y<M;y++){const N=W[y],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,U=F.length;H<U;H++){const I=F[H],K=x(I),D=S%C,q=D%K.boundary,$=D+q;S+=q,$!==0&&C-$<K.storage&&(S+=C-$),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=K.storage}}}const A=S%C;return A>0&&(S+=C-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class N6{constructor(e={}){const{canvas:n=yM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),m=new Int32Array(4);let x=null,g=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Ar,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,T=null,P=-1,W=null;const y=new Ct,M=new Ct;let N=null;const F=new je(0);let H=0,U=n.width,I=n.height,K=1,D=null,q=null;const $=new Ct(0,0,U,I),ne=new Ct(0,0,U,I);let ye=!1;const Ne=new F2;let Y=!1,ee=!1;const ce=new xt,fe=new xt,Ue=new k,V=new Ct,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function me(){return T===null?K:1}let b=i;function We(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ve,!1),b===null){const z="webgl2";if(b=We(z,w),b===null)throw We(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Re,Ie,Ce,se,oe,R,E,G,J,ie,Q,Pe,de,Se,tt,ae,Me,ze,ke,Ee,qe,He,ut,O;function ge(){Re=new kw(b),Re.init(),He=new w6(b,Re),Ie=new Lw(b,Re,e,He),Ce=new S6(b),Ie.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),se=new Vw(b),oe=new o6,R=new E6(b,Re,Ce,oe,Ie,He,se),E=new Nw(v),G=new zw(v),J=new qM(b),ut=new bw(b,J),ie=new Bw(b,J,se,ut),Q=new Ww(b,ie,J,se),ke=new Gw(b,Ie,R),ae=new Iw(oe),Pe=new s6(v,E,G,Re,Ie,ut,ae),de=new L6(v,oe),Se=new l6,tt=new p6(Re),ze=new Pw(v,E,G,Ce,Q,h,l),Me=new x6(v,Q,Ie),O=new I6(b,se,Ie,Ce),Ee=new Dw(b,Re,se),qe=new Hw(b,Re,se),se.programs=Pe.programs,v.capabilities=Ie,v.extensions=Re,v.properties=oe,v.renderLists=Se,v.shadowMap=Me,v.state=Ce,v.info=se}ge();const Z=new b6(v,b);this.xr=Z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(U,I,!1))},this.getSize=function(w){return w.set(U,I)},this.setSize=function(w,z,j=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,I=z,n.width=Math.floor(w*K),n.height=Math.floor(z*K),j===!0&&(n.style.width=w+"px",n.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(U*K,I*K).floor()},this.setDrawingBufferSize=function(w,z,j){U=w,I=z,K=j,n.width=Math.floor(w*j),n.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,z,j,X){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,z,j,X),Ce.viewport(y.copy($).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,z,j,X){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,z,j,X),Ce.scissor(M.copy(ne).multiplyScalar(K).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){Ce.setScissorTest(ye=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(w=!0,z=!0,j=!0){let X=0;if(w){let B=!1;if(T!==null){const le=T.texture.format;B=le===Up||le===Np||le===Ip}if(B){const le=T.texture.type,pe=le===qi||le===fs||le===Ka||le===bo||le===Dp||le===Lp,we=ze.getClearColor(),Ae=ze.getClearAlpha(),Fe=we.r,Oe=we.g,be=we.b;pe?(p[0]=Fe,p[1]=Oe,p[2]=be,p[3]=Ae,b.clearBufferuiv(b.COLOR,0,p)):(m[0]=Fe,m[1]=Oe,m[2]=be,m[3]=Ae,b.clearBufferiv(b.COLOR,0,m))}else X|=b.COLOR_BUFFER_BIT}z&&(X|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),tt.dispose(),oe.dispose(),E.dispose(),G.dispose(),Q.dispose(),ut.dispose(),O.dispose(),Pe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Jp),Z.removeEventListener("sessionend",Qp),Fr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=se.autoReset,z=Me.enabled,j=Me.autoUpdate,X=Me.needsUpdate,B=Me.type;ge(),se.autoReset=w,Me.enabled=z,Me.autoUpdate=j,Me.needsUpdate=X,Me.type=B}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const z=w.target;z.removeEventListener("dispose",Ke),Pt(z)}function Pt(w){dn(w),oe.remove(w)}function dn(w){const z=oe.get(w).programs;z!==void 0&&(z.forEach(function(j){Pe.releaseProgram(j)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,X,B,le){z===null&&(z=Le);const pe=B.isMesh&&B.matrixWorld.determinant()<0,we=Fx(w,z,j,X,B);Ce.setMaterial(X,pe);let Ae=j.index,Fe=1;if(X.wireframe===!0){if(Ae=ie.getWireframeAttribute(j),Ae===void 0)return;Fe=2}const Oe=j.drawRange,be=j.attributes.position;let ot=Oe.start*Fe,ht=(Oe.start+Oe.count)*Fe;le!==null&&(ot=Math.max(ot,le.start*Fe),ht=Math.min(ht,(le.start+le.count)*Fe)),Ae!==null?(ot=Math.max(ot,0),ht=Math.min(ht,Ae.count)):be!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,be.count));const wt=ht-ot;if(wt<0||wt===1/0)return;ut.setup(B,X,we,j,Ae);let yn,it=Ee;if(Ae!==null&&(yn=J.get(Ae),it=qe,it.setIndex(yn)),B.isMesh)X.wireframe===!0?(Ce.setLineWidth(X.wireframeLinewidth*me()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(B.isLine){let De=X.linewidth;De===void 0&&(De=1),Ce.setLineWidth(De*me()),B.isLineSegments?it.setMode(b.LINES):B.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else B.isPoints?it.setMode(b.POINTS):B.isSprite&&it.setMode(b.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,Ht=B._multiDrawCounts,rt=B._multiDrawCount,Zn=Ae?J.get(Ae).bytesPerElement:1,Ss=oe.get(X).currentProgram.getUniforms();for(let Sn=0;Sn<rt;Sn++)Ss.setValue(b,"_gl_DrawID",Sn),it.render(De[Sn]/Zn,Ht[Sn])}else if(B.isInstancedMesh)it.renderInstances(ot,wt,B.count);else if(j.isInstancedBufferGeometry){const De=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ht=Math.min(j.instanceCount,De);it.renderInstances(ot,wt,Ht)}else it.render(ot,wt)};function nt(w,z,j){w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,ml(w,z,j),w.side=Pr,w.needsUpdate=!0,ml(w,z,j),w.side=_i):ml(w,z,j)}this.compile=function(w,z,j=null){j===null&&(j=w),g=tt.get(j),g.init(z),_.push(g),j.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const X=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const we=le[pe];nt(we,j,B),X.add(we)}else nt(le,j,B),X.add(le)}),_.pop(),g=null,X},this.compileAsync=function(w,z,j=null){const X=this.compile(w,z,j);return new Promise(B=>{function le(){if(X.forEach(function(pe){oe.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){B(w);return}setTimeout(le,10)}Re.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let hn=null;function Ti(w){hn&&hn(w)}function Jp(){Fr.stop()}function Qp(){Fr.start()}const Fr=new O2;Fr.setAnimationLoop(Ti),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(w){hn=w,Z.setAnimationLoop(w),w===null?Fr.stop():Fr.start()},Z.addEventListener("sessionstart",Jp),Z.addEventListener("sessionend",Qp),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,T),g=tt.get(w,_.length),g.init(z),_.push(g),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ne.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,Y=ae.init(this.clippingPlanes,ee),x=Se.get(w,d.length),x.init(),d.push(x),Z.enabled===!0&&Z.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&nf(le,z,-1/0,v.sortObjects)}nf(w,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,q),et=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,et&&ze.addToRenderList(x,w),this.info.render.frame++,Y===!0&&ae.beginShadows();const j=g.state.shadowsArray;Me.render(j,w,z),Y===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,B=x.transmissive;if(g.setupLights(),z.isArrayCamera){const le=z.cameras;if(B.length>0)for(let pe=0,we=le.length;pe<we;pe++){const Ae=le[pe];tm(X,B,w,Ae)}et&&ze.render(w);for(let pe=0,we=le.length;pe<we;pe++){const Ae=le[pe];em(x,w,Ae,Ae.viewport)}}else B.length>0&&tm(X,B,w,z),et&&ze.render(w),em(x,w,z);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,z),ut.resetDefaultState(),P=-1,W=null,_.pop(),_.length>0?(g=_[_.length-1],Y===!0&&ae.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function nf(w,z,j,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ne.intersectsSprite(w)){X&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const pe=Q.update(w),we=w.material;we.visible&&x.push(w,pe,we,j,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ne.intersectsObject(w))){const pe=Q.update(w),we=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),V.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),V.copy(pe.boundingSphere.center)),V.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){const Ae=pe.groups;for(let Fe=0,Oe=Ae.length;Fe<Oe;Fe++){const be=Ae[Fe],ot=we[be.materialIndex];ot&&ot.visible&&x.push(w,pe,ot,j,V.z,be)}}else we.visible&&x.push(w,pe,we,j,V.z,null)}}const le=w.children;for(let pe=0,we=le.length;pe<we;pe++)nf(le[pe],z,j,X)}function em(w,z,j,X){const B=w.opaque,le=w.transmissive,pe=w.transparent;g.setupLightsView(j),Y===!0&&ae.setGlobalState(v.clippingPlanes,j),X&&Ce.viewport(y.copy(X)),B.length>0&&pl(B,z,j),le.length>0&&pl(le,z,j),pe.length>0&&pl(pe,z,j),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function tm(w,z,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new ds(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?fl:qi,minFilter:ts,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const le=g.state.transmissionRenderTarget[X.id],pe=X.viewport||y;le.setSize(pe.z,pe.w);const we=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(F),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),et&&ze.render(j);const Ae=v.toneMapping;v.toneMapping=Ar;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Y===!0&&ae.setGlobalState(v.clippingPlanes,X),pl(w,j,X),R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let be=0,ot=z.length;be<ot;be++){const ht=z[be],wt=ht.object,yn=ht.geometry,it=ht.material,De=ht.group;if(it.side===_i&&wt.layers.test(X.layers)){const Ht=it.side;it.side=ln,it.needsUpdate=!0,nm(wt,j,X,yn,it,De),it.side=Ht,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le))}v.setRenderTarget(we),v.setClearColor(F,H),Fe!==void 0&&(X.viewport=Fe),v.toneMapping=Ae}function pl(w,z,j){const X=z.isScene===!0?z.overrideMaterial:null;for(let B=0,le=w.length;B<le;B++){const pe=w[B],we=pe.object,Ae=pe.geometry,Fe=X===null?pe.material:X,Oe=pe.group;we.layers.test(j.layers)&&nm(we,z,j,Ae,Fe,Oe)}}function nm(w,z,j,X,B,le){w.onBeforeRender(v,z,j,X,B,le),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,z,j,X,w,le),B.transparent===!0&&B.side===_i&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,v.renderBufferDirect(j,z,X,B,w,le),B.side=Pr,B.needsUpdate=!0,v.renderBufferDirect(j,z,X,B,w,le),B.side=_i):v.renderBufferDirect(j,z,X,B,w,le),w.onAfterRender(v,z,j,X,B,le)}function ml(w,z,j){z.isScene!==!0&&(z=Le);const X=oe.get(w),B=g.state.lights,le=g.state.shadowsArray,pe=B.state.version,we=Pe.getParameters(w,B.state,le,z,j),Ae=Pe.getProgramCacheKey(we);let Fe=X.programs;X.environment=w.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Ke),Fe=new Map,X.programs=Fe);let Oe=Fe.get(Ae);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===pe)return rm(w,we),Oe}else we.uniforms=Pe.getUniforms(w),w.onBeforeCompile(we,v),Oe=Pe.acquireProgram(we,Ae),Fe.set(Ae,Oe),X.uniforms=we.uniforms;const be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=ae.uniform),rm(w,we),X.needsLights=zx(w),X.lightsStateVersion=pe,X.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.directionalShadowMap.value=B.state.directionalShadowMap,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotShadowMap.value=B.state.spotShadowMap,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMap.value=B.state.pointShadowMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function im(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Uc.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function rm(w,z){const j=oe.get(w);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Fx(w,z,j,X,B){z.isScene!==!0&&(z=Le),R.resetTextureUnits();const le=z.fog,pe=X.isMeshStandardMaterial?z.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Nr,Ae=(X.isMeshStandardMaterial?G:E).get(X.envMap||pe),Fe=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let wt=Ar;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=v.toneMapping);const yn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,it=yn!==void 0?yn.length:0,De=oe.get(X),Ht=g.state.lights;if(Y===!0&&(ee===!0||w!==W)){const Nn=w===W&&X.id===P;ae.setState(X,w,Nn)}let rt=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ht.state.version||De.outputColorSpace!==we||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==Ae||X.fog===!0&&De.fog!==le||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ae.numPlanes||De.numIntersection!==ae.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Oe||De.morphTargets!==be||De.morphNormals!==ot||De.morphColors!==ht||De.toneMapping!==wt||De.morphTargetsCount!==it)&&(rt=!0):(rt=!0,De.__version=X.version);let Zn=De.currentProgram;rt===!0&&(Zn=ml(X,z,B));let Ss=!1,Sn=!1,rf=!1;const At=Zn.getUniforms(),Qi=De.uniforms;if(Ce.useProgram(Zn.program)&&(Ss=!0,Sn=!0,rf=!0),X.id!==P&&(P=X.id,Sn=!0),Ss||W!==w){Ie.reverseDepthBuffer?(ce.copy(w.projectionMatrix),MM(ce),EM(ce),At.setValue(b,"projectionMatrix",ce)):At.setValue(b,"projectionMatrix",w.projectionMatrix),At.setValue(b,"viewMatrix",w.matrixWorldInverse);const Nn=At.map.cameraPosition;Nn!==void 0&&Nn.setValue(b,Ue.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,Sn=!0,rf=!0)}if(B.isSkinnedMesh){At.setOptional(b,B,"bindMatrix"),At.setOptional(b,B,"bindMatrixInverse");const Nn=B.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),At.setValue(b,"boneTexture",Nn.boneTexture,R))}B.isBatchedMesh&&(At.setOptional(b,B,"batchingTexture"),At.setValue(b,"batchingTexture",B._matricesTexture,R),At.setOptional(b,B,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",B._indirectTexture,R),At.setOptional(b,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",B._colorsTexture,R));const sf=j.morphAttributes;if((sf.position!==void 0||sf.normal!==void 0||sf.color!==void 0)&&ke.update(B,j,Zn),(Sn||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,At.setValue(b,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qi.envMap.value=Ae,Qi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Qi.envMapIntensity.value=z.environmentIntensity),Sn&&(At.setValue(b,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&Ox(Qi,rf),le&&X.fog===!0&&de.refreshFogUniforms(Qi,le),de.refreshMaterialUniforms(Qi,X,K,I,g.state.transmissionRenderTarget[w.id]),Uc.upload(b,im(De),Qi,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Uc.upload(b,im(De),Qi,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(b,"center",B.center),At.setValue(b,"modelViewMatrix",B.modelViewMatrix),At.setValue(b,"normalMatrix",B.normalMatrix),At.setValue(b,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Nn=X.uniformsGroups;for(let of=0,kx=Nn.length;of<kx;of++){const sm=Nn[of];O.update(sm,Zn),O.bind(sm,Zn)}}return Zn}function Ox(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function zx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,z,j){oe.get(w.texture).__webglTexture=z,oe.get(w.depthTexture).__webglTexture=j;const X=oe.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const j=oe.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){T=w,C=z,A=j;let X=!0,B=null,le=!1,pe=!1;if(w){const Ae=oe.get(w);if(Ae.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(b.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Ae.__hasExternalTextures)R.rebindTextures(w,oe.get(w.texture).__webglTexture,oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(Ae.__boundDepthTexture!==be){if(be!==null&&oe.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Oe=oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?B=Oe[z][j]:B=Oe[z],le=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?B=oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[j]:B=Oe,y.copy(w.viewport),M.copy(w.scissor),N=w.scissorTest}else y.copy($).multiplyScalar(K).floor(),M.copy(ne).multiplyScalar(K).floor(),N=ye;if(Ce.bindFramebuffer(b.FRAMEBUFFER,B)&&X&&Ce.drawBuffers(w,B),Ce.viewport(y),Ce.scissor(M),Ce.setScissorTest(N),le){const Ae=oe.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,j)}else if(pe){const Ae=oe.get(w.texture),Fe=z||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,j||0,Fe)}P=-1},this.readRenderTargetPixels=function(w,z,j,X,B,le,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){Ce.bindFramebuffer(b.FRAMEBUFFER,we);try{const Ae=w.texture,Fe=Ae.format,Oe=Ae.type;if(!Ie.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&j>=0&&j<=w.height-B&&b.readPixels(z,j,X,B,He.convert(Fe),He.convert(Oe),le)}finally{const Ae=T!==null?oe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,z,j,X,B,le,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){const Ae=w.texture,Fe=Ae.format,Oe=Ae.type;if(!Ie.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-X&&j>=0&&j<=w.height-B){Ce.bindFramebuffer(b.FRAMEBUFFER,we);const be=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(z,j,X,B,He.convert(Fe),He.convert(Oe),0);const ot=T!==null?oe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,ot);const ht=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await SM(b,ht,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le),b.deleteBuffer(be),b.deleteSync(ht),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,j=0){w.isTexture!==!0&&(Nc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-j),B=Math.floor(w.image.width*X),le=Math.floor(w.image.height*X),pe=z!==null?z.x:0,we=z!==null?z.y:0;R.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,j,0,0,pe,we,B,le),Ce.unbindTexture()},this.copyTextureToTexture=function(w,z,j=null,X=null,B=0){w.isTexture!==!0&&(Nc("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],z=arguments[2],B=arguments[3]||0,j=null);let le,pe,we,Ae,Fe,Oe;j!==null?(le=j.max.x-j.min.x,pe=j.max.y-j.min.y,we=j.min.x,Ae=j.min.y):(le=w.image.width,pe=w.image.height,we=0,Ae=0),X!==null?(Fe=X.x,Oe=X.y):(Fe=0,Oe=0);const be=He.convert(z.format),ot=He.convert(z.type);R.setTexture2D(z,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const ht=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),De=b.getParameter(b.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[B]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,B,Fe,Oe,le,pe,be,ot,Ht.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,B,Fe,Oe,Ht.width,Ht.height,be,Ht.data):b.texSubImage2D(b.TEXTURE_2D,B,Fe,Oe,le,pe,be,ot,Ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,De),B===0&&z.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j=null,X=null,B=0){w.isTexture!==!0&&(Nc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,w=arguments[2],z=arguments[3],B=arguments[4]||0);let le,pe,we,Ae,Fe,Oe,be,ot,ht;const wt=w.isCompressedTexture?w.mipmaps[B]:w.image;j!==null?(le=j.max.x-j.min.x,pe=j.max.y-j.min.y,we=j.max.z-j.min.z,Ae=j.min.x,Fe=j.min.y,Oe=j.min.z):(le=wt.width,pe=wt.height,we=wt.depth,Ae=0,Fe=0,Oe=0),X!==null?(be=X.x,ot=X.y,ht=X.z):(be=0,ot=0,ht=0);const yn=He.convert(z.format),it=He.convert(z.type);let De;if(z.isData3DTexture)R.setTexture3D(z,0),De=b.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)R.setTexture2DArray(z,0),De=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const Ht=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Zn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ss=b.getParameter(b.UNPACK_SKIP_ROWS),Sn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(De,B,be,ot,ht,le,pe,we,yn,it,wt.data):z.isCompressedArrayTexture?b.compressedTexSubImage3D(De,B,be,ot,ht,le,pe,we,yn,wt.data):b.texSubImage3D(De,B,be,ot,ht,le,pe,we,yn,it,wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Zn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ss),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Sn),B===0&&z.generateMipmaps&&b.generateMipmap(De),Ce.unbindTexture()},this.initRenderTarget=function(w){oe.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Ce.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Fp?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Yu?"display-p3":"srgb"}}class U6 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class F6{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=th,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new k;class mu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new on(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class G2 extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Os;const ia=new k,zs=new k,ks=new k,Bs=new $e,ra=new $e,W2=new xt,ec=new k,sa=new k,tc=new k,u1=new $e,l0=new $e,f1=new $e;class O6 extends Qt{constructor(e=new G2){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Dt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new F6(n,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new mu(i,3,0,!1)),Os.setAttribute("uv",new mu(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new $e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),W2.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;nc(ec.set(-.5,-.5,0),ks,o,zs,r,s),nc(sa.set(.5,-.5,0),ks,o,zs,r,s),nc(tc.set(.5,.5,0),ks,o,zs,r,s),u1.set(0,0),l0.set(1,0),f1.set(1,1);let a=e.ray.intersectTriangle(ec,sa,tc,!1,ia);if(a===null&&(nc(sa.set(-.5,.5,0),ks,o,zs,r,s),l0.set(0,1),a=e.ray.intersectTriangle(ec,tc,sa,!1,ia),a===null))return;const l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||n.push({distance:l,point:ia.clone(),uv:Bn.getInterpolation(ia,ec,sa,tc,u1,l0,f1,new $e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nc(t,e,n,i,r,s){Bs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ra.x=s*Bs.x-r*Bs.y,ra.y=r*Bs.x+s*Bs.y):ra.copy(Bs),t.copy(e),t.x+=ra.x,t.y+=ra.y,t.applyMatrix4(W2)}class Yr extends ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gu=new k,vu=new k,d1=new xt,oa=new Ku,ic=new hl,c0=new k,h1=new k;class Fc extends Qt{constructor(e=new Dt,n=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)gu.fromBufferAttribute(n,r-1),vu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=gu.distanceTo(vu);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(r),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;d1.copy(r).invert(),oa.copy(e.ray).applyMatrix4(d1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const d=u.getX(x),_=u.getX(x+1),v=rc(this,e,oa,l,d,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(p),d=rc(this,e,oa,l,x,g);d&&n.push(d)}}else{const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const d=rc(this,e,oa,l,x,x+1);d&&n.push(d)}if(this.isLineLoop){const x=rc(this,e,oa,l,m-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rc(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(gu.fromBufferAttribute(o,r),vu.fromBufferAttribute(o,s),n.distanceSqToSegment(gu,vu,c0,h1)>i)return;c0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(c0);if(!(l<e.near||l>e.far))return{distance:l,point:h1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class u0 extends Fc{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class z6 extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const p1=new xt,ih=new Ku,sc=new hl,oc=new k;class k6 extends Qt{constructor(e=new Dt,n=new z6){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(r),sc.radius+=s,e.ray.intersectsSphere(sc)===!1)return;p1.copy(r).invert(),ih.copy(e.ray).applyMatrix4(p1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=h,x=p;m<x;m++){const g=c.getX(m);oc.fromBufferAttribute(f,g),m1(oc,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=h,x=p;m<x;m++)oc.fromBufferAttribute(f,m),m1(oc,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function m1(t,e,n,i,r,s,o){const a=ih.distanceSqToPoint(t);if(a<n){const l=new k;ih.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class B6 extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bp extends Dt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,p=new k,m=new $e;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){const d=s+g/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,u.push(m.x,m.y)}f+=h}for(let x=0;x<r;x++){const g=x*(i+1);for(let d=0;d<i;d++){const _=d+g,v=_,S=_+i+1,C=_+i+2,A=_+1;a.push(v,S,A),a.push(S,C,A)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hp extends Dt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new k,h=new k,p=[],m=[],x=[],g=[];for(let d=0;d<=i;d++){const _=[],v=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(A+S,1-v),_.push(c++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const v=u[d][_+1],S=u[d][_],C=u[d+1][_],A=u[d+1][_+1];(d!==0||o>0)&&p.push(v,S,A),(d!==i-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vp extends Dt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new k,f=new k,h=new k;for(let p=0;p<=i;p++)for(let m=0;m<=r;m++){const x=m/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(x),f.y=(e+n*Math.cos(g))*Math.sin(x),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=r;m++){const x=(r+1)*p+m-1,g=(r+1)*(p-1)+m-1,d=(r+1)*(p-1)+m,_=(r+1)*p+m;o.push(x,g,_),o.push(g,d,_)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class H6 extends Yr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const g1=new xt;class V6{constructor(e,n,i=0,r=1/0){this.ray=new Ku(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return g1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g1),this}intersectObject(e,n=!0,i=[]){return rh(e,this,i,n),i.sort(v1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rh(e[r],this,i,n);return i.sort(v1),i}}function v1(t,e){return t.distance-e.distance}function rh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)rh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);const Rn=Math.PI/180,Ja=180/Math.PI;function Qu(t){return Math.max(-1,Math.min(1,t))}function _u(t,e,n,i){const r=(i-e)*Rn;let s=((n-t+540)%360-180)*Rn;const o=Math.sin(r/2),a=Math.sin(s/2),l=o*o+Math.cos(e*Rn)*Math.cos(i*Rn)*a*a;return 2*Math.asin(Qu(Math.sqrt(l)))*Ja}function Gp(t,e,n,i){const r=i*Rn,s=n*Rn,o=e*Rn,a=t*Rn,l=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),c=Math.asin(Qu(l)),u=Math.sin(s)*Math.sin(r)*Math.cos(o),f=Math.cos(r)-Math.sin(o)*l;return[((a+Math.atan2(u,f))*Ja%360+360)%360,c*Ja]}function _1(t,e){const n=e*Rn,i=t*Rn;return[Math.cos(n)*Math.cos(i),Math.cos(n)*Math.sin(i),Math.sin(n)]}function G6(t,e,n){const i=Math.hypot(t,e,n)||1;return t/=i,e/=i,n/=i,[(Math.atan2(e,t)*Ja%360+360)%360,Math.asin(Qu(n))*Ja]}function Wp(t,e,n,i,r=96){const[s,o,a]=_1(t,e),[l,c,u]=_1(n,i);let f=s*l+o*c+a*u;if(f=Qu(f),f>1-1e-12){const _=[(t%360+360)%360,e];return Array.from({length:r+1},()=>[_[0],_[1]])}const h=Math.acos(f);let p,m,x;const g=Math.sin(h);if(g>1e-9)p=(l-f*s)/g,m=(c-f*o)/g,x=(u-f*a)/g;else{const _=Math.abs(a)<.9?[0,0,1]:[1,0,0];p=o*_[2]-a*_[1],m=a*_[0]-s*_[2],x=s*_[1]-o*_[0];const v=Math.hypot(p,m,x)||1;p/=v,m/=v,x/=v}const d=[];for(let _=0;_<=r;_++){const v=_/r,S=Math.cos(v*h),C=Math.sin(v*h),A=S*s+C*p,T=S*o+C*m,P=S*a+C*x;d.push(G6(A,T,P))}return d}function j2(t){return{type:"LineString",coordinates:t}}function W6(t,e,n,i=128){const r=[];for(let s=0;s<=i;s++)r.push(Gp(t,e,360*s/i,n));return r}function xi(t){const n=(t%360+360)%360/15,i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${String(i).padStart(2,"0")}h${String(r).padStart(2,"0")}m${String(s%60).padStart(2,"0")}s`}function yi(t){const e=t<0?"−":"+";let n=Math.abs(t);const i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${e}${String(i).padStart(2,"0")}°${String(r).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`}function x1(t){return["北","东北","东","东南","南","西南","西","西北"][Math.round((t%360+360)%360/45)%8]}const ni=1;function j6(t){return t.kind==="sun"?new je(16765565):t.kind==="moon"?new je(14673650):t.kind==="planet"?new je(10406911):new je(16777215)}function y1(t){return t==="sun"||t==="moon"?"diamond":t==="planet"?"square":"circle"}function X6(t){var h;const{sky:e,fov:n,horizonClip:i,showGraticule:r,annotations:s,selectedId:o,hoverId:a}=t,l=Be.useRef(null),c=Be.useRef(null),[u,f]=Be.useState(null);return Be.useEffect(()=>{if(l.current)try{const p=new $6(l.current,t);return c.current=p,()=>{p.dispose(),c.current=null}}catch{f("当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。")}},[]),Be.useEffect(()=>{var p;(p=c.current)==null||p.update(t)}),Be.useEffect(()=>{var m;if(!t.focusToken)return;const p=e.targets.find(x=>x.id===t.focusToken.id);p&&((m=c.current)==null||m.flyTo(p.hx,p.hy,p.hz))},[(h=t.focusToken)==null?void 0:h.nonce]),L.jsxs("div",{className:"globe-wrap",children:[u?L.jsx("div",{className:"globe-mount globe-error",children:u}):L.jsx("div",{ref:l,className:"globe-mount"}),L.jsxs("div",{className:"globe-hint",children:["拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）",L.jsx("br",{}),"地平坐标系：红圈=地平（N/E/S/W），绿圈=视场（角半径 ",n.radiusDeg.toFixed(1),"°），网格=J2000 赤道坐标",i?" · 已开启地平线裁切":""]})]})}class $6{constructor(e,n){Ze(this,"renderer");Ze(this,"scene");Ze(this,"camera");Ze(this,"raf",0);Ze(this,"mount");Ze(this,"resizeObs");Ze(this,"points");Ze(this,"pointMaterial");Ze(this,"fovLine");Ze(this,"horizonLine");Ze(this,"groundDisc");Ze(this,"graticuleGroup",new mr);Ze(this,"equatorLine",null);Ze(this,"highlight");Ze(this,"labelsGroup",new mr);Ze(this,"annotationsGroup",new mr);Ze(this,"measurementsGroup",new mr);Ze(this,"raycaster",new V6);Ze(this,"pickSphere");Ze(this,"drag",{active:!1,x:0,y:0,moved:0});Ze(this,"camDir",new k(0,0,1));Ze(this,"camTargetDir",new k(0,0,1));Ze(this,"props");Ze(this,"positionData",[]);Ze(this,"disposed",!1);Ze(this,"cleanupEvents",()=>{});Ze(this,"everMoved",!1);Ze(this,"animate",()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.camDir.lerp(this.camTargetDir,.12).normalize(),this.camera.lookAt(this.camDir.clone().multiplyScalar(ni)),this.camera.up.set(0,0,1),this.renderer.render(this.scene,this.camera))});this.mount=e,this.props=n,this.renderer=new N6({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene=new U6,this.scene.background=new je(461332),this.camera=new kn(60,1,.01,10),this.camera.position.set(0,0,1e-4),this.camera.up.set(0,0,1),this.camera.lookAt(this.camDir),this.pickSphere=new An(new Hp(ni,48,32),new io({visible:!1,side:ln})),this.scene.add(this.pickSphere),this.highlight=new An(new Bp(.022,.032,32),new io({color:16766282,side:_i,transparent:!0,opacity:.95})),this.highlight.visible=!1,this.scene.add(this.highlight),this.scene.add(this.graticuleGroup),this.scene.add(this.labelsGroup),this.scene.add(this.annotationsGroup),this.scene.add(this.measurementsGroup),this.initStars(),this.initStaticFrames(),this.resize(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.bindEvents(),this.update(n),this.animate()}initStars(){const n=new Dt,i=new Float32Array(256*3),r=new Float32Array(256),s=new Float32Array(256*3),o=new Float32Array(256);n.setAttribute("position",new on(i,3)),n.setAttribute("aSize",new on(r,1)),n.setAttribute("aColor",new on(s,3)),n.setAttribute("aShape",new on(o,1)),n.setDrawRange(0,0),this.pointMaterial=new Ki({transparent:!0,depthWrite:!1,uniforms:{uPxRatio:{value:this.renderer.getPixelRatio()}},vertexShader:`
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aShape;
        uniform float uPxRatio;
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vColor = aColor;
          vShape = aShape;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPxRatio * 220.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = 0.0;
          if (vShape < 0.5) {
            // 圆星点
            alpha = smoothstep(0.5, 0.18, d);
          } else if (vShape < 1.5) {
            // 方形（行星）
            vec2 q = abs(uv);
            alpha = (max(q.x, q.y) < 0.34) ? 1.0 : 0.0;
          } else {
            // 菱形（日月）
            float d2 = abs(uv.x) + abs(uv.y);
            alpha = smoothstep(0.5, 0.3, d2);
          }
          if (alpha <= 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }`}),this.points=new k6(n,this.pointMaterial),this.points.frustumCulled=!1,this.scene.add(this.points)}makeLine(e,n,i=1){const r=new Dt().setFromPoints(e),s=new Yr({color:n,transparent:i<1,opacity:i});return new u0(r,s)}initStaticFrames(){const e=[];for(let r=0;r<128;r++){const s=2*Math.PI*r/128;e.push(new k(Math.cos(s),-Math.sin(s),0))}this.horizonLine=new u0(new Dt().setFromPoints(e),new Yr({color:16735581})),this.scene.add(this.horizonLine);const n=[];for(let r=0;r<=128;r++){const s=2*Math.PI*r/128;n.push(new k(Math.cos(s)*ni,-Math.sin(s)*ni,-.002))}this.groundDisc=new Fc(new Dt().setFromPoints([...n,new k(0,0,-ni*.98),n[0]]),new Yr({color:16735581,transparent:!0,opacity:.25})),this.scene.add(this.groundDisc);const i=[["N 北",1,0,0],["E 东",0,-1,0],["S 南",-1,0,0],["W 西",0,1,0]];for(const[r,s,o,a]of i)this.labelsGroup.add(this.makeTextSprite(r,new k(s,o,a),"#ff8a8a"));this.labelsGroup.add(this.makeTextSprite("天顶 Z",new k(0,0,1),"#9fd0ff")),this.labelsGroup.add(this.makeTextSprite("天底",new k(0,0,-1),"#8a6a6a"))}makeTextSprite(e,n,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.font="28px sans-serif",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new B6(r),a=new G2({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new O6(a);return l.position.copy(n.clone().multiplyScalar(ni*1.01)),l.scale.set(.09,.0225,1),l}bindEvents(){const e=this.renderer.domElement;e.style.cursor="grab";const n=o=>{this.drag={active:!0,x:o.clientX,y:o.clientY,moved:0},e.setPointerCapture(o.pointerId),e.style.cursor="grabbing"},i=o=>{const a=e.getBoundingClientRect();if(this.drag.active){const l=o.clientX-this.drag.x,c=o.clientY-this.drag.y;this.drag.moved+=Math.abs(l)+Math.abs(c),this.drag.x=o.clientX,this.drag.y=o.clientY,this.orbit(l,c)}else{const l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onHover(l),e.style.cursor=l?"pointer":"grab"}},r=o=>{if(this.drag.active&&this.drag.moved<5){const a=e.getBoundingClientRect(),l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onSelect(l)}this.drag.active=!1,e.style.cursor="grab"},s=o=>{o.preventDefault();const a=Mg.clamp(this.camera.fov+o.deltaY*.05,8,100);this.camera.fov=a,this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),window.addEventListener("pointerup",r),e.addEventListener("wheel",s,{passive:!1}),this.cleanupEvents=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),e.removeEventListener("wheel",s)}}orbit(e,n){const r=this.camDir,s=new k(0,0,1),o=new k().crossVectors(s,r).normalize(),a=new hs().setFromAxisAngle(s,-e*.25*Math.PI/180),l=new hs().setFromAxisAngle(o,-n*.25*Math.PI/180);r.applyQuaternion(a).applyQuaternion(l).normalize(),Math.abs(r.z)>.999&&(r.z=Math.sign(r.z)*.999,r.normalize()),this.camTargetDir.copy(r),this.everMoved=!0}pick(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new $e(e/i.width*2-1,-(n/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster;let s=null;for(const o of this.positionData){const a=o.vec,l=a.dot(this.camDir);if(l<=0)continue;const c=a.clone().project(this.camera),u=(c.x+1)/2*i.width,f=(-c.y+1)/2*i.height,h=(r.x+1)/2*i.width,p=(-r.y+1)/2*i.height;Math.hypot(u-h,f-p)<10&&(!s||l>s.dot)&&(s={id:o.id,dot:l})}return(s==null?void 0:s.id)??null}flyTo(e,n,i){this.camTargetDir.set(e,n,i).normalize(),this.camera.fov=35,this.camera.updateProjectionMatrix()}updateStars(e,n){const i=e.targets.filter(u=>u.inFov&&u.passesMag&&(!n||u.aboveHorizon)),r=this.points.geometry.getAttribute("position").count,s=Math.min(i.length,r),o=this.points.geometry.getAttribute("position"),a=this.points.geometry.getAttribute("aSize"),l=this.points.geometry.getAttribute("aColor"),c=this.points.geometry.getAttribute("aShape");this.positionData=[];for(let u=0;u<s;u++){const f=i[u],h=new k(f.hx,f.hy,f.hz).multiplyScalar(ni);o.setXYZ(u,h.x,h.y,h.z);const p=f.id===this.props.selectedId||f.id===this.props.hoverId;let m=Mg.clamp(2.6-f.mag*.28,.5,3.4)*.012;f.kind!=="star"&&(m=Math.max(m,.04)),p&&(m*=1.6),a.setX(u,m);const x=j6(f);l.setXYZ(u,x.r,x.g,x.b),c.setX(u,y1(f.kind)==="circle"?0:y1(f.kind)==="square"?1:2),this.positionData.push({id:f.id,vec:new k(f.hx,f.hy,f.hz)})}this.points.geometry.setDrawRange(0,s),o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0}update(e){this.props=e,this.updateStars(e.sky,e.horizonClip),this.rebuildFovCircle(e),this.graticuleGroup.visible=e.showGraticule,this.rebuildGraticuleContent(e),this.rebuildAnnotations(e),this.rebuildMeasurements(e);const n=e.selectedId?e.sky.targets.find(i=>i.id===e.selectedId):null;if(n?(this.highlight.visible=!0,this.highlight.position.set(n.hx,n.hy,n.hz),this.highlight.lookAt(0,0,0)):this.highlight.visible=!1,!this.everMoved){const i=this.centerVec(e);this.camDir.copy(i),this.camTargetDir.copy(i)}}centerVec(e){const n=e.sky.centerAz*Rn,i=e.sky.centerAlt*Rn;return new k(Math.cos(i)*Math.cos(n),-Math.cos(i)*Math.sin(n),Math.sin(i)).normalize()}rebuildFovCircle(e){this.fovLine&&(this.scene.remove(this.fovLine),this.fovLine.geometry.dispose());const n=this.centerVec(e),i=e.fov.radiusDeg*Rn,r=Math.abs(n.z)<.9?new k(0,0,1):new k(1,0,0),s=new k().crossVectors(r,n).normalize(),o=new k().crossVectors(n,s).normalize(),a=[];for(let l=0;l<128;l++){const c=2*Math.PI*l/128,u=n.clone().multiplyScalar(Math.cos(i)).add(s.clone().multiplyScalar(Math.sin(i)*Math.cos(c))).add(o.clone().multiplyScalar(Math.sin(i)*Math.sin(c))).normalize().multiplyScalar(ni*1.002);a.push(u)}this.fovLine=new u0(new Dt().setFromPoints(a),new Yr({color:5759881})),this.scene.add(this.fovLine)}rebuildGraticuleContent(e){if([...this.graticuleGroup.children].forEach(i=>{var s,o;(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.graticuleGroup.clear(),!e.showGraticule){this.equatorLine&&(this.scene.remove(this.equatorLine),this.equatorLine=null);return}const n=e.graticuleHorizontal;if(n)for(const i of[...n.parallels,...n.meridians]){const r=i.map(([o,a,l])=>new k(o,a,l)),s=new Fc(new Dt().setFromPoints(r),new Yr({color:3820139,transparent:!0,opacity:.7}));this.graticuleGroup.add(s)}}rebuildAnnotations(e){[...this.annotationsGroup.children].forEach(n=>{var r,s,o;const i=n;(r=i.material.map)==null||r.dispose(),(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.annotationsGroup.clear();for(const n of e.annotations){const i=e.sky.targets.find(s=>Math.abs(s.ra-n.ra)<1e-9&&Math.abs(s.dec-n.dec)<1e-9);if(!i)continue;const r=this.makeTextSprite(`📝 ${n.text}`,new k(i.hx,i.hy,i.hz),n.color);this.annotationsGroup.add(r)}}rebuildMeasurements(e){[...this.measurementsGroup.children].forEach(i=>{var o,a,l,c;const r=i;(a=(o=r.geometry)==null?void 0:o.dispose)==null||a.call(o);const s=r.material;Array.isArray(s)?s.forEach(u=>u.dispose()):(l=s==null?void 0:s.dispose)==null||l.call(s),r.isSprite&&((c=r.material.map)==null||c.dispose())}),this.measurementsGroup.clear();const n=e.eqToHorizontal;if(n)for(const i of e.measurements){const r=new je(i.color),s=Wp(i.from.ra,i.from.dec,i.to.ra,i.to.dec,128),o=s.map(([C,A])=>{const[T,P,W]=n(C,A);return new k(T,P,W).multiplyScalar(ni*1.004)}),a=new Fc(new Dt().setFromPoints(o),new H6({color:r,dashSize:.03,gapSize:.018,transparent:!0,opacity:.95}));a.computeLineDistances(),this.measurementsGroup.add(a);const[l,c,u]=n(i.from.ra,i.from.dec),f=new An(new Vp(.016,.0035,8,28),new io({color:r}));f.position.set(l,c,u).multiplyScalar(ni*1.01),f.lookAt(0,0,0),this.measurementsGroup.add(f);const[h,p,m]=n(i.to.ra,i.to.dec),x=new An(new Vo(.026,.026,.026),new io({color:r}));x.position.set(h,p,m).multiplyScalar(ni*1.01),this.measurementsGroup.add(x);const g=s[Math.floor(s.length/2)],[d,_,v]=n(g[0],g[1]),S=this.makeTextSprite(`📏 ${i.separationDeg.toFixed(3)}°`,new k(d,_,v),i.color);S.scale.set(.11,.0275,1),this.measurementsGroup.add(S)}}resize(){const e=this.mount.clientWidth||1,n=this.mount.clientHeight||1;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.cleanupEvents(),this.resizeObs.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}class ps{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*q6(t){for(const e of t)yield*e}function X2(t){return Array.from(q6(t))}function so(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,s=new Array(r);++i<r;)s[i]=t+i*n;return s}var Ye=1e-6,Je=Math.PI,Wn=Je/2,S1=Je/4,Kn=Je*2,ii=180/Je,Gt=Je/180,vt=Math.abs,$2=Math.atan,Io=Math.atan2,ft=Math.cos,ac=Math.ceil,ct=Math.sin,Y6=Math.sign||function(t){return t>0?1:t<0?-1:0},Ur=Math.sqrt;function q2(t){return t>1?0:t<-1?Je:Math.acos(t)}function No(t){return t>1?Wn:t<-1?-Wn:Math.asin(t)}function jn(){}function xu(t,e){t&&E1.hasOwnProperty(t.type)&&E1[t.type](t,e)}var M1={Feature:function(t,e){xu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)xu(n[i].geometry,e)}},E1={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){sh(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)sh(n[i],e,0)},Polygon:function(t,e){w1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)w1(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)xu(n[i],e)}};function sh(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function w1(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)sh(t[n],e,1);e.polygonEnd()}function Ws(t,e){t&&M1.hasOwnProperty(t.type)?M1[t.type](t,e):xu(t,e)}function oh(t){return[Io(t[1],t[0]),No(t[2])]}function Uo(t){var e=t[0],n=t[1],i=ft(n);return[i*ft(e),i*ct(e),ct(n)]}function lc(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function yu(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function f0(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function cc(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function ah(t){var e=Ur(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Hs(t){return function(){return t}}function lh(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function ch(t,e){return vt(t)>Je&&(t-=Math.round(t/Kn)*Kn),[t,e]}ch.invert=ch;function Y2(t,e,n){return(t%=Kn)?e||n?lh(A1(t),R1(e,n)):A1(t):e||n?R1(e,n):ch}function T1(t){return function(e,n){return e+=t,vt(e)>Je&&(e-=Math.round(e/Kn)*Kn),[e,n]}}function A1(t){var e=T1(t);return e.invert=T1(-t),e}function R1(t,e){var n=ft(t),i=ct(t),r=ft(e),s=ct(e);function o(a,l){var c=ft(l),u=ft(a)*c,f=ct(a)*c,h=ct(l),p=h*n+u*i;return[Io(f*r-p*s,u*n-h*i),No(p*r+f*s)]}return o.invert=function(a,l){var c=ft(l),u=ft(a)*c,f=ct(a)*c,h=ct(l),p=h*r-f*s;return[Io(f*r+h*s,u*n+p*i),No(p*n-u*i)]},o}function K2(t,e,n,i,r,s){if(n){var o=ft(e),a=ct(e),l=i*n;r==null?(r=e+i*Kn,s=e-l/2):(r=C1(o,r),s=C1(o,s),(i>0?r<s:r>s)&&(r+=i*Kn));for(var c,u=r;i>0?u>s:u<s;u-=l)c=oh([o,-a*ft(u),-a*ct(u)]),t.point(c[0],c[1])}}function C1(t,e){e=Uo(e),e[0]-=t,ah(e);var n=q2(-e[1]);return((-e[2]<0?-n:n)+Kn-Ye)%Kn}function jp(){var t=Hs([0,0]),e=Hs(90),n=Hs(2),i,r,s={point:o};function o(l,c){i.push(l=r(l,c)),l[0]*=ii,l[1]*=ii}function a(){var l=t.apply(this,arguments),c=e.apply(this,arguments)*Gt,u=n.apply(this,arguments)*Gt;return i=[],r=Y2(-l[0]*Gt,-l[1]*Gt,0).invert,K2(s,c,u,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:Hs([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:Hs(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:Hs(+l),a):n},a}function Z2(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:jn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function Oc(t,e){return vt(t[0]-e[0])<Ye&&vt(t[1]-e[1])<Ye}function uc(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function J2(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(m){if(!((x=m.length-1)<=0)){var x,g=m[0],d=m[x],_;if(Oc(g,d)){if(!g[2]&&!d[2]){for(r.lineStart(),a=0;a<x;++a)r.point((g=m[a])[0],g[1]);r.lineEnd();return}d[0]+=2*Ye}s.push(_=new uc(g,m,null,!0)),o.push(_.o=new uc(g,null,_,!1)),s.push(_=new uc(d,m,null,!1)),o.push(_.o=new uc(d,null,_,!0))}}),!!s.length){for(o.sort(e),P1(s),P1(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var c=s[0],u,f;;){for(var h=c,p=!0;h.v;)if((h=h.n)===c)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(a=0,l=u.length;a<l;++a)r.point((f=u[a])[0],f[1]);else i(h.x,h.n.x,1,r);h=h.n}else{if(p)for(u=h.p.z,a=u.length-1;a>=0;--a)r.point((f=u[a])[0],f[1]);else i(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,p=!p}while(!h.v);r.lineEnd()}}}function P1(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function d0(t){return vt(t[0])<=Je?t[0]:Y6(t[0])*((vt(t[0])+Je)%Kn-Je)}function K6(t,e){var n=d0(e),i=e[1],r=ct(i),s=[ct(n),-ft(n),0],o=0,a=0,l=new ps;r===1?i=Wn+Ye:r===-1&&(i=-Wn-Ye);for(var c=0,u=t.length;c<u;++c)if(h=(f=t[c]).length)for(var f,h,p=f[h-1],m=d0(p),x=p[1]/2+S1,g=ct(x),d=ft(x),_=0;_<h;++_,m=S,g=A,d=T,p=v){var v=f[_],S=d0(v),C=v[1]/2+S1,A=ct(C),T=ft(C),P=S-m,W=P>=0?1:-1,y=W*P,M=y>Je,N=g*A;if(l.add(Io(N*W*ct(y),d*T+N*ft(y))),o+=M?P+W*Kn:P,M^m>=n^S>=n){var F=yu(Uo(p),Uo(v));ah(F);var H=yu(s,F);ah(H);var U=(M^P>=0?-1:1)*No(H[2]);(i>U||i===U&&(F[0]||F[1]))&&(a+=M^P>=0?1:-1)}}return(o<-Ye||o<Ye&&l<-1e-12)^a&1}function Q2(t,e,n,i){return function(r){var s=e(r),o=Z2(),a=e(o),l=!1,c,u,f,h={point:p,lineStart:x,lineEnd:g,polygonStart:function(){h.point=d,h.lineStart=_,h.lineEnd=v,u=[],c=[]},polygonEnd:function(){h.point=p,h.lineStart=x,h.lineEnd=g,u=X2(u);var S=K6(c,i);u.length?(l||(r.polygonStart(),l=!0),J2(u,J6,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(S,C){t(S,C)&&r.point(S,C)}function m(S,C){s.point(S,C)}function x(){h.point=m,s.lineStart()}function g(){h.point=p,s.lineEnd()}function d(S,C){f.push([S,C]),a.point(S,C)}function _(){a.lineStart(),f=[]}function v(){d(f[0][0],f[0][1]),a.lineEnd();var S=a.clean(),C=o.result(),A,T=C.length,P,W,y;if(f.pop(),c.push(f),f=null,!!T){if(S&1){if(W=C[0],(P=W.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),A=0;A<P;++A)r.point((y=W[A])[0],y[1]);r.lineEnd()}return}T>1&&S&2&&C.push(C.pop().concat(C.shift())),u.push(C.filter(Z6))}}return h}}function Z6(t){return t.length>1}function J6(t,e){return((t=t.x)[0]<0?t[1]-Wn-Ye:Wn-t[1])-((e=e.x)[0]<0?e[1]-Wn-Ye:Wn-e[1])}const b1=Q2(function(){return!0},Q6,t5,[-Je,-Wn]);function Q6(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?Je:-Je,l=vt(s-e);vt(l-Je)<Ye?(t.point(e,n=(n+o)/2>0?Wn:-Wn),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=Je&&(vt(e-i)<Ye&&(e-=i*Ye),vt(s-a)<Ye&&(s-=a*Ye),n=e5(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function e5(t,e,n,i){var r,s,o=ct(t-n);return vt(o)>Ye?$2((ct(e)*(s=ft(i))*ct(n)-ct(i)*(r=ft(e))*ct(t))/(r*s*o)):(e+i)/2}function t5(t,e,n,i){var r;if(t==null)r=n*Wn,i.point(-Je,r),i.point(0,r),i.point(Je,r),i.point(Je,0),i.point(Je,-r),i.point(0,-r),i.point(-Je,-r),i.point(-Je,0),i.point(-Je,r);else if(vt(t[0]-e[0])>Ye){var s=t[0]<e[0]?Je:-Je;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function n5(t){var e=ft(t),n=2*Gt,i=e>0,r=vt(e)>Ye;function s(u,f,h,p){K2(p,t,n,h,u,f)}function o(u,f){return ft(u)*ft(f)>e}function a(u){var f,h,p,m,x;return{lineStart:function(){m=p=!1,x=1},point:function(g,d){var _=[g,d],v,S=o(g,d),C=i?S?0:c(g,d):S?c(g+(g<0?Je:-Je),d):0;if(!f&&(m=p=S)&&u.lineStart(),S!==p&&(v=l(f,_),(!v||Oc(f,v)||Oc(_,v))&&(_[2]=1)),S!==p)x=0,S?(u.lineStart(),v=l(_,f),u.point(v[0],v[1])):(v=l(f,_),u.point(v[0],v[1],2),u.lineEnd()),f=v;else if(r&&f&&i^S){var A;!(C&h)&&(A=l(_,f,!0))&&(x=0,i?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}S&&(!f||!Oc(f,_))&&u.point(_[0],_[1]),f=_,p=S,h=C},lineEnd:function(){p&&u.lineEnd(),f=null},clean:function(){return x|(m&&p)<<1}}}function l(u,f,h){var p=Uo(u),m=Uo(f),x=[1,0,0],g=yu(p,m),d=lc(g,g),_=g[0],v=d-_*_;if(!v)return!h&&u;var S=e*d/v,C=-e*_/v,A=yu(x,g),T=cc(x,S),P=cc(g,C);f0(T,P);var W=A,y=lc(T,W),M=lc(W,W),N=y*y-M*(lc(T,T)-1);if(!(N<0)){var F=Ur(N),H=cc(W,(-y-F)/M);if(f0(H,T),H=oh(H),!h)return H;var U=u[0],I=f[0],K=u[1],D=f[1],q;I<U&&(q=U,U=I,I=q);var $=I-U,ne=vt($-Je)<Ye,ye=ne||$<Ye;if(!ne&&D<K&&(q=K,K=D,D=q),ye?ne?K+D>0^H[1]<(vt(H[0]-U)<Ye?K:D):K<=H[1]&&H[1]<=D:$>Je^(U<=H[0]&&H[0]<=I)){var Ne=cc(W,(-y+F)/M);return f0(Ne,T),[H,oh(Ne)]}}}function c(u,f){var h=i?t:Je-t,p=0;return u<-h?p|=1:u>h&&(p|=2),f<-h?p|=4:f>h&&(p|=8),p}return Q2(o,a,s,i?[0,-t]:[-Je,t-Je])}function i5(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],c=e[1],u=0,f=1,h=l-o,p=c-a,m;if(m=n-o,!(!h&&m>0)){if(m/=h,h<0){if(m<u)return;m<f&&(f=m)}else if(h>0){if(m>f)return;m>u&&(u=m)}if(m=r-o,!(!h&&m<0)){if(m/=h,h<0){if(m>f)return;m>u&&(u=m)}else if(h>0){if(m<u)return;m<f&&(f=m)}if(m=i-a,!(!p&&m>0)){if(m/=p,p<0){if(m<u)return;m<f&&(f=m)}else if(p>0){if(m>f)return;m>u&&(u=m)}if(m=s-a,!(!p&&m<0)){if(m/=p,p<0){if(m>f)return;m>u&&(u=m)}else if(p>0){if(m<u)return;m<f&&(f=m)}return u>0&&(t[0]=o+u*h,t[1]=a+u*p),f<1&&(e[0]=o+f*h,e[1]=a+f*p),!0}}}}}var pa=1e9,fc=-pa;function r5(t,e,n,i){function r(c,u){return t<=c&&c<=n&&e<=u&&u<=i}function s(c,u,f,h){var p=0,m=0;if(c==null||(p=o(c,f))!==(m=o(u,f))||l(c,u)<0^f>0)do h.point(p===0||p===3?t:n,p>1?i:e);while((p=(p+f+4)%4)!==m);else h.point(u[0],u[1])}function o(c,u){return vt(c[0]-t)<Ye?u>0?0:3:vt(c[0]-n)<Ye?u>0?2:1:vt(c[1]-e)<Ye?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var f=o(c,1),h=o(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=Z2(),h,p,m,x,g,d,_,v,S,C,A,T={point:P,lineStart:N,lineEnd:F,polygonStart:y,polygonEnd:M};function P(U,I){r(U,I)&&u.point(U,I)}function W(){for(var U=0,I=0,K=p.length;I<K;++I)for(var D=p[I],q=1,$=D.length,ne=D[0],ye,Ne,Y=ne[0],ee=ne[1];q<$;++q)ye=Y,Ne=ee,ne=D[q],Y=ne[0],ee=ne[1],Ne<=i?ee>i&&(Y-ye)*(i-Ne)>(ee-Ne)*(t-ye)&&++U:ee<=i&&(Y-ye)*(i-Ne)<(ee-Ne)*(t-ye)&&--U;return U}function y(){u=f,h=[],p=[],A=!0}function M(){var U=W(),I=A&&U,K=(h=X2(h)).length;(I||K)&&(c.polygonStart(),I&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),K&&J2(h,a,U,s,c),c.polygonEnd()),u=c,h=p=m=null}function N(){T.point=H,p&&p.push(m=[]),C=!0,S=!1,_=v=NaN}function F(){h&&(H(x,g),d&&S&&f.rejoin(),h.push(f.result())),T.point=P,S&&u.lineEnd()}function H(U,I){var K=r(U,I);if(p&&m.push([U,I]),C)x=U,g=I,d=K,C=!1,K&&(u.lineStart(),u.point(U,I));else if(K&&S)u.point(U,I);else{var D=[_=Math.max(fc,Math.min(pa,_)),v=Math.max(fc,Math.min(pa,v))],q=[U=Math.max(fc,Math.min(pa,U)),I=Math.max(fc,Math.min(pa,I))];i5(D,q,t,e,n,i)?(S||(u.lineStart(),u.point(D[0],D[1])),u.point(q[0],q[1]),K||u.lineEnd(),A=!1):K&&(u.lineStart(),u.point(U,I),A=!1)}_=U,v=I,S=K}return T}}function D1(t,e,n){var i=so(t,e-Ye,n).concat(e);return function(r){return i.map(function(s){return[r,s]})}}function L1(t,e,n){var i=so(t,e-Ye,n).concat(e);return function(r){return i.map(function(s){return[s,r]})}}function s5(){var t,e,n,i,r,s,o,a,l=10,c=l,u=90,f=360,h,p,m,x,g=2.5;function d(){return{type:"MultiLineString",coordinates:_()}}function _(){return so(ac(i/u)*u,n,u).map(m).concat(so(ac(a/f)*f,o,f).map(x)).concat(so(ac(e/l)*l,t,l).filter(function(v){return vt(v%u)>Ye}).map(h)).concat(so(ac(s/c)*c,r,c).filter(function(v){return vt(v%f)>Ye}).map(p))}return d.lines=function(){return _().map(function(v){return{type:"LineString",coordinates:v}})},d.outline=function(){return{type:"Polygon",coordinates:[m(i).concat(x(o).slice(1),m(n).reverse().slice(1),x(a).reverse().slice(1))]}},d.extent=function(v){return arguments.length?d.extentMajor(v).extentMinor(v):d.extentMinor()},d.extentMajor=function(v){return arguments.length?(i=+v[0][0],n=+v[1][0],a=+v[0][1],o=+v[1][1],i>n&&(v=i,i=n,n=v),a>o&&(v=a,a=o,o=v),d.precision(g)):[[i,a],[n,o]]},d.extentMinor=function(v){return arguments.length?(e=+v[0][0],t=+v[1][0],s=+v[0][1],r=+v[1][1],e>t&&(v=e,e=t,t=v),s>r&&(v=s,s=r,r=v),d.precision(g)):[[e,s],[t,r]]},d.step=function(v){return arguments.length?d.stepMajor(v).stepMinor(v):d.stepMinor()},d.stepMajor=function(v){return arguments.length?(u=+v[0],f=+v[1],d):[u,f]},d.stepMinor=function(v){return arguments.length?(l=+v[0],c=+v[1],d):[l,c]},d.precision=function(v){return arguments.length?(g=+v,h=D1(s,r,90),p=L1(e,t,g),m=D1(a,o,90),x=L1(i,n,g),d):g},d.extentMajor([[-180,-90+Ye],[180,90-Ye]]).extentMinor([[-180,-80-Ye],[180,80+Ye]])}function o5(){return s5()()}const uh=t=>t;var h0=new ps,fh=new ps,ex,tx,dh,hh,Fi={point:jn,lineStart:jn,lineEnd:jn,polygonStart:function(){Fi.lineStart=a5,Fi.lineEnd=c5},polygonEnd:function(){Fi.lineStart=Fi.lineEnd=Fi.point=jn,h0.add(vt(fh)),fh=new ps},result:function(){var t=h0/2;return h0=new ps,t}};function a5(){Fi.point=l5}function l5(t,e){Fi.point=nx,ex=dh=t,tx=hh=e}function nx(t,e){fh.add(hh*t-dh*e),dh=t,hh=e}function c5(){nx(ex,tx)}var Fo=1/0,Su=Fo,Qa=-Fo,Mu=Qa,Eu={point:u5,lineStart:jn,lineEnd:jn,polygonStart:jn,polygonEnd:jn,result:function(){var t=[[Fo,Su],[Qa,Mu]];return Qa=Mu=-(Su=Fo=1/0),t}};function u5(t,e){t<Fo&&(Fo=t),t>Qa&&(Qa=t),e<Su&&(Su=e),e>Mu&&(Mu=e)}var ph=0,mh=0,ma=0,wu=0,Tu=0,oo=0,gh=0,vh=0,ga=0,ix,rx,Si,Mi,Hn={point:ms,lineStart:I1,lineEnd:N1,polygonStart:function(){Hn.lineStart=h5,Hn.lineEnd=p5},polygonEnd:function(){Hn.point=ms,Hn.lineStart=I1,Hn.lineEnd=N1},result:function(){var t=ga?[gh/ga,vh/ga]:oo?[wu/oo,Tu/oo]:ma?[ph/ma,mh/ma]:[NaN,NaN];return ph=mh=ma=wu=Tu=oo=gh=vh=ga=0,t}};function ms(t,e){ph+=t,mh+=e,++ma}function I1(){Hn.point=f5}function f5(t,e){Hn.point=d5,ms(Si=t,Mi=e)}function d5(t,e){var n=t-Si,i=e-Mi,r=Ur(n*n+i*i);wu+=r*(Si+t)/2,Tu+=r*(Mi+e)/2,oo+=r,ms(Si=t,Mi=e)}function N1(){Hn.point=ms}function h5(){Hn.point=m5}function p5(){sx(ix,rx)}function m5(t,e){Hn.point=sx,ms(ix=Si=t,rx=Mi=e)}function sx(t,e){var n=t-Si,i=e-Mi,r=Ur(n*n+i*i);wu+=r*(Si+t)/2,Tu+=r*(Mi+e)/2,oo+=r,r=Mi*t-Si*e,gh+=r*(Si+t),vh+=r*(Mi+e),ga+=r*3,ms(Si=t,Mi=e)}function ox(t){this._context=t}ox.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Kn);break}}},result:jn};var _h=new ps,p0,ax,lx,va,_a,el={point:jn,lineStart:function(){el.point=g5},lineEnd:function(){p0&&cx(ax,lx),el.point=jn},polygonStart:function(){p0=!0},polygonEnd:function(){p0=null},result:function(){var t=+_h;return _h=new ps,t}};function g5(t,e){el.point=cx,ax=va=t,lx=_a=e}function cx(t,e){va-=t,_a-=e,_h.add(Ur(va*va+_a*_a)),va=t,_a=e}let U1,Au,F1,O1;class z1{constructor(e){this._append=e==null?ux:v5(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==F1||this._append!==Au){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,F1=i,Au=this._append,O1=this._,this._=r}this._+=O1;break}}}result(){const e=this._;return this._="",e.length?e:null}}function ux(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function v5(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return ux;if(e!==U1){const n=10**e;U1=e,Au=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return Au}function _5(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Ws(a,r(s))),s.result()}return o.area=function(a){return Ws(a,r(Fi)),Fi.result()},o.measure=function(a){return Ws(a,r(el)),el.result()},o.bounds=function(a){return Ws(a,r(Eu)),Eu.result()},o.centroid=function(a){return Ws(a,r(Hn)),Hn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,uh):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new z1(n)):new ox(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new z1(n)),o},o.projection(t).digits(n).context(e)}function Xp(t){return function(e){var n=new xh;for(var i in t)n[i]=t[i];return n.stream=e,n}}function xh(){}xh.prototype={constructor:xh,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function $p(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),Ws(n,t.stream(Eu)),e(Eu.result()),i!=null&&t.clipExtent(i),t}function fx(t,e,n){return $p(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function x5(t,e,n){return fx(t,[[0,0],e],n)}function y5(t,e,n){return $p(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function S5(t,e,n){return $p(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var k1=16,M5=ft(30*Gt);function B1(t,e){return+e?w5(t,e):E5(t)}function E5(t){return Xp({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function w5(t,e){function n(i,r,s,o,a,l,c,u,f,h,p,m,x,g){var d=c-i,_=u-r,v=d*d+_*_;if(v>4*e&&x--){var S=o+h,C=a+p,A=l+m,T=Ur(S*S+C*C+A*A),P=No(A/=T),W=vt(vt(A)-1)<Ye||vt(s-f)<Ye?(s+f)/2:Io(C,S),y=t(W,P),M=y[0],N=y[1],F=M-i,H=N-r,U=_*F-d*H;(U*U/v>e||vt((d*F+_*H)/v-.5)>.3||o*h+a*p+l*m<M5)&&(n(i,r,s,o,a,l,M,N,W,S/=T,C/=T,A,x,g),g.point(M,N),n(M,N,W,S,C,A,c,u,f,h,p,m,x,g))}}return function(i){var r,s,o,a,l,c,u,f,h,p,m,x,g={point:d,lineStart:_,lineEnd:S,polygonStart:function(){i.polygonStart(),g.lineStart=C},polygonEnd:function(){i.polygonEnd(),g.lineStart=_}};function d(P,W){P=t(P,W),i.point(P[0],P[1])}function _(){f=NaN,g.point=v,i.lineStart()}function v(P,W){var y=Uo([P,W]),M=t(P,W);n(f,h,u,p,m,x,f=M[0],h=M[1],u=P,p=y[0],m=y[1],x=y[2],k1,i),i.point(f,h)}function S(){g.point=d,i.lineEnd()}function C(){_(),g.point=A,g.lineEnd=T}function A(P,W){v(r=P,W),s=f,o=h,a=p,l=m,c=x,g.point=v}function T(){n(f,h,u,p,m,x,s,o,r,a,l,c,k1,i),g.lineEnd=S,S()}return g}}var T5=Xp({point:function(t,e){this.stream.point(t*Gt,e*Gt)}});function A5(t){return Xp({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function R5(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function H1(t,e,n,i,r,s){if(!s)return R5(t,e,n,i,r);var o=ft(s),a=ct(s),l=o*t,c=a*t,u=o/t,f=a/t,h=(a*n-o*e)/t,p=(a*e+o*n)/t;function m(x,g){return x*=i,g*=r,[l*x-c*g+e,n-c*x-l*g]}return m.invert=function(x,g){return[i*(u*x-f*g+h),r*(p-f*x-u*g)]},m}function dx(t){return C5(function(){return t})()}function C5(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,c=0,u,f=0,h=1,p=1,m=null,x=b1,g=null,d,_,v,S=uh,C=.5,A,T,P,W,y;function M(U){return P(U[0]*Gt,U[1]*Gt)}function N(U){return U=P.invert(U[0],U[1]),U&&[U[0]*ii,U[1]*ii]}M.stream=function(U){return W&&y===U?W:W=T5(A5(u)(x(A(S(y=U)))))},M.preclip=function(U){return arguments.length?(x=U,m=void 0,H()):x},M.postclip=function(U){return arguments.length?(S=U,g=d=_=v=null,H()):S},M.clipAngle=function(U){return arguments.length?(x=+U?n5(m=U*Gt):(m=null,b1),H()):m*ii},M.clipExtent=function(U){return arguments.length?(S=U==null?(g=d=_=v=null,uh):r5(g=+U[0][0],d=+U[0][1],_=+U[1][0],v=+U[1][1]),H()):g==null?null:[[g,d],[_,v]]},M.scale=function(U){return arguments.length?(n=+U,F()):n},M.translate=function(U){return arguments.length?(i=+U[0],r=+U[1],F()):[i,r]},M.center=function(U){return arguments.length?(s=U[0]%360*Gt,o=U[1]%360*Gt,F()):[s*ii,o*ii]},M.rotate=function(U){return arguments.length?(a=U[0]%360*Gt,l=U[1]%360*Gt,c=U.length>2?U[2]%360*Gt:0,F()):[a*ii,l*ii,c*ii]},M.angle=function(U){return arguments.length?(f=U%360*Gt,F()):f*ii},M.reflectX=function(U){return arguments.length?(h=U?-1:1,F()):h<0},M.reflectY=function(U){return arguments.length?(p=U?-1:1,F()):p<0},M.precision=function(U){return arguments.length?(A=B1(T,C=U*U),H()):Ur(C)},M.fitExtent=function(U,I){return fx(M,U,I)},M.fitSize=function(U,I){return x5(M,U,I)},M.fitWidth=function(U,I){return y5(M,U,I)},M.fitHeight=function(U,I){return S5(M,U,I)};function F(){var U=H1(n,0,0,h,p,f).apply(null,e(s,o)),I=H1(n,i-U[0],r-U[1],h,p,f);return u=Y2(a,l,c),T=lh(e,I),P=lh(u,T),A=B1(T,C),H()}function H(){return W=y=null,M}return function(){return e=t.apply(this,arguments),M.invert=e.invert&&N,F()}}function P5(t){return function(e,n){var i=ft(e),r=ft(n),s=t(i*r);return s===1/0?[2,0]:[s*r*ct(e),s*ct(n)]}}function hx(t){return function(e,n){var i=Ur(e*e+n*n),r=t(i),s=ct(r),o=ft(r);return[Io(e*s,i*o),No(i&&n*s/i)]}}var px=P5(function(t){return(t=q2(t))&&t/ct(t)});px.invert=hx(function(t){return t});function b5(){return dx(px).scale(79.4188).clipAngle(180-.001)}function mx(t,e){var n=ft(e),i=1+ft(t)*n;return[n*ct(t)/i,ct(e)/i]}mx.invert=hx(function(t){return 2*$2(t)});function D5(){return dx(mx).scale(250).clipAngle(142)}const tl=210,Cn=560;function L5(t,e,n,i){const[r,s]=Gp(e,n,90,i);let o=10,a=1e5;for(let l=0;l<44;l++){const c=(o+a)/2;t.scale(c);const u=t([r,s]),f=t([e,n]);if(!u||!f){o=c;continue}Math.hypot(u[0]-f[0],u[1]-f[1])<tl?o=c:a=c}return(o+a)/2}function gx(t,e,n,i){const r=t==="stereographic"?D5():b5();r.rotate([-e,-n]).clipAngle(i+.02).precision(.1);const s=L5(r,e,n,i);r.scale(s).translate([Cn/2,Cn/2]);const o=_5(r),a=u=>o(u)??"",l=u=>{const[f,h]=Gp(e,n,90,u),p=r([f,h]),m=r([e,n]);return!p||!m?0:Math.hypot(p[0]-m[0],p[1]-m[1])},c=l(1);return{projection:r,path:a,label:t==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",radialPixels:l,pxPerDegreeAtCenter:c,scaleRatioAt:u=>l(u)/u/(c||1)}}function vx(){return o5()}function Ru(t,e,n,i=128){return jp().center([t,e]).radius(n).precision(.1)()}function _x(t,e){return jp().center([t,e]).radius(90-1e-4).precision(.1)()}function xx(t,e){return jp().center([t,e]).radius(90).precision(.05)()}function Vs(t,e,n){const i=t([e,n]);return i?[i[0],i[1]]:null}const Fn=Cn/2;function V1(t){const{kind:e,sky:n,fov:i,horizonClip:r,showHorizon:s}=t,o=Be.useMemo(()=>gx(e,i.centerRa,i.centerDec,i.radiusDeg),[e,i.centerRa,i.centerDec,i.radiusDeg]),a=Be.useMemo(()=>{const x=o.path(vx()),g=i.radiusDeg<=20?5:i.radiusDeg<=45?10:20,d=[];for(let C=g;C<i.radiusDeg;C+=g)d.push({d:o.path(Ru(i.centerRa,i.centerDec,C)),rDeg:C});const _=o.path(Ru(i.centerRa,i.centerDec,i.radiusDeg)),v=o.path(xx(n.horizon.nadirRa,n.horizon.nadirDec)),S=o.path(_x(n.horizon.nadirRa,n.horizon.nadirDec));return{grat:x,rings:d,fovPath:_,horizon:v,below:S}},[o,i,n.horizon.nadirRa,n.horizon.nadirDec]),l=Be.useMemo(()=>{const x=[];for(const g of n.targets){if(!g.inFov||!g.passesMag||r&&!g.aboveHorizon)continue;const d=Vs(o.projection,g.ra,g.dec);if(!d)continue;const _=Math.max(1.6,Math.min(7,6.2-g.mag*.9)),v=g.kind==="star"?_:Math.max(_,5);x.push({t:g,x:d[0],y:d[1],r:v})}return x},[o,n.targets,r]),c=Be.useMemo(()=>l.filter(x=>x.t.id===t.selectedId||x.t.id===t.hoverId||x.t.kind!=="star"||x.t.mag<=1.6),[l,t.selectedId,t.hoverId]),u=Be.useMemo(()=>{const x=d=>d.trim().split(/\s+/).pop()??d,g=[];for(const d of n.horizon.cardinalPoints){const _=Vs(o.projection,d.ra,d.dec);_&&g.push({x:_[0],y:_[1],label:x(d.label)})}return g},[o,n.horizon.cardinalPoints]),f=Be.useMemo(()=>t.annotations.map(x=>{const g=Vs(o.projection,x.ra,x.dec);return g?{a:x,x:g[0],y:g[1]}:null}).filter(x=>x!==null),[o,t.annotations]),h=Be.useMemo(()=>t.measurements.map(x=>{const g=Wp(x.from.ra,x.from.dec,x.to.ra,x.to.dec,128),d=o.path(j2(g)),_=g[Math.floor(g.length/2)],v=Vs(o.projection,_[0],_[1]),S=Vs(o.projection,x.from.ra,x.from.dec),C=Vs(o.projection,x.to.ra,x.to.dec);return{m:x,d,midXY:v,fromXY:S,toXY:C}}),[o,t.measurements]),p=t.selectedId?n.targets.find(x=>x.id===t.selectedId):null,m=o.scaleRatioAt(i.radiusDeg);return L.jsxs("div",{className:"proj-view",children:[L.jsxs("div",{className:"proj-title",children:[L.jsx("strong",{children:o.label}),L.jsxs("span",{className:"proj-sub",children:["中心 ",xi(i.centerRa)," / ",yi(i.centerDec)," · 视场角半径 ",i.radiusDeg.toFixed(1),"°"]})]}),L.jsxs("svg",{width:Cn,height:Cn,viewBox:`0 0 ${Cn} ${Cn}`,className:"proj-svg",onMouseLeave:()=>t.onHover(null),children:[L.jsx("defs",{children:L.jsx("clipPath",{id:`disc-${e}`,children:L.jsx("circle",{cx:Fn,cy:Fn,r:tl})})}),L.jsx("circle",{cx:Fn,cy:Fn,r:tl,fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.5}),L.jsxs("g",{clipPath:`url(#disc-${e})`,children:[L.jsx("path",{d:a.grat,fill:"none",stroke:"#27406a",strokeWidth:.6,opacity:.9}),a.rings.map(x=>L.jsx("path",{d:x.d,fill:"none",stroke:"#3d6ea5",strokeWidth:.7,strokeDasharray:"2 3"},x.rDeg)),s&&L.jsxs(L.Fragment,{children:[L.jsx("path",{d:a.below,fill:"#5a1f24",opacity:.35}),L.jsx("path",{d:a.horizon,fill:"none",stroke:"#ff5d5d",strokeWidth:1.6})]}),L.jsx("path",{d:a.fovPath,fill:"none",stroke:"#57e389",strokeWidth:1.4,opacity:.9}),s&&u.map((x,g)=>L.jsx("text",{x:x.x,y:x.y-5,fill:"#ff9a9a",fontSize:11,textAnchor:"middle",children:x.label},g)),l.map(({t:x,x:g,y:d,r:_})=>{const v=x.id===t.selectedId,S=x.id===t.hoverId,C=!x.aboveHorizon,A=x.kind==="sun"?"#ffd27d":x.kind==="moon"?"#dfe6f2":x.kind==="planet"?"#9ecbff":"#ffffff";return L.jsxs("g",{transform:`translate(${g},${d})`,className:"star-marker",onMouseEnter:()=>t.onHover(x.id),onClick:T=>{T.stopPropagation(),t.onSelect(x.id)},children:[v&&L.jsx("circle",{r:_+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),S&&!v&&L.jsx("circle",{r:_+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),x.kind==="star"?L.jsx("circle",{r:_,fill:A,opacity:C&&!r?.35:1}):x.kind==="planet"?L.jsx("rect",{x:-_,y:-_,width:_*2,height:_*2,fill:A}):L.jsx("polygon",{points:`0,${-_} ${_},0 0,${_} ${-_},0`,fill:A})]},x.id)}),c.map(({t:x,x:g,y:d})=>L.jsx("text",{x:g+7,y:d+3,fill:"#cfe0ff",fontSize:10.5,className:"proj-label",children:x.name},`l-${x.id}`)),f.map(({a:x,x:g,y:d})=>L.jsxs("g",{transform:`translate(${g},${d})`,children:[L.jsx("circle",{r:5,fill:"none",stroke:x.color,strokeWidth:1.6}),L.jsx("text",{x:8,y:4,fill:x.color,fontSize:11,children:x.text})]},x.uuid)),h.map(({m:x,d:g,midXY:d,fromXY:_,toXY:v})=>L.jsxs("g",{children:[g&&L.jsx("path",{d:g,fill:"none",stroke:x.color,strokeWidth:2,strokeDasharray:"7 4",strokeLinecap:"round",opacity:.95}),_&&L.jsx("circle",{cx:_[0],cy:_[1],r:4.5,fill:"none",stroke:x.color,strokeWidth:2}),v&&L.jsx("g",{transform:`translate(${v[0]},${v[1]})`,children:L.jsx("polygon",{points:"0,-5 5,0 0,5 -5,0",fill:"none",stroke:x.color,strokeWidth:2})}),d&&L.jsxs("g",{transform:`translate(${d[0]},${d[1]})`,pointerEvents:"none",children:[L.jsx("rect",{x:-34,y:-20,width:68,height:15,rx:3,fill:"#070a14",opacity:.82,stroke:x.color,strokeWidth:.7}),L.jsxs("text",{textAnchor:"middle",y:-9,fontSize:11,fontWeight:"bold",fill:x.color,style:{paintOrder:"stroke",stroke:"#070a14",strokeWidth:3},children:[x.separationDeg.toFixed(3),"°"]})]})]},`m-${x.uuid}`)),L.jsxs("g",{stroke:"#8aa0c8",strokeWidth:1,children:[L.jsx("line",{x1:Fn-7,y1:Fn,x2:Fn+7,y2:Fn}),L.jsx("line",{x1:Fn,y1:Fn-7,x2:Fn,y2:Fn+7})]})]})]}),L.jsxs("div",{className:"proj-foot",children:[L.jsxs("span",{children:["中心比例尺 ≈ ",o.pxPerDegreeAtCenter.toFixed(1)," px/°",e==="stereographic"?`（立体投影边缘径向外放 ×${m.toFixed(2)}，图上距离≠角距）`:"（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）"]}),p&&L.jsxs("span",{className:"proj-foot-sel",children:[p.name,"：距视场中心 ",p.sepFromCenter.toFixed(2),"°（球面角距）· 高度 ",p.alt.toFixed(1),"°"]}),t.measurements.length>0&&L.jsxs("span",{style:{color:"#b6f0c9"},children:["角距尺 ",t.measurements.length," 条：虚线为 J2000 球面短大圆弧（经本投影球面裁切）；角距与投影无关，弧的像素长度只是投影读数。"]})]})]})}const Cu=[{id:"beijing",name:"北京（古观象台附近）",latitude:39.9042,longitude:116.4074,height:50},{id:"shanghai",name:"上海（佘山天文台）",latitude:31.0989,longitude:121.1958,height:100},{id:"lhasa",name:"拉萨",latitude:29.652,longitude:91.1721,height:3650},{id:"sanya",name:"三亚",latitude:18.2528,longitude:109.512,height:10},{id:"mohe",name:"漠河",latitude:53.4722,longitude:122.3464,height:400},{id:"london",name:"伦敦（格林威治）",latitude:51.4769,longitude:-5e-4,height:50},{id:"sidingspring",name:"赛丁泉天文台（澳大利亚）",latitude:-31.2733,longitude:149.0644,height:1165},{id:"custom",name:"自定义位置",latitude:0,longitude:0,height:0}],zc=[{id:"polar",label:"极区天区",description:"以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:0,centerDecDeg:90,fovRadiusDeg:35,magLimit:5,horizonClip:!1,suggestSelectId:"polaris"},{id:"zero",label:"赤经跨零点",description:"视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:358,centerDecDeg:30,fovRadiusDeg:30,magLimit:5,horizonClip:!1,suggestSelectId:"alpheratz"},{id:"horizon",label:"地平线附近目标",description:"北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:213.9,centerDecDeg:19.2,fovRadiusDeg:30,magLimit:4.5,horizonClip:!1,suggestSelectId:"arcturus"}];function I5(t){var h,p;const[e,n]=Be.useState(""),[i,r]=Be.useState(""),[s,o]=Be.useState("#ffd54a"),[a,l]=Be.useState("#b6f0c9"),c=m=>t.onChangeFov({...t.fov,centerRa:(m%360+360)%360}),u=m=>t.onChangeFov({...t.fov,centerDec:Math.max(-90,Math.min(90,m))}),f=m=>t.onChangeFov({...t.fov,radiusDeg:Math.max(1,Math.min(90,m))});return L.jsxs("div",{className:"controls",children:[L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"演示场景"}),L.jsx("div",{className:"btn-row",children:zc.map(m=>L.jsx("button",{className:"btn scenario",onClick:()=>t.onApplyScenario(m.id),title:m.description,children:m.label},m.id))}),L.jsx("p",{className:"hint",title:(h=zc.find(m=>m.id==="horizon"))==null?void 0:h.description,children:(p=zc.find(m=>m.id==="horizon"))==null?void 0:p.description})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"观测位置与时间"}),L.jsxs("label",{children:["位置",L.jsx("select",{value:t.site.id,onChange:m=>{const x=Cu.find(g=>g.id===m.target.value);t.onChangeSite({...x})},children:Cu.map(m=>L.jsx("option",{value:m.id,children:m.name},m.id))})]}),t.site.id==="custom"&&L.jsxs("div",{className:"num-row",children:[L.jsxs("label",{children:["纬度°",L.jsx("input",{type:"number",value:t.site.latitude,step:1e-4,onChange:m=>t.onChangeSite({...t.site,latitude:Number(m.target.value)})})]}),L.jsxs("label",{children:["经度°",L.jsx("input",{type:"number",value:t.site.longitude,step:1e-4,onChange:m=>t.onChangeSite({...t.site,longitude:Number(m.target.value)})})]})]}),L.jsxs("label",{children:["时间（UTC，非本地时区）",L.jsx("input",{type:"datetime-local",step:1,value:t.timeUtcIso.slice(0,19),onChange:m=>t.onChangeTime(m.target.value+"Z")})]}),L.jsx("p",{className:"hint",children:"北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。"})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"视场（J2000 赤道坐标）"}),L.jsxs("div",{className:"num-row",children:[L.jsxs("label",{children:["中心赤经°",L.jsx("input",{type:"number",value:m0(t.fov.centerRa),min:0,max:360,step:.1,onChange:m=>c(Number(m.target.value))})]}),L.jsxs("label",{children:["中心赤纬°",L.jsx("input",{type:"number",value:m0(t.fov.centerDec),min:-90,max:90,step:.1,onChange:m=>u(Number(m.target.value))})]}),L.jsxs("label",{children:["角半径°",L.jsx("input",{type:"number",value:m0(t.fov.radiusDeg),min:1,max:90,step:.5,onChange:m=>f(Number(m.target.value))})]})]}),L.jsx("p",{className:"hint",children:"视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。"}),L.jsxs("div",{className:"save-row",children:[L.jsx("input",{placeholder:"命名当前视场…",value:e,onChange:m=>n(m.target.value)}),L.jsx("button",{className:"btn",disabled:!e.trim(),onClick:()=>{t.onSaveFov(e.trim()),n("")},children:"存视场"})]}),t.savedFovs.length>0&&L.jsx("ul",{className:"store-list",children:t.savedFovs.slice(0,6).map(m=>L.jsxs("li",{children:[L.jsx("button",{className:"link-btn",title:`RA ${m.fov.centerRa.toFixed(1)}° Dec ${m.fov.centerDec.toFixed(1)}° r ${m.fov.radiusDeg}°`,onClick:()=>t.onLoadFov(m),children:m.name}),L.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteFov(m.uuid),children:"×"})]},m.uuid))})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"筛选（两条相互独立）"}),L.jsxs("label",{className:"range-label",children:["星等上限（仅恒星）：≤ ",t.magLimit.toFixed(1),L.jsx("input",{type:"range",min:-2,max:6,step:.1,value:t.magLimit,onChange:m=>t.onChangeMag(Number(m.target.value))})]}),L.jsxs("label",{className:"check",children:[L.jsx("input",{type:"checkbox",checked:t.horizonClip,onChange:m=>t.onToggleHorizonClip(m.target.checked)}),"地平线裁切：仅显示地平以上目标"]}),L.jsxs("label",{className:"check",children:[L.jsx("input",{type:"checkbox",checked:t.showHorizon,onChange:m=>t.onToggleShowHorizon(m.target.checked)}),"显示地平圈与地平以下区域"]}),L.jsxs("label",{className:"check",children:[L.jsx("input",{type:"checkbox",checked:t.showGraticule,onChange:m=>t.onToggleGraticule(m.target.checked)}),"显示 J2000 经纬网"]})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"球面角距尺（选内置目标，量真实角距）"}),L.jsx("p",{className:"hint",children:"从内置目标中选起点、终点；角距按端点 J2000 坐标用 haversine 计算（短大圆弧）， 切换投影、缩放或平移视场都不改变数值。图上的像素长度只是投影读数。"}),t.draftSeparationDeg!==null&&L.jsxs("p",{className:"hint",style:{color:"#b6f0c9"},children:["当前草稿角距：",t.draftSeparationDeg.toFixed(4),"°（未保存；切换投影或视场不变）"]}),L.jsxs("label",{children:["起点（圆环 ○）",L.jsxs("select",{value:t.measureFromId??"",onChange:m=>t.onPickMeasureEndpoint("from",m.target.value||null),children:[L.jsx("option",{value:"",children:"— 选择起点 —"}),t.targetOptions.map(m=>L.jsx("option",{value:m.id,children:m.label},`f-${m.id}`))]})]}),L.jsxs("label",{children:["终点（方块 ◇）",L.jsxs("select",{value:t.measureToId??"",onChange:m=>t.onPickMeasureEndpoint("to",m.target.value||null),children:[L.jsx("option",{value:"",children:"— 选择终点 —"}),t.targetOptions.map(m=>L.jsx("option",{value:m.id,disabled:m.id===t.measureFromId,children:m.label},`t-${m.id}`))]})]}),L.jsxs("div",{className:"save-row",children:[L.jsx("input",{type:"color",value:a,onChange:m=>l(m.target.value)}),L.jsx("button",{className:"btn",disabled:!t.measureFromId||!t.measureToId||t.measureFromId===t.measureToId,onClick:()=>t.onCreateMeasurement(a),title:"测量记录随当前视场存入 IndexedDB；颜色用于三种视图中的短弧标注",children:"测量并记录"})]}),t.measurements.length>0&&L.jsx("ul",{className:"store-list",children:t.measurements.map(m=>L.jsxs("li",{title:`建档视场 中心 RA ${m.fov.centerRa.toFixed(1)}° Dec ${m.fov.centerDec.toFixed(1)}° r ${m.fov.radiusDeg}°；端点为 J2000 坐标`,children:[L.jsx("span",{className:"dot",style:{background:m.color}}),L.jsxs("button",{className:"link-btn",onClick:()=>t.onChangeFov({...m.fov}),title:"载入建档时的视场（测量本身不变）",children:[m.from.name," → ",m.to.name,"：",m.separationDeg.toFixed(3),"°"]}),L.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteMeasurement(m.uuid),title:"仅删除该测量记录",children:"×"})]},m.uuid))}),L.jsx("p",{className:"hint",children:"删除测量只移除这条记录，不删除目标、视场或普通批注。"})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"批注（绑定天球坐标，存 IndexedDB）"}),L.jsxs("div",{className:"save-row",children:[L.jsx("input",{type:"color",value:s,onChange:m=>o(m.target.value)}),L.jsx("input",{placeholder:"批注文字（锚定当前选中目标）",value:i,onChange:m=>r(m.target.value)}),L.jsx("button",{className:"btn",disabled:!i.trim(),onClick:()=>{t.onAddAnnotation(i.trim(),s),r("")},children:"添加"})]}),t.annotations.length>0&&L.jsx("ul",{className:"store-list",children:t.annotations.map(m=>L.jsxs("li",{children:[L.jsx("span",{className:"dot",style:{background:m.color}}),L.jsx("button",{className:"link-btn",onClick:()=>t.onChangeFov({centerRa:m.ra,centerDec:m.dec,radiusDeg:Math.max(10,t.fov.radiusDeg)}),title:"把视场中心移到批注位置",children:m.text}),L.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteAnnotation(m.uuid),children:"×"})]},m.uuid))})]})]})}function m0(t){return Math.round(t*1e3)/1e3}const N5={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function U5({target:t,centerAlt:e,centerAz:n,gmstHours:i,julianDay:r,measurements:s,onSetMeasureEndpoint:o,onGoToMeasurementFov:a,onDeleteMeasurement:l}){return L.jsxs("div",{className:"info-panel",children:[t?L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"info-head",children:[L.jsx("span",{className:"info-name",children:t.name}),L.jsx("span",{className:"info-desig",children:t.designation}),L.jsx("span",{className:"info-kind",children:N5[t.kind]})]}),L.jsxs("div",{className:"ruler-quick",children:[L.jsx("button",{className:"btn btn-mini",onClick:()=>o("from"),children:"设为角距尺起点 ○"}),L.jsx("button",{className:"btn btn-mini",onClick:()=>o("to"),children:"设为角距尺终点 ◇"})]}),L.jsxs("div",{className:"info-grid",children:[L.jsxs("div",{children:[L.jsx("label",{children:"赤经 RA (J2000)"}),L.jsx("strong",{children:xi(t.ra)}),L.jsxs("span",{className:"sub",children:[t.ra.toFixed(4),"°"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"赤纬 Dec (J2000)"}),L.jsx("strong",{children:yi(t.dec)}),L.jsxs("span",{className:"sub",children:[t.dec.toFixed(4),"°"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"方位角 A（北=0 顺时针）"}),L.jsxs("strong",{children:[t.az.toFixed(2),"°"]}),L.jsxs("span",{className:"sub",children:[x1(t.az),"方"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"地平高度 h"}),L.jsxs("strong",{className:t.alt>=0?"up":"down",children:[t.alt.toFixed(2),"°"]}),L.jsx("span",{className:"sub",children:t.alt>=0?"地平以上":"地平以下"})]}),L.jsxs("div",{children:[L.jsx("label",{children:"视星等"}),L.jsx("strong",{children:t.mag.toFixed(2)}),t.kind==="moon"&&t.phaseFraction!==void 0&&L.jsxs("span",{className:"sub",children:["月相照亮 ",(t.phaseFraction*100).toFixed(0),"%"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"距视场中心（球面角距）"}),L.jsxs("strong",{children:[t.sepFromCenter.toFixed(3),"°"]}),L.jsx("span",{className:"sub",children:"haversine 计算，非图上像素距离"})]})]})]}):L.jsxs("div",{className:"info-empty",children:["点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。",L.jsxs("ul",{children:[L.jsx("li",{children:"圆形＝恒星，方形＝行星，菱形＝太阳/月球"}),L.jsx("li",{children:"绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环"})]})]}),s.length>0&&L.jsxs("div",{className:"ruler-records",children:[L.jsx("div",{className:"ruler-records-head",children:"球面角距尺记录（J2000 坐标 · haversine 短大圆弧 · 与投影/缩放无关）"}),L.jsxs("table",{children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"起点（○）"}),L.jsx("th",{children:"终点（◇）"}),L.jsx("th",{className:"num",children:"角距"}),L.jsx("th",{})]})}),L.jsx("tbody",{children:s.map(c=>L.jsxs("tr",{children:[L.jsxs("td",{title:`RA ${xi(c.from.ra)}  Dec ${yi(c.from.dec)}`,children:[L.jsx("span",{className:"dot",style:{background:c.color}}),c.from.name,L.jsxs("span",{className:"sub-coord",children:[xi(c.from.ra)," / ",yi(c.from.dec)]})]}),L.jsxs("td",{title:`RA ${xi(c.to.ra)}  Dec ${yi(c.to.dec)}`,children:[c.to.name,L.jsxs("span",{className:"sub-coord",children:[xi(c.to.ra)," / ",yi(c.to.dec)]})]}),L.jsxs("td",{className:"num ruler-sep",children:[c.separationDeg.toFixed(4),"°"]}),L.jsxs("td",{className:"num",children:[L.jsx("button",{className:"link-btn",onClick:()=>a(c),title:"载入建档视场（角距不变）",children:"视场"}),L.jsx("button",{className:"x-btn",onClick:()=>l(c.uuid),title:"只删除此测量记录",children:"×"})]})]},c.uuid))})]})]}),L.jsxs("div",{className:"info-meta",children:["视场中心：高度 ",e.toFixed(2),"°，方位 ",n.toFixed(2),"°（",x1(n),"）· GMST ",i.toFixed(4)," h · JD(TT) ",r.toFixed(4)]})]})}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const yx=173.1446326846693,Kr=14959787069098932e-8,It=.017453292519943295,gs=57.29577951308232,F5=3.819718634205488,O5=365.24217,G1=new Date("2000-01-01T12:00:00Z"),Li=2*Math.PI,ar=3600*(180/Math.PI),ao=484813681109536e-20,Sx=180*60*60,z5=2*Sx,W1=7292115e-11,k5=Sx/Math.PI,B5=-.17-5*Math.log10(k5),yh=.996647180302104,H5=yh*yh,Sh=6378.1366,V5=Sh/Kr,Mx=81.30056,qp=.0002959122082855911,Mh=2825345909524226e-22,Eh=8459715185680659e-23,wh=1292024916781969e-23,Th=1524358900784276e-23;function Pu(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function $n(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function Gs(t){return t-Math.floor(t)}function G5(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:gs*Math.acos(r)}var Te;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(Te||(Te={}));const W5=[Te.Star1,Te.Star2,Te.Star3,Te.Star4,Te.Star5,Te.Star6,Te.Star7,Te.Star8],j5=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function X5(t){const e=W5.indexOf(t);return e>=0?j5[e]:null}function Yp(t){const e=X5(t);return e&&e.dist>0?e:null}var Dn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Dn||(Dn={}));const Hi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function $5(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/O5;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let q5=$5;function j1(t){return t+q5(t)/86400}class ss{constructor(e){if(e instanceof ss){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-G1.getTime())/n,this.tt=j1(this.ut);return}if(Number.isFinite(e)){this.date=new Date(G1.getTime()+e*n),this.ut=e,this.tt=j1(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new ss(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new ss(this.ut+e)}}function xn(t){return t instanceof ss?t:new ss(t)}function Y5(t){function e(h){return h%z5*ao}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,u=(92052331+9086*n)*l+15377*a,f=2*(r-s+o);return a=Math.sin(f),l=Math.cos(f),c+=(-13170906-1675*n)*a-13696*l,u+=(5730336-3015*n)*l-4587*a,f=2*(r+o),a=Math.sin(f),l=Math.cos(f),c+=(-2276413-234*n)*a+2796*l,u+=(978459-485*n)*l+1374*a,f=2*o,a=Math.sin(f),l=Math.cos(f),c+=(2074554+207*n)*a-698*l,u+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,u+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function Ex(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var dc;function Kp(t){if(!dc||Math.abs(dc.tt-t.tt)>1e-6){const e=Y5(t),n=Ex(t),i=n+e.deps/3600;dc={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*It)/15,mobl:n,tobl:i}}return dc}function K5(t,e){const n=t*It,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function Z5(t,e){return K5(Ex(t),e)}function J5(t){const e=t.tt/36525;function n(me,b){const We=[];let Re;for(Re=0;Re<=b-me;++Re)We.push(0);return{min:me,array:We}}function i(me,b,We,Re){const Ie=[];for(let Ce=0;Ce<=b-me;++Ce)Ie.push(n(We,Re));return{min:me,array:Ie}}function r(me,b,We){const Re=me.array[b-me.min];return Re.array[We-Re.min]}function s(me,b,We,Re){const Ie=me.array[b-me.min];Ie.array[We-Ie.min]=Re}let o,a,l,c,u,f,h,p,m,x,g,d,_,v,S,C,A,T,P,W,y,M,N,F=i(-6,6,1,4),H=i(-6,6,1,4);function U(me,b){return r(F,me,b)}function I(me,b){return r(H,me,b)}function K(me,b,We){return s(F,me,b,We)}function D(me,b,We){return s(H,me,b,We)}function q(me,b,We,Re,Ie){Ie(me*We-b*Re,b*We+me*Re)}function $(me){return Math.sin(Li*me)}h=e*e,m=0,N=0,g=0,d=3422.7;var ne=$(.19833+.05611*e),ye=$(.27869+.04508*e),Ne=$(.16827-.36903*e),Y=$(.34734-5.37261*e),ee=$(.10498-5.37899*e),ce=$(.42681-.41855*e),fe=$(.14943-5.37511*e);for(T=.84*ne+.31*ye+14.27*Ne+7.26*Y+.28*ee+.24*ce,P=2.94*ne+.31*ye+14.27*Ne+9.34*Y+1.12*ee+.83*ce,W=-6.4*ne-1.89*ce,y=.21*ne+.31*ye+14.27*Ne-88.7*Y-15.3*ee+.24*ce-1.86*fe,M=T-W,p=-3332e-9*$(.59734-5.37261*e)-539e-9*$(.35498-5.37899*e)-64e-9*$(.39943-5.37511*e),_=Li*Gs(.60643382+1336.85522467*e-313e-8*h)+T/ar,v=Li*Gs(.37489701+1325.55240982*e+2565e-8*h)+P/ar,S=Li*Gs(.99312619+99.99735956*e-44e-8*h)+W/ar,C=Li*Gs(.25909118+1342.2278298*e-892e-8*h)+y/ar,A=Li*Gs(.82736186+1236.85308708*e-397e-8*h)+M/ar,u=1;u<=4;++u){switch(u){case 1:l=v,a=4,c=1.000002208;break;case 2:l=S,a=3,c=.997504612-.002495388*e;break;case 3:l=C,a=4,c=1.000002708+139.978*p;break;case 4:l=A,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(K(0,u,1),K(1,u,Math.cos(l)*c),D(0,u,0),D(1,u,Math.sin(l)*c),f=2;f<=a;++f)q(U(f-1,u),I(f-1,u),U(1,u),I(1,u),(me,b)=>(K(f,u,me),D(f,u,b)));for(f=1;f<=a;++f)K(-f,u,U(f,u)),D(-f,u,-I(f,u))}function Ue(me,b,We,Re){for(var Ie={x:1,y:0},Ce=[0,me,b,We,Re],se=1;se<=4;++se)Ce[se]!==0&&q(Ie.x,Ie.y,U(Ce[se],se),I(Ce[se],se),(oe,R)=>(Ie.x=oe,Ie.y=R));return Ie}function V(me,b,We,Re,Ie,Ce,se,oe){var R=Ue(Ie,Ce,se,oe);m+=me*R.y,N+=b*R.y,g+=We*R.x,d+=Re*R.x}V(13.902,14.06,-.001,.2607,0,0,0,4),V(.403,-4.01,.394,.0023,0,0,0,3),V(2369.912,2373.36,.601,28.2333,0,0,0,2),V(-125.154,-112.79,-.725,-.9781,0,0,0,1),V(1.979,6.98,-.445,.0433,1,0,0,4),V(191.953,192.72,.029,3.0861,1,0,0,2),V(-8.466,-13.51,.455,-.1093,1,0,0,1),V(22639.5,22609.07,.079,186.5398,1,0,0,0),V(18.609,3.59,-.094,.0118,1,0,0,-1),V(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),V(3.215,5.44,.192,-.0386,1,0,0,-3),V(-38.428,-38.64,.001,.6008,1,0,0,-4),V(-.393,-1.43,-.092,.0086,1,0,0,-6),V(-.289,-1.59,.123,-.0053,0,1,0,4),V(-24.42,-25.1,.04,-.3,0,1,0,2),V(18.023,17.93,.007,.1494,0,1,0,1),V(-668.146,-126.98,-1.302,-.3997,0,1,0,0),V(.56,.32,-.001,-.0037,0,1,0,-1),V(-165.145,-165.06,.054,1.9178,0,1,0,-2),V(-1.877,-6.46,-.416,.0339,0,1,0,-4),V(.213,1.02,-.074,.0054,2,0,0,4),V(14.387,14.78,-.017,.2833,2,0,0,2),V(-.586,-1.2,.054,-.01,2,0,0,1),V(769.016,767.96,.107,10.1657,2,0,0,0),V(1.75,2.01,-.018,.0155,2,0,0,-1),V(-211.656,-152.53,5.679,-.3039,2,0,0,-2),V(1.225,.91,-.03,-.0088,2,0,0,-3),V(-30.773,-34.07,-.308,.3722,2,0,0,-4),V(-.57,-1.4,-.074,.0109,2,0,0,-6),V(-2.921,-11.75,.787,-.0484,1,1,0,2),V(1.267,1.52,-.022,.0164,1,1,0,1),V(-109.673,-115.18,.461,-.949,1,1,0,0),V(-205.962,-182.36,2.056,1.4437,1,1,0,-2),V(.233,.36,.012,-.0025,1,1,0,-3),V(-4.391,-9.66,-.471,.0673,1,1,0,-4),V(.283,1.53,-.111,.006,1,-1,0,4),V(14.577,31.7,-1.54,.2302,1,-1,0,2),V(147.687,138.76,.679,1.1528,1,-1,0,0),V(-1.089,.55,.021,0,1,-1,0,-1),V(28.475,23.59,-.443,-.2257,1,-1,0,-2),V(-.276,-.38,-.006,-.0036,1,-1,0,-3),V(.636,2.27,.146,-.0102,1,-1,0,-4),V(-.189,-1.68,.131,-.0028,0,2,0,2),V(-7.486,-.66,-.037,-.0086,0,2,0,0),V(-8.096,-16.35,-.74,.0918,0,2,0,-2),V(-5.741,-.04,0,-9e-4,0,0,2,2),V(.255,0,0,0,0,0,2,1),V(-411.608,-.2,0,-.0124,0,0,2,0),V(.584,.84,0,.0071,0,0,2,-1),V(-55.173,-52.14,0,-.1052,0,0,2,-2),V(.254,.25,0,-.0017,0,0,2,-3),V(.025,-1.67,0,.0031,0,0,2,-4),V(1.06,2.96,-.166,.0243,3,0,0,2),V(36.124,50.64,-1.3,.6215,3,0,0,0),V(-13.193,-16.4,.258,-.1187,3,0,0,-2),V(-1.187,-.74,.042,.0074,3,0,0,-4),V(-.293,-.31,-.002,.0046,3,0,0,-6),V(-.29,-1.45,.116,-.0051,2,1,0,2),V(-7.649,-10.56,.259,-.1038,2,1,0,0),V(-8.627,-7.59,.078,-.0192,2,1,0,-2),V(-2.74,-2.54,.022,.0324,2,1,0,-4),V(1.181,3.32,-.212,.0213,2,-1,0,2),V(9.703,11.67,-.151,.1268,2,-1,0,0),V(-.352,-.37,.001,-.0028,2,-1,0,-1),V(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),V(.36,.2,-.012,-.0043,2,-1,0,-4),V(-1.167,-1.25,.008,-.0106,1,2,0,0),V(-7.412,-6.12,.117,.0484,1,2,0,-2),V(-.311,-.65,-.032,.0044,1,2,0,-4),V(.757,1.82,-.105,.0112,1,-2,0,2),V(2.58,2.32,.027,.0196,1,-2,0,0),V(2.533,2.4,-.014,-.0212,1,-2,0,-2),V(-.344,-.57,-.025,.0036,0,3,0,-2),V(-.992,-.02,0,0,1,0,2,2),V(-45.099,-.02,0,-.001,1,0,2,0),V(-.179,-9.52,0,-.0833,1,0,2,-2),V(-.301,-.33,0,.0014,1,0,2,-4),V(-6.382,-3.37,0,-.0481,1,0,-2,2),V(39.528,85.13,0,-.7136,1,0,-2,0),V(9.366,.71,0,-.0112,1,0,-2,-2),V(.202,.02,0,0,1,0,-2,-4),V(.415,.1,0,.0013,0,1,2,0),V(-2.152,-2.26,0,-.0066,0,1,2,-2),V(-1.44,-1.3,0,.0014,0,1,-2,2),V(.384,-.04,0,0,0,1,-2,-2),V(1.938,3.6,-.145,.0401,4,0,0,0),V(-.952,-1.58,.052,-.013,4,0,0,-2),V(-.551,-.94,.032,-.0097,3,1,0,0),V(-.482,-.57,.005,-.0045,3,1,0,-2),V(.681,.96,-.026,.0115,3,-1,0,0),V(-.297,-.27,.002,-9e-4,2,2,0,-2),V(.254,.21,-.003,0,2,-2,0,-2),V(-.25,-.22,.004,.0014,1,3,0,-2),V(-3.996,0,0,4e-4,2,0,2,0),V(.557,-.75,0,-.009,2,0,2,-2),V(-.459,-.38,0,-.0053,2,0,-2,2),V(-1.298,.74,0,4e-4,2,0,-2,0),V(.538,1.14,0,-.0141,2,0,-2,-2),V(.263,.02,0,0,1,1,2,0),V(.426,.07,0,-6e-4,1,1,-2,-2),V(-.304,.03,0,3e-4,1,-1,2,0),V(-.372,-.19,0,-.0027,1,-1,-2,2),V(.418,0,0,0,0,0,4,0),V(-.33,-.04,0,0,3,0,2,0);function Le(me,b,We,Re,Ie){return me*Ue(b,We,Re,Ie).y}x=0,x+=Le(-526.069,0,0,1,-2),x+=Le(-3.352,0,0,1,-4),x+=Le(44.297,1,0,1,-2),x+=Le(-6,1,0,1,-4),x+=Le(20.599,-1,0,1,0),x+=Le(-30.598,-1,0,1,-2),x+=Le(-24.649,-2,0,1,0),x+=Le(-2,-2,0,1,-2),x+=Le(-22.571,0,1,1,-2),x+=Le(10.985,0,-1,1,-2),m+=.82*$(.7736-62.5512*e)+.31*$(.0466-125.1025*e)+.35*$(.5785-25.1042*e)+.66*$(.4591+1335.8075*e)+.64*$(.313-91.568*e)+1.14*$(.148+1331.2898*e)+.21*$(.5918+1056.5859*e)+.44*$(.5784+1322.8595*e)+.24*$(.2275-5.7374*e)+.28*$(.2965+2.6929*e)+.33*$(.3132+6.3368*e),o=C+N/ar;let et=(1.000002708+139.978*p)*(18518.511+1.189+g)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:Li*Gs((_+m/ar)/Li),geo_eclip_lat:Math.PI/(180*3600)*et,distance_au:ar*V5/(.999953253*d)}}function wx(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function bu(t,e,n){const i=Tx(e,n);return wx(i,t)}function Tx(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=ao,r*=ao,s*=ao,o*=ao;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),u=Math.cos(-r),f=Math.sin(-s),h=Math.cos(-s),p=Math.sin(o),m=Math.cos(o),x=m*u-c*p*h,g=m*c*l+p*h*u*l-a*p*f,d=m*c*a+p*h*u*a+l*p*f,_=-p*u-c*m*h,v=-p*c*l+m*h*u*l-a*m*f,S=-p*c*a+m*h*u*a+l*m*f,C=c*f,A=-f*u*l-a*h,T=-f*u*a+h*l;if(e===Dn.Into2000)return new br([[x,g,d],[_,v,S],[C,A,T]]);if(e===Dn.From2000)return new br([[x,_,C],[g,v,A],[d,S,T]]);throw"Invalid precess direction"}function Q5(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let hc;function Zp(t){if(!hc||hc.tt!==t.tt){const e=t.tt/36525;let n=15*Kp(t).ee;const i=Q5(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),hc={tt:t.tt,st:s}}return hc.st}function eA(t){const e=xn(t);return Zp(e)}function tA(t,e){const n=t.latitude*It,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,yh*i),o=H5*s,a=t.height/1e3,l=Sh*s+a,c=Sh*o+a,u=(15*e+t.longitude)*It,f=Math.sin(u),h=Math.cos(u);return{pos:[l*r*h/Kr,l*r*f/Kr,c*i/Kr],vel:[-W1*l*r*f*86400/Kr,W1*l*r*h*86400/Kr,0]}}function Ah(t,e,n){const i=Ax(e,n);return wx(i,t)}function Ax(t,e){const n=Kp(t),i=n.mobl*It,r=n.tobl*It,s=n.dpsi*ao,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s),h=u,p=-f*o,m=-f*a,x=f*l,g=u*o*l+a*c,d=u*a*l-o*c,_=f*c,v=u*o*c-a*l,S=u*a*c+o*l;if(e===Dn.From2000)return new br([[h,x,_],[p,g,v],[m,d,S]]);if(e===Dn.Into2000)return new br([[h,p,m],[x,g,d],[_,v,S]]);throw"Invalid precess direction"}function nA(t,e,n){return n===Dn.Into2000?bu(Ah(t,e,n),e,n):Ah(bu(t,e,n),e,n)}function iA(t,e){const n=Zp(t),i=tA(e,n).pos;return nA(i,t,Dn.Into2000)}class St{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class gr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class Da{constructor(e,n,i){this.lat=$n(e),this.lon=$n(n),this.dist=$n(i)}}class X1{constructor(e,n,i,r){this.ra=$n(e),this.dec=$n(n),this.dist=$n(i),this.vec=r}}class br{constructor(e){this.rot=e}}class rA{constructor(e,n,i){this.vec=e,this.elat=$n(n),this.elon=$n(i)}}function sA(t,e){return new St(t[0],t[1],t[2],e)}function oA(t,e){const n=sA(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new X1(0,n.z<0?-90:90,r,n)}let s=F5*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=gs*Math.atan2(t[2],Math.sqrt(i));return new X1(s,o,r,n)}function g0(t,e){const n=t*It,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function Rx(t){if(!(t instanceof Cx))throw`Not an instance of the Observer class: ${t}`;if($n(t.latitude),$n(t.longitude),$n(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class Cx{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,Rx(this)}}function aA(t,e,n,i,r){Rx(n),Pu(i),Pu(r);const s=xn(e),o=iA(s,n),a=xA(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]];return oA(l,s)}function lA(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=gs*Math.atan2(r,i),a<0&&(a+=360));let l=gs*Math.atan2(s,o),c=new St(i,r,s,t.t);return new rA(c,l,a)}function cA(t){const e=Kp(t.t),n=[t.x,t.y,t.z],i=bu(n,t.t,Dn.From2000),[r,s,o]=Ah(i,t.t,Dn.From2000),a=new St(r,s,o,t.t),l=e.tobl*It;return lA(a,Math.cos(l),Math.sin(l))}function Oo(t){const e=xn(t),n=J5(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=Z5(e,r),o=bu(s,e,Dn.Into2000);return new St(o[0],o[1],o[2],e)}function Px(t){const e=xn(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=Oo(i),o=Oo(r);return new gr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function uA(t){const e=xn(t),n=Px(e),i=1+Mx;return new gr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function xo(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,u]of s)o+=l*Math.cos(c+e*u);let a=i*o;n&&(a%=Li),r+=a,i*=e}return r}function v0(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,u,f]of o){let h=u+e*f;a+=c*f*Math.sin(h),s>0&&(l+=c*Math.cos(h))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const xa=365250,Rh=0,Ch=1,Ph=2;function bh(t){return new Zt(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function bx(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function La(t,e){const n=e.tt/xa,i=xo(t[Rh],n,!0),r=xo(t[Ch],n,!1),s=xo(t[Ph],n,!1),o=bx(i,r,s);return bh(o).ToAstroVector(e)}function Dh(t,e){const n=e/xa,i=xo(t[Rh],n,!0),r=xo(t[Ch],n,!1),s=xo(t[Ph],n,!1),o=v0(t[Rh],n),a=v0(t[Ch],n),l=v0(t[Ph],n),c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),h=Math.sin(r),p=+(l*f*c)-s*h*c*a-s*f*u*o,m=+(l*f*u)-s*h*u*a+s*f*c*o,x=+(l*h)+s*f*a,g=bx(i,r,s),d=[p/xa,m/xa,x/xa],_=bh(g),v=bh(d);return new vs(e,_,v)}function pc(t,e,n,i){const r=i/(i+qp),s=La(Hi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function fA(t){const e=new St(0,0,0,t);return pc(e,t,Te.Jupiter,Mh),pc(e,t,Te.Saturn,Eh),pc(e,t,Te.Uranus,wh),pc(e,t,Te.Neptune,Th),e}const Lh=51,dA=29200,lo=146,Ii=201,ns=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Zt{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new Zt(this.x,this.y,this.z)}ToAstroVector(e){return new St(this.x,this.y,this.z,e)}static zero(){return new Zt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Zt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Zt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Zt(e*this.x,e*this.y,e*this.z)}div(e){return new Zt(this.x/e,this.y/e,this.z/e)}mean(e){return new Zt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Zt(-this.x,-this.y,-this.z)}}class vs{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new vs(this.tt,this.r,this.v)}sub(e){return new vs(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function hA(t){let[e,[n,i,r],[s,o,a]]=t;return new vs(e,new Zt(n,i,r),new Zt(s,o,a))}function mc(t,e,n,i){const r=i/(i+qp),s=Dh(Hi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function aa(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class ef{constructor(e){let n=new vs(e,new Zt(0,0,0),new Zt(0,0,0));this.Jupiter=mc(n,e,Te.Jupiter,Mh),this.Saturn=mc(n,e,Te.Saturn,Eh),this.Uranus=mc(n,e,Te.Uranus,wh),this.Neptune=mc(n,e,Te.Neptune,Th),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new vs(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=aa(e,qp,this.Sun.r);return n.incr(aa(e,Mh,this.Jupiter.r)),n.incr(aa(e,Eh,this.Saturn.r)),n.incr(aa(e,wh,this.Uranus.r)),n.incr(aa(e,Th,this.Neptune.r)),n}}class tf{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new tf(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Dx{constructor(e,n){this.bary=e,this.grav=n}}function Du(t,e,n,i){return new Zt(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function $1(t,e,n){return new Zt(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Ih(t,e){const n=t-e.tt,i=new ef(t),r=Du(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=Du(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new tf(t,o,a,l);return new Dx(i,c)}const pA=[];function Lx(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Nh(t){const e=hA(t),n=new ef(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new tf(e.tt,i,r,s);return new Dx(n,o)}function mA(t,e){const n=ns[0][0];if(e<n||e>ns[Lh-1][0])return null;const i=Lx((e-n)/dA,Lh-1);if(!t[i]){const s=t[i]=[];s[0]=Nh(ns[i]).grav,s[Ii-1]=Nh(ns[i+1]).grav;let o,a=s[0].tt;for(o=1;o<Ii-1;++o)s[o]=Ih(a+=lo,s[o-1]).grav;a=s[Ii-1].tt;var r=[];for(r[Ii-1]=s[Ii-1],o=Ii-2;o>0;--o)r[o]=Ih(a-=lo,r[o+1]).grav;for(o=Ii-2;o>0;--o){const l=o/(Ii-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function q1(t,e,n){let i=Nh(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Ih(s+1===r?e:i.grav.tt+n,i.grav);return i}function Ix(t,e){let n,i,r;const s=mA(pA,t.tt);if(s){const o=Lx((t.tt-s[0].tt)/lo,Ii-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),u=Du(t.tt-a.tt,a.r,a.v,c),f=$1(t.tt-a.tt,a.v,c),h=Du(t.tt-l.tt,l.r,l.v,c),p=$1(t.tt-l.tt,l.v,c),m=(t.tt-a.tt)/lo;n=u.mul(1-m).add(h.mul(m)),i=f.mul(1-m).add(p.mul(m))}else{let o;t.tt<ns[0][0]?o=q1(ns[0],t.tt,-lo):o=q1(ns[Lh-1],t.tt,+lo),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new ef(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new gr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function nl(t,e){var n=xn(e);if(t in Hi)return La(Hi[t],n);if(t===Te.Pluto){const o=Ix(n);return new St(o.x,o.y,o.z,n)}if(t===Te.Sun)return new St(0,0,0,n);if(t===Te.Moon){var i=La(Hi.Earth,n),r=Oo(n);return new St(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===Te.EMB){const o=La(Hi.Earth,n),a=Oo(n),l=1+Mx;return new St(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===Te.SSB)return fA(n);const s=Yp(t);if(s){const o=new Da(s.dec,15*s.ra,s.dist);return kc(o,n)}throw`HelioVector: Unknown body "${t}"`}function gA(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/yx;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class vA{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=nl(this.observerBody,e));const n=nl(this.targetBody,e);return new St(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function _A(t,e,n,i){Pu(i);const r=xn(t);if(Yp(n)){const a=nl(n,r);{const l=SA(e,r),c=new St(a.x-l.x,a.y-l.y,a.z-l.z,r),u=yx/c.Length();return new St(c.x+l.vx/u,c.y+l.vy/u,c.z+l.vz/u,r)}}let s;s=new St(0,0,0,r);const o=new vA(e,n,i,s);return gA(a=>o.Position(a),r)}function xA(t,e,n){Pu(n);const i=xn(e);switch(t){case Te.Earth:return new St(0,0,0,i);case Te.Moon:return Oo(i);default:const r=_A(i,Te.Earth,t,n);return r.t=i,r}}function yA(t,e){return new gr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function SA(t,e){const n=xn(e);switch(t){case Te.Sun:return new gr(0,0,0,0,0,0,n);case Te.SSB:const i=new ef(n.tt);return new gr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case Te.Mercury:case Te.Venus:case Te.Earth:case Te.Mars:case Te.Jupiter:case Te.Saturn:case Te.Uranus:case Te.Neptune:const r=Dh(Hi[t],n.tt);return yA(r,n);case Te.Pluto:return Ix(n);case Te.Moon:case Te.EMB:const s=Dh(Hi.Earth,n.tt),o=t==Te.Moon?Px(n):uA(n);return new gr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(Yp(t)){const a=nl(t,n);return new gr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function MA(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case Te.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case Te.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case Te.Mars:r=-1.52,s=1.6;break;case Te.Jupiter:r=-9.4,s=.5;break;case Te.Uranus:r=-7.19,s=.25;break;case Te.Neptune:r=-6.87;break;case Te.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function EA(t,e,n,i,r){const s=cA(i),o=It*28.06,a=It*(169.51+382e-7*r.tt),l=It*s.elat,c=It*s.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),f=Math.sin(Math.abs(u));let h=-9+.044*t;return h+=f*(-2.6+1.2*f),h+=5*Math.log10(e*n),{mag:h,ring_tilt:gs*u}}function wA(t,e,n){let i=t*It,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Kr;let l=n/a;return o+=5*Math.log10(e*l),o}class TA{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(It*i))/2}}function AA(t,e){if(t===Te.Earth)throw"The illumination of the Earth is not defined.";const n=xn(e),i=La(Hi.Earth,n);let r,s,o,a;t===Te.Sun?(o=new St(-i.x,-i.y,-i.z,n),s=new St(0,0,0,n),r=0):(t===Te.Moon?(o=Oo(n),s=new St(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=nl(t,e),o=new St(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=G5(o,s));let l=o.Length(),c=s.Length(),u;if(t===Te.Sun)a=B5+5*Math.log10(l);else if(t===Te.Moon)a=wA(r,c,l);else if(t===Te.Saturn){const f=EA(r,c,l,o,n);a=f.mag,u=f.ring_tilt}else a=MA(t,r,c,l);return new TA(n,a,r,c,l,o,s,u)}var Y1;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Y1||(Y1={}));function Nx(t){return new br([[t.rot[0][0],t.rot[1][0],t.rot[2][0]],[t.rot[0][1],t.rot[1][1],t.rot[2][1]],[t.rot[0][2],t.rot[1][2],t.rot[2][2]]])}function Ux(t,e){return new br([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function kc(t,e){e=xn(e);const n=t.lat*It,i=t.lon*It,r=t.dist*Math.cos(n);return new St(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function RA(t){const e=t.x*t.x+t.y*t.y,n=Math.sqrt(e+t.z*t.z);let i,r;if(e===0){if(t.z===0)throw"Zero-length vector not allowed.";r=0,i=t.z<0?-90:90}else r=gs*Math.atan2(t.y,t.x),r<0&&(r+=360),i=gs*Math.atan2(t.z,Math.sqrt(e));return new Da(i,r,n)}function CA(t){return t=360-t,t>=360?t-=360:t<0&&(t+=360),t}function PA(t,e){const n=RA(t);return n.lon=CA(n.lon),n.lat+=bA(e,n.lat),n}function bA(t,e){let n;return $n(e),e<-90||e>90?0:(n=0,n)}function la(t,e){return new St(t.rot[0][0]*e.x+t.rot[1][0]*e.y+t.rot[2][0]*e.z,t.rot[0][1]*e.x+t.rot[1][1]*e.y+t.rot[2][1]*e.z,t.rot[0][2]*e.x+t.rot[1][2]*e.y+t.rot[2][2]*e.z,e.t)}function DA(t){t=xn(t);const e=Ax(t,Dn.Into2000),n=Tx(t,Dn.Into2000);return Ux(e,n)}function LA(t,e){t=xn(t);const n=Math.sin(e.latitude*It),i=Math.cos(e.latitude*It),r=Math.sin(e.longitude*It),s=Math.cos(e.longitude*It),o=[i*s,i*r,n],a=[-n*s,-n*r,i],l=[r,-s,0],c=-15*Zp(t),u=g0(c,o),f=g0(c,a),h=g0(c,l);return new br([[f[0],h[0],u[0]],[f[1],h[1],u[1]],[f[2],h[2],u[2]]])}function IA(t,e){const n=LA(t,e);return Nx(n)}function NA(t,e){t=xn(t);const n=IA(t,e),i=DA(t);return Ux(n,i)}function UA(t,e){const n=NA(t,e);return Nx(n)}var K1;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(K1||(K1={}));var Z1;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Z1||(Z1={}));function FA(t){const e=t.rot;return new br([[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]])}class OA{constructor(e,n){Ze(this,"time");Ze(this,"observer");Ze(this,"rEqjToHor");Ze(this,"rHorToEqj");this.time=new ss(e),this.observer=new Cx(n.latitude,n.longitude,n.height),this.rEqjToHor=UA(this.time,this.observer),this.rHorToEqj=FA(this.rEqjToHor)}julianDay(){return 2451545+this.time.tt}gmstHours(){return eA(this.time)}equatorialToHorizontal(e,n){const i=kc(new Da(n,e,1),this.time),r=la(this.rEqjToHor,i),s=PA(r,null);return{azDeg:(s.lon%360+360)%360,altDeg:s.lat,hx:r.x,hy:r.y,hz:r.z}}centerHorizontalVec(e,n){const i=kc(new Da(n,e,1),this.time),r=la(this.rEqjToHor,i),s=Math.hypot(r.x,r.y,r.z)||1;return[r.x/s,r.y/s,r.z/s]}graticuleHorizontal(){const e=[],n=[],r=(s,o)=>{const a=la(this.rEqjToHor,kc(new Da(o,s,1),this.time)),l=Math.hypot(a.x,a.y,a.z)||1;return[a.x/l,a.y/l,a.z/l]};for(const s of[-60,-30,0,30,60]){const o=[],a=[];for(let l=0;l<=96;l++)a.push(r(360*l/96,s));o.push(a),e.push(...o)}for(let s=0;s<360;s+=30){const o=[];for(let a=0;a<=96;a++)o.push(r(s,-90+180*a/96));n.push(o)}return{parallels:e,meridians:n}}nadirEquatorial(){const e=la(this.rHorToEqj,new St(0,0,-1,this.time)),n=(Math.atan2(e.y,e.x)*180/Math.PI%360+360)%360,i=Math.asin(Math.max(-1,Math.min(1,e.z)))*180/Math.PI;return{ra:n,dec:i}}horizonPointEquatorial(e){const n=e*Math.PI/180,i=new St(Math.cos(n),-Math.sin(n),0,this.time),r=la(this.rHorToEqj,i),s=Math.hypot(r.x,r.y,r.z)||1,o=(Math.atan2(r.y/s,r.x/s)*180/Math.PI%360+360)%360,a=Math.asin(Math.max(-1,Math.min(1,r.z/s)))*180/Math.PI;return{ra:o,dec:a}}solarSystemBodies(){return[{body:Te.Sun,name:"太阳"},{body:Te.Moon,name:"月球"},{body:Te.Mercury,name:"水星"},{body:Te.Venus,name:"金星"},{body:Te.Mars,name:"火星"},{body:Te.Jupiter,name:"木星"},{body:Te.Saturn,name:"土星"}].map(({body:n,name:i})=>{const r=aA(n,this.time,this.observer,!1,!0),s=AA(n,this.time);return{body:n,name:i,ra:r.ra*15,dec:r.dec,mag:s.mag,phaseFraction:n===Te.Moon?s.phase_fraction:void 0}})}}const xe=t=>t*15,zA=[{id:"polaris",name:"勾陈一（北极星）",designation:"α UMi",ra:xe(2+31/60+49.1/3600),dec:89.2641,mag:1.98,tags:["polar","bright"]},{id:"kochab",name:"帝（北极二）",designation:"β UMi",ra:xe(14+50/60+42.3/3600),dec:74.1555,mag:2.07,tags:["polar"]},{id:"pherkad",name:"太子（北极一）",designation:"γ UMi",ra:xe(15+20/60+43.7/3600),dec:71.8344,mag:3.04,tags:["polar"]},{id:"zeta-umi",name:"开阳增一",designation:"ζ UMi",ra:xe(16+0/60),dec:77.8,mag:4.32,tags:["polar"]},{id:"yildun",name:"勾陈二",designation:"δ UMi",ra:xe(17+32/60+13/3600),dec:86.5851,mag:4.36,tags:["polar"]},{id:"epsilon-umi",name:"勾陈四",designation:"ε UMi",ra:xe(16+45/60+58/3600),dec:82.0411,mag:4.21,tags:["polar"]},{id:"cassiopeia-alpha",name:"王良一",designation:"α Cas",ra:xe(0+40/60+30.4/3600),dec:56.5373,mag:2.24,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-beta",name:"王良四",designation:"β Cas",ra:xe(0+9/60+10.7/3600),dec:59.1498,mag:2.27,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-gamma",name:"策",designation:"γ Cas",ra:xe(0+56/60+42.5/3600),dec:60.7167,mag:2.47,tags:["polar","zero-cross"]},{id:"cassiopeia-delta",name:"阁道三",designation:"δ Cas",ra:xe(1+25/60+49/3600),dec:60.2353,mag:2.68,tags:["polar"]},{id:"cephei-alpha",name:"天钩五",designation:"α Cep",ra:xe(21+18/60+34.6/3600),dec:62.5856,mag:2.51,tags:["polar","bright"]},{id:"cephei-gamma",name:"少卫增八",designation:"γ Cep",ra:xe(23+39/60+20.9/3600),dec:77.6322,mag:3.21,tags:["polar","zero-cross"]},{id:"draco-thuban",name:"右枢（古北极星）",designation:"α Dra",ra:xe(14+4/60+23.4/3600),dec:64.3758,mag:3.65,tags:["polar"]},{id:"ursa-minor-eta",name:"勾陈增九",designation:"η UMi",ra:xe(16+17/60+30.5/3600),dec:75.7553,mag:4.95,tags:["polar"]},{id:"alpheratz",name:"壁宿二",designation:"α And",ra:xe(0+8/60+23.3/3600),dec:29.0904,mag:2.06,tags:["zero-cross","bright"]},{id:"algenib",name:"壁宿一",designation:"γ Peg",ra:xe(0+13/60+14.2/3600),dec:15.1836,mag:2.83,tags:["zero-cross","bright"]},{id:"markab",name:"室宿一",designation:"α Peg",ra:xe(23+4/60+46.5/3600),dec:15.2053,mag:2.49,tags:["zero-cross","bright"]},{id:"scheat",name:"室宿二",designation:"β Peg",ra:xe(23+3/60+46.5/3600),dec:28.083,mag:2.42,tags:["zero-cross","bright"]},{id:"alrescha",name:"外屏七",designation:"α Psc",ra:xe(2+2/60+2.8/3600),dec:2.7486,mag:3.82,tags:["zero-cross"]},{id:"eta-and",name:"奎宿四（仙女座η）",designation:"η And",ra:xe(0+57/60+12.4/3600),dec:23.4236,mag:4.4,tags:["zero-cross"]},{id:"delta-psc",name:"外屏一",designation:"δ Psc",ra:xe(0+48/60+40.9/3600),dec:7.5786,mag:4.43,tags:["zero-cross"]},{id:"epsilon-psc",name:"外屏二",designation:"ε Psc",ra:xe(1+2/60+56.6/3600),dec:7.8883,mag:4.27,tags:["zero-cross"]},{id:"mirach",name:"奎宿九",designation:"β And",ra:xe(1+9/60+43.9/3600),dec:35.6206,mag:2.05,tags:["zero-cross","bright"]},{id:"mu-and",name:"天大将军一",designation:"μ And",ra:xe(0+56/60+45.2/3600),dec:38.4995,mag:3.86,tags:["zero-cross"]},{id:"51-and",name:"车府增廿一",designation:"51 And",ra:xe(1+37/60+59.6/3600),dec:48.6333,mag:3.57,tags:[]},{id:"phoenicis-alpha",name:"火鸟六",designation:"α Phe",ra:xe(0+26/60+17/3600),dec:-42.306,mag:2.39,tags:["zero-cross","bright"]},{id:"arcturus",name:"大角星",designation:"α Boo",ra:xe(14+15/60+39.7/3600),dec:19.1825,mag:-.05,tags:["bright"]},{id:"vega",name:"织女一（织女星）",designation:"α Lyr",ra:xe(18+36/60+56.3/3600),dec:38.7837,mag:.03,tags:["bright"]},{id:"capella",name:"五车二",designation:"α Aur",ra:xe(5+16/60+41.4/3600),dec:45.998,mag:.08,tags:["bright"]},{id:"rigel",name:"参宿七",designation:"β Ori",ra:xe(5+14/60+32.3/3600),dec:-8.2017,mag:.13,tags:["bright"]},{id:"procyon",name:"南河三",designation:"α CMi",ra:xe(7+39/60+18.1/3600),dec:5.225,mag:.34,tags:["bright"]},{id:"betelgeuse",name:"参宿四",designation:"α Ori",ra:xe(5+55/60+10.3/3600),dec:7.4071,mag:.45,tags:["bright"]},{id:"altair",name:"河鼓二（牛郎星）",designation:"α Aql",ra:xe(19+50/60+47/3600),dec:8.8683,mag:.77,tags:["bright"]},{id:"aldebaran",name:"毕宿五",designation:"α Tau",ra:xe(4+35/60+55.2/3600),dec:16.5093,mag:.85,tags:["bright"]},{id:"antares",name:"心宿二（火星之敌）",designation:"α Sco",ra:xe(16+29/60+24.5/3600),dec:-26.432,mag:1.06,tags:["bright"]},{id:"spica",name:"角宿一",designation:"α Vir",ra:xe(13+25/60+11.6/3600),dec:-11.1614,mag:.98,tags:["bright"]},{id:"pollux",name:"北河三",designation:"β Gem",ra:xe(7+45/60+18.9/3600),dec:28.0262,mag:1.14,tags:["bright"]},{id:"deneb",name:"天津四",designation:"α Cyg",ra:xe(20+41/60+25.9/3600),dec:45.2803,mag:1.25,tags:["bright"]},{id:"regulus",name:"轩辕十四",designation:"α Leo",ra:xe(10+8/60+22.3/3600),dec:11.9672,mag:1.35,tags:["bright"]},{id:"castor",name:"北河二",designation:"α Gem",ra:xe(7+34/60+35.9/3600),dec:31.8884,mag:1.58,tags:["bright"]},{id:"bellatrix",name:"参宿五",designation:"γ Ori",ra:xe(5+25/60+7.9/3600),dec:6.3497,mag:1.64,tags:["bright"]},{id:"eltanin",name:"天棓四",designation:"γ Dra",ra:xe(17+56/60+36.4/3600),dec:51.4889,mag:2.24,tags:["bright"]},{id:"dubhe",name:"天枢",designation:"α UMa",ra:xe(11+3/60+43.7/3600),dec:61.751,mag:1.79,tags:["bright","polar"]},{id:"merak",name:"天璇",designation:"β UMa",ra:xe(11+1/60+50.5/3600),dec:56.3824,mag:2.37,tags:["bright","polar"]},{id:"alioth",name:"玉衡",designation:"ε UMa",ra:xe(12+54/60+1.7/3600),dec:55.9598,mag:1.77,tags:["bright","polar"]},{id:"mizar",name:"开阳",designation:"ζ UMa",ra:xe(13+23/60+55.5/3600),dec:54.9254,mag:2.27,tags:["bright","polar"]},{id:"fomalhaut",name:"北落师门",designation:"α PsA",ra:xe(22+57/60+39/3600),dec:-29.6222,mag:1.16,tags:["bright","zero-cross"]},{id:"achernar",name:"水委一",designation:"α Eri",ra:xe(1+37/60+42.8/3600),dec:-57.2367,mag:.46,tags:["bright"]},{id:"canopus",name:"老人星",designation:"α Car",ra:xe(6+23/60+57.1/3600),dec:-52.6957,mag:-.74,tags:["bright"]},{id:"sirius",name:"天狼星",designation:"α CMa",ra:xe(6+45/60+9/3600),dec:-16.7161,mag:-1.46,tags:["bright"]},{id:"hadar",name:"马腹一",designation:"β Cen",ra:xe(14+3/60+49.4/3600),dec:-60.373,mag:.61,tags:["bright"]},{id:"rigil-kent",name:"南门二",designation:"α Cen",ra:xe(14+39/60+36.5/3600),dec:-60.8334,mag:-.27,tags:["bright"]},{id:"acrux",name:"十字架二",designation:"α Cru",ra:xe(12+26/60+35.9/3600),dec:-63.0991,mag:.77,tags:["bright"]},{id:"mimosa",name:"十字架三",designation:"β Cru",ra:xe(12+47/60+43.3/3600),dec:-59.6887,mag:1.25,tags:["bright"]},{id:"avior",name:"海石一",designation:"ε Car",ra:xe(8+22/60+30.8/3600),dec:-59.5095,mag:1.86,tags:["bright"]},{id:"suhail",name:"天记",designation:"γ Vel",ra:xe(8+9/60+32/3600),dec:-47.3428,mag:1.78,tags:["bright"]},{id:"peacock",name:"孔雀十一",designation:"α Pav",ra:xe(20+25/60+38.9/3600),dec:-56.7351,mag:1.94,tags:["bright"]},{id:"ankaa",name:"火鸟九",designation:"β Phe",ra:xe(23+26/60),dec:-46.95,mag:3.31,tags:["zero-cross"]},{id:"hamal",name:"娄宿三",designation:"α Ari",ra:xe(2+7/60+10.4/3600),dec:23.4624,mag:2,tags:["bright"]},{id:"denebola",name:"五帝座一",designation:"β Leo",ra:xe(11+49/60+3.6/3600),dec:14.572,mag:2.14,tags:["bright"]},{id:"alphecca",name:"贯索四",designation:"α CrB",ra:xe(15+34/60+41.3/3600),dec:26.7147,mag:2.23,tags:["bright"]},{id:"rasalhague",name:"侯（蛇夫座α）",designation:"α Oph",ra:xe(17+34/60+56.1/3600),dec:12.5601,mag:2.07,tags:["bright"]},{id:"enif",name:"危宿三",designation:"ε Peg",ra:xe(21+44/60+11.2/3600),dec:9.875,mag:2.39,tags:["bright"]},{id:"algol",name:"大陵五（魔星）",designation:"β Per",ra:xe(3+8/60+10.1/3600),dec:40.9556,mag:2.12,tags:["bright"]},{id:"mirfak",name:"天船三",designation:"α Per",ra:xe(3+24/60+19.4/3600),dec:49.8612,mag:1.79,tags:["bright","polar"]}];function kA(t){return t==="太阳"?"sun":t==="月球"?"moon":"planet"}function BA(t,e,n,i,r){const s=t.solarSystemBodies(),o=[];for(const p of zA){const m=t.equatorialToHorizontal(p.ra,p.dec),x=_u(e.centerRa,e.centerDec,p.ra,p.dec),g=x<=e.radiusDeg,d=m.altDeg>=0;o.push({id:p.id,name:p.name,designation:p.designation,kind:"star",ra:p.ra,dec:p.dec,mag:p.mag,az:m.azDeg,alt:m.altDeg,hx:m.hx,hy:m.hy,hz:m.hz,sepFromCenter:x,inFov:g,passesMag:p.mag<=n,aboveHorizon:d,tags:p.tags})}for(const p of s){const m=t.equatorialToHorizontal(p.ra,p.dec),x=_u(e.centerRa,e.centerDec,p.ra,p.dec),g=x<=e.radiusDeg,d=m.altDeg>=0;o.push({id:`body-${p.body}`,name:p.name,designation:p.name,kind:kA(p.name),ra:p.ra,dec:p.dec,mag:p.mag,az:m.azDeg,alt:m.altDeg,hx:m.hx,hy:m.hy,hz:m.hz,sepFromCenter:x,inFov:g,passesMag:!0,aboveHorizon:d,tags:[],phaseFraction:p.phaseFraction})}const a=[],l=[],c={0:"北点 N",90:"东点 E",180:"南点 S",270:"西点 W"},u=240;for(let p=0;p<u;p++){const m=360*p/u,x=t.horizonPointEquatorial(m);a.push([x.ra,x.dec]),m in c&&l.push({label:c[m],ra:x.ra,dec:x.dec})}a.push(a[0]);const f=t.nadirEquatorial(),h=t.equatorialToHorizontal(e.centerRa,e.centerDec);for(const p of o)p.inFov=p.sepFromCenter<=e.radiusDeg;return{targets:o,horizon:{ring:a,nadirRa:f.ra,nadirDec:f.dec,cardinalPoints:l},centerAlt:h.altDeg,centerAz:h.azDeg,gmstHours:t.gmstHours(),julianDay:t.julianDay(),fovBoundary:r}}function _0(t,e){return t.inFov&&t.passesMag&&(!e||t.aboveHorizon)}function HA(t){return t.replace(".000Z","Z").replace("T"," ")}function J1(t,e,n,i,r,s=[]){const o=gx(t,r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg),a=Cn/2,l=30,c=70,f=92+s.length*17,h=Cn+l*2,p=Cn+l*2+c+f,m=l,x=c,g=o.path(vx()),d=r.fov.radiusDeg<=20?5:r.fov.radiusDeg<=45?10:20,_=[];for(let N=d;N<r.fov.radiusDeg;N+=d)_.push(o.path(Ru(r.fov.centerRa,r.fov.centerDec,N)));const v=o.path(Ru(r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg)),S=o.path(xx(e.horizon.nadirRa,e.horizon.nadirDec)),C=o.path(_x(e.horizon.nadirRa,e.horizon.nadirDec)),A=N=>N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),T=n.map(N=>{const F=o.projection([N.ra,N.dec]);if(!F)return"";const H=Math.max(1.6,Math.min(7,6.2-N.mag*.9));return N.kind==="star"?`<circle cx="${F[0].toFixed(1)}" cy="${F[1].toFixed(1)}" r="${H.toFixed(1)}" fill="#fff" opacity="${N.aboveHorizon?1:.35}"/>`:N.kind==="planet"?`<rect x="${(F[0]-H).toFixed(1)}" y="${(F[1]-H).toFixed(1)}" width="${(H*2).toFixed(1)}" height="${(H*2).toFixed(1)}" fill="#9ecbff"/>`:`<polygon points="${F[0].toFixed(1)},${(F[1]-H).toFixed(1)} ${(F[0]+H).toFixed(1)},${F[1].toFixed(1)} ${F[0].toFixed(1)},${(F[1]+H).toFixed(1)} ${(F[0]-H).toFixed(1)},${F[1].toFixed(1)}" fill="${N.kind==="sun"?"#ffd27d":"#dfe6f2"}"/>`}).join(""),P=n.filter(N=>N.kind!=="star"||N.mag<=1.6).map(N=>{const F=o.projection([N.ra,N.dec]);return F?`<text x="${(F[0]+7).toFixed(1)}" y="${(F[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${A(N.name)}</text>`:""}).join(""),W=i.map(N=>{const F=o.projection([N.ra,N.dec]);return F?`<circle cx="${F[0].toFixed(1)}" cy="${F[1].toFixed(1)}" r="5" fill="none" stroke="${N.color}" stroke-width="1.6"/><text x="${(F[0]+8).toFixed(1)}" y="${(F[1]+4).toFixed(1)}" font-size="11" fill="${N.color}">${A(N.text)}</text>`:""}).join(""),y=s.map(N=>{const F=Wp(N.from.ra,N.from.dec,N.to.ra,N.to.dec,160),H=o.path(j2(F)),U=o.projection([N.from.ra,N.from.dec]),I=o.projection([N.to.ra,N.to.dec]),K=F[Math.floor(F.length/2)],D=o.projection([K[0],K[1]]),q=[];return H&&q.push(`<path d="${H}" fill="none" stroke="${N.color}" stroke-width="2" stroke-dasharray="7 4" stroke-linecap="round"/>`),U&&q.push(`<circle cx="${U[0].toFixed(1)}" cy="${U[1].toFixed(1)}" r="4.5" fill="none" stroke="${N.color}" stroke-width="2"/>`),I&&q.push(`<polygon points="${I[0].toFixed(1)},${(I[1]-5).toFixed(1)} ${(I[0]+5).toFixed(1)},${I[1].toFixed(1)} ${I[0].toFixed(1)},${(I[1]+5).toFixed(1)} ${(I[0]-5).toFixed(1)},${I[1].toFixed(1)}" fill="none" stroke="${N.color}" stroke-width="2"/>`),D&&q.push(`<rect x="${(D[0]-34).toFixed(1)}" y="${(D[1]-20).toFixed(1)}" width="68" height="15" rx="3" fill="#070a14" opacity="0.85" stroke="${N.color}" stroke-width="0.7"/><text x="${D[0].toFixed(1)}" y="${(D[1]-9).toFixed(1)}" font-size="11" font-weight="bold" text-anchor="middle" fill="${N.color}">${N.separationDeg.toFixed(3)}°</text>`),q.join("")}).join(""),M=N=>`${A(N.from.name)}（RA ${xi(N.from.ra)} Dec ${yi(N.from.dec)}）→ ${A(N.to.name)}（RA ${xi(N.to.ra)} Dec ${yi(N.to.dec)}）＝ ${N.separationDeg.toFixed(4)}°；J2000.0 平赤道坐标，短大圆弧 haversine 计算，不随投影/缩放改变。建档视场 RA ${xi(N.fov.centerRa)} / ${yi(N.fov.centerDec)}，r ${N.fov.radiusDeg.toFixed(1)}°`;return`<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${p}" viewBox="0 0 ${h} ${p}" font-family="sans-serif">
<rect width="${h}" height="${p}" fill="#070a14"/>
<text x="${m}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${A(r.projectionLabel)}</text>
<text x="${m}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${xi(r.fov.centerRa)} / ${yi(r.fov.centerDec)}，
球面角半径 ${r.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${t==="stereographic"?"立体投影下变形放大":"等距方位投影下等距"}）。
</text>
<g transform="translate(${m},${x})">
<circle cx="${a}" cy="${a}" r="${tl}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${a}" cy="${a}" r="${tl}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${g}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${_.map(N=>`<path d="${N}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
<path d="${C}" fill="#5a1f24" opacity="0.35"/>
<path d="${S}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
<path d="${v}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${T}
${P}
${W}
${y}
</g>
</g>
<g transform="translate(${m},${x+Cn+26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${HA(r.timeUtcIso)}（UTC）；儒略日 JD = ${r.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${r.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${A(r.site.name)}（纬度 ${r.site.latitude.toFixed(4)}°，经度 ${r.site.longitude.toFixed(4)}°，海拔 ${r.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${r.magLimit}（仅恒星）；地平线裁切：${r.horizonClip?"开启（仅地平以上）":"关闭（地平以下目标半透明显示）"}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
${s.map((N,F)=>`<text x="0" y="${72+F*17}" fill="#b6f0c9">角距尺 ${F+1}：${M(N)}</text>`).join(`
`)}
</g>
</svg>`}function Q1(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function VA(t,e,n=2){const i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(i),s=new Image;await new Promise((f,h)=>{s.onload=()=>f(),s.onerror=()=>h(new Error("SVG 栅格化失败")),s.src=r});const o=t.match(/width="(\d+)"\s+height="(\d+)"/),a=o?Number(o[1]):Cn,l=o?Number(o[2]):Cn,c=document.createElement("canvas");c.width=a*n,c.height=l*n;const u=c.getContext("2d");u.fillStyle="#070a14",u.fillRect(0,0,c.width,c.height),u.drawImage(s,0,0,c.width,c.height),URL.revokeObjectURL(r),c.toBlob(f=>{if(!f)return;const h=URL.createObjectURL(f),p=document.createElement("a");p.href=h,p.download=e,p.click(),setTimeout(()=>URL.revokeObjectURL(h),1e3)},"image/png")}function GA(t,e,n,i,r=[]){return JSON.stringify({tool:"local-starchart",coordinateSystem:"J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)",timeStandard:{utc:i.timeUtcIso,julianDayTT:i.julianDay,gmstHours:i.gmstHours},observer:i.site,fieldOfView:{centerRA_J2000_deg:i.fov.centerRa,centerDec_J2000_deg:i.fov.centerDec,angularRadius_deg:i.fov.radiusDeg},filters:{magnitudeLimitStars:i.magLimit,horizonClip:i.horizonClip},targets:e.map(s=>({id:s.id,name:s.name,designation:s.designation,kind:s.kind,ra_J2000_deg:Number(s.ra.toFixed(5)),dec_J2000_deg:Number(s.dec.toFixed(5)),magnitude:s.mag,azimuth_deg:Number(s.az.toFixed(3)),altitude_deg:Number(s.alt.toFixed(3)),angularSeparationFromCenter_deg:Number(s.sepFromCenter.toFixed(3))})),annotations:n,angularMeasurements:r.map(s=>({uuid:s.uuid,createdAt:new Date(s.createdAt).toISOString(),coordinateSystem:"J2000.0 mean equator & equinox",method:"haversine great-circle separation (short arc)",from:{targetId:s.from.targetId,name:s.from.name,designation:s.from.designation,ra_J2000_deg:Number(s.from.ra.toFixed(6)),dec_J2000_deg:Number(s.from.dec.toFixed(6))},to:{targetId:s.to.targetId,name:s.to.name,designation:s.to.designation,ra_J2000_deg:Number(s.to.ra.toFixed(6)),dec_J2000_deg:Number(s.to.dec.toFixed(6))},angularSeparation_deg:Number(s.separationDeg.toFixed(6)),fieldOfViewAtCreation:{centerRA_J2000_deg:s.fov.centerRa,centerDec_J2000_deg:s.fov.centerDec,angularRadius_deg:s.fov.radiusDeg}}))},null,2)}const WA="local-starchart",jA=2,il="fovs",rl="annotations",sl="measurements";let gc=null;function XA(){return gc||(gc=new Promise((t,e)=>{const n=indexedDB.open(WA,jA);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(il)||i.createObjectStore(il,{keyPath:"uuid"}),i.objectStoreNames.contains(rl)||i.createObjectStore(rl,{keyPath:"uuid"}),i.objectStoreNames.contains(sl)||i.createObjectStore(sl,{keyPath:"uuid"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),gc)}function Ji(t,e,n){return XA().then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)}))}async function $A(t){await Ji(il,"readwrite",e=>e.put(t))}async function x0(){return(await Ji(il,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function qA(t){await Ji(il,"readwrite",e=>e.delete(t))}async function YA(t){await Ji(rl,"readwrite",e=>e.put(t))}async function y0(){return(await Ji(rl,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function KA(t){await Ji(rl,"readwrite",e=>e.delete(t))}async function ZA(t){await Ji(sl,"readwrite",e=>e.put(t))}async function S0(){return(await Ji(sl,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function JA(t){await Ji(sl,"readwrite",e=>e.delete(t))}const ev=Cu[0],QA="2026-09-30T13:00:00Z",e8={centerRa:213.9,centerDec:19.2,radiusDeg:30};function M0(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}function t8(){const[t,e]=Be.useState(ev),[n,i]=Be.useState(QA),[r,s]=Be.useState(e8),[o,a]=Be.useState(4.5),[l,c]=Be.useState(!1),[u,f]=Be.useState(!0),[h,p]=Be.useState(!0),[m,x]=Be.useState(null),[g,d]=Be.useState(null),[_,v]=Be.useState(null),[S,C]=Be.useState([]),[A,T]=Be.useState([]),[P,W]=Be.useState([]),[y,M]=Be.useState(null),[N,F]=Be.useState(null);Be.useEffect(()=>{x0().then(C).catch(()=>{}),y0().then(T).catch(()=>{}),S0().then(W).catch(()=>{})},[]);const H=Be.useMemo(()=>{const se=new Date(n);return Number.isNaN(se.getTime())?null:new OA(se,t)},[t.latitude,t.longitude,t.height,n]),U=Be.useMemo(()=>W6(r.centerRa,r.centerDec,r.radiusDeg,128),[r]),I=Be.useMemo(()=>H?BA(H,r,o,l,U):null,[H,r,o,l,U]),K=Be.useMemo(()=>H==null?void 0:H.graticuleHorizontal(),[H]),D=Be.useMemo(()=>{if(H)return(se,oe)=>H.centerHorizontalVec(se,oe)},[H]),q=Be.useMemo(()=>m&&I?I.targets.find(se=>se.id===m)??null:null,[m,I]),$=se=>{x(se),se&&v({id:se,nonce:Date.now()})},ne=se=>{const oe=zc.find(E=>E.id===se);if(!oe)return;const R=Cu.find(E=>E.id===oe.siteId)??ev;e({...R}),i(oe.timeUtcIso),s({centerRa:oe.centerRaDeg,centerDec:oe.centerDecDeg,radiusDeg:oe.fovRadiusDeg}),a(oe.magLimit),c(oe.horizonClip),oe.suggestSelectId&&(x(oe.suggestSelectId),v({id:oe.suggestSelectId,nonce:Date.now()}))},ye=se=>{const oe={uuid:M0(),name:se,createdAt:Date.now(),fov:{...r},siteId:t.id,timeUtcIso:n};$A(oe).then(()=>x0().then(C))},Ne=se=>qA(se).then(()=>x0().then(C)),Y=se=>s({...se.fov}),ee=(se,oe)=>{if(!q){alert("请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。");return}const R={uuid:M0(),createdAt:Date.now(),ra:q.ra,dec:q.dec,text:se,color:oe};YA(R).then(()=>y0().then(T))},ce=se=>KA(se).then(()=>y0().then(T)),fe=Be.useMemo(()=>I?I.targets.map(se=>({id:se.id,label:`${se.name}（${se.designation}）`})).sort((se,oe)=>se.label.localeCompare(oe.label,"zh")):[],[I]),Ue=se=>{if(!se||!I)return null;const oe=I.targets.find(R=>R.id===se);return oe?{targetId:oe.id,name:oe.name,designation:oe.designation,ra:oe.ra,dec:oe.dec,kind:oe.kind}:null},V=Ue(y),Le=Ue(N),et=V&&Le&&V.targetId!==Le.targetId?_u(V.ra,V.dec,Le.ra,Le.dec):null,me=se=>{if(!V||!Le||V.targetId===Le.targetId){alert("请选择两个不同的内置目标作为起点与终点。");return}const oe={uuid:M0(),createdAt:Date.now(),from:V,to:Le,separationDeg:_u(V.ra,V.dec,Le.ra,Le.dec),fov:{...r},color:se};ZA(oe).then(()=>S0().then(W))},b=se=>JA(se).then(()=>S0().then(W)),We=se=>I?{projectionLabel:se,site:t,timeUtcIso:n,fov:r,julianDay:I.julianDay,gmstHours:I.gmstHours,horizonClip:l,magLimit:o}:null,Re=se=>{if(!I)return;const R=We(se==="stereographic"?"立体投影 Stereographic":"等距方位投影 Azimuthal Equidistant"),E=I.targets.filter(J=>_0(J,l)),G=J1(se,I,E,A,R,P);Q1(`星图_${se}_${n.slice(0,10)}.svg`,G,"image/svg+xml;charset=utf-8")},Ie=async se=>{if(!I)return;const R=We("立体投影 Stereographic"),E=I.targets.filter(J=>_0(J,l)),G=J1(se,I,E,A,R,P);await VA(G,`星图_${se}_${n.slice(0,10)}.png`)},Ce=()=>{if(!I)return;const se=We("数据导出 JSON"),oe=I.targets.filter(R=>_0(R,l));Q1(`星表视场_${n.slice(0,10)}.json`,GA(I,oe,A,se,P),"application/json")};return L.jsxs("div",{className:"app",children:[L.jsxs("header",{className:"app-header",children:[L.jsxs("div",{children:[L.jsx("h1",{children:"本地星图工具"}),L.jsx("p",{children:"球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标"})]}),L.jsxs("div",{className:"export-bar",children:[L.jsx("button",{className:"btn",onClick:()=>Re("stereographic"),children:"导出 立体 SVG"}),L.jsx("button",{className:"btn",onClick:()=>Re("equidistant"),children:"导出 等距 SVG"}),L.jsx("button",{className:"btn",onClick:()=>Ie("stereographic"),children:"导出 PNG"}),L.jsx("button",{className:"btn",onClick:Ce,children:"导出 JSON"})]})]}),L.jsxs("div",{className:"main-grid",children:[L.jsx("aside",{className:"sidebar",children:L.jsx(I5,{site:t,timeUtcIso:n,fov:r,magLimit:o,horizonClip:l,showHorizon:u,showGraticule:h,savedFovs:S,annotations:A,measurements:P,targetOptions:fe,measureFromId:y,measureToId:N,draftSeparationDeg:et,onChangeSite:e,onChangeTime:i,onChangeFov:s,onChangeMag:a,onToggleHorizonClip:c,onToggleShowHorizon:f,onToggleGraticule:p,onApplyScenario:ne,onSaveFov:ye,onLoadFov:Y,onDeleteFov:Ne,onAddAnnotation:ee,onDeleteAnnotation:ce,onPickMeasureEndpoint:(se,oe)=>se==="from"?M(oe):F(oe),onCreateMeasurement:me,onDeleteMeasurement:b})}),L.jsx("main",{className:"content",children:I?L.jsxs(L.Fragment,{children:[L.jsxs("section",{className:"view-row globe-section",children:[L.jsx("h2",{className:"view-label",children:"球面视图 · 本地地平天球（Three.js）"}),L.jsx(X6,{sky:I,fov:r,horizonClip:l,showGraticule:h,annotations:A,measurements:P,selectedId:m,hoverId:g,onSelect:$,onHover:d,focusToken:_,graticuleHorizontal:K,eqToHorizontal:D})]}),L.jsxs("section",{className:"view-row proj-section",children:[L.jsx(V1,{kind:"stereographic",sky:I,fov:r,horizonClip:l,showHorizon:u,annotations:A,measurements:P,selectedId:m,hoverId:g,onSelect:$,onHover:d}),L.jsx(V1,{kind:"equidistant",sky:I,fov:r,horizonClip:l,showHorizon:u,annotations:A,measurements:P,selectedId:m,hoverId:g,onSelect:$,onHover:d})]}),L.jsx(U5,{target:q,centerAlt:I.centerAlt,centerAz:I.centerAz,gmstHours:I.gmstHours,julianDay:I.julianDay,measurements:P,onSetMeasureEndpoint:se=>m&&(se==="from"?M(m):F(m)),onGoToMeasurementFov:se=>s({...se.fov}),onDeleteMeasurement:b})]}):L.jsx("div",{className:"bad-time",children:"时间格式无效，请检查 UTC 时间输入。"})})]}),L.jsx("footer",{className:"app-footer",children:"纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）· 角距一律按球面 haversine 计算，图上像素距离不代表实际角距"})]})}E0.createRoot(document.getElementById("root")).render(L.jsx(r3.StrictMode,{children:L.jsx(t8,{})}));
