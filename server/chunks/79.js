"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 9079:
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3576);
/* harmony import */ var _ListSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7567);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3016);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8757);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListSetting__WEBPACK_IMPORTED_MODULE_5__, _Popout__WEBPACK_IMPORTED_MODULE_6__, _ColorPicker__WEBPACK_IMPORTED_MODULE_7__, _lib_util__WEBPACK_IMPORTED_MODULE_9__]);
([_ListSetting__WEBPACK_IMPORTED_MODULE_5__, _Popout__WEBPACK_IMPORTED_MODULE_6__, _ColorPicker__WEBPACK_IMPORTED_MODULE_7__, _lib_util__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const colorPickerStyle = {
    backgroundColor: _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
    padding: 0,
    margin: "4px"
};
const colorPresets = [];
const HighlightPicker = ({ title , onChange , color  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "827cac9155147a21",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK
                ]
            ]
        ]) + " " + "color-picker-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "827cac9155147a21",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK
                        ]
                    ]
                ]) + " " + "color-picker-header",
                /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "827cac9155147a21",
                            [
                                _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK
                            ]
                        ]
                    ]) + " " + "capitalize",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColorPicker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                color: color,
                onChange: onChange,
                presets: colorPresets,
                style: colorPickerStyle
            }, title),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "827cac9155147a21",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK
                ],
                children: `.color-picker-container.__jsx-style-dynamic-selector{width:218px;border-left:2px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY};padding:2px}.color-picker-header.__jsx-style-dynamic-selector{background-color:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 0}`
            })
        ]
    })
;
const ThemeCreate = ({ theme , themes , highlights , create , updateHighlights , name: name1 , onInputChange ,  })=>{
    const [preset, updatePreset] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(theme.id);
    const [highlight, selectHighlight] = react__WEBPACK_IMPORTED_MODULE_2___default().useState();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Popout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        pointerLeft: "15px",
        style: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "61c121d0011d349c",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                        ]
                    ]
                ]) + " " + "theme-settings",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "61c121d0011d349c",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                ]
                            ]
                        ]) + " " + "field name-field",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "61c121d0011d349c",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                        ]
                                    ]
                                ]),
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                title: "name",
                                name: "name",
                                placeholder: "Custom Theme",
                                value: name1,
                                onChange: onInputChange,
                                maxLength: "32"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "61c121d0011d349c",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                ]
                            ]
                        ]) + " " + "theme-select",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListSetting__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            title: "Preset",
                            items: themes,
                            selected: preset,
                            onOpen: ()=>selectHighlight(null)
                            ,
                            onChange: (id)=>{
                                updatePreset(id);
                                updateHighlights(themes.find((t)=>t.id === id
                                ).highlights);
                            },
                            children: ({ name  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "61c121d0011d349c",
                                            [
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                            ]
                                        ]
                                    ]),
                                    children: name
                                })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "61c121d0011d349c",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                ]
                            ]
                        ]) + " " + "theme-colors capitalize",
                        children: _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .HIGHLIGHT_KEYS.map */ .B1.map((key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "61c121d0011d349c",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                        ]
                                    ]
                                ]) + " " + "field",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    padding: "4px 4px 4px 8px",
                                    onClick: ()=>selectHighlight(key)
                                    ,
                                    background: highlight === key ? _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.HOVER */ .DM.HOVER : _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "61c121d0011d349c",
                                                [
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                                ]
                                            ]
                                        ]) + " " + "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "61c121d0011d349c",
                                                        [
                                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                                        ]
                                                    ]
                                                ]) + " " + "capitalize",
                                                children: key
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    backgroundColor: highlights[key],
                                                    boxShadow: `inset 0px 0px 0px ${highlight === key ? 2 : 1}px ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY}`
                                                },
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "61c121d0011d349c",
                                                        [
                                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                                                        ]
                                                    ]
                                                ]) + " " + "color-square"
                                            })
                                        ]
                                    })
                                })
                            }, key)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        center: true,
                        disabled: !name1,
                        className: "create-button",
                        padding: "8px 0",
                        background: _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        hoverBackground: _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
                        onClick: ()=>create({
                                id: `theme:${(0,_lib_util__WEBPACK_IMPORTED_MODULE_9__/* .generateId */ .Ox)()}`,
                                name: name1,
                                highlights,
                                custom: true
                            })
                        ,
                        children: "Create +"
                    })
                ]
            }),
            highlight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlightPicker, {
                title: highlight,
                color: highlights[highlight],
                onChange: (color)=>updateHighlights({
                        [highlight]: (0,_lib_util__WEBPACK_IMPORTED_MODULE_9__/* .stringifyColor */ .iS)(color)
                    })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "61c121d0011d349c",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.field.__jsx-style-dynamic-selector{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:solid 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.field.__jsx-style-dynamic-selector:nth-last-child(-n+2){border-width:2px}.row.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.name-field.__jsx-style-dynamic-selector{padding:8px}.theme-select.__jsx-style-dynamic-selector{width:100%}.theme-settings.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:224px}.theme-colors.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;border-top:2px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.theme-colors.__jsx-style-dynamic-selector .field.__jsx-style-dynamic-selector{width:50%}.theme-colors.__jsx-style-dynamic-selector .field.__jsx-style-dynamic-selector:nth-child(odd){border-right:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY}}.color-square.__jsx-style-dynamic-selector{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;padding:12px}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;