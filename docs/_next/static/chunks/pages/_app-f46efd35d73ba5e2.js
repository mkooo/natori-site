(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1836)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),l=n(2725),c=n(3462),i=n(1018),f=n(7190),s=n(1210),d=n(8684);var p="undefined"!==typeof a.default.useTransition,v={};function h(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var g=a.default.forwardRef((function(e,t){var n,o=e.href,g=e.as,j=e.children,y=e.prefetch,_=e.passHref,x=e.replace,m=e.shallow,b=e.scroll,w=e.locale,O=e.onClick,M=e.onMouseEnter,C=e.legacyBehavior,E=void 0===C?!0!==Boolean(!1):C,N=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=j,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var L=!1!==y,k=r(p?a.default.useTransition():[],2)[1],P=a.default.useContext(c.RouterContext),R=a.default.useContext(i.AppRouterContext);R&&(P=R);var I,T=a.default.useMemo((function(){var e=r(u.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:g?u.resolveHref(P,g):n||t}}),[P,o,g]),D=T.href,S=T.as,A=a.default.useRef(D),U=a.default.useRef(S);E&&(I=a.default.Children.only(n));var Z=E?I&&"object"===typeof I&&I.ref:t,H=r(f.useIntersection({rootMargin:"200px"}),3),K=H[0],B=H[1],X=H[2],q=a.default.useCallback((function(e){U.current===S&&A.current===D||(X(),U.current=S,A.current=D),K(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[S,Z,D,X,K]);a.default.useEffect((function(){var e=B&&L&&u.isLocalURL(D),t="undefined"!==typeof w?w:P&&P.locale,n=v[D+"%"+S+(t?"%"+t:"")];e&&!n&&h(P,D,S,{locale:t})}),[S,D,B,w,L,P]);var J={ref:q,onClick:function(e){E||"function"!==typeof O||O(e),E&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var f=function(){t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l})};i?i(f):f()}}(e,P,D,S,x,m,b,w,R?k:void 0)},onMouseEnter:function(e){E||"function"!==typeof M||M(e),E&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),u.isLocalURL(D)&&h(P,D,S,{priority:!0})}};if(!E||_||"a"===I.type&&!("href"in I.props)){var F="undefined"!==typeof w?w:P&&P.locale,z=P&&P.isLocaleDomain&&s.getDomainLocale(S,F,P.locales,P.domainLocales);J.href=z||d.addBasePath(l.addLocale(S,F,P&&P.defaultLocale))}return E?a.default.cloneElement(I,J):a.default.createElement("a",Object.assign({},N,J),n)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!u,f=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),h=v[0],g=v[1];o.useEffect((function(){if(u){if(f.current&&(f.current(),f.current=void 0),i||d)return;return h&&h.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==f.current||f.current(),f.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h,i,n,t,d]);var j=o.useCallback((function(){p(!1)}),[]);return[g,d,j]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=o},1836:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return g}});var a=n(5893),u=n(5787),l=n.n(u),c=n(1664),i=n.n(c);function f(){return(0,a.jsxs)("footer",{className:l().main,children:[(0,a.jsxs)("div",{className:l().title,children:[(0,a.jsx)("p",{className:l().text,children:"DAO\u3092\u76ee\u6307\u3059\u4e16\u754c\u4e00\u5c0f\u3055\u306a\u9650\u754c\u96c6\u843d"}),(0,a.jsx)("p",{className:l().text,children:"\u4e16\u754c\u3068\u7e4b\u304c\u308a\u81ea\u7acb\u3057\u305f\u6301\u7d9a\u53ef\u80fd\u306a\u96c6\u843d\u3092\u5275\u9020\u3059\u308b"}),(0,a.jsx)("p",{className:l().projectName,children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("a",{children:"\xa9\u30af\u30ea\u30d7\u30c8\u96c6\u843d NATORI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})})})]}),(0,a.jsx)("div",{className:l().sns,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/news/20230122-nft-begins-general-sales",children:(0,a.jsx)("a",{children:"news"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://note.com/tsunagu/m/m1318fe46fc82",children:"note"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://twitter.com/natoriNFT",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://opensea.io/collection/crypto-natori-collection",children:"Opensea"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://discord.gg/jUjfgJWZSq",children:"Discord"})})]})})]})}var s=n(9008),d=n.n(s),p=n(4298),v=n.n(p),h="G-YTXZD9XM0Z";n(7284);var g=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(h)}),(0,a.jsx)(v(),{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n             window.dataLayer = window.dataLayer || [];\n             function gtag(){dataLayer.push(arguments);}\n             gtag('js', new Date());\n             \n             gtag('config', '".concat(h,"');\n          ")}}),(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"\u30af\u30ea\u30d7\u30c8\u96c6\u843d NATORI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})}),(0,a.jsx)(t,o({},n)),(0,a.jsx)(f,{})]})}},5787:function(e){e.exports={main:"footer_main__mS0ki",title:"footer_title__J4QUT",text:"footer_text__SEyuJ",projectName:"footer_projectName__2KmZq",sns:"footer_sns__ljwlO"}},7284:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);