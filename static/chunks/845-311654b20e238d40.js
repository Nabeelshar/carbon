(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{58431:function(e,t,r){"use strict";var n=r(67294);r(45697);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var a=["as","style"],u=(0,n.forwardRef)((function(e,t){var r=e.as,u=void 0===r?"span":r,l=e.style,i=void 0===l?{}:l,c=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);return(0,n.createElement)(u,o({ref:t,style:o({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},i)},c))}));t.Z=u},31551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(67294))&&a.__esModule?a:{default:a},l=r(41003),i=r(80880),c=r(69246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function p(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=u.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,d=e.href,y=e.as,v=e.children,h=e.prefetch,b=e.passHref,g=e.replace,m=e.shallow,O=e.scroll,w=e.locale,E=e.onClick,j=e.onMouseEnter,k=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,a&&"string"===typeof r&&(r=u.default.createElement("a",null,r));var C,_=!1!==h,I=i.useRouter(),S=u.default.useMemo((function(){var e=o(l.resolveHref(I,d,!0),2),t=e[0],r=e[1];return{href:t,as:y?l.resolveHref(I,y):r||t}}),[I,d,y]),x=S.href,M=S.as,R=u.default.useRef(x),L=u.default.useRef(M);a&&(C=u.default.Children.only(r));var A=a?C&&"object"===typeof C&&C.ref:t,T=o(c.useIntersection({rootMargin:"200px"}),3),P=T[0],U=T[1],D=T[2],H=u.default.useCallback((function(e){L.current===M&&R.current===x||(D(),L.current=M,R.current=x),P(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[M,A,x,D,P]);u.default.useEffect((function(){var e=U&&_&&l.isLocalURL(x),t="undefined"!==typeof w?w:I&&I.locale,r=s[x+"%"+M+(t?"%"+t:"")];e&&!r&&p(I,x,M,{locale:t})}),[M,x,U,w,_,I]);var N={ref:H,onClick:function(e){a||"function"!==typeof E||E(e),a&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:u}))}(e,I,x,M,g,m,O,w)},onMouseEnter:function(e){a||"function"!==typeof j||j(e),a&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),l.isLocalURL(x)&&p(I,x,M,{priority:!0})}};if(!a||b||"a"===C.type&&!("href"in C.props)){var B="undefined"!==typeof w?w:I&&I.locale,K=I&&I.isLocaleDomain&&l.getDomainLocale(M,B,I&&I.locales,I&&I.domainLocales);N.href=K||l.addBasePath(l.addLocale(M,B,I&&I.defaultLocale))}return a?u.default.cloneElement(C,N):u.default.createElement("a",Object.assign({},k,N),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],h=y[1],b=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||p||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:r}))}),[n,v,r,p]),g=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!l&&!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&h(t.current)}),[t]),[b,p,g]};var a=r(67294),u=r(44686),l="undefined"!==typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,r){e.exports=r(31551)},92703:function(e,t,r){"use strict";var n=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,u){if(u!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);