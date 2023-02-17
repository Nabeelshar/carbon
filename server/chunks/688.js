"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Billing)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8401);
/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(actionsack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3576);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(983);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2915);
/* harmony import */ var _LoginButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7751);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8299);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _LoginButton__WEBPACK_IMPORTED_MODULE_7__]);
([_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _LoginButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const X = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    children: [
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            className: "base",
            fill: "white",
            d: "M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
        }),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            className: "glyph",
            fill: _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLACK */ .DM.BLACK,
            d: "M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
        })
    ]
});
function Billing() {
    const user = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .aC)();
    const [submit, { error , loading  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(()=>true
    );
    const success = true;
    if (!user) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-78544f61ddd76cd1" + " " + "login",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-78544f61ddd76cd1",
                    /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "78544f61ddd76cd1",
                    children: ".login.jsx-78544f61ddd76cd1{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "ffb2c37bd12ebaf0",
                [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                ]
            ]
        ]) + " " + "checkout",
        children: [
            success ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "ffb2c37bd12ebaf0",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                        ]
                    ]
                ]) + " " + "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ffb2c37bd12ebaf0",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                ]
                            ]
                        ]),
                        children: "Thank you for supporting Carbon!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ffb2c37bd12ebaf0",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                ]
                            ]
                        ]) + " " + "success",
                        children: [
                            "However, Carbon Diamond is not quite ready yet.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ])
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ])
                            }),
                            "We greatly appreciate your support, and will let you know when premium features launch!"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ffb2c37bd12ebaf0",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                ]
                            ]
                        ]) + " " + "success",
                        children: [
                            "\u2014 the Carbon Team",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                role: "img",
                                "aria-label": "Black and yellow hearts",
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ]),
                                children: "\uD83D\uDC9B\uD83D\uDDA4"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "ffb2c37bd12ebaf0",
                        [
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                        ]
                    ]
                ]) + " " + "column",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ffb2c37bd12ebaf0",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                ]
                            ]
                        ]),
                        children: [
                            "Upgrade to ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ]),
                                children: "Diamond"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ])
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ]) + " " + "tag",
                                children: "($5.00 / month)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ffb2c37bd12ebaf0",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                ]
                            ]
                        ]),
                        children: "Please enter a credit or debit card:"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: submit,
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ffb2c37bd12ebaf0",
                                [
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "ffb2c37bd12ebaf0",
                                                [
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                                ]
                                            ]
                                        ])
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        placeholder: "Cardholders's name\u2026",
                                        name: "name",
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ]),
                                children: [
                                    "(By clicking subscribe, you are accepting the",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/terms",
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "ffb2c37bd12ebaf0",
                                                [
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                                ]
                                            ]
                                        ]),
                                        children: "terms and conditions"
                                    }),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ])
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                display: "inline-flex",
                                border: true,
                                large: true,
                                padding: "8px 16px",
                                margin: "8px 0 0",
                                type: "submit",
                                color: "rgba(255, 255, 255, 0.7)",
                                children: loading ? "Sending\u2026" : "Subscribe"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                role: "alert",
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "ffb2c37bd12ebaf0",
                                        [
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                        ]
                                    ]
                                ]) + " " + `error ${error ? "visible" : ""}`,
                                children: [
                                    X,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "ffb2c37bd12ebaf0",
                                                [
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                                                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                                                ]
                                            ]
                                        ]) + " " + "message",
                                        children: error
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ffb2c37bd12ebaf0",
                dynamic: [
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE,
                    _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED
                ],
                children: `.checkout.__jsx-style-dynamic-selector{position:relative;font-size:16px;font-weight:500;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:1rem 1.5rem;color:white;background-color:black}a.__jsx-style-dynamic-selector{text-decoration:underline}p.__jsx-style-dynamic-selector{margin:0 0 8px;font-size:12px;font-weight:normal}small.__jsx-style-dynamic-selector{font-size:10px}h4.__jsx-style-dynamic-selector{font-size:32px;margin:0 0 2rem}.tag.__jsx-style-dynamic-selector{display:block;font-weight:lighter;color:rgba(255,255,255,.8);font-size:16px;margin-top:.25rem}hr.__jsx-style-dynamic-selector{border:0;height:1px;margin:.5rem 0 1rem;background:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY}}fieldset.__jsx-style-dynamic-selector{width:100%;margin:0 0 2.5rem;padding:.5rem .5rem .75rem;border:1px solid ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.SECONDARY */ .DM.SECONDARY};-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}fieldset.__jsx-style-dynamic-selector input{text-align:left;font-size:16px;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE}}fieldset.__jsx-style-dynamic-selector input::placeholder{opacity:1;color:rgba(255,255,255,.7)}fieldset.__jsx-style-dynamic-selector .StripeElement{width:100%;padding:12px 16px 12px 0}form.__jsx-style-dynamic-selector:valid button{color:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE};-webkit-box-shadow:inset 0px 0px 0px 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE};-moz-box-shadow:inset 0px 0px 0px 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE};box-shadow:inset 0px 0px 0px 1px ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.BLUE */ .DM.BLUE}}.error.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:relative;top:3px;opacity:0;margin-left:1rem;font-size:12px;-webkit-transform:translateY(20px);-moz-transform:translateY(20px);-ms-transform:translateY(20px);-o-transform:translateY(20px);transform:translateY(20px);-webkit-transition-property:opacity,-webkit-transform;-moz-transition-timing-function:opacity,-moz-transform;-o-transition-timing-function:opacity,-o-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,-moz-transform;transition-property:opacity,-o-transform;transition-property:opacity,transform;-webkit-transition-duration:.35s;-moz-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);-moz-transition-timing-function:cubic-bezier(.165,.84,.44,1);-o-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}.error.visible.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none}.error.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{margin-top:-1px}.error.__jsx-style-dynamic-selector .message.__jsx-style-dynamic-selector{margin-left:8px;font-size:inherit;color:${_lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.RED */ .DM.RED}}.success.__jsx-style-dynamic-selector{font-size:16px;line-height:1.5;margin:0 0 2rem}`
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;