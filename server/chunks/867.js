"use strict";
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 3867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ApiContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7896);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7533);
/* harmony import */ var _components_style_Font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5026);
/* harmony import */ var _components_Carbon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1802);
/* harmony import */ var _components_Themes_GlobalHighlights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2329);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8299);
/* harmony import */ var _lib_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ApiContext__WEBPACK_IMPORTED_MODULE_5__, _lib_routing__WEBPACK_IMPORTED_MODULE_11__]);
([_components_ApiContext__WEBPACK_IMPORTED_MODULE_5__, _lib_routing__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Theirs



// Ours







const Page = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-665d1a0250546110",
                    children: "Carbon Embeds"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .MetaTags */ .NR, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .StylesheetLink */ .wH, {
                theme: props.theme
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .CodeMirrorLink */ .ap, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_style_Font__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            props.children,
            _components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .HIGHLIGHTS_ONLY.includes */ .tO.includes(props.theme) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Themes_GlobalHighlights__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                highlights: _lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .THEMES_HASH */ .a5[props.theme].highlights
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "665d1a0250546110",
                children: "html,body{margin:0;background:transparent;min-height:0}"
            })
        ]
    })
;
class Embed extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    static contextType = _components_ApiContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;
    state = {
        ..._lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_SETTINGS */ .Z,
        code: _lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_CODE */ .Zm,
        mounted: false,
        readOnly: true
    };
    snippet = {};
    async componentDidMount() {
        const { queryState  } = (0,_lib_routing__WEBPACK_IMPORTED_MODULE_11__/* .getRouteState */ .wy)(this.props.router);
        this.setState({
            ...this.props.snippet,
            ...queryState,
            copyable: queryState.copy !== false,
            readOnly: queryState.readonly !== false,
            mounted: true
        }, this.postMessage);
    }
    ref = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    postMessage = ()=>{
        setTimeout(()=>window.top.postMessage(JSON.stringify({
                // Used by embed provider
                src: window.location.toString(),
                context: "iframe.resize",
                height: this.ref.current.offsetHeight
            }), "*")
        , 0);
    };
    updateCode = (code)=>{
        this.setState({
            code
        }, this.postMessage);
        window.top.postMessage({
            id: this.state.id ? `carbon:${this.state.id}` : "carbon",
            code
        }, "*");
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Page, {
            theme: this.state.theme,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    hidden: !this.state.mounted,
                    className: "jsx-db172f055ec7c404",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carbon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        ref: this.ref,
                        config: this.state,
                        readOnly: this.state.readOnly,
                        copyable: this.state.copyable,
                        onChange: this.updateCode,
                        children: this.state.code
                    }, this.state.mounted)
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "db172f055ec7c404",
                    children: ".eliminateOnRender{display:none}"
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(Embed));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;