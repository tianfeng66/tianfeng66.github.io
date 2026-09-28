(()=>{var Ib=Object.create;var y0=Object.defineProperty;var Pb=Object.getOwnPropertyDescriptor;var zb=Object.getOwnPropertyNames;var Bb=Object.getPrototypeOf,Fb=Object.prototype.hasOwnProperty;var Es=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Hb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of zb(t))!Fb.call(e,s)&&s!==n&&y0(e,s,{get:()=>t[s],enumerable:!(i=Pb(t,s))||i.enumerable});return e};var Qf=(e,t,n)=>(n=e!=null?Ib(Bb(e)):{},Hb(t||!e||!e.__esModule?y0(n,"default",{value:e,enumerable:!0}):n,e));var N0=Es(Nt=>{"use strict";var td=Symbol.for("react.transitional.element"),Vb=Symbol.for("react.portal"),Gb=Symbol.for("react.fragment"),kb=Symbol.for("react.strict_mode"),Xb=Symbol.for("react.profiler"),Wb=Symbol.for("react.consumer"),qb=Symbol.for("react.context"),Yb=Symbol.for("react.forward_ref"),Zb=Symbol.for("react.suspense"),Jb=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),Kb=Symbol.for("react.activity"),Qb=Symbol.for("react.view_transition"),x0=Symbol.iterator;function jb(e){return e===null||typeof e!="object"?null:(e=x0&&e[x0]||e["@@iterator"],typeof e=="function"?e:null)}var E0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A0=Object.assign,w0={};function hr(e,t,n){this.props=e,this.context=t,this.refs=w0,this.updater=n||E0}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C0(){}C0.prototype=hr.prototype;function ed(e,t,n){this.props=e,this.context=t,this.refs=w0,this.updater=n||E0}var nd=ed.prototype=new C0;nd.constructor=ed;A0(nd,hr.prototype);nd.isPureReactComponent=!0;var S0=Array.isArray;function $f(){}var me={H:null,A:null,T:null,S:null},R0=Object.prototype.hasOwnProperty;function id(e,t,n){var i=n.ref;return{$$typeof:td,type:e,key:t,ref:i!==void 0?i:null,props:n}}function $b(e,t){return id(e.type,t,e.props)}function sd(e){return typeof e=="object"&&e!==null&&e.$$typeof===td}function t1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var M0=/\/+/g;function jf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t1(""+e.key):t.toString(36)}function e1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then($f,$f):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ur(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case td:case Vb:r=!0;break;case T0:return r=e._init,ur(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+jf(e,0):i,S0(s)?(n="",r!=null&&(n=r.replace(M0,"$&/")+"/"),ur(s,t,n,"",function(c){return c})):s!=null&&(sd(s)&&(s=$b(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(M0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(S0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+jf(i,l),r+=ur(i,t,n,a,s);else if(l=jb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+jf(i,l++),r+=ur(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return ur(e1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Mc(e,t,n){if(e==null)return e;var i=[],s=0;return ur(e,i,"","",function(a){return t.call(n,a,s++)}),i}function n1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var b0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function D0(e){var t=me.T,n={};n.types=t!==null?t.types:null,me.T=n;try{var i=e(),s=me.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then($f,b0)}catch(a){b0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),me.T=t}}function U0(e){var t=me.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else D0(U0.bind(null,e))}var i1={map:Mc,forEach:function(e,t,n){Mc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mc(e,function(){t++}),t},toArray:function(e){return Mc(e,function(t){return t})||[]},only:function(e){if(!sd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Nt.Activity=Kb;Nt.Children=i1;Nt.Component=hr;Nt.Fragment=Gb;Nt.Profiler=Xb;Nt.PureComponent=ed;Nt.StrictMode=kb;Nt.Suspense=Zb;Nt.ViewTransition=Qb;Nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me;Nt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return me.H.useMemoCache(e)}};Nt.addTransitionType=U0;Nt.cache=function(e){return function(){return e.apply(null,arguments)}};Nt.cacheSignal=function(){return null};Nt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=A0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!R0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return id(e.type,s,i)};Nt.createContext=function(e){return e={$$typeof:qb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Wb,_context:e},e};Nt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)R0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return id(e,a,s)};Nt.createRef=function(){return{current:null}};Nt.forwardRef=function(e){return{$$typeof:Yb,render:e}};Nt.isValidElement=sd;Nt.lazy=function(e){return{$$typeof:T0,_payload:{_status:-1,_result:e},_init:n1}};Nt.memo=function(e,t){return{$$typeof:Jb,type:e,compare:t===void 0?null:t}};Nt.startTransition=D0;Nt.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()};Nt.use=function(e){return me.H.use(e)};Nt.useActionState=function(e,t,n){return me.H.useActionState(e,t,n)};Nt.useCallback=function(e,t){return me.H.useCallback(e,t)};Nt.useContext=function(e){return me.H.useContext(e)};Nt.useDebugValue=function(){};Nt.useDeferredValue=function(e,t){return me.H.useDeferredValue(e,t)};Nt.useEffect=function(e,t){return me.H.useEffect(e,t)};Nt.useEffectEvent=function(e){return me.H.useEffectEvent(e)};Nt.useId=function(){return me.H.useId()};Nt.useImperativeHandle=function(e,t,n){return me.H.useImperativeHandle(e,t,n)};Nt.useInsertionEffect=function(e,t){return me.H.useInsertionEffect(e,t)};Nt.useLayoutEffect=function(e,t){return me.H.useLayoutEffect(e,t)};Nt.useMemo=function(e,t){return me.H.useMemo(e,t)};Nt.useOptimistic=function(e,t){return me.H.useOptimistic(e,t)};Nt.useReducer=function(e,t,n){return me.H.useReducer(e,t,n)};Nt.useRef=function(e){return me.H.useRef(e)};Nt.useState=function(e){return me.H.useState(e)};Nt.useSyncExternalStore=function(e,t,n){return me.H.useSyncExternalStore(e,t,n)};Nt.useTransition=function(){return me.H.useTransition()};Nt.version="19.3.0"});var Vo=Es((T3,L0)=>{"use strict";L0.exports=N0()});var k0=Es(Te=>{"use strict";function ld(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<bc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ci(e){return e.length===0?null:e[0]}function Ec(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>bc(o,n))l<s&&0>bc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>bc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function bc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Te.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(O0=performance,Te.unstable_now=function(){return O0.now()}):(ad=Date,I0=ad.now(),Te.unstable_now=function(){return ad.now()-I0});var O0,ad,I0,Qi=[],As=[],s1=1,ei=null,rn=3,cd=!1,Go=!1,ko=!1,ud=!1,B0=typeof setTimeout=="function"?setTimeout:null,F0=typeof clearTimeout=="function"?clearTimeout:null,P0=typeof setImmediate<"u"?setImmediate:null;function Tc(e){for(var t=Ci(As);t!==null;){if(t.callback===null)Ec(As);else if(t.startTime<=e)Ec(As),t.sortIndex=t.expirationTime,ld(Qi,t);else break;t=Ci(As)}}function hd(e){if(ko=!1,Tc(e),!Go)if(Ci(Qi)!==null)Go=!0,dr||(dr=!0,fr());else{var t=Ci(As);t!==null&&fd(hd,t.startTime-e)}}var dr=!1,Xo=-1,H0=5,V0=-1;function G0(){return ud?!0:!(Te.unstable_now()-V0<H0)}function rd(){if(ud=!1,dr){var e=Te.unstable_now();V0=e;var t=!0;try{t:{Go=!1,ko&&(ko=!1,F0(Xo),Xo=-1),cd=!0;var n=rn;try{e:{for(Tc(e),ei=Ci(Qi);ei!==null&&!(ei.expirationTime>e&&G0());){var i=ei.callback;if(typeof i=="function"){ei.callback=null,rn=ei.priorityLevel;var s=i(ei.expirationTime<=e);if(e=Te.unstable_now(),typeof s=="function"){ei.callback=s,Tc(e),t=!0;break e}ei===Ci(Qi)&&Ec(Qi),Tc(e)}else Ec(Qi);ei=Ci(Qi)}if(ei!==null)t=!0;else{var a=Ci(As);a!==null&&fd(hd,a.startTime-e),t=!1}}break t}finally{ei=null,rn=n,cd=!1}t=void 0}}finally{t?fr():dr=!1}}}var fr;typeof P0=="function"?fr=function(){P0(rd)}:typeof MessageChannel<"u"?(od=new MessageChannel,z0=od.port2,od.port1.onmessage=rd,fr=function(){z0.postMessage(null)}):fr=function(){B0(rd,0)};var od,z0;function fd(e,t){Xo=B0(function(){e(Te.unstable_now())},t)}Te.unstable_IdlePriority=5;Te.unstable_ImmediatePriority=1;Te.unstable_LowPriority=4;Te.unstable_NormalPriority=3;Te.unstable_Profiling=null;Te.unstable_UserBlockingPriority=2;Te.unstable_cancelCallback=function(e){e.callback=null};Te.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H0=0<e?Math.floor(1e3/e):5};Te.unstable_getCurrentPriorityLevel=function(){return rn};Te.unstable_next=function(e){switch(rn){case 1:case 2:case 3:var t=3;break;default:t=rn}var n=rn;rn=t;try{return e()}finally{rn=n}};Te.unstable_requestPaint=function(){ud=!0};Te.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=rn;rn=e;try{return t()}finally{rn=n}};Te.unstable_scheduleCallback=function(e,t,n){var i=Te.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:s1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,ld(As,e),Ci(Qi)===null&&e===Ci(As)&&(ko?(F0(Xo),Xo=-1):ko=!0,fd(hd,n-i))):(e.sortIndex=s,ld(Qi,e),Go||cd||(Go=!0,dr||(dr=!0,fr()))),e};Te.unstable_shouldYield=G0;Te.unstable_wrapCallback=function(e){var t=rn;return function(){var n=rn;rn=t;try{return e.apply(this,arguments)}finally{rn=n}}}});var W0=Es((A3,X0)=>{"use strict";X0.exports=k0()});var Z0=Es(on=>{"use strict";var a1=Vo();function Y0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ws(){}var dn={d:{f:ws,r:function(){throw Error(Y0(522))},D:ws,C:ws,L:ws,m:ws,X:ws,S:ws,M:ws},p:0,findDOMNode:null},r1=Symbol.for("react.portal"),o1=Symbol.for("react.recoverable"),q0=Symbol.for("react.optimistic_key");function l1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r1,key:i==null?null:i===q0?q0:""+i,children:e,containerInfo:t,implementation:n}}var Wo=a1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ac(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dn;on.browser=function(e){return{$$typeof:o1,_reason:e}};on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Y0(299));return l1(e,t,null,n)};on.flushSync=function(e){var t=Wo.T,n=dn.p;try{if(Wo.T=null,dn.p=2,e)return e()}finally{Wo.T=t,dn.p=n,dn.d.f()}};on.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,dn.d.C(e,t))};on.prefetchDNS=function(e){typeof e=="string"&&dn.d.D(e)};on.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ac(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?dn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&dn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};on.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ac(t.as,t.crossOrigin);dn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&dn.d.M(e)};on.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ac(n,t.crossOrigin);dn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};on.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ac(t.as,t.crossOrigin);dn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else dn.d.m(e)};on.requestFormReset=function(e){dn.d.r(e)};on.unstable_batchedUpdates=function(e,t){return e(t)};on.useFormState=function(e,t,n){return Wo.H.useFormState(e,t,n)};on.useFormStatus=function(){return Wo.H.useHostTransitionStatus()};on.version="19.3.0"});var Q0=Es((C3,K0)=>{"use strict";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(e){console.error(e)}}J0(),K0.exports=Z0()});var zS=Es(oh=>{"use strict";var Ve=W0(),Pv=Vo(),c1=Q0();function W(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Bv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j0(e){if(Nl(e)!==e)throw Error(W(188))}function u1(e){var t=e.alternate;if(!t){if(t=Nl(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return j0(s),e;if(a===i)return j0(s),t;a=a.sibling}throw Error(W(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(W(189))}}if(n.alternate!==i)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function Hv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Hv(e),t!==null)return t;e=e.sibling}return null}function An(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&An(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Fa(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function $0(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Vv(e){var t=[null,null],n=Fa(e);return n===null||Gv(t,e,n.child,{foundSelf:!1}),t}function Gv(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Gv(e,t,n.child,i))return!0;n=n.sibling}return!1}function He(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(W(559))}}var xr=null,Xd=null;function h1(e,t,n){return e===n?!0:e===t?(xr=e,!0):!1}function f1(e,t,n){return e===n?(Xd=e,!1):e===t?(Xd!==null&&(xr=e),!0):!1}function t_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Wd(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var de=Object.assign,d1=Symbol.for("react.element"),wc=Symbol.for("react.transitional.element"),jo=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),Xv=Symbol.for("react.consumer"),Oi=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Us=Symbol.for("react.lazy");Symbol.for("react.scope");var Jd=Symbol.for("react.activity"),p1=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var m1=Symbol.for("react.memo_cache_sentinel"),Kd=Symbol.for("react.view_transition"),g1=Symbol.for("react.recoverable"),e_=Symbol.iterator;function qo(e){return e===null||typeof e!="object"?null:(e=e_&&e[e_]||e["@@iterator"],typeof e=="function"?e:null)}var _1=Symbol.for("react.client.reference");function Qd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case qd:return"Profiler";case kv:return"StrictMode";case Yd:return"Suspense";case Zd:return"SuspenseList";case Jd:return"Activity";case Kd:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case jo:return"Portal";case Oi:return e.displayName||"Context";case Xv:return(e._context.displayName||"Context")+".Consumer";case em:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nm:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case Us:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}var $o=Array.isArray,Ct=Pv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,jt=c1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Aa={pending:!1,data:null,method:null,action:null},jd=[],Mr=-1;function Vi(e){return{current:e}}function tn(e){0>Mr||(e.current=jd[Mr],jd[Mr]=null,Mr--)}function ve(e,t){Mr++,jd[Mr]=e.current,e.current=t}var Bi=Vi(null),gl=Vi(null),Hs=Vi(null),du=Vi(null);function pu(e,t){switch(ve(Hs,t),ve(gl,e),ve(Bi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mv(t),e=fS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Bi),ve(Bi,e)}function Gr(){tn(Bi),tn(gl),tn(Hs)}function $d(e){var t=e.memoizedState;t!==null&&(jr._currentValue=t.memoizedState,ve(du,e)),t=Bi.current;var n=fS(t,e.type);t!==n&&(ve(gl,e),ve(Bi,n))}function mu(e){gl.current===e&&(tn(Bi),tn(gl)),du.current===e&&(tn(du),jr._currentValue=Aa)}var dd,n_;function Rs(e){if(dd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dd=t&&t[1]||"",n_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dd+e+n_}var pd=!1;function md(e,t){if(!e||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(_){var h=_}Reflect.construct(e,[],d)}else{try{d.call()}catch(_){h=_}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(_){h=_}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(_){if(_&&h&&typeof _.stack=="string")return[_.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Rs(n):""}function v1(e,t){switch(e.tag){case 26:case 27:case 5:return Rs(e.type);case 16:return Rs("Lazy");case 13:return e.child!==t&&t!==null?Rs("Suspense Fallback"):Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 15:return md(e.type,!1);case 11:return md(e.type.render,!1);case 1:return md(e.type,!0);case 31:return Rs("Activity");case 30:return Rs("ViewTransition");default:return""}}function i_(e){try{var t="",n=null;do t+=v1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var tp=Object.prototype.hasOwnProperty,im=Ve.unstable_scheduleCallback,gd=Ve.unstable_cancelCallback,y1=Ve.unstable_shouldYield,x1=Ve.unstable_requestPaint,Vn=Ve.unstable_now,S1=Ve.unstable_getCurrentPriorityLevel,Wv=Ve.unstable_ImmediatePriority,qv=Ve.unstable_UserBlockingPriority,gu=Ve.unstable_NormalPriority,M1=Ve.unstable_LowPriority,Yv=Ve.unstable_IdlePriority,b1=Ve.log,T1=Ve.unstable_setDisableYieldValue,Ll=null,Gn=null;function Os(e){if(typeof b1=="function"&&T1(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(Ll,e)}catch{}}var kn=Math.clz32?Math.clz32:w1,E1=Math.log,A1=Math.LN2;function w1(e){return e>>>=0,e===0?32:31-(E1(e)/A1|0)|0}var Cc=256,Rc=262144,Dc=4194304;function Sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Sa(i):(r&=o,r!==0?s=Sa(r):n||(n=o&~e,n!==0&&(s=Sa(n))))):(o=i&~a,o!==0?s=Sa(o):r!==0?s=Sa(r):n||(n=i&~e,n!==0&&(s=Sa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zv(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-kn(n),s=1<<i;t|=e[i],n&=~s}return t}function C1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jv(){var e=Dc;return Dc<<=1,(Dc&62914560)===0&&(Dc=4194304),e}function _d(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function R1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-kn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Kv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Kv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Qv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function jv(e,t){var n=t&-t;return n=(n&42)!==0?1:sm(n),(n&(e.suspendedLanes|t))!==0?0:n}function sm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function am(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $v(){var e=jt.p;return e!==0?e:(e=window.event,e===void 0?32:OS(e.type))}function s_(e,t){var n=jt.p;try{return jt.p=e,t()}finally{jt.p=n}}var us=Math.random().toString(36).slice(2),je="__reactFiber$"+us,wn="__reactProps$"+us,eo="__reactContainer$"+us,a_="__reactEvents$"+us,D1="__reactListeners$"+us,U1="__reactHandles$"+us,r_="__reactResources$"+us,Pl="__reactMarker$"+us,_u="__reactLoad$"+us;function ku(e){delete e[je],delete e[wn],delete e[D1],delete e[U1]}function Ta(e){var t;if(t=e[je])return t;for(var n=e.parentNode;n;){if(t=n[eo]||n[je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bv(e);e!==null;){if(n=e[je])return n;e=bv(e)}return t}e=n,n=e.parentNode}return null}function no(e){if(e=e[je]||e[eo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(W(33))}function Nr(e){var t=e[r_];return t||(t=e[r_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Pl]=!0}function ty(e){e[_u]=void 0}var ey=new Set,ny={};function Ha(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(ny[e]=t,e=0;e<t.length;e++)ey.add(t[e])}var N1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),o_={},l_={};function L1(e){return tp.call(l_,e)?!0:tp.call(o_,e)?!1:N1.test(e)?l_[e]=!0:(o_[e]=!0,!1)}var Kt=!1;function c_(){var e=Kt;return Kt=!1,e}function Zc(e,t,n){if(L1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Uc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ji(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function zn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ep(e){if(!e._valueTracker){var t=iy(e)?"checked":"value";e._valueTracker=O1(e,t,""+e[t])}}function sy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=iy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var I1=/[\n"\\]/g;function ri(e){return e.replace(I1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function np(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zn(t)):e.value!==""+zn(t)&&(e.value=""+zn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?vd(e,zn(e.value)):vd(e,zn(t)):n!=null?vd(e,zn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+zn(o):e.removeAttribute("name")}function ay(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){ep(e);return}n=n!=null?""+zn(n):"",t=t!=null?""+zn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ep(e)}function vd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Lr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ry(e,t,n){if(t!=null&&(t=""+zn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+zn(n):""}function oy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(W(92));if($o(i)){if(1<i.length)throw Error(W(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=zn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ep(e)}function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var P1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function u_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||P1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ly(e,t,n){if(t!=null&&typeof t!="object")throw Error(W(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Kt=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(u_(e,s,i),Kt=!0)}else for(var a in t)t.hasOwnProperty(a)&&u_(e,a,t[a])}function rm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jc(e){return B1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var ip=null;function om(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Or=null;function h_(e){var t=no(e);if(t&&(e=t.stateNode)){var n=e[wn]||null;t:switch(e=t.stateNode,t.type){case"input":if(np(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ri(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[wn]||null;if(!s)throw Error(W(90));np(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&sy(i)}break t;case"textarea":ry(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}}}var yd=!1;function cy(e,t,n){if(yd)return e(t,n);yd=!0;try{var i=e(t);return i}finally{if(yd=!1,(br!==null||Or!==null)&&(ih(),br&&(t=br,e=Or,Or=br=null,h_(t),e)))for(t=0;t<e.length;t++)h_(e[t])}}function _l(e,t){var n=e.stateNode;if(n===null)return null;var i=n[wn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sp=!1;if(ss)try{pr={},Object.defineProperty(pr,"passive",{get:function(){sp=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{sp=!1}var pr,Is=null,lm=null,Kc=null;function uy(){if(Kc)return Kc;var e,t=lm,n=t.length,i,s="value"in Is?Is.value:Is.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Kc=s.slice(e,1<i?1-i:void 0)}function Qc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nc(){return!0}function f_(){return!1}function _n(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Nc:f_,this.isPropagationStopped=f_,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nc)},persist:function(){},isPersistent:Nc}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=_n(ea),zl=de({},ea,{view:0,detail:0}),F1=_n(zl),xd,Sd,Yo,Wu=de({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yo&&(Yo&&e.type==="mousemove"?(xd=e.screenX-Yo.screenX,Sd=e.screenY-Yo.screenY):Sd=xd=0,Yo=e),xd)},movementY:function(e){return"movementY"in e?e.movementY:Sd}}),d_=_n(Wu),H1=de({},Wu,{dataTransfer:0}),V1=_n(H1),G1=de({},zl,{relatedTarget:0}),Md=_n(G1),k1=de({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),X1=_n(k1),W1=de({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q1=_n(W1),Y1=de({},ea,{data:0}),p_=_n(Y1),Z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K1[e])?!!t[e]:!1}function cm(){return Q1}var j1=de({},zl,{key:function(e){if(e.key){var t=Z1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(e){return e.type==="keypress"?Qc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$1=_n(j1),tT=de({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m_=_n(tT),eT=de({},ea,{submitter:0}),nT=_n(eT),iT=de({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),sT=_n(iT),aT=de({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),rT=_n(aT),oT=de({},Wu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lT=_n(oT),cT=de({},ea,{newState:0,oldState:0,source:0}),uT=_n(cT),hT=[9,13,27,32],um=ss&&"CompositionEvent"in window,il=null;ss&&"documentMode"in document&&(il=document.documentMode);var fT=ss&&"TextEvent"in window&&!il,hy=ss&&(!um||il&&8<il&&11>=il),g_=" ",__=!1;function fy(e,t){switch(e){case"keyup":return hT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function dT(e,t){switch(e){case"compositionend":return dy(t);case"keypress":return t.which!==32?null:(__=!0,g_);case"textInput":return e=t.data,e===g_&&__?null:e;default:return null}}function pT(e,t){if(Tr)return e==="compositionend"||!um&&fy(e,t)?(e=uy(),Kc=lm=Is=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hy&&t.locale!=="ko"?null:t.data;default:return null}}var mT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mT[e.type]:t==="textarea"}function py(e,t,n,i){br?Or?Or.push(i):Or=[i]:br=i,t=Fu(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var sl=null,vl=null;function gT(e){cS(e,0)}function qu(e){var t=tl(e);if(sy(t))return e}function y_(e,t){if(e==="change")return t}var my=!1;ss&&(ss?(Oc="oninput"in document,Oc||(bd=document.createElement("div"),bd.setAttribute("oninput","return;"),Oc=typeof bd.oninput=="function"),Lc=Oc):Lc=!1,my=Lc&&(!document.documentMode||9<document.documentMode));var Lc,Oc,bd;function x_(){sl&&(sl.detachEvent("onpropertychange",gy),vl=sl=null)}function gy(e){if(e.propertyName==="value"&&qu(vl)){var t=[];py(t,vl,e,om(e)),cy(gT,t)}}function _T(e,t,n){e==="focusin"?(x_(),sl=t,vl=n,sl.attachEvent("onpropertychange",gy)):e==="focusout"&&x_()}function vT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qu(vl)}function yT(e,t){if(e==="click")return qu(t)}function xT(e,t){if(e==="input"||e==="change")return qu(t)}function ST(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:ST;function yl(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!tp.call(t,s)||!Wn(e[s],t[s]))return!1}return!0}function ap(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function S_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function M_(e,t){var n=S_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=S_(n)}}function _y(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_y(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ap(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ap(e.document)}return t}function hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var MT=ss&&"documentMode"in document&&11>=document.documentMode,Er=null,rp=null,al=null,op=!1;function b_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;op||Er==null||Er!==ap(i)||(i=Er,"selectionStart"in i&&hm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),al&&yl(al,i)||(al=i,i=Fu(rp,"onSelect"),0<i.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Er)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Td={},yy={};ss&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Va(e){if(Td[e])return Td[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yy)return Td[e]=t[n];return e}var xy=Va("animationend"),Sy=Va("animationiteration"),My=Va("animationstart"),bT=Va("transitionrun"),TT=Va("transitionstart"),ET=Va("transitioncancel"),by=Va("transitionend"),Ty=new Map,lp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lp.push("scrollEnd");function xi(e,t){Ty.set(e,t),Ha(t,[e])}var AT=0;function as(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=yi.identifierPrefix;var n=AT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function T_(e){if(e==null||typeof e=="string")return e;var t=null,n=Vr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function hs(e,t){return e=T_(e),t=T_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],wr=0,fm=0;function Yu(){for(var e=wr,t=fm=wr=0;t<e;){var n=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var s=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ey(n,s,a)}}function Zu(e,t,n,i){ii[wr++]=e,ii[wr++]=t,ii[wr++]=n,ii[wr++]=i,fm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dm(e,t,n,i){return Zu(e,t,n,i),yu(e)}function Ga(e,t){return Zu(e,null,null,t),yu(e)}function Ey(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function yu(e){if(50<ml)throw ml=0,ou=null,Error(W(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cr={};function wT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,t,n,i){return new wT(e,t,n,i)}function pm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ns(e,t){var n=e.alternate;return n===null?(n=Tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ay(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jc(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")pm(i)&&(r=1);else if(typeof i=="string")r=$E(e,n,Bi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Jd:return e=Tn(31,n,t,s),e.elementType=Jd,e.lanes=a,e;case Sr:return wa(n.children,s,a,t);case kv:r=8,s|=24;break;case qd:return e=Tn(12,n,t,s|2),e.elementType=qd,e.lanes=a,e;case Yd:return e=Tn(13,n,t,s),e.elementType=Yd,e.lanes=a,e;case Zd:return e=Tn(19,n,t,s),e.elementType=Zd,e.lanes=a,e;case p1:case Kd:return e=s|32,e=Tn(30,n,t,e),e.elementType=Kd,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Oi:r=10;break t;case Xv:r=9;break t;case em:r=11;break t;case nm:r=14;break t;case Us:r=16,i=null;break t}r=29,n=Error(W(130,e===null?"null":typeof e,"")),i=null}return t=Tn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function wa(e,t,n,i){return e=Tn(7,e,i,t),e.lanes=n,e}function Ed(e,t,n){return e=Tn(6,e,null,t),e.lanes=n,e}function wy(e){var t=Tn(18,null,null,0);return t.stateNode=e,t}function Ad(e,t,n){return t=Tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var E_=new WeakMap;function oi(e,t){if(typeof e=="object"&&e!==null){var n=E_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:i_(t)},E_.set(e,t),t)}return{value:e,source:t,stack:i_(t)}}var Rr=[],Dr=0,xu=null,xl=0,si=[],ai=0,Ks=null,Pi=1,zi="";function ts(e,t){Rr[Dr++]=xl,Rr[Dr++]=xu,xu=e,xl=t}function Cy(e,t,n){si[ai++]=Pi,si[ai++]=zi,si[ai++]=Ks,Ks=e;var i=Pi;e=zi;var s=32-kn(i)-1;i&=~(1<<s),n+=1;var a=32-kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Pi=1<<32-kn(t)+s|n<<s|i,zi=a+e}else Pi=1<<a|n<<s|i,zi=e}function Ju(e){e.return!==null&&(ts(e,1),Cy(e,1,0))}function mm(e){for(;e===xu;)xu=Rr[--Dr],Rr[Dr]=null,xl=Rr[--Dr],Rr[Dr]=null;for(;e===Ks;)Ks=si[--ai],si[ai]=null,zi=si[--ai],si[ai]=null,Pi=si[--ai],si[ai]=null}function Ry(e,t){si[ai++]=Pi,si[ai++]=zi,si[ai++]=Ks,Pi=t.id,zi=t.overflow,Ks=e}var Je=null,_e=null,Vt=!1,Vs=null,li=!1,cp=Error(W(519));function Qs(e){var t=Error(W(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sl(oi(t,e)),cp}function A_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[je]=e,t[wn]=i,n){case"dialog":Gt("cancel",t),Gt("close",t);break;case"iframe":case"object":case"embed":Gt("load",t);break;case"video":case"audio":for(n=0;n<El.length;n++)Gt(El[n],t);break;case"source":Gt("error",t);break;case"img":case"image":case"link":Gt("error",t),Gt("load",t);break;case"details":Gt("toggle",t);break;case"input":Gt("invalid",t),ay(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Gt("invalid",t);break;case"textarea":Gt("invalid",t),oy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||hS(t.textContent,n)?(i.popover!=null&&(Gt("beforetoggle",t),Gt("toggle",t)),i.onScroll!=null&&Gt("scroll",t),i.onScrollEnd!=null&&Gt("scrollend",t),i.onClick!=null&&(t.onclick=Ii),t=!0):t=!1,t||Qs(e,!0)}function Su(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Je=Je.return}}function mr(e){if(e!==Je)return!1;if(!Vt)return Su(e),Vt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Yp(e.type,e.memoizedProps)),n=!n),n&&_e&&Qs(e),Su(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));_e=Mv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));_e=Mv(e)}else t===27?(t=_e,na(e.type)?(e=Qp,Qp=null,_e=e):_e=t):_e=Je?ci(e.stateNode.nextSibling):null;return!0}function Ua(){_e=Je=null,Vt=!1}function wd(){var e=Vs;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Vs=null),e}function Sl(e){Vs===null?Vs=[e]:Vs.push(e)}var up=Vi(null),ka=null,es=null;function Ps(e,t,n){ve(up,t._currentValue),t._currentValue=n}function is(e){e._currentValue=up.current,tn(up)}function $c(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function hp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$c(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(W(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),$c(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),$c(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Na(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(W(387));if(r=r.memoizedProps,r!==null){var o=s.type;Wn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===du.current){if(r=s.alternate,r===null)throw Error(W(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(jr):e=[jr])}s=s.return}return e!==null&&hp(t,e,n,i),t.flags|=262144,e!==null}function Mu(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){ka=e,es=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Dy(ka,e)}function Ic(e,t){return ka===null&&La(e),Dy(e,t)}function Dy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},es===null){if(e===null)throw Error(W(308));es=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else es=es.next=t;return n}var CT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},RT=Ve.unstable_scheduleCallback,DT=Ve.unstable_NormalPriority,Pe={$$typeof:Oi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gm(){return{controller:new CT,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&RT(DT,function(){e.controller.abort()})}function w_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var el=null;function UT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var rl=null,fp=0,Oa=0,Ir=null;function NT(e,t){if(rl===null){var n=rl=[];fp=0,Oa=Xm(),Ir={status:"pending",value:void 0,then:function(i){n.push(i)}}}return fp++,t.then(C_,C_),t}function C_(){if(--fp===0&&(el=null,rl!==null)){Ir!==null&&(Ir.status="fulfilled");var e=rl;rl=null,Oa=0,Ir=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function LT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var R_=Ct.S;Ct.S=function(e,t){if(Zx=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&NT(e,t),el!==null)for(var n=Jr;n!==null;)w_(n,el),n=n.next;if(n=e.types,n!==null){for(var i=Jr;i!==null;)w_(i,n),i=i.next;if(Oa!==0){i=el,i===null&&(i=el=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}R_!==null&&R_(e,t)};var Ca=Vi(null);function _m(){var e=Ca.current;return e!==null?e:fe.pooledCache}function tu(e,t){t===null?ve(Ca,Ca.current):ve(Ca,t.pool)}function Uy(){var e=_m();return e===null?null:{parent:Pe._currentValue,pool:e}}var io=Error(W(460)),vm=Error(W(474)),Ku=Error(W(542)),bu={then:function(){}};function D_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ny(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,N_(e),e===void 0&&!("reason"in t)?Error(W(600)):e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(W(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,N_(e),e}throw Ra=t,io}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,io):n}}var Ra=null;function U_(){if(Ra===null)throw Error(W(459));var e=Ra;return Ra=null,e}function N_(e){if(e===io||e===Ku)throw Error(W(483))}var Pr=null,Ml=0;function Pc(e){var t=Ml;return Ml+=1,Pr===null&&(Pr=[]),Ny(Pr,e,t)}function Cs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zc(e,t){throw t.$$typeof===d1?Error(W(525)):(e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ly(e){function t(u,g){if(e){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key===null?g.set(u.index,u):g.set(u.key,u),u=u.sibling;return g}function s(u,g){return u=ns(u,g),u.index=0,u.sibling=null,u}function a(u,g,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=134217730,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,g,y,v){return g===null||g.tag!==6?(g=Ed(y,u.mode,v),g.return=u,g):(g=s(g,y),g.return=u,g)}function l(u,g,y,v){var E=y.type;return E===Sr?(u=f(u,g,y.props.children,v,y.key),Cs(u,y),u):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Us&&Ma(E)===g.type)?(g=s(g,y.props),Cs(g,y),g.return=u,g):(g=jc(y.type,y.key,y.props,null,u.mode,v),Cs(g,y),g.return=u,g)}function c(u,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Ad(y,u.mode,v),g.return=u,g):(g=s(g,y.children||[]),g.return=u,g)}function f(u,g,y,v,E){return g===null||g.tag!==7?(g=wa(y,u.mode,v,E),g.return=u,g):(g=s(g,y),g.return=u,g)}function d(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Ed(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wc:return y=jc(g.type,g.key,g.props,null,u.mode,y),Cs(y,g),y.return=u,y;case jo:return g=Ad(g,u.mode,y),g.return=u,g;case Us:return g=Ma(g),d(u,g,y)}if($o(g)||qo(g))return g=wa(g,u.mode,y,null),g.return=u,g;if(typeof g.then=="function")return d(u,Pc(g),y);if(g.$$typeof===Oi)return d(u,Ic(u,g),y);zc(u,g)}return null}function h(u,g,y,v){var E=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return E!==null?null:o(u,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wc:return y.key===E?l(u,g,y,v):null;case jo:return y.key===E?c(u,g,y,v):null;case Us:return y=Ma(y),h(u,g,y,v)}if($o(y)||qo(y))return E!==null?null:f(u,g,y,v,null);if(typeof y.then=="function")return h(u,g,Pc(y),v);if(y.$$typeof===Oi)return h(u,g,Ic(u,y),v);zc(u,y)}return null}function p(u,g,y,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(y)||null,o(g,u,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wc:return u=u.get(v.key===null?y:v.key)||null,l(g,u,v,E);case jo:return u=u.get(v.key===null?y:v.key)||null,c(g,u,v,E);case Us:return v=Ma(v),p(u,g,y,v,E)}if($o(v)||qo(v))return u=u.get(y)||null,f(g,u,v,E,null);if(typeof v.then=="function")return p(u,g,y,Pc(v),E);if(v.$$typeof===Oi)return p(u,g,y,Ic(g,v),E);zc(g,v)}return null}function _(u,g,y,v){for(var E=null,C=null,w=g,D=g=0,T=null;w!==null&&D<y.length;D++){w.index>D?(T=w,w=null):T=w.sibling;var b=h(u,w,y[D],v);if(b===null){w===null&&(w=T);break}e&&w&&b.alternate===null&&t(u,w),g=a(b,g,D),C===null?E=b:C.sibling=b,C=b,w=T}if(D===y.length)return n(u,w),Vt&&ts(u,D),E;if(w===null){for(;D<y.length;D++)w=d(u,y[D],v),w!==null&&(g=a(w,g,D),C===null?E=w:C.sibling=w,C=w);return Vt&&ts(u,D),E}for(w=i(w);D<y.length;D++)T=p(w,u,D,y[D],v),T!==null&&(e&&(b=T.alternate,b!==null&&w.delete(b.key===null?D:b.key)),g=a(T,g,D),C===null?E=T:C.sibling=T,C=T);return e&&w.forEach(function(U){return t(u,U)}),Vt&&ts(u,D),E}function S(u,g,y,v){if(y==null)throw Error(W(151));for(var E=null,C=null,w=g,D=g=0,T=null,b=y.next();w!==null&&!b.done;D++,b=y.next()){w.index>D?(T=w,w=null):T=w.sibling;var U=h(u,w,b.value,v);if(U===null){w===null&&(w=T);break}e&&w&&U.alternate===null&&t(u,w),g=a(U,g,D),C===null?E=U:C.sibling=U,C=U,w=T}if(b.done)return n(u,w),Vt&&ts(u,D),E;if(w===null){for(;!b.done;D++,b=y.next())b=d(u,b.value,v),b!==null&&(g=a(b,g,D),C===null?E=b:C.sibling=b,C=b);return Vt&&ts(u,D),E}for(w=i(w);!b.done;D++,b=y.next())b=p(w,u,D,b.value,v),b!==null&&(e&&(T=b.alternate,T!==null&&w.delete(T.key===null?D:T.key)),g=a(b,g,D),C===null?E=b:C.sibling=b,C=b);return e&&w.forEach(function(F){return t(u,F)}),Vt&&ts(u,D),E}function m(u,g,y,v){if(typeof y=="object"&&y!==null&&y.type===Sr&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case wc:t:{for(var E=y.key;g!==null;){if(g.key===E){if(E=y.type,E===Sr){if(g.tag===7){n(u,g.sibling),v=s(g,y.props.children),Cs(v,y),v.return=u,u=v;break t}}else if(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Us&&Ma(E)===g.type){n(u,g.sibling),v=s(g,y.props),Cs(v,y),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}y.type===Sr?(v=wa(y.props.children,u.mode,v,y.key),Cs(v,y),v.return=u,u=v):(v=jc(y.type,y.key,y.props,null,u.mode,v),Cs(v,y),v.return=u,u=v)}return r(u);case jo:t:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),v=s(g,y.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=Ad(y,u.mode,v),v.return=u,u=v}return r(u);case Us:return y=Ma(y),m(u,g,y,v)}if($o(y))return _(u,g,y,v);if(qo(y)){if(E=qo(y),typeof E!="function")throw Error(W(150));return y=E.call(y),S(u,g,y,v)}if(typeof y.then=="function")return m(u,g,Pc(y),v);if(y.$$typeof===Oi)return m(u,g,Ic(u,y),v);zc(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),v=s(g,y),v.return=u,u=v):(n(u,g),v=Ed(y,u.mode,v),v.return=u,u=v),r(u)):n(u,g)}return function(u,g,y,v){try{Ml=0;var E=m(u,g,y,v);return Pr=null,E}catch(w){if(w===io||w===Ku)throw w;var C=Tn(29,w,null,u.mode);return C.lanes=v,C.return=u,C}finally{}}}var Ia=Ly(!0),Oy=Ly(!1),Ns=!1;function ym(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ks(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Qt&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=yu(e),Ey(e,null,n),t}return Zu(e,i,t,n),yu(e)}function ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Qv(e,n)}}function Cd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var pp=!1;function ll(){if(pp){var e=Ir;if(e!==null)throw e}}function cl(e,t,n,i){pp=!1;var s=e.updateQueue;Ns=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,f=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Wt&h)===h:(i&h)===h){h!==0&&h===Oa&&(pp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,S=o;h=t;var m=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){d=_.call(m,d,h);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break t;d=de({},d,h);break t;case 2:Ns=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),ta|=r,e.lanes=r,e.memoizedState=d}}function Iy(e,t){if(typeof e!="function")throw Error(W(191,e));e.call(t)}function Py(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Iy(n[e],t)}var js=Vi(null),Tu=Vi(0);function L_(e,t){e=cs,ve(Tu,e),ve(js,t),cs=e|t.baseLanes}function mp(){ve(Tu,cs),ve(js,js.current)}function xm(){cs=Tu.current,tn(js),tn(Tu)}var sn=Vi(null),ln=null;function Xs(e){var t=e.alternate;ve(en,en.current&1),ve(sn,e),ln===null&&(t===null||js.current!==null||t.memoizedState!==null)&&(ln=e)}function gp(e){ve(en,en.current),ve(sn,e),ln===null&&(ln=e)}function zy(e){e.tag===22?(ve(en,en.current),ve(sn,e),ln===null&&(ln=e)):Ws()}function Ws(){ve(en,en.current),ve(sn,sn.current)}function Bn(e){tn(sn),ln===e&&(ln=null),tn(en)}var en=Vi(0);function bl(e,t){ve(sn,sn.current),ve(en,t)}function Sm(e){tn(en),tn(sn),ln===e&&(ln=null)}function Eu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Kp(n)||Zm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=0,It=null,ue=null,Ie=null,Au=!1,zr=!1,Pa=!1,wu=0,Tl=0,Br=null,OT=0;function Ue(){throw Error(W(321))}function Mm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function bm(e,t,n,i,s,a){return rs=a,It=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ct.H=e===null||e.memoizedState===null?px:mx,Pa=!1,a=n(i,s),Pa=!1,zr&&(a=Fy(t,n,i,s)),By(e),a}function By(e){Ct.H=Cu;var t=ue!==null&&ue.next!==null;if(rs=0,Ie=ue=It=null,Au=!1,Tl=0,Br=null,t)throw Error(W(300));e===null||ze||(e=e.dependencies,e!==null&&Mu(e)&&(ze=!0))}function Fy(e,t,n,i){It=e;var s=0;do{if(zr&&(Br=null),Tl=0,zr=!1,25<=s)throw Error(W(301));if(s+=1,Ie=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ct.H=GT,a=t(n,i)}while(zr);return a}function IT(){var e=Ct.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(It.flags|=1024),t}function Tm(){var e=wu!==0;return wu=0,e}function Em(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Am(e){if(Au){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Au=!1}rs=0,Ie=ue=It=null,zr=!1,Tl=wu=0,Br=null}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?It.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Oe(){if(ue===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Ie===null?It.memoizedState:Ie.next;if(t!==null)Ie=t,ue=e;else{if(e===null)throw It.alternate===null?Error(W(467)):Error(W(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ie===null?It.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Tl;return Tl+=1,Br===null&&(Br=[]),e=Ny(Br,e,t),t=It,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,Ct.H=t===null||t.memoizedState===null?px:mx),e}function ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===g1)return;if(e.$$typeof===Oi)return $e(e)}throw Error(W(438,String(e)))}function wm(e){var t=null,n=It.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=It.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qu(),It.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=m1;return t.index++,n}function os(e,t){return typeof t=="function"?t(e):t}function eu(e){var t=Oe();return Cm(t,ue,e)}function Cm(e,t,n){var i=e.queue;if(i===null)throw Error(W(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Wt&d)===d:(rs&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Oa&&(f=!0);else if((rs&h)===h){c=c.next,h===Oa&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,It.lanes|=h,ta|=h;d=c.action,Pa&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,It.lanes|=d,ta|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Wn(a,e.memoizedState)&&(ze=!0,f&&(n=Ir,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Rd(e){var t=Oe(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Wn(a,t.memoizedState)||(ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Hy(e,t,n){var i=It,s=Oe(),a=Vt;if(a){if(n===void 0)throw Error(W(407));n=n()}else n=t();var r=!Wn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,ze=!0),s=s.queue,Rm(ky.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ie!==null&&(Ie.memoizedState.tag&1)!==0,Wr(e?9:8,{destroy:void 0},Gy.bind(null,i,s,n,t),null),e){if(i.flags|=2048,fe===null)throw Error(W(349));a||(rs&127)!==0||Vy(i,t,n)}return n}function Vy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=It.updateQueue,t===null?(t=Qu(),It.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gy(e,t,n,i){t.value=n,t.getSnapshot=i,Xy(t)&&Wy(e)}function ky(e,t,n){return n(function(){Xy(t)&&Wy(e)})}function Xy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Wy(e){var t=Ga(e,2);t!==null&&En(t,e,2)}function _p(e){var t=gn();if(typeof e=="function"){var n=e;if(e=n(),Pa){Os(!0);try{n()}finally{Os(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function qy(e,t,n,i){return e.baseState=n,Cm(e,ue,typeof i=="function"?i:os)}function PT(e,t,n,i,s){if(th(e))throw Error(W(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ct.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Yy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Yy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ct.T,r={};r.types=a!==null?a.types:null,Ct.T=r;try{var o=n(s,i),l=Ct.S;l!==null&&l(r,o),O_(e,t,o)}catch(c){vp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ct.T=a}}else try{a=n(s,i),O_(e,t,a)}catch(c){vp(e,t,c)}}function O_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){I_(e,t,i)},function(i){return vp(e,t,i)}):I_(e,t,n)}function I_(e,t,n){t.status="fulfilled",t.value=n,Zy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yy(e,n)))}function vp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Zy(t),t=t.next;while(t!==i)}e.action=null}function Zy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jy(e,t){return t}function P_(e,t){if(Vt){var n=fe.formState;if(n!==null){t:{var i=It;if(Vt){if(_e){e:{for(var s=_e,a=li;s.nodeType!==8;){if(!a){s=null;break e}if(s=ci(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){_e=ci(s.nextSibling),i=s.data==="F!";break t}}Qs(i)}i=!1}i&&(t=n[0])}}return n=gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jy,lastRenderedState:t},n.queue=i,n=hx.bind(null,It,i),i.dispatch=n,i=_p(!1),a=Lm.bind(null,It,!1,i.queue),i=gn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=PT.bind(null,It,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function z_(e){var t=Oe();return Ky(t,ue,e)}function Ky(e,t,n){if(t=Cm(e,t,Jy)[0],e=eu(os)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Fl(t)}catch(r){throw r===io?Ku:r}else i=t;t=Oe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(It.flags|=2048,Wr(9,{destroy:void 0},zT.bind(null,s,n),null)),[i,a,e]}function zT(e,t){e.action=t}function B_(e){var t=Oe(),n=ue;if(n!==null)return Ky(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Wr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=It.updateQueue,t===null&&(t=Qu(),It.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Qy(){return Oe().memoizedState}function nu(e,t,n,i){var s=gn();It.flags|=e,s.memoizedState=Wr(1|t,{destroy:void 0},n,i===void 0?null:i)}function $u(e,t,n,i){var s=Oe();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&Mm(i,ue.memoizedState.deps)?s.memoizedState=Wr(t,a,n,i):(It.flags|=e,s.memoizedState=Wr(1|t,a,n,i))}function F_(e,t){nu(8390656,8,e,t)}function Rm(e,t){$u(2048,8,e,t)}function BT(e){It.flags|=4;var t=It.updateQueue;if(t===null)t=Qu(),It.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function jy(e){var t=Oe().memoizedState;return BT({ref:t,nextImpl:e}),function(){if((Qt&2)!==0)throw Error(W(440));return t.impl.apply(void 0,arguments)}}function $y(e,t){return $u(4,2,e,t)}function tx(e,t){return $u(4,4,e,t)}function ex(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nx(e,t,n){n=n!=null?n.concat([e]):null,$u(4,4,ex.bind(null,t,e),n)}function Dm(){}function ix(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Mm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function sx(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Mm(t,i[1]))return i[0];if(i=e(),Pa){Os(!0);try{e()}finally{Os(!1)}}return n.memoizedState=[i,t],i}function Um(e,t,n){return n===void 0||(rs&1073741824)!==0&&(Wt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Kx(),It.lanes|=e,ta|=e,n)}function ax(e,t,n,i){return Wn(n,t)?n:js.current!==null?(e=Um(e,n,i),Wn(e,t)||(ze=!0),e):(rs&106)===0||(rs&1073741824)!==0&&(Wt&261930)===0?(ze=!0,e.memoizedState=n):(e=Kx(),It.lanes|=e,ta|=e,t)}function rx(e,t,n,i,s){var a=jt.p;jt.p=a!==0&&8>a?a:8;var r=Ct.T,o={};o.types=r!==null?r.types:null,Ct.T=o,Lm(e,!1,t,n);try{var l=s(),c=Ct.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=LT(l,i);ul(e,t,f,Xn(e))}else ul(e,t,i,Xn(e))}catch(d){ul(e,t,{then:function(){},status:"rejected",reason:d},Xn())}finally{jt.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ct.T=r}}function FT(){}function yp(e,t,n,i){if(e.tag!==5)throw Error(W(476));var s=ox(e).queue;rx(e,s,t,Aa,n===null?FT:function(){return lx(e),n(i)})}function ox(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Aa,baseState:Aa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:Aa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lx(e){var t=ox(e);t.next===null&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},Xn())}function Nm(){return $e(jr)}function cx(){return Oe().memoizedState}function ux(){return Oe().memoizedState}function HT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xn();e=Gs(n);var i=ks(t,e,n);i!==null&&(En(i,t,n),ol(i,t,n)),t={cache:gm()},e.payload=t;return}t=t.return}}function VT(e,t,n){var i=Xn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},th(e)?fx(t,n):(n=dm(e,t,n,i),n!==null&&(En(n,e,i),dx(n,t,i)))}function hx(e,t,n){var i=Xn();ul(e,t,n,i)}function ul(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(th(e))fx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Wn(o,r))return Zu(e,t,s,0),fe===null&&Yu(),!1}catch{}finally{}if(n=dm(e,t,s,i),n!==null)return En(n,e,i),dx(n,t,i),!0}return!1}function Lm(e,t,n,i){if(i={lane:2,revertLane:Xm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},th(e)){if(t)throw Error(W(479))}else t=dm(e,n,i,2),t!==null&&En(t,e,2)}function th(e){var t=e.alternate;return e===It||t!==null&&t===It}function fx(e,t){zr=Au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Qv(e,n)}}var Cu={readContext:$e,use:ju,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue,useEffectEvent:Ue},px={readContext:$e,use:ju,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:F_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nu(4194308,4,ex.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nu(4194308,4,e,t)},useInsertionEffect:function(e,t){nu(4,2,e,t)},useMemo:function(e,t){var n=gn();t=t===void 0?null:t;var i=e();if(Pa){Os(!0);try{e()}finally{Os(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=gn();if(n!==void 0){var s=n(t);if(Pa){Os(!0);try{n(t)}finally{Os(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=VT.bind(null,It,e),[i.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:function(e){e=_p(e);var t=e.queue,n=hx.bind(null,It,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dm,useDeferredValue:function(e,t){var n=gn();return Um(n,e,t)},useTransition:function(){var e=_p(!1);return e=rx.bind(null,It,e.queue,!0,!1),gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=It,s=gn();if(Vt){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),fe===null)throw Error(W(349));(Wt&127)!==0||Vy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,F_(ky.bind(null,i,a,e),[e]),i.flags|=2048,Wr(9,{destroy:void 0},Gy.bind(null,i,a,n,t),null),n},useId:function(){var e=gn(),t=fe.identifierPrefix;if(Vt){var n=zi,i=Pi;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=OT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Nm,useFormState:P_,useActionState:P_,useOptimistic:function(e){var t=gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Lm.bind(null,It,!0,n),n.dispatch=t,[e,t]},useMemoCache:wm,useCacheRefresh:function(){return gn().memoizedState=HT.bind(null,It)},useEffectEvent:function(e){var t=gn(),n={impl:e};return t.memoizedState=n,function(){if((Qt&2)!==0)throw Error(W(440));return n.impl.apply(void 0,arguments)}}},mx={readContext:$e,use:ju,useCallback:ix,useContext:$e,useEffect:Rm,useImperativeHandle:nx,useInsertionEffect:$y,useLayoutEffect:tx,useMemo:sx,useReducer:eu,useRef:Qy,useState:function(){return eu(os)},useDebugValue:Dm,useDeferredValue:function(e,t){var n=Oe();return ax(n,ue.memoizedState,e,t)},useTransition:function(){var e=eu(os)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Hy,useId:cx,useHostTransitionStatus:Nm,useFormState:z_,useActionState:z_,useOptimistic:function(e,t){var n=Oe();return qy(n,ue,e,t)},useMemoCache:wm,useCacheRefresh:ux,useEffectEvent:jy},GT={readContext:$e,use:ju,useCallback:ix,useContext:$e,useEffect:Rm,useImperativeHandle:nx,useInsertionEffect:$y,useLayoutEffect:tx,useMemo:sx,useReducer:Rd,useRef:Qy,useState:function(){return Rd(os)},useDebugValue:Dm,useDeferredValue:function(e,t){var n=Oe();return ue===null?Um(n,e,t):ax(n,ue.memoizedState,e,t)},useTransition:function(){var e=Rd(os)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Hy,useId:cx,useHostTransitionStatus:Nm,useFormState:B_,useActionState:B_,useOptimistic:function(e,t){var n=Oe();return ue!==null?qy(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wm,useCacheRefresh:ux,useEffectEvent:jy};function Dd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Xn(),s=Gs(i);s.payload=t,n!=null&&(s.callback=n),t=ks(e,s,i),t!==null&&(En(t,e,i),ol(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Xn(),s=Gs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ks(e,s,i),t!==null&&(En(t,e,i),ol(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xn(),i=Gs(n);i.tag=2,t!=null&&(i.callback=t),t=ks(e,i,n),t!==null&&(En(t,e,n),ol(t,e,n))}};function H_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!yl(n,i)||!yl(s,a):!0}function V_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&xp.enqueueReplaceState(t,t.state,null)}function za(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=de({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function gx(e){vu(e)}function _x(e){console.error(e)}function vx(e){vu(e)}function Ru(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function G_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Sp(e,t,n){return n=Gs(n),n.tag=3,n.payload={element:null},n.callback=function(){Ru(e,t)},n}function yx(e){return e=Gs(e),e.tag=3,e}function xx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){G_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){G_(t,n,i),typeof s!="function"&&(qs===null?qs=new Set([this]):qs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function kT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Na(t,n,s,!0),n=sn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return ln===null?zu():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===bu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),zd(e,i,s)),!1;case 22:return n.flags|=65536,i===bu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),zd(e,i,s)),!1}throw Error(W(435,n.tag))}return zd(e,i,s),zu(),!1}if(Vt)return t=sn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==cp&&(e=Error(W(422),{cause:i}),Sl(oi(e,n)))):(i!==cp&&(t=Error(W(423),{cause:i}),Sl(oi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=oi(i,n),s=Sp(e.stateNode,i,s),Cd(e,s),Ne!==4&&(Ne=2)),!1;var a=Error(W(520),{cause:i});if(a=oi(a,n),pl===null?pl=[a]:pl.push(a),Ne!==4&&(Ne=2),t===null)return!0;i=oi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Sp(n.stateNode,i,e),Cd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(qs===null||!qs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=yx(s),xx(s,e,n,i),Cd(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Om=Error(W(461)),ze=!1;function Fe(e,t,n,i){t.child=e===null?Oy(t,null,n,i):Ia(t,e.child,n,i)}function k_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return La(t),i=bm(e,t,n,r,a,s),o=Tm(),e!==null&&!ze?(Em(e,t,s),ls(e,t,s)):(Vt&&o&&Ju(t),t.flags|=1,Fe(e,t,i,s),t.child)}function X_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!pm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Sx(e,t,a,i,s)):(e=jc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:yl,n(r,i)&&e.ref===t.ref)return ls(e,t,s)}return t.flags|=1,e=ns(a,i),e.ref=t.ref,e.return=t,t.child=e}function Sx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(yl(a,i)&&e.ref===t.ref)if(ze=!1,t.pendingProps=i=a,Pm(e,s))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,ls(e,t,s)}return Mp(e,t,n,i,s)}function Mx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return W_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&tu(t,a!==null?a.cachePool:null),a!==null?L_(t,a):mp(),zy(t);else return i=t.lanes=536870912,W_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(tu(t,a.cachePool),L_(t,a),Ws(),t.memoizedState=null):(e!==null&&tu(t,null),mp(),Ws());return Fe(e,t,s,n),t.child}function hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function W_(e,t,n,i,s){var a=_m();return a=a===null?null:{parent:Pe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&tu(t,null),mp(),zy(t),e!==null&&Na(e,t,i,!0),t.childLanes=s,null}function iu(e,t){return t=eh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function q_(e,t,n){return Ia(t,e.child,null,n),e=iu(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function XT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Vt){if(i.mode==="hidden")return e=iu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hl(null,e);if(gp(t),(e=_e)?(e=MS(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ks!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},n=wy(e),n.return=t,t.child=n,Je=t,_e=null)):e=null,e===null)throw Qs(t);return t.lanes=536870912,null}return iu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(gp(t),s)if(t.flags&256)t.flags&=-257,t=q_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(W(558));else if(ze||Na(e,t,n,!1),s=(n&e.childLanes)!==0,ze||s){if(js.current===null){if(i=fe,i!==null&&(r=jv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ga(e,r),En(i,e,r),Om;zu()}t=q_(e,t,n)}else e=a.treeContext,_e=ci(r.nextSibling),Je=t,Vt=!0,Vs=null,li=!1,e!==null&&Ry(t,e),t=iu(t,i),t.flags|=134221824;return t}return e=ns(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _r(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(W(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Mp(e,t,n,i,s){return La(t),n=bm(e,t,n,i,void 0,s),i=Tm(),e!==null&&!ze?(Em(e,t,s),ls(e,t,s)):(Vt&&i&&Ju(t),t.flags|=1,Fe(e,t,n,s),t.child)}function Y_(e,t,n,i,s,a){return La(t),t.updateQueue=null,n=Fy(t,i,n,s),By(e),i=Tm(),e!==null&&!ze?(Em(e,t,a),ls(e,t,a)):(Vt&&i&&Ju(t),t.flags|=1,Fe(e,t,n,a),t.child)}function Z_(e,t,n,i,s){if(La(t),t.stateNode===null){var a=Cr,r=n.contextType;typeof r=="object"&&r!==null&&(a=$e(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},ym(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?$e(r):Cr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Dd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&xp.enqueueReplaceState(a,a.state,null),cl(t,i,a,s),ll(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=za(n,o);a.props=l;var c=a.context,f=n.contextType;r=Cr,typeof f=="object"&&f!==null&&(r=$e(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&V_(t,a,i,r),Ns=!1;var h=t.memoizedState;a.state=h,cl(t,i,a,s),ll(),c=t.memoizedState,o||h!==c||Ns?(typeof d=="function"&&(Dd(t,n,d,i),c=t.memoizedState),(l=Ns||H_(t,n,l,i,h,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,dp(e,t),r=t.memoizedProps,f=za(n,r),a.props=f,d=t.pendingProps,h=a.context,c=n.contextType,l=Cr,typeof c=="object"&&c!==null&&(l=$e(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&V_(t,a,i,l),Ns=!1,h=t.memoizedState,a.state=h,cl(t,i,a,s),ll();var p=t.memoizedState;r!==d||h!==p||Ns||e!==null&&e.dependencies!==null&&Mu(e.dependencies)?(typeof o=="function"&&(Dd(t,n,o,i),p=t.memoizedState),(f=Ns||H_(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&Mu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,_r(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Ia(t,e.child,null,s),t.child=Ia(t,null,n,s)):Fe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ls(e,t,s),e}function J_(e,t,n,i){return Ua(),t.flags|=256,Fe(e,t,n,i),t.child}var bp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tp(e){return{baseLanes:e,cachePool:Uy()}}function Ep(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Hn),e}function bx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Vt){if(s?Xs(t):Ws(),(e=_e)?(e=MS(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ks!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},n=wy(e),n.return=t,t.child=n,Je=t,_e=null)):e=null,e===null)throw Qs(t);return Zm(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Ws(),s=t.mode,a=eh({mode:"hidden",children:a},s),i=wa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Tp(n),i.childLanes=Ep(e,r,n),t.memoizedState=bp,hl(null,i)):(Xs(t),Im(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return WT(e,t,a,r,i,l,o,n)}return s?(Ws(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ns(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ns(l,s):(s=wa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,hl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Tp(n):(a=s.cachePool,a!==null?(o=Pe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Uy(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Ep(e,r,n),t.memoizedState=bp,hl(e.child,i)):(Xs(t),n=e.child,e=n.sibling,n=ns(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Im(e,t){return t=eh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function eh(e,t){return e=Tn(22,e,null,t),e.lanes=0,e}function Bc(e,t,n){return Ia(t,e.child,null,n),e=Im(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function WT(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Xs(t),t.flags&=-257,Bc(e,t,o)):t.memoizedState!==null?(Ws(),t.child=e.child,t.flags|=128,null):(Ws(),a=s.fallback,r=t.mode,s=eh({mode:"visible",children:s.children},r),a=wa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Ia(t,e.child,null,o),s=t.child,s.memoizedState=Tp(o),s.childLanes=Ep(e,i,o),t.memoizedState=bp,hl(null,s));if(Xs(t),Zm(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(W(419)),s.stack="",s.digest=i,Sl({value:s,source:null,stack:null})),Bc(e,t,o)}if(ze||Na(e,t,o,!1),i=(o&e.childLanes)!==0,ze||i){if(js.current!==null)return Bc(e,t,o);if(i=fe,i!==null&&(s=jv(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Ga(e,s),En(i,e,s),Om;return Kp(a)||zu(),Bc(e,t,o)}return Kp(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,_e=ci(a.nextSibling),Je=t,Vt=!0,Vs=null,li=!1,e!==null&&Ry(t,e),t=Im(t,s.children),t.flags|=134221824,t)}function K_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),$c(e.return,t,n)}function Q_(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Eu(n)===null&&(t=e),e=e.sibling}return t}function Fc(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Ud(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ap(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=en.current;if(t.flags&128)return bl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,bl(t,r),s==="backwards"&&e!==null?(Ud(e),Fe(e,t,i,n),Ud(e)):Fe(e,t,i,n),i=Vt?xl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K_(e,n,t);else if(e.tag===19)K_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Q_(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Ud(t)),Fc(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Eu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Fc(t,!0,n,null,a,i);break;case"together":Fc(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Q_(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Fc(t,!1,s,n,a,i)}return t.child}function j_(e,t,n){var i=t.pendingProps;return Ps(t,t.type,i.value),Fe(e,t,i.children,n),t.child}function ls(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=ns(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ns(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mu(e)))}function qT(e,t,n){switch(t.tag){case 3:pu(t,t.stateNode.containerInfo),Ps(t,Pe,e.memoizedState.cache),Ua();break;case 27:case 5:$d(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:Ps(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,gp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Xs(t),t.flags|=128,null;i=Na(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?bx(e,t,n):(Xs(t),e=ls(e,t,n),e!==null?e.sibling:null)}Xs(t);break;case 19:if(t.flags&128)return Ap(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Na(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Ap(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),bl(t,en.current),i)break;return null;case 22:return t.lanes=0,Mx(e,t,n,t.pendingProps);case 24:Ps(t,Pe,e.memoizedState.cache)}return ls(e,t,n)}function Tx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!Pm(e,n)&&(t.flags&128)===0)return ze=!1,qT(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,Vt&&(t.flags&1048576)!==0&&Cy(t,xl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e=="function")pm(e)?(i=za(e,i),t.tag=1,t=Z_(null,t,e,i,n)):(t.tag=0,t=Mp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===em){t.tag=11,t=k_(null,t,e,i,n);break t}else if(s===nm){t.tag=14,t=X_(null,t,e,i,n);break t}else if(s===Oi){t.tag=10,t.type=e,t=j_(null,t,n);break t}}throw t=Qd(e)||e,Error(W(306,t,""))}}return t;case 0:return Mp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=za(i,t.pendingProps),Z_(e,t,i,s,n);case 3:t:{if(pu(t,t.stateNode.containerInfo),e===null)throw Error(W(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,dp(e,t),cl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ps(t,Pe,i),i!==a.cache&&hp(t,[Pe],n,!0),ll(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=J_(e,t,i,n);break t}else if(i!==s){s=oi(Error(W(424)),t),Sl(s),t=J_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=ci(e.firstChild),Je=t,Vt=!0,Vs=null,li=!0,n=Oy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ua(),i===s){t=ls(e,t,n);break t}Fe(e,t,i,n)}t=t.child}return t;case 26:return _r(e,t),e===null?(n=Ev(t.type,null,t.pendingProps,null))?t.memoizedState=n:Vt||(t.stateNode=dS(t.type,t.pendingProps,Hs.current,t)):t.memoizedState=Ev(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $d(t),e===null&&Vt&&(i=t.stateNode=bS(t.type,t.pendingProps,Hs.current),Je=t,li=!0,s=_e,na(t.type)?(Qp=s,_e=ci(i.firstChild)):_e=s),Fe(e,t,t.pendingProps.children,n),_r(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Vt&&((s=i=_e)&&(i=BE(i,t.type,t.pendingProps,li),i!==null?(t.stateNode=i,Je=t,_e=ci(i.firstChild),li=!1,s=!0):s=!1),s||Qs(t)),$d(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Yp(s,a)?i=null:r!==null&&Yp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=bm(e,t,IT,null,null,n),jr._currentValue=s),_r(e,t),Fe(e,t,i,n),t.child;case 6:return e===null&&Vt&&((e=n=_e)&&(n=FE(n,t.pendingProps,li),n!==null?(t.stateNode=n,Je=t,_e=null,e=!0):e=!1),e||Qs(t)),null;case 13:return bx(e,t,n);case 4:return pu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ia(t,null,i,n):Fe(e,t,i,n),t.child;case 11:return k_(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,_r(e,t),Fe(e,t,i,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:return j_(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,La(t),s=$e(s),i=i(s),t.flags|=1,Fe(e,t,i,n),t.child;case 14:return X_(e,t,t.type,t.pendingProps,n);case 15:return Sx(e,t,t.type,t.pendingProps,n);case 19:return Ap(e,t,n);case 31:return XT(e,t,n);case 22:return Mx(e,t,n,t.pendingProps);case 24:return La(t),i=$e(Pe),e===null?(s=_m(),s===null&&(s=fe,a=gm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},ym(t),Ps(t,Pe,s)):((e.lanes&n)!==0&&(dp(e,t),cl(t,null,null,n),ll()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ps(t,Pe,i)):(i=a.cache,Ps(t,Pe,i),i!==s.cache&&hp(t,[Pe],n,!0))),Fe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Vt&&Ju(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:_r(e,t),Fe(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(W(156,t.tag))}function $i(e){e.flags|=4}function Nd(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Cv(t,i):Cv(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if($x())e.flags|=8192;else throw Ra=bu,vm}else e.flags&=-16777217}function $_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wS(t))if($x())e.flags|=8192;else throw Ra=bu,vm}function Hc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jv():536870912,e.lanes|=t,qr|=t)}function Zo(e,t){if(!Vt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function YT(e,t,n){var i=t.pendingProps;switch(mm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),is(Pe),Gr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mr(t)?$i(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wd())),ge(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?($i(t),a!==null?(ge(t),$_(t,a)):(ge(t),Nd(t,s,null,i,n))):a?a!==e.memoizedState?($i(t),ge(t),$_(t,a)):(ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&$i(t),ge(t),Nd(t,s,e,i,n)),null;case 27:if(mu(t),n=Hs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(W(166));return ge(t),t.subtreeFlags&=-33554433,null}e=Bi.current,mr(t)?A_(t,e):(e=bS(s,i,n),t.stateNode=e,$i(t))}return ge(t),t.subtreeFlags&=-33554433,null;case 5:if(mu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(W(166));return ge(t),t.subtreeFlags&=-33554433,null}if(a=Bi.current,mr(t))A_(t,a);else{var r=wl(Hs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[je]=t,a[wn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(nn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&$i(t)}}return ge(t),t.subtreeFlags&=-33554433,Nd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(W(166));if(e=Hs.current,mr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Je,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||hS(e.nodeValue,n)),e||Qs(t,!0)}else e=wl(e).createTextNode(i),e[je]=t,t.stateNode=e}return ge(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=mr(t),n!==null){if(e===null){if(!i)throw Error(W(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(557));e[je]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),e=!1}else n=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if((t.flags&128)!==0)throw Error(W(558))}return ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=mr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(W(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[je]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else s=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Hc(t,t.updateQueue),ge(t),null);case 4:return Gr(),e===null&&Wm(t.stateNode.containerInfo),t.flags|=67108864,ge(t),null;case 10:return is(t.type),ge(t),null;case 19:if(Sm(t),i=t.memoizedState,i===null)return ge(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Zo(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Eu(e),a!==null){for(t.flags|=128,Zo(i,!1),e=a.updateQueue,t.updateQueue=e,Hc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ay(n,e),n=n.sibling;return bl(t,en.current&1|2),Vt&&ts(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Vn()>Iu&&(t.flags|=128,s=!0,Zo(i,!1),t.lanes=4194304)}else{if(!s)if(e=Eu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Hc(t,e),Zo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Vt)return ge(t),null}else 2*Vn()-i.renderingStartTime>Iu&&n!==536870912&&(t.flags|=128,s=!0,Zo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vn(),e.sibling=null,a=en.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Vt?bl(t,a):(n=a,ve(sn,t),ve(en,n),ln===null&&(ln=t)),Vt&&ts(t,i.treeForkCount),e}return ge(t),null;case 22:case 23:return Bn(t),xm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),n=t.updateQueue,n!==null&&Hc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),is(Pe),ge(t),null;case 25:return null;case 30:return t.flags|=33554432,ge(t),null}throw Error(W(156,t.tag))}function ZT(e,t){switch(mm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return is(Pe),Gr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mu(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(W(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Sm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Gr(),null;case 10:return is(t.type),null;case 22:case 23:return Bn(t),xm(),e!==null&&tn(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return is(Pe),null;case 25:return null;default:return null}}function Ex(e,t){switch(mm(t),t.tag){case 3:is(Pe),Gr();break;case 26:case 27:case 5:mu(t);break;case 4:Gr();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:Sm(t);break;case 10:is(t.type);break;case 22:case 23:Bn(t),xm(),e!==null&&tn(Ca);break;case 24:is(Pe)}}function Hl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){re(t,t.return,o)}}function $s(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){re(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){re(t,t.return,f)}}function Ax(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Py(t,n)}catch(i){re(e,e.return,i)}}}function wx(e,t,n){n.props=za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){re(e,t,i)}}function Ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=as(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=_S(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new qn(e);An(e.child,!1,PE,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){re(e,t,o)}}function Qe(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){re(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){re(e,t,s)}else n.current=null}function Du(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)SS(e.stateNode,t[n])}function tv(e){for(var t=e.return;t!==null&&(Bm(t)&&SS(e.stateNode,t.stateNode),!zm(t));)t=t.return}function fl(e){for(var t=e.return;t!==null&&(Bm(t)&&zE(e.stateNode,t.stateNode),!zm(t));)t=t.return}function zm(e){return e.tag===5||e.tag===3||e.tag===27}function Bm(e){return e&&e.tag===7&&e.stateNode!==null}function wp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){re(e,e.return,s)}}function Ld(e,t,n){try{var i=e.stateNode;vE(i,e.type,n,t),i[wn]=t}catch(s){re(e,e.return,s)}}function Cx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Od(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cp(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii)),Du(e,i),Kt=!0;else if(s!==4&&(s===27&&(Du(e,i),i=null,na(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Cp(e,t,n,i),e=e.sibling;e!==null;)Cp(e,t,n,i),e=e.sibling}function Uu(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Du(e,i),Kt=!0;else if(s!==4&&(s===27&&(Du(e,i),i=null,na(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Uu(e,t,n,i),e=e.sibling;e!==null;)Uu(e,t,n,i),e=e.sibling}function Rx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);nn(t,i,n),t[je]=e,t[wn]=n}catch(a){re(e,e.return,a)}}var Nu=!1,Fn=null;function ev(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Nu=!0)}var Li=null;function nv(){var e=Li;return Li=null,e}var bn=0;function so(e,t,n,i,s){return bn=0,Dx(e.child,t,n,i,s)}function Dx(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Zp(r);i.push(o),o.view&&(a=!0)}else a||Zp(r).view&&(a=!0);Nu=!0,pS(r,bn===0?t:t+"_"+bn,n),bn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||Dx(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Hi(e,t){for(;e!==null;)e.tag===5?mS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Hi(e.child,t)),e=e.sibling}function su(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(su(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(W(544));var n=t.name;t=hs(t.default,t.share),t!=="none"&&(so(e,n,t,null,!1)||Hi(e.child,!1))}e=e.sibling}}function Rp(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=as(i,n),a=hs(i.default,n.paired?i.share:i.enter);a!=="none"?so(e,s,a,null,!1)?(su(e),n.paired||t||Yr(e,i.onEnter)):Hi(e.child,!1):su(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Rp(e,t),e=e.sibling;else su(e)}function Dp(e){if(Fn!==null&&Fn.size!==0){var t=Fn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=hs(n.default,n.share);if(a!=="none"&&(so(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Yr(e,n.onShare)):Hi(e.child,!1)),t.delete(i),t.size===0)break}}}Dp(e)}e=e.sibling}}}function Up(e){if(e.tag===30){var t=e.memoizedProps,n=as(t,e.stateNode),i=Fn!==null?Fn.get(n):void 0,s=hs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(so(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Fn.delete(n),Yr(e,t.onShare)):Yr(e,t.onExit):Hi(e.child,!1)),Fn!==null&&Dp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Up(e),e=e.sibling;else Fn!==null&&Dp(e)}function Ux(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=as(t,e.stateNode);t=hs(t.default,t.update),e.flags&=-5,t!=="none"&&so(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Ux(e);e=e.sibling}}function Np(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Hi(e.child,!1))}Np(e)}e=e.sibling}}function au(e){if(e.tag===30)e.stateNode.paired=null,Hi(e.child,!1),Np(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)au(e),e=e.sibling;else Np(e)}function Nx(e){for(e=e.child;e!==null;)e.tag===30?Hi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Nx(e),e=e.sibling}function Fm(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&bn<a.length){var c=a[bn],f=Zp(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var h=f.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&pS(l,bn===0?n:n+"_"+bn,s),o&&(e.flags&4)!==0||(Li===null&&(Li=[]),Li.push(l,bn===0?i:i+"_"+bn,t.memoizedProps)),bn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Fm(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function Lx(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=as(n,i),a=hs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(TE)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;bn=0,s=Fm(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Yr(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&Lx(e,t);e=e.sibling}}var qe=!1,ne=!1,Ri=!1,Id=!1,iv=typeof WeakSet=="function"?WeakSet:Set,Ye=null,Di=!1,nl=!1,Lu=!1,Lp=!1;function JT(e,t,n){if(e=e.containerInfo,Wp=$r,e=vy(e),hm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,h=e,p=null;e:for(;;){for(var _;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===e)break e;if(p===i&&++f===a&&(l=o),p===r&&++d===s&&(c=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(qp={focusedElem:e,selectionRange:i},$r=!1,n=(n&335544064)===n,Ye=t,t=n?9270:1024;Ye!==null;){if(e=Ye,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Up(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&ev(e),Vc(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Up(i),Vc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&ev(e),Vc(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Ye=i):(n&&Ux(e),Vc(n))}}Fn=null}function Vc(e){for(;Ye!==null;){var t=Ye,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=za(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){re(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Jp(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Jp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=as(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=hs(s.default,s.update),s!=="none"&&so(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(W(163))}if(i=t.sibling,i!==null){i.return=t.return,Ye=i;break}Ye=t.return}}function Ox(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n),i&4&&Hl(5,n);break;case 1:if(Ui(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){re(n,n.return,r)}else{var s=za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){re(n,n.return,r)}}i&64&&Ax(n),i&512&&Ni(n,n.return);break;case 3:if(Ui(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Py(e,t)}catch(r){re(n,n.return,r)}}break;case 27:t===null&&i&4&&Rx(n);case 26:case 5:Ui(e,n),t===null&&i&4&&wp(n),i&512&&Ni(n,n.return);break;case 12:Ui(e,n);break;case 31:Ui(e,n),i&4&&Bx(e,n);break;case 13:Ui(e,n),i&4&&Fx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=oE.bind(null,n),HE(e,n))));break;case 22:if(i=n.memoizedState!==null||qe,!i){var a=t!==null&&t.memoizedState!==null||ne;t=qe,s=ne,qe=i,(ne=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),gi(e,n,i)):Ui(e,n),qe=t,ne=s}break;case 30:Ui(e,n),i&512&&Ni(n,n.return);break;case 7:i&512&&Ni(n,n.return);default:Ui(e,n)}}function Op(e,t){for(e=e.child;e!==null;)Ix(e,t),e=e.sibling}function Ix(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){re(e,e.return,l)}Ip(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Kt=!0}catch(l){re(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?yv(o,!0):yv(e.stateNode,!1)}catch(l){re(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Op(e,t);break;default:Op(e,t)}}function Ip(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:Ix(n,i);break t;case 22:n.memoizedState===null&&Ip(n,i);break t;default:Ip(n,i)}}e=e.sibling}}function Px(e){var t=e.alternate;t!==null&&(e.alternate=null,Px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ku(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,Sn=!1;function mi(e,t,n){for(n=n.child;n!==null;)zx(e,t,n),n=n.sibling}function zx(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 26:ne||Qe(n,t),mi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ne&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ne||Qe(n,t),fl(n);var i=Ee,s=Sn;na(n.type)&&(Ee=n.stateNode,Sn=!1),mi(e,t,n),TS(n.stateNode,n.type,n.memoizedProps),Ee=i,Sn=s;break;case 5:ne||Qe(n,t),fl(n);case 6:if(n.tag===6&&fl(n),i=Ee,s=Sn,Ee=null,mi(e,t,n),Ee=i,Sn=s,Ee!==null)if(Sn)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode),Kt=!0}catch(a){re(n,t,a)}else try{Ee.removeChild(n.stateNode),Kt=!0}catch(a){re(n,t,a)}break;case 18:Ee!==null&&(Sn?(e=Ee,vv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),to(e)):vv(Ee,n.stateNode));break;case 4:i=Ee,s=Sn,Ee=n.stateNode.containerInfo,Sn=!0,mi(e,t,n),Ee=i,Sn=s;break;case 0:case 11:case 14:case 15:$s(2,n,t),ne||$s(4,n,t),mi(e,t,n);break;case 1:ne||(Qe(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&wx(n,t,i)),mi(e,t,n);break;case 21:mi(e,t,n);break;case 22:ne=(i=ne)||n.memoizedState!==null,mi(e,t,n),ne=i;break;case 30:Qe(n,t),mi(e,t,n);break;case 7:ne||Qe(n,t),mi(e,t,n);break;default:mi(e,t,n)}}function Bx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(n){re(t,t.return,n)}}}function Fx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(n){re(t,t.return,n)}}function KT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new iv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new iv),t;default:throw Error(W(435,e.tag))}}function Gc(e,t){var n=KT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=lE.bind(null,e,i);i.then(s,s)}})}function pn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(na(l.type)){Ee=l.stateNode,Sn=!1;break t}break;case 5:Ee=l.stateNode,Sn=!1;break t;case 3:case 4:Ee=l.stateNode.containerInfo,Sn=!0;break t}l=l.return}if(Ee===null)throw Error(W(160));zx(r,o,a),Ee=null,Sn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hx(t,e,n),t=t.sibling}var _i=null;function Hx(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}pn(t,e,n),mn(e),s&4&&($s(3,e,e.return),Hl(3,e),$s(5,e,e.return));break;case 1:pn(t,e,n),mn(e),s&512&&(ne||i===null||Qe(i,i.return)),s&64&&qe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=_i,pn(t,e,n),mn(e),s&512&&(ne||i===null||Qe(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(qe)e.stateNode=dS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Pl]||i[je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),nn(i,t,n),i[je]=e,Ze(i),t=i;break t;case"link":if(a=wv("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),nn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=wv("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),nn(i,t,n),s.head.appendChild(i);break;default:throw Error(W(468,t))}i[je]=e,Ze(i),t=i}e.stateNode=t}else qe||jp(a,e.type,e.stateNode);else e.stateNode=Av(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ne||t.parentNode.removeChild(t)):s.count--,n===null?qe||jp(a,e.type,e.stateNode):Av(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ld(e,e.memoizedProps,i.memoizedProps);break;case 27:pn(t,e,n),mn(e),s&512&&(ne||i===null||Qe(i,i.return)),i!==null&&s&4&&Ld(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Ri,Ri=!1,pn(t,e,n),Ri=a,mn(e),s&512&&(ne||i===null||Qe(i,i.return)),e.flags&32){t=e.stateNode;try{Xr(t,""),Kt=!0}catch(f){re(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Ld(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Id=!0);break;case 6:if(pn(t,e,n),mn(e),s&4){if(e.stateNode===null)throw Error(W(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Kt=!0}catch(f){re(e,e.return,f)}}break;case 3:if(Kt=!1,cu=null,a=_i,_i=Cl(t.containerInfo),pn(t,e,n),_i=a,mn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(f){re(e,e.return,f)}Id&&(Id=!1,Vx(e)),Kt=!1;break;case 4:s=Ri,Ri=qe,i=c_(),a=_i,_i=Cl(e.stateNode.containerInfo),pn(t,e,n),mn(e),_i=a,Kt&&nl&&(Lu=!0),Kt=i,Ri=s;break;case 12:pn(t,e,n),mn(e);break;case 31:pn(t,e,n),mn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Gc(e,t)));break;case 13:pn(t,e,n),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(nh=Vn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Gc(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=qe,l=ne,c=Ri;qe=o||a,Ri=c||a,ne=l||r,pn(t,e,n),ne=l,Ri=c,qe=o,mn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||qe||ne||(t=r||ne,n=qe,i=ne,qe=a||qe,ne=t,Ds(e,2),qe=n,ne=i),!a&&Ri||Op(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Gc(e,n))));break;case 19:pn(t,e,n),mn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Gc(e,t)));break;case 30:s&512&&(ne||i===null||Qe(i,i.return)),s=c_(),a=nl,r=(n&335544064)===n,o=e.memoizedProps,nl=r&&hs(o.default,o.update)!=="none",pn(t,e,n),mn(e),r&&i!==null&&Kt&&(e.flags|=4),nl=a,Kt=s;break;case 21:break;case 7:s&512&&(ne||i===null||Qe(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:pn(t,e,n),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Cx(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Bm(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(zm(s))break;s=s.return}var r=i;if(n==null)throw Error(W(160));switch(n.tag){case 27:var o=n.stateNode,l=Od(e);Uu(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Xr(c,""),n.flags&=-33);var f=Od(e);Uu(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=Od(e);Cp(e,h,d,r);break;default:throw Error(W(161))}}catch(p){re(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vx(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,$r=!0,t.reset(),$r=!1),e=e.sibling}}function gr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Gx(t,e),t=t.sibling;else Lx(t,!1)}function Gx(e,t){var n=e.alternate;if(n===null)Rp(e,!1);else switch(e.tag){case 3:if(Lp=Di=!1,nv(),gr(t,e),!Di&&!Lu){if(e=Li,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];mS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Lp=!0}Li=null;break;case 5:gr(t,e);break;case 4:i=Di,Di=!1,gr(t,e),Di&&(Lu=!0),Di=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Rp(e,!1):gr(t,e));break;case 30:i=Di,s=nv(),Di=!1,gr(t,e),Di&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=as(a,r),r=as(n.memoizedProps,r);var o=hs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,bn=0,t=Fm(e,n,t,r,o,a,!0),bn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Yr(e,e.memoizedProps.onUpdate),Li=s):s!==null&&(s.push.apply(s,Li),Li=s),Di=(e.flags&32)!==0?!0:i;break;default:gr(t,e)}}function Ui(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ox(e,t.alternate,t),t=t.sibling}function Ds(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:$s(4,n,n.return),Ds(n,i);break;case 1:Qe(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&wx(n,n.return,s),Ds(n,i);break;case 27:(i&2)!==0&&TS(n.stateNode,n.type,n.memoizedProps);case 5:Qe(n,n.return),n.tag!==5&&n.tag!==27||fl(n),Ds(n,i);break;case 6:fl(n);break;case 26:Qe(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ne||s.parentNode.removeChild(s),Ds(n,i);break;case 22:n.memoizedState===null&&Ds(n,i);break;case 30:Qe(n,n.return),Ds(n,i);break;case 7:Qe(n,n.return);default:Ds(n,i)}e=e.sibling}}function gi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:gi(s,a,n),Hl(4,a);break;case 1:if(gi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){re(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Iy(c[s],l)}catch(f){re(i,i.return,f)}}o&&r&64&&Ax(a),Ni(a,a.return);break;case 27:(n&2)!==0&&Rx(a);case 5:a.tag!==5&&a.tag!==27||tv(a),gi(s,a,n),o&&i===null&&r&4&&wp(a),Ni(a,a.return);break;case 6:tv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||qe||jp(Cl(l.ownerDocument),a.type,l),gi(s,a,n),o&&i===null&&r&4&&wp(a),Ni(a,a.return);break;case 12:gi(s,a,n);break;case 31:gi(s,a,n),o&&r&4&&Bx(s,a);break;case 13:gi(s,a,n),o&&r&4&&Fx(s,a);break;case 22:a.memoizedState===null&&gi(s,a,n),Ni(a,a.return);break;case 30:gi(s,a,n),Ni(a,a.return);break;case 7:Ni(a,a.return);default:gi(s,a,n)}t=t.sibling}}function Hm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bl(n))}function Vm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function ni(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)kx(e,t,n,i),t=t.sibling;else s&&Nx(t)}function kx(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&au(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ni(e,t,n,i),a&2048&&Hl(9,t);break;case 1:ni(e,t,n,i);break;case 3:ni(e,t,n,i),s&&Lp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Bl(a)));break;case 12:if(a&2048){ni(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){re(t,t.return,c)}}else ni(e,t,n,i);break;case 31:ni(e,t,n,i);break;case 13:ni(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&au(o),r._visibility&2?ni(e,t,n,i):dl(e,t)):(s&&o!==null&&o.memoizedState!==null&&au(t),r._visibility&2?ni(e,t,n,i):(r._visibility|=2,vr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Hm(o,t);break;case 24:ni(e,t,n,i),a&2048&&Vm(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Hi(a.child,!0),Hi(t.child,!0))),ni(e,t,n,i);break;default:ni(e,t,n,i)}}function vr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:vr(a,r,o,l,s),Hl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?vr(a,r,o,l,s):dl(a,r):(f._visibility|=2,vr(a,r,o,l,s)),s&&c&2048&&Hm(r.alternate,r);break;case 24:vr(a,r,o,l,s),s&&c&2048&&Vm(r.alternate,r);break;default:vr(a,r,o,l,s)}t=t.sibling}}function dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:dl(n,i),s&2048&&Hm(i.alternate,i);break;case 24:dl(n,i),s&2048&&Vm(i.alternate,i);break;default:dl(n,i)}t=t.sibling}}var ba=8192;function xa(e,t,n){if(e.subtreeFlags&ba)for(e=e.child;e!==null;)Xx(e,t,n),e=e.sibling}function Xx(e,t,n){switch(e.tag){case 26:xa(e,t,n),e.flags&ba&&(e.memoizedState!==null?tA(n,_i,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Rv(n,e)));break;case 5:xa(e,t,n),e.flags&ba&&(e=e.stateNode,(t&335544128)===t&&Rv(n,e));break;case 3:case 4:var i=_i;_i=Cl(e.stateNode.containerInfo),xa(e,t,n),_i=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ba,ba=16777216,xa(e,t,n),ba=i):xa(e,t,n));break;case 30:if((e.flags&ba)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Fn===null&&(Fn=new Map),Fn.set(i,s)}xa(e,t,n);break;default:xa(e,t,n)}}function Wx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ye=i,Yx(i,e)}Wx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qx(e),e=e.sibling}function qx(e){switch(e.tag){case 0:case 11:case 15:Jo(e),e.flags&2048&&$s(9,e,e.return);break;case 3:Jo(e);break;case 12:Jo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ru(e)):Jo(e);break;default:Jo(e)}}function ru(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ye=i,Yx(i,e)}Wx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$s(8,t,t.return),ru(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ru(t));break;default:ru(t)}e=e.sibling}}function Yx(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:$s(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Bl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ye=i;else t:for(n=e;Ye!==null;){i=Ye;var s=i.sibling,a=i.return;if(Px(i),i===n){Ye=null;break t}if(s!==null){s.return=a,Ye=s;break t}Ye=a}}}var QT={getCacheForType:function(e){var t=$e(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Pe).controller.signal}},jT=typeof WeakMap=="function"?WeakMap:Map,Qt=0,fe=null,kt=null,Wt=0,se=0,Pn=null,zs=!1,ao=!1,Gm=!1,cs=0,Ne=0,ta=0,Da=0,Ou=0,Hn=0,qr=0,pl=null,Mn=null,Pp=!1,nh=0,Zx=0,Iu=1/0,Pu=null,qs=null,Re=0,yi=null,Ba=null,Fi=0,zp=0,Bp=null,Jx=null,Fr=null,Hr=null,Vr=null,ml=0,ou=null;function Xn(){return(Qt&2)!==0&&Wt!==0?Wt&-Wt:Ct.T!==null?Xm():$v()}function Kx(){if(Hn===0)if((Wt&536870912)===0||Vt){var e=Rc;Rc<<=1,(Rc&3932160)===0&&(Rc=262144),Hn=e}else Hn=536870912;return e=sn.current,e!==null&&(e.flags|=32),Hn}function Yr(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=_S(as(e.memoizedProps,n))),Hr===null&&(Hr=[]),Hr.push(t.bind(null,i))}}function En(e,t,n){(e===fe&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),Bs(e,Wt,Hn,!1)),Il(e,n),((Qt&2)===0||e!==fe)&&(e===fe&&((Qt&2)===0&&(Da|=n),Ne===4&&Bs(e,Wt,Hn,!1)),Gi(e))}function Qx(e,t,n){if((Qt&6)!==0)throw Error(W(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ol(e,t),s=i?eE(e,t):Pd(e,t,!0),a=i;do{if(s===0){ao&&!i&&Bs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!$T(n)){s=Pd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=pl;var l=o.current.memoizedState.isDehydrated;if(l&&(Zr(o,r).flags|=256),r=Pd(o,r,!1),r!==2&&r!==6){if(Gm&&!l){o.errorRecoveryDisabledLanes|=a,Da|=a,s=4;break t}a=Mn,Mn=s,a!==null&&(Mn===null?Mn=a:Mn.push.apply(Mn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Zr(e,0),Bs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(W(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Bs(i,t,Hn,!zs);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(W(329))}if((t&62914560)===t&&(s=nh+300-Vn(),10<s)){if(Bs(i,t,Hn,!zs),Gu(i,0,!0)!==0)break t;Fi=t,i.timeoutHandle=qm(sv.bind(null,i,n,Mn,Pu,Pp,t,Hn,Da,qr,zs,a,"Throttled",-0,0),s);break t}sv(i,n,Mn,Pu,Pp,t,Hn,Da,qr,zs,a,null,-0,0)}}break}while(!0);Gi(e)}function sv(e,t,n,i,s,a,r,o,l,c,f,d,h,p){e.timeoutHandle=-1;var _=t.subtreeFlags,S=(a&335544064)===a;if(d=null,(S||_&8192||(_&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Fn=null,Xx(t,a,d),S&&(_=d,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(_.count++,_.waitingForViewTransition=!0,_=Rl.bind(_),S.finished.then(_,_))),_=(a&62914560)===a?nh-Vn():(a&4194048)===a?Zx-Vn():0,_=eA(d,_),_!==null)){Fi=a,e.cancelPendingCommit=_(rv.bind(null,e,t,a,n,i,s,r,o,l,c,f,d,null,h,p)),Bs(e,a,r,!c);return}rv(e,t,a,n,i,s,r,o,l,c,f,d)}function $T(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Wn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bs(e,t,n,i){t=Zv(e,t),t&=~Ou,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Kv(e,n,t)}function ih(){return(Qt&6)===0?(Vl(0,!1),!1):!0}function km(){if(kt!==null){if(se===0)var e=kt.return;else e=kt,es=ka=null,Am(e),Pr=null,Ml=0,e=kt;for(;e!==null;)Ex(e.alternate,e),e=e.return;kt=null}}function Zr(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,SE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Fi=0,km(),fe=e,kt=n=ns(e.current,null),Wt=t,se=0,Pn=null,zs=!1,ao=Ol(e,t),Gm=!1,qr=Hn=Ou=Da=ta=Ne=0,Mn=pl=null,Pp=!1,cs=Zv(e,t),Yu(),n}function jx(e,t){It=null,Ct.H=Cu,t===io||t===Ku?(t=U_(),se=3):t===vm?(t=U_(),se=4):se=t===Om?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pn=t,kt===null&&(Ne=1,Ru(e,oi(t,e.current)))}function $x(){var e=sn.current;return e===null?!0:(Wt&4194048)===Wt?ln===null:(Wt&62914560)===Wt||(Wt&536870912)!==0?e===ln:!1}function tS(){var e=Ct.H;return Ct.H=Cu,e===null?Cu:e}function eS(){var e=Ct.A;return Ct.A=QT,e}function zu(){Ne=4,zs||(Wt&4194048)!==Wt&&sn.current!==null||(ao=!0),(ta&134217727)===0&&(Da&134217727)===0||fe===null||Bs(fe,Wt,Hn,!1)}function Pd(e,t,n){var i=Qt;Qt|=2;var s=tS(),a=eS();(fe!==e||Wt!==t)&&(Pu=null,Zr(e,t)),t=!1;var r=Ne;t:do try{if(se!==0&&kt!==null){var o=kt,l=Pn;switch(se){case 8:km(),r=6;break t;case 3:case 2:case 9:case 6:sn.current===null&&(t=!0);var c=se;if(se=0,Pn=null,Ur(e,o,l,c),n&&ao){r=0;break t}break;default:c=se,se=0,Pn=null,Ur(e,o,l,c)}}tE(),r=Ne;break}catch(f){jx(e,f)}while(!0);return t&&e.shellSuspendCounter++,es=ka=null,Qt=i,Ct.H=s,Ct.A=a,kt===null&&(fe=null,Wt=0,Yu()),r}function tE(){for(;kt!==null;)nS(kt)}function eE(e,t){var n=Qt;Qt|=2;var i=tS(),s=eS();fe!==e||Wt!==t?(Pu=null,Iu=Vn()+500,Zr(e,t)):ao=Ol(e,t);t:do try{if(se!==0&&kt!==null){t=kt;var a=Pn;e:switch(se){case 1:se=0,Pn=null,Ur(e,t,a,1);break;case 2:case 9:if(D_(a)){se=0,Pn=null,av(t);break}t=function(){se!==2&&se!==9||fe!==e||(se=7),Gi(e)},a.then(t,t);break t;case 3:se=7;break t;case 4:se=5;break t;case 7:D_(a)?(se=0,Pn=null,av(t)):(se=0,Pn=null,Ur(e,t,a,7));break;case 5:var r=null;switch(kt.tag){case 26:r=kt.memoizedState;case 5:case 27:var o=kt;if(r?wS(r):o.stateNode.complete){se=0,Pn=null;var l=o.sibling;if(l!==null)kt=l;else{var c=o.return;c!==null?(kt=c,sh(c)):kt=null}break e}}se=0,Pn=null,Ur(e,t,a,5);break;case 6:se=0,Pn=null,Ur(e,t,a,6);break;case 8:km(),Ne=6;break t;default:throw Error(W(462))}}nE();break}catch(f){jx(e,f)}while(!0);return es=ka=null,Ct.H=i,Ct.A=s,Qt=n,kt!==null?0:(fe=null,Wt=0,Yu(),Ne)}function nE(){for(;kt!==null&&!y1();)nS(kt)}function nS(e){var t=Tx(e.alternate,e,cs);e.memoizedProps=e.pendingProps,t===null?sh(e):kt=t}function av(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Y_(n,t,t.pendingProps,t.type,void 0,Wt);break;case 11:t=Y_(n,t,t.pendingProps,t.type.render,t.ref,Wt);break;case 5:Am(t);var i=t;i===Je&&(Vt?(Su(i),i.tag===5&&i.stateNode!=null&&(_e=i.stateNode)):(Su(i),Vt=!0));default:Ex(n,t),t=kt=Ay(t,cs),t=Tx(n,t,cs)}e.memoizedProps=e.pendingProps,t===null?sh(e):kt=t}function Ur(e,t,n,i){es=ka=null,Am(t),Pr=null,Ml=0;var s=t.return;try{if(kT(e,s,t,n,Wt)){Ne=1,Ru(e,oi(n,e.current)),kt=null;return}}catch(a){if(s!==null)throw kt=s,a;Ne=1,Ru(e,oi(n,e.current)),kt=null;return}t.flags&32768?(Vt||i===1?e=!0:ao||(Wt&536870912)!==0?e=!1:(zs=e=!0,(i===2||i===9||i===3||i===6)&&(i=sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),iS(t,e)):sh(t)}function sh(e){var t=e;do{if((t.flags&32768)!==0){iS(t,zs);return}e=t.return;var n=YT(t.alternate,t,cs);if(n!==null){kt=n;return}if(t=t.sibling,t!==null){kt=t;return}kt=t=e}while(t!==null);Ne===0&&(Ne=5)}function iS(e,t){do{var n=ZT(e.alternate,e);if(n!==null){n.flags&=32767,kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){kt=e;return}kt=e=n}while(e!==null);Ne=6,kt=null}function rv(e,t,n,i,s,a,r,o,l,c,f,d){e.cancelPendingCommit=null;do ah();while(Re!==0);if((Qt&6)!==0)throw Error(W(327));if(t!==null){if(t===e.current)throw Error(W(177));e===fe&&(kt=fe=null,Wt=0),Ba=t,yi=e,Fi=n,Bp=s,Jx=i,iE(e,t,n,r,o,l,d)}}function iE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(zp=o,o|=fm,R1(e,n,o,i,s,a),Hr=null,(n&335544064)===n?(Vr=UT(e),i=10262):(Vr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,cE(gu,function(){return Gp(),null})):(e.callbackNode=null,e.callbackPriority=0),Nu=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ct.T,Ct.T=null,s=jt.p,jt.p=2,a=Qt,Qt|=4;try{JT(e,t,n)}finally{Qt=a,jt.p=s,Ct.T=i}}Re=1,Nu?Fr=wE(r,e.containerInfo,Vr,Fp,Hp,aE,Vp,Gp,sE,null,null):(Fp(),Hp(),Vp())}function sE(e){if(Re!==0){var t=yi.onRecoverableError;t(e,{componentStack:null})}}function aE(){Re===3&&(Re=0,Gx(Ba,yi),Re=4)}function Fp(){if(Re===1){Re=0;var e=yi,t=Ba,n=Fi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ct.T,Ct.T=null;var s=jt.p;jt.p=2;var a=Qt;Qt|=4;try{nl=Lu=!1,Hx(t,e,n),n=qp;var r=vy(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&_y(o.ownerDocument.documentElement,o)){if(l!==null&&hm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),m=l.end===void 0?S:Math.min(l.end,_);!p.extend&&S>m&&(r=m,m=S,S=r);var u=M_(o,S),g=M_(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}$r=!!Wp,qp=Wp=null}finally{Qt=a,jt.p=s,Ct.T=i}}e.current=t,Re=2}}function Hp(){if(Re===2){Re=0;var e=yi,t=Ba,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ct.T,Ct.T=null;var i=jt.p;jt.p=2;var s=Qt;Qt|=4;try{Ox(e,t.alternate,t)}finally{Qt=s,jt.p=i,Ct.T=n}}Re=3}}function Vp(){if(Re===4||Re===3){Re=0;var e=Fr;Fr=null,x1();var t=yi,n=Ba,i=Fi,s=Jx,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Re=5:(Re=0,Ba=yi=null,sS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(qs=null),am(i),n=n.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Ll,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ct.T,a=jt.p,jt.p=2,Ct.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ct.T=n,jt.p=a}}if(s=Hr,r=Vr,Vr=null,s!==null&&(Hr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Fi&3)!==0&&ah(),Gi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===ou?ml++:(ml=0,ou=t):(ml=0,ou=null),Vl(0,!1)}}function sS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function ah(){return Fr!==null&&(Fr.skipTransition(),Fr=null),Fp(),Hp(),Vp(),Gp()}function Gp(){if(Re!==5)return!1;var e=yi,t=zp;zp=0;var n=am(Fi),i=Ct.T,s=jt.p;try{jt.p=32>n?32:n,Ct.T=null,n=Bp,Bp=null;var a=yi,r=Fi;if(Re=0,Ba=yi=null,Fi=0,(Qt&6)!==0)throw Error(W(331));var o=Qt;if(Qt|=4,qx(a.current),kx(a,a.current,r,n),Qt=o,Vl(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Ll,a)}catch{}return!0}finally{jt.p=s,Ct.T=i,sS(e,t)}}function ov(e,t,n){t=oi(n,t),t=Sp(e.stateNode,t,2),e=ks(e,t,2),e!==null&&(Il(e,2),Gi(e))}function re(e,t,n){if(e.tag===3)ov(e,e,n);else for(;t!==null;){if(t.tag===3){ov(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qs===null||!qs.has(i))){e=oi(n,e),n=yx(2),i=ks(t,n,2),i!==null&&(xx(n,i,t,e),Il(i,2),Gi(i));break}}t=t.return}}function zd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new jT;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Gm=!0,s.add(n),e=rE.bind(null,e,t,n),t.then(e,e))}function rE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fe===e&&(Wt&n)===n&&((Ne===4||Ne===3&&(Wt&62914560)===Wt&&300>Vn()-nh)&&(Qt&2)===0?Zr(e,0):Ou|=n,qr===Wt&&(qr=0)),Gi(e)}function aS(e,t){t===0&&(t=Jv()),e=Ga(e,t),e!==null&&(Il(e,t),Gi(e))}function oE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),aS(e,n)}function lE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(W(314))}i!==null&&i.delete(t),aS(e,n)}function cE(e,t){return im(e,t)}var Jr=null,yr=null,kp=!1,Bu=!1,Bd=!1,Fs=0;function Gi(e){e!==yr&&e.next===null&&(yr===null?Jr=yr=e:yr=yr.next=e),Bu=!0,kp||(kp=!0,hE())}function Vl(e,t){if(!Bd&&Bu){Bd=!0;do for(var n=!1,i=Jr;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,lv(i,a))}else a=Wt,a=Gu(i,i===fe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Ol(i,a)||(n=!0,lv(i,a));i=i.next}while(n);Bd=!1}}function uE(){rS()}function rS(){Bu=kp=!1;var e=0;Fs!==0&&xE()&&(e=Fs);for(var t=Vn(),n=null,i=Jr;i!==null;){var s=i.next,a=oS(i,t);a===0?(i.next=null,n===null?Jr=s:n.next=s,s===null&&(yr=n)):(n=i,(e!==0||(a&3)!==0)&&(Bu=!0)),i=s}Re!==0&&Re!==5||Vl(e,!1),Fs!==0&&(Fs=0)}function oS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=C1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=fe,n=Wt,n=Gu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&gd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ol(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&gd(i),am(n)){case 2:case 8:n=qv;break;case 32:n=gu;break;case 268435456:n=Yv;break;default:n=gu}return i=lS.bind(null,e),n=im(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&gd(i),e.callbackPriority=2,e.callbackNode=null,2}function lS(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ah()&&e.callbackNode!==n)return null;var i=Wt;return i=Gu(e,e===fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qx(e,i,t),oS(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?lS.bind(null,e):null)}function lv(e,t){if(ah())return null;Qx(e,t,!0)}function hE(){ME(function(){(Qt&6)!==0?im(Wv,uE):rS()})}function Xm(){if(Fs===0){var e=Oa;e===0&&(e=Cc,Cc<<=1,(Cc&261888)===0&&(Cc=256)),Fs=e}return Fs}function cv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jc(e)}function fE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=cv((s[wn]||null).action),r=i.submitter;r&&(t=(t=r[wn]||null)?cv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Xu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fs!==0){var l=new FormData(s,r);yp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),yp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(kc=0;kc<lp.length;kc++)Xc=lp[kc],uv=Xc.toLowerCase(),hv=Xc[0].toUpperCase()+Xc.slice(1),xi(uv,"on"+hv);var Xc,uv,hv,kc;xi(xy,"onAnimationEnd");xi(Sy,"onAnimationIteration");xi(My,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(bT,"onTransitionRun");xi(TT,"onTransitionStart");xi(ET,"onTransitionCancel");xi(by,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function cS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){vu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){vu(f)}s.currentTarget=null,a=l}}}}function Gt(e,t){var n=t[a_];n===void 0&&(n=t[a_]=new Set);var i=e+"__bubble";n.has(i)||(uS(t,e,2,!1),n.add(i))}function Fd(e,t,n){var i=0;t&&(i|=4),uS(n,e,i,t)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function Wm(e){if(!e[Wc]){e[Wc]=!0,ey.forEach(function(n){n!=="selectionchange"&&(dE.has(n)||Fd(n,!1,e),Fd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wc]||(t[Wc]=!0,Fd("selectionchange",!1,t))}}function uS(e,t,n,i){switch(OS(t)){case 2:var s=aA;break;case 8:s=rA;break;default:s=jm}n=s.bind(null,t,n,e),s=void 0,!sp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Hd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ta(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}cy(function(){var c=a,f=om(n),d=[];t:{var h=Ty.get(e);if(h!==void 0){var p=Xu,_=e;switch(e){case"keypress":if(Qc(n)===0)break t;case"keydown":case"keyup":p=$1;break;case"focusin":_="focus",p=Md;break;case"focusout":_="blur",p=Md;break;case"beforeblur":case"afterblur":p=Md;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=d_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=V1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sT;break;case xy:case Sy:case My:p=X1;break;case by:p=rT;break;case"scroll":case"scrollend":p=F1;break;case"wheel":p=lT;break;case"copy":case"cut":case"paste":p=q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=m_;break;case"submit":p=nT;break;case"toggle":case"beforetoggle":p=uT}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),u=S?h!==null?h+"Capture":null:h;S=[];for(var g=c,y;g!==null;){var v=g;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||u===null||(v=_l(g,u),v!=null&&S.push(Al(g,v,y))),m)break;g=g.return}0<S.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:S}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==ip&&(_=n.relatedTarget||n.fromElement)&&(Ta(_)||_[eo]))break t;(h||p)&&(_=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Ta(p):null,p!==null&&(m=Nl(p),S=p.tag,p!==m||S!==5&&S!==27&&S!==6)&&(p=null)):(h=null,p=c),h!==p&&(S=d_,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=m_,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=h==null?_:tl(h),y=p==null?_:tl(p),_=new S(v,g+"leave",h,n,f),_.target=m,_.relatedTarget=y,v=null,Ta(f)===c&&(S=new S(u,g+"enter",p,n,f),S.target=y,S.relatedTarget=m,v=S),m=v,S=h&&p?Wd(h,p,pE):null,h!==null&&fv(d,_,h,S,!1),p!==null&&m!==null&&fv(d,m,p,S,!0)))}t:{if(h=c?tl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=y_;else if(v_(h))if(my)E=xT;else{E=vT;var C=_T}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&rm(c.elementType)&&(E=y_):E=yT;if(E&&(E=E(e,c))){py(d,E,n,f);break t}C&&C(e,h,c)}switch(C=c?tl(c):window,e){case"focusin":(v_(C)||C.contentEditable==="true")&&(Er=C,rp=c,al=null);break;case"focusout":al=rp=Er=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,b_(d,n,f);break;case"selectionchange":if(MT)break;case"keydown":case"keyup":b_(d,n,f)}var w;if(um)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Tr?fy(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(hy&&n.locale!=="ko"&&(Tr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Tr&&(w=uy()):(Is=f,lm="value"in Is?Is.value:Is.textContent,Tr=!0)),C=Fu(c,D),0<C.length&&(D=new p_(D,e,null,n,f),d.push({event:D,listeners:C}),w?D.data=w:(w=dy(n),w!==null&&(D.data=w)))),(w=fT?dT(e,n):pT(e,n))&&(D=Fu(c,"onBeforeInput"),0<D.length&&(C=new p_("onBeforeInput","beforeinput",null,n,f),d.push({event:C,listeners:D}),C.data=w)),fE(d,e,c,n,f)}cS(d,t)})}function Al(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=_l(e,n),s!=null&&i.unshift(Al(e,s,a)),s=_l(e,t),s!=null&&i.push(Al(e,s,a))),e.tag===3)return i;e=e.return}return[]}function pE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=_l(n,a),c!=null&&r.unshift(Al(n,c,l))):s||(c=_l(n,a),c!=null&&r.push(Al(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var mE=/\r\n?/g,gE=/\u0000|\uFFFD/g;function dv(e){return(typeof e=="string"?e:""+e).replace(mE,`
`).replace(gE,"")}function hS(e,t){return t=dv(t),dv(e)===t}function ae(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Xr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Xr(e,""+i);else return;break;case"className":Uc(e,"class",i);break;case"tabIndex":Uc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Uc(e,n,i);break;case"style":ly(e,i,a);return;case"data":if(t!=="object"){Uc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jc(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ae(e,t,"name",s.name,s,null),ae(e,t,"formEncType",s.formEncType,s,null),ae(e,t,"formMethod",s.formMethod,s,null),ae(e,t,"formTarget",s.formTarget,s,null)):(ae(e,t,"encType",s.encType,s,null),ae(e,t,"method",s.method,s,null),ae(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jc(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ii);return;case"onScroll":i!=null&&Gt("scroll",e);return;case"onScrollEnd":i!=null&&Gt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(W(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(W(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Jc(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Gt("beforetoggle",e),Gt("toggle",e),Zc(e,"popover",i);break;case"xlinkActuate":ji(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ji(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ji(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ji(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ji(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ji(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ji(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ji(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ji(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Zc(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=z1.get(n)||n,Zc(e,n,i);else return}Kt=!0}function Xp(e,t,n,i,s,a){switch(n){case"style":ly(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(W(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(W(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Xr(e,i);else if(typeof i=="number"||typeof i=="bigint")Xr(e,""+i);else return;break;case"onScroll":i!=null&&Gt("scroll",e);return;case"onScrollEnd":i!=null&&Gt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ny.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[wn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}Kt=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Zc(e,n,i)}return}Kt=!0}function nn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",e),Gt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:ae(e,t,a,r,n,null)}}s&&ae(e,t,"srcSet",n.srcSet,n,null),i&&ae(e,t,"src",n.src,n,null);return;case"input":Gt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(W(137,t));break;default:ae(e,t,i,f,n,null)}}ay(e,a,o,l,c,r,s,!1);return;case"select":Gt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ae(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Lr(e,!!i,t,!1):n!=null&&Lr(e,!!i,n,!0);return;case"textarea":Gt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(W(91));break;default:ae(e,t,r,o,n,null)}oy(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ae(e,t,l,i,n,null)}return;case"dialog":Gt("beforetoggle",e),Gt("toggle",e),Gt("cancel",e),Gt("close",e);break;case"iframe":case"object":Gt("load",e);break;case"video":case"audio":for(i=0;i<El.length;i++)Gt(El[i],e);break;case"image":Gt("error",e),Gt("load",e);break;case"details":Gt("toggle",e);break;case"embed":case"source":case"link":Gt("error",e),Gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:ae(e,t,c,i,n,null)}return;default:if(rm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Xp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ae(e,t,o,i,n,null))}var _E={};function vE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ae(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(Kt=!0),a=p;break;case"name":p!==d&&(Kt=!0),s=p;break;case"checked":p!==d&&(Kt=!0),c=p;break;case"defaultChecked":p!==d&&(Kt=!0),f=p;break;case"value":p!==d&&(Kt=!0),r=p;break;case"defaultValue":p!==d&&(Kt=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(W(137,t));break;default:p!==d&&ae(e,t,h,p,i,d)}}np(e,r,o,l,c,f,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ae(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(Kt=!0),h=a;break;case"defaultValue":a!==l&&(Kt=!0),o=a;break;case"multiple":a!==l&&(Kt=!0),r=a;default:a!==l&&ae(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?Lr(e,!!n,h,!1):!!i!=!!n&&(t!=null?Lr(e,!!n,t,!0):Lr(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ae(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(Kt=!0),h=s;break;case"defaultValue":s!==a&&(Kt=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(W(91));break;default:s!==a&&ae(e,t,r,s,i,a)}ry(e,h,p);return;case"option":for(var _ in n)if(h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:ae(e,t,_,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":h!==p&&(Kt=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ae(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!i.hasOwnProperty(S)&&ae(e,t,S,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(W(137,t));break;default:ae(e,t,c,h,i,p)}return;default:if(rm(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Xp(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Xp(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&ae(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ae(e,t,d,h,i,p)}function pv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&pv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&pv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wp=null,qp=null;function wl(e){return e.nodeType===9?e:e.ownerDocument}function mv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dS(e,t,n,i){return n=wl(n).createElement(e),n[je]=i,n[wn]=t,nn(n,e,t),Ze(n),n}function Yp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vd=null;function xE(){var e=window.event;return e&&e.type==="popstate"?e===Vd?!1:(Vd=e,!0):(Vd=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,_v=typeof requestAnimationFrame=="function"?requestAnimationFrame:qm,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(e){return gv.resolve(null).then(e).catch(bE)}:qm;function bE(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function vv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),to(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")kd(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,kd(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Pl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&kd(e.ownerDocument.body);n=s}while(n);to(t)}function yv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function pS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function mS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function gS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Zp(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return gS(t,n,e)}function TE(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return gS(t,n,e)}function EE(e){return e.documentElement.clientHeight}function AE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function wE(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,_=c.fonts.status;i();var S=[];if(_==="loaded"&&(EE(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),_=S.length,e!==null)for(var m=e.suspenseyImages,u=0,g=0;g<m.length;g++){var y=m[g];if(!y.complete){var v=y.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<h.innerHeight&&v.left<h.innerWidth){if(u+=CS(y),u>uu){S.length=_;break}y=new Promise(AE.bind(y)),S.push(y)}}}if(0<S.length)return h=Promise.race([Promise.all(S),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var _=h[p],S=_.effect,m=S.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(_),_=S.getKeyframes();for(var u=m=void 0,g=!0,y=0;y<_.length;y++){var v=_[y],E=v.width;if(m===void 0)m=E;else if(m!==E){g=!1;break}if(E=v.height,u===void 0)u=E;else if(u!==E){g=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}g&&m!==void 0&&u!==void 0&&(S.setKeyframes(_),g=getComputedStyle(S.target,S.pseudoElement),g.width!==m||g.height!==u)&&(g=_[0],g.width=m,g.height=u,g=_[_.length-1],g.width=m,g.height=u,S.setKeyframes(_))}}r()},function(h){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&l(h)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function Ea(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ea.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:de({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ea.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Ea.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function _S(e){return{name:e,group:new Ea("group",e),imagePair:new Ea("image-pair",e),old:new Ea("old",e),new:new Ea("new",e)}}function qn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}qn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(vS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Kr(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),An(this._fragmentFiber.child,!1,CE,e,o,i)}this._eventListeners=a}};function CE(e,t,n,i){return He(e).addEventListener(t,n,i),!1}qn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=vS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Kr(s.optionsOrUseCapture),An(this._fragmentFiber.child,!1,RE,e,n,s),i.splice(t,1),a!==null&&a()}};function RE(e,t,n,i){return He(e).removeEventListener(t,n,i),!1}function Kr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function xv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function vS(e,t,n,i){if(e.length===0)return-1;i=xv(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&xv(a.optionsOrUseCapture)===i)return s}return-1}qn.prototype.dispatchEvent=function(e){var t=Fa(this._fragmentFiber);if(t===null)return!0;t=He(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Kr(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Kr(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};qn.prototype.focus=function(e){An(this._fragmentFiber.child,!0,yS,e,void 0,void 0)};function yS(e,t){return e.tag===6?!1:(e=He(e),VE(e,t))}qn.prototype.focusLast=function(e){var t=[];An(this._fragmentFiber.child,!0,Ym,t,void 0,void 0);for(var n=t.length-1;0<=n&&!yS(t[n],e);n--);};function Ym(e,t){return t.push(e),!1}qn.prototype.blur=function(){var e=Fa(this._fragmentFiber);e!==null&&(e=He(e),e=wl(e).activeElement,e!==null&&An(this._fragmentFiber.child,!1,DE,e,void 0,void 0))};function DE(e,t){return e.tag===6?!1:(e=He(e),e===t||e.contains(t)?(t.blur(),!0):!1)}qn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),An(this._fragmentFiber.child,!1,UE,e,void 0,void 0)};function UE(e,t){return e.tag===6||(e=He(e),t.observe(e)),!1}qn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),An(this._fragmentFiber.child,!1,NE,e,void 0,void 0);for(var n=t=0;n<vi.length;n++){var i=vi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):vi[t++]=i}vi.length=t}};function NE(e,t){return e.tag===6||(e=He(e),t.unobserve(e)),!1}var vi=[],Gd=!1;function LE(e,t,n){vi.push({fragmentInstance:e,observer:t,instance:n}),Gd||(Gd=!0,GE(function(){Gd=!1;var i=vi;vi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}qn.prototype.getClientRects=function(){var e=[];return An(this._fragmentFiber.child,!1,OE,e,void 0,void 0),e};function OE(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=He(e),t.push.apply(t,e.getClientRects());return!1}qn.prototype.getRootNode=function(e){var t=Fa(this._fragmentFiber);return t===null?this:He(t).getRootNode(e)};qn.prototype.compareDocumentPosition=function(e){var t=Fa(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];An(this._fragmentFiber.child,!1,Ym,n,void 0,void 0);var i=He(t);if(n.length===0){if(n=i,$0(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Vv(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=He(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=He(n[0]),s=He(n[n.length-1]);var a=$0(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||IE(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function IE(e,t,n,i,s){var a=Ta(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Fa(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Wd(n,a,t_),t===null?t=!1:(An(t,!0,h1,a,n),a=xr,xr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Wd(i,a,t_),t===null?t=!1:(An(t,!0,f1,a,i),a=xr,Xd=xr=null,t=a!==null)),t):!1}function Sv(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}qn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(W(566));var t=[];An(this._fragmentFiber.child,!1,Ym,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Vv(this._fragmentFiber);if(i=n?i[1]||i[0]||Fa(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=He(i),Sv(e,n);return}if(i=He(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=He(s),Sv(s,n)):He(s).scrollIntoView(e),i+=n?-1:1}};function PE(e,t){return e=He(e),xS(e,t),!1}function xS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function SS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Kr(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<vi.length;o++){var l=vi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(vi[r++]=l)}vi.length=r,a.observe(e)}),xS(e,t))}function zE(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Kr(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?LE(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Jp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jp(n),ku(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function BE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function FE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function MS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ci(e.nextSibling),e===null))return null;return e}function Kp(e){return e.data==="$?"||e.data==="$~"}function Zm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qp=null;function Mv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ci(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function bv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function VE(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function GE(e){_v(function(){_v(function(t){return e(t)})})}function bS(e,t,n){switch(t=wl(n),e){case"html":if(e=t.documentElement,!e)throw Error(W(452));return e;case"head":if(e=t.head,!e)throw Error(W(453));return e;case"body":if(e=t.body,!e)throw Error(W(454));return e;default:throw Error(W(451))}}function TS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ae(e,t,i,null,_E,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ii&&(e.onclick=null),ku(e)}function kd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ku(e)}var ui=new Map,Tv=new Set;function Cl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var fs=jt.d;jt.d={f:kE,r:XE,D:WE,C:qE,L:YE,m:ZE,X:KE,S:JE,M:QE};function kE(){var e=fs.f(),t=ih();return e||t}function XE(e){var t=no(e);t!==null&&t.tag===5&&t.type==="form"?lx(t):fs.r(e)}var ro=typeof document>"u"?null:document;function ES(e,t,n){var i=ro;if(i&&typeof t=="string"&&t){var s=ri(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Tv.has(s)||(Tv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),nn(t,"link",e),Ze(t),i.head.appendChild(t)))}}function WE(e){fs.D(e),ES("dns-prefetch",e,null)}function qE(e,t){fs.C(e,t),ES("preconnect",e,t)}function YE(e,t,n){fs.L(e,t,n);var i=ro;if(i&&e&&t){var s='link[rel="preload"][as="'+ri(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ri(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ri(n.imageSizes)+'"]')):s+='[href="'+ri(e)+'"]';var a=s;switch(t){case"style":a=Qr(e);break;case"script":a=oo(e)}if(!(ui.has(a)||(e=de({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ui.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Gl(a))||t==="script"&&i.querySelector(kl(a))))){var r=i.createElement("link");nn(r,"link",e),t==="style"&&(r[_u]=!0,r.onload=r.onerror=function(){ty(r)}),Ze(r),i.head.appendChild(r)}}}function ZE(e,t){fs.m(e,t);var n=ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ri(i)+'"][href="'+ri(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=oo(e)}if(!ui.has(a)&&(e=de({rel:"modulepreload",href:e},t),ui.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kl(a)))return}i=n.createElement("link"),nn(i,"link",e),Ze(i),n.head.appendChild(i)}}}function JE(e,t,n){fs.S(e,t,n);var i=ro;if(i&&e){var s=Nr(i).hoistableStyles,a=Qr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Gl(a)))o.loading=5;else{e=de({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ui.get(a))&&Jm(e,n);var l=r=i.createElement("link");Ze(l),nn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,lu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function KE(e,t){fs.X(e,t);var n=ro;if(n&&e){var i=Nr(n).hoistableScripts,s=oo(e),a=i.get(s);a||(a=n.querySelector(kl(s)),a||(e=de({src:e,async:!0},t),(t=ui.get(s))&&Km(e,t),a=n.createElement("script"),Ze(a),nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function QE(e,t){fs.M(e,t);var n=ro;if(n&&e){var i=Nr(n).hoistableScripts,s=oo(e),a=i.get(s);a||(a=n.querySelector(kl(s)),a||(e=de({src:e,async:!0,type:"module"},t),(t=ui.get(s))&&Km(e,t),a=n.createElement("script"),Ze(a),nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ev(e,t,n,i){var s=(s=Hs.current)?Cl(s):null;if(!s)throw Error(W(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Qr(n.href),t=Nr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Qr(n.href);var a=Nr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Gl(e)))?a._p||(r.instance=a,r.state.loading=5):(a=ui.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ui.set(e,a)),jE(s,e,a,r.state))),t&&i===null)throw Error(W(528,""));return r}if(t&&i!==null)throw Error(W(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=oo(n),t=Nr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(W(444,e))}}function Qr(e){return'href="'+ri(e)+'"'}function Gl(e){return'link[rel="stylesheet"]['+e+"]"}function AS(e){return de({},e,{"data-precedence":e.precedence,precedence:null})}function jE(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[_u]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[_u]=!0,t.onload=t.onerror=ty.bind(null,t),nn(t,"link",n),Ze(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function oo(e){return'[src="'+ri(e)+'"]'}function kl(e){return"script[async]"+e}function Av(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ri(n.href)+'"]');if(i)return t.instance=i,Ze(i),i;var s=de({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ze(i),nn(i,"style",s),lu(i,n.precedence,e),t.instance=i;case"stylesheet":s=Qr(n.href);var a=e.querySelector(Gl(s));if(a)return t.state.loading|=4,t.instance=a,Ze(a),a;i=AS(n),(s=ui.get(s))&&Jm(i,s),a=(e.ownerDocument||e).createElement("link"),Ze(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(a,"link",i),t.state.loading|=4,lu(a,n.precedence,e),t.instance=a;case"script":return a=oo(n.src),(s=e.querySelector(kl(a)))?(t.instance=s,Ze(s),s):(i=n,(s=ui.get(a))&&(i=de({},n),Km(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ze(s),nn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(W(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,lu(i,n.precedence,e));return t.instance}function lu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Jm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Km(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cu=null;function wv(e,t,n){if(cu===null){var i=new Map,s=cu=new Map;s.set(n,i)}else s=cu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Pl]||a[je]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function jp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $E(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function wS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function CS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Rv(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=CS(t),e.suspenseyImages.push(t)),e=nA.bind(e),t.decode().then(e,e))}function tA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Qr(i.href),a=t.querySelector(Gl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ze(a);return}a=t.ownerDocument||t,i=AS(i),(s=ui.get(s))&&Jm(i,s),a=a.createElement("link"),Ze(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Rl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var uu=0;function eA(e,t){return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&uu===0&&(uu=62500*yE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function RS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)hu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Rl(){this.count--,RS(this)}function nA(){this.imgCount--,RS(this)}var Hu=null;function hu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hu=new Map,t.forEach(iA,e),Hu=null,Rl.call(e))}function iA(e,t){if(!(t.state.loading&4)){var n=Hu.get(e);if(n)var i=n.get(null);else{n=new Map,Hu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Rl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var jr={$$typeof:Oi,Provider:null,Consumer:null,_currentValue:Aa,_currentValue2:Aa,_threadCount:0};function sA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_d(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_d(0),this.hiddenUpdates=_d(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function DS(e,t,n,i,s,a,r,o,l,c,f,d){return e=new sA(e,t,n,r,l,c,f,d,o),t=1,a===!0&&(t|=24),a=Tn(3,null,null,t),e.current=a,a.stateNode=e,t=gm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},ym(a),e}function US(e){return e?(e=Cr,e):Cr}function NS(e,t,n,i,s,a){s=US(s),i.context===null?i.context=s:i.pendingContext=s,i=Gs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ks(e,i,t),n!==null&&(En(n,e,t),ol(n,e,t))}function Dv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qm(e,t){Dv(e,t),(e=e.alternate)&&Dv(e,t)}function LS(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&En(t,e,67108864),Qm(e,67108864)}}function Uv(e){if(e.tag===13||e.tag===31){var t=Xn();t=sm(t);var n=Ga(e,t);n!==null&&En(n,e,t),Qm(e,t)}}var $r=!0;function aA(e,t,n,i){var s=Ct.T;Ct.T=null;var a=jt.p;try{jt.p=2,jm(e,t,n,i)}finally{jt.p=a,Ct.T=s}}function rA(e,t,n,i){var s=Ct.T;Ct.T=null;var a=jt.p;try{jt.p=8,jm(e,t,n,i)}finally{jt.p=a,Ct.T=s}}function jm(e,t,n,i){if($r){var s=$p(i);if(s===null)Hd(e,t,i,Vu,n),Nv(e,i);else if(lA(s,e,t,n,i))i.stopPropagation();else if(Nv(e,i),t&4&&-1<oA.indexOf(e)){for(;s!==null;){var a=no(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Sa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-kn(r);o.entanglements[1]|=l,r&=~l}Gi(a),(Qt&6)===0&&(Iu=Vn()+500,Vl(0,!1))}}break;case 31:case 13:o=Ga(a,2),o!==null&&En(o,a,2),ih(),Qm(a,2)}if(a=$p(i),a===null&&Hd(e,t,i,Vu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Hd(e,t,i,null,n)}}function $p(e){return e=om(e),$m(e)}var Vu=null;function $m(e){if(Vu=null,e=Ta(e),e!==null){var t=Nl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Bv(t),e!==null)return e;e=null}else if(n===31){if(e=Fv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vu=e,null}function OS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S1()){case Wv:return 2;case qv:return 8;case gu:case M1:return 32;case Yv:return 268435456;default:return 32}default:return 32}}var tm=!1,Ys=null,Zs=null,Js=null,Dl=new Map,Ul=new Map,Ls=[],oA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(e,t){switch(e){case"focusin":case"focusout":Ys=null;break;case"dragenter":case"dragleave":Zs=null;break;case"mouseover":case"mouseout":Js=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function Ko(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=no(t),t!==null&&LS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function lA(e,t,n,i,s){switch(t){case"focusin":return Ys=Ko(Ys,e,t,n,i,s),!0;case"dragenter":return Zs=Ko(Zs,e,t,n,i,s),!0;case"mouseover":return Js=Ko(Js,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Dl.set(a,Ko(Dl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ul.set(a,Ko(Ul.get(a)||null,e,t,n,i,s)),!0}return!1}function IS(e){var t=Ta(e.target);if(t!==null){var n=Nl(t);if(n!==null){if(t=n.tag,t===13){if(t=Bv(n),t!==null){e.blockedOn=t,s_(e.priority,function(){Uv(n)});return}}else if(t===31){if(t=Fv(n),t!==null){e.blockedOn=t,s_(e.priority,function(){Uv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$p(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ip=i,n.target.dispatchEvent(i),ip=null}else return t=no(n),t!==null&&LS(t),e.blockedOn=n,!1;t.shift()}return!0}function Lv(e,t,n){fu(e)&&n.delete(t)}function cA(){tm=!1,Ys!==null&&fu(Ys)&&(Ys=null),Zs!==null&&fu(Zs)&&(Zs=null),Js!==null&&fu(Js)&&(Js=null),Dl.forEach(Lv),Ul.forEach(Lv)}function qc(e,t){e.blockedOn===t&&(e.blockedOn=null,tm||(tm=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,cA)))}var Yc=null;function Ov(e){Yc!==e&&(Yc=e,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,function(){Yc===e&&(Yc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if($m(i||n)===null)continue;break}var a=no(n);a!==null&&(e.splice(t,3),t-=3,yp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function to(e){function t(l){return qc(l,e)}Ys!==null&&qc(Ys,e),Zs!==null&&qc(Zs,e),Js!==null&&qc(Js,e),Dl.forEach(t),Ul.forEach(t);for(var n=0;n<Ls.length;n++){var i=Ls[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ls.length&&(n=Ls[0],n.blockedOn===null);)IS(n),n.blockedOn===null&&Ls.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[wn]||null;if(typeof a=="function")r||Ov(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[wn]||null)o=r.formAction;else if($m(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Ov(n)}}}function PS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function tg(e){this._internalRoot=e}rh.prototype.render=tg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));var n=t.current,i=Xn();NS(n,i,e,t,null,null)};rh.prototype.unmount=tg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;NS(e.current,2,null,e,null,null),ih(),t[eo]=null}};function rh(e){this._internalRoot=e}rh.prototype.unstable_scheduleHydration=function(e){if(e){var t=$v();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ls.length&&t!==0&&t<Ls[n].priority;n++);Ls.splice(n,0,e),n===0&&IS(e)}};var Iv=Pv.version;if(Iv!=="19.3.0")throw Error(W(527,Iv,"19.3.0"));jt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=u1(t),e=e!==null?Hv(e):null,e=e===null?null:e.stateNode,e};var uA={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Qo.isDisabled&&Qo.supportsFiber))try{Ll=Qo.inject(uA),Gn=Qo}catch{}var Qo;oh.createRoot=function(e,t){if(!zv(e))throw Error(W(299));var n=!1,i="",s=gx,a=_x,r=vx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=DS(e,1,!1,null,null,n,i,null,s,a,r,PS),e[eo]=t.current,Wm(e),new tg(t)};oh.hydrateRoot=function(e,t,n){if(!zv(e))throw Error(W(299));var i=!1,s="",a=gx,r=_x,o=vx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=DS(e,1,!0,t,n??null,i,s,l,a,r,o,PS),t.context=US(null),n=t.current,i=Xn(),i=sm(i),s=Gs(i),s.callback=null,ks(n,s,i),n=i,t.current.lanes=n,Il(t,n),Gi(t),e[eo]=t.current,Wm(e),new rh(t)};oh.version="19.3.0"});var HS=Es((D3,FS)=>{"use strict";function BS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(BS)}catch(e){console.error(e)}}BS(),FS.exports=zS()});var wb=Qf(Vo(),1),Cb=Qf(HS(),1);var Ai=Qf(Vo(),1);var sM=0,Dg=1,aM=2;var Ug=1,rM=2,Yi=3,ys=0,yn=1,di=2,Ms=0,Ka=1,Ng=2,Lg=3,Og=4,oM=5,ua=100,lM=101,cM=102,uM=103,hM=104,fM=200,dM=201,pM=202,mM=203,Ch=204,Rh=205,gM=206,_M=207,vM=208,yM=209,xM=210,SM=211,MM=212,bM=213,TM=214,jh=0,$h=1,tf=2,Qa=3,ef=4,nf=5,sf=6,af=7,Ig=0,EM=1,AM=2,bs=0,wM=1,CM=2,RM=3,DM=4,UM=5,NM=6,LM=7;var Pg=300,nr=301,ir=302,rf=303,of=304,fc=306,Dh=1e3,Ti=1001,Uh=1002,Dn=1003,OM=1004;var dc=1005;var Un=1006,lf=1007;var ma=1008;var Zi=1009,zg=1010,Bg=1011,No=1012,cf=1013,ga=1014,pi=1015,Lo=1016,uf=1017,hf=1018,Oo=1020,Fg=35902,Hg=35899,Vg=1021,Gg=1022,Ln=1023,bo=1026,Io=1027,kg=1028,ff=1029,Xg=1030,df=1031;var pf=1033,pc=33776,mc=33777,gc=33778,_c=33779,mf=35840,gf=35841,_f=35842,vf=35843,yf=36196,xf=37492,Sf=37496,Mf=37808,bf=37809,Tf=37810,Ef=37811,Af=37812,wf=37813,Cf=37814,Rf=37815,Df=37816,Uf=37817,Nf=37818,Lf=37819,Of=37820,If=37821,Pf=36492,zf=36494,Bf=36495,Ff=36283,Hf=36284,Vf=36285,Gf=36286;var Jl=2300,Nh=2301,Ah=2302,Tg=2400,Eg=2401,Ag=2402;var IM=3200,PM=3201;var zM=0,BM=1,Ts="",Jn="srgb",ja="srgb-linear",Kl="linear",oe="srgb";var Za=7680;var wg=519,FM=512,HM=513,VM=514,Wg=515,GM=516,kM=517,XM=518,WM=519,Cg=35044;var qg="300 es",Ei=2e3,Ql=2001;var xs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eg=Math.PI/180,Lh=180/Math.PI;function vc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[e&255]+cn[e>>8&255]+cn[e>>16&255]+cn[e>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function qt(e,t,n){return Math.max(t,Math.min(n,e))}function hA(e,t){return(e%t+t)%t}function ng(e,t,n){return(1-n)*e+n*t}function Xl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Cn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var le=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ss=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],_=a[r+2],S=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=_,t[n+3]=S;return}if(d!==S||l!==h||c!==p||f!==_){let m=1-o,u=l*h+c*p+f*_+d*S,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let E=Math.sqrt(y),C=Math.atan2(E,u*g);m=Math.sin(m*C)/E,o=Math.sin(o*C)/E}let v=o*g;if(l=l*m+h*v,c=c*m+p*v,f=f*m+_*v,d=d*m+S*v,m===1-o){let E=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=E,c*=E,f*=E,d*=E}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=a[r],h=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+f*d+l*p-c*h,t[n+1]=l*_+f*h+c*d-o*p,t[n+2]=c*_+f*p+o*h-l*d,t[n+3]=f*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(VS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(VS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ig.copy(this).projectOnVector(t),this.sub(ig)}reflect(t){return this.sub(ig.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ig=new z,VS=new Ss,Pt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],S=s[0],m=s[3],u=s[6],g=s[1],y=s[4],v=s[7],E=s[2],C=s[5],w=s[8];return a[0]=r*S+o*g+l*E,a[3]=r*m+o*y+l*C,a[6]=r*u+o*v+l*w,a[1]=c*S+f*g+d*E,a[4]=c*m+f*y+d*C,a[7]=c*u+f*v+d*w,a[2]=h*S+p*g+_*E,a[5]=h*m+p*y+_*C,a[8]=h*u+p*v+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*a,p=c*a-r*l,_=n*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(s*c-f*i)*S,t[2]=(o*i-s*r)*S,t[3]=h*S,t[4]=(f*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(sg.makeScale(t,n)),this}rotate(t){return this.premultiply(sg.makeRotation(-t)),this}translate(t,n){return this.premultiply(sg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sg=new Pt;function Yg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function To(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qM(){let e=To("canvas");return e.style.display="block",e}var GS={};function Eo(e){e in GS||(GS[e]=!0,console.warn(e))}function YM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var kS=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XS=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fA(){let e={enabled:!0,workingColorSpace:ja,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===oe&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?Kl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ja]:{primaries:t,whitePoint:i,transfer:Kl,toXYZ:kS,fromXYZ:XS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:kS,fromXYZ:XS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),e}var Zt=fA();function vs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Mo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var lo,Oh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lo===void 0&&(lo=To("canvas")),lo.width=t.width,lo.height=t.height;let s=lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=To("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=vs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dA=0,Ao=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=vc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ag(s[r].image)):a.push(ag(s[r]))}else a=ag(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function ag(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Oh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pA=0,rg=new z,vn=class e extends xs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ti,s=Ti,a=Un,r=ma,o=Ln,l=Zi,c=e.DEFAULT_ANISOTROPY,f=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=vc(),this.name="",this.source=new Ao(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rg).x}get height(){return this.source.getSize(rg).y}get depth(){return this.source.getSize(rg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Pg;vn.DEFAULT_ANISOTROPY=1;var Ae=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,v=(p+1)/2,E=(u+1)/2,C=(f+h)/4,w=(d+S)/4,D=(_+m)/4;return y>v&&y>E?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=C/i,a=w/i):v>E?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=C/s,a=D/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=w/a,s=D/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-S)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this.w=qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this.w=qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ih=class extends xs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new vn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Ao(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Ih{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},jl=class extends vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ph=class extends vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Si):Si.fromBufferAttribute(a,r),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lh.copy(i.boundingBox)),lh.applyMatrix4(t.matrixWorld),this.union(lh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wl),ch.subVectors(this.max,Wl),co.subVectors(t.a,Wl),uo.subVectors(t.b,Wl),ho.subVectors(t.c,Wl),ia.subVectors(uo,co),sa.subVectors(ho,uo),Xa.subVectors(co,ho);let n=[0,-ia.z,ia.y,0,-sa.z,sa.y,0,-Xa.z,Xa.y,ia.z,0,-ia.x,sa.z,0,-sa.x,Xa.z,0,-Xa.x,-ia.y,ia.x,0,-sa.y,sa.x,0,-Xa.y,Xa.x,0];return!og(n,co,uo,ho,ch)||(n=[1,0,0,0,1,0,0,0,1],!og(n,co,uo,ho,ch))?!1:(uh.crossVectors(ia,sa),n=[uh.x,uh.y,uh.z],og(n,co,uo,ho,ch))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new z,new z,new z,new z,new z,new z,new z,new z],Si=new z,lh=new ha,co=new z,uo=new z,ho=new z,ia=new z,sa=new z,Xa=new z,Wl=new z,ch=new z,uh=new z,Wa=new z;function og(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Wa.fromArray(e,a);let o=s.x*Math.abs(Wa.x)+s.y*Math.abs(Wa.y)+s.z*Math.abs(Wa.z),l=t.dot(Wa),c=n.dot(Wa),f=i.dot(Wa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var mA=new ha,ql=new z,lg=new z,wo=class{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):mA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ql.subVectors(t,this.center);let n=ql.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ql,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ql.copy(t.center).add(lg)),this.expandByPoint(ql.copy(t.center).sub(lg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ps=new z,cg=new z,hh=new z,aa=new z,ug=new z,fh=new z,hg=new z,zh=class{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ps.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,n),ps.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){cg.copy(t).add(n).multiplyScalar(.5),hh.copy(n).sub(t).normalize(),aa.copy(this.origin).sub(cg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(hh),o=aa.dot(this.direction),l=-aa.dot(hh),c=aa.lengthSq(),f=Math.abs(1-r*r),d,h,p,_;if(f>0)if(d=r*l-o,h=r*o-l,_=a*f,d>=0)if(h>=-_)if(h<=_){let S=1/f;d*=S,h*=S,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cg).addScaledVector(hh,h),p}intersectSphere(t,n){ps.subVectors(t.center,this.origin);let i=ps.dot(this.direction),s=ps.dot(ps)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(a=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(a=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,n,i,s,a){ug.subVectors(n,t),fh.subVectors(i,t),hg.crossVectors(ug,fh);let r=this.direction.dot(hg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;aa.subVectors(this.origin,t);let l=o*this.direction.dot(fh.crossVectors(aa,fh));if(l<0)return null;let c=o*this.direction.dot(ug.cross(aa));if(c<0||l+c>r)return null;let f=-o*aa.dot(hg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class e{constructor(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m)}set(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/fo.setFromMatrixColumn(t,0).length(),a=1/fo.setFromMatrixColumn(t,1).length(),r=1/fo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*f,p=r*d,_=o*f,S=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h+S*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-_,n[6]=S+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h-S*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*f,n[9]=S-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,_=o*f,S=o*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+S,n[1]=l*d,n[5]=S*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-h*d,n[8]=_*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-S*d}else if(t.order==="XZY"){let h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+S,n[5]=r*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gA,t,_A)}lookAt(t,n,i){let s=this.elements;return Yn.subVectors(t,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ra.crossVectors(i,Yn),ra.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ra.crossVectors(i,Yn)),ra.normalize(),dh.crossVectors(Yn,ra),s[0]=ra.x,s[4]=dh.x,s[8]=Yn.x,s[1]=ra.y,s[5]=dh.y,s[9]=Yn.y,s[2]=ra.z,s[6]=dh.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],u=i[14],g=i[3],y=i[7],v=i[11],E=i[15],C=s[0],w=s[4],D=s[8],T=s[12],b=s[1],U=s[5],F=s[9],k=s[13],Y=s[2],V=s[6],G=s[10],j=s[14],H=s[3],et=s[7],ot=s[11],yt=s[15];return a[0]=r*C+o*b+l*Y+c*H,a[4]=r*w+o*U+l*V+c*et,a[8]=r*D+o*F+l*G+c*ot,a[12]=r*T+o*k+l*j+c*yt,a[1]=f*C+d*b+h*Y+p*H,a[5]=f*w+d*U+h*V+p*et,a[9]=f*D+d*F+h*G+p*ot,a[13]=f*T+d*k+h*j+p*yt,a[2]=_*C+S*b+m*Y+u*H,a[6]=_*w+S*U+m*V+u*et,a[10]=_*D+S*F+m*G+u*ot,a[14]=_*T+S*k+m*j+u*yt,a[3]=g*C+y*b+v*Y+E*H,a[7]=g*w+y*U+v*V+E*et,a[11]=g*D+y*F+v*G+E*ot,a[15]=g*T+y*k+v*j+E*yt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],_=t[3],S=t[7],m=t[11],u=t[15];return _*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+S*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*f-a*l*f)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*f-i*c*f)+u*(-s*o*f-n*l*d+n*o*h+s*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],_=t[12],S=t[13],m=t[14],u=t[15],g=d*m*c-S*h*c+S*l*p-o*m*p-d*l*u+o*h*u,y=_*h*c-f*m*c-_*l*p+r*m*p+f*l*u-r*h*u,v=f*S*c-_*d*c+_*o*p-r*S*p-f*o*u+r*d*u,E=_*d*l-f*S*l-_*o*h+r*S*h+f*o*m-r*d*m,C=n*g+i*y+s*v+a*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return t[0]=g*w,t[1]=(S*h*a-d*m*a-S*s*p+i*m*p+d*s*u-i*h*u)*w,t[2]=(o*m*a-S*l*a+S*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=y*w,t[5]=(f*m*a-_*h*a+_*s*p-n*m*p-f*s*u+n*h*u)*w,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*h*a-f*l*a+f*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=v*w,t[9]=(_*d*a-f*S*a-_*i*p+n*S*p+f*i*u-n*d*u)*w,t[10]=(r*S*a-_*o*a+_*i*c-n*S*c-r*i*u+n*o*u)*w,t[11]=(f*o*a-r*d*a-f*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=E*w,t[13]=(f*S*s-_*d*s+_*i*h-n*S*h-f*i*m+n*d*m)*w,t[14]=(_*o*s-r*S*s-_*i*l+n*S*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-f*o*s+f*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,d=o+o,h=a*c,p=a*f,_=a*d,S=r*f,m=r*d,u=o*d,g=l*c,y=l*f,v=l*d,E=i.x,C=i.y,w=i.z;return s[0]=(1-(S+u))*E,s[1]=(p+v)*E,s[2]=(_-y)*E,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(h+u))*C,s[6]=(m+g)*C,s[7]=0,s[8]=(_+y)*w,s[9]=(m-g)*w,s[10]=(1-(h+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=fo.set(s[0],s[1],s[2]).length(),r=fo.set(s[4],s[5],s[6]).length(),o=fo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Mi.copy(this);let c=1/a,f=1/r,d=1/o;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,n.setFromRotationMatrix(Mi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Ei,l=!1){let c=this.elements,f=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Ei)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===Ql)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ei,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Ei)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===Ql)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},fo=new z,Mi=new Ge,gA=new z(0,0,0),_A=new z(1,1,1),ra=new z,dh=new z,Yn=new z,WS=new Ge,qS=new Ss,qi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return WS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(WS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return qS.setFromEuler(this),this.setFromQuaternion(qS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var $l=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vA=0,YS=new z,po=new Ss,ms=new Ge,ph=new z,Yl=new z,yA=new z,xA=new Ss,ZS=new z(1,0,0),JS=new z(0,1,0),KS=new z(0,0,1),QS={type:"added"},SA={type:"removed"},mo={type:"childadded",child:null},fg={type:"childremoved",child:null},fi=class e extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=vc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new qi,i=new Ss,s=new z(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Pt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(ZS,t)}rotateY(t){return this.rotateOnAxis(JS,t)}rotateZ(t){return this.rotateOnAxis(KS,t)}translateOnAxis(t,n){return YS.copy(t).applyQuaternion(this.quaternion),this.position.add(YS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ZS,t)}translateY(t){return this.translateOnAxis(JS,t)}translateZ(t){return this.translateOnAxis(KS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ph.copy(t):ph.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(Yl,ph,this.up):ms.lookAt(ph,Yl,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),po.setFromRotationMatrix(ms),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(QS),mo.child=t,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(SA),fg.child=t,this.dispatchEvent(fg),fg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(QS),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,t,yA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,xA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};fi.DEFAULT_UP=new z(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new z,gs=new z,dg=new z,_s=new z,go=new z,_o=new z,jS=new z,pg=new z,mg=new z,gg=new z,_g=new Ae,vg=new Ae,yg=new Ae,ca=class e{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),bi.subVectors(t,n),s.cross(bi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){bi.subVectors(s,n),gs.subVectors(i,n),dg.subVectors(t,n);let r=bi.dot(bi),o=bi.dot(gs),l=bi.dot(dg),c=gs.dot(gs),f=gs.dot(dg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,_=(r*f-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_s.x),l.addScaledVector(r,_s.y),l.addScaledVector(o,_s.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return _g.setScalar(0),vg.setScalar(0),yg.setScalar(0),_g.fromBufferAttribute(t,n),vg.fromBufferAttribute(t,i),yg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(_g,a.x),r.addScaledVector(vg,a.y),r.addScaledVector(yg,a.z),r}static isFrontFacing(t,n,i,s){return bi.subVectors(i,n),gs.subVectors(t,n),bi.cross(gs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),bi.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;go.subVectors(s,i),_o.subVectors(a,i),pg.subVectors(t,i);let l=go.dot(pg),c=_o.dot(pg);if(l<=0&&c<=0)return n.copy(i);mg.subVectors(t,s);let f=go.dot(mg),d=_o.dot(mg);if(f>=0&&d<=f)return n.copy(s);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(go,r);gg.subVectors(t,a);let p=go.dot(gg),_=_o.dot(gg);if(_>=0&&p<=_)return n.copy(a);let S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(_o,o);let m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return jS.subVectors(a,s),o=(d-f)/(d-f+(p-_)),n.copy(s).addScaledVector(jS,o);let u=1/(m+S+h);return r=S*u,o=h*u,n.copy(i).addScaledVector(go,r).addScaledVector(_o,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ZM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oa={h:0,s:0,l:0},mh={h:0,s:0,l:0};function xg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var $t=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Zt.workingColorSpace){if(t=hA(t,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=xg(r,a,t+1/3),this.g=xg(r,a,t),this.b=xg(r,a,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,n=Jn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Jn){let i=ZM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return Zt.workingToColorSpace(un.copy(this),t),Math.round(qt(un.r*255,0,255))*65536+Math.round(qt(un.g*255,0,255))*256+Math.round(qt(un.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(un.copy(this),n);let i=un.r,s=un.g,a=un.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(un.copy(this),n),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Jn){Zt.workingToColorSpace(un.copy(this),t);let n=un.r,i=un.g,s=un.b;return t!==Jn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(oa),this.setHSL(oa.h+t,oa.s+n,oa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(oa),t.getHSL(mh);let i=ng(oa.h,mh.h,n),s=ng(oa.s,mh.s,n),a=ng(oa.l,mh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new $t;$t.NAMES=ZM;var MA=0,$a=class extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=vc(),this.name="",this.type="Material",this.blending=Ka,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ka&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ch&&(i.blendSrc=this.blendSrc),this.blendDst!==Rh&&(i.blendDst=this.blendDst),this.blendEquation!==ua&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Za&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Za&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Za&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tc=class extends $a{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new z,gh=new le,bA=0,Kn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Cg,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gh.fromBufferAttribute(this,n),gh.applyMatrix3(t),this.setXY(n,gh.x,gh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Xl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array),a=Cn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cg&&(t.usage=this.usage),t}};var ec=class extends Kn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var nc=class extends Kn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Xi=class extends Kn{constructor(t,n,i){super(new Float32Array(t),n,i)}},TA=0,hi=new Ge,Sg=new fi,vo=new z,Zn=new ha,Zl=new ha,Ke=new z,fa=class e extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=vc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yg(t)?nc:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Pt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,n,i){return hi.makeTranslation(t,n,i),this.applyMatrix4(hi),this}scale(t,n,i){return hi.makeScale(t,n,i),this.applyMatrix4(hi),this}lookAt(t){return Sg.lookAt(t),Sg.updateMatrix(),this.applyMatrix4(Sg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Xi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Zl.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Zn.min,Zl.min),Zn.expandByPoint(Ke),Ke.addVectors(Zn.max,Zl.max),Zn.expandByPoint(Ke)):(Zn.expandByPoint(Zl.min),Zn.expandByPoint(Zl.max))}Zn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Ke.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ke));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ke.fromBufferAttribute(o,c),l&&(vo.fromBufferAttribute(t,c),Ke.add(vo)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new z,l[D]=new z;let c=new z,f=new z,d=new z,h=new le,p=new le,_=new le,S=new z,m=new z;function u(D,T,b){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),h.fromBufferAttribute(a,D),p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,b),f.sub(c),d.sub(c),p.sub(h),_.sub(h);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(U),o[D].add(S),o[T].add(S),o[b].add(S),l[D].add(m),l[T].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,T=g.length;D<T;++D){let b=g[D],U=b.start,F=b.count;for(let k=U,Y=U+F;k<Y;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new z,v=new z,E=new z,C=new z;function w(D){E.fromBufferAttribute(s,D),C.copy(E);let T=o[D];y.copy(T),y.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(C,T);let U=v.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,T=g.length;D<T;++D){let b=g[D],U=b.start,F=b.count;for(let k=U,Y=U+F;k<Y;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new z,a=new z,r=new z,o=new z,l=new z,c=new z,f=new z,d=new z;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new Kn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],d=a[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$S=new Ge,qa=new zh,_h=new wo,tM=new z,vh=new z,yh=new z,xh=new z,Mg=new z,Sh=new z,eM=new z,Mh=new z,Nn=class extends fi{constructor(t=new fa,n=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Sh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],d=a[l];f!==0&&(Mg.fromBufferAttribute(d,t),r?Sh.addScaledVector(Mg,f):Sh.addScaledVector(Mg.sub(n),f))}n.add(Sh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_h.copy(i.boundingSphere),_h.applyMatrix4(a),qa.copy(t.ray).recast(t.near),!(_h.containsPoint(qa.origin)===!1&&(qa.intersectSphere(_h,tM)===null||qa.origin.distanceToSquared(tM)>(t.far-t.near)**2))&&($S.copy(a).invert(),qa.copy(t.ray).applyMatrix4($S),!(i.boundingBox!==null&&qa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,qa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){let m=h[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,E=y;v<E;v+=3){let C=o.getX(v),w=o.getX(v+1),D=o.getX(v+2);s=bh(this,u,t,i,c,f,d,C,w,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=bh(this,r,t,i,c,f,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){let m=h[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,E=y;v<E;v+=3){let C=v,w=v+1,D=v+2;s=bh(this,u,t,i,c,f,d,C,w,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=m,y=m+1,v=m+2;s=bh(this,r,t,i,c,f,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function EA(e,t,n,i,s,a,r,o){let l;if(t.side===yn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ys,o),l===null)return null;Mh.copy(o),Mh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Mh);return c<n.near||c>n.far?null:{distance:c,point:Mh.clone(),object:e}}function bh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,vh),e.getVertexPosition(l,yh),e.getVertexPosition(c,xh);let f=EA(e,t,n,i,vh,yh,xh,eM);if(f){let d=new z;ca.getBarycoord(eM,vh,yh,xh,d),s&&(f.uv=ca.getInterpolatedAttribute(s,o,l,c,d,new le)),a&&(f.uv1=ca.getInterpolatedAttribute(a,o,l,c,d,new le)),r&&(f.normal=ca.getInterpolatedAttribute(r,o,l,c,d,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};ca.getNormal(vh,yh,xh,h.normal),f.face=h,f.barycoord=d}return f}var Co=class e extends fa{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Xi(c,3)),this.setAttribute("normal",new Xi(f,3)),this.setAttribute("uv",new Xi(d,2));function _(S,m,u,g,y,v,E,C,w,D,T){let b=v/w,U=E/D,F=v/2,k=E/2,Y=C/2,V=w+1,G=D+1,j=0,H=0,et=new z;for(let ot=0;ot<G;ot++){let yt=ot*U-k;for(let Bt=0;Bt<V;Bt++){let ie=Bt*b-F;et[S]=ie*g,et[m]=yt*y,et[u]=Y,c.push(et.x,et.y,et.z),et[S]=0,et[m]=0,et[u]=C>0?1:-1,f.push(et.x,et.y,et.z),d.push(Bt/w),d.push(1-ot/D),j+=1}}for(let ot=0;ot<D;ot++)for(let yt=0;yt<w;yt++){let Bt=h+yt+V*ot,ie=h+yt+V*(ot+1),Se=h+(yt+1)+V*(ot+1),te=h+(yt+1)+V*ot;l.push(Bt,ie,te),l.push(ie,Se,te),H+=6}o.addGroup(p,H,T),p+=H,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function sr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function hn(e){let t={};for(let n=0;n<e.length;n++){let i=sr(e[n]);for(let s in i)t[s]=i[s]}return t}function AA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var JM={clone:sr,merge:hn},wA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends $a{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wA,this.fragmentShader=CA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=AA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ic=class extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},la=new z,nM=new le,iM=new le,Rn=class extends ic{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(eg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){la.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(la.x,la.y).multiplyScalar(-t/la.z),la.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(la.x,la.y).multiplyScalar(-t/la.z)}getViewSize(t,n){return this.getViewBounds(t,nM,iM),n.subVectors(iM,nM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(eg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},yo=-90,xo=1,Bh=class extends fi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(yo,xo,t,n);s.layers=this.layers,this.add(s);let a=new Rn(yo,xo,t,n);a.layers=this.layers,this.add(a);let r=new Rn(yo,xo,t,n);r.layers=this.layers,this.add(r);let o=new Rn(yo,xo,t,n);o.layers=this.layers,this.add(o);let l=new Rn(yo,xo,t,n);l.layers=this.layers,this.add(l);let c=new Rn(yo,xo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},sc=class extends vn{constructor(t=[],n=nr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fh=class extends Wi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Co(5,5,5),a=new Qn({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Ms});a.uniforms.tEquirect.value=n;let r=new Nn(s,a),o=n.minFilter;return n.minFilter===ma&&(n.minFilter=Un),new Bh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Ja=class extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}},RA={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ja;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var ac=class extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var rc=class extends vn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Dn,f=Dn,d,h){super(null,r,o,l,c,f,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bg=new z,DA=new z,UA=new Pt,ki=class{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=bg.subVectors(i,n).cross(DA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(bg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||UA.getNormalMatrix(t),s=this.coplanarPoint(bg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ya=new wo,NA=new le(.5,.5),Th=new z,oc=class{constructor(t=new ki,n=new ki,i=new ki,s=new ki,a=new ki,r=new ki){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ei,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],d=a[5],h=a[6],p=a[7],_=a[8],S=a[9],m=a[10],u=a[11],g=a[12],y=a[13],v=a[14],E=a[15];if(s[0].setComponents(c-r,p-f,u-_,E-g).normalize(),s[1].setComponents(c+r,p+f,u+_,E+g).normalize(),s[2].setComponents(c+o,p+d,u+S,E+y).normalize(),s[3].setComponents(c-o,p-d,u-S,E-y).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,u-m,E-v).normalize();else if(s[4].setComponents(c-l,p-h,u-m,E-v).normalize(),n===Ei)s[5].setComponents(c+l,p+h,u+m,E+v).normalize();else if(n===Ql)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ya.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ya)}intersectsSprite(t){Ya.center.set(0,0,0);let n=NA.distanceTo(t.center);return Ya.radius=.7071067811865476+n,Ya.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ya)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Th.x=s.normal.x>0?t.max.x:t.min.x,Th.y=s.normal.y>0?t.max.y:t.min.y,Th.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Th)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lc=class extends vn{constructor(t,n,i=ga,s,a,r,o=Dn,l=Dn,c,f=bo,d=1){if(f!==bo&&f!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},cc=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var tr=class e extends fa{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=n/l,p=[],_=[],S=[],m=[];for(let u=0;u<f;u++){let g=u*h-r;for(let y=0;y<c;y++){let v=y*d-a;_.push(v,-g,0),S.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let y=g+c*u,v=g+c*(u+1),E=g+1+c*(u+1),C=g+1+c*u;p.push(y,v,C),p.push(v,E,C)}this.setIndex(p),this.setAttribute("position",new Xi(_,3)),this.setAttribute("normal",new Xi(S,3)),this.setAttribute("uv",new Xi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hh=class extends $a{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vh=class extends $a{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Eh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function LA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var er=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gh=class extends er{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tg,endingEnd:Tg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Eg:a=t,o=2*n-i;break;case Ag:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eg:r=t,l=2*i-n;break;case Ag:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),S=_*_,m=S*_,u=-h*m+2*h*S-h*_,g=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*_+1,y=(-1-p)*m+(1.5+p)*S+.5*_,v=p*m-p*S;for(let E=0;E!==o;++E)a[E]=u*r[f+E]+g*r[c+E]+y*r[l+E]+v*r[d+E];return a}},kh=class extends er{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*f;return a}},Xh=class extends er{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eh(n,this.TimeBufferType),this.values=Eh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Eh(t.times,Array),values:Eh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Jl:n=this.InterpolantFactoryMethodDiscrete;break;case Nh:n=this.InterpolantFactoryMethodLinear;break;case Ah:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jl;case this.InterpolantFactoryMethodLinear:return Nh;case this.InterpolantFactoryMethodSmooth:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&LA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ah,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let S=n[d+_];if(S!==n[h+_]||S!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Nh;var da=class extends jn{constructor(t,n,i){super(t,n,i)}};da.prototype.ValueTypeName="bool";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=Jl;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}};Wh.prototype.ValueTypeName="color";var qh=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}};qh.prototype.ValueTypeName="number";var Yh=class extends er{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Ss.slerpFlat(a,0,r,c-o,r,c,l);return a}},uc=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Yh(this.times,this.values,this.getValueSize(),t)}};uc.prototype.ValueTypeName="quaternion";uc.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends jn{constructor(t,n,i){super(t,n,i)}};pa.prototype.ValueTypeName="string";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=Jl;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Zh=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}};Zh.prototype.ValueTypeName="vector";var wh={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Jh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},KM=new Jh,Do=class{constructor(t){this.manager=t!==void 0?t:KM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Do.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=new WeakMap,Kh=class extends Do{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=wh.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let d=So.get(r);d===void 0&&(d=[],So.set(r,d)),d.push({onLoad:n,onError:s})}return r}let o=To("img");function l(){f(),n&&n(this);let d=So.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onLoad&&p.onLoad(this)}So.delete(this),a.manager.itemEnd(t)}function c(d){f(),s&&s(d),wh.remove(`image:${t}`);let h=So.get(this)||[];for(let p=0;p<h.length;p++){let _=h[p];_.onError&&_.onError(d)}So.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wh.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var hc=class extends Do{constructor(t){super(t)}load(t,n,i,s){let a=new vn,r=new Kh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}};var Uo=class extends ic{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Qh=class extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jg="\\[\\]\\.:\\/",OA=new RegExp("["+Jg+"]","g"),Kg="[^"+Jg+"]",IA="[^"+Jg.replace("\\.","")+"]",PA=/((?:WC+[\/:])*)/.source.replace("WC",Kg),zA=/(WCOD+)?/.source.replace("WCOD",IA),BA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kg),FA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kg),HA=new RegExp("^"+PA+zA+BA+FA+"$"),VA=["material","materials","bones","map"],Rg=class{constructor(t,n,i){let s=i||xe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},xe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(OA,"")}static parseTrackName(t){let n=HA.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);VA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Rg;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U3=new Float32Array(1);function Qg(e,t,n,i){let s=GA(i);switch(n){case Vg:return e*t;case kg:return e*t/s.components*s.byteLength;case ff:return e*t/s.components*s.byteLength;case Xg:return e*t*2/s.components*s.byteLength;case df:return e*t*2/s.components*s.byteLength;case Gg:return e*t*3/s.components*s.byteLength;case Ln:return e*t*4/s.components*s.byteLength;case pf:return e*t*4/s.components*s.byteLength;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gc:case _c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gf:case vf:return Math.max(e,16)*Math.max(t,8)/4;case mf:case _f:return Math.max(e,8)*Math.max(t,8)/2;case yf:case xf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Sf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Tf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ef:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Af:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Cf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Rf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Df:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Uf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Nf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Lf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Of:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case If:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pf:case zf:case Bf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ff:case Hf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Vf:case Gf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GA(e){switch(e){case Zi:case zg:return{byteLength:1,components:1};case No:case Bg:case Lo:return{byteLength:2,components:1};case uf:case hf:return{byteLength:2,components:4};case ga:case cf:case pi:return{byteLength:4,components:1};case Fg:case Hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function xb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function XA(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let S=d[p];e.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var WA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qA=`#ifdef USE_ALPHAHASH
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
#endif`,YA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QA=`#ifdef USE_AOMAP
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
#endif`,jA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$A=`#ifdef USE_BATCHING
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
#endif`,tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sw=`#ifdef USE_IRIDESCENCE
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
#endif`,aw=`#ifdef USE_BUMPMAP
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pw=`#define PI 3.141592653589793
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
} // validated`,mw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gw=`vec3 transformedNormal = objectNormal;
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
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bw=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nw=`#ifdef USE_GRADIENTMAP
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
}`,Lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ow=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pw=`uniform bool receiveShadow;
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
#endif`,zw=`#ifdef USE_ENVMAP
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
#endif`,Bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gw=`PhysicalMaterial material;
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
#endif`,kw=`struct PhysicalMaterial {
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
}`,Xw=`
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
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
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
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tC=`#if defined( USE_POINTS_UV )
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
#endif`,eC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rC=`#ifdef USE_MORPHTARGETS
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
#endif`,oC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dC=`#ifdef USE_NORMALMAP
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
#endif`,pC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_C=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,wC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RC=`float getShadowMask() {
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
}`,DC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UC=`#ifdef USE_SKINNING
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
#endif`,NC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LC=`#ifdef USE_SKINNING
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
#endif`,OC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BC=`#ifdef USE_TRANSMISSION
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
#endif`,FC=`#ifdef USE_TRANSMISSION
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
#endif`,HC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WC=`uniform sampler2D t2D;
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
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`#include <common>
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
}`,QC=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jC=`#define DISTANCE
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
}`,$C=`#define DISTANCE
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
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`uniform float scale;
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
}`,iR=`uniform vec3 diffuse;
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
}`,sR=`#include <common>
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
}`,aR=`uniform vec3 diffuse;
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
}`,rR=`#define LAMBERT
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
}`,oR=`#define LAMBERT
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
}`,lR=`#define MATCAP
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
}`,cR=`#define MATCAP
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
}`,uR=`#define NORMAL
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
}`,hR=`#define NORMAL
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
}`,fR=`#define PHONG
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
}`,dR=`#define PHONG
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
}`,pR=`#define STANDARD
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
}`,mR=`#define STANDARD
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
}`,gR=`#define TOON
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
}`,_R=`#define TOON
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
}`,vR=`uniform float size;
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
}`,yR=`uniform vec3 diffuse;
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
}`,xR=`#include <common>
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
}`,SR=`uniform vec3 color;
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
}`,MR=`uniform float rotation;
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
}`,bR=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:WA,alphahash_pars_fragment:qA,alphamap_fragment:YA,alphamap_pars_fragment:ZA,alphatest_fragment:JA,alphatest_pars_fragment:KA,aomap_fragment:QA,aomap_pars_fragment:jA,batching_pars_vertex:$A,batching_vertex:tw,begin_vertex:ew,beginnormal_vertex:nw,bsdfs:iw,iridescence_fragment:sw,bumpmap_pars_fragment:aw,clipping_planes_fragment:rw,clipping_planes_pars_fragment:ow,clipping_planes_pars_vertex:lw,clipping_planes_vertex:cw,color_fragment:uw,color_pars_fragment:hw,color_pars_vertex:fw,color_vertex:dw,common:pw,cube_uv_reflection_fragment:mw,defaultnormal_vertex:gw,displacementmap_pars_vertex:_w,displacementmap_vertex:vw,emissivemap_fragment:yw,emissivemap_pars_fragment:xw,colorspace_fragment:Sw,colorspace_pars_fragment:Mw,envmap_fragment:bw,envmap_common_pars_fragment:Tw,envmap_pars_fragment:Ew,envmap_pars_vertex:Aw,envmap_physical_pars_fragment:zw,envmap_vertex:ww,fog_vertex:Cw,fog_pars_vertex:Rw,fog_fragment:Dw,fog_pars_fragment:Uw,gradientmap_pars_fragment:Nw,lightmap_pars_fragment:Lw,lights_lambert_fragment:Ow,lights_lambert_pars_fragment:Iw,lights_pars_begin:Pw,lights_toon_fragment:Bw,lights_toon_pars_fragment:Fw,lights_phong_fragment:Hw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Gw,lights_physical_pars_fragment:kw,lights_fragment_begin:Xw,lights_fragment_maps:Ww,lights_fragment_end:qw,logdepthbuf_fragment:Yw,logdepthbuf_pars_fragment:Zw,logdepthbuf_pars_vertex:Jw,logdepthbuf_vertex:Kw,map_fragment:Qw,map_pars_fragment:jw,map_particle_fragment:$w,map_particle_pars_fragment:tC,metalnessmap_fragment:eC,metalnessmap_pars_fragment:nC,morphinstance_vertex:iC,morphcolor_vertex:sC,morphnormal_vertex:aC,morphtarget_pars_vertex:rC,morphtarget_vertex:oC,normal_fragment_begin:lC,normal_fragment_maps:cC,normal_pars_fragment:uC,normal_pars_vertex:hC,normal_vertex:fC,normalmap_pars_fragment:dC,clearcoat_normal_fragment_begin:pC,clearcoat_normal_fragment_maps:mC,clearcoat_pars_fragment:gC,iridescence_pars_fragment:_C,opaque_fragment:vC,packing:yC,premultiplied_alpha_fragment:xC,project_vertex:SC,dithering_fragment:MC,dithering_pars_fragment:bC,roughnessmap_fragment:TC,roughnessmap_pars_fragment:EC,shadowmap_pars_fragment:AC,shadowmap_pars_vertex:wC,shadowmap_vertex:CC,shadowmask_pars_fragment:RC,skinbase_vertex:DC,skinning_pars_vertex:UC,skinning_vertex:NC,skinnormal_vertex:LC,specularmap_fragment:OC,specularmap_pars_fragment:IC,tonemapping_fragment:PC,tonemapping_pars_fragment:zC,transmission_fragment:BC,transmission_pars_fragment:FC,uv_pars_fragment:HC,uv_pars_vertex:VC,uv_vertex:GC,worldpos_vertex:kC,background_vert:XC,background_frag:WC,backgroundCube_vert:qC,backgroundCube_frag:YC,cube_vert:ZC,cube_frag:JC,depth_vert:KC,depth_frag:QC,distanceRGBA_vert:jC,distanceRGBA_frag:$C,equirect_vert:tR,equirect_frag:eR,linedashed_vert:nR,linedashed_frag:iR,meshbasic_vert:sR,meshbasic_frag:aR,meshlambert_vert:rR,meshlambert_frag:oR,meshmatcap_vert:lR,meshmatcap_frag:cR,meshnormal_vert:uR,meshnormal_frag:hR,meshphong_vert:fR,meshphong_frag:dR,meshphysical_vert:pR,meshphysical_frag:mR,meshtoon_vert:gR,meshtoon_frag:_R,points_vert:vR,points_frag:yR,shadow_vert:xR,shadow_frag:SR,sprite_vert:MR,sprite_frag:bR},rt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Ji={basic:{uniforms:hn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:hn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:hn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:hn([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:hn([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:hn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:hn([rt.points,rt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:hn([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:hn([rt.common,rt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:hn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:hn([rt.sprite,rt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:hn([rt.common,rt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:hn([rt.lights,rt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ji.physical={uniforms:hn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var kf={r:0,b:0,g:0},ar=new qi,TR=new Ge;function ER(e,t,n,i,s,a,r){let o=new $t(0),l=a===!0?0:1,c,f,d=null,h=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function S(y){let v=!1,E=_(y);E===null?u(o,l):E&&E.isColor&&(u(E,1),v=!0);let C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let E=_(v);E&&(E.isCubeTexture||E.mapping===fc)?(f===void 0&&(f=new Nn(new Co(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:sr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ar.copy(v.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(TR.makeRotationFromEuler(ar)),f.material.toneMapped=Zt.getTransfer(E.colorSpace)!==oe,(d!==E||h!==E.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=E,h=E.version,p=e.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Nn(new tr(2,2),new Qn({name:"BackgroundMaterial",uniforms:sr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(E.colorSpace)!==oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(kf,Zg(e)),i.buffers.color.setClear(kf.r,kf.g,kf.b,v,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:S,addToRenderList:m,dispose:g}}function AR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(b,U,F,k,Y){let V=!1,G=d(k,F,U);a!==G&&(a=G,c(a.object)),V=p(b,k,F,Y),V&&_(b,k,F,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,v(b,U,F,k),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function f(b){return e.deleteVertexArray(b)}function d(b,U,F){let k=F.wireframe===!0,Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let V=Y[U.id];V===void 0&&(V={},Y[U.id]=V);let G=V[k];return G===void 0&&(G=h(l()),V[k]=G),G}function h(b){let U=[],F=[],k=[];for(let Y=0;Y<n;Y++)U[Y]=0,F[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,U,F,k){let Y=a.attributes,V=U.attributes,G=0,j=F.getAttributes();for(let H in j)if(j[H].location>=0){let ot=Y[H],yt=V[H];if(yt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor)),ot===void 0||ot.attribute!==yt||yt&&ot.data!==yt.data)return!0;G++}return a.attributesNum!==G||a.index!==k}function _(b,U,F,k){let Y={},V=U.attributes,G=0,j=F.getAttributes();for(let H in j)if(j[H].location>=0){let ot=V[H];ot===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor));let yt={};yt.attribute=ot,ot&&ot.data&&(yt.data=ot.data),Y[H]=yt,G++}a.attributes=Y,a.attributesNum=G,a.index=k}function S(){let b=a.newAttributes;for(let U=0,F=b.length;U<F;U++)b[U]=0}function m(b){u(b,0)}function u(b,U){let F=a.newAttributes,k=a.enabledAttributes,Y=a.attributeDivisors;F[b]=1,k[b]===0&&(e.enableVertexAttribArray(b),k[b]=1),Y[b]!==U&&(e.vertexAttribDivisor(b,U),Y[b]=U)}function g(){let b=a.newAttributes,U=a.enabledAttributes;for(let F=0,k=U.length;F<k;F++)U[F]!==b[F]&&(e.disableVertexAttribArray(F),U[F]=0)}function y(b,U,F,k,Y,V,G){G===!0?e.vertexAttribIPointer(b,U,F,Y,V):e.vertexAttribPointer(b,U,F,k,Y,V)}function v(b,U,F,k){S();let Y=k.attributes,V=F.getAttributes(),G=U.defaultAttributeValues;for(let j in V){let H=V[j];if(H.location>=0){let et=Y[j];if(et===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){let ot=et.normalized,yt=et.itemSize,Bt=t.get(et);if(Bt===void 0)continue;let ie=Bt.buffer,Se=Bt.type,te=Bt.bytesPerElement,Z=Se===e.INT||Se===e.UNSIGNED_INT||et.gpuType===cf;if(et.isInterleavedBufferAttribute){let Q=et.data,dt=Q.stride,Ut=et.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)u(H.location+bt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<H.locationSize;bt++)m(H.location+bt);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let bt=0;bt<H.locationSize;bt++)y(H.location+bt,yt/H.locationSize,Se,ot,dt*te,(Ut+yt/H.locationSize*bt)*te,Z)}else{if(et.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)u(H.location+Q,et.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let Q=0;Q<H.locationSize;Q++)y(H.location+Q,yt/H.locationSize,Se,ot,yt*te,yt/H.locationSize*Q*te,Z)}}else if(G!==void 0){let ot=G[j];if(ot!==void 0)switch(ot.length){case 2:e.vertexAttrib2fv(H.location,ot);break;case 3:e.vertexAttrib3fv(H.location,ot);break;case 4:e.vertexAttrib4fv(H.location,ot);break;default:e.vertexAttrib1fv(H.location,ot)}}}}g()}function E(){D();for(let b in i){let U=i[b];for(let F in U){let k=U[F];for(let Y in k)f(k[Y].object),delete k[Y];delete U[F]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let F in U){let k=U[F];for(let Y in k)f(k[Y].object),delete k[Y];delete U[F]}delete i[b.id]}function w(b){for(let U in i){let F=i[U];if(F[b.id]===void 0)continue;let k=F[b.id];for(let Y in k)f(k[Y].object),delete k[Y];delete F[b.id]}}function D(){T(),r=!0,a!==s&&(a=s,c(a.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function wR(e,t,n){let i;function s(c){i=c}function a(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=f[S]*h[S];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CR(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ln&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let D=w===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Zi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==pi&&!D)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:C}}function RR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ki,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?f(null):c();else{let g=a?0:i,y=g*4,v=u.clippingState||null;l.value=v,v=f(_,h,y,p);for(let E=0;E!==y;++E)v[E]=n[E];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let u=p+S*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==S;++y,v+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function DR(e){let t=new WeakMap;function n(r,o){return o===rf?r.mapping=nr:o===of&&(r.mapping=ir),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===rf||o===of)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Fh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var zo=4,QM=[.125,.215,.35,.446,.526,.582],lr=20,jg=new Uo,jM=new $t,$g=null,t0=0,e0=0,n0=!1,or=(1+Math.sqrt(5))/2,Po=1/or,$M=[new z(-or,Po,0),new z(or,Po,0),new z(-Po,0,or),new z(Po,0,or),new z(0,or,-Po),new z(0,or,Po),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],UR=new z,qf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=UR}=a;$g=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),e0=this._renderer.getActiveMipmapLevel(),n0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($g,t0,e0),this._renderer.xr.enabled=n0,t.scissorTest=!1,Xf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$g=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),e0=this._renderer.getActiveMipmapLevel(),n0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Lo,format:Ln,colorSpace:ja,depthBuffer:!1},s=tb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NR(a)),this._blurMaterial=LR(a,t,n)}return s}_compileMaterial(t){let n=new Nn(this._lodPlanes[0],t);this._renderer.compile(n,jg)}_sceneToCubeUV(t,n,i,s,a){let l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(jM),d.toneMapping=bs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new tc({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new Nn(new Co,S),u=!1,g=t.background;g?g.isColor&&(S.color.copy(g),t.background=null,u=!0):(S.color.copy(jM),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[y],a.y,a.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[y]));let E=this._cubeSize;Xf(s,v*E,y>2?E:0,E,E),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Nn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Xf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,jg)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=$M[(s-a-1)%$M.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new Nn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*lr-1),S=a/_,m=isFinite(a)?1+Math.floor(f*S):lr;m>lr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);let u=[],g=0;for(let w=0;w<lr;++w){let D=w/S,T=Math.exp(-D*D/2);u.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;let v=this._sizeLods[s],E=3*v*(s>y-zo?s-y+zo:0),C=4*(this._cubeSize-v);Xf(n,E,C,3*v,2*v),l.setRenderTarget(n),l.render(d,jg)}};function NR(e){let t=[],n=[],i=[],s=e,a=e-zo+1+QM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-zo?l=QM[r-e+zo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,S=3,m=2,u=1,g=new Float32Array(S*_*p),y=new Float32Array(m*_*p),v=new Float32Array(u*_*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,D=C>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];g.set(T,S*_*C),y.set(h,m*_*C);let b=[C,C,C,C,C,C];v.set(b,u*_*C)}let E=new fa;E.setAttribute("position",new Kn(g,S)),E.setAttribute("uv",new Kn(y,m)),E.setAttribute("faceIndex",new Kn(v,u)),t.push(E),s>zo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function tb(e,t,n){let i=new Wi(e,t,n);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xf(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function LR(e,t,n){let i=new Float32Array(lr),s=new z(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:f0(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function eb(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:f0(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function nb(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:f0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function f0(){return`

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
	`}function OR(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===rf||l===of,f=l===nr||l===ir;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new qf(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new qf(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function IR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PR(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,S=0;if(p!==null){let g=p.array;S=p.version;for(let y=0,v=g.length;y<v;y+=3){let E=g[y+0],C=g[y+1],w=g[y+2];h.push(E,C,C,w,w,E)}}else if(_!==void 0){let g=_.array;S=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){let E=y+0,C=y+1,w=y+2;h.push(E,C,C,w,w,E)}}else return;let m=new(Yg(h)?nc:ec)(h,1);m.version=S;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function f(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function zR(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,h*r,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(h,p,_,S){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function BR(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function FR(e,t,n){let i=new WeakMap,s=new Ae;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let T=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),S===!0&&(y=3);let v=o.attributes.position.count*y,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*E*4*d),w=new jl(C,v,E,d);w.type=pi,w.needsUpdate=!0;let D=y*4;for(let b=0;b<d;b++){let U=m[b],F=u[b],k=g[b],Y=v*E*4*b;for(let V=0;V<U.count;V++){let G=V*D;p===!0&&(s.fromBufferAttribute(U,V),C[Y+G+0]=s.x,C[Y+G+1]=s.y,C[Y+G+2]=s.z,C[Y+G+3]=0),_===!0&&(s.fromBufferAttribute(F,V),C[Y+G+4]=s.x,C[Y+G+5]=s.y,C[Y+G+6]=s.z,C[Y+G+7]=0),S===!0&&(s.fromBufferAttribute(k,V),C[Y+G+8]=s.x,C[Y+G+9]=s.y,C[Y+G+10]=s.z,C[Y+G+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new le(v,E)},i.set(o,h),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function HR(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Sb=new vn,ib=new lc(1,1),Mb=new jl,bb=new Ph,Tb=new sc,sb=[],ab=[],rb=new Float32Array(16),ob=new Float32Array(9),lb=new Float32Array(4);function Fo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=sb[s];if(a===void 0&&(a=new Float32Array(s),sb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Xe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Zf(e,t){let n=ab[t];n===void 0&&(n=new Int32Array(t),ab[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function VR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function GR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2fv(this.addr,t),Xe(n,t)}}function kR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ke(n,t))return;e.uniform3fv(this.addr,t),Xe(n,t)}}function XR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4fv(this.addr,t),Xe(n,t)}}function WR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xe(n,t)}else{if(ke(n,i))return;lb.set(i),e.uniformMatrix2fv(this.addr,!1,lb),Xe(n,i)}}function qR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xe(n,t)}else{if(ke(n,i))return;ob.set(i),e.uniformMatrix3fv(this.addr,!1,ob),Xe(n,i)}}function YR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xe(n,t)}else{if(ke(n,i))return;rb.set(i),e.uniformMatrix4fv(this.addr,!1,rb),Xe(n,i)}}function ZR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function JR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2iv(this.addr,t),Xe(n,t)}}function KR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3iv(this.addr,t),Xe(n,t)}}function QR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4iv(this.addr,t),Xe(n,t)}}function jR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $R(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2uiv(this.addr,t),Xe(n,t)}}function t2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3uiv(this.addr,t),Xe(n,t)}}function e2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4uiv(this.addr,t),Xe(n,t)}}function n2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(ib.compareFunction=Wg,a=ib):a=Sb,n.setTexture2D(t||a,s)}function i2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||bb,s)}function s2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Tb,s)}function a2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Mb,s)}function r2(e){switch(e){case 5126:return VR;case 35664:return GR;case 35665:return kR;case 35666:return XR;case 35674:return WR;case 35675:return qR;case 35676:return YR;case 5124:case 35670:return ZR;case 35667:case 35671:return JR;case 35668:case 35672:return KR;case 35669:case 35673:return QR;case 5125:return jR;case 36294:return $R;case 36295:return t2;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return a2}}function o2(e,t){e.uniform1fv(this.addr,t)}function l2(e,t){let n=Fo(t,this.size,2);e.uniform2fv(this.addr,n)}function c2(e,t){let n=Fo(t,this.size,3);e.uniform3fv(this.addr,n)}function u2(e,t){let n=Fo(t,this.size,4);e.uniform4fv(this.addr,n)}function h2(e,t){let n=Fo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function f2(e,t){let n=Fo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function d2(e,t){let n=Fo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function p2(e,t){e.uniform1iv(this.addr,t)}function m2(e,t){e.uniform2iv(this.addr,t)}function g2(e,t){e.uniform3iv(this.addr,t)}function _2(e,t){e.uniform4iv(this.addr,t)}function v2(e,t){e.uniform1uiv(this.addr,t)}function y2(e,t){e.uniform2uiv(this.addr,t)}function x2(e,t){e.uniform3uiv(this.addr,t)}function S2(e,t){e.uniform4uiv(this.addr,t)}function M2(e,t,n){let i=this.cache,s=t.length,a=Zf(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Xe(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Sb,a[r])}function b2(e,t,n){let i=this.cache,s=t.length,a=Zf(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Xe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||bb,a[r])}function T2(e,t,n){let i=this.cache,s=t.length,a=Zf(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Xe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Tb,a[r])}function E2(e,t,n){let i=this.cache,s=t.length,a=Zf(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Xe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Mb,a[r])}function A2(e){switch(e){case 5126:return o2;case 35664:return l2;case 35665:return c2;case 35666:return u2;case 35674:return h2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return p2;case 35667:case 35671:return m2;case 35668:case 35672:return g2;case 35669:case 35673:return _2;case 5125:return v2;case 36294:return y2;case 36295:return x2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return E2}}var s0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=r2(n.type)}},a0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=A2(n.type)}},r0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},i0=/(\w+)(\])?(\[|\.)?/g;function cb(e,t){e.seq.push(t),e.map[t.id]=t}function w2(e,t,n){let i=e.name,s=i.length;for(i0.lastIndex=0;;){let a=i0.exec(i),r=i0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){cb(n,c===void 0?new s0(o,e,t):new a0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new r0(o),cb(n,d)),n=d}}}var Bo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);w2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function ub(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var C2=37297,R2=0;function D2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var hb=new Pt;function U2(e){Zt._getMatrix(hb,Zt.workingColorSpace,e);let t=`mat3( ${hb.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Kl:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function fb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+D2(e.getShaderSource(t),o)}else return a}function N2(e,t){let n=U2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function L2(e,t){let n;switch(t){case wM:n="Linear";break;case CM:n="Reinhard";break;case RM:n="Cineon";break;case DM:n="ACESFilmic";break;case NM:n="AgX";break;case LM:n="Neutral";break;case UM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Wf=new z;function O2(){Zt.getLuminanceCoefficients(Wf);let e=Wf.x.toFixed(4),t=Wf.y.toFixed(4),n=Wf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yc).join(`
`)}function P2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function z2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function yc(e){return e!==""}function db(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B2=/^[ \t]*#include +<([\w\d./]+)>/gm;function o0(e){return e.replace(B2,H2)}var F2=new Map;function H2(e,t){let n=Ht[t];if(n===void 0){let i=F2.get(t);if(i!==void 0)n=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return o0(n)}var V2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mb(e){return e.replace(V2,G2)}function G2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function gb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ug?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===rM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function X2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function q2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ig:t="ENVMAP_BLENDING_MULTIPLY";break;case EM:t="ENVMAP_BLENDING_MIX";break;case AM:t="ENVMAP_BLENDING_ADD";break}return t}function Y2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Z2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=k2(n),c=X2(n),f=W2(n),d=q2(n),h=Y2(n),p=I2(n),_=P2(a),S=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yc).join(`
`),u.length>0&&(u+=`
`)):(m=[gb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yc).join(`
`),u=[gb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bs?"#define TONE_MAPPING":"",n.toneMapping!==bs?Ht.tonemapping_pars_fragment:"",n.toneMapping!==bs?L2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,N2("linearToOutputTexel",n.outputColorSpace),O2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yc).join(`
`)),r=o0(r),r=db(r,n),r=pb(r,n),o=o0(o),o=db(o,n),o=pb(o,n),r=mb(r),o=mb(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=g+m+r,v=g+u+o,E=ub(s,s.VERTEX_SHADER,y),C=ub(s,s.FRAGMENT_SHADER,v);s.attachShader(S,E),s.attachShader(S,C),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(U){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(E)||"",Y=s.getShaderInfoLog(C)||"",V=F.trim(),G=k.trim(),j=Y.trim(),H=!0,et=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,E,C);else{let ot=fb(s,E,"vertex"),yt=fb(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+ot+`
`+yt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||j==="")&&(et=!1);et&&(U.diagnostics={runnable:H,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:u}})}s.deleteShader(E),s.deleteShader(C),D=new Bo(s,S),T=z2(s,S)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,C2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=R2++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=C,this}var J2=0,l0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new c0(t),n.set(t,i)),i}},c0=class{constructor(t){this.id=J2++,this.code=t,this.usedTimes=0}};function K2(e,t,n,i,s,a,r){let o=new $l,l=new l0,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,U,F,k){let Y=F.fog,V=k.geometry,G=T.isMeshStandardMaterial?F.environment:null,j=(T.isMeshStandardMaterial?n:t).get(T.envMap||G),H=j&&j.mapping===fc?j.image.height:null,et=_[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=ot!==void 0?ot.length:0,Bt=0;V.morphAttributes.position!==void 0&&(Bt=1),V.morphAttributes.normal!==void 0&&(Bt=2),V.morphAttributes.color!==void 0&&(Bt=3);let ie,Se,te,Z;if(et){let ee=Ji[et];ie=ee.vertexShader,Se=ee.fragmentShader}else ie=T.vertexShader,Se=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),Z=l.getFragmentShaderID(T);let Q=e.getRenderTarget(),dt=e.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Yt=!!T.map,an=!!T.matcap,R=!!j,Me=!!T.aoMap,Ot=!!T.lightMap,Rt=!!T.bumpMap,gt=!!T.normalMap,be=!!T.displacementMap,_t=!!T.emissiveMap,Ft=!!T.metalnessMap,We=!!T.roughnessMap,Le=T.anisotropy>0,A=T.clearcoat>0,x=T.dispersion>0,I=T.iridescence>0,q=T.sheen>0,K=T.transmission>0,X=Le&&!!T.anisotropyMap,Mt=A&&!!T.clearcoatMap,st=A&&!!T.clearcoatNormalMap,vt=A&&!!T.clearcoatRoughnessMap,xt=I&&!!T.iridescenceMap,nt=I&&!!T.iridescenceThicknessMap,ut=q&&!!T.sheenColorMap,wt=q&&!!T.sheenRoughnessMap,St=!!T.specularMap,lt=!!T.specularColorMap,zt=!!T.specularIntensityMap,N=K&&!!T.transmissionMap,it=K&&!!T.thicknessMap,at=!!T.gradientMap,ft=!!T.alphaMap,$=T.alphaTest>0,J=!!T.alphaHash,mt=!!T.extensions,Lt=bs;T.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let pe={shaderID:et,shaderType:T.type,shaderName:T.name,vertexShader:ie,fragmentShader:Se,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ja,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:an,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:H,aoMap:Me,lightMap:Ot,bumpMap:Rt,normalMap:gt,displacementMap:h&&be,emissiveMap:_t,normalMapObjectSpace:gt&&T.normalMapType===BM,normalMapTangentSpace:gt&&T.normalMapType===zM,metalnessMap:Ft,roughnessMap:We,anisotropy:Le,anisotropyMap:X,clearcoat:A,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:vt,dispersion:x,iridescence:I,iridescenceMap:xt,iridescenceThicknessMap:nt,sheen:q,sheenColorMap:ut,sheenRoughnessMap:wt,specularMap:St,specularColorMap:lt,specularIntensityMap:zt,transmission:K,transmissionMap:N,thicknessMap:it,gradientMap:at,opaque:T.transparent===!1&&T.blending===Ka&&T.alphaToCoverage===!1,alphaMap:ft,alphaTest:$,alphaHash:J,combine:T.combine,mapUv:Yt&&S(T.map.channel),aoMapUv:Me&&S(T.aoMap.channel),lightMapUv:Ot&&S(T.lightMap.channel),bumpMapUv:Rt&&S(T.bumpMap.channel),normalMapUv:gt&&S(T.normalMap.channel),displacementMapUv:be&&S(T.displacementMap.channel),emissiveMapUv:_t&&S(T.emissiveMap.channel),metalnessMapUv:Ft&&S(T.metalnessMap.channel),roughnessMapUv:We&&S(T.roughnessMap.channel),anisotropyMapUv:X&&S(T.anisotropyMap.channel),clearcoatMapUv:Mt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:wt&&S(T.sheenRoughnessMap.channel),specularMapUv:St&&S(T.specularMap.channel),specularColorMapUv:lt&&S(T.specularColorMap.channel),specularIntensityMapUv:zt&&S(T.specularIntensityMap.channel),transmissionMapUv:N&&S(T.transmissionMap.channel),thicknessMapUv:it&&S(T.thicknessMap.channel),alphaMapUv:ft&&S(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(gt||Le),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Yt||ft),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Zt.getTransfer(T.map.colorSpace)===oe,decodeVideoTextureEmissive:_t&&T.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(T.emissiveMap.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===di,flipSided:T.side===yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:mt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&T.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function u(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(g(b,T),y(b,T),b.push(e.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function g(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){let b=_[T.type],U;if(b){let F=Ji[b];U=JM.clone(F.uniforms)}else U=T.uniforms;return U}function E(T,b){let U;for(let F=0,k=f.length;F<k;F++){let Y=f[F];if(Y.cacheKey===b){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new Z2(e,b,T,a),f.push(U)),U}function C(T){if(--T.usedTimes===0){let b=f.indexOf(T);f[b]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:E,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:D}}function Q2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function j2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function _b(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function vb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,_,S,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:S,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=S,u.group=m),t++,u}function o(d,h,p,_,S,m){let u=r(d,h,p,_,S,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,h,p,_,S,m){let u=r(d,h,p,_,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||j2),i.length>1&&i.sort(h||_b),s.length>1&&s.sort(h||_b)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function $2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new vb,e.set(i,[r])):s>=a.length?(r=new vb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function t3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new $t};break;case"SpotLight":n={position:new z,direction:new z,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new $t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":n={color:new $t,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function e3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var n3=0;function i3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function s3(e){let t=new t3,n=e3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,a=new Ge,r=new Ge;function o(c){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,g=0,y=0,v=0,E=0,C=0,w=0;c.sort(i3);for(let T=0,b=c.length;T<b;T++){let U=c[T],F=U.color,k=U.intensity,Y=U.distance,V=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=F.r*k,d+=F.g*k,h+=F.b*k;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],k);w++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,H=n.get(U);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=G,p++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=Y,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[S]=G;let j=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,j.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[S]=j.matrix,U.castShadow){let H=n.get(U);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=V,v++}S++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=G,m++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let j=U.shadow,H=n.get(U);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=U.shadow.matrix,y++}i.point[_]=G,_++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(k),G.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[u]=G,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==S||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==E||D.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,D.directionalLength=p,D.pointLength=_,D.spotLength=S,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=E,D.numLightProbes=w,i.version=n3++)}function l(c,f){let d=0,h=0,p=0,_=0,S=0,m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let y=c[u];if(y.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let v=i.hemi[S];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function yb(e){let t=new s3(e),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function a3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new yb(e),t.set(s,[o])):a>=r.length?(o=new yb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o3=`uniform sampler2D shadow_pass;
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
}`;function l3(e,t,n){let i=new oc,s=new le,a=new le,r=new Ae,o=new Hh({depthPacking:PM}),l=new Vh,c={},f=n.maxTextureSize,d={[ys]:yn,[yn]:ys,[di]:di},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:r3,fragmentShader:o3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new fa;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Nn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let u=this.type;this.render=function(C,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=e.getRenderTarget(),b=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Ms),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=u!==Yi&&this.type===Yi,Y=u===Yi&&this.type!==Yi;for(let V=0,G=C.length;V<G;V++){let j=C[V],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let et=H.getFrameExtents();if(s.multiply(et),a.copy(H.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/et.x),s.x=a.x*et.x,H.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/et.y),s.y=a.y*et.y,H.mapSize.y=a.y)),H.map===null||k===!0||Y===!0){let yt=this.type!==Yi?{minFilter:Dn,magFilter:Dn}:{};H.map!==null&&H.map.dispose(),H.map=new Wi(s.x,s.y,yt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();let ot=H.getViewportCount();for(let yt=0;yt<ot;yt++){let Bt=H.getViewport(yt);r.set(a.x*Bt.x,a.y*Bt.y,a.x*Bt.z,a.y*Bt.w),F.viewport(r),H.updateMatrices(j,yt),i=H.getFrustum(),v(w,D,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Yi&&g(H,D),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,b,U)};function g(C,w){let D=t.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(w,null,D,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(w,null,D,p,S,null)}function y(C,w,D,T){let b=null,U=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=b.uuid,k=w.uuid,Y=c[F];Y===void 0&&(Y={},c[F]=Y);let V=Y[k];V===void 0&&(V=b.clone(),Y[k]=V,w.addEventListener("dispose",E)),b=V}if(b.visible=w.visible,b.wireframe=w.wireframe,T===Yi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=e.properties.get(b);F.light=D}return b}function v(C,w,D,T,b){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let k=t.update(C),Y=C.material;if(Array.isArray(Y)){let V=k.groups;for(let G=0,j=V.length;G<j;G++){let H=V[G],et=Y[H.materialIndex];if(et&&et.visible){let ot=y(C,et,T,b);C.onBeforeShadow(e,C,w,D,k,ot,H),e.renderBufferDirect(D,null,k,ot,C,H),C.onAfterShadow(e,C,w,D,k,ot,H)}}}else if(Y.visible){let V=y(C,Y,T,b);C.onBeforeShadow(e,C,w,D,k,V,null),e.renderBufferDirect(D,null,k,V,C,null),C.onAfterShadow(e,C,w,D,k,V,null)}}let F=C.children;for(let k=0,Y=F.length;k<Y;k++)v(F[k],w,D,T,b)}function E(C){C.target.removeEventListener("dispose",E);for(let D in c){let T=c[D],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var c3={[jh]:$h,[tf]:sf,[ef]:af,[Qa]:nf,[$h]:jh,[sf]:tf,[af]:ef,[nf]:Qa};function u3(e,t){function n(){let N=!1,it=new Ae,at=null,ft=new Ae(0,0,0,0);return{setMask:function($){at!==$&&!N&&(e.colorMask($,$,$,$),at=$)},setLocked:function($){N=$},setClear:function($,J,mt,Lt,pe){pe===!0&&($*=Lt,J*=Lt,mt*=Lt),it.set($,J,mt,Lt),ft.equals(it)===!1&&(e.clearColor($,J,mt,Lt),ft.copy(it))},reset:function(){N=!1,at=null,ft.set(-1,0,0,0)}}}function i(){let N=!1,it=!1,at=null,ft=null,$=null;return{setReversed:function(J){if(it!==J){let mt=t.get("EXT_clip_control");J?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),it=J;let Lt=$;$=null,this.setClear(Lt)}},getReversed:function(){return it},setTest:function(J){J?Q(e.DEPTH_TEST):dt(e.DEPTH_TEST)},setMask:function(J){at!==J&&!N&&(e.depthMask(J),at=J)},setFunc:function(J){if(it&&(J=c3[J]),ft!==J){switch(J){case jh:e.depthFunc(e.NEVER);break;case $h:e.depthFunc(e.ALWAYS);break;case tf:e.depthFunc(e.LESS);break;case Qa:e.depthFunc(e.LEQUAL);break;case ef:e.depthFunc(e.EQUAL);break;case nf:e.depthFunc(e.GEQUAL);break;case sf:e.depthFunc(e.GREATER);break;case af:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ft=J}},setLocked:function(J){N=J},setClear:function(J){$!==J&&(it&&(J=1-J),e.clearDepth(J),$=J)},reset:function(){N=!1,at=null,ft=null,$=null,it=!1}}}function s(){let N=!1,it=null,at=null,ft=null,$=null,J=null,mt=null,Lt=null,pe=null;return{setTest:function(ee){N||(ee?Q(e.STENCIL_TEST):dt(e.STENCIL_TEST))},setMask:function(ee){it!==ee&&!N&&(e.stencilMask(ee),it=ee)},setFunc:function(ee,Ki,wi){(at!==ee||ft!==Ki||$!==wi)&&(e.stencilFunc(ee,Ki,wi),at=ee,ft=Ki,$=wi)},setOp:function(ee,Ki,wi){(J!==ee||mt!==Ki||Lt!==wi)&&(e.stencilOp(ee,Ki,wi),J=ee,mt=Ki,Lt=wi)},setLocked:function(ee){N=ee},setClear:function(ee){pe!==ee&&(e.clearStencil(ee),pe=ee)},reset:function(){N=!1,it=null,at=null,ft=null,$=null,J=null,mt=null,Lt=null,pe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,y=null,v=null,E=null,C=null,w=new $t(0,0,0),D=0,T=!1,b=null,U=null,F=null,k=null,Y=null,V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=j>=2);let et=null,ot={},yt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),ie=new Ae().fromArray(yt),Se=new Ae().fromArray(Bt);function te(N,it,at,ft){let $=new Uint8Array(4),J=e.createTexture();e.bindTexture(N,J),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let mt=0;mt<at;mt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,ft,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(it+mt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return J}let Z={};Z[e.TEXTURE_2D]=te(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(Qa),Rt(!1),gt(Dg),Q(e.CULL_FACE),Me(Ms);function Q(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function dt(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Ut(N,it){return d[N]!==it?(e.bindFramebuffer(N,it),d[N]=it,N===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=it),N===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(N,it){let at=p,ft=!1;if(N){at=h.get(it),at===void 0&&(at=[],h.set(it,at));let $=N.textures;if(at.length!==$.length||at[0]!==e.COLOR_ATTACHMENT0){for(let J=0,mt=$.length;J<mt;J++)at[J]=e.COLOR_ATTACHMENT0+J;at.length=$.length,ft=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,ft=!0);ft&&e.drawBuffers(at)}function Yt(N){return _!==N?(e.useProgram(N),_=N,!0):!1}let an={[ua]:e.FUNC_ADD,[lM]:e.FUNC_SUBTRACT,[cM]:e.FUNC_REVERSE_SUBTRACT};an[uM]=e.MIN,an[hM]=e.MAX;let R={[fM]:e.ZERO,[dM]:e.ONE,[pM]:e.SRC_COLOR,[Ch]:e.SRC_ALPHA,[xM]:e.SRC_ALPHA_SATURATE,[vM]:e.DST_COLOR,[gM]:e.DST_ALPHA,[mM]:e.ONE_MINUS_SRC_COLOR,[Rh]:e.ONE_MINUS_SRC_ALPHA,[yM]:e.ONE_MINUS_DST_COLOR,[_M]:e.ONE_MINUS_DST_ALPHA,[SM]:e.CONSTANT_COLOR,[MM]:e.ONE_MINUS_CONSTANT_COLOR,[bM]:e.CONSTANT_ALPHA,[TM]:e.ONE_MINUS_CONSTANT_ALPHA};function Me(N,it,at,ft,$,J,mt,Lt,pe,ee){if(N===Ms){S===!0&&(dt(e.BLEND),S=!1);return}if(S===!1&&(Q(e.BLEND),S=!0),N!==oM){if(N!==m||ee!==T){if((u!==ua||v!==ua)&&(e.blendEquation(e.FUNC_ADD),u=ua,v=ua),ee)switch(N){case Ka:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ng:e.blendFunc(e.ONE,e.ONE);break;case Lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Og:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ka:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ng:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Lg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Og:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,y=null,E=null,C=null,w.set(0,0,0),D=0,m=N,T=ee}return}$=$||it,J=J||at,mt=mt||ft,(it!==u||$!==v)&&(e.blendEquationSeparate(an[it],an[$]),u=it,v=$),(at!==g||ft!==y||J!==E||mt!==C)&&(e.blendFuncSeparate(R[at],R[ft],R[J],R[mt]),g=at,y=ft,E=J,C=mt),(Lt.equals(w)===!1||pe!==D)&&(e.blendColor(Lt.r,Lt.g,Lt.b,pe),w.copy(Lt),D=pe),m=N,T=!1}function Ot(N,it){N.side===di?dt(e.CULL_FACE):Q(e.CULL_FACE);let at=N.side===yn;it&&(at=!at),Rt(at),N.blending===Ka&&N.transparent===!1?Me(Ms):Me(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let ft=N.stencilWrite;o.setTest(ft),ft&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(N){b!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),b=N)}function gt(N){N!==sM?(Q(e.CULL_FACE),N!==U&&(N===Dg?e.cullFace(e.BACK):N===aM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):dt(e.CULL_FACE),U=N}function be(N){N!==F&&(G&&e.lineWidth(N),F=N)}function _t(N,it,at){N?(Q(e.POLYGON_OFFSET_FILL),(k!==it||Y!==at)&&(e.polygonOffset(it,at),k=it,Y=at)):dt(e.POLYGON_OFFSET_FILL)}function Ft(N){N?Q(e.SCISSOR_TEST):dt(e.SCISSOR_TEST)}function We(N){N===void 0&&(N=e.TEXTURE0+V-1),et!==N&&(e.activeTexture(N),et=N)}function Le(N,it,at){at===void 0&&(et===null?at=e.TEXTURE0+V-1:at=et);let ft=ot[at];ft===void 0&&(ft={type:void 0,texture:void 0},ot[at]=ft),(ft.type!==N||ft.texture!==it)&&(et!==at&&(e.activeTexture(at),et=at),e.bindTexture(N,it||Z[N]),ft.type=N,ft.texture=it)}function A(){let N=ot[et];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(N){ie.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function wt(N){Se.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Se.copy(N))}function St(N,it){let at=c.get(it);at===void 0&&(at=new WeakMap,c.set(it,at));let ft=at.get(N);ft===void 0&&(ft=e.getUniformBlockIndex(it,N.name),at.set(N,ft))}function lt(N,it){let ft=c.get(it).get(N);l.get(it)!==ft&&(e.uniformBlockBinding(it,ft,N.__bindingPointIndex),l.set(it,ft))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},et=null,ot={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,y=null,v=null,E=null,C=null,w=new $t(0,0,0),D=0,T=!1,b=null,U=null,F=null,k=null,Y=null,ie.set(0,0,e.canvas.width,e.canvas.height),Se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:dt,bindFramebuffer:Ut,drawBuffers:bt,useProgram:Yt,setBlending:Me,setMaterial:Ot,setFlipSided:Rt,setCullFace:gt,setLineWidth:be,setPolygonOffset:_t,setScissorTest:Ft,activeTexture:We,bindTexture:Le,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:xt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:vt,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:ut,viewport:wt,reset:zt}}function h3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):To("canvas")}function S(A,x,I){let q=1,K=Le(A);if((K.width>I||K.height>I)&&(q=I/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(q*K.width),Mt=Math.floor(q*K.height);d===void 0&&(d=_(X,Mt));let st=x?_(X,Mt):d;return st.width=X,st.height=Mt,st.getContext("2d").drawImage(A,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Mt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,x,I,q,K=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===e.RED&&(I===e.FLOAT&&(X=e.R32F),I===e.HALF_FLOAT&&(X=e.R16F),I===e.UNSIGNED_BYTE&&(X=e.R8)),x===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(X=e.R8UI),I===e.UNSIGNED_SHORT&&(X=e.R16UI),I===e.UNSIGNED_INT&&(X=e.R32UI),I===e.BYTE&&(X=e.R8I),I===e.SHORT&&(X=e.R16I),I===e.INT&&(X=e.R32I)),x===e.RG&&(I===e.FLOAT&&(X=e.RG32F),I===e.HALF_FLOAT&&(X=e.RG16F),I===e.UNSIGNED_BYTE&&(X=e.RG8)),x===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(X=e.RG8UI),I===e.UNSIGNED_SHORT&&(X=e.RG16UI),I===e.UNSIGNED_INT&&(X=e.RG32UI),I===e.BYTE&&(X=e.RG8I),I===e.SHORT&&(X=e.RG16I),I===e.INT&&(X=e.RG32I)),x===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(X=e.RGB8UI),I===e.UNSIGNED_SHORT&&(X=e.RGB16UI),I===e.UNSIGNED_INT&&(X=e.RGB32UI),I===e.BYTE&&(X=e.RGB8I),I===e.SHORT&&(X=e.RGB16I),I===e.INT&&(X=e.RGB32I)),x===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),I===e.UNSIGNED_INT&&(X=e.RGBA32UI),I===e.BYTE&&(X=e.RGBA8I),I===e.SHORT&&(X=e.RGBA16I),I===e.INT&&(X=e.RGBA32I)),x===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),x===e.RGBA){let Mt=K?Kl:Zt.getTransfer(q);I===e.FLOAT&&(X=e.RGBA32F),I===e.HALF_FLOAT&&(X=e.RGBA16F),I===e.UNSIGNED_BYTE&&(X=Mt===oe?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,x){let I;return A?x===null||x===ga||x===Oo?I=e.DEPTH24_STENCIL8:x===pi?I=e.DEPTH32F_STENCIL8:x===No&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ga||x===Oo?I=e.DEPTH_COMPONENT24:x===pi?I=e.DEPTH_COMPONENT32F:x===No&&(I=e.DEPTH_COMPONENT16),I}function E(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&f.delete(x)}function w(A){let x=A.target;x.removeEventListener("dispose",w),b(x)}function D(A){let x=i.get(A);if(x.__webglInit===void 0)return;let I=A.source,q=h.get(I);if(q){let K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(A),Object.keys(q).length===0&&h.delete(I)}i.remove(A)}function T(A){let x=i.get(A);e.deleteTexture(x.__webglTexture);let I=A.source,q=h.get(I);delete q[x.__cacheKey],r.memory.textures--}function b(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)e.deleteFramebuffer(x.__webglFramebuffer[q][K]);else e.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)e.deleteFramebuffer(x.__webglFramebuffer[q]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=A.textures;for(let q=0,K=I.length;q<K;q++){let X=i.get(I[q]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(I[q])}i.remove(A)}let U=0;function F(){U=0}function k(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function V(A,x){let I=i.get(A);if(A.isVideoTexture&&Ft(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&I.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(I,A,x);return}}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+x)}function G(A,x){let I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){Z(I,A,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+x)}function j(A,x){let I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){Z(I,A,x);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+x)}function H(A,x){let I=i.get(A);if(A.version>0&&I.__version!==A.version){Q(I,A,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+x)}let et={[Dh]:e.REPEAT,[Ti]:e.CLAMP_TO_EDGE,[Uh]:e.MIRRORED_REPEAT},ot={[Dn]:e.NEAREST,[OM]:e.NEAREST_MIPMAP_NEAREST,[dc]:e.NEAREST_MIPMAP_LINEAR,[Un]:e.LINEAR,[lf]:e.LINEAR_MIPMAP_NEAREST,[ma]:e.LINEAR_MIPMAP_LINEAR},yt={[FM]:e.NEVER,[WM]:e.ALWAYS,[HM]:e.LESS,[Wg]:e.LEQUAL,[VM]:e.EQUAL,[XM]:e.GEQUAL,[GM]:e.GREATER,[kM]:e.NOTEQUAL};function Bt(A,x){if(x.type===pi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===lf||x.magFilter===dc||x.magFilter===ma||x.minFilter===Un||x.minFilter===lf||x.minFilter===dc||x.minFilter===ma)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,et[x.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,et[x.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,et[x.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ot[x.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dn||x.minFilter!==dc&&x.minFilter!==ma||x.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ie(A,x){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let q=x.source,K=h.get(q);K===void 0&&(K={},h.set(q,K));let X=Y(x);if(X!==A.__cacheKey){K[X]===void 0&&(K[X]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),K[X].usedTimes++;let Mt=K[A.__cacheKey];Mt!==void 0&&(K[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(x)),A.__cacheKey=X,A.__webglTexture=K[X].texture}return I}function Se(A,x,I){return Math.floor(Math.floor(A/I)/x)}function te(A,x,I,q){let X=A.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,I,q,x.data);else{X.sort((nt,ut)=>nt.start-ut.start);let Mt=0;for(let nt=1;nt<X.length;nt++){let ut=X[Mt],wt=X[nt],St=ut.start+ut.count,lt=Se(wt.start,x.width,4),zt=Se(ut.start,x.width,4);wt.start<=St+1&&lt===zt&&Se(wt.start+wt.count-1,x.width,4)===lt?ut.count=Math.max(ut.count,wt.start+wt.count-ut.start):(++Mt,X[Mt]=wt)}X.length=Mt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),vt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let nt=0,ut=X.length;nt<ut;nt++){let wt=X[nt],St=Math.floor(wt.start/4),lt=Math.ceil(wt.count/4),zt=St%x.width,N=Math.floor(St/x.width),it=lt,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,zt,N,it,at,I,q,x.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Z(A,x,I){let q=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=e.TEXTURE_3D);let K=ie(A,x),X=x.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+I);let Mt=i.get(X);if(X.version!==Mt.__version||K===!0){n.activeTexture(e.TEXTURE0+I);let st=Zt.getPrimaries(Zt.workingColorSpace),vt=x.colorSpace===Ts?null:Zt.getPrimaries(x.colorSpace),xt=x.colorSpace===Ts||st===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let nt=S(x.image,!1,s.maxTextureSize);nt=We(x,nt);let ut=a.convert(x.format,x.colorSpace),wt=a.convert(x.type),St=y(x.internalFormat,ut,wt,x.colorSpace,x.isVideoTexture);Bt(q,x);let lt,zt=x.mipmaps,N=x.isVideoTexture!==!0,it=Mt.__version===void 0||K===!0,at=X.dataReady,ft=E(x,nt);if(x.isDepthTexture)St=v(x.format===Io,x.type),it&&(N?n.texStorage2D(e.TEXTURE_2D,1,St,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,St,nt.width,nt.height,0,ut,wt,null));else if(x.isDataTexture)if(zt.length>0){N&&it&&n.texStorage2D(e.TEXTURE_2D,ft,St,zt[0].width,zt[0].height);for(let $=0,J=zt.length;$<J;$++)lt=zt[$],N?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,wt,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,wt,lt.data);x.generateMipmaps=!1}else N?(it&&n.texStorage2D(e.TEXTURE_2D,ft,St,nt.width,nt.height),at&&te(x,nt,ut,wt)):n.texImage2D(e.TEXTURE_2D,0,St,nt.width,nt.height,0,ut,wt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,St,zt[0].width,zt[0].height,nt.depth);for(let $=0,J=zt.length;$<J;$++)if(lt=zt[$],x.format!==Ln)if(ut!==null)if(N){if(at)if(x.layerUpdates.size>0){let mt=Qg(lt.width,lt.height,x.format,x.type);for(let Lt of x.layerUpdates){let pe=lt.data.subarray(Lt*mt/lt.data.BYTES_PER_ELEMENT,(Lt+1)*mt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Lt,lt.width,lt.height,1,ut,pe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,nt.depth,ut,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,nt.depth,ut,wt,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,nt.depth,0,ut,wt,lt.data)}else{N&&it&&n.texStorage2D(e.TEXTURE_2D,ft,St,zt[0].width,zt[0].height);for(let $=0,J=zt.length;$<J;$++)lt=zt[$],x.format!==Ln?ut!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,wt,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,wt,lt.data)}else if(x.isDataArrayTexture)if(N){if(it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,St,nt.width,nt.height,nt.depth),at)if(x.layerUpdates.size>0){let $=Qg(nt.width,nt.height,x.format,x.type);for(let J of x.layerUpdates){let mt=nt.data.subarray(J*$/nt.data.BYTES_PER_ELEMENT,(J+1)*$/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ut,wt,mt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,wt,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,ut,wt,nt.data);else if(x.isData3DTexture)N?(it&&n.texStorage3D(e.TEXTURE_3D,ft,St,nt.width,nt.height,nt.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,wt,nt.data)):n.texImage3D(e.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,ut,wt,nt.data);else if(x.isFramebufferTexture){if(it)if(N)n.texStorage2D(e.TEXTURE_2D,ft,St,nt.width,nt.height);else{let $=nt.width,J=nt.height;for(let mt=0;mt<ft;mt++)n.texImage2D(e.TEXTURE_2D,mt,St,$,J,0,ut,wt,null),$>>=1,J>>=1}}else if(zt.length>0){if(N&&it){let $=Le(zt[0]);n.texStorage2D(e.TEXTURE_2D,ft,St,$.width,$.height)}for(let $=0,J=zt.length;$<J;$++)lt=zt[$],N?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ut,wt,lt):n.texImage2D(e.TEXTURE_2D,$,St,ut,wt,lt);x.generateMipmaps=!1}else if(N){if(it){let $=Le(nt);n.texStorage2D(e.TEXTURE_2D,ft,St,$.width,$.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,wt,nt)}else n.texImage2D(e.TEXTURE_2D,0,St,ut,wt,nt);m(x)&&u(q),Mt.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,I){if(x.image.length!==6)return;let q=ie(A,x),K=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+I);let X=i.get(K);if(K.version!==X.__version||q===!0){n.activeTexture(e.TEXTURE0+I);let Mt=Zt.getPrimaries(Zt.workingColorSpace),st=x.colorSpace===Ts?null:Zt.getPrimaries(x.colorSpace),vt=x.colorSpace===Ts||Mt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let J=0;J<6;J++)!xt&&!nt?ut[J]=S(x.image[J],!0,s.maxCubemapSize):ut[J]=nt?x.image[J].image:x.image[J],ut[J]=We(x,ut[J]);let wt=ut[0],St=a.convert(x.format,x.colorSpace),lt=a.convert(x.type),zt=y(x.internalFormat,St,lt,x.colorSpace),N=x.isVideoTexture!==!0,it=X.__version===void 0||q===!0,at=K.dataReady,ft=E(x,wt);Bt(e.TEXTURE_CUBE_MAP,x);let $;if(xt){N&&it&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,zt,wt.width,wt.height);for(let J=0;J<6;J++){$=ut[J].mipmaps;for(let mt=0;mt<$.length;mt++){let Lt=$[mt];x.format!==Ln?St!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,Lt.width,Lt.height,St,Lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,zt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,Lt.width,Lt.height,St,lt,Lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,zt,Lt.width,Lt.height,0,St,lt,Lt.data)}}}else{if($=x.mipmaps,N&&it){$.length>0&&ft++;let J=Le(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,zt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ut[J].width,ut[J].height,St,lt,ut[J].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,ut[J].width,ut[J].height,0,St,lt,ut[J].data);for(let mt=0;mt<$.length;mt++){let pe=$[mt].image[J].image;N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,pe.width,pe.height,St,lt,pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,zt,pe.width,pe.height,0,St,lt,pe.data)}}else{N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,lt,ut[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,St,lt,ut[J]);for(let mt=0;mt<$.length;mt++){let Lt=$[mt];N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,St,lt,Lt.image[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,zt,St,lt,Lt.image[J])}}}m(x)&&u(e.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function dt(A,x,I,q,K,X){let Mt=a.convert(I.format,I.colorSpace),st=a.convert(I.type),vt=y(I.internalFormat,Mt,st,I.colorSpace),xt=i.get(x),nt=i.get(I);if(nt.__renderTarget=x,!xt.__hasExternalTextures){let ut=Math.max(1,x.width>>X),wt=Math.max(1,x.height>>X);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,X,vt,ut,wt,x.depth,0,Mt,st,null):n.texImage2D(K,X,vt,ut,wt,0,Mt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),_t(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,K,nt.__webglTexture,0,be(x)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,K,nt.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(A,x,I){if(e.bindRenderbuffer(e.RENDERBUFFER,A),x.depthBuffer){let q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=v(x.stencilBuffer,K),Mt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=be(x);_t(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,X,x.width,x.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,X,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,X,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,A)}else{let q=x.textures;for(let K=0;K<q.length;K++){let X=q[K],Mt=a.convert(X.format,X.colorSpace),st=a.convert(X.type),vt=y(X.internalFormat,Mt,st,X.colorSpace),xt=be(x);I&&_t(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,vt,x.width,x.height):_t(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,vt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,vt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let K=q.__webglTexture,X=be(x);if(x.depthTexture.format===bo)_t(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(x.depthTexture.format===Io)_t(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Yt(A){let x=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let q=A.texture.mipmaps;q&&q.length>0?bt(x.__webglFramebuffer[0],A):bt(x.__webglFramebuffer,A)}else if(I){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=e.createRenderbuffer(),Ut(x.__webglDepthbuffer[q],A,!1);else{let K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,X)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ut(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function an(A,x,I){let q=i.get(A);x!==void 0&&dt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Yt(A)}function R(A){let x=A.texture,I=i.get(A),q=i.get(x);A.addEventListener("dispose",w);let K=A.textures,X=A.isWebGLCubeRenderTarget===!0,Mt=K.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=x.version,r.memory.textures++),X){I.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[st]=[];for(let vt=0;vt<x.mipmaps.length;vt++)I.__webglFramebuffer[st][vt]=e.createFramebuffer()}else I.__webglFramebuffer[st]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)I.__webglFramebuffer[st]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let st=0,vt=K.length;st<vt;st++){let xt=i.get(K[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&_t(A)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){let vt=K[st];I.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[st]);let xt=a.convert(vt.format,vt.colorSpace),nt=a.convert(vt.type),ut=y(vt.internalFormat,xt,nt,vt.colorSpace,A.isXRRenderTarget===!0),wt=be(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,ut,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,I.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(I.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)dt(I.__webglFramebuffer[st][vt],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt);else dt(I.__webglFramebuffer[st],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let st=0,vt=K.length;st<vt;st++){let xt=K[st],nt=i.get(xt),ut=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,nt.__webglTexture),Bt(ut,xt),dt(I.__webglFramebuffer,A,xt,e.COLOR_ATTACHMENT0+st,ut,0),m(xt)&&u(ut)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,q.__webglTexture),Bt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)dt(I.__webglFramebuffer[vt],A,x,e.COLOR_ATTACHMENT0,st,vt);else dt(I.__webglFramebuffer,A,x,e.COLOR_ATTACHMENT0,st,0);m(x)&&u(st),n.unbindTexture()}A.depthBuffer&&Yt(A)}function Me(A){let x=A.textures;for(let I=0,q=x.length;I<q;I++){let K=x[I];if(m(K)){let X=g(A),Mt=i.get(K).__webglTexture;n.bindTexture(X,Mt),u(X),n.unbindTexture()}}}let Ot=[],Rt=[];function gt(A){if(A.samples>0){if(_t(A)===!1){let x=A.textures,I=A.width,q=A.height,K=e.COLOR_BUFFER_BIT,X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(A),st=x.length>1;if(st)for(let xt=0;xt<x.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let vt=A.texture.mipmaps;vt&&vt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let nt=i.get(x[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,nt,0)}e.blitFramebuffer(0,0,I,q,0,0,I,q,K,e.NEAREST),l===!0&&(Ot.length=0,Rt.length=0,Ot.push(e.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ot.push(X),Rt.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Rt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<x.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let nt=i.get(x[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function be(A){return Math.min(s.maxSamples,A.samples)}function _t(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ft(A){let x=r.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function We(A,x){let I=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==ja&&I!==Ts&&(Zt.getTransfer(I)===oe?(q!==Ln||K!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=an,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=_t}function f3(e,t){function n(i,s=Ts){let a,r=Zt.getTransfer(s);if(i===Zi)return e.UNSIGNED_BYTE;if(i===uf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===hf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Fg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Hg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===zg)return e.BYTE;if(i===Bg)return e.SHORT;if(i===No)return e.UNSIGNED_SHORT;if(i===cf)return e.INT;if(i===ga)return e.UNSIGNED_INT;if(i===pi)return e.FLOAT;if(i===Lo)return e.HALF_FLOAT;if(i===Vg)return e.ALPHA;if(i===Gg)return e.RGB;if(i===Ln)return e.RGBA;if(i===bo)return e.DEPTH_COMPONENT;if(i===Io)return e.DEPTH_STENCIL;if(i===kg)return e.RED;if(i===ff)return e.RED_INTEGER;if(i===Xg)return e.RG;if(i===df)return e.RG_INTEGER;if(i===pf)return e.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===_f||i===vf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===mf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===xf||i===Sf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===yf||i===xf)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Sf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mf||i===bf||i===Tf||i===Ef||i===Af||i===wf||i===Cf||i===Rf||i===Df||i===Uf||i===Nf||i===Lf||i===Of||i===If)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Mf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Af)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Df)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===If)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pf||i===zf||i===Bf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Pf)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ff||i===Hf||i===Vf||i===Gf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ff)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var d3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p3=`
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

}`,u0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new cc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Qn({vertexShader:d3,fragmentShader:p3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},h0=class extends xs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null,S=typeof XRWebGLBinding<"u",m=new u0,u={},g=n.getContextAttributes(),y=null,v=null,E=[],C=[],w=new le,D=null,T=new Rn;T.viewport=new Ae;let b=new Rn;b.viewport=new Ae;let U=[T,b],F=new Qh,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=E[Z];return Q===void 0&&(Q=new Ro,E[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=E[Z];return Q===void 0&&(Q=new Ro,E[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=E[Z];return Q===void 0&&(Q=new Ro,E[Z]=Q),Q.getHandSpace()};function V(Z){let Q=C.indexOf(Z.inputSource);if(Q===-1)return;let dt=E[Q];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,c||r),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<E.length;Z++){let Q=C[Z];Q!==null&&(C[Z]=null,E[Z].disconnect(Q))}k=null,Y=null,m.reset();for(let Z in u)delete u[Z];t.setRenderTarget(y),p=null,h=null,d=null,s=null,v=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Ut=null,bt=null;g.depth&&(bt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=g.stencil?Io:bo,Ut=g.stencil?Oo:ga);let Yt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Yt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Wi(h.textureWidth,h.textureHeight,{format:Ln,type:Zi,depthTexture:new lc(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Wi(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Z){for(let Q=0;Q<Z.removed.length;Q++){let dt=Z.removed[Q],Ut=C.indexOf(dt);Ut>=0&&(C[Ut]=null,E[Ut].disconnect(dt))}for(let Q=0;Q<Z.added.length;Q++){let dt=Z.added[Q],Ut=C.indexOf(dt);if(Ut===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=C.length){C.push(dt),Ut=Yt;break}else if(C[Yt]===null){C[Yt]=dt,Ut=Yt;break}if(Ut===-1)break}let bt=E[Ut];bt&&bt.connect(dt)}}let H=new z,et=new z;function ot(Z,Q,dt){H.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(dt.matrixWorld);let Ut=H.distanceTo(et),bt=Q.projectionMatrix.elements,Yt=dt.projectionMatrix.elements,an=bt[14]/(bt[10]-1),R=bt[14]/(bt[10]+1),Me=(bt[9]+1)/bt[5],Ot=(bt[9]-1)/bt[5],Rt=(bt[8]-1)/bt[0],gt=(Yt[8]+1)/Yt[0],be=an*Rt,_t=an*gt,Ft=Ut/(-Rt+gt),We=Ft*-Rt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Le=an+Ft,A=R+Ft,x=be-We,I=_t+(Ut-We),q=Me*R/A*Le,K=Ot*R/A*Le;Z.projectionMatrix.makePerspective(x,I,q,K,Le,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,dt=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),F.near=b.near=T.near=Q,F.far=b.far=T.far=dt,(k!==F.near||Y!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,Y=F.far),F.layers.mask=Z.layers.mask|6,T.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Ut=Z.parent,bt=F.cameras;yt(F,Ut);for(let Yt=0;Yt<bt.length;Yt++)yt(bt[Yt],Ut);bt.length===2?ot(F,T,b):F.projectionMatrix.copy(T.projectionMatrix),Bt(Z,F,Ut)};function Bt(Z,Q,dt){dt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return u[Z]};let ie=null;function Se(Z,Q){if(f=Q.getViewerPose(c||r),_=Q,f!==null){let dt=f.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Ut=!1;dt.length!==F.cameras.length&&(F.cameras.length=0,Ut=!0);for(let R=0;R<dt.length;R++){let Me=dt[R],Ot=null;if(p!==null)Ot=p.getViewport(Me);else{let gt=d.getViewSubImage(h,Me);Ot=gt.viewport,R===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let Rt=U[R];Rt===void 0&&(Rt=new Rn,Rt.layers.enable(R),Rt.viewport=new Ae,U[R]=Rt),Rt.matrix.fromArray(Me.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Me.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),R===0&&(F.matrix.copy(Rt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ut===!0&&F.cameras.push(Rt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let R=d.getDepthInformation(dt[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(bt&&bt.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let R=0;R<dt.length;R++){let Me=dt[R].camera;if(Me){let Ot=u[Me];Ot||(Ot=new cc,u[Me]=Ot);let Rt=d.getCameraImage(Me);Ot.sourceTexture=Rt}}}}for(let dt=0;dt<E.length;dt++){let Ut=C[dt],bt=E[dt];Ut!==null&&bt!==void 0&&bt.update(Ut,Q,c||r)}ie&&ie(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}let te=new xb;te.setAnimationLoop(Se),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},rr=new qi,m3=new Ge;function g3(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Zg(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),f(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,rr.copy(v),rr.x*=-1,rr.y*=-1,rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),m.envMapRotation.value.setFromMatrix4(m3.makeRotationFromEuler(rr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let v=y.program;i.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(_(g),v=f(g),s[g.id]=v,g.addEventListener("dispose",m));let E=y.program;i.updateUBOMapping(g,E);let C=t.render.frame;a[g.id]!==C&&(h(g),a[g.id]=C)}function f(g){let y=d();g.__bindingPointIndex=y;let v=e.createBuffer(),E=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,E,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,v),v}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){let y=s[g.id],v=g.uniforms,E=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let C=0,w=v.length;C<w;C++){let D=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,b=D.length;T<b;T++){let U=D[T];if(p(U,C,T,E)===!0){let F=U.__offset,k=Array.isArray(U.value)?U.value:[U.value],Y=0;for(let V=0;V<k.length;V++){let G=k[V],j=S(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,F+Y,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,v,E){let C=g.value,w=y+"_"+v;if(E[w]===void 0)return typeof C=="number"||typeof C=="boolean"?E[w]=C:E[w]=C.clone(),!0;{let D=E[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return E[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(g){let y=g.uniforms,v=0,E=16;for(let w=0,D=y.length;w<D;w++){let T=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,U=T.length;b<U;b++){let F=T[b],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,V=k.length;Y<V;Y++){let G=k[Y],j=S(G),H=v%E,et=H%j.boundary,ot=H+et;v+=et,ot!==0&&E-ot<j.storage&&(v+=E-ot),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=j.storage}}}let C=v%E;return C>0&&(v+=E-C),g.__size=v,g.__cache={},this}function S(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Yf=class{constructor(t={}){let{canvas:n=qM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=Jn;let C=0,w=0,D=null,T=-1,b=null,U=new Ae,F=new Ae,k=null,Y=new $t(0),V=0,G=n.width,j=n.height,H=1,et=null,ot=null,yt=new Ae(0,0,G,j),Bt=new Ae(0,0,G,j),ie=!1,Se=new oc,te=!1,Z=!1,Q=new Ge,dt=new z,Ut=new Ae,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function an(){return D===null?H:1}let R=i;function Me(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",$,!1),R===null){let L="webgl2";if(R=Me(L,M),R===null)throw Me(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ot,Rt,gt,be,_t,Ft,We,Le,A,x,I,q,K,X,Mt,st,vt,xt,nt,ut,wt,St,lt,zt;function N(){Ot=new IR(R),Ot.init(),St=new f3(R,Ot),Rt=new CR(R,Ot,t,St),gt=new u3(R,Ot),Rt.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),be=new BR(R),_t=new Q2,Ft=new h3(R,Ot,gt,_t,Rt,St,be),We=new DR(v),Le=new OR(v),A=new XA(R),lt=new AR(R,A),x=new PR(R,A,be,lt),I=new HR(R,x,A,be),nt=new FR(R,Rt,Ft),st=new RR(_t),q=new K2(v,We,Le,Ot,Rt,lt,st),K=new g3(v,_t),X=new $2,Mt=new a3(Ot),xt=new ER(v,We,Le,gt,I,p,l),vt=new l3(v,I,Rt),zt=new _3(R,be,Rt,gt),ut=new wR(R,Ot,be),wt=new zR(R,Ot,be),be.programs=q.programs,v.capabilities=Rt,v.extensions=Ot,v.properties=_t,v.renderLists=X,v.shadowMap=vt,v.state=gt,v.info=be}N();let it=new h0(v,R);this.xr=it,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=Ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(G,j,!1))},this.getSize=function(M){return M.set(G,j)},this.setSize=function(M,L,P=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,j=L,n.width=Math.floor(M*H),n.height=Math.floor(L*H),P===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(G*H,j*H).floor()},this.setDrawingBufferSize=function(M,L,P){G=M,j=L,H=P,n.width=Math.floor(M*P),n.height=Math.floor(L*P),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,L,P,B){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,L,P,B),gt.viewport(U.copy(yt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,L,P,B){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,L,P,B),gt.scissor(F.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){gt.setScissorTest(ie=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,P=!0){let B=0;if(M){let O=!1;if(D!==null){let tt=D.texture.format;O=tt===pf||tt===df||tt===ff}if(O){let tt=D.texture.type,ct=tt===Zi||tt===ga||tt===No||tt===Oo||tt===uf||tt===hf,pt=xt.getClearColor(),ht=xt.getClearAlpha(),At=pt.r,Dt=pt.g,Tt=pt.b;ct?(_[0]=At,_[1]=Dt,_[2]=Tt,_[3]=ht,R.clearBufferuiv(R.COLOR,0,_)):(S[0]=At,S[1]=Dt,S[2]=Tt,S[3]=ht,R.clearBufferiv(R.COLOR,0,S))}else B|=R.COLOR_BUFFER_BIT}L&&(B|=R.DEPTH_BUFFER_BIT),P&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",$,!1),xt.dispose(),X.dispose(),Mt.dispose(),_t.dispose(),We.dispose(),Le.dispose(),I.dispose(),lt.dispose(),zt.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",wi),it.removeEventListener("sessionend",d0),_a.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=be.autoReset,L=vt.enabled,P=vt.autoUpdate,B=vt.needsUpdate,O=vt.type;N(),be.autoReset=M,vt.enabled=L,vt.autoUpdate=P,vt.needsUpdate=B,vt.type=O}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function J(M){let L=M.target;L.removeEventListener("dispose",J),mt(L)}function mt(M){Lt(M),_t.remove(M)}function Lt(M){let L=_t.get(M).programs;L!==void 0&&(L.forEach(function(P){q.releaseProgram(P)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,P,B,O,tt){L===null&&(L=bt);let ct=O.isMesh&&O.matrixWorld.determinant()<0,pt=Rb(M,L,P,B,O);gt.setMaterial(B,ct);let ht=P.index,At=1;if(B.wireframe===!0){if(ht=x.getWireframeAttribute(P),ht===void 0)return;At=2}let Dt=P.drawRange,Tt=P.attributes.position,Xt=Dt.start*At,ce=(Dt.start+Dt.count)*At;tt!==null&&(Xt=Math.max(Xt,tt.start*At),ce=Math.min(ce,(tt.start+tt.count)*At)),ht!==null?(Xt=Math.max(Xt,0),ce=Math.min(ce,ht.count)):Tt!=null&&(Xt=Math.max(Xt,0),ce=Math.min(ce,Tt.count));let De=ce-Xt;if(De<0||De===1/0)return;lt.setup(O,B,pt,P,ht);let ye,he=ut;if(ht!==null&&(ye=A.get(ht),he=wt,he.setIndex(ye)),O.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*an()),he.setMode(R.LINES)):he.setMode(R.TRIANGLES);else if(O.isLine){let Et=B.linewidth;Et===void 0&&(Et=1),gt.setLineWidth(Et*an()),O.isLineSegments?he.setMode(R.LINES):O.isLineLoop?he.setMode(R.LINE_LOOP):he.setMode(R.LINE_STRIP)}else O.isPoints?he.setMode(R.POINTS):O.isSprite&&he.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Et=O._multiDrawStarts,we=O._multiDrawCounts,Jt=O._multiDrawCount,On=ht?A.get(ht).bytesPerElement:1,cr=_t.get(B).currentProgram.getUniforms();for(let In=0;In<Jt;In++)cr.setValue(R,"_gl_DrawID",In),he.render(Et[In]/On,we[In])}else if(O.isInstancedMesh)he.renderInstances(Xt,De,O.count);else if(P.isInstancedBufferGeometry){let Et=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,we=Math.min(P.instanceCount,Et);he.renderInstances(Xt,De,we)}else he.render(Xt,De)};function pe(M,L,P){M.transparent===!0&&M.side===di&&M.forceSinglePass===!1?(M.side=yn,M.needsUpdate=!0,Sc(M,L,P),M.side=ys,M.needsUpdate=!0,Sc(M,L,P),M.side=di):Sc(M,L,P)}this.compile=function(M,L,P=null){P===null&&(P=M),u=Mt.get(P),u.init(L),y.push(u),P.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),M!==P&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();let B=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let tt=O.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){let pt=tt[ct];pe(pt,P,O),B.add(pt)}else pe(tt,P,O),B.add(tt)}),u=y.pop(),B},this.compileAsync=function(M,L,P=null){let B=this.compile(M,L,P);return new Promise(O=>{function tt(){if(B.forEach(function(ct){_t.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){O(M);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ee=null;function Ki(M){ee&&ee(M)}function wi(){_a.stop()}function d0(){_a.start()}let _a=new xb;_a.setAnimationLoop(Ki),typeof self<"u"&&_a.setContext(self),this.setAnimationLoop=function(M){ee=M,it.setAnimationLoop(M),M===null?_a.stop():_a.start()},it.addEventListener("sessionstart",wi),it.addEventListener("sessionend",d0),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(L),L=it.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,L,D),u=Mt.get(M,y.length),u.init(L),y.push(u),Q.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Se.setFromProjectionMatrix(Q,Ei,L.reversedDepth),Z=this.localClippingEnabled,te=st.init(this.clippingPlanes,Z),m=X.get(M,g.length),m.init(),g.push(m),it.enabled===!0&&it.isPresenting===!0){let tt=v.xr.getDepthSensingMesh();tt!==null&&Jf(tt,L,-1/0,v.sortObjects)}Jf(M,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,ot),Yt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Yt&&xt.addToRenderList(m,M),this.info.render.frame++,te===!0&&st.beginShadows();let P=u.state.shadowsArray;vt.render(P,M,L),te===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,O=m.transmissive;if(u.setupLights(),L.isArrayCamera){let tt=L.cameras;if(O.length>0)for(let ct=0,pt=tt.length;ct<pt;ct++){let ht=tt[ct];m0(B,O,M,ht)}Yt&&xt.render(M);for(let ct=0,pt=tt.length;ct<pt;ct++){let ht=tt[ct];p0(m,M,ht,ht.viewport)}}else O.length>0&&m0(B,O,M,L),Yt&&xt.render(M),p0(m,M,L);D!==null&&w===0&&(Ft.updateMultisampleRenderTarget(D),Ft.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,L),lt.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(u=y[y.length-1],te===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Jf(M,L,P,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)P=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Se.intersectsSprite(M)){B&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let ct=I.update(M),pt=M.material;pt.visible&&m.push(M,ct,pt,P,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Se.intersectsObject(M))){let ct=I.update(M),pt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ut.copy(ct.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(pt)){let ht=ct.groups;for(let At=0,Dt=ht.length;At<Dt;At++){let Tt=ht[At],Xt=pt[Tt.materialIndex];Xt&&Xt.visible&&m.push(M,ct,Xt,P,Ut.z,Tt)}}else pt.visible&&m.push(M,ct,pt,P,Ut.z,null)}}let tt=M.children;for(let ct=0,pt=tt.length;ct<pt;ct++)Jf(tt[ct],L,P,B)}function p0(M,L,P,B){let O=M.opaque,tt=M.transmissive,ct=M.transparent;u.setupLightsView(P),te===!0&&st.setGlobalState(v.clippingPlanes,P),B&&gt.viewport(U.copy(B)),O.length>0&&xc(O,L,P),tt.length>0&&xc(tt,L,P),ct.length>0&&xc(ct,L,P),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function m0(M,L,P,B){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Wi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Lo:Zi,minFilter:ma,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let tt=u.state.transmissionRenderTarget[B.id],ct=B.viewport||U;tt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);let pt=v.getRenderTarget(),ht=v.getActiveCubeFace(),At=v.getActiveMipmapLevel();v.setRenderTarget(tt),v.getClearColor(Y),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&xt.render(P);let Dt=v.toneMapping;v.toneMapping=bs;let Tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),te===!0&&st.setGlobalState(v.clippingPlanes,B),xc(M,P,B),Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ce=0,De=L.length;ce<De;ce++){let ye=L[ce],he=ye.object,Et=ye.geometry,we=ye.material,Jt=ye.group;if(we.side===di&&he.layers.test(B.layers)){let On=we.side;we.side=yn,we.needsUpdate=!0,g0(he,P,B,Et,we,Jt),we.side=On,we.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt))}v.setRenderTarget(pt,ht,At),v.setClearColor(Y,V),Tt!==void 0&&(B.viewport=Tt),v.toneMapping=Dt}function xc(M,L,P){let B=L.isScene===!0?L.overrideMaterial:null;for(let O=0,tt=M.length;O<tt;O++){let ct=M[O],pt=ct.object,ht=ct.geometry,At=ct.group,Dt=ct.material;Dt.allowOverride===!0&&B!==null&&(Dt=B),pt.layers.test(P.layers)&&g0(pt,L,P,ht,Dt,At)}}function g0(M,L,P,B,O,tt){M.onBeforeRender(v,L,P,B,O,tt),M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,L,P,B,M,tt),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=yn,O.needsUpdate=!0,v.renderBufferDirect(P,L,B,O,M,tt),O.side=ys,O.needsUpdate=!0,v.renderBufferDirect(P,L,B,O,M,tt),O.side=di):v.renderBufferDirect(P,L,B,O,M,tt),M.onAfterRender(v,L,P,B,O,tt)}function Sc(M,L,P){L.isScene!==!0&&(L=bt);let B=_t.get(M),O=u.state.lights,tt=u.state.shadowsArray,ct=O.state.version,pt=q.getParameters(M,O.state,tt,L,P),ht=q.getProgramCacheKey(pt),At=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?Le:We).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,At===void 0&&(M.addEventListener("dispose",J),At=new Map,B.programs=At);let Dt=At.get(ht);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===ct)return v0(M,pt),Dt}else pt.uniforms=q.getUniforms(M),M.onBeforeCompile(pt,v),Dt=q.acquireProgram(pt,ht),At.set(ht,Dt),B.uniforms=pt.uniforms;let Tt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=st.uniform),v0(M,pt),B.needsLights=Ub(M),B.lightsStateVersion=ct,B.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function _0(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Bo.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function v0(M,L){let P=_t.get(M);P.outputColorSpace=L.outputColorSpace,P.batching=L.batching,P.batchingColor=L.batchingColor,P.instancing=L.instancing,P.instancingColor=L.instancingColor,P.instancingMorph=L.instancingMorph,P.skinning=L.skinning,P.morphTargets=L.morphTargets,P.morphNormals=L.morphNormals,P.morphColors=L.morphColors,P.morphTargetsCount=L.morphTargetsCount,P.numClippingPlanes=L.numClippingPlanes,P.numIntersection=L.numClipIntersection,P.vertexAlphas=L.vertexAlphas,P.vertexTangents=L.vertexTangents,P.toneMapping=L.toneMapping}function Rb(M,L,P,B,O){L.isScene!==!0&&(L=bt),Ft.resetTextureUnits();let tt=L.fog,ct=B.isMeshStandardMaterial?L.environment:null,pt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ja,ht=(B.isMeshStandardMaterial?Le:We).get(B.envMap||ct),At=B.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Dt=!!P.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!P.morphAttributes.position,Xt=!!P.morphAttributes.normal,ce=!!P.morphAttributes.color,De=bs;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(De=v.toneMapping);let ye=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,he=ye!==void 0?ye.length:0,Et=_t.get(B),we=u.state.lights;if(te===!0&&(Z===!0||M!==b)){let fn=M===b&&B.id===T;st.setState(B,M,fn)}let Jt=!1;B.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==we.state.version||Et.outputColorSpace!==pt||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==ht||B.fog===!0&&Et.fog!==tt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==st.numPlanes||Et.numIntersection!==st.numIntersection)||Et.vertexAlphas!==At||Et.vertexTangents!==Dt||Et.morphTargets!==Tt||Et.morphNormals!==Xt||Et.morphColors!==ce||Et.toneMapping!==De||Et.morphTargetsCount!==he)&&(Jt=!0):(Jt=!0,Et.__version=B.version);let On=Et.currentProgram;Jt===!0&&(On=Sc(B,L,O));let cr=!1,In=!1,Ho=!1,Ce=On.getUniforms(),$n=Et.uniforms;if(gt.useProgram(On.program)&&(cr=!0,In=!0,Ho=!0),B.id!==T&&(T=B.id,In=!0),cr||b!==M){gt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ce.setValue(R,"projectionMatrix",M.projectionMatrix),Ce.setValue(R,"viewMatrix",M.matrixWorldInverse);let xn=Ce.map.cameraPosition;xn!==void 0&&xn.setValue(R,dt.setFromMatrixPosition(M.matrixWorld)),Rt.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,In=!0,Ho=!0)}if(O.isSkinnedMesh){Ce.setOptional(R,O,"bindMatrix"),Ce.setOptional(R,O,"bindMatrixInverse");let fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ce.setValue(R,"boneTexture",fn.boneTexture,Ft))}O.isBatchedMesh&&(Ce.setOptional(R,O,"batchingTexture"),Ce.setValue(R,"batchingTexture",O._matricesTexture,Ft),Ce.setOptional(R,O,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",O._indirectTexture,Ft),Ce.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",O._colorsTexture,Ft));let ti=P.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&nt.update(O,P,On),(In||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,Ce.setValue(R,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($n.envMap.value=ht,$n.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&($n.envMapIntensity.value=L.environmentIntensity),In&&(Ce.setValue(R,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&Db($n,Ho),tt&&B.fog===!0&&K.refreshFogUniforms($n,tt),K.refreshMaterialUniforms($n,B,H,j,u.state.transmissionRenderTarget[M.id]),Bo.upload(R,_0(Et),$n,Ft)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Bo.upload(R,_0(Et),$n,Ft),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ce.setValue(R,"center",O.center),Ce.setValue(R,"modelViewMatrix",O.modelViewMatrix),Ce.setValue(R,"normalMatrix",O.normalMatrix),Ce.setValue(R,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let fn=B.uniformsGroups;for(let xn=0,Kf=fn.length;xn<Kf;xn++){let va=fn[xn];zt.update(va,On),zt.bind(va,On)}}return On}function Db(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Ub(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,L,P){let B=_t.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_t.get(M.texture).__webglTexture=L,_t.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:P,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let P=_t.get(M);P.__webglFramebuffer=L,P.__useDefaultFramebuffer=L===void 0};let Nb=R.createFramebuffer();this.setRenderTarget=function(M,L=0,P=0){D=M,C=L,w=P;let B=!0,O=null,tt=!1,ct=!1;if(M){let ht=_t.get(M);if(ht.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(ht.__webglFramebuffer===void 0)Ft.setupRenderTarget(M);else if(ht.__hasExternalTextures)Ft.rebindTextures(M,_t.get(M.texture).__webglTexture,_t.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(ht.__boundDepthTexture!==Tt){if(Tt!==null&&_t.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);let Dt=_t.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[L])?O=Dt[L][P]:O=Dt[L],tt=!0):M.samples>0&&Ft.useMultisampledRTT(M)===!1?O=_t.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[P]:O=Dt,U.copy(M.viewport),F.copy(M.scissor),k=M.scissorTest}else U.copy(yt).multiplyScalar(H).floor(),F.copy(Bt).multiplyScalar(H).floor(),k=ie;if(P!==0&&(O=Nb),gt.bindFramebuffer(R.FRAMEBUFFER,O)&&B&&gt.drawBuffers(M,O),gt.viewport(U),gt.scissor(F),gt.setScissorTest(k),tt){let ht=_t.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,ht.__webglTexture,P)}else if(ct){let ht=L;for(let At=0;At<M.textures.length;At++){let Dt=_t.get(M.textures[At]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+At,Dt.__webglTexture,P,ht)}}else if(M!==null&&P!==0){let ht=_t.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ht.__webglTexture,P)}T=-1},this.readRenderTargetPixels=function(M,L,P,B,O,tt,ct,pt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=_t.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht){gt.bindFramebuffer(R.FRAMEBUFFER,ht);try{let At=M.textures[pt],Dt=At.format,Tt=At.type;if(!Rt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&P>=0&&P<=M.height-O&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),R.readPixels(L,P,B,O,St.convert(Dt),St.convert(Tt),tt))}finally{let At=D!==null?_t.get(D).__webglFramebuffer:null;gt.bindFramebuffer(R.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(M,L,P,B,O,tt,ct,pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=_t.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht)if(L>=0&&L<=M.width-B&&P>=0&&P<=M.height-O){gt.bindFramebuffer(R.FRAMEBUFFER,ht);let At=M.textures[pt],Dt=At.format,Tt=At.type;if(!Rt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xt),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),R.readPixels(L,P,B,O,St.convert(Dt),St.convert(Tt),0);let ce=D!==null?_t.get(D).__webglFramebuffer:null;gt.bindFramebuffer(R.FRAMEBUFFER,ce);let De=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await YM(R,De,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(Xt),R.deleteSync(De),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,P=0){let B=Math.pow(2,-P),O=Math.floor(M.image.width*B),tt=Math.floor(M.image.height*B),ct=L!==null?L.x:0,pt=L!==null?L.y:0;Ft.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,P,0,0,ct,pt,O,tt),gt.unbindTexture()};let Lb=R.createFramebuffer(),Ob=R.createFramebuffer();this.copyTextureToTexture=function(M,L,P=null,B=null,O=0,tt=null){tt===null&&(O!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=O,O=0):tt=0);let ct,pt,ht,At,Dt,Tt,Xt,ce,De,ye=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(P!==null)ct=P.max.x-P.min.x,pt=P.max.y-P.min.y,ht=P.isBox3?P.max.z-P.min.z:1,At=P.min.x,Dt=P.min.y,Tt=P.isBox3?P.min.z:0;else{let ti=Math.pow(2,-O);ct=Math.floor(ye.width*ti),pt=Math.floor(ye.height*ti),M.isDataArrayTexture?ht=ye.depth:M.isData3DTexture?ht=Math.floor(ye.depth*ti):ht=1,At=0,Dt=0,Tt=0}B!==null?(Xt=B.x,ce=B.y,De=B.z):(Xt=0,ce=0,De=0);let he=St.convert(L.format),Et=St.convert(L.type),we;L.isData3DTexture?(Ft.setTexture3D(L,0),we=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),we=R.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),we=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let Jt=R.getParameter(R.UNPACK_ROW_LENGTH),On=R.getParameter(R.UNPACK_IMAGE_HEIGHT),cr=R.getParameter(R.UNPACK_SKIP_PIXELS),In=R.getParameter(R.UNPACK_SKIP_ROWS),Ho=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tt);let Ce=M.isDataArrayTexture||M.isData3DTexture,$n=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let ti=_t.get(M),fn=_t.get(L),xn=_t.get(ti.__renderTarget),Kf=_t.get(fn.__renderTarget);gt.bindFramebuffer(R.READ_FRAMEBUFFER,xn.__webglFramebuffer),gt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Kf.__webglFramebuffer);for(let va=0;va<ht;va++)Ce&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(M).__webglTexture,O,Tt+va),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(L).__webglTexture,tt,De+va)),R.blitFramebuffer(At,Dt,ct,pt,Xt,ce,ct,pt,R.DEPTH_BUFFER_BIT,R.NEAREST);gt.bindFramebuffer(R.READ_FRAMEBUFFER,null),gt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||_t.has(M)){let ti=_t.get(M),fn=_t.get(L);gt.bindFramebuffer(R.READ_FRAMEBUFFER,Lb),gt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ob);for(let xn=0;xn<ht;xn++)Ce?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ti.__webglTexture,O,Tt+xn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ti.__webglTexture,O),$n?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fn.__webglTexture,tt,De+xn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fn.__webglTexture,tt),O!==0?R.blitFramebuffer(At,Dt,ct,pt,Xt,ce,ct,pt,R.COLOR_BUFFER_BIT,R.NEAREST):$n?R.copyTexSubImage3D(we,tt,Xt,ce,De+xn,At,Dt,ct,pt):R.copyTexSubImage2D(we,tt,Xt,ce,At,Dt,ct,pt);gt.bindFramebuffer(R.READ_FRAMEBUFFER,null),gt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else $n?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(we,tt,Xt,ce,De,ct,pt,ht,he,Et,ye.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(we,tt,Xt,ce,De,ct,pt,ht,he,ye.data):R.texSubImage3D(we,tt,Xt,ce,De,ct,pt,ht,he,Et,ye):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,tt,Xt,ce,ct,pt,he,Et,ye.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,tt,Xt,ce,ye.width,ye.height,he,ye.data):R.texSubImage2D(R.TEXTURE_2D,tt,Xt,ce,ct,pt,he,Et,ye);R.pixelStorei(R.UNPACK_ROW_LENGTH,Jt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,On),R.pixelStorei(R.UNPACK_SKIP_PIXELS,cr),R.pixelStorei(R.UNPACK_SKIP_ROWS,In),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ho),tt===0&&L.generateMipmaps&&R.generateMipmap(we),gt.unbindTexture()},this.initRenderTarget=function(M){_t.get(M).__webglFramebuffer===void 0&&Ft.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ft.setTextureCube(M,0):M.isData3DTexture?Ft.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ft.setTexture2DArray(M,0):Ft.setTexture2D(M,0),gt.unbindTexture()},this.resetState=function(){C=0,w=0,D=null,gt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}};var y3=`
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,x3=`
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}`,S3=({grid:e=15,mouse:t=.1,strength:n=.15,relaxation:i=.9,imageSrc:s,className:a=""})=>{let r=(0,Ai.useRef)(null),o=(0,Ai.useRef)(null),l=(0,Ai.useRef)(null),c=(0,Ai.useRef)(null),f=(0,Ai.useRef)(null),d=(0,Ai.useRef)(1),h=(0,Ai.useRef)(null),p=(0,Ai.useRef)(null);return(0,Ai.useEffect)(()=>{if(!r.current)return;let _=r.current,S=new ac;o.current=S;let m=new Yf({antialias:!0,alpha:!0,powerPreference:"high-performance"});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(0,0),l.current=m,_.innerHTML="",_.appendChild(m.domElement);let u=new Uo(0,0,0,0,-1e3,1e3);u.position.z=2,c.current=u;let g={time:{value:0},resolution:{value:new Ae},uTexture:{value:null},uDataTexture:{value:null}};new hc().load(s,V=>{V.minFilter=Un,V.magFilter=Un,V.wrapS=Ti,V.wrapT=Ti,d.current=V.image.width/V.image.height,g.uTexture.value=V,b()});let v=e,E=new Float32Array(4*v*v);for(let V=0;V<v*v;V++)E[V*4]=Math.random()*255-125,E[V*4+1]=Math.random()*255-125;let C=new rc(E,v,v,Ln,pi);C.needsUpdate=!0,g.uDataTexture.value=C;let w=new Qn({side:di,uniforms:g,vertexShader:y3,fragmentShader:x3,transparent:!0}),D=new tr(1,1,v-1,v-1),T=new Nn(D,w);f.current=T,S.add(T);let b=()=>{if(!_||!m||!u)return;let V=_.getBoundingClientRect(),G=V.width,j=V.height;if(G===0||j===0)return;let H=G/j;m.setSize(G,j),T&&T.scale.set(H,1,1);let et=1,ot=et*H;u.left=-ot/2,u.right=ot/2,u.top=et/2,u.bottom=-et/2,u.updateProjectionMatrix(),g.resolution.value.set(G,j,1,1)};if(window.ResizeObserver){let V=new ResizeObserver(()=>{b()});V.observe(_),p.current=V}else window.addEventListener("resize",b);let U={x:0,y:0,prevX:0,prevY:0,vX:0,vY:0},F=V=>{let G=_.getBoundingClientRect(),j=(V.clientX-G.left)/G.width,H=1-(V.clientY-G.top)/G.height;U.vX=j-U.prevX,U.vY=H-U.prevY,Object.assign(U,{x:j,y:H,prevX:j,prevY:H})},k=()=>{C&&(C.needsUpdate=!0),Object.assign(U,{x:0,y:0,prevX:0,prevY:0,vX:0,vY:0})};_.addEventListener("mousemove",F),_.addEventListener("mouseleave",k),b();let Y=()=>{if(h.current=requestAnimationFrame(Y),!m||!S||!u)return;g.time.value+=.05;let V=C.image.data;for(let et=0;et<v*v;et++)V[et*4]*=i,V[et*4+1]*=i;let G=v*U.x,j=v*U.y,H=v*t;for(let et=0;et<v;et++)for(let ot=0;ot<v;ot++){let yt=Math.pow(G-et,2)+Math.pow(j-ot,2);if(yt<H*H){let Bt=4*(et+v*ot),ie=Math.min(H/Math.sqrt(yt),10);V[Bt]+=n*100*U.vX*ie,V[Bt+1]-=n*100*U.vY*ie}}C.needsUpdate=!0,m.render(S,u)};return Y(),()=>{h.current&&cancelAnimationFrame(h.current),p.current?p.current.disconnect():window.removeEventListener("resize",b),_.removeEventListener("mousemove",F),_.removeEventListener("mouseleave",k),m&&(m.dispose(),m.forceContextLoss(),_.contains(m.domElement)&&_.removeChild(m.domElement)),D&&D.dispose(),w&&w.dispose(),C&&C.dispose(),g.uTexture.value&&g.uTexture.value.dispose(),o.current=null,l.current=null,c.current=null,f.current=null}},[e,t,n,i,s]),React.createElement("div",{ref:r,className:`distortion-container ${a}`,style:{width:"100%",height:"100%",minWidth:"0",minHeight:"0"}})},Eb=S3;var Ab=document.getElementById("hero-distortion-root");Ab&&(0,Cb.createRoot)(Ab).render(wb.default.createElement(Eb,{imageSrc:"https://picsum.photos/1920/1080?grayscale",grid:10,mouse:.1,strength:.15,relaxation:.9,className:"custom-class"}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
