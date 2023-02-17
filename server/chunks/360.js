"use strict";
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 2329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalHighlights)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


// Theirs

function GlobalHighlights({ highlights  }) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "13734f156f215e2f",
        dynamic: [
            highlights.text,
            highlights.background,
            highlights.string,
            highlights.comment,
            highlights.variable,
            highlights.variable2 || highlights.variable,
            highlights.variable3 || highlights.variable,
            highlights.number,
            highlights.keyword,
            highlights.property,
            highlights.definition,
            highlights.meta,
            highlights.operator,
            highlights.attribute,
            highlights.tag,
            highlights.builtin
        ],
        children: `.CodeMirror__container .CodeMirror{color:${highlights.text}!important;background-color:${highlights.background}!important}.cm-string,.cm-string-2{color:${highlights.string}!important}.cm-comment{color:${highlights.comment}!important}.cm-variable{color:${highlights.variable}!important}.cm-variable-2{color:${highlights.variable2 || highlights.variable}!important}.cm-variable-3{color:${highlights.variable3 || highlights.variable}!important}.cm-number{color:${highlights.number}!important}.cm-keyword{color:${highlights.keyword}!important}.cm-property{color:${highlights.property}!important}.cm-def{color:${highlights.definition}!important}.cm-meta{color:${highlights.meta}!important}.cm-operator{color:${highlights.operator}!important}.cm-attribute{color:${highlights.attribute}!important}.cm-tag{color:${highlights.tag}!important}.cm-builtin{color:${highlights.builtin}!important}.cm-s-dracula .CodeMirror-cursor{border-left:solid 2px#159588!important}.cm-s-vscode .CodeMirror-cursor{border-left:solid 2px#bebebe!important}.cm-s-solarized{-webkit-box-shadow:none!important;-moz-box-shadow:none!important;box-shadow:none!important}.cm-s-solarized.cm-s-light{text-shadow:#eee8d5 0 1px!important}.cm-s-solarized.cm-s-light .CodeMirror-linenumber,.cm-s-solarized.cm-s-light .CodeMirror-linenumbers{background-color:#fdf6e3!important}.cm-s-solarized.cm-s-dark .CodeMirror-linenumber,.cm-s-solarized.cm-s-dark .CodeMirror-linenumbers{background-color:#002b36!important}`
    });
};


/***/ }),

/***/ 6262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aA": () => (/* binding */ updateRouteState),
/* harmony export */   "wy": () => (/* binding */ getRouteState)
/* harmony export */ });
/* unused harmony exports serializeState, deserializeState */
/* harmony import */ var morphmorph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6589);
/* harmony import */ var morphmorph__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morphmorph__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7310);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util__WEBPACK_IMPORTED_MODULE_2__]);
_util__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const URL_LIMIT = 4e3;
const mapper = new (morphmorph__WEBPACK_IMPORTED_MODULE_0___default())({
    types: {
        bool: (v)=>{
            if (v == null) return undefined;
            if (v === "false") return false;
            return Boolean(v);
        },
        int: (v)=>{
            const integer = parseInt(v);
            if (isNaN(integer)) return undefined;
            return integer;
        },
        intArray: (v)=>{
            if (v == null) return undefined;
            return v.split(",").filter((i)=>!isNaN(i)
            ).map((i)=>parseInt(i)
            );
        },
        parse: (v)=>{
            try {
                const x = JSON.parse(v);
                return x;
            } catch (e) {
                return v;
            }
        },
        decode: (v)=>{
            if (v == null) return undefined;
            try {
                return decodeURIComponent(v);
            } catch (e) {
                return v;
            }
        },
        encode: (v)=>{
            if (v == null) return undefined;
            try {
                const encoded = encodeURIComponent(v);
                if (encoded.length > URL_LIMIT) {
                    // soft prevent URL length limit errors https://github.com/carbon-app/carbon/issues/829
                    return encodeURIComponent(v.slice(0, URL_LIMIT / 2));
                }
                return encoded;
            } catch (e) {
                return v;
            }
        }
    }
});
const readMappings = [
    {
        field: "bg:backgroundColor"
    },
    {
        field: "t:theme"
    },
    {
        field: "wt:windowTheme"
    },
    {
        field: "l:language"
    },
    {
        field: "width"
    },
    {
        field: "ds:dropShadow",
        type: "bool"
    },
    {
        field: "dsyoff:dropShadowOffsetY"
    },
    {
        field: "dsblur:dropShadowBlurRadius"
    },
    {
        field: "wc:windowControls",
        type: "bool"
    },
    {
        field: "wa:widthAdjustment",
        type: "bool"
    },
    {
        field: "pv:paddingVertical"
    },
    {
        field: "ph:paddingHorizontal"
    },
    {
        field: "ln:lineNumbers",
        type: "bool"
    },
    {
        field: "fl:firstLineNumber",
        type: "int"
    },
    {
        field: "fm:fontFamily"
    },
    {
        field: "fs:fontSize"
    },
    {
        field: "lh:lineHeight"
    },
    {
        field: "si:squaredImage",
        type: "bool"
    },
    {
        field: "es:exportSize"
    },
    {
        field: "wm:watermark",
        type: "bool"
    },
    {
        field: "sl:selectedLines",
        type: "intArray"
    },
    {
        field: "copy",
        type: "bool"
    },
    {
        field: "readonly",
        type: "bool"
    },
    {
        field: "id"
    },
    {
        field: "highlights",
        type: "parse"
    },
    {
        field: "code",
        type: "decode"
    },
    {
        field: "tb:titleBar",
        type: "decode"
    }, 
];
const writeMappings = [
    {
        field: "backgroundColor:bg"
    },
    {
        field: "theme:t"
    },
    {
        field: "windowTheme:wt"
    },
    {
        field: "language:l"
    },
    {
        field: "width"
    },
    {
        field: "dropShadow:ds",
        type: "bool"
    },
    {
        field: "dropShadowOffsetY:dsyoff"
    },
    {
        field: "dropShadowBlurRadius:dsblur"
    },
    {
        field: "windowControls:wc",
        type: "bool"
    },
    {
        field: "widthAdjustment:wa",
        type: "bool"
    },
    {
        field: "paddingVertical:pv"
    },
    {
        field: "paddingHorizontal:ph"
    },
    {
        field: "lineNumbers:ln",
        type: "bool"
    },
    {
        field: "firstLineNumber:fl",
        type: "int"
    },
    {
        field: "fontFamily:fm"
    },
    {
        field: "fontSize:fs"
    },
    {
        field: "lineHeight:lh"
    },
    {
        field: "squaredImage:si",
        type: "bool"
    },
    {
        field: "exportSize:es"
    },
    {
        field: "watermark:wm",
        type: "bool"
    },
    {
        field: "code",
        type: "encode"
    },
    {
        field: "titleBar:tb",
        type: "encode"
    }, 
];
const serializeState = (state)=>{
    const stateString = encodeURIComponent(JSON.stringify(state));
    return encodeURIComponent( false ? 0 : Buffer.from(stateString).toString("base64"));
};
const deserializeState = (serializedState)=>{
    let stateString;
    if (false) {} else {
        stateString = Buffer.from(serializedState, "base64").toString();
    }
    return JSON.parse(decodeURIComponent(stateString));
};
const getQueryStringObject = (query)=>{
    if (query.state) {
        return deserializeState(query.state);
    }
    const state = mapper.map(readMappings, query);
    Object.keys(state).forEach((key)=>{
        if (state[key] === "") state[key] = undefined;
    });
    return state;
};
function getQueryStringState(query) {
    const queryParams = getQueryStringObject(query);
    return Object.keys(queryParams).length ? queryParams : {};
}
function fixAsPathEncoding(asPath) {
    try {
        return url__WEBPACK_IMPORTED_MODULE_1___default().parse(asPath, true);
    } catch (e) {
        return url__WEBPACK_IMPORTED_MODULE_1___default().parse(encodeURI(asPath), true);
    }
}
const getRouteState = (router)=>{
    const { asPath =""  } = router;
    const { query , pathname  } = fixAsPathEncoding(asPath);
    const queryState = getQueryStringState(query);
    const path = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .escapeHtml */ .Xv)(pathname// remove trailing slash
    .replace(/\/$/, "").split("/").pop());
    const parameter = path.length >= 19 && path.indexOf(".") < 0 ? path : null;
    return {
        parameter,
        queryState
    };
};
const updateRouteState = (router, state)=>{
    const mappedState = mapper.map(writeMappings, state);
    // calls `encodeURIComponent` on each key internally
    // const query = qs.stringify(mappedState)
    router.replace({
        pathname: router.pathname
    }, {
        pathname: router.pathname,
        query: mappedState
    }, {
        shallow: true,
        scroll: false
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;