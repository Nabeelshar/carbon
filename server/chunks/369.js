"use strict";
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 6706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8319);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8757);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3576);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3016);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ImagePicker__WEBPACK_IMPORTED_MODULE_3__, _ColorPicker__WEBPACK_IMPORTED_MODULE_4__, _Popout__WEBPACK_IMPORTED_MODULE_6__, _lib_util__WEBPACK_IMPORTED_MODULE_8__]);
([_ImagePicker__WEBPACK_IMPORTED_MODULE_3__, _ColorPicker__WEBPACK_IMPORTED_MODULE_4__, _Popout__WEBPACK_IMPORTED_MODULE_6__, _lib_util__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function validateColor(str) {
    if (/#\d{3,6}|rgba{0,1}\(.*?\)/gi.test(str) || /\w+/gi.test(str)) {
        return str;
    }
}
class BackgroundSelect extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
    selectTab = (name)=>{
        if (this.props.mode !== name) {
            this.props.onChange({
                backgroundMode: name
            });
        }
    };
    handlePickColor = (color)=>this.props.onChange({
            backgroundColor: (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .stringifyColor */ .iS)(color)
        })
    ;
    render() {
        const { color , mode , image , onChange , isVisible , toggleVisibility , carbonRef , updateHighlights ,  } = this.props;
        const background = validateColor(color) ? color : _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_BG_COLOR */ .qh;
        const aspectRatio = carbonRef ? carbonRef.clientWidth / carbonRef.clientHeight : 1;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "269426225ac394cb",
                    [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    ]
                ]
            ]) + " " + "bg-select-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "Background Menu",
                    /*#__PURE__*/ border: true,
                    center: true,
                    selected: isVisible,
                    className: `bg-color-container bg-select-display ${isVisible ? "is-visible" : ""}`,
                    onClick: toggleVisibility,
                    background: "white",
                    hoverBackground: "white",
                    "data-cy": "display",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "269426225ac394cb",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "bg-color-alpha"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "269426225ac394cb",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "bg-color"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Popout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    id: "bg-select-pickers",
                    pointerLeft: "15px",
                    hidden: !isVisible,
                    style: {
                        width: "222px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "269426225ac394cb",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "picker-tabs",
                            children: [
                                "color",
                                "image"
                            ].map((tab)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    padding: "8px 0",
                                    center: true,
                                    className: "capitalize",
                                    onClick: this.selectTab.bind(null, tab),
                                    background: mode === tab ? _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.BLACK */ .DM.BLACK : _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                    children: tab
                                }, tab)
                            )
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "269426225ac394cb",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "picker-tabs-contents",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    hidden: mode !== "color",
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "269426225ac394cb",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColorPicker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        color: color,
                                        onChange: this.handlePickColor
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    hidden: mode !== "image",
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "269426225ac394cb",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImagePicker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        onChange: onChange,
                                        imageDataURL: image,
                                        aspectRatio: aspectRatio,
                                        updateHighlights: updateHighlights
                                    })
                                })
                            ]
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "269426225ac394cb",
                    dynamic: [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    ],
                    children: `.bg-select-container.__jsx-style-dynamic-selector{height:100%}.bg-select-container.__jsx-style-dynamic-selector .bg-select-display{position:relative;overflow:hidden;height:100%;width:40px;border:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.bg-select-container.__jsx-style-dynamic-selector .bg-select-display.is-visible,.bg-select-container.__jsx-style-dynamic-selector .bg-select-display:focus{border-width:2px}.bg-color.__jsx-style-dynamic-selector{position:absolute;top:0px;right:0px;bottom:0px;left:0px;${mode === "image" ? `background: url(${image});
                 background-size: cover;
                 background-repeat: no-repeat;` : `background: ${background};`};}.bg-color-alpha.__jsx-style-dynamic-selector{position:absolute;top:0px;right:0px;bottom:0px;left:0px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)}.picker-tabs.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;border-bottom:2px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.picker-tabs.__jsx-style-dynamic-selector button{border-right:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.picker-tabs.__jsx-style-dynamic-selector button:last-child{border-right:none}`
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_6__/* .managePopout */ .f)(BackgroundSelect));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var morphmorph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6589);
/* harmony import */ var morphmorph__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morphmorph__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8299);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3576);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3016);
/* harmony import */ var _svg_Copy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1165);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popout__WEBPACK_IMPORTED_MODULE_8__]);
_Popout__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const toIFrame = (url, width, height)=>`<iframe
  src="${location.origin}/embed${url.replace(/^\/\?/, "?")}"
  style="width: ${width || 1024}px; height: ${height || 473}px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
`
;
const toURL = (url)=>`${location.origin}${url}`
;
// Medium does not handle asterisks correctly - https://github.com/carbon-app/carbon/issues/1067
const replaceAsterisks = (string)=>string.replace(/\*/g, "%2A")
;
const toEncodedURL = morphmorph__WEBPACK_IMPORTED_MODULE_5___default().compose(encodeURI, replaceAsterisks, toURL);
function CopyButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        ...props,
        hoverColor: _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
        color: "rgba(255, 255, 255, 0.7)",
        padding: "8px"
    });
}
function CopyEmbed({ mapper , title  }) {
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const text = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(()=>mapper(asPath)
    , [
        mapper,
        asPath
    ]);
    const { onClick , copied  } = (0,actionsack__WEBPACK_IMPORTED_MODULE_4__.useCopyTextHandler)(text);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
        onClick: onClick,
        /*#__PURE__*/ children: copied ? "Copied!" : title
    });
}
const popoutStyle = {
    width: "140px",
    right: 0
};
function useClipboardSupport() {
    const [isClipboardSupported, setClipboardSupport] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setClipboardSupport(window.navigator && window.navigator.clipboard && typeof ClipboardItem === "function");
    }, []);
    return isClipboardSupported;
}
function CopyMenu({ isVisible , toggleVisibility , copyImage , carbonRef  }) {
    const clipboardSupported = useClipboardSupport();
    const [showCopied, { loading: copied  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_4__.useAsyncCallback)(()=>new Promise((res)=>setTimeout(res, 1000)
        )
    );
    const [copy, { loading  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_4__.useAsyncCallback)(async (...args)=>{
        if (clipboardSupported) {
            await copyImage(...args);
            showCopied();
        }
    });
    (0,actionsack__WEBPACK_IMPORTED_MODULE_4__.useKeyboardListener)("\u2318-\u21E7-c", (e)=>{
        e.preventDefault();
        copy(e);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "7f068ddeb8713eae",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ]
            ]
        ]) + " " + "copy-menu-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "7f068ddeb8713eae",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    center: true,
                    border: true,
                    large: true,
                    padding: "0 16px",
                    margin: "0 8px 0 0",
                    onClick: toggleVisibility,
                    color: _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    title: "Copy menu",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Copy__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        size: 16,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                hidden: !isVisible,
                borderColor: _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                pointerRight: "24px",
                style: popoutStyle,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "7f068ddeb8713eae",
                            [
                                _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY
                            ]
                        ]
                    ]) + " " + "copy-row flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "7f068ddeb8713eae",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]),
                            children: "Copy to clipboard"
                        }),
                        clipboardSupported && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                            id: "export-clipboard",
                            onClick: copy,
                            disabled: loading,
                            children: loading ? "Copying\u2026" : copied ? "Copied!" : "Image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyEmbed, {
                            title: "Medium.com",
                            mapper: toEncodedURL
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyEmbed, {
                            title: "IFrame",
                            mapper: (url)=>toIFrame(url, carbonRef.clientWidth, carbonRef.clientHeight)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyEmbed, {
                            title: "Plain URL",
                            mapper: toURL
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7f068ddeb8713eae",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.copy-menu-container.__jsx-style-dynamic-selector{position:relative;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY};-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;max-width:40px}.copy-row.__jsx-style-dynamic-selector{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.copy-row.__jsx-style-dynamic-selector button{border-top:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.copy-row.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{padding:8px;margin:0 auto}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_8__/* .managePopout */ .f)(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(CopyMenu)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5875);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(match_sorter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3122);
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg_Arrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8482);
/* harmony import */ var _svg_Checkmark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5331);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8299);









class Dropdown extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
    state = {
        inputValue: this.props.selected.name,
        itemsToShow: this.props.list
    };
    onUserAction = (changes)=>{
        this.setState(({ inputValue , itemsToShow  })=>{
            if (Object.prototype.hasOwnProperty.call(changes, "inputValue")) {
                if (changes.type === (downshift__WEBPACK_IMPORTED_MODULE_3___default().stateChangeTypes.keyDownEscape)) {
                    inputValue = this.userInputtedValue;
                } else if (changes.type === (downshift__WEBPACK_IMPORTED_MODULE_3___default().stateChangeTypes.changeInput)) {
                    inputValue = changes.inputValue;
                    this.userInputtedValue = changes.inputValue;
                } else {
                    inputValue = changes.inputValue;
                }
            }
            itemsToShow = this.userInputtedValue ? (0,match_sorter__WEBPACK_IMPORTED_MODULE_4__.matchSorter)(this.props.list, this.userInputtedValue, {
                keys: [
                    "name"
                ]
            }) : this.props.list;
            if (Object.prototype.hasOwnProperty.call(changes, "highlightedIndex") && (changes.type === (downshift__WEBPACK_IMPORTED_MODULE_3___default().stateChangeTypes.keyDownArrowUp) || changes.type === (downshift__WEBPACK_IMPORTED_MODULE_3___default().stateChangeTypes.keyDownArrowDown))) {
                inputValue = itemsToShow[changes.highlightedIndex].name;
                this.props.onChange(itemsToShow[changes.highlightedIndex]);
            }
            if (Object.prototype.hasOwnProperty.call(changes, "isOpen")) {
                this.userInputtedValue = "";
                // clear on open
                if (changes.isOpen) {
                    inputValue = "";
                    this.props.onOpen && this.props.onOpen();
                } else if (changes.isOpen === false && !inputValue) {
                    // set on close
                    inputValue = this.props.selected.name;
                }
            }
            return {
                inputValue,
                itemsToShow
            };
        });
    };
    userInputtedValue = "";
    render() {
        const { innerRef , color , selected , onChange , itemWrapper , icon , disableInput , title  } = this.props;
        const { itemsToShow , inputValue  } = this.state;
        const labelId = title ? `${title.toLowerCase()}-dropdown` : undefined;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((downshift__WEBPACK_IMPORTED_MODULE_3___default()), {
            ref: innerRef,
            inputValue: inputValue,
            selectedItem: selected,
            defaultHighlightedIndex: itemsToShow.findIndex((it)=>it === selected
            ),
            itemToString: (item)=>item.name
            ,
            onChange: onChange,
            onUserAction: this.onUserAction,
            labelId: labelId,
            /*#__PURE__*/ children: renderDropdown({
                color,
                list: itemsToShow,
                selected,
                itemWrapper,
                icon,
                disableInput,
                title,
                labelId
            })
        });
    }
}
const renderDropdown = ({ color , list , itemWrapper , icon , disableInput , title , labelId  })=>({ isOpen , highlightedIndex , selectedItem , getRootProps , getToggleButtonProps , getInputProps , getItemProps ,  })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropdownContainer, {
            ...getRootProps({
                refKey: "innerRef"
            }),
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_5___default()), {
                    id: labelId,
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropdownIcon, {
                    isOpen: isOpen,
                    children: icon
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectedItem, {
                    getToggleButtonProps: getToggleButtonProps,
                    getInputProps: getInputProps,
                    isOpen: isOpen,
                    color: color,
                    hasIcon: !!icon,
                    disabled: disableInput,
                    children: selectedItem.name
                }),
                isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItems, {
                    color: color,
                    children: list.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            color: color,
                            item: item,
                            itemWrapper: itemWrapper,
                            ...getItemProps({
                                item,
                                isSelected: selectedItem.name === item.name,
                                isHighlighted: highlightedIndex === index
                            }),
                            children: item.name
                        }, index)
                    )
                }) : null
            ]
        });
    }
;
const DropdownContainer = ({ children , innerRef , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...rest,
        ref: innerRef,
        className: "jsx-6aef7fa683662777" + " " + "dropdown-container",
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "6aef7fa683662777",
                children: ".dropdown-container.jsx-6aef7fa683662777{position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:40px}"
            })
        ]
    });
};
const DropdownIcon = ({ children , isOpen  })=>{
    if (children) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "6b5f3f8f10217b10",
                    [
                        isOpen ? 38 : 39,
                        isOpen ? 2 : 1
                    ]
                ]
            ]) + " " + "dropdown-icon",
            children: [
                children,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "6b5f3f8f10217b10",
                    dynamic: [
                        isOpen ? 38 : 39,
                        isOpen ? 2 : 1
                    ],
                    children: `.dropdown-icon.__jsx-style-dynamic-selector{position:absolute;left:-${isOpen ? 38 : 39}px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px;-webkit-box-shadow:inset 0px 0px 0px ${isOpen ? 2 : 1}px white;-moz-box-shadow:inset 0px 0px 0px ${isOpen ? 2 : 1}px white;box-shadow:inset 0px 0px 0px ${isOpen ? 2 : 1}px white;-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px;cursor:initial}`
                })
            ]
        });
    } else {
        return null;
    }
};
const SelectedItem = ({ getToggleButtonProps , getInputProps , children , isOpen , color , hasIcon , disabled ,  })=>{
    const itemColor = color || _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        ...getToggleButtonProps({
            tabIndex: 0
        }),
        "data-cy": "theme-selector-button",
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "fa2098704a9ea681",
                [
                    itemColor,
                    hasIcon ? "0 3px 3px 0" : "3px",
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                    hasIcon ? "0 3px 0 0" : "3px 3px 0 0",
                    itemColor,
                    itemColor
                ]
            ]
        ]) + " " + `dropdown-display ${isOpen ? "is-open" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...getInputProps({
                    placeholder: children,
                    id: `downshift-input-${children}`,
                    disabled
                }),
                spellCheck: false,
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "fa2098704a9ea681",
                        [
                            itemColor,
                            hasIcon ? "0 3px 3px 0" : "3px",
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                            hasIcon ? "0 3px 0 0" : "3px 3px 0 0",
                            itemColor,
                            itemColor
                        ]
                    ]
                ]) + " " + "dropdown-display-text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "fa2098704a9ea681",
                        [
                            itemColor,
                            hasIcon ? "0 3px 3px 0" : "3px",
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                            hasIcon ? "0 3px 0 0" : "3px 3px 0 0",
                            itemColor,
                            itemColor
                        ]
                    ]
                ]) + " " + "dropdown-arrow",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Arrows__WEBPACK_IMPORTED_MODULE_6__/* .Down */ .R, {
                    color: itemColor
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "fa2098704a9ea681",
                dynamic: [
                    itemColor,
                    hasIcon ? "0 3px 3px 0" : "3px",
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                    hasIcon ? "0 3px 0 0" : "3px 3px 0 0",
                    itemColor,
                    itemColor
                ],
                children: `.dropdown-display.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:40px;padding:0 16px;-webkit-box-shadow:inset 0px 0px 0px 1px ${itemColor};-moz-box-shadow:inset 0px 0px 0px 1px ${itemColor};box-shadow:inset 0px 0px 0px 1px ${itemColor};-webkit-border-radius:${hasIcon ? "0 3px 3px 0" : "3px"};-moz-border-radius:${hasIcon ? "0 3px 3px 0" : "3px"};border-radius:${hasIcon ? "0 3px 3px 0" : "3px"};outline:none}.dropdown-display.__jsx-style-dynamic-selector:hover,.dropdown-display.__jsx-style-dynamic-selector:focus{background:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER}}.dropdown-display.is-open.__jsx-style-dynamic-selector{-webkit-border-radius:${hasIcon ? "0 3px 0 0" : "3px 3px 0 0"};-moz-border-radius:${hasIcon ? "0 3px 0 0" : "3px 3px 0 0"};border-radius:${hasIcon ? "0 3px 0 0" : "3px 3px 0 0"};-webkit-box-shadow:inset 0px 0px 0px 2px ${itemColor};-moz-box-shadow:inset 0px 0px 0px 2px ${itemColor};box-shadow:inset 0px 0px 0px 2px ${itemColor}}.dropdown-display-text.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;color:${itemColor};background:transparent;border:none;outline:none;font-size:inherit;font-family:inherit}.dropdown-arrow.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.is-open.__jsx-style-dynamic-selector>.dropdown-arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}`
            })
        ]
    });
};
const ListItems = ({ children , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        role: "listbox",
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "d15811bb866eb567",
                [
                    color || _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ]
            ]
        ]) + " " + "dropdown-list",
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d15811bb866eb567",
                dynamic: [
                    color || _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.dropdown-list.__jsx-style-dynamic-selector{margin-top:-2px;border:2px solid ${color || _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY};-webkit-border-radius:0 0 3px 3px;-moz-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;max-height:350px;overflow-y:scroll}`
            })
        ]
    });
};
const ListItem = ({ children , color , isHighlighted , isSelected , itemWrapper , item , ...rest })=>{
    const itemColor = color || _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        ...rest,
        "data-cy": "dropdown-item",
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "d3d8dc2264bd2b31",
                [
                    isHighlighted ? _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER : _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
                    itemColor,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                    itemColor
                ]
            ]
        ]) + " " + "dropdown-list-item",
        children: [
            itemWrapper ? itemWrapper({
                children,
                color: itemColor,
                item,
                isSelected
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "d3d8dc2264bd2b31",
                        [
                            isHighlighted ? _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER : _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
                            itemColor,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                            itemColor
                        ]
                    ]
                ]) + " " + "dropdown-list-item-text",
                children: children
            }),
            isSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Checkmark__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : null,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d3d8dc2264bd2b31",
                dynamic: [
                    isHighlighted ? _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER : _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
                    itemColor,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER,
                    itemColor
                ],
                children: `.dropdown-list-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:${isHighlighted ? _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER : _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK};padding:8px 16px;border-bottom:1px solid ${itemColor}}.dropdown-list-item.__jsx-style-dynamic-selector:last-child{border-bottom:none}.dropdown-list-item.__jsx-style-dynamic-selector:hover{background:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER}}.dropdown-list-item-text.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;color:${itemColor}}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ 2286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dropperx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4962);
/* harmony import */ var dropperx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dropperx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4305);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ApiContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7896);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7695);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3259);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(646);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5606);
/* harmony import */ var _BackgroundSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6706);
/* harmony import */ var _Carbon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1802);
/* harmony import */ var _ExportMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3670);
/* harmony import */ var _ShareMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6922);
/* harmony import */ var _CopyMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6954);
/* harmony import */ var _Themes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6460);
/* harmony import */ var _FontFace__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1298);
/* harmony import */ var _svg_Language__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1995);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8299);
/* harmony import */ var _lib_routing__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6262);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4959);
/* harmony import */ var _lib_dom_to_image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7774);
/* harmony import */ var _lib_dom_to_image__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_lib_dom_to_image__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApiContext__WEBPACK_IMPORTED_MODULE_6__, _Settings__WEBPACK_IMPORTED_MODULE_8__, _BackgroundSelect__WEBPACK_IMPORTED_MODULE_11__, _ExportMenu__WEBPACK_IMPORTED_MODULE_13__, _ShareMenu__WEBPACK_IMPORTED_MODULE_14__, _CopyMenu__WEBPACK_IMPORTED_MODULE_15__, _Themes__WEBPACK_IMPORTED_MODULE_16__, _lib_routing__WEBPACK_IMPORTED_MODULE_20__, _lib_util__WEBPACK_IMPORTED_MODULE_21__]);
([_ApiContext__WEBPACK_IMPORTED_MODULE_6__, _Settings__WEBPACK_IMPORTED_MODULE_8__, _BackgroundSelect__WEBPACK_IMPORTED_MODULE_11__, _ExportMenu__WEBPACK_IMPORTED_MODULE_13__, _ShareMenu__WEBPACK_IMPORTED_MODULE_14__, _CopyMenu__WEBPACK_IMPORTED_MODULE_15__, _Themes__WEBPACK_IMPORTED_MODULE_16__, _lib_routing__WEBPACK_IMPORTED_MODULE_20__, _lib_util__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Theirs




// Ours

















const languageIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Language__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {});
const SnippetToolbar = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/* import() */ 742).then(__webpack_require__.bind(__webpack_require__, 4742))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\Editor.js -> " + "./SnippetToolbar"
        ]
    },
    loading: ()=>null
});
const getConfig = (0,_lib_util__WEBPACK_IMPORTED_MODULE_21__/* .omit */ .CE)([
    "code",
    "titleBar"
]);
const unsplashPhotographerCredit = /\n\n\/\/ Photo by.+?on Unsplash/;
class Editor extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    static contextType = _ApiContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    state = {
        ..._lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_SETTINGS */ .Z,
        ...this.props.snippet,
        loading: true
    };
    async componentDidMount() {
        const { queryState  } = (0,_lib_routing__WEBPACK_IMPORTED_MODULE_20__/* .getRouteState */ .wy)(this.props.router);
        const newState = {
            // IDEA: we could create an interface for loading this config, so that it looks identical
            // whether config is loaded from localStorage, gist, or even something like IndexDB
            // Load options from gist or localStorage
            ...this.props.snippet ? null : (0,_lib_util__WEBPACK_IMPORTED_MODULE_21__/* .getSettings */ .Gw)(localStorage),
            // and then URL params
            ...queryState,
            loading: false
        };
        // Makes sure the slash in 'application/X' is decoded
        if (newState.language) {
            newState.language = (0,_lib_util__WEBPACK_IMPORTED_MODULE_21__/* .unescapeHtml */ .Tz)(newState.language);
        }
        if (newState.fontFamily && !_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .FONTS.find */ .g5.find(({ id  })=>id === newState.fontFamily
        )) {
            newState.fontFamily = _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_SETTINGS.fontFamily */ .Z.fontFamily;
        }
        this.setState(newState);
    }
    carbonNode = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    getTheme = ()=>this.props.themes.find((t)=>t.id === this.state.theme
        ) || _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_THEME */ .t0
    ;
    onUpdate = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()((updates)=>this.props.onUpdate(updates)
    , 750, {
        trailing: true,
        leading: true
    });
    updateState = (updates)=>this.setState(updates, ()=>this.onUpdate(this.state)
        )
    ;
    updateCode = (code)=>this.updateState({
            code
        })
    ;
    updateTitleBar = (titleBar)=>this.updateState({
            titleBar
        })
    ;
    updateWidth = (width)=>this.setState({
            widthAdjustment: false,
            width
        })
    ;
    getCarbonImage = async ({ format , squared =this.state.squaredImage , exportSize =(_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .EXPORT_SIZES_HASH */ .UL[this.state.exportSize] || _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_EXPORT_SIZE */ .Hq).value ,  } = {
        format: "png"
    })=>{
        const node = this.carbonNode.current;
        const width = node.offsetWidth * exportSize;
        const height = squared ? node.offsetWidth * exportSize : node.offsetHeight * exportSize;
        const config = {
            style: {
                transform: `scale(${exportSize})`,
                "transform-origin": "center",
                background: squared ? this.state.backgroundColor : "none"
            },
            filter: (n)=>{
                if (n.className) {
                    const className = String(n.className);
                    if (className.includes("eliminateOnRender")) {
                        return false;
                    }
                    if (className.includes("CodeMirror-cursors")) {
                        return false;
                    }
                }
                return true;
            },
            width,
            height
        };
        if (format === "svg") {
            return _lib_dom_to_image__WEBPACK_IMPORTED_MODULE_22___default().toSvg(node, config).then((dataURL)=>dataURL.replace(/&nbsp;/g, "&#160;")// https://github.com/tsayen/dom-to-image/blob/fae625bce0970b3a039671ea7f338d05ecb3d0e8/src/dom-to-image.js#L551
                .replace(/%23/g, "#").replace(/%0A/g, "\n")// https://stackoverflow.com/questions/7604436/xmlparseentityref-no-name-warnings-while-loading-xml-into-a-php-file
                .replace(/&(?!#?[a-z0-9]+;)/g, "&amp;")// remove other fonts which are not used
                .replace(// current font-family used
                new RegExp('@font-face\\s+{\\s+font-family: (?!"*' + this.state.fontFamily + ").*?}", "g"), "")
            ).then((uri)=>uri.slice(uri.indexOf(",") + 1)
            ).then((data)=>new Blob([
                    data
                ], {
                    type: "image/svg+xml"
                })
            );
        }
        if (format === "blob") {
            return _lib_dom_to_image__WEBPACK_IMPORTED_MODULE_22___default().toBlob(node, config);
        }
        // Twitter and Imgur needs regular dataURLs
        return _lib_dom_to_image__WEBPACK_IMPORTED_MODULE_22___default().toPng(node, config);
    };
    tweet = ()=>{
        this.getCarbonImage({
            format: "png"
        }).then(this.context.tweet.bind(null, this.state.code || _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_CODE */ .Zm));
    };
    imgur = ()=>{
        const prefix = this.state.name || "carbon";
        return this.getCarbonImage({
            format: "png"
        }).then((data)=>this.context.imgur(data, prefix)
        );
    };
    exportImage = (format = "blob", options = {})=>{
        const link = document.createElement("a");
        const prefix = options.filename || this.state.name || "carbon";
        return this.getCarbonImage({
            format
        }).then((blob)=>window.URL.createObjectURL(blob)
        ).then((url)=>{
            if (!options.open) {
                link.download = `${prefix}.${format === "svg" ? "svg" : "png"}`;
            }
            if (// isFirefox
            window.navigator.userAgent.indexOf("Firefox") !== -1 && window.navigator.userAgent.indexOf("Chrome") === -1) {
                link.target = "_blank";
            }
            link.href = url;
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    };
    copyImage = ()=>this.getCarbonImage({
            format: "blob"
        }).then((blob)=>navigator.clipboard.write([
                new window.ClipboardItem({
                    [blob.type]: blob
                }), 
            ])
        ).catch(console.error)
    ;
    updateSetting = (key, value)=>{
        this.updateState({
            [key]: value
        });
        if (Object.prototype.hasOwnProperty.call(_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_SETTINGS */ .Z, key)) {
            this.updateState({
                preset: null
            });
        }
    };
    resetDefaultSettings = ()=>{
        this.updateState(_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_SETTINGS */ .Z);
        this.props.onReset();
    };
    onDrop = ([file])=>{
        if (file.type.split("/")[0] === "image") {
            this.updateState({
                backgroundImage: file.content,
                backgroundImageSelection: null,
                backgroundMode: "image",
                preset: null
            });
        } else {
            this.updateState({
                code: file.content,
                language: "auto"
            });
        }
    };
    updateLanguage = (language)=>{
        if (language) {
            this.updateSetting("language", language.mime || language.mode);
        }
    };
    updateBackground = ({ photographer , ...changes } = {})=>{
        if (photographer) {
            this.updateState(({ code =_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_CODE */ .Zm  })=>({
                    ...changes,
                    code: code.replace(unsplashPhotographerCredit, "") + `\n\n// Photo by ${photographer.name} on Unsplash`,
                    preset: null
                })
            );
        } else {
            this.updateState({
                ...changes,
                preset: null
            });
        }
    };
    updateTheme = (theme)=>this.updateState({
            theme,
            highlights: null
        })
    ;
    updateHighlights = (updates)=>this.setState(({ highlights ={}  })=>({
                highlights: {
                    ...highlights,
                    ...updates
                }
            })
        )
    ;
    createTheme = (theme)=>{
        this.props.updateThemes((themes)=>[
                theme,
                ...themes
            ]
        );
        this.updateTheme(theme.id);
    };
    removeTheme = (id)=>{
        this.props.updateThemes((themes)=>themes.filter((t)=>t.id !== id
            )
        );
        if (this.state.theme.id === id) {
            this.updateTheme(_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_THEME.id */ .t0.id);
        }
    };
    applyPreset = ({ id: preset , ...settings })=>this.updateState({
            preset,
            ...settings
        })
    ;
    format = ()=>(0,_lib_util__WEBPACK_IMPORTED_MODULE_21__/* .formatCode */ .XQ)(this.state.code).then(this.updateCode).catch(()=>{
        // create toast here in the future
        })
    ;
    handleSnippetCreate = ()=>this.context.snippet.create(this.state).then((data)=>this.props.setSnippet(data)
        ).then(()=>this.props.setToasts({
                type: "SET",
                toasts: [
                    {
                        children: "Snippet created",
                        timeout: 3000
                    }
                ]
            })
        )
    ;
    handleSnippetUpdate = ()=>this.context.snippet.update(this.props.snippet.id, this.state).then(()=>this.props.setToasts({
                type: "SET",
                toasts: [
                    {
                        children: "Snippet saved",
                        timeout: 3000
                    }
                ]
            })
        )
    ;
    handleSnippetDelete = ()=>this.context.snippet.delete(this.props.snippet.id).then(()=>this.props.setSnippet(null)
        ).then(()=>this.props.setToasts({
                type: "SET",
                toasts: [
                    {
                        children: "Snippet deleted",
                        timeout: 3000
                    }
                ]
            })
        )
    ;
    render() {
        const { highlights , language , backgroundColor , backgroundImage , backgroundMode , code , exportSize , titleBar ,  } = this.state;
        const config = getConfig(this.state);
        const theme = this.getTheme();
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "222539ba26f5a153",
                    [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    ]
                ]
            ]) + " " + "editor",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Toolbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Themes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            theme: theme,
                            highlights: highlights,
                            update: this.updateTheme,
                            updateHighlights: this.updateHighlights,
                            remove: this.removeTheme,
                            create: this.createTheme,
                            themes: this.props.themes
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            title: "Language",
                            icon: languageIcon,
                            selected: _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .LANGUAGE_NAME_HASH */ .aP[language] || _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .LANGUAGE_MIME_HASH */ .Dl[language] || _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .LANGUAGE_MODE_HASH */ .mF[language] || _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .LANGUAGE_MODE_HASH */ .mF[_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_LANGUAGE */ .k$],
                            list: _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .LANGUAGES */ .a2,
                            onChange: this.updateLanguage
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "222539ba26f5a153",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "toolbar-second-row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "222539ba26f5a153",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]) + " " + "setting-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BackgroundSelect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            onChange: this.updateBackground,
                                            updateHighlights: this.updateHighlights,
                                            mode: backgroundMode,
                                            color: backgroundColor,
                                            image: backgroundImage,
                                            carbonRef: this.carbonNode.current
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Settings__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            ...config,
                                            onChange: this.updateSetting,
                                            resetDefaultSettings: this.resetDefaultSettings,
                                            format: this.format,
                                            applyPreset: this.applyPreset,
                                            getCarbonImage: this.getCarbonImage
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CopyMenu__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            copyImage: this.copyImage,
                                            carbonRef: this.carbonNode.current
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "style-editor-button",
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "222539ba26f5a153",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ])
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "222539ba26f5a153",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]) + " " + "share-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            tweet: this.tweet,
                                            imgur: this.imgur
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExportMenu__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            onChange: this.updateSetting,
                                            exportImage: this.exportImage,
                                            exportSize: exportSize
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((dropperx__WEBPACK_IMPORTED_MODULE_3___default()), {
                    accept: "image/*, text/*, application/*",
                    onDrop: this.onDrop,
                    /*#__PURE__*/ children: ({ canDrop  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Overlay__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            isOver: canDrop,
                            title: `Drop your file here to import ${canDrop ? "\u270B" : "\u270A"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carbon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                ref: this.carbonNode,
                                config: this.state,
                                onChange: this.updateCode,
                                updateWidth: this.updateWidth,
                                loading: this.state.loading,
                                theme: theme,
                                titleBar: titleBar,
                                onTitleBarChange: this.updateTitleBar,
                                children: code != null ? code : _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .DEFAULT_CODE */ .Zm
                            }, language)
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnippetToolbar, {
                    state: this.state,
                    snippet: this.props.snippet,
                    onCreate: this.handleSnippetCreate,
                    onDelete: this.handleSnippetDelete,
                    onUpdate: this.handleSnippetUpdate,
                    name: config.name,
                    onChange: this.updateSetting
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FontFace__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    ...config
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "222539ba26f5a153",
                    dynamic: [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    ],
                    children: `.editor.__jsx-style-dynamic-selector{background:${_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.BLACK */ .DM.BLACK};border:3px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.SECONDARY */ .DM.SECONDARY};-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:16px}.share-buttons.__jsx-style-dynamic-selector,.setting-buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:40px}.share-buttons.__jsx-style-dynamic-selector{margin-left:auto}.toolbar-second-row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.setting-buttons.__jsx-style-dynamic-selector>div{margin-right:.5rem}#style-editor-button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}@media(max-width:768px){.toolbar-second-row.__jsx-style-dynamic-selector{display:block}#style-editor-button.__jsx-style-dynamic-selector{margin-top:.5rem}}`
                })
            ]
        });
    }
}
Editor.defaultProps = {
    onUpdate: ()=>{},
    onReset: ()=>{}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2286);
/* harmony import */ var _Toasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4358);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2915);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8299);
/* harmony import */ var _lib_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6262);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Editor__WEBPACK_IMPORTED_MODULE_3__, _AuthContext__WEBPACK_IMPORTED_MODULE_5__, _lib_routing__WEBPACK_IMPORTED_MODULE_7__, _lib_util__WEBPACK_IMPORTED_MODULE_8__]);
([_Editor__WEBPACK_IMPORTED_MODULE_3__, _AuthContext__WEBPACK_IMPORTED_MODULE_5__, _lib_routing__WEBPACK_IMPORTED_MODULE_7__, _lib_util__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// Theirs








function onReset() {
    (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .clearSettings */ .rL)();
    (0,_lib_routing__WEBPACK_IMPORTED_MODULE_7__/* .updateRouteState */ .aA)((next_router__WEBPACK_IMPORTED_MODULE_2___default()), {});
    if (window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then((registrations)=>{
            registrations.forEach((registration)=>{
                registration.unregister();
            });
        });
    }
}
function toastsReducer(curr, action) {
    switch(action.type){
        case "ADD":
            {
                return curr.concat(action.toast);
            }
        case "SET":
            {
                return action.toasts;
            }
    }
    throw new Error("Unsupported action");
}
function EditorContainer(props) {
    const [themes, updateThemes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(_lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .THEMES */ .yU);
    const user = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .aC)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const storedThemes = (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .getThemes */ .RC)(localStorage) || [];
        if (storedThemes) {
            updateThemes((currentThemes)=>[
                    ...storedThemes,
                    ...currentThemes
                ]
            );
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .saveThemes */ .UJ)(themes.filter(({ custom  })=>custom
        ));
    }, [
        themes
    ]);
    // XXX use context
    const [snippet, setSnippet] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.snippet || null);
    // TODO update this reducer to only take one action
    const [toasts, setToasts] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(toastsReducer, []);
    const snippetId = snippet && snippet.id;
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if ("/" + (snippetId || "") === props.router.asPath) {
            return;
        }
        window.history.pushState(null, null, "/" + (snippetId || ""));
    // props.router.replace(props.router.asPath, '/' + (snippetId || ''), { shallow: true })
    }, [
        snippetId,
        props.router
    ]);
    function onEditorUpdate(state) {
        if (user) {
            return;
        }
        (0,_lib_routing__WEBPACK_IMPORTED_MODULE_7__/* .updateRouteState */ .aA)(props.router, state);
        (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .saveSettings */ .zQ)(state);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toasts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                toasts: toasts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Editor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...props,
                themes: themes,
                updateThemes: updateThemes,
                snippet: snippet,
                setSnippet: setSnippet,
                setToasts: setToasts,
                onUpdate: onEditorUpdate,
                onReset: onReset
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3576);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(983);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3016);
/* harmony import */ var _svg_Arrows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popout__WEBPACK_IMPORTED_MODULE_7__]);
_Popout__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const popoutStyle = {
    width: "256px",
    right: 0
};
function preventDefault(fn) {
    return (e)=>{
        e.preventDefault();
        return fn(e);
    };
}
function ExportMenu({ onChange , exportSize , isVisible , toggleVisibility , exportImage: exp  }) {
    const input = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();
    const [exportImage, { loading  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(exp);
    const handleExportSizeChange = (selectedSize)=>()=>onChange("exportSize", selectedSize)
    ;
    const handleExport = (format)=>()=>exportImage(format, {
                filename: input.current && input.current.value
            })
    ;
    (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useKeyboardListener)("\u2318-\u21E7-e", preventDefault(handleExport("blob")));
    (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useKeyboardListener)("\u2318-\u21E7-s", preventDefault(handleExport("svg")));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "3d974f64382671e8",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                ]
            ]
        ]) + " " + "export-menu-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "3d974f64382671e8",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                        ]
                    ]
                ]) + " " + "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        /*#__PURE__*/ border: true,
                        large: true,
                        center: true,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                        onClick: handleExport("blob"),
                        "data-cy": "quick-export-button",
                        style: {
                            minWidth: 92,
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: 0
                        },
                        title: "Quick export",
                        children: loading ? "Exporting\u2026" : "Export"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        id: "export-menu",
                        border: true,
                        large: true,
                        center: true,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                        padding: "0 8px",
                        onClick: toggleVisibility,
                        "data-cy": "export-button",
                        margin: "0 0 0 -1px",
                        style: {
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            maxWidth: "26px"
                        },
                        title: "Export menu dropdown",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Arrows__WEBPACK_IMPORTED_MODULE_8__/* .Down */ .R, {
                            color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Popout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                hidden: !isVisible,
                borderColor: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                pointerRight: "6px",
                style: popoutStyle,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "3d974f64382671e8",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                ]
                            ]
                        ]) + " " + "export-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "3d974f64382671e8",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                        ]
                                    ]
                                ]) + " " + "filename",
                                children: "File name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                ref: input,
                                title: "filename",
                                placeholder: "carbon",
                                color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "3d974f64382671e8",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                ]
                            ]
                        ]) + " " + "export-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "3d974f64382671e8",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                        ]
                                    ]
                                ]),
                                children: "Size"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "3d974f64382671e8",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                        ]
                                    ]
                                ]) + " " + "flex",
                                children: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .EXPORT_SIZES.map */ .$g.map(({ name  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        center: true,
                                        hoverColor: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                        margin: i === _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .EXPORT_SIZES.length */ .$g.length - 1 ? 0 : "0 10px 0 0",
                                        color: exportSize === name ? _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE : _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_PURPLE */ .DM.DARK_PURPLE,
                                        onClick: handleExportSizeChange(name),
                                        children: name
                                    }, name)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "3d974f64382671e8",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                ]
                            ]
                        ]) + " " + "export-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                center: true,
                                color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                onClick: ()=>exportImage("blob", {
                                        filename: input.current && input.current.value,
                                        open: true
                                    })
                                ,
                                children: "Open"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "3d974f64382671e8",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                        ]
                                    ]
                                ]) + " " + "save-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "3d974f64382671e8",
                                                [
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                                ]
                                            ]
                                        ]),
                                        children: "Download"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "3d974f64382671e8",
                                                [
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                center: true,
                                                margin: "0 8px 0 0",
                                                hoverColor: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_PURPLE */ .DM.DARK_PURPLE,
                                                onClick: handleExport("blob"),
                                                id: "export-png",
                                                disabled: loading,
                                                children: "PNG"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                center: true,
                                                hoverColor: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                                                color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_PURPLE */ .DM.DARK_PURPLE,
                                                onClick: handleExport("svg"),
                                                id: "export-svg",
                                                disabled: loading,
                                                children: "SVG"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3d974f64382671e8",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE
                ],
                children: `.export-menu-container.__jsx-style-dynamic-selector{position:relative;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE};-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.export-row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:8px 16px;border-bottom:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE}}.export-row.__jsx-style-dynamic-selector>button{border-right:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE}}.export-row.__jsx-style-dynamic-selector:last-child{border-bottom:none;padding:0}.filename.__jsx-style-dynamic-selector{-webkit-flex-basis:72px;-ms-flex-preferred-size:72px;flex-basis:72px}.save-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 16px}.save-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{margin-top:6px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.save-container.__jsx-style-dynamic-selector:first-of-type{padding:12px 12px;border-right:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.PURPLE */ .DM.PURPLE}}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_7__/* .managePopout */ .f)(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(ExportMenu)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FontFace)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function FontFace(config) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3c2e7e4897eae366",
        dynamic: [
            config.fontUrl ? config.fontFamily : "",
            config.fontUrl || ""
        ],
        children: `@font-face{font-family:${config.fontUrl ? config.fontFamily : ""};src:url(${config.fontUrl || ""})format(url("woff"));src:url(${config.fontUrl || ""})format("woff");font-display:swap}`
    });
};


/***/ }),

/***/ 1499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7567);
/* harmony import */ var _ReferralLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1332);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListSetting__WEBPACK_IMPORTED_MODULE_2__, _lib_util__WEBPACK_IMPORTED_MODULE_5__]);
([_ListSetting__WEBPACK_IMPORTED_MODULE_2__, _lib_util__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const EXTENSIONS = [
    ".otf",
    ".ttf",
    ".woff"
];
const Font = ({ id , name , link  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: id === "upload" ? {
                    textAlign: "center",
                    width: "100%"
                } : {
                    fontFamily: id
                },
                children: name
            }),
            link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReferralLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                href: link,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: id === "upload" ? {
                        textAlign: "center",
                        width: "100%"
                    } : {
                        fontFamily: id
                    },
                    children: "Purchase"
                })
            })
        ]
    })
;
function FontSelect(props) {
    const inputEl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    function onChange(id) {
        if (id === "upload") {
            inputEl.current.click();
        } else {
            props.onChange(id);
        }
    }
    async function onFiles(e) {
        const { files  } = e.target;
        const name = files[0].name.split(".")[0];
        const url = await (0,_lib_util__WEBPACK_IMPORTED_MODULE_5__/* .fileToDataURL */ .Ph)(files[0]);
        props.onUpload(name, url);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListSetting__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Font",
                items: [
                    {
                        id: "upload",
                        name: "Upload +"
                    },
                    ..._lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FONTS */ .g5
                ],
                ...props,
                onChange: onChange,
                children: Font
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                hidden: true,
                ref: inputEl,
                type: "file",
                multiple: true,
                accept: EXTENSIONS.join(","),
                onChange: onFiles
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImagePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6141);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RandomImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6303);
/* harmony import */ var _PhotoCredit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6734);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(983);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8689);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7533);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4959);
/* harmony import */ var _ApiContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RandomImage__WEBPACK_IMPORTED_MODULE_5__, _lib_util__WEBPACK_IMPORTED_MODULE_10__, _ApiContext__WEBPACK_IMPORTED_MODULE_11__]);
([_RandomImage__WEBPACK_IMPORTED_MODULE_5__, _lib_util__WEBPACK_IMPORTED_MODULE_10__, _ApiContext__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const getCroppedImg = (imageDataURL, pixelCrop)=>{
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    return new Promise((resolve)=>{
        const image = new Image();
        image.src = imageDataURL;
        image.onload = ()=>{
            ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
            resolve(canvas.toDataURL("image/jpeg"));
        };
    });
};
const INITIAL_STATE = {
    mode: "file",
    crop: null,
    imageAspectRatio: null,
    pixelCrop: null,
    photographer: null,
    dataURL: null
};
class ImagePicker extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    static contextType = _ApiContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z;
    static getDerivedStateFromProps(nextProps, state) {
        if (state.crop) {
            // update crop for editor container aspect-ratio change
            return {
                crop: (0,react_image_crop__WEBPACK_IMPORTED_MODULE_3__.makeAspectCrop)({
                    ...state.crop,
                    aspect: nextProps.aspectRatio
                }, state.imageAspectRatio)
            };
        }
        return null;
    }
    state = INITIAL_STATE;
    selectMode = (mode)=>this.setState({
            mode
        })
    ;
    onDragEnd = async ()=>{
        if (this.state.pixelCrop) {
            const croppedImg = await getCroppedImg(this.state.dataURL, this.state.pixelCrop);
            this.props.onChange({
                backgroundImageSelection: croppedImg
            });
        }
    };
    onCropChange = (crop, pixelCrop)=>{
        this.setState({
            crop: {
                ...crop,
                aspect: this.props.aspectRatio
            },
            pixelCrop
        });
    };
    onImageLoaded = (image)=>{
        const imageAspectRatio = image.width / image.height;
        const initialCrop = {
            x: 0,
            y: 0,
            width: 100,
            aspect: this.props.aspectRatio
        };
        this.setState({
            imageAspectRatio,
            crop: (0,react_image_crop__WEBPACK_IMPORTED_MODULE_3__.makeAspectCrop)(initialCrop, imageAspectRatio)
        });
    };
    handleImageChange = (url, dataURL, photographer)=>{
        this.setState({
            dataURL,
            photographer
        }, ()=>{
            this.props.onChange({
                backgroundImage: url,
                backgroundImageSelection: null,
                photographer
            });
        });
    };
    handleURLInput = (e)=>{
        e.preventDefault();
        const url = e.target[0].value;
        return this.context.downloadThumbnailImage({
            url
        }).then((res)=>res.dataURL
        ).then((dataURL)=>this.handleImageChange(url, dataURL)
        ).catch((err)=>{
            if (err.message.indexOf("Network Error") > -1) {
                this.setState({
                    error: "Fetching the image failed. This is probably a CORS-related issue. You can either enable CORS in your browser, or use another image."
                });
            }
        });
    };
    uploadImage = async (e)=>{
        const dataURL = await (0,_lib_util__WEBPACK_IMPORTED_MODULE_10__/* .fileToDataURL */ .Ph)(e.target.files[0]);
        return this.handleImageChange(dataURL, dataURL);
    };
    selectImage = async (image)=>{
        // TODO use React suspense for loading this asset
        const { dataURL  } = await this.context.downloadThumbnailImage(image);
        this.handleImageChange(image.url, dataURL, image.photographer);
        if (image.palette && image.palette.length && this.generateColorPalette) {
            /*
       * Background is first, which is either the lightest or darkest color
       * and the rest are sorted by highest contrast w/ the background
       */ const palette = image.palette.map((c)=>c.hex
            );
            /*
       * Contributors, please feel free to adjust this algorithm to create the most
       * readible or aesthetically pleasing syntax highlighting.
       */ this.props.updateHighlights({
                background: palette[0],
                text: palette[1],
                variable: palette[2],
                attribute: palette[3],
                definition: palette[4],
                keyword: palette[5],
                property: palette[6],
                string: palette[7],
                number: palette[8],
                operator: palette[9],
                meta: palette[10],
                tag: palette[11],
                comment: palette[12]
            });
        }
    };
    removeImage = ()=>{
        this.setState(INITIAL_STATE, ()=>{
            this.props.onChange({
                backgroundImage: null,
                backgroundImageSelection: null
            });
        });
    };
    render() {
        let content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-c877545bf571c559",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-c877545bf571c559" + " " + "choose-image",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-c877545bf571c559",
                            /*#__PURE__*/ children: "Upload a background image:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: this.selectMode.bind(this, "file"),
                            className: "jsx-c877545bf571c559" + " " + ((this.state.mode === "file" ? "active" : "none") || ""),
                            children: "File"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: this.selectMode.bind(this, "url"),
                            className: "jsx-c877545bf571c559" + " " + ((this.state.mode === "url" ? "active" : "none") || ""),
                            children: "URL"
                        }),
                        this.state.mode === "file" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            type: "file",
                            accept: "image/png,image/x-png,image/jpeg,image/jpg",
                            onChange: this.uploadImage
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: this.handleURLInput,
                            className: "jsx-c877545bf571c559",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    type: "text",
                                    title: "Background Image",
                                    placeholder: "Image URL\u2026",
                                    align: "left"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "jsx-c877545bf571c559",
                                    children: "Upload"
                                })
                            ]
                        }),
                        this.state.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-c877545bf571c559" + " " + "error",
                            children: this.state.error
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "jsx-c877545bf571c559"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-c877545bf571c559" + " " + "random-image",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "jsx-c877545bf571c559",
                            children: [
                                "Or use a random ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://unsplash.com/",
                                    className: "jsx-c877545bf571c559",
                                    children: "Unsplash"
                                }),
                                " image:"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RandomImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            onChange: this.selectImage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GeneratePaletteSetting, {
                            onChange: (value)=>this.generateColorPalette = value
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "c877545bf571c559",
                    children: "button.jsx-c877545bf571c559{display:inline-block}.choose-image.jsx-c877545bf571c559,.random-image.jsx-c877545bf571c559{padding:8px}.choose-image.jsx-c877545bf571c559>button.jsx-c877545bf571c559{cursor:pointer;color:white;background:transparent;border:none;outline:none;padding:0;margin:0 8px 8px 0}.choose-image.jsx-c877545bf571c559>button.jsx-c877545bf571c559:not(.active){opacity:.4}.choose-image.jsx-c877545bf571c559>button.jsx-c877545bf571c559:focus{text-decoration:underline}form.jsx-c877545bf571c559{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}form.jsx-c877545bf571c559>button.jsx-c877545bf571c559{padding:1px 18px 2px 7px}span.jsx-c877545bf571c559{display:block;margin-bottom:16px}a.jsx-c877545bf571c559{text-decoration:underline}hr.jsx-c877545bf571c559{border-bottom:none;margin-bottom:0;margin-top:0}.error.jsx-c877545bf571c559{color:red;margin-top:8px}"
                })
            ]
        });
        if (this.state.dataURL) {
            content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-5d1968910c7c394d" + " " + "settings-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-5d1968910c7c394d" + " " + "image-container",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5d1968910c7c394d" + " " + "label",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-5d1968910c7c394d",
                                        children: "Background image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: this.removeImage,
                                        className: "jsx-5d1968910c7c394d",
                                        children: "\xd7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_crop__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: this.state.dataURL,
                                onImageLoaded: this.onImageLoaded,
                                crop: this.state.crop,
                                onChange: this.onCropChange,
                                onDragEnd: this.onDragEnd,
                                minHeight: 10,
                                minWidth: 10,
                                keepSelection: true
                            }),
                            this.state.photographer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PhotoCredit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                photographer: this.state.photographer
                            })
                        ]
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "5d1968910c7c394d",
                        children: "button.jsx-5d1968910c7c394d{cursor:pointer;color:inherit;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;border:none;background:none;display:block;padding:0;margin:0;line-height:16px}.settings-container.jsx-5d1968910c7c394d img.jsx-5d1968910c7c394d{width:100%}.label.jsx-5d1968910c7c394d{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-bottom:4px}.ReactCrop__image{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none}.image-container.jsx-5d1968910c7c394d{padding:8px}.image-container.jsx-5d1968910c7c394d .label.jsx-5d1968910c7c394d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                    })
                ]
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-58b6aecd1d9cc44" + " " + "image-picker-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Meta__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .rU, {
                    href: "/static/react-crop.css"
                }),
                content,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "58b6aecd1d9cc44",
                    children: ".image-picker-container.jsx-58b6aecd1d9cc44{font-size:12px}"
                })
            ]
        });
    }
};
function GeneratePaletteSetting({ onChange  }) {
    const [enabled, setEnabled] = (0,actionsack__WEBPACK_IMPORTED_MODULE_4__.useLocalStorage)("CARBON_GENERATE_COLOR_PALETTE");
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>void onChange(enabled)
    , [
        enabled,
        onChange
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        label: "Generate color palette (beta)",
        enabled: enabled,
        onChange: setEnabled,
        padding: "8px 0 0"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_Checkmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5331);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_util__WEBPACK_IMPORTED_MODULE_5__]);
_lib_util__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






class ListSetting extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    static defaultProps = {
        onOpen: ()=>{},
        onClose: ()=>{}
    };
    state = {
        isVisible: false
    };
    select = (id)=>{
        if (this.props.selected !== id) {
            this.props.onChange(id);
        }
    };
    toggle = ()=>{
        const handler = this.state.isVisible ? this.props.onClose : this.props.onOpen;
        handler();
        this.setState((0,_lib_util__WEBPACK_IMPORTED_MODULE_5__/* .toggle */ .ZN)("isVisible"));
    };
    renderListItems() {
        return this.props.items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                role: "button",
                tabIndex: 0,
                onClick: this.select.bind(null, item.id),
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "27a42d3068240264",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "list-item",
                children: [
                    this.props.children(item, this.props.selected),
                    this.props.selected === item.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Checkmark__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : null,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "27a42d3068240264",
                        dynamic: [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ],
                        children: `.list-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 16px;border-bottom:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY};background:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY}}.list-item.__jsx-style-dynamic-selector:first-of-type{border-top:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.list-item.__jsx-style-dynamic-selector:last-of-type{border-bottom:none}`
                    })
                ]
            }, item.id)
        );
    }
    render() {
        const { items , selected , title , children  } = this.props;
        const { isVisible  } = this.state;
        const selectedItem = items.filter((item)=>item.id === selected
        )[0] || {};
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-b8ed17bc942bc9d5" + " " + "list-select-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    role: "button",
                    tabIndex: 0,
                    onClick: this.toggle,
                    className: "jsx-b8ed17bc942bc9d5" + " " + `display ${isVisible ? "is-visible" : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-b8ed17bc942bc9d5" + " " + "label",
                            /*#__PURE__*/ children: title
                        }),
                        children(selectedItem)
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-b8ed17bc942bc9d5" + " " + "list",
                    children: this.renderListItems()
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "b8ed17bc942bc9d5",
                    children: ".display.jsx-b8ed17bc942bc9d5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px}.list.jsx-b8ed17bc942bc9d5{display:none;margin-top:-1px;max-height:160px;overflow-y:scroll}.is-visible.jsx-b8ed17bc942bc9d5+.list.jsx-b8ed17bc942bc9d5{display:block}"
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListSetting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Overlay = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-512aea406f9a9076" + " " + "dnd-container",
        children: [
            props.isOver ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-512aea406f9a9076" + " " + "dnd-overlay",
                /*#__PURE__*/ children: props.title
            }) : null,
            props.children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "512aea406f9a9076",
                children: ".dnd-container.jsx-512aea406f9a9076{position:relative}.dnd-overlay.jsx-512aea406f9a9076{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:100%;height:100%;z-index:999;position:absolute;top:0;left:0;background:rgba(0,0,0,.85)}"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);


/***/ }),

/***/ 6734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PhotoCredit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function PhotoCredit({ photographer  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-662c733db6fe5206" + " " + "photo-credit",
        children: [
            "Photo by",
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `${photographer.profile_url}?utm_source=carbon&utm_medium=referral`,
                className: "jsx-662c733db6fe5206",
                /*#__PURE__*/ children: photographer.name
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "662c733db6fe5206",
                children: ".photo-credit.jsx-662c733db6fe5206{cursor:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:left;font-size:10px;color:#aaa;margin-bottom:-2px}.photo-credit.jsx-662c733db6fe5206 a.jsx-662c733db6fe5206{cursor:pointer;text-decoration:underline}"
            })
        ]
    });
};


/***/ }),

/***/ 5211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3576);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);
/* harmony import */ var _svg_Arrows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8482);
/* harmony import */ var _svg_Remove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7880);







const removeButtonStyles = {
    position: "absolute",
    top: "6px",
    right: "6px",
    width: "11px",
    height: "11px",
    borderRadius: "999px"
};
const Preset = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ remove , apply , selected , preset  })=>{
    const isSelected = preset.id === selected;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "61b4dd9b81aa65c8",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ]
            ]
        ]) + " " + "preset-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClick: ()=>apply(preset)
                ,
                disabled: isSelected,
                border: isSelected,
                selected: isSelected,
                hoverBackground: preset.backgroundColor,
                style: {
                    height: "96px",
                    borderRadius: "3px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "contain",
                    backgroundImage: `url('${preset.icon}')`,
                    backgroundColor: preset.backgroundColor
                }
            }),
            preset.custom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                /*#__PURE__*/ center: true,
                hoverBackground: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                background: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                onClick: ()=>remove(preset.id)
                ,
                style: removeButtonStyles,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Remove__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "61b4dd9b81aa65c8",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.preset-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:0;-webkit-flex:0 0 96px;-moz-box-flex:0;-ms-flex:0 0 96px;flex:0 0 96px;margin-right:8px}.preset-container.__jsx-style-dynamic-selector button:focus{-webkit-box-shadow:inset 0px 0px 0px 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY};-moz-box-shadow:inset 0px 0px 0px 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY};box-shadow:inset 0px 0px 0px 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY}}`
            })
        ]
    });
});
const arrowButtonStyle = {
    position: "absolute",
    top: 0,
    right: "16px",
    height: "100%"
};
const Presets = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ show , create , toggle , undo , presets , selected , remove , apply , applied , contentRef  })=>{
    const customPresetsLength = presets.length - _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_PRESETS.length */ .pP.length;
    const disabledCreate = selected != null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "c7e60a47145b04fd",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                ]
            ]
        ]) + " " + "settings-presets",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "c7e60a47145b04fd",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                        ]
                    ]
                ]) + " " + "settings-presets-header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "c7e60a47145b04fd",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                                ]
                            ]
                        ]),
                        children: "Presets"
                    }),
                    show && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        margin: "0 0 0 8px",
                        flex: "0 0 54px",
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.GRAY */ .DM.GRAY,
                        hoverBackground: "transparent",
                        hoverColor: disabledCreate ? _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.GRAY */ .DM.GRAY : _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        onClick: create,
                        disabled: disabledCreate,
                        children: "create +"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        center: true,
                        onClick: toggle,
                        style: arrowButtonStyle,
                        hoverBackground: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK,
                        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Arrows__WEBPACK_IMPORTED_MODULE_5__.Up, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Arrows__WEBPACK_IMPORTED_MODULE_5__/* .Down */ .R, {})
                    })
                ]
            }),
            show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: contentRef,
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "c7e60a47145b04fd",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                        ]
                    ]
                ]) + " " + "settings-presets-content",
                children: [
                    presets.filter((p)=>p.custom
                    ).map((preset)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Preset, {
                            remove: remove,
                            apply: apply,
                            preset: preset,
                            selected: selected
                        }, preset.id)
                    ),
                    customPresetsLength > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "c7e60a47145b04fd",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                                ]
                            ]
                        ]) + " " + "settings-presets-divider"
                    }) : null,
                    presets.filter((p)=>!p.custom
                    ).map((preset)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Preset, {
                            apply: apply,
                            preset: preset,
                            selected: selected
                        }, preset.id)
                    )
                ]
            }),
            show && applied && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "c7e60a47145b04fd",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                        ]
                    ]
                ]) + " " + "settings-presets-applied",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "c7e60a47145b04fd",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                                ]
                            ]
                        ]),
                        children: "Preset applied!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        center: true,
                        flex: "0",
                        onClick: undo,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK,
                        hoverBackground: "transparent",
                        background: "transparent",
                        children: [
                            "undo ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "c7e60a47145b04fd",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                                        ]
                                    ]
                                ]),
                                children: "\u21A9"
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c7e60a47145b04fd",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK
                ],
                children: `.settings-presets.__jsx-style-dynamic-selector{border-bottom:2px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.settings-presets-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px;position:relative;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY};width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.settings-presets-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow-x:scroll;margin:0 8px 12px 8px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-overflow-scrolling:touch}.settings-presets-divider.__jsx-style-dynamic-selector{height:72px;padding:1px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;margin-right:8px;background-color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY}}.settings-presets-applied.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY};color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK};padding:4px 8px}.settings-presets-applied.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{float:right;margin:2px 0 0 2px}`
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Presets);


/***/ }),

/***/ 6303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(468);
/* harmony import */ var _ApiContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7896);
/* harmony import */ var _PhotoCredit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6734);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApiContext__WEBPACK_IMPORTED_MODULE_5__]);
_ApiContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function RandomImage(props) {
    const cacheRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef([]);
    const [cacheIndex, updateIndex] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
    const api = (0,_ApiContext__WEBPACK_IMPORTED_MODULE_5__/* .useAPI */ .E)();
    const [selectImage, { loading: selecting  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(()=>{
        const image = cacheRef.current[cacheIndex];
        return api.unsplash.download(image.id).then((data)=>props.onChange({
                ...image,
                ...data
            })
        );
    });
    const [updateCache, { loading: updating , error , data: imgs  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(api.unsplash.random);
    const needsFetch = !error && !updating && (!imgs || cacheIndex > cacheRef.current.length - 2);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (needsFetch) {
            updateCache();
        }
    }, [
        needsFetch,
        updateCache
    ]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (imgs) {
            cacheRef.current.push(...imgs);
        }
    }, [
        imgs
    ]);
    const loading = updating || selecting;
    const cache = cacheRef.current;
    const photographer = cache[cacheIndex] && cache[cacheIndex].photographer;
    const bgImage = cache[cacheIndex] && cache[cacheIndex].dataURL;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "bcf4910c71be6126",
                [
                    bgImage,
                    loading ? 0.5 : 1,
                    loading ? "not-allowed" : "pointer"
                ]
            ]
        ]) + " " + "random-image-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "bcf4910c71be6126",
                        [
                            bgImage,
                            loading ? 0.5 : 1,
                            loading ? "not-allowed" : "pointer"
                        ]
                    ]
                ]) + " " + "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        disabled: loading,
                        onClick: selectImage,
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "bcf4910c71be6126",
                                [
                                    bgImage,
                                    loading ? 0.5 : 1,
                                    loading ? "not-allowed" : "pointer"
                                ]
                            ]
                        ]),
                        /*#__PURE__*/ children: "Use Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        disabled: loading,
                        onClick: ()=>updateIndex((i)=>i + 1
                            )
                        ,
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "bcf4910c71be6126",
                                [
                                    bgImage,
                                    loading ? 0.5 : 1,
                                    loading ? "not-allowed" : "pointer"
                                ]
                            ]
                        ]),
                        children: "Try Another"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "bcf4910c71be6126",
                        [
                            bgImage,
                            loading ? 0.5 : 1,
                            loading ? "not-allowed" : "pointer"
                        ]
                    ]
                ]) + " " + "image",
                children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .Spinner */ .$, {})
            }),
            photographer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PhotoCredit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                photographer: photographer
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "bcf4910c71be6126",
                dynamic: [
                    bgImage,
                    loading ? 0.5 : 1,
                    loading ? "not-allowed" : "pointer"
                ],
                children: `.image.__jsx-style-dynamic-selector{width:100%;height:140px;background:url(${bgImage});-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat;margin-bottom:4px}.controls.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:4px}button.__jsx-style-dynamic-selector{opacity:${loading ? 0.5 : 1};cursor:${loading ? "not-allowed" : "pointer"};-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;border:none;background:none;color:inherit;font-size:inherit;padding:0}button.__jsx-style-dynamic-selector:focus{outline:none;text-decoration:underline}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReferralLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8299);




function ReferralLink(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        ...props,
        target: "_blank",
        rel: "noopener noreferrer",
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "de473f2fc38c2e22",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.BLACK */ .DM.BLACK,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.PRIMARY */ .DM.PRIMARY
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || ""),
        children: [
            props.children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "de473f2fc38c2e22",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.BLACK */ .DM.BLACK,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.PRIMARY */ .DM.PRIMARY
                ],
                children: `a.__jsx-style-dynamic-selector{display:block;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.BLACK */ .DM.BLACK};background:${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.PRIMARY */ .DM.PRIMARY};-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;padding:2px 3px;font-weight:bold;font-size:10px}`
            })
        ]
    });
};


/***/ }),

/***/ 3259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omitby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3250);
/* harmony import */ var lodash_omitby__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omitby__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var _FontSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1499);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(983);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8689);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3016);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3576);
/* harmony import */ var _Presets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5211);
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5285);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4959);
/* harmony import */ var _svg_Settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2859);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FontSelect__WEBPACK_IMPORTED_MODULE_6__, _Popout__WEBPACK_IMPORTED_MODULE_10__, _lib_util__WEBPACK_IMPORTED_MODULE_15__]);
([_FontSelect__WEBPACK_IMPORTED_MODULE_6__, _Popout__WEBPACK_IMPORTED_MODULE_10__, _lib_util__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function KeyboardShortcut({ trigger , handle  }) {
    (0,actionsack__WEBPACK_IMPORTED_MODULE_4__.useKeyboardListener)(trigger, handle);
    return null;
}
function WindowSettings({ onChange , windowTheme , paddingHorizontal , paddingVertical , dropShadow , dropShadowBlurRadius , dropShadowOffsetY , windowControls , widthAdjustment , width , watermark , onWidthChanging , onWidthChanged ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "fb9926f1588c5500",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ]
            ]
        ]) + " " + "settings-content",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                selected: windowTheme || "none",
                windowControls: windowControls,
                onChange: onChange
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "fb9926f1588c5500",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "Padding (vert)",
                        value: paddingVertical,
                        maxValue: 200,
                        onChange: onChange.bind(null, "paddingVertical")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "Padding (horiz)",
                        value: paddingHorizontal,
                        onChange: onChange.bind(null, "paddingHorizontal"),
                        onMouseDown: onWidthChanging,
                        onMouseUp: onWidthChanged
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                label: "Drop shadow",
                enabled: dropShadow,
                onChange: onChange.bind(null, "dropShadow")
            }),
            dropShadow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "fb9926f1588c5500",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "row drop-shadow-options",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "(offset-y)",
                        value: dropShadowOffsetY,
                        onChange: onChange.bind(null, "dropShadowOffsetY")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "(blur-radius)",
                        value: dropShadowBlurRadius,
                        onChange: onChange.bind(null, "dropShadowBlurRadius")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                label: "Auto-adjust width",
                enabled: widthAdjustment,
                onChange: onChange.bind(null, "widthAdjustment")
            }),
            !widthAdjustment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "fb9926f1588c5500",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "row settings-row width-row",
                /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    label: "Width",
                    type: "number",
                    value: width,
                    min: _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .DEFAULT_WIDTHS.minWidth */ .H8.minWidth,
                    max: _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .DEFAULT_WIDTHS.maxWidth */ .H8.maxWidth,
                    onChange: (e)=>onChange("width", e.target.value)
                    ,
                    width: "50%"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                label: "Watermark",
                enabled: watermark,
                onChange: onChange.bind(null, "watermark")
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "fb9926f1588c5500",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.width-row.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:8px 12px 8px 8px}.row.__jsx-style-dynamic-selector>div:first-child{border-right:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.drop-shadow-options.__jsx-style-dynamic-selector .slider-bg,.drop-shadow-options.__jsx-style-dynamic-selector label{opacity:.5}.settings-content.__jsx-style-dynamic-selector .settings-row:focus-within{outline:-webkit-focus-ring-color auto 4px}`
            })
        ]
    });
}
function EditorSettings({ onChange , onUpload , font , size , lineHeight , lineNumbers , firstLineNumber , hiddenCharacters , onWidthChanging , onWidthChanged ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-9d9d4cd9bbf6ec23" + " " + "settings-content",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FontSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                selected: font,
                onUpload: onUpload,
                onChange: onChange.bind(null, "fontFamily")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                label: "Size",
                value: size,
                minValue: 10,
                maxValue: 18,
                step: 0.5,
                onChange: onChange.bind(null, "fontSize"),
                onMouseDown: onWidthChanging,
                onMouseUp: onWidthChanged
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                label: "Line height",
                value: lineHeight,
                minValue: 90,
                maxValue: 250,
                unit: "%",
                onChange: onChange.bind(null, "lineHeight")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                label: "Line numbers",
                enabled: lineNumbers,
                onChange: onChange.bind(null, "lineNumbers")
            }),
            lineNumbers && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-9d9d4cd9bbf6ec23" + " " + "row settings-row first-line-number-row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    label: "First line number",
                    type: "number",
                    value: firstLineNumber,
                    min: 0,
                    onChange: (e)=>onChange("firstLineNumber", Number(e.target.value))
                    ,
                    width: "50%"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                label: "Hidden characters",
                enabled: hiddenCharacters,
                onChange: onChange.bind(null, "hiddenCharacters")
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "9d9d4cd9bbf6ec23",
                children: ".first-line-number-row.jsx-9d9d4cd9bbf6ec23{padding:8px 12px 8px 8px}"
            })
        ]
    });
}
const resetButtonStyle = {
    borderTop: `1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY}`
};
function MiscSettings({ format , reset , applyPreset , settings  }) {
    const input = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    let download;
    try {
        download = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(settings))}`;
    } catch (error) {
    // pass
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-f40c11461f7e8c29" + " " + "settings-content",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-f40c11461f7e8c29" + " " + "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        hidden: true,
                        ref: input,
                        type: "file",
                        accept: ".json",
                        onChange: async (e)=>{
                            const json = await (0,_lib_util__WEBPACK_IMPORTED_MODULE_15__/* .fileToJSON */ .Ss)(e.target.files[0]);
                            if (json) {
                                applyPreset(json);
                            }
                        },
                        className: "jsx-f40c11461f7e8c29"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        center: true,
                        style: {
                            borderRight: `1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY}`
                        },
                        onClick: ()=>input.current.click()
                        ,
                        children: "Import config"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        center: true,
                        Component: "a",
                        href: download,
                        download: "carbon-config.json",
                        children: "Export config"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                center: true,
                onClick: format,
                style: resetButtonStyle,
                children: "Prettify code"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                center: true,
                color: _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.RED */ .DM.RED,
                onClick: reset,
                style: resetButtonStyle,
                children: "Reset settings"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f40c11461f7e8c29",
                children: ".row.jsx-f40c11461f7e8c29{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.settings-content.jsx-f40c11461f7e8c29{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.settings-content.jsx-f40c11461f7e8c29 a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;user-drag:none}"
            })
        ]
    });
}
const settingButtonStyle = {
    width: "40px",
    height: "100%"
};
const invalidSetting = (v, k)=>// Allow highlights in presets and config exports
    !(Object.prototype.hasOwnProperty.call(_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .DEFAULT_SETTINGS */ .Z, k) || k === "highlights")
;
class Settings extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
    state = {
        presets: _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .DEFAULT_PRESETS */ .pP,
        selectedMenu: "Window",
        showPresets: true,
        previousSettings: null,
        widthChanging: false
    };
    settingsRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    menuRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    componentDidMount() {
        const storedPresets = (0,_lib_util__WEBPACK_IMPORTED_MODULE_15__/* .getPresets */ .Yz)(localStorage) || [];
        this.setState(({ presets  })=>({
                presets: [
                    ...storedPresets,
                    ...presets
                ]
            })
        );
    }
    togglePresets = ()=>this.setState((0,_lib_util__WEBPACK_IMPORTED_MODULE_15__/* .toggle */ .ZN)("showPresets"))
    ;
    selectMenu = (selectedMenu)=>()=>this.setState({
                selectedMenu
            })
    ;
    handleWidthChanging = ()=>{
        const rect = this.settingsRef.current.getBoundingClientRect();
        this.settingPosition = {
            top: rect.bottom,
            left: rect.left
        };
        this.setState({
            widthChanging: true
        });
    };
    handleWidthChanged = ()=>this.setState({
            widthChanging: false
        })
    ;
    handleChange = (key, value)=>{
        this.props.onChange(key, value);
        this.setState({
            previousSettings: null
        });
    };
    handleOpenAndFocus = ()=>{
        this.props.toggleVisibility();
        if (!this.props.isVisible) {
            this.menuRef.current.focus();
        }
    };
    handleReset = ()=>{
        this.props.resetDefaultSettings();
        this.setState({
            previousSettings: null
        });
    };
    handleFontUpload = (id, url)=>{
        this.props.onChange("fontFamily", id);
        this.props.onChange("fontUrl", url);
        this.props.toggleVisibility();
    };
    getSettingsFromProps = ()=>lodash_omitby__WEBPACK_IMPORTED_MODULE_3___default()(this.props, invalidSetting)
    ;
    applyPreset = (preset)=>{
        const previousSettings = this.getSettingsFromProps();
        this.props.applyPreset(preset);
        this.setState({
            previousSettings
        });
    };
    undoPreset = ()=>{
        this.props.applyPreset({
            ...this.state.previousSettings,
            id: null
        });
        this.setState({
            previousSettings: null
        });
    };
    removePreset = (id)=>{
        if (this.props.preset === id) {
            this.props.onChange("preset", null);
            this.setState({
                previousSettings: null
            });
        }
        this.setState(({ presets  })=>({
                presets: presets.filter((p)=>p.id !== id
                )
            })
        , this.savePresets);
    };
    createPreset = async ()=>{
        const newPreset = this.getSettingsFromProps();
        newPreset.id = `preset:${(0,_lib_util__WEBPACK_IMPORTED_MODULE_15__/* .generateId */ .Ox)()}`;
        newPreset.custom = true;
        newPreset.icon = await this.props.getCarbonImage({
            format: "png",
            squared: true,
            exportSize: 1
        });
        this.props.onChange("preset", newPreset.id);
        this.setState(({ presets  })=>({
                previousSettings: null,
                presets: [
                    newPreset,
                    ...presets
                ]
            })
        , this.savePresets);
    };
    savePresets = ()=>(0,_lib_util__WEBPACK_IMPORTED_MODULE_15__/* .savePresets */ .AK)(this.state.presets.filter((p)=>p.custom
        ))
    ;
    renderContent = ()=>{
        switch(this.state.selectedMenu){
            case "Window":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WindowSettings, {
                    onChange: this.handleChange,
                    onWidthChanging: this.handleWidthChanging,
                    onWidthChanged: this.handleWidthChanged,
                    windowTheme: this.props.windowTheme,
                    paddingHorizontal: this.props.paddingHorizontal,
                    paddingVertical: this.props.paddingVertical,
                    dropShadow: this.props.dropShadow,
                    dropShadowBlurRadius: this.props.dropShadowBlurRadius,
                    dropShadowOffsetY: this.props.dropShadowOffsetY,
                    windowControls: this.props.windowControls,
                    widthAdjustment: this.props.widthAdjustment,
                    width: this.props.width,
                    watermark: this.props.watermark
                });
            case "Editor":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditorSettings, {
                    onChange: this.handleChange,
                    onUpload: this.handleFontUpload,
                    onWidthChanging: this.handleWidthChanging,
                    onWidthChanged: this.handleWidthChanged,
                    font: this.props.fontFamily,
                    size: this.props.fontSize,
                    lineHeight: this.props.lineHeight,
                    lineNumbers: this.props.lineNumbers,
                    firstLineNumber: this.props.firstLineNumber,
                    hiddenCharacters: this.props.hiddenCharacters
                });
            case "Misc":
                {
                    const settings = this.getSettingsFromProps();
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MiscSettings, {
                        format: this.props.format,
                        reset: this.handleReset,
                        applyPreset: this.props.applyPreset,
                        settings: settings
                    });
                }
            default:
                return null;
        }
    };
    render() {
        const { selectedMenu , showPresets , presets , previousSettings , widthChanging  } = this.state;
        const { preset , isVisible , toggleVisibility  } = this.props;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: this.settingsRef,
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "19da7b332a1f8685",
                    [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    ]
                ]
            ]) + " " + "settings-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(KeyboardShortcut, {
                    trigger: "\u2318-/",
                    handle: this.handleOpenAndFocus
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(KeyboardShortcut, {
                    trigger: "\u21E7-\u2318-\\",
                    handle: this.handleReset
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    title: "Settings Menu",
                    border: true,
                    center: true,
                    selected: isVisible,
                    style: settingButtonStyle,
                    onClick: toggleVisibility,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Settings__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Popout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    pointerLeft: "15px",
                    hidden: !isVisible,
                    style: {
                        position: widthChanging ? "fixed" : "absolute",
                        width: "316px",
                        top: widthChanging ? this.settingPosition.top : "initial",
                        left: widthChanging ? this.settingPosition.left : "initial"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Presets__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            show: showPresets,
                            presets: presets,
                            selected: preset,
                            toggle: this.togglePresets,
                            apply: this.applyPreset,
                            undo: this.undoPreset,
                            remove: this.removePreset,
                            create: this.createPreset,
                            applied: !!previousSettings
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "19da7b332a1f8685",
                                    [
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "settings-bottom",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ref: this.menuRef,
                                    tabIndex: -1,
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "19da7b332a1f8685",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]) + " " + "settings-menu",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            name: "Window",
                                            select: this.selectMenu,
                                            selected: selectedMenu
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            name: "Editor",
                                            select: this.selectMenu,
                                            selected: selectedMenu
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            name: "Misc",
                                            select: this.selectMenu,
                                            selected: selectedMenu
                                        })
                                    ]
                                }),
                                this.renderContent()
                            ]
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "19da7b332a1f8685",
                    dynamic: [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        _lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY
                    ],
                    children: `.settings-container.__jsx-style-dynamic-selector{position:relative}.settings-bottom.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.settings-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-webkit-flex:0 0 96px;-moz-box-flex:0;-ms-flex:0 0 96px;flex:0 0 96px;background-color:${_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY}}.settings-bottom.__jsx-style-dynamic-selector .settings-content{width:100%;border-left:2px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.settings-bottom.__jsx-style-dynamic-selector .settings-content>div:not(:first-child){border-top:solid 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .COLORS.SECONDARY */ .DM.SECONDARY}}`
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_10__/* .managePopout */ .f)(Settings));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ApiContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7896);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8299);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3576);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3016);
/* harmony import */ var _svg_Arrows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApiContext__WEBPACK_IMPORTED_MODULE_4__, _Popout__WEBPACK_IMPORTED_MODULE_7__]);
([_ApiContext__WEBPACK_IMPORTED_MODULE_4__, _Popout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const popoutStyle = {
    width: "144px",
    right: 8
};
function ShareMenu({ isVisible , toggleVisibility , tweet , imgur  }) {
    const api = (0,_ApiContext__WEBPACK_IMPORTED_MODULE_4__/* .useAPI */ .E)();
    const online = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useOnline)();
    const [onClickTweet, { loading: tweeting  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(tweet);
    const [onClickImgur, { loading: imguring  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(imgur);
    if (!api || !api.tweet) {
        return null;
    }
    if (!online) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "98e49f301a56bbb8",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE
                ]
            ]
        ]) + " " + "share-menu-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "98e49f301a56bbb8",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE
                        ]
                    ]
                ]) + " " + "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        /*#__PURE__*/ center: true,
                        border: true,
                        large: true,
                        padding: "0 16px",
                        margin: "0",
                        onClick: onClickTweet,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE,
                        style: {
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: 0
                        },
                        children: tweeting ? "Loading\u2026" : "Tweet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        id: "share-menu",
                        border: true,
                        large: true,
                        center: true,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE,
                        padding: "0 8px",
                        margin: "0 8px 0 -1px",
                        onClick: toggleVisibility,
                        "data-cy": "share-button",
                        style: {
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            maxWidth: "26px"
                        },
                        title: "Share menu dropdown",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Arrows__WEBPACK_IMPORTED_MODULE_8__/* .Down */ .R, {
                            color: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                hidden: !isVisible,
                borderColor: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE,
                pointerRight: "6px",
                style: popoutStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "98e49f301a56bbb8",
                            [
                                _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE
                            ]
                        ]
                    ]) + " " + "share-row flex",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        padding: "8px",
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE,
                        onClick: onClickImgur,
                        children: imguring ? "Uploading..." : "Upload to Imgur (beta)"
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "98e49f301a56bbb8",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE
                ],
                children: `.share-menu-container.__jsx-style-dynamic-selector{position:relative;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLUE */ .DM.BLUE};-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.share-row.__jsx-style-dynamic-selector{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_7__/* .managePopout */ .f)(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(ShareMenu)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8299);




class Slider extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    static defaultProps = {
        onMouseDown: ()=>{},
        onMouseUp: ()=>{},
        unit: "px"
    };
    handleChange = (e)=>{
        this.props.onChange(`${e.target.value}${this.props.unit}`);
    };
    render() {
        const minValue = this.props.minValue || 0;
        const maxValue = this.props.maxValue || 100;
        const step = "step" in this.props ? this.props.step : 1;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "a39d119f4ff2c08b",
                    [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                    ]
                ]
            ]) + " " + "slider settings-row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        transform: `translate3d(${(parseFloat(this.props.value) - minValue) * 1.0 / (maxValue - minValue) * 100}%, 0px, 0px)`
                    },
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "a39d119f4ff2c08b",
                            [
                                _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                            ]
                        ]
                    ]) + " " + "slider-bg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "a39d119f4ff2c08b",
                            [
                                _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                            ]
                        ]
                    ]),
                    /*#__PURE__*/ children: this.props.label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "range",
                    defaultValue: this.props.value,
                    onChange: this.handleChange,
                    onMouseDown: this.props.onMouseDown,
                    onMouseUp: this.props.onMouseUp,
                    min: minValue,
                    max: maxValue,
                    step: step,
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "a39d119f4ff2c08b",
                            [
                                _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                            ]
                        ]
                    ])
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "a39d119f4ff2c08b",
                    dynamic: [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                    ],
                    children: `.slider.__jsx-style-dynamic-selector{position:relative;height:33px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider.__jsx-style-dynamic-selector:last-of-type{border-bottom:0}label.__jsx-style-dynamic-selector{position:absolute;left:8px;height:33px;line-height:33px}input.__jsx-style-dynamic-selector{opacity:0;cursor:ew-resize;position:relative;height:100%;width:100%;margin:0}.slider-bg.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;pointer-events:none;height:33px;width:100%;background:${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY}}`
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);


/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ThemeSelect)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Toggle.js
var Toggle = __webpack_require__(8689);
;// CONCATENATED MODULE: ./components/svg/WindowThemes.js


const Sharp = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 81 81",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    id: "a1",
                    width: "81",
                    height: "81",
                    rx: "3"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: "b1",
                        fill: "white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            xlinkHref: "#a1"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("use", {
                        fill: "#616161",
                        xlinkHref: "#a1"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        transform: "translate(16 32)",
                        mask: "url(#b1)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#000000",
                                fillRule: "nonzero",
                                d: "M66.0458013,46.1092762 C66.0458013,48.3193105 64.2622787,50.1077029 62.050805,50.1077029 L0.174089069,50.1077029 L0.174089069,6.16868499 C0.174089069,0.174657534 0.174089069,0.174657534 0.174089069,0.174657534 L66.0458013,0.174657534 L66.0458013,46.1092762 Z"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                transform: "translate(19.96 15.27)",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                        cx: "7.045",
                                        cy: "7.048",
                                        fill: "#FF5E55",
                                        fillRule: "nonzero",
                                        stroke: "#E0443E",
                                        strokeWidth: ".5",
                                        rx: "7.045",
                                        ry: "7.048"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                        cx: "30.526",
                                        cy: "7.048",
                                        fill: "#FFC02C",
                                        fillRule: "nonzero",
                                        stroke: "#DEA123",
                                        strokeWidth: ".5",
                                        rx: "7.045",
                                        ry: "7.048"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
;
const BW = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 81 81",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    id: "a2",
                    width: "81",
                    height: "81",
                    rx: "3"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: "b2",
                        fill: "white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            xlinkHref: "#a2"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("use", {
                        fill: "#616161",
                        xlinkHref: "#a2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        transform: "translate(17 33)",
                        mask: "url(#b2)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#000000",
                                stroke: "#FFFFFF",
                                strokeWidth: "2",
                                d: "M65.0458013,49.1077029 C66.0458013,49.1077029 0.174089069,49.1077029 0.174089069,49.1077029 L0.174089069,5.16868499 C0.174089069,2.41055979 2.40986586,0.174657534 5.17268563,0.174657534 L65.0458013,0.174657534 L65.0458013,49.1077029 Z"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                fillRule: "nonzero",
                                stroke: "#878787",
                                transform: "translate(18.96 14.27)",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                        cx: "7.045",
                                        cy: "7.048",
                                        rx: "7.045",
                                        ry: "7.048"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                        cx: "30.526",
                                        cy: "7.048",
                                        rx: "7.045",
                                        ry: "7.048"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
;
const None = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 81 81",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    id: "a3",
                    width: "81",
                    height: "81",
                    rx: "3"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: "b3",
                        fill: "white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            xlinkHref: "#a3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("use", {
                        fill: "#616161",
                        xlinkHref: "#a3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        transform: "translate(16 32)",
                        mask: "url(#b3)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#000000",
                                fillRule: "nonzero",
                                d: "M66.0458013,46.1092762 C66.0458013,48.3193105 64.2622787,50.1077029 62.050805,50.1077029 L0.174089069,50.1077029 L0.174089069,6.16868499 C0.174089069,2.85738806 2.85846845,0.174657534 6.17268563,0.174657534 L66.0458013,0.174657534 L66.0458013,46.1092762 Z"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                fillRule: "nonzero",
                                strokeWidth: ".5",
                                transform: "translate(19.96 15.27)",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                        cx: "7.045",
                                        cy: "7.048",
                                        fill: "#FF5E55",
                                        stroke: "#E0443E",
                                        rx: "7.045",
                                        ry: "7.048"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                        cx: "30.526",
                                        cy: "7.048",
                                        fill: "#FFC02C",
                                        stroke: "#DEA123",
                                        rx: "7.045",
                                        ry: "7.048"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
;
const Boxy = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        id: "a3",
                        width: "81",
                        height: "81",
                        rx: "3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clip0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "60",
                            height: "60",
                            transform: "matrix(-1 0 0 1 60 0)",
                            fill: "#878787"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: "b3",
                        fill: "#878787",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            xlinkHref: "#a3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("use", {
                        fill: "#616161",
                        xlinkHref: "#a3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        clipPath: "url(#clip0)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M-0.774667 57.8587C-0.774667 59.4958 0.54646 60.8205 2.18459 60.8205H48.0192V28.2731C48.0192 25.8203 46.0308 23.8331 43.5758 23.8331H-0.774667V57.8587Z",
                                fill: "black"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M18.3333 34H10.3333C9.78105 34 9.33333 34.4477 9.33333 35V43C9.33333 43.5523 9.78105 44 10.3333 44H18.3333C18.8856 44 19.3333 43.5523 19.3333 43V35C19.3333 34.4477 18.8856 34 18.3333 34Z",
                                stroke: "#878787"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M29.3333 34.8333L37.6667 43.1667",
                                stroke: "#878787",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M29.3333 43.1667L37.6667 34.8333",
                                stroke: "#878787",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        ]
                    })
                ]
            })
        ]
    })
;

// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
;// CONCATENATED MODULE: ./components/ThemeSelect.js






const WINDOW_THEMES_MAP = {
    none: None,
    sharp: Sharp,
    bw: BW,
    boxy: Boxy
};
class ThemeSelect extends (external_react_default()).Component {
    select = (theme)=>{
        if (this.props.selected !== theme) {
            this.props.onChange("windowTheme", theme);
        }
    };
    renderThemes() {
        return Object.keys(WINDOW_THEMES_MAP).map((theme)=>{
            const Img = WINDOW_THEMES_MAP[theme];
            const checked = this.props.selected === theme;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                role: "radio",
                checked: checked,
                "aria-checked": checked,
                tabIndex: checked ? 0 : -1,
                onClick: this.select.bind(null, theme),
                value: theme,
                className: styled_jsx_default().dynamic([
                    [
                        "481de4a1d6ac1b07",
                        [
                            constants/* COLORS.SECONDARY */.DM.SECONDARY
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                        className: styled_jsx_default().dynamic([
                            [
                                "481de4a1d6ac1b07",
                                [
                                    constants/* COLORS.SECONDARY */.DM.SECONDARY
                                ]
                            ]
                        ])
                    }),
                    jsx_runtime_.jsx((styled_jsx_default()), {
                        id: "481de4a1d6ac1b07",
                        dynamic: [
                            constants/* COLORS.SECONDARY */.DM.SECONDARY
                        ],
                        children: `[role="radio"].__jsx-style-dynamic-selector{cursor:pointer;margin-right:8px;outline:none}div.__jsx-style-dynamic-selector svg{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}[aria-checked="true"].__jsx-style-dynamic-selector svg{border:solid 2px ${constants/* COLORS.SECONDARY */.DM.SECONDARY}}[role="radio"].__jsx-style-dynamic-selector:last-of-type{margin-right:0px}`
                    })
                ]
            }, theme);
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-c6692aa5d2d06f4e" + " " + "window-theme",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Toggle/* default */.Z, {
                        label: "Window controls",
                        enabled: this.props.windowControls,
                        onChange: (v)=>this.props.onChange("windowControls", v)
                    }),
                    this.props.windowControls && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        role: "radiogroup",
                        "aria-labelledby": "window-theme-label",
                        className: "jsx-c6692aa5d2d06f4e" + " " + "themes",
                        children: this.renderThemes()
                    }),
                    jsx_runtime_.jsx((styled_jsx_default()), {
                        id: "c6692aa5d2d06f4e",
                        children: ".window-theme.jsx-c6692aa5d2d06f4e span.jsx-c6692aa5d2d06f4e{display:inline-block;margin-bottom:2px}.themes.jsx-c6692aa5d2d06f4e{padding:4px 8px 8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;max-width:200px;overflow-x:scroll}"
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const components_ThemeSelect = (ThemeSelect);


/***/ }),

/***/ 6460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalHighlights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2329);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7695);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3016);
/* harmony import */ var _ReferralLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1332);
/* harmony import */ var _svg_Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5755);
/* harmony import */ var _svg_Remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7880);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8299);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popout__WEBPACK_IMPORTED_MODULE_6__]);
_Popout__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ThemeCreate = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 79).then(__webpack_require__.bind(__webpack_require__, 9079))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\Themes\\index.js -> " + "./ThemeCreate"
        ]
    },
    loading: ()=>null
});
const ThemeItem = ({ children , item , isSelected , remove  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "ec515c8ada85fe92",
                [
                    item.id === "create" ? "center" : "space-between"
                ]
            ]
        ]) + " " + "theme-item",
        children: [
            children,
            item.referral && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    margin: `0 ${isSelected ? 8 : 0}px 0 8px`
                },
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "ec515c8ada85fe92",
                        [
                            item.id === "create" ? "center" : "space-between"
                        ]
                    ]
                ]),
                /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReferralLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    href: item.referral,
                    children: "Purchase"
                })
            }),
            item.custom && !isSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                role: "button",
                tabIndex: 0,
                onClick: (e)=>{
                    e.stopPropagation();
                    remove(item.id);
                },
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "ec515c8ada85fe92",
                        [
                            item.id === "create" ? "center" : "space-between"
                        ]
                    ]
                ]) + " " + "icon",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Remove__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    color: _lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    style: {
                        transform: "scale(1.6)"
                    }
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ec515c8ada85fe92",
                dynamic: [
                    item.id === "create" ? "center" : "space-between"
                ],
                children: `.theme-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:${item.id === "create" ? "center" : "space-between"};-webkit-justify-content:${item.id === "create" ? "center" : "space-between"};-moz-box-pack:${item.id === "create" ? "center" : "space-between"};-ms-flex-pack:${item.id === "create" ? "center" : "space-between"};justify-content:${item.id === "create" ? "center" : "space-between"};-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-right:6px}`
            })
        ]
    })
;
const themeIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
const getCustomName = (themes)=>`Custom Theme ${themes.filter(({ name  })=>name.startsWith("Custom Theme")
    ).length + 1}`
;
class Themes extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
    state = {
        name: ""
    };
    dropdown = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    static getDerivedStateFromProps(props) {
        if (!props.isVisible) {
            return {
                name: getCustomName(props.themes)
            };
        }
        return null;
    }
    handleThemeSelected = (theme)=>{
        if (theme) {
            const { toggleVisibility , update  } = this.props;
            if (theme.id === "create") {
                toggleVisibility();
                this.dropdown.current.closeMenu();
            } else {
                update(theme.id);
            }
        }
    };
    create = (theme)=>{
        this.props.toggleVisibility();
        this.props.create(theme);
    };
    itemWrapper = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeItem, {
            ...props,
            remove: this.props.remove
        })
    ;
    render() {
        const { themes , theme , isVisible , toggleVisibility  } = this.props;
        const highlights = {
            ...theme.highlights,
            ...this.props.highlights
        };
        const dropdownValue = isVisible ? {
            name: this.state.name
        } : theme;
        const dropdownList = [
            {
                id: "create",
                name: "Create +"
            },
            ...themes, 
        ];
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-cy": "themes-container",
            className: "jsx-e32224b0f24416ba" + " " + "themes",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "Theme",
                    innerRef: this.dropdown,
                    icon: themeIcon,
                    disableInput: isVisible,
                    selected: dropdownValue,
                    list: dropdownList,
                    itemWrapper: this.itemWrapper,
                    onChange: this.handleThemeSelected,
                    onOpen: isVisible && toggleVisibility
                }),
                isVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeCreate, {
                    theme: theme,
                    themes: themes,
                    highlights: highlights,
                    create: this.create,
                    updateHighlights: this.props.updateHighlights,
                    name: this.state.name,
                    onInputChange: (e)=>this.setState({
                            name: e.target.value
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalHighlights__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    highlights: highlights
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "e32224b0f24416ba",
                    children: ".themes.jsx-e32224b0f24416ba{position:relative}"
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_6__/* .managePopout */ .f)(Themes));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Toast(props) {
    const [display, on] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true);
    function off() {
        return on(false);
    }
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (props.timeout) {
            const to = setTimeout(off, props.timeout);
            return ()=>clearTimeout(to)
            ;
        }
    }, [
        props.timeout
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-10dc6a8d123359eb" + " " + `toast mb2 ${display ? "" : "out"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-10dc6a8d123359eb" + " " + "toast-content",
                children: [
                    props.children,
                    props.closable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: off,
                        className: "jsx-10dc6a8d123359eb" + " " + "close",
                        /*#__PURE__*/ children: "\xd7"
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "10dc6a8d123359eb",
                children: "@-webkit-keyframes in{from{-webkit-transform:translateX(16rem);transform:translateX(16rem)}to{-webkit-transform:translateX(0rem);transform:translateX(0rem)}}@-moz-keyframes in{from{-moz-transform:translateX(16rem);transform:translateX(16rem)}to{-moz-transform:translateX(0rem);transform:translateX(0rem)}}@-o-keyframes in{from{-o-transform:translateX(16rem);transform:translateX(16rem)}to{-o-transform:translateX(0rem);transform:translateX(0rem)}}@keyframes in{from{-webkit-transform:translateX(16rem);-moz-transform:translateX(16rem);-o-transform:translateX(16rem);transform:translateX(16rem)}to{-webkit-transform:translateX(0rem);-moz-transform:translateX(0rem);-o-transform:translateX(0rem);transform:translateX(0rem)}}@-webkit-keyframes out{from{-webkit-transform:translateX(0rem);transform:translateX(0rem)}97%{-webkit-transform:translateX(20rem);transform:translateX(20rem)}to{-webkit-transform:translateX(20rem);transform:translateX(20rem);display:none;height:0;padding:0;margin:0}}@-moz-keyframes out{from{-moz-transform:translateX(0rem);transform:translateX(0rem)}97%{-moz-transform:translateX(20rem);transform:translateX(20rem)}to{-moz-transform:translateX(20rem);transform:translateX(20rem);display:none;height:0;padding:0;margin:0}}@-o-keyframes out{from{-o-transform:translateX(0rem);transform:translateX(0rem)}97%{-o-transform:translateX(20rem);transform:translateX(20rem)}to{-o-transform:translateX(20rem);transform:translateX(20rem);display:none;height:0;padding:0;margin:0}}@keyframes out{from{-webkit-transform:translateX(0rem);-moz-transform:translateX(0rem);-o-transform:translateX(0rem);transform:translateX(0rem)}97%{-webkit-transform:translateX(20rem);-moz-transform:translateX(20rem);-o-transform:translateX(20rem);transform:translateX(20rem)}to{-webkit-transform:translateX(20rem);-moz-transform:translateX(20rem);-o-transform:translateX(20rem);transform:translateX(20rem);display:none;height:0;padding:0;margin:0}}.toast.jsx-10dc6a8d123359eb{padding:8px 16px;color:#fff;border:1px solid#fff;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background:#000;font-size:14px;-webkit-animation-name:in;-moz-animation-name:in;-o-animation-name:in;animation-name:in;-webkit-animation-duration:600ms;-moz-animation-duration:600ms;-o-animation-duration:600ms;animation-duration:600ms;-webkit-animation-direction:forwards;-moz-animation-direction:forwards;-o-animation-direction:forwards;animation-direction:forwards;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;-moz-animation-timing-function:ease-out;-o-animation-timing-function:ease-out;animation-timing-function:ease-out}.toast.out.jsx-10dc6a8d123359eb{-webkit-animation-name:out;-moz-animation-name:out;-o-animation-name:out;animation-name:out}.toast-content.jsx-10dc6a8d123359eb{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.toast.jsx-10dc6a8d123359eb .close{padding-left:0;padding-right:0;background:transparent;color:white;border:none;font-size:100%;margin-left:1rem;text-decoration:none;cursor:pointer}"
            })
        ]
    });
}
function ToastContainer(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-6be947981335dc36" + " " + "toast",
        children: [
            props.toasts ? props.toasts.slice().reverse().map((toast)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toast, {
                    ...toast
                }, toast.children)
            ) : null,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "6be947981335dc36",
                children: ".toast.jsx-6be947981335dc36{position:fixed;z-index:9999;bottom:1rem;right:1rem}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastContainer);


/***/ }),

/***/ 8689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_Checkmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5331);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);





class Toggle extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
    static defaultProps = {
        className: ""
    };
    toggle = ()=>this.props.onChange(!this.props.enabled)
    ;
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "28980f53e9ac62a9",
                    [
                        this.props.padding || "8px 12px 8px 8px",
                        _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                    ]
                ]
            ]) + " " + `toggle ${this.props.className}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "28980f53e9ac62a9",
                            [
                                this.props.padding || "8px 12px 8px 8px",
                                _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                            ]
                        ]
                    ]) + " " + "label",
                    /*#__PURE__*/ children: this.props.label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    checked: this.props.enabled,
                    onChange: this.toggle,
                    "aria-checked": this.props.enabled,
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "28980f53e9ac62a9",
                            [
                                this.props.padding || "8px 12px 8px 8px",
                                _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                            ]
                        ]
                    ])
                }),
                this.props.enabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Checkmark__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "28980f53e9ac62a9",
                            [
                                this.props.padding || "8px 12px 8px 8px",
                                _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                            ]
                        ]
                    ]) + " " + "checkmark-disabled"
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "28980f53e9ac62a9",
                    dynamic: [
                        this.props.padding || "8px 12px 8px 8px",
                        _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY
                    ],
                    children: `.toggle.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:${this.props.padding || "8px 12px 8px 8px"};outline:none}input.__jsx-style-dynamic-selector{cursor:pointer;margin:0;width:100%;height:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;opacity:0;top:0;left:0;right:0;bottom:0}input.__jsx-style-dynamic-selector:focus+svg,input.__jsx-style-dynamic-selector:focus+.checkmark-disabled.__jsx-style-dynamic-selector{outline:4px auto -webkit-focus-ring-color}.checkmark-disabled.__jsx-style-dynamic-selector{width:18px;height:18px;-webkit-border-radius:36px;-moz-border-radius:36px;border-radius:36px;background-color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY}}`
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);


/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Toolbar = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: props.style,
        className: "jsx-e3415c9b8e46575" + " " + "toolbar",
        children: [
            props.children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "e3415c9b8e46575",
                children: ".toolbar.jsx-e3415c9b8e46575{width:100%;height:40px;margin-bottom:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;z-index:3;font-size:14px}.toolbar.jsx-e3415c9b8e46575>div:not(:last-child){margin-right:8px}@media(max-width:920px){.toolbar.jsx-e3415c9b8e46575{max-width:100%;height:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.toolbar.jsx-e3415c9b8e46575>div:not(:last-of-type){margin-right:0;margin-bottom:1rem}}"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toolbar);


/***/ }),

/***/ 1995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Language)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Language() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 0.6875H7.97539C6.02773 0.694531 4.19961 1.45742 2.82148 2.83555C1.44687 4.21719 0.6875 6.04883 0.6875 8C0.6875 9.95117 1.44688 11.7828 2.825 13.1645C4.19961 14.5426 6.03125 15.3055 7.97891 15.3125H8.00352C12.0359 15.3125 15.316 12.0324 15.316 8C15.316 3.96758 12.0324 0.6875 8 0.6875ZM14.3352 7.50781H11.607C11.5754 6.56914 11.4594 5.67266 11.2625 4.82891C11.8637 4.63555 12.4473 4.38945 13.0098 4.09063C13.7832 5.08203 14.2402 6.25625 14.3352 7.50781ZM7.50781 7.50781H5.33516C5.36328 6.64648 5.46875 5.83086 5.64453 5.07852C6.25625 5.21562 6.87852 5.3 7.50781 5.32812V7.50781ZM7.50781 8.49219V10.6684C6.88203 10.6965 6.25625 10.7809 5.64453 10.918C5.46875 10.1656 5.36328 9.35 5.33516 8.49219H7.50781ZM8.49219 8.49219H10.6473C10.6191 9.35 10.5137 10.1656 10.3379 10.9145C9.7332 10.7773 9.11445 10.6965 8.49219 10.6684V8.49219ZM8.49219 7.50781V5.32812C9.11797 5.3 9.73672 5.21562 10.3379 5.08203C10.5137 5.83437 10.6191 6.64648 10.6473 7.50781H8.49219ZM12.3383 3.36289C11.9059 3.57734 11.4594 3.76016 11.0023 3.90781C10.7527 3.15547 10.4363 2.50508 10.0707 1.9918C10.9145 2.28359 11.6844 2.75117 12.3383 3.36289ZM10.0742 4.16094C9.55742 4.27344 9.02656 4.34375 8.49219 4.37188V1.79141C9.08984 2.11484 9.67344 2.9832 10.0742 4.16094ZM7.50781 1.77734V4.36836C6.96641 4.34023 6.43203 4.26992 5.9082 4.15391C6.31602 2.96563 6.90664 2.09727 7.50781 1.77734ZM5.90469 2.00234C5.54258 2.51211 5.22969 3.15898 4.98008 3.9043C4.53008 3.75664 4.08711 3.57383 3.66172 3.36289C4.30859 2.75469 5.07148 2.29063 5.90469 2.00234ZM2.99023 4.09414C3.5457 4.38945 4.12578 4.63555 4.71992 4.82539C4.51953 5.66563 4.40352 6.56562 4.37539 7.5043H1.66836C1.75977 6.25977 2.2168 5.08555 2.99023 4.09414ZM1.66484 8.49219H4.37188C4.40352 9.43086 4.51953 10.3309 4.71641 11.1711C4.12227 11.3645 3.54219 11.6105 2.98672 11.9023C2.2168 10.9145 1.75977 9.74023 1.66484 8.49219ZM3.6582 12.6371C4.08359 12.4262 4.52656 12.2434 4.98008 12.0957C5.22969 12.8445 5.54258 13.4879 5.90469 14.0012C5.07148 13.7059 4.30859 13.2453 3.6582 12.6371ZM5.9082 11.8426C6.43203 11.7266 6.96992 11.6562 7.50781 11.6281V14.2227C6.90312 13.9027 6.31602 13.0309 5.9082 11.8426ZM8.49219 14.2086V11.6246C9.02656 11.6527 9.55742 11.723 10.0742 11.8355C9.67344 13.0168 9.08984 13.8852 8.49219 14.2086ZM10.0742 14.0082C10.4398 13.4949 10.7563 12.8445 11.0059 12.0922C11.4629 12.2398 11.9129 12.4262 12.3418 12.6406C11.6879 13.2488 10.9145 13.7164 10.0742 14.0082ZM13.0098 11.9059C12.4473 11.607 11.8637 11.3609 11.2625 11.1676C11.4594 10.3273 11.5754 9.43086 11.607 8.49219H14.3352C14.2402 9.74023 13.7867 10.9145 13.0098 11.9059Z",
            fill: "white"
        })
    });
};


/***/ }),

/***/ 7880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Remove)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Remove({ color ="black" , style  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "5",
        height: "5",
        viewBox: "0 0 5 5",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: style,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2.5 3.08725L4.41704 5L5 4.41834L3.08857 2.5L5 0.581656L4.41704 0L2.5 1.91275L0.58296 0L0 0.581656L1.91144 2.5L0 4.41834L0.58296 5L2.5 3.08725Z",
            fill: color
        })
    });
};


/***/ }),

/***/ 2859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Settings() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 18 18",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M206.532032,366.702224 L208.523318,368.142728 C208.69279,368.3122 208.721035,368.509915 208.608053,368.735877 L206.786238,371.74399 C206.673257,371.969953 206.503788,372.040565 206.277825,371.955829 L203.989964,371.066106 C203.283831,371.546276 202.775423,371.842848 202.464724,371.955829 L202.125782,374.286058 C202.069291,374.51202 201.913944,374.625 201.659736,374.625 L198.058474,374.625 C197.804266,374.625 197.648919,374.51202 197.592428,374.286058 L197.253486,371.955829 C196.829806,371.786357 196.321398,371.489786 195.728246,371.066106 L193.440385,371.955829 C193.214422,372.068811 193.044953,371.998198 192.931972,371.74399 L191.110157,368.735877 C190.96893,368.481669 190.997175,368.283955 191.194892,368.142728 L193.101443,366.702224 C193.101443,366.617488 193.094382,366.476263 193.080259,366.278546 C193.066136,366.080828 193.059075,365.925481 193.059075,365.8125 C193.059075,365.699519 193.066136,365.544172 193.080259,365.346454 C193.094382,365.148737 193.101443,365.007512 193.101443,364.922776 L191.152525,363.482272 C190.983053,363.3128 190.954808,363.115085 191.067789,362.889123 L192.889604,359.88101 C193.002585,359.655047 193.172055,359.584435 193.398017,359.669171 L195.685878,360.558894 C196.392011,360.078724 196.90042,359.782152 197.211118,359.669171 L197.550061,357.338942 C197.606551,357.11298 197.761898,357 198.016106,357 L201.617368,357 C201.871576,357 202.026923,357.11298 202.083414,357.338942 L202.379988,359.669171 C202.803668,359.838643 203.312077,360.135214 203.905229,360.558894 L206.150722,359.669171 C206.376684,359.556189 206.560276,359.626802 206.701503,359.88101 L208.523318,362.889123 C208.664544,363.143331 208.6363,363.341045 208.438582,363.482272 L206.532032,364.922776 C206.532032,365.007512 206.539093,365.148737 206.553216,365.346454 C206.567338,365.544172 206.5744,365.699519 206.5744,365.8125 C206.5744,366.23618 206.560277,366.532752 206.532032,366.702224 Z M199.795553,368.905349 C200.671159,368.905349 201.419649,368.608777 202.041046,368.015625 C202.662443,367.422473 202.973138,366.688105 202.973138,365.8125 C202.973138,364.936895 202.662443,364.202527 202.041046,363.609375 C201.419649,363.016223 200.671159,362.719651 199.795553,362.719651 C198.919948,362.719651 198.178519,363.016223 197.571244,363.609375 C196.96397,364.202527 196.660337,364.936895 196.660337,365.8125 C196.660337,366.688105 196.96397,367.422473 197.571244,368.015625 C198.178519,368.608777 198.919948,368.905349 199.795553,368.905349 Z",
            transform: "translate(-191 -357)"
        })
    });
};


/***/ }),

/***/ 5755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Theme() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M13.1206 10.2309C12.8886 10.0164 12.5476 9.96367 12.2558 9.91445C11.8515 9.84766 11.6968 9.77383 11.4612 9.56289C10.9585 9.11641 10.9585 8.46953 11.4612 8.02305L12.5265 7.07734C14.1577 5.63594 14.1577 3.27344 12.5265 1.83203C11.3241 0.773828 9.71045 0.25 8.0335 0.25C6.07529 0.25 4.0292 0.963672 2.45068 2.36289C-0.484863 4.95742 -0.484863 9.20781 2.45068 11.8023C3.90967 13.0926 5.87842 13.7359 7.82607 13.75H7.88584C9.8335 13.75 11.753 13.1207 13.1171 11.9078C13.6233 11.4613 13.539 10.6211 13.1206 10.2309ZM2.21865 5.59375C2.21865 4.97148 2.72139 4.46875 3.34365 4.46875C3.96592 4.46875 4.46865 4.97148 4.46865 5.59375C4.46865 6.21602 3.96592 6.71875 3.34365 6.71875C2.72139 6.71875 2.21865 6.21602 2.21865 5.59375ZM3.6249 10.0234C3.00264 10.0234 2.4999 9.5207 2.4999 8.89844C2.4999 8.27617 3.00264 7.77344 3.6249 7.77344C4.24717 7.77344 4.7499 8.27617 4.7499 8.89844C4.7499 9.5207 4.24717 10.0234 3.6249 10.0234ZM5.8749 4.36328C5.25264 4.36328 4.7499 3.86055 4.7499 3.23828C4.7499 2.61602 5.25264 2.11328 5.8749 2.11328C6.49717 2.11328 6.9999 2.61602 6.9999 3.23828C6.9999 3.86055 6.49717 4.36328 5.8749 4.36328ZM8.40615 12.0625C7.47451 12.0625 6.71865 11.3066 6.71865 10.375C6.71865 9.44336 7.47451 8.6875 8.40615 8.6875C9.33779 8.6875 10.0937 9.44336 10.0937 10.375C10.0937 11.3066 9.33779 12.0625 8.40615 12.0625ZM9.2499 4.75C8.62764 4.75 8.1249 4.24727 8.1249 3.625C8.1249 3.00273 8.62764 2.5 9.2499 2.5C9.87217 2.5 10.3749 3.00273 10.3749 3.625C10.3749 4.24727 9.87217 4.75 9.2499 4.75Z",
            fill: "white"
        })
    });
};


/***/ }),

/***/ 7774:
/***/ ((module) => {


/* eslint-disable */ ;
(function(global) {
    "use strict";
    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();
    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };
    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob1,
        toPixelData: toPixelData,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };
    if (true) module.exports = domtoimage;
    else {}
    /**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options
   * @param {Function} options.filter - Should return true if passed node should be included in the output
   *          (excluding node means excluding it's children as well). Not called on the root node.
   * @param {String} options.bgcolor - color for the background, any valid CSS color value.
   * @param {Number} options.width - width to be applied to node before rendering.
   * @param {Number} options.height - height to be applied to node before rendering.
   * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
   * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
              defaults to 1.0.
   * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
   * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
   * @return {Promise} - A promise that is fulfilled with a SVG image data URL
   * */ function toSvg(node1, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node1).then(function(node) {
            return cloneNode(node, options.filter, true);
        }).then(embedFonts).then(inlineImages).then(applyOptions).then(function(clone) {
            return makeSvgDataUri(clone, options.width || util.width(node1), options.height || util.height(node1), options.escapePercentSign);
        });
        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
            if (options.width) clone.style.width = options.width + "px";
            if (options.height) clone.style.height = options.height + "px";
            if (options.style) Object.keys(options.style).forEach(function(property) {
                clone.style[property] = options.style[property];
            });
            return clone;
        }
    }
    /**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options, @see {@link toSvg}
   * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
   * */ function toPixelData(node, options) {
        return draw(node, options || {}).then(function(canvas) {
            return canvas.getContext("2d").getImageData(0, 0, util.width(node), util.height(node)).data;
        });
    }
    /**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options, @see {@link toSvg}
   * @return {Promise} - A promise that is fulfilled with a PNG image data URL
   * */ function toPng(node, options) {
        options = options || {};
        options.escapePercentSign = true;
        return draw(node, options).then(function(canvas) {
            return canvas.toDataURL();
        });
    }
    /**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options, @see {@link toSvg}
   * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
   * */ function toJpeg(node, options) {
        options = options || {};
        return draw(node, options).then(function(canvas) {
            return canvas.toDataURL("image/jpeg", options.quality || 1.0);
        });
    }
    /**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options, @see {@link toSvg}
   * @return {Promise} - A promise that is fulfilled with a PNG image blob
   * */ function toBlob1(node, options) {
        options = options || {};
        options.escapePercentSign = true;
        return draw(node, options).then(util.canvasToBlob);
    }
    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if (typeof options.imagePlaceholder === "undefined") {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }
        if (typeof options.cacheBust === "undefined") {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }
    }
    function draw(domNode1, options) {
        return toSvg(domNode1, options).then(util.makeImage)// .then(util.delay(100))
        .then(function(image) {
            var canvas = newCanvas(domNode1);
            canvas.getContext("2d").drawImage(image, 0, 0);
            return canvas;
        });
        function newCanvas(domNode) {
            var canvas = document.createElement("canvas");
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);
            if (options.bgcolor) {
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            return canvas;
        }
    }
    function cloneNode(node2, filter1, root) {
        if (!root && filter1 && !filter1(node2)) return Promise.resolve();
        return Promise.resolve(node2).then(makeNodeCopy).then(function(clone) {
            return cloneChildren(node2, clone, filter1);
        }).then(function(clone) {
            return processClone(node2, clone);
        });
        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }
        function cloneChildren(original, clone, filter2) {
            var children1 = original.childNodes;
            if (children1.length === 0) return Promise.resolve(clone);
            return cloneChildrenInOrder(clone, util.asArray(children1), filter2).then(function() {
                return clone;
            });
            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function(child) {
                    done = done.then(function() {
                        return cloneNode(child, filter);
                    }).then(function(childClone) {
                        if (childClone) parent.appendChild(childClone);
                    });
                });
                return done;
            }
        }
        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;
            return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function() {
                return clone;
            });
            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);
                function copyStyle(source1, target1) {
                    if (source1.cssText) target1.cssText = source1.cssText;
                    else copyProperties(source1, target1);
                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function(name) {
                            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
                        });
                    }
                }
            }
            function clonePseudoElements() {
                ;
                [
                    ":before",
                    ":after"
                ].forEach(function(element) {
                    clonePseudoElement(element);
                });
                function clonePseudoElement(element1) {
                    var style1 = window.getComputedStyle(original, element1);
                    var content1 = style1.getPropertyValue("content");
                    if (content1 === "" || content1 === "none") return;
                    var className1 = util.uid();
                    clone.className = clone.className + " " + className1;
                    var styleElement = document.createElement("style");
                    styleElement.appendChild(formatPseudoElementStyle(className1, element1, style1));
                    clone.appendChild(styleElement);
                    function formatPseudoElementStyle(className, element, style2) {
                        var selector = "." + className + ":" + element;
                        var cssText = style2.cssText ? formatCssText(style2) : formatCssProperties(style2);
                        return document.createTextNode(selector + "{" + cssText + "}");
                        function formatCssText(style) {
                            var content = style.getPropertyValue("content");
                            return style.cssText + " content: " + content + ";";
                        }
                        function formatCssProperties(style) {
                            return util.asArray(style).map(formatProperty).join("; ") + ";";
                            function formatProperty(name) {
                                return name + ": " + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? " !important" : "");
                            }
                        }
                    }
                }
            }
            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }
            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                if (!(clone instanceof SVGRectElement)) return;
                [
                    "width",
                    "height"
                ].forEach(function(attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;
                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }
    function embedFonts(node) {
        return fontFaces.resolveAll().then(function(cssText) {
            var styleNode = document.createElement("style");
            node.appendChild(styleNode);
            styleNode.appendChild(document.createTextNode(cssText));
            return node;
        });
    }
    function inlineImages(node) {
        return images.inlineAll(node).then(function() {
            return node;
        });
    }
    function makeSvgDataUri(node3, width, height, escapePercentSign) {
        return Promise.resolve(node3).then(function(node) {
            node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
            return new XMLSerializer().serializeToString(node);
        }).then(function(str) {
            return util.escapeXhtml(str, escapePercentSign);
        }).then(function(xhtml) {
            return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + "</foreignObject>";
        }).then(function(foreignObject) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' + foreignObject + "</svg>";
        }).then(function(svg) {
            return "data:image/svg+xml;charset=utf-8," + svg;
        });
    }
    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };
        function mimes() {
            /*
       * Only WOFF and EOT mime types for fonts are 'real'
       * see http://www.iana.org/assignments/media-types/media-types.xhtml
       */ var WOFF = "application/font-woff";
            var JPEG = "image/jpeg";
            return {
                woff: WOFF,
                woff2: WOFF,
                ttf: "application/font-truetype",
                eot: "application/vnd.ms-fontobject",
                png: "image/png",
                jpg: JPEG,
                jpeg: JPEG,
                gif: "image/gif",
                tiff: "image/tiff",
                svg: "image/svg+xml"
            };
        }
        function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];
            else return "";
        }
        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || "";
        }
        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }
        function toBlob(canvas) {
            return new Promise(function(resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(",")[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);
                for(var i = 0; i < length; i++)binaryArray[i] = binaryString.charCodeAt(i);
                resolve(new Blob([
                    binaryArray
                ], {
                    type: "image/png"
                }));
            });
        }
        function canvasToBlob(canvas) {
            if (canvas.toBlob) return new Promise(function(resolve) {
                canvas.toBlob(resolve);
            });
            return toBlob(canvas);
        }
        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement("base");
            doc.head.appendChild(base);
            var a = doc.createElement("a");
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }
        function uid() {
            var index = 0;
            return function() {
                return "u" + fourRandomChars() + index++;
                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */ return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }
        function makeImage(uri) {
            return new Promise(function(resolve, reject) {
                var image = new Image();
                image.onload = function() {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }
        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if (domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
            }
            return new Promise(function(resolve) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = "blob";
                request.timeout = TIMEOUT;
                request.open("GET", url, true);
                request.send();
                var placeholder;
                if (domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if (split && split[1]) {
                        placeholder = split[1];
                    }
                }
                function done() {
                    if (request.readyState !== 4) return;
                    if (request.status !== 200) {
                        if (placeholder) {
                            resolve(placeholder);
                        } else {
                            fail("cannot fetch resource: " + url + ", status: " + request.status);
                        }
                        return;
                    }
                    var encoder = new FileReader();
                    encoder.onloadend = function() {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }
                function timeout() {
                    if (placeholder) {
                        resolve(placeholder);
                    } else {
                        fail("timeout of " + TIMEOUT + "ms occured while fetching resource: " + url);
                    }
                }
                function fail(message) {
                    console.error(message);
                    resolve("");
                }
            });
        }
        function dataAsUrl(content, type) {
            return "data:" + type + ";base64," + content;
        }
        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
        }
        function delay(ms) {
            return function(arg) {
                return new Promise(function(resolve) {
                    setTimeout(function() {
                        resolve(arg);
                    }, ms);
                });
            };
        }
        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for(var i = 0; i < length; i++)array.push(arrayLike[i]);
            return array;
        }
        function escapeXhtml(string, escapePercentSign) {
            if (escapePercentSign) {
                string = string.replace(/%/g, "%25");
            }
            return string.replace(/#/g, "%23").replace(/\n/g, "%0A");
        }
        function width(node) {
            var leftBorder = px(node, "border-left-width");
            var rightBorder = px(node, "border-right-width");
            return node.scrollWidth + leftBorder + rightBorder;
        }
        function height(node) {
            var topBorder = px(node, "border-top-width");
            var bottomBorder = px(node, "border-bottom-width");
            return node.scrollHeight + topBorder + bottomBorder;
        }
        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace("px", ""));
        }
    }
    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };
        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }
        function readUrls(string) {
            var result = [];
            var match;
            while((match = URL_REGEX.exec(string)) !== null){
                result.push(match[1]);
            }
            return result.filter(function(url) {
                return !util.isDataUrl(url);
            });
        }
        function inline(string, url1, baseUrl, get) {
            return Promise.resolve(url1).then(function(url) {
                return baseUrl ? util.resolveUrl(url, baseUrl) : url;
            }).then(get || util.getAndEncode).then(function(data) {
                return util.dataAsUrl(data, util.mimeType(url1));
            }).then(function(dataUrl) {
                return string.replace(urlAsRegex(url1), "$1" + dataUrl + "$3");
            });
            function urlAsRegex(url) {
                return new RegExp("(url\\(['\"]?)(" + util.escape(url) + ")(['\"]?\\))", "g");
            }
        }
        function inlineAll(string1, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string1);
            return Promise.resolve(string1).then(readUrls).then(function(urls) {
                var done = Promise.resolve(string1);
                urls.forEach(function(url) {
                    done = done.then(function(string) {
                        return inline(string, url, baseUrl, get);
                    });
                });
                return done;
            });
            function nothingToInline() {
                return !shouldProcess(string1);
            }
        }
    }
    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };
        function resolveAll() {
            return readAll().then(function(webFonts) {
                return Promise.all(webFonts.map(function(webFont) {
                    return webFont.resolve();
                }));
            }).then(function(cssStrings) {
                return cssStrings.join("\n");
            });
        }
        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function(rules) {
                return rules.map(newWebFont);
            });
            function selectWebFontRules(cssRules) {
                return cssRules.filter(function(rule) {
                    return rule.type === CSSRule.FONT_FACE_RULE;
                }).filter(function(rule) {
                    return inliner.shouldProcess(rule.style.getPropertyValue("src"));
                });
            }
            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function(sheet) {
                    try {
                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                        console.log("Error while reading CSS rules from " + sheet.href, e.toString());
                    }
                });
                return cssRules;
            }
            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function() {
                        return webFontRule.style.getPropertyValue("src");
                    }
                };
            }
        }
    }
    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };
        function newImage(element) {
            return {
                inline: inline
            };
            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();
                return Promise.resolve(element.src).then(get || util.getAndEncode).then(function(data) {
                    return util.dataAsUrl(data, util.mimeType(element.src));
                }).then(function(dataUrl) {
                    return new Promise(function(resolve, reject) {
                        element.onload = resolve;
                        element.onerror = reject;
                        element.src = dataUrl;
                    });
                });
            }
        }
        function inlineAll(node4) {
            if (!(node4 instanceof Element)) return Promise.resolve(node4);
            return inlineBackground(node4).then(function() {
                if (node4 instanceof HTMLImageElement) return newImage(node4).inline();
                else return Promise.all(util.asArray(node4.childNodes).map(function(child) {
                    return inlineAll(child);
                }));
            });
            function inlineBackground(node) {
                var background = node.style.getPropertyValue("background");
                if (!background) return Promise.resolve(node);
                return inliner.inlineAll(background).then(function(inlined) {
                    node.style.setProperty("background", inlined, node.style.getPropertyPriority("background"));
                }).then(function() {
                    return node;
                });
            }
        }
    }
})(void 0);


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var eitherx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9052);
/* harmony import */ var eitherx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eitherx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_EditorContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5773);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2292);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_EditorContainer__WEBPACK_IMPORTED_MODULE_4__, _components_Page__WEBPACK_IMPORTED_MODULE_5__]);
([_components_EditorContainer__WEBPACK_IMPORTED_MODULE_4__, _components_Page__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// Theirs



// Ours



class Index extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    componentDidMount() {
        if (window.workbox && window.workbox.register) {
            window.workbox.register();
        }
    }
    componentWillUnmount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then((registration)=>{
                registration.unregister();
            });
        }
    }
    shouldComponentUpdate = ()=>false
    ;
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            enableHeroText: true,
            flex: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .MetaLinks */ .$O, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((eitherx__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_EditorContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            router: this.props.router,
                            snippet: this.props.snippet
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "An unexpected error has occurred. Please",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://github.com/carbon-app/carbon",
                                        children: "file an issue here"
                                    })
                                }),
                                "."
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(Index));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;