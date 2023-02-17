"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 8939:
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
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3016);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3576);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8757);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8299);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popout__WEBPACK_IMPORTED_MODULE_4__, _ColorPicker__WEBPACK_IMPORTED_MODULE_6__]);
([_Popout__WEBPACK_IMPORTED_MODULE_4__, _ColorPicker__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ModifierButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        flex: 0,
        padding: "0",
        /*#__PURE__*/ center: true,
        margin: "0 8px 0 0",
        style: {
            borderBottom: `1px solid ${props.selected ? "white" : "transparent"}`
        },
        onClick: props.onClick,
        color: props.color,
        children: props.children
    });
}
function reducer(state, action) {
    switch(action.type){
        case "BOLD":
            {
                return {
                    ...state,
                    bold: !state.bold
                };
            }
        case "ITALICS":
            {
                return {
                    ...state,
                    italics: !state.italics
                };
            }
        case "UNDERLINE":
            {
                return {
                    ...state,
                    underline: Number(state.underline + 1) % 3
                };
            }
        case "COLOR":
            {
                return {
                    ...state,
                    color: action.color
                };
            }
    }
    throw new Error("Invalid action");
}
function SelectionEditor({ onChange  }) {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useKeyboardListener)("Escape", ()=>setOpen(false)
    );
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_2___default().useReducer(reducer, {
        bold: null,
        italics: null,
        underline: null,
        color: null
    });
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        onChange(state);
    }, [
        onChange,
        state
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "7546b487f3e4f984",
                [
                    state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                    `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "7546b487f3e4f984",
                        [
                            state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                            `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "colorizer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "7546b487f3e4f984",
                                [
                                    state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                    `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                ]
                            ]
                        ]) + " " + "modifier",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModifierButton, {
                                selected: state.bold,
                                onClick: ()=>dispatch({
                                        type: "BOLD"
                                    })
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "7546b487f3e4f984",
                                            [
                                                state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                                `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]),
                                    children: "B"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModifierButton, {
                                selected: state.italics,
                                onClick: ()=>dispatch({
                                        type: "ITALICS"
                                    })
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "7546b487f3e4f984",
                                            [
                                                state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                                `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]),
                                    children: "I"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModifierButton, {
                                selected: state.underline,
                                onClick: ()=>dispatch({
                                        type: "UNDERLINE"
                                    })
                                ,
                                color: state.underline === 2 ? _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.RED */ .DM.RED : undefined,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "7546b487f3e4f984",
                                            [
                                                state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                                `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]),
                                    children: "U"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setOpen((o)=>!o
                                    )
                                ,
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "7546b487f3e4f984",
                                        [
                                            state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                            `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                        ]
                                    ]
                                ]) + " " + "color-square"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        hidden: !open,
                        pointerLeft: "16px",
                        style: {
                            left: 82
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "7546b487f3e4f984",
                                    [
                                        state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                        `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                                        _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                    ]
                                ]
                            ]) + " " + "color-picker-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColorPicker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                color: state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                                disableAlpha: true,
                                onChange: (d)=>dispatch({
                                        type: "COLOR",
                                        color: d.hex
                                    })
                            })
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7546b487f3e4f984",
                dynamic: [
                    state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY,
                    `inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.modifier.__jsx-style-dynamic-selector{padding:0px 8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.colorizer.__jsx-style-dynamic-selector b.__jsx-style-dynamic-selector{font-weight:bold}.colorizer.__jsx-style-dynamic-selector i.__jsx-style-dynamic-selector{font-style:italic}.colorizer.__jsx-style-dynamic-selector button{min-width:20px}.color-square.__jsx-style-dynamic-selector{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;outline:none;border:none;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;padding:12px;margin:4px 0 4px auto;background:${state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.PRIMARY */ .DM.PRIMARY};-webkit-box-shadow:${`inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`};-moz-box-shadow:${`inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`};box-shadow:${`inset 0px 0px 0px ${open ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}`}}.color-picker-container.__jsx-style-dynamic-selector{width:218px;border-top:2px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.SECONDARY */ .DM.SECONDARY}}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionEditor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;