"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112,288,405];
exports.modules = {

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4369);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__, _lib_api__WEBPACK_IMPORTED_MODULE_4__]);
([_index__WEBPACK_IMPORTED_MODULE_3__, _lib_api__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





async function getServerSideProps({ req , res , query  }) {
    const { id: path , filename  } = query;
    const parameter = path.length >= 19 && path.indexOf(".") < 0 ? path : null;
    let snippet;
    if (parameter) {
        const host = req ? req.headers.host : undefined;
        snippet = await _lib_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].snippet.get */ .Z.snippet.get(parameter, {
            host,
            filename
        });
        if (snippet) {
            return {
                props: {
                    snippet,
                    host
                }
            };
        }
        // 404 Not found
        if (res) {
            res.writeHead(302, {
                Location: "/"
            });
            res.end();
        } else {
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
        }
    }
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(function IdPage(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...props
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3122:
/***/ ((module) => {

module.exports = require("@reach/visually-hidden");

/***/ }),

/***/ 8401:
/***/ ((module) => {

module.exports = require("actionsack");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8367:
/***/ ((module) => {

module.exports = require("cm-show-invisibles");

/***/ }),

/***/ 3831:
/***/ ((module) => {

module.exports = require("codemirror");

/***/ }),

/***/ 1698:
/***/ ((module) => {

module.exports = require("codemirror-graphql/mode");

/***/ }),

/***/ 4062:
/***/ ((module) => {

module.exports = require("codemirror-mode-elixir");

/***/ }),

/***/ 238:
/***/ ((module) => {

module.exports = require("codemirror-solidity");

/***/ }),

/***/ 772:
/***/ ((module) => {

module.exports = require("downshift");

/***/ }),

/***/ 4962:
/***/ ((module) => {

module.exports = require("dropperx");

/***/ }),

/***/ 9052:
/***/ ((module) => {

module.exports = require("eitherx");

/***/ }),

/***/ 4324:
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ 4610:
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ 2145:
/***/ ((module) => {

module.exports = require("highlight.js/lib/core");

/***/ }),

/***/ 7985:
/***/ ((module) => {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),

/***/ 4305:
/***/ ((module) => {

module.exports = require("lodash.debounce");

/***/ }),

/***/ 3250:
/***/ ((module) => {

module.exports = require("lodash.omitby");

/***/ }),

/***/ 5875:
/***/ ((module) => {

module.exports = require("match-sorter");

/***/ }),

/***/ 6589:
/***/ ((module) => {

module.exports = require("morphmorph");

/***/ }),

/***/ 3231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9284:
/***/ ((module) => {

module.exports = require("prettier/parser-babel");

/***/ }),

/***/ 7413:
/***/ ((module) => {

module.exports = require("prettier/standalone");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3388:
/***/ ((module) => {

module.exports = require("react-click-outside");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-codemirror2");

/***/ }),

/***/ 6208:
/***/ ((module) => {

module.exports = require("react-color/lib/Sketch");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6141:
/***/ ((module) => {

module.exports = require("react-image-crop");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8427:
/***/ ((module) => {

module.exports = require("tohash");

/***/ }),

/***/ 6488:
/***/ ((module) => {

module.exports = import("escape-goat");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,860,622,664,94,912,2,292,360,285,983,757,369], () => (__webpack_exec__(1577)));
module.exports = __webpack_exports__;

})();