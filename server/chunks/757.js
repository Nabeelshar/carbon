"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 8757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_color_lib_Sketch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6208);
/* harmony import */ var react_color_lib_Sketch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_color_lib_Sketch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_util__WEBPACK_IMPORTED_MODULE_5__]);
_lib_util__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const pickerStyle = {
    backgroundColor: _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK,
    padding: "8px 8px 0",
    margin: "0 auto 1px"
};
function ColorPicker(props) {
    const [color, setColor] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(props.color);
    const { onChange =()=>{} , presets , style , disableAlpha  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_color_lib_Sketch__WEBPACK_IMPORTED_MODULE_3___default()), {
                styles: {
                    picker: style || pickerStyle
                },
                onChange: setColor,
                color: typeof color === "string" ? color : (0,_lib_util__WEBPACK_IMPORTED_MODULE_5__/* .stringifyColor */ .iS)(color),
                onChangeComplete: onChange,
                presetColors: presets,
                disableAlpha: disableAlpha
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "da490bb0364e273",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY
                ],
                children: `.sketch-picker>div:nth-child(3)>div>div>input{width:100%!important;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;outline:none;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.DARK_GRAY */ .DM.DARK_GRAY};color:#fff!important}.sketch-picker>div:nth-child(2)>div:nth-child(1)>div:nth-child(2){background:#fff}.sketch-picker label{color:${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY}!important}`
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;