"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 7533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ap": () => (/* binding */ CodeMirrorLink),
  "tO": () => (/* binding */ HIGHLIGHTS_ONLY),
  "rU": () => (/* binding */ Link),
  "$O": () => (/* binding */ MetaLinks),
  "NR": () => (/* binding */ MetaTags),
  "wH": () => (/* binding */ StylesheetLink),
  "ZP": () => (/* binding */ Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
;// CONCATENATED MODULE: ./components/style/Reset.js




function Reset() {
    return jsx_runtime_.jsx((styled_jsx_default()), {
        id: "36a08fc93f55e9da",
        dynamic: [
            constants/* COLORS.BLACK */.DM.BLACK,
            constants/* COLORS.BLACK */.DM.BLACK,
            constants/* COLORS.DARK_GRAY */.DM.DARK_GRAY,
            constants/* COLORS.SECONDARY */.DM.SECONDARY,
            constants/* COLORS.PRIMARY */.DM.PRIMARY
        ],
        children: `html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-weight:inherit;font-family:inherit;font-style:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html,body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;background:${constants/* COLORS.BLACK */.DM.BLACK};color:white;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;font-weight:400;font-style:normal;text-transform:initial;letter-spacing:initial;min-height:704px}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}h1,h2,h3,h4,h5,h6{font-weight:500}a{color:inherit;text-decoration:none;cursor:pointer}*::-moz-selection{background:rgba(255,255,255,.99);color:${constants/* COLORS.BLACK */.DM.BLACK}}*::selection{background:rgba(255,255,255,.99);color:${constants/* COLORS.BLACK */.DM.BLACK}}kbd{display:inline-block;padding:3px 5px;font-size:9px;font-weight:700;line-height:1.2;color:${constants/* COLORS.DARK_GRAY */.DM.DARK_GRAY};vertical-align:middle;background-color:#fafbfc;border:1px solid#c6cbd1;border-bottom-color:#959da5;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0#959da5;-moz-box-shadow:inset 0 -1px 0#959da5;box-shadow:inset 0 -1px 0#959da5;white-space:nowrap}.link{color:#fff;text-decoration:none;padding-bottom:3px;background:-webkit-linear-gradient(left,rgba(255,255,255,.7)0%,rgba(255,255,255,.7)100%);background:-moz-linear-gradient(left,rgba(255,255,255,.7)0%,rgba(255,255,255,.7)100%);background:-o-linear-gradient(left,rgba(255,255,255,.7)0%,rgba(255,255,255,.7)100%);background:linear-gradient(to right,rgba(255,255,255,.7)0%,rgba(255,255,255,.7)100%);-webkit-background-size:1px 1px;-moz-background-size:1px 1px;-o-background-size:1px 1px;background-size:1px 1px;background-position:0 100%;background-repeat:repeat-x}.link:hover{color:${constants/* COLORS.PRIMARY */.DM.PRIMARY};background:none}.row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.flex{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:100%}.capitalize{text-transform:capitalize}[role="button"]:focus{outline:none}`
    });
};

// EXTERNAL MODULE: ./components/style/Font.js
var Font = __webpack_require__(5026);
;// CONCATENATED MODULE: ./components/style/Typography.js



function Typography() {
    return jsx_runtime_.jsx((styled_jsx_default()), {
        id: "d7f31a896676ac6a",
        children: ":root{--h0:4.5rem;--h1:3rem;--h2:2.25rem;--h3:1.5rem;--h4:1.125rem;--h5:0.75rem;--lh:calc(4 / 3);--m1:calc(2 / 3 * 1em);--m2:calc(4 / 3 * 1em);--m3:calc(8 / 3 * 1em);--m4:calc(16 / 3 * 1em);--x1:0.5rem;--x2:1rem;--x3:2rem;--x4:4rem;--x5:8rem;--x6:16rem}body{font-size:var(--h4);line-height:var(--lh)}h1,h2,h3{margin-top:var(--m1);margin-bottom:0}h4,h5,h6,p,dl,ol,ul,blockquote{margin-top:var(--m2);margin-bottom:var(--m2)}h1{font-size:var(--h2)}h2,h3{font-size:var(--h3)}h4{font-size:var(--h4)}h5,h6{font-size:var(--h5)}.mt0{margin-top:0}.mb0{margin-bottom:0}.mt1{margin-top:var(--x1)}.mb1{margin-bottom:var(--x1)}.mt2{margin-top:var(--x2)}.mb2{margin-bottom:var(--x2)}.mt3{margin-top:var(--x3)}.mb3{margin-bottom:var(--x3)}.mt4{margin-top:var(--x4)}.mb4{margin-bottom:var(--x4)}.mt5{margin-top:var(--x5)}.mb5{margin-bottom:var(--x5)}.mt6{margin-top:var(--x6)}.mb6{margin-bottom:var(--x6)}"
    });
};

;// CONCATENATED MODULE: ./components/Meta.js







const CODEMIRROR_VERSION = "5.65.5";
const HIGHLIGHTS_ONLY = [
    "shades-of-purple",
    "vscode",
    "a11y-dark"
];
const LOCAL_STYLESHEETS = [
    "one-light",
    "one-dark",
    "verminal",
    "night-owl",
    "nord",
    "synthwave-84"
];
const CDN_STYLESHEETS = constants/* THEMES.filter */.yU.filter((t)=>LOCAL_STYLESHEETS.indexOf(t.id) < 0 && HIGHLIGHTS_ONLY.indexOf(t.id) < 0
);
function Link({ href  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preload",
                as: "style",
                href: href
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: href
            })
        ]
    });
}
const StylesheetLink = ({ theme  })=>{
    let href;
    if (LOCAL_STYLESHEETS.indexOf(theme) > -1) {
        href = `/static/themes/${theme}.min.css`;
    } else {
        const themeDef = constants/* THEMES_HASH */.a5[theme];
        href = `//cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}/theme/${themeDef && (themeDef.link || themeDef.id)}.min.css`;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Link, {
        href: href
    });
};
const CodeMirrorLink = ()=>/*#__PURE__*/ jsx_runtime_.jsx(Link, {
        href: `//cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}/codemirror.min.css`
    })
;
const title = "Carbon";
const description = "Carbon is the easiest way to create and share beautiful images of your source code.";
const MetaTags = /*#__PURE__*/ external_react_default().memo(()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "application-name",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: "@carbon_app"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: "https://carbon.now.sh/static/brand/banner.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:image",
                content: "/static/brand/banner.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: constants/* COLORS.BLACK */.DM.BLACK
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: constants/* COLORS.BLACK */.DM.BLACK
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                children: [
                    title,
                    " | Create and share beautiful images of your source code"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                href: "/static/brand/apple-touch-icon.png"
            })
        ]
    })
);
const MetaLinks = /*#__PURE__*/ external_react_default().memo(()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                href: `//cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}/theme/seti.min.css`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CodeMirrorLink, {}),
            LOCAL_STYLESHEETS.map((id)=>/*#__PURE__*/ jsx_runtime_.jsx(Link, {
                    href: `/static/themes/${id}.min.css`
                }, id)
            ),
            CDN_STYLESHEETS.map((themeDef)=>{
                const href = `//cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}/theme/${themeDef && (themeDef.link || themeDef.id)}.min.css`;
                return /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                    href: href
                }, themeDef.id);
            })
        ]
    });
});
/* harmony default export */ const Meta = (/*#__PURE__*/external_react_default().memo(function Meta() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MetaTags, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Reset, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Font/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Typography, {})
        ]
    });
}));


/***/ }),

/***/ 5026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Font)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


/*
 * See https://developers.google.com/web/updates/2016/02/font-display and
 * https://css-tricks.com/font-display-masses/#article-header-id-2
 * for `font-display` information
 */ 
function Font() {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "6bd698647d4b7bc1",
        children: '@font-face{font-family:"Monoid";font-display:swap;src:url("//cdn.jsdelivr.net/npm/@typopro/web-monoid@3.7.5/TypoPRO-Monoid-Regular.woff")format(url("woff2")),url("//cdn.jsdelivr.net/npm/@typopro/web-monoid@3.7.5/TypoPRO-Monoid-Regular.woff")format(url("woff"));src:url("//cdn.jsdelivr.net/npm/@typopro/web-monoid@3.7.5/TypoPRO-Monoid-Regular.woff")format("woff2"),url("//cdn.jsdelivr.net/npm/@typopro/web-monoid@3.7.5/TypoPRO-Monoid-Regular.woff")format("woff")}@font-face{font-family:"Fantasque Sans Mono";font-display:swap;src:url("//cdn.jsdelivr.net/npm/@typopro/web-fantasque-sans-mono@3.7.5/TypoPRO-FantasqueSansMono-Regular.woff")format(url("woff2")),url("//cdn.jsdelivr.net/npm/@typopro/web-fantasque-sans-mono@3.7.5/TypoPRO-FantasqueSansMono-Regular.woff")format(url("woff"));src:url("//cdn.jsdelivr.net/npm/@typopro/web-fantasque-sans-mono@3.7.5/TypoPRO-FantasqueSansMono-Regular.woff")format("woff2"),url("//cdn.jsdelivr.net/npm/@typopro/web-fantasque-sans-mono@3.7.5/TypoPRO-FantasqueSansMono-Regular.woff")format("woff")}@font-face{font-family:"Hack";font-display:swap;src:url("//cdn.jsdelivr.net/font-hack/2.020/fonts/woff2/hack-regular-webfont.woff2?v=2.020")format(url("woff2")),url("//cdn.jsdelivr.net/font-hack/2.020/fonts/woff/hack-regular-webfont.woff?v=2.020")format(url("woff"));src:url("//cdn.jsdelivr.net/font-hack/2.020/fonts/woff2/hack-regular-webfont.woff2?v=2.020")format("woff2"),url("//cdn.jsdelivr.net/font-hack/2.020/fonts/woff/hack-regular-webfont.woff?v=2.020")format("woff")}@font-face{font-family:"Fira Code";font-display:swap;src:url("//cdn.jsdelivr.net/npm/firacode@latest/distr/woff2/FiraCode-Regular.woff2")format(url("woff2")),url("//cdn.jsdelivr.net/npm/firacode@latest/distr/woff/FiraCode-Regular.woff")format(url("woff"));src:url("//cdn.jsdelivr.net/npm/firacode@latest/distr/woff2/FiraCode-Regular.woff2")format("woff2"),url("//cdn.jsdelivr.net/npm/firacode@latest/distr/woff/FiraCode-Regular.woff")format("woff")}@font-face{font-family:"JetBrains Mono";font-display:swap;src:url("//cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2")format(url("woff2")),url("//cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff")format(url("woff2"));src:url("//cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2")format("woff2"),url("//cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff")format("woff2")}@font-face{font-family:"Cascadia Code";font-display:swap;font-style:normal;font-weight:400;src:local(url("Cascadia Code")),url("//cdn.jsdelivr.net/npm/@fontsource/cascadia-code@latest/files/cascadia-code-latin-ext-400-normal.woff2")format(url("woff2")),url("//cdn.jsdelivr.net/npm/@fontsource/cascadia-code@latest/files/cascadia-code-latin-ext-400-normal.woff")format(url("woff"));src:local("Cascadia Code"),url("//cdn.jsdelivr.net/npm/@fontsource/cascadia-code@latest/files/cascadia-code-latin-ext-400-normal.woff2")format("woff2"),url("//cdn.jsdelivr.net/npm/@fontsource/cascadia-code@latest/files/cascadia-code-latin-ext-400-normal.woff")format("woff")}@font-face{font-family:"IBM Plex Mono";font-display:swap;font-weight:500;src:local(url("IBM Plex Mono Regular")),local(url("IBMPlexMono-Regular")),url(//cdn.jsdelivr.net/gh/ibm/plex@latest/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2)format(url("woff2"));src:local("IBM Plex Mono Regular"),local("IBMPlexMono-Regular"),url(//cdn.jsdelivr.net/gh/ibm/plex@latest/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2)format("woff2")}@font-face{font-family:"Anonymous Pro";font-display:swap;src:local(url("Anonymous Pro Regular")),local(url("AnonymousPro-Regular")),url(//fonts.gstatic.com/s/anonymouspro/v11/Zhfjj_gat3waL4JSju74E3n3cbdKJftHIk87C9ihfO8.woff2)format(url("woff2"));src:local("Anonymous Pro Regular"),local("AnonymousPro-Regular"),url(//fonts.gstatic.com/s/anonymouspro/v11/Zhfjj_gat3waL4JSju74E3n3cbdKJftHIk87C9ihfO8.woff2)format("woff2")}@font-face{font-family:"Droid Sans Mono";font-display:swap;src:local(url("Droid Sans Mono Regular")),local(url("DroidSansMono-Regular")),url(//fonts.gstatic.com/s/droidsansmono/v9/ns-m2xQYezAtqh7ai59hJVlgUn8GogvcKKzoM9Dh-4E.woff2)format(url("woff2"));src:local("Droid Sans Mono Regular"),local("DroidSansMono-Regular"),url(//fonts.gstatic.com/s/droidsansmono/v9/ns-m2xQYezAtqh7ai59hJVlgUn8GogvcKKzoM9Dh-4E.woff2)format("woff2")}@font-face{font-family:"Inconsolata";font-display:swap;src:local(url("Inconsolata Regular")),local(url("Inconsolata-Regular")),url(//fonts.gstatic.com/s/inconsolata/v16/BjAYBlHtW3CJxDcjzrnZCIgp9Q8gbYrhqGlRav_IXfk.woff2)format(url("woff2"));src:local("Inconsolata Regular"),local("Inconsolata-Regular"),url(//fonts.gstatic.com/s/inconsolata/v16/BjAYBlHtW3CJxDcjzrnZCIgp9Q8gbYrhqGlRav_IXfk.woff2)format("woff2")}@font-face{font-family:"Source Code Pro";font-display:swap;src:local(url("Source Code Pro")),local(url("SourceCodePro-Regular")),url(//fonts.gstatic.com/s/sourcecodepro/v7/mrl8jkM18OlOQN8JLgasD5bPFduIYtoLzwST68uhz_Y.woff2)format(url("woff2"));src:local("Source Code Pro"),local("SourceCodePro-Regular"),url(//fonts.gstatic.com/s/sourcecodepro/v7/mrl8jkM18OlOQN8JLgasD5bPFduIYtoLzwST68uhz_Y.woff2)format("woff2")}@font-face{font-family:"Ubuntu Mono";font-display:swap;src:local(url("Ubuntu Mono")),local(url("UbuntuMono-Regular")),url(//fonts.gstatic.com/s/ubuntumono/v7/ViZhet7Ak-LRXZMXzuAfkYgp9Q8gbYrhqGlRav_IXfk.woff2)format(url("woff2"));src:local("Ubuntu Mono"),local("UbuntuMono-Regular"),url(//fonts.gstatic.com/s/ubuntumono/v7/ViZhet7Ak-LRXZMXzuAfkYgp9Q8gbYrhqGlRav_IXfk.woff2)format("woff2")}@font-face{font-family:"Space Mono";font-display:swap;src:local(url("Space Mono")),local(url("SpaceMono-Regular")),url(https://fonts.gstatic.com/s/spacemono/v2/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2)format(url("woff2"));src:local("Space Mono"),local("SpaceMono-Regular"),url(https://fonts.gstatic.com/s/spacemono/v2/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2)format("woff2")}'
    });
};


/***/ }),

/***/ 7851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4305);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3231);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4959);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5018);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8299);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util__WEBPACK_IMPORTED_MODULE_3__]);
_util__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const client = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL || ""}/api`,
    headers: {
        Accept: "application/json"
    }
});
function tweet(content, encodedImage) {
    const processedData = encodedImage.split(",")[1];
    return client.post("/twitter", {
        imageData: processedData,
        altText: content
    }).then((res)=>res.data.url
    ).then((url)=>encodeURIComponent(`Created with @carbon_app ${url}`)
    ).then((uri)=>`https://twitter.com/intent/tweet?text=${uri}`
    ).then(openTwitterUrl).catch(checkIfRateLimited);
}
const RATE_LIMIT_CODE = 420;
function checkIfRateLimited(err) {
    if (err.response.status === RATE_LIMIT_CODE) {
        alert("Oh no! Looks like too many people are trying to tweet right now and we've been rate limited. Try again soon or save and upload manually!");
        return;
    }
    throw err;
}
function openTwitterUrl(twitterUrl) {
    const width = 575;
    const height = 400;
    const left = (window.outerWidth - width) / 2;
    const top = (window.outerHeight - height) / 2;
    const opts = `status=1,width=${width},height=${height},top=${top},left=${left}`;
    window.open(twitterUrl, "_blank", opts);
}
const downloadThumbnailImage = (img)=>{
    return client.get(img.url.replace("http://", "https://"), {
        responseType: "blob"
    }).then((res)=>res.data
    ).then(_util__WEBPACK_IMPORTED_MODULE_3__/* .fileToDataURL */ .Ph).then((dataURL)=>Object.assign(img, {
            dataURL
        })
    );
};
const unsplash = {
    download (id) {
        return client.get(`/unsplash/download/${id}`).then((res)=>res.data
        );
    },
    async random () {
        const imageUrls = await client.get("/unsplash/random");
        return Promise.all(imageUrls.data.map(downloadThumbnailImage));
    }
};
const imgur = (data, title)=>{
    const image = data.split(",")[1];
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.imgur.com/3/image", {
        image,
        title
    }, {
        headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`
        }
    }).then((res)=>res.data.data.link
    ).then((link)=>window.open(link, "_blank")
    ).catch((e)=>{
        console.error(e);
        return null;
    });
};
function getSnippet(uid = "", { host , filename  } = {}) {
    return client.get(`/snippets/${uid}`, {
        baseURL: host ? `https://${host}/api` : undefined,
        params: {
            filename
        }
    }).then((res)=>res.data
    ).catch((e)=>{
        console.error(e);
        return null;
    });
}
function listSnippets(page) {
    // IDEA: move into axios interceptor
    return _client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].auth */ .ZP.auth().currentUser.getIdToken().then((authorization)=>client.get(`/snippets`, {
            params: {
                page
            },
            headers: {
                authorization
            }
        }).then((res)=>res.data
        ).catch((e)=>{
            console.error(e);
            throw e;
        })
    );
}
function updateSnippet(uid, state) {
    const data = {
        ...state,
        code: state.code != null ? state.code : _constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_CODE */ .Zm
    };
    if (uid) {
        return client.patch(`/snippets/${uid}`, data).then((res)=>res.data
        ).catch((e)=>{
            console.error(e);
            return null;
        });
    }
    return client.post(`/snippets`, data).then((res)=>res.data
    ).catch((e)=>{
        console.error(e);
        return null;
    });
}
function deleteSnippet(uid) {
    return client.delete(`/snippets/${uid}`).then((res)=>res.data
    ).catch((e)=>{
        console.error(e);
        return null;
    });
}
const createSnippet = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((data)=>updateSnippet(null, data)
, ms__WEBPACK_IMPORTED_MODULE_2___default()("5s"), {
    leading: true,
    trailing: false
});
const api = {
    snippet: {
        get: getSnippet,
        list: listSnippets,
        update: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(updateSnippet, ms__WEBPACK_IMPORTED_MODULE_2___default()("1s"), {
            leading: true,
            trailing: true
        }),
        create: createSnippet,
        delete: (id)=>deleteSnippet(id)
    },
    tweet: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(tweet, ms__WEBPACK_IMPORTED_MODULE_2___default()("5s"), {
        leading: true,
        trailing: false
    }),
    unsplash,
    imgur,
    downloadThumbnailImage
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "zj": () => (/* binding */ loginGitHub)
/* harmony export */ });
/* unused harmony export login */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4324);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4610);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


if ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length) === 0) {
    if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_FE_APP_ID) {
        firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
            databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_FE_APP_ID
        });
    }
}
function logout() {
    return firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth().signOut().catch(console.error);
}
function login(provider) {
    return firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth().setPersistence((firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.Auth.Persistence.LOCAL)).then(()=>firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth().signInWithPopup(provider)
    ).catch(console.error);
}
function loginGitHub() {
    const provider = new (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GithubAuthProvider)();
    provider.setCustomParameters({
        allow_signup: "true"
    });
    return login(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? (firebase_app__WEBPACK_IMPORTED_MODULE_0___default()) : null);


/***/ }),

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$g": () => (/* binding */ EXPORT_SIZES),
/* harmony export */   "B1": () => (/* binding */ HIGHLIGHT_KEYS),
/* harmony export */   "DM": () => (/* binding */ COLORS),
/* harmony export */   "Dl": () => (/* binding */ LANGUAGE_MIME_HASH),
/* harmony export */   "H8": () => (/* binding */ DEFAULT_WIDTHS),
/* harmony export */   "Hq": () => (/* binding */ DEFAULT_EXPORT_SIZE),
/* harmony export */   "UL": () => (/* binding */ EXPORT_SIZES_HASH),
/* harmony export */   "Z": () => (/* binding */ DEFAULT_SETTINGS),
/* harmony export */   "Zm": () => (/* binding */ DEFAULT_CODE),
/* harmony export */   "a2": () => (/* binding */ LANGUAGES),
/* harmony export */   "a5": () => (/* binding */ THEMES_HASH),
/* harmony export */   "aP": () => (/* binding */ LANGUAGE_NAME_HASH),
/* harmony export */   "g5": () => (/* binding */ FONTS),
/* harmony export */   "k$": () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   "mF": () => (/* binding */ LANGUAGE_MODE_HASH),
/* harmony export */   "pP": () => (/* binding */ DEFAULT_PRESETS),
/* harmony export */   "qh": () => (/* binding */ DEFAULT_BG_COLOR),
/* harmony export */   "t0": () => (/* binding */ DEFAULT_THEME),
/* harmony export */   "yU": () => (/* binding */ THEMES)
/* harmony export */ });
/* harmony import */ var tohash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8427);
/* harmony import */ var tohash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tohash__WEBPACK_IMPORTED_MODULE_0__);

const FONTS = [
    {
        id: "Anonymous Pro",
        name: "Anonymous Pro"
    },
    {
        id: "Cascadia Code",
        name: "Cascadia Code"
    },
    {
        id: "Droid Sans Mono",
        name: "Droid Sans Mono"
    },
    {
        id: "Fantasque Sans Mono",
        name: "Fantasque Sans Mono"
    },
    {
        id: "Fira Code",
        name: "Fira Code"
    },
    {
        id: "Hack",
        name: "Hack"
    },
    {
        id: "IBM Plex Mono",
        name: "IBM Plex Mono"
    },
    {
        id: "Inconsolata",
        name: "Inconsolata"
    },
    {
        id: "JetBrains Mono",
        name: "JetBrains Mono"
    },
    {
        id: "Monoid",
        name: "Monoid"
    },
    {
        id: "Source Code Pro",
        name: "Source Code Pro"
    },
    {
        id: "Space Mono",
        name: "Space Mono"
    },
    {
        id: "Ubuntu Mono",
        name: "Ubuntu Mono"
    }, 
];
const HIGHLIGHT_KEYS = [
    "background",
    "text",
    "variable",
    "attribute",
    "definition",
    "keyword",
    "operator",
    "property",
    "number",
    "string",
    "comment",
    "meta", 
];
const THEMES = [
    {
        id: "3024-night",
        name: "3024 Night",
        highlights: {
            background: "#090300",
            text: "#d6d5d4",
            variable: "#01a252",
            variable2: "#01a0e4",
            attribute: "#00c",
            definition: "#e8bbd0",
            keyword: "#db2d20",
            operator: "#fff",
            property: "#01a252",
            number: "#a16a94",
            string: "#fded02",
            comment: "#cdab53",
            meta: "#555"
        }
    },
    {
        id: "a11y-dark",
        name: "A11y Dark",
        highlights: {
            background: "#2b2b2b",
            text: "#f8f8f2",
            variable: "#00e0e0",
            attribute: "#abe338",
            definition: "#ffd700",
            keyword: "#ffa07a",
            operator: "#f8f8f2",
            property: "#abe338",
            number: "#dcc6e0",
            string: "#ffd700",
            comment: "#d4d0ab",
            meta: "#d4d0ab",
            tag: "#dcc6e0"
        }
    },
    {
        id: "blackboard",
        name: "Blackboard",
        highlights: {
            background: "#0C1021",
            text: "#F8F8F8",
            variable: "#FF6400",
            attribute: "#8DA6CE",
            definition: "#8DA6CE",
            keyword: "#FBDE2D",
            operator: "#fff",
            property: "#fff",
            number: "#D8FA3C",
            string: "#61CE3C",
            comment: "#AEAEAE",
            meta: "#D8FA3C",
            tag: "#8DA6CE"
        }
    },
    {
        id: "base16-dark",
        name: "Base 16 (Dark)",
        highlights: {
            background: "#151515",
            text: "#e0e0e0",
            variable: "#90a959",
            variable2: "#6a9fb5",
            attribute: "#00c",
            definition: "#d28445",
            keyword: "#ac4142",
            operator: "#fff",
            property: "#90a959",
            number: "#aa759f",
            string: "#f4bf75",
            comment: "#8f5536",
            meta: "#555",
            tag: "#ac4142"
        }
    },
    {
        id: "base16-light",
        name: "Base 16 (Light)",
        light: true,
        highlights: {
            background: "#f5f5f5",
            text: "#202020",
            variable: "#90a959",
            variable2: "#6a9fb5",
            attribute: "#90a959",
            definition: "#d28445",
            keyword: "#ac4142",
            operator: "#000",
            property: "#90a959",
            number: "#aa759f",
            string: "#f4bf75",
            comment: "#8f5536",
            meta: "#555",
            tag: "#ac4142"
        }
    },
    {
        id: "cobalt",
        name: "Cobalt",
        highlights: {
            background: "#002240",
            text: "#fff",
            variable: "#9effff",
            variable3: "white",
            attribute: "#ff80e1",
            definition: "#fff",
            keyword: "#ffee80",
            operator: "#fff",
            property: "#fff",
            number: "#ff80e1",
            string: "#3ad900",
            comment: "#08f",
            meta: "#ff9d00",
            tag: "#9effff"
        }
    },
    {
        id: "dracula",
        name: "Dracula",
        highlights: {
            background: "#282a36",
            text: "#f8f8f2",
            variable: "#50fa7b",
            variable2: "white",
            variable3: "#ffb86c",
            attribute: "#50fa7b",
            definition: "#50fa7b",
            keyword: "#ff79c6",
            operator: "#ff79c6",
            property: "#66d9ef",
            number: "#bd93f9",
            string: "#f1fa8c",
            comment: "#6272a4",
            meta: "#f8f8f2",
            tag: "#ff79c6"
        }
    },
    {
        id: "duotone-dark",
        name: "Duotone",
        highlights: {
            background: "#2a2734",
            text: "#6c6783",
            variable: "#ffcc99",
            variable2: "#7a63ee",
            variable3: "#7a63ee",
            attribute: "#ffcc99",
            definition: "#eeebff",
            keyword: "#ffcc99",
            operator: "#ffad5c",
            property: "#9a86fd",
            number: "#ffcc99",
            string: "#ffb870",
            comment: "#6c6783",
            meta: "#555",
            tag: "#eeebff"
        }
    },
    {
        id: "hopscotch",
        name: "Hopscotch",
        highlights: {
            background: "#322931",
            text: "#d5d3d5",
            variable: "#8fc13e",
            variable2: "#1290bf",
            attribute: "#8fc13e",
            definition: "#fd8b19",
            keyword: "#dd464c",
            operator: "#fff",
            property: "#8fc13e",
            number: "#c85e7c",
            string: "#fdcc59",
            comment: "#b33508",
            meta: "#555",
            tag: "#dd464c"
        }
    },
    {
        id: "lucario",
        name: "Lucario",
        highlights: {
            background: "#2b3e50",
            text: "#f8f8f2",
            variable: "#f8f8f2",
            variable3: "#ffb86c",
            attribute: "#66D9EF",
            definition: "#72C05D",
            keyword: "#ff6541",
            operator: "#66D9EF",
            property: "#f8f8f2",
            number: "#ca94ff",
            string: "#E6DB74",
            comment: "#5c98cd",
            meta: "#f8f8f2",
            tag: "#ff6541"
        }
    },
    {
        id: "material",
        name: "Material",
        highlights: {
            background: "#263238",
            text: "rgba(233, 237, 237, 1)",
            variable: "#82B1FF",
            variable2: "#80CBC4",
            variable3: "#DECB6B",
            attribute: "#FFCB6B",
            definition: "rgba(233, 237, 237, 1)",
            keyword: "rgba(199, 146, 234, 1)",
            operator: "rgba(233, 237, 237, 1)",
            property: "#80CBAE",
            number: "#F77669",
            string: "#C3E88D",
            comment: "#546E7A",
            meta: "#80CBC4",
            tag: "rgba(255, 83, 112, 1)"
        }
    },
    {
        id: "monokai",
        name: "Monokai",
        highlights: {
            background: "#272822",
            text: "#f8f8f2",
            variable: "#f8f8f2",
            variable2: "#9effff",
            variable3: "#66d9ef",
            attribute: "#a6e22e",
            definition: "#fd971f",
            keyword: "#f92672",
            operator: "#fff",
            property: "#a6e22e",
            number: "#ae81ff",
            string: "#e6db74",
            comment: "#75715e",
            meta: "#555",
            tag: "#bc6283"
        }
    },
    {
        id: "night-owl",
        name: "Night Owl",
        highlights: {
            background: "#011627",
            text: "#abb2bf",
            variable: "#82AAFF",
            attribute: "#F78C6C",
            definition: "#82AAFF",
            keyword: "#c792ea",
            operator: "#c792ea",
            property: "#fff",
            number: "#F78C6C",
            string: "#ecc48d",
            comment: "#5c6370",
            meta: "#7fdbca",
            tag: "#7fdbca"
        }
    },
    {
        id: "nord",
        name: "Nord",
        highlights: {
            background: "#2e3440",
            text: "#d8dee9",
            variable: "#88C0D0",
            variable3: "#d8dee9",
            attribute: "#8FBCBB",
            definition: "#D8DEE9",
            keyword: "#81A1C1",
            operator: "#81A1C1",
            property: "#D8DEE9",
            number: "#B48EAD",
            string: "#A3BE8C",
            comment: "#4C566A",
            meta: "#81A1C1",
            tag: "#81A1C1"
        }
    },
    {
        id: "oceanic-next",
        name: "Oceanic Next",
        highlights: {
            background: "#304148",
            text: "#f8f8f2",
            variable: "#f8f8f2",
            attribute: "#C594C5",
            definition: "#6699CC",
            keyword: "#C594C5",
            operator: "#fff",
            property: "#99C794",
            number: "#F99157",
            string: "#99C794",
            comment: "#65737E",
            meta: "#555",
            tag: "#C594C5"
        }
    },
    {
        id: "one-light",
        name: "One Light",
        light: true,
        highlights: {
            background: "#fafafa",
            text: "#383a42",
            variable: "#e06c75",
            variable2: "#e45649",
            attribute: "#d19a66",
            definition: "#4078f2",
            keyword: "#a626a4",
            operator: "#0184bc",
            property: "#4078f2",
            number: "#986801",
            string: "#50a14f",
            comment: "#a0a1a7",
            meta: "#383a42",
            tag: "#e45649"
        }
    },
    {
        id: "one-dark",
        name: "One Dark",
        highlights: {
            background: "#282c34",
            text: "#abb2bf",
            variable: "#e06c75",
            attribute: "#d19a66",
            definition: "#e5c07b",
            keyword: "#c678dd",
            operator: "#56b6c2",
            property: "#56b6c2",
            number: "#d19a66",
            string: "#98c379",
            comment: "#5c6370",
            meta: "#abb2bf",
            tag: "#e06c75"
        }
    },
    {
        id: "panda-syntax",
        name: "Panda",
        highlights: {
            background: "#292A2B",
            text: "#E6E6E6",
            variable: "#ffb86c",
            variable2: "#ff9ac1",
            variable3: "#ff9ac1",
            attribute: "#ffb86c",
            definition: "#e6e6e6",
            keyword: "#FF75B5",
            operator: "#f3f3f3",
            property: "#f3f3f3",
            number: "#FFB86C",
            string: "#19F9D8",
            comment: "#676B79",
            meta: "#b084eb",
            tag: "#ff2c6d"
        }
    },
    {
        id: "paraiso-dark",
        name: "Paraiso",
        highlights: {
            background: "#2f1e2e",
            text: "#b9b6b0",
            variable: "#48b685",
            variable2: "#06b6ef",
            attribute: "#48b685",
            definition: "#f99b15",
            keyword: "#ef6155;",
            operator: "#fff",
            property: "#48b685",
            number: "#815ba4",
            string: "#fec418",
            comment: "#e96ba8",
            meta: "#555",
            tag: "#ef6155"
        }
    },
    {
        id: "seti",
        name: "Seti",
        highlights: {
            background: "#151718",
            text: "#CFD2D1",
            variable: "#55b5db",
            variable2: "#a074c4",
            variable3: "#9fca56",
            attribute: "#9fca56",
            definition: "#55b5db",
            keyword: "#e6cd69",
            operator: "#9fca56",
            property: "#a074c4",
            number: "#cd3f45",
            string: "#55b5db",
            comment: "#41535b",
            meta: "#55b5db",
            tag: "#55b5db"
        }
    },
    {
        id: "shades-of-purple",
        name: "Shades of Purple ",
        highlights: {
            background: "#2D2B55",
            text: "#FFFFFF",
            variable: "#9EFFFF",
            attribute: "#9EFFFF",
            definition: "#9EFFFF",
            keyword: "#FF9D00",
            operator: "#FF9D00",
            property: "#FAD000",
            number: "#FF628C",
            string: "#A5FF90",
            comment: "#B362FF",
            meta: "#FF9D00",
            tag: "#9EFFFF"
        }
    },
    {
        id: "solarized dark",
        name: "Solarized (Dark)",
        link: "solarized",
        highlights: {
            background: "#002b36",
            text: "#839496",
            variable: "#839496",
            variable2: "#b58900",
            variable3: "#6c71c4",
            attribute: "#2aa198",
            definition: "#2aa198",
            keyword: "#cb4b16",
            operator: "#6c71c4",
            property: "#2aa198",
            number: "#d33682",
            string: "#859900",
            comment: "#586e75",
            meta: "#859900",
            tag: "#93a1a1"
        }
    },
    {
        id: "solarized light",
        name: "Solarized (Light)",
        link: "solarized",
        light: true,
        highlights: {
            background: "#fdf6e3",
            text: "#657b83",
            variable: "#839496",
            variable2: "#b58900",
            variable3: "#6c71c4",
            attribute: "#2aa198",
            definition: "#2aa198",
            keyword: "#cb4b16",
            operator: "#6c71c4",
            property: "#2aa198",
            number: "#d33682",
            string: "#859900",
            comment: "#586e75",
            meta: "#859900",
            tag: "#93a1a1"
        }
    },
    {
        id: "synthwave-84",
        name: "SynthWave '84",
        highlights: {
            background: "#2b213a",
            text: "#b6b1b1",
            variable: "#f92aad",
            attribute: "#fff5f6",
            definition: "#fdfdfd",
            keyword: "#f4eee4",
            operator: "#f4eee4",
            property: "#fdfdfd",
            number: "#f97e72",
            string: "#ff8b39",
            comment: "#6d77b3",
            meta: "#ff8b39",
            tag: "#f92aad"
        }
    },
    {
        id: "twilight",
        name: "Twilight",
        highlights: {
            background: "#141414",
            text: "#f7f7f7",
            variable: "#607392",
            attribute: "#d6bb6d",
            definition: "#607392",
            keyword: "#f9ee98",
            operator: "#cda869",
            property: "#fff",
            number: "#ca7841",
            string: "#8f9d6a",
            comment: "#777",
            meta: "#f7f7f7",
            tag: "#997643"
        }
    },
    {
        id: "verminal",
        name: "Verminal",
        highlights: {
            background: "rgba(0, 0, 0, 0.85)",
            text: "#fff",
            variable: "#ff9ba3",
            variable2: "#fff",
            attribute: "#d19a66",
            definition: "#34B7FF",
            keyword: "#9AE1FF",
            operator: "#FA78C3",
            property: "#0af",
            number: "#d19a66",
            string: "#98c379",
            comment: "#5c6370",
            meta: "#abb2bf",
            tag: "#e06c75"
        }
    },
    {
        id: "vscode",
        name: "VSCode",
        highlights: {
            background: "#1E1E1E",
            text: "#D4D4D4",
            variable: "#9CDCFE",
            attribute: "#d19a66",
            definition: "#DCDCAA",
            keyword: "#C586C0",
            operator: "#D4D4D4",
            property: "#DCDCAA",
            number: "#B5CEA8",
            string: "#CE9178",
            comment: "#6A9955",
            meta: "#D4D4D4",
            tag: "#569cd6"
        }
    },
    {
        id: "yeti",
        name: "Yeti",
        light: true,
        highlights: {
            background: "#ECEAE8",
            text: "#d1c9c0",
            variable: "#55b5db",
            variable2: "#a074c4",
            variable3: "#96c0d8",
            attribute: "#9fb96e",
            definition: "#55b5db",
            keyword: "#9fb96e",
            operator: "#9fb96e",
            property: "#a074c4",
            number: "#a074c4",
            string: "#96c0d8",
            comment: "#d4c8be",
            meta: "#96c0d8",
            tag: "#96c0d8"
        }
    },
    {
        id: "zenburn",
        name: "Zenburn",
        highlights: {
            background: "#3f3f3f",
            text: "#dcdccc",
            variable: "#dfaf8f",
            variable3: "#dcdccc",
            attribute: "#dfaf8f",
            definition: "#dcdccc",
            keyword: "#f0dfaf",
            operator: "#f0efd0",
            property: "#dfaf8f",
            number: "#dcdccc",
            string: "#cc9393",
            comment: "#7f9f7f",
            meta: "#f0dfaf",
            tag: "#93e0e3"
        }
    }, 
];
const THEMES_HASH = tohash__WEBPACK_IMPORTED_MODULE_0___default()(THEMES);
const LANGUAGES = [
    {
        name: "Auto",
        mode: "auto"
    },
    {
        name: "Apache",
        mode: "apache",
        mime: "text/apache",
        custom: true,
        highlight: true
    },
    {
        name: "Bash",
        mode: "shell",
        mime: "application/x-sh",
        highlight: true
    },
    {
        name: "Plain Text",
        mode: "text"
    },
    {
        name: "C",
        mode: "clike",
        mime: "text/x-csrc",
        short: "c"
    },
    {
        name: "C++",
        mode: "clike",
        mime: "text/x-c++src",
        short: "c-like",
        highlight: true
    },
    {
        name: "C#",
        mode: "clike",
        mime: "text/x-csharp",
        short: "csharp",
        highlight: true
    },
    {
        name: "Clojure",
        mode: "clojure",
        highlight: true
    },
    {
        name: "COBOL",
        mode: "cobol"
    },
    {
        name: "CoffeeScript",
        mode: "coffeescript",
        highlight: true
    },
    {
        name: "Crystal",
        mode: "crystal",
        highlight: true
    },
    {
        name: "CSS",
        mode: "css",
        highlight: true
    },
    {
        name: "D",
        mode: "d",
        highlight: true
    },
    {
        name: "Dart",
        mode: "dart",
        highlight: true
    },
    {
        name: "Diff",
        mode: "diff",
        mime: "text/x-diff",
        highlight: true
    },
    {
        name: "Django",
        mode: "django",
        highlight: true
    },
    {
        name: "Docker",
        mode: "dockerfile",
        highlight: true
    },
    {
        name: "Elixir",
        mode: "elixir",
        custom: true,
        highlight: true
    },
    {
        name: "Elm",
        mode: "elm",
        highlight: true
    },
    {
        name: "Erlang",
        mode: "erlang",
        highlight: true
    },
    {
        name: "F#",
        mime: "text/x-fsharp",
        mode: "mllike",
        short: "fsharp",
        highlight: true
    },
    {
        name: "Fortran",
        mode: "fortran",
        highlight: true
    },
    {
        name: "Gherkin",
        mode: "gherkin",
        highlight: true
    },
    {
        name: "GraphQL",
        mode: "graphql",
        custom: true
    },
    {
        name: "Go",
        mode: "go",
        mime: "text/x-go",
        highlight: true
    },
    {
        name: "Groovy",
        mode: "groovy",
        highlight: true
    },
    {
        name: "Handlebars",
        mode: "handlebars",
        highlight: true
    },
    {
        name: "Haskell",
        mode: "haskell",
        highlight: true
    },
    {
        name: "HTML/XML",
        mode: "htmlmixed"
    },
    {
        name: "Java",
        mode: "clike",
        mime: "text/x-java",
        short: "java",
        highlight: true
    },
    {
        name: "JavaScript",
        mode: "javascript",
        short: "javascript",
        highlight: true
    },
    {
        name: "JSON",
        mode: "javascript",
        mime: "application/json",
        short: "json",
        highlight: true
    },
    {
        name: "JSX",
        mode: "jsx",
        short: "jsx"
    },
    {
        name: "Julia",
        mode: "julia",
        highlight: true
    },
    {
        name: "Kotlin",
        mode: "clike",
        mime: "text/x-kotlin",
        short: "kotlin",
        highlight: true
    },
    {
        name: "LaTeX",
        mode: "stex",
        short: "latex",
        highlight: true
    },
    {
        name: "Lisp",
        mode: "commonlisp",
        short: "lisp",
        highlight: true
    },
    {
        name: "Lua",
        mode: "lua",
        highlight: true
    },
    {
        name: "Markdown",
        mode: "markdown",
        highlight: true
    },
    {
        name: "Mathematica",
        mode: "mathematica",
        highlight: true
    },
    {
        name: "MATLAB/Octave",
        mode: "octave",
        mime: "text/x-octave",
        short: "matlab",
        highlight: true
    },
    {
        name: "MySQL",
        mode: "sql",
        mime: "text/x-mysql",
        short: "mysql"
    },
    {
        name: "N-Triples",
        mode: "ntriples",
        mime: "application/n-triples"
    },
    {
        name: "NGINX",
        mode: "nginx",
        highlight: true
    },
    {
        name: "Nim",
        mode: "nim",
        custom: true,
        highlight: true
    },
    {
        name: "Objective C",
        mode: "clike",
        mime: "text/x-objectivec",
        short: "objectivec",
        highlight: true
    },
    {
        name: "OCaml",
        mode: "mllike",
        short: "ocaml",
        highlight: true
    },
    {
        name: "Pascal",
        mode: "pascal"
    },
    {
        name: "Perl",
        mode: "perl",
        highlight: true
    },
    {
        name: "PHP",
        mode: "php",
        mime: "text/x-php",
        short: "php",
        highlight: true
    },
    {
        name: "PowerShell",
        mode: "powershell",
        highlight: true
    },
    {
        name: "Protocol Buffer",
        mode: "protobuf"
    },
    {
        name: "Python",
        mode: "python",
        highlight: true
    },
    {
        name: "R",
        mode: "r",
        highlight: true
    },
    {
        name: "RISC-V",
        mode: "riscv",
        custom: true
    },
    {
        name: "Ruby",
        mode: "ruby",
        highlight: true
    },
    {
        name: "Rust",
        mode: "rust",
        highlight: true
    },
    {
        name: "Sass",
        mode: "sass"
    },
    {
        name: "Scala",
        mode: "clike",
        mime: "text/x-scala",
        short: "scala",
        highlight: true
    },
    {
        name: "Smalltalk",
        mode: "smalltalk",
        highlight: true
    },
    {
        name: "Solidity",
        mode: "solidity",
        custom: true
    },
    {
        name: "SPARQL",
        mode: "sparql",
        mime: "application/sparql-query"
    },
    {
        name: "SQL",
        mode: "sql",
        highlight: true
    },
    {
        name: "Stylus",
        mode: "stylus",
        mime: "stylus",
        highlight: true
    },
    {
        name: "Swift",
        mode: "swift",
        highlight: true
    },
    {
        name: "TCL",
        mode: "tcl",
        highlight: true
    },
    {
        name: "TOML",
        mode: "toml"
    },
    {
        name: "Turtle",
        mode: "turtle",
        mime: "text/turtle"
    },
    {
        name: "TypeScript",
        mode: "javascript",
        mime: "application/typescript",
        short: "typescript",
        highlight: true
    },
    {
        name: "TSX",
        mode: "jsx",
        mime: "text/typescript-jsx",
        short: "tsx"
    },
    {
        name: "Twig",
        mode: "twig",
        mime: "text/x-twig",
        highlight: true
    },
    {
        name: "VB.NET",
        mode: "vb"
    },
    {
        name: "Verilog",
        mode: "verilog",
        highlight: true
    },
    {
        name: "VHDL",
        mode: "vhdl",
        highlight: true
    },
    {
        name: "Vue",
        mode: "vue"
    },
    {
        name: "XQuery",
        mode: "xquery",
        highlight: true
    },
    {
        name: "YAML",
        mode: "yaml",
        highlight: true
    }, 
];
const EXPORT_SIZES = [
    {
        id: "1x",
        name: "1x",
        value: 1
    },
    {
        id: "2x",
        name: "2x",
        value: 2
    },
    {
        id: "4x",
        name: "4x",
        value: 4
    }, 
];
const EXPORT_SIZES_HASH = tohash__WEBPACK_IMPORTED_MODULE_0___default()(EXPORT_SIZES);
const LANGUAGE_MIME_HASH = tohash__WEBPACK_IMPORTED_MODULE_0___default()(LANGUAGES, "mime");
const LANGUAGE_MODE_HASH = tohash__WEBPACK_IMPORTED_MODULE_0___default()(LANGUAGES, "mode");
const LANGUAGE_NAME_HASH = tohash__WEBPACK_IMPORTED_MODULE_0___default()(LANGUAGES, "short");
const DEFAULT_LANGUAGE = "auto";
const DEFAULT_THEME = THEMES_HASH.seti;
const DEFAULT_BG_COLOR = "rgba(171, 184, 195, 1)";
const DEFAULT_EXPORT_SIZE = EXPORT_SIZES_HASH["2x"];
const COLORS = {
    BLACK: "#121212",
    PRIMARY: "#F8E81C",
    SECONDARY: "#fff",
    GRAY: "#858585",
    DARK_GRAY: "#393939",
    HOVER: "#1F1F1F",
    PURPLE: "#C198FB",
    DARK_PURPLE: "#55436F",
    RED: "#ff5f56",
    BLUE: "#57b5f9",
    GREEN: "#37b589"
};
const DEFAULT_CODE = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`;
const DEFAULT_SETTINGS = {
    paddingVertical: "56px",
    paddingHorizontal: "56px",
    backgroundImage: null,
    backgroundImageSelection: null,
    backgroundMode: "color",
    backgroundColor: DEFAULT_BG_COLOR,
    dropShadow: true,
    dropShadowOffsetY: "20px",
    dropShadowBlurRadius: "68px",
    theme: DEFAULT_THEME.id,
    windowTheme: "none",
    language: DEFAULT_LANGUAGE,
    fontFamily: "Hack",
    fontSize: "14px",
    lineHeight: "133%",
    windowControls: true,
    widthAdjustment: true,
    lineNumbers: false,
    firstLineNumber: 1,
    exportSize: "2x",
    watermark: false,
    squaredImage: false,
    hiddenCharacters: false,
    name: "",
    width: 680
};
const DEFAULT_WIDTHS = {
    minWidth: 320,
    maxWidth: 1280
};
const DEFAULT_PRESETS = [
    {
        ...DEFAULT_SETTINGS,
        icon: "/static/presets/4.png",
        id: "preset:4"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(74,144,226,1)",
        dropShadow: false,
        theme: "material",
        fontFamily: "Fira Code",
        lineHeight: "152%",
        icon: "/static/presets/7.png",
        id: "preset:7"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(248,231,28,1)",
        dropShadow: false,
        theme: "blackboard",
        fontFamily: "Fira Code",
        lineHeight: "152%",
        icon: "/static/presets/8.png",
        id: "preset:8"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(182,162,145,1)",
        dropShadow: false,
        theme: "zenburn",
        windowTheme: "bw",
        lineHeight: "152%",
        icon: "/static/presets/9.png",
        id: "preset:9"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(121,72,185,1)",
        dropShadow: false,
        theme: "verminal",
        windowTheme: "bw",
        fontFamily: "Fira Code",
        fontSize: "14px",
        lineHeight: "143%",
        icon: "/static/presets/0.png",
        id: "preset:0"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(239,40,44,1)",
        theme: "one-light",
        lineHeight: "143%",
        icon: "/static/presets/1.png",
        id: "preset:1"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(31,129,109,1)",
        dropShadow: false,
        theme: "night-owl",
        lineHeight: "143%",
        windowControls: false,
        icon: "/static/presets/2.png",
        id: "preset:2"
    },
    {
        ...DEFAULT_SETTINGS,
        backgroundColor: "rgba(222,171,99,1)",
        theme: "duotone-dark",
        icon: "/static/presets/5.png",
        id: "preset:5"
    }, 
];


/***/ }),

/***/ 4959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AK": () => (/* binding */ savePresets),
/* harmony export */   "CE": () => (/* binding */ omit),
/* harmony export */   "Gw": () => (/* binding */ getSettings),
/* harmony export */   "Ox": () => (/* binding */ generateId),
/* harmony export */   "Ph": () => (/* binding */ fileToDataURL),
/* harmony export */   "RC": () => (/* binding */ getThemes),
/* harmony export */   "Ss": () => (/* binding */ fileToJSON),
/* harmony export */   "Tz": () => (/* binding */ unescapeHtml),
/* harmony export */   "UJ": () => (/* binding */ saveThemes),
/* harmony export */   "XQ": () => (/* binding */ formatCode),
/* harmony export */   "Xv": () => (/* binding */ escapeHtml),
/* harmony export */   "Yz": () => (/* binding */ getPresets),
/* harmony export */   "ZN": () => (/* binding */ toggle),
/* harmony export */   "iS": () => (/* binding */ stringifyColor),
/* harmony export */   "rL": () => (/* binding */ clearSettings),
/* harmony export */   "zQ": () => (/* binding */ saveSettings)
/* harmony export */ });
/* harmony import */ var morphmorph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6589);
/* harmony import */ var morphmorph__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morphmorph__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omitby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3250);
/* harmony import */ var lodash_omitby__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omitby__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var escape_goat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([escape_goat__WEBPACK_IMPORTED_MODULE_2__]);
escape_goat__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SETTINGS_KEY = "CARBON_STATE";
const PRESETS_KEY = "CARBON_PRESETS";
const THEMES_KEY = "CARBON_THEMES";
const createAssigner = (key)=>{
    const assign = morphmorph__WEBPACK_IMPORTED_MODULE_0___default().assign(key);
    return (v)=>assign(localStorage, JSON.stringify(v))
    ;
};
const map = (fn)=>(obj)=>obj.map(fn)
;
const omit = (keys)=>(object)=>lodash_omitby__WEBPACK_IMPORTED_MODULE_1___default()(object, (_, k)=>keys.indexOf(k) > -1
        )
;
const saveSettings = morphmorph__WEBPACK_IMPORTED_MODULE_0___default().compose(createAssigner(SETTINGS_KEY), omit([
    "code",
    "backgroundImage",
    "backgroundImageSelection",
    "themes",
    "highlights",
    "fontUrl",
    "selectedLines",
    "name", 
]));
const savePresets = morphmorph__WEBPACK_IMPORTED_MODULE_0___default().compose(createAssigner(PRESETS_KEY), map(omit([
    "backgroundImageSelection"
])));
const saveThemes = createAssigner(THEMES_KEY);
const parse = (v)=>{
    try {
        return JSON.parse(v);
    } catch (e) {
    // pass
    }
};
const toggle = (stateField)=>(state)=>({
            [stateField]: !state[stateField]
        })
;
// https://gist.github.com/alexgibson/1704515
const escapeHtml = (s)=>{
    if (typeof s === "string") {
        return s.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;");
    }
};
const unescapeHtml = (s)=>{
    if (typeof s === "string") {
        return (0,escape_goat__WEBPACK_IMPORTED_MODULE_2__.htmlUnescape)(s).replace(/&#x2F;/g, "/");
    }
};
const getSettings = morphmorph__WEBPACK_IMPORTED_MODULE_0___default().compose(parse, escapeHtml, morphmorph__WEBPACK_IMPORTED_MODULE_0___default().get(SETTINGS_KEY));
const getPresets = morphmorph__WEBPACK_IMPORTED_MODULE_0___default().compose(parse, morphmorph__WEBPACK_IMPORTED_MODULE_0___default().get(PRESETS_KEY));
const getThemes = morphmorph__WEBPACK_IMPORTED_MODULE_0___default().compose(parse, morphmorph__WEBPACK_IMPORTED_MODULE_0___default().get(THEMES_KEY));
const clearSettings = ()=>localStorage.removeItem(SETTINGS_KEY)
;
const fileToDataURL = (blob)=>new Promise((res)=>{
        const reader = new FileReader();
        reader.onload = (e)=>res(e.target.result)
        ;
        reader.readAsDataURL(blob);
    })
;
const fileToJSON = (blob)=>new Promise((res)=>{
        const reader = new FileReader();
        reader.onload = (e)=>res(parse(e.target.result))
        ;
        reader.readAsText(blob);
    })
;
const formatCode = async (code)=>{
    const prettier = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7413, 23));
    const babylonParser = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9284, 23));
    return prettier.format(code, {
        parser: "babel",
        plugins: [
            babylonParser
        ],
        semi: false,
        singleQuote: true
    });
};
const stringifyColor = (obj)=>`rgba(${obj.rgb.r},${obj.rgb.g},${obj.rgb.b},${obj.rgb.a})`
;
const generateId = ()=>Math.random().toString(36).slice(2)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;