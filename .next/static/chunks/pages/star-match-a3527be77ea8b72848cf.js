_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"78ew":function(e,t,n){"use strict";var r=n("nKUr"),a=n("YFqc"),c=n.n(a),s=n("q1tI");t.a=function(){var e=Object(s.useState)(!1),t=e[0],n=e[1],a=Object(s.useRef)(0),o=Object(s.useState)(0),i=o[0],l=o[1],u=Object(s.useState)(!0),f=u[0],d=u[1];return Object(s.useEffect)((function(){var e=function(){var e=window.scrollY;d(0==e),a.current=e,l(e)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[i]),Object(r.jsx)("div",{className:"py-10",children:Object(r.jsxs)("nav",{className:"flex items-center flex-wrap bg-gray-700 p-3 text-white text-center fixed top-0 inset-x-0".concat(f?"":" shadow-xl"),children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsxs)("a",{className:"inline-flex items-center p-2 mr-4 ",children:[Object(r.jsx)("img",{src:"./briefcase.png",className:"h-10 mx-2",alt:"briefcase"}),Object(r.jsx)("span",{className:"text-3xl text-white font-light tracking-wide ml-2",children:"Portfolio"})]})}),Object(r.jsx)("button",{className:" inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none",onClick:function(){n(!t)},children:Object(r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Object(r.jsx)("div",{className:"".concat(t?"":"hidden","   w-full lg:inline-flex lg:flex-grow lg:w-auto"),children:Object(r.jsxs)("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white ",children:"Home"})}),Object(r.jsx)(c.a,{href:"/weather",children:Object(r.jsx)("a",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white",children:"Weather"})}),Object(r.jsx)(c.a,{href:"/crypto",children:Object(r.jsx)("a",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white",children:"Crypto"})}),Object(r.jsx)(c.a,{href:"/star-match",children:Object(r.jsx)("a",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white",children:"Game"})}),Object(r.jsx)(c.a,{href:"/spotify",children:Object(r.jsx)("a",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white",children:"Spotify"})})]})})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},aQgt:function(e,t,n){"use strict";var r={KToF:function(e){return Math.round(9*(e-273.15)/5+32)},sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],a=[],c=0;c<e.length;c++)for(var s=0,o=n.length;s<o;s++){var i=n[s].concat(e[c]),l=r.sum(i);l<=t&&(n.push(i),a.push(l))}return a[r.random(0,a.length-1)]}};t.a=r},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),d=f.href,h=f.as,m=e.children,b=e.replace,j=e.shallow,v=e.scroll,x=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var g=c.Children.only(m),p=g&&"object"===typeof g&&g.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),O=r(w,2),y=O[0],N=O[1],k=c.default.useCallback((function(e){y(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,y]);(0,c.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,a=l[d+"%"+h+(r?"%"+r:"")];e&&!a&&u(n,d,h,{locale:r})}),[h,d,N,x,t,n]);var E={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,d,h,b,j,v,x)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof x?x:n&&n.locale,C=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(h,L,n&&n.locales,n&&n.domainLocales);E.href=C||(0,s.addBasePath)((0,s.addLocale)(h,L,n&&n.defaultLocale))}return c.default.cloneElement(g,E)};t.default=f},isKI:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("78ew"),c=n("q1tI"),s=n("aQgt"),o=function(e){return Object(r.jsx)(r.Fragment,{children:s.a.range(1,e.count).map((function(e){return Object(r.jsx)("div",{className:"star"},e)}))})},i=function(e){return Object(r.jsx)("button",{style:{backgroundColor:f[e.status]},className:"number",onClick:function(){return e.onClick(e.number,e.status)},children:e.number})},l=function(e){return Object(r.jsxs)("div",{className:"game-done",children:[Object(r.jsx)("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"},children:"lost"===e.gameStatus?"Game Over":"Nice"}),Object(r.jsx)("button",{className:"bg-gray-700 p-2 text-white rounded",onClick:e.onClick,children:"Play Again"})]})},u=function(e){var t=function(){var e=Object(c.useState)(s.a.random(1,9)),t=e[0],n=e[1],r=Object(c.useState)(s.a.range(1,9)),a=r[0],o=r[1],i=Object(c.useState)([]),l=i[0],u=i[1],f=Object(c.useState)(10),d=f[0],h=f[1];return Object(c.useEffect)((function(){if(d>0&&a.length>0){var e=setTimeout((function(){h(d-1)}),1e3);return function(){return clearTimeout(e)}}})),{stars:t,availableNums:a,candidateNums:l,secondsLeft:d,setGameState:function(e){if(s.a.sum(e)!==t)u(e);else{var r=a.filter((function(t){return!e.includes(t)}));n(s.a.randomSumIn(r,9)),o(r),u([])}}}}(),n=t.stars,u=t.availableNums,f=t.candidateNums,d=t.secondsLeft,h=t.setGameState,m=s.a.sum(f)>n,b=0===u.length?"won":0===d?"lost":"active",j=function(e){return u.includes(e)?f.includes(e)?m?"wrong":"candidate":"available":"used"},v=function(e,t){if("active"===b&&"used"!==t){var n="available"===t?f.concat(e):f.filter((function(t){return t!==e}));h(n)}};return Object(r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[Object(r.jsx)(a.a,{}),Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"help",children:"Pick 1 or more numbers that sum to the number of stars"}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)("div",{className:"left",children:"active"!==b?Object(r.jsx)(l,{onClick:e.startNewGame,gameStatus:b}):Object(r.jsx)(o,{count:n})}),Object(r.jsx)("div",{className:"right",children:s.a.range(1,9).map((function(e){return Object(r.jsx)(i,{number:e,status:j(e),onClick:v},e)}))})]}),Object(r.jsxs)("div",{className:"timer",children:["Time Remaining: ",d]})]})]})},f={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"};t.default=function(){var e=Object(c.useState)(1),t=e[0],n=e[1];return Object(r.jsx)(u,{startNewGame:function(){n(t+1)}},t)}},lKB8:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/star-match",function(){return n("isKI")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[h,f]};var a=n("q1tI"),c=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["lKB8",0,2,1]]]);