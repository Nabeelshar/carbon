"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 3576:
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
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3122);
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8299);





const Button = ({ id , onClick =()=>{} , background =_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.BLACK */ .DM.BLACK , color =_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.SECONDARY */ .DM.SECONDARY , textColor , hoverBackground =_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.HOVER */ .DM.HOVER , hoverColor , disabled , selected , children , border , center , large , flex =1 , padding =0 , margin =0 , title , Component ="button" , display , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, {
        id: id,
        onClick: onClick,
        disabled: disabled,
        ...props,
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "23472259c69ef05e",
                [
                    Component,
                    display || "flex",
                    flex,
                    background,
                    textColor || color,
                    border ? `inset 0px 0px 0px ${selected ? 2 : 1}px ${color}` : "initial",
                    disabled ? "not-allowed" : "pointer",
                    padding,
                    margin,
                    border ? "3px" : 0,
                    center ? "center" : "initial",
                    center ? "center" : "initial",
                    large ? "14px" : "12px",
                    Component,
                    Component,
                    hoverBackground,
                    hoverColor || color,
                    Component,
                    border ? `inset 0px 0px 0px 2px ${color}` : "initial"
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || ""),
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_3___default()), {
                /*#__PURE__*/ children: title
            }),
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "23472259c69ef05e",
                dynamic: [
                    Component,
                    display || "flex",
                    flex,
                    background,
                    textColor || color,
                    border ? `inset 0px 0px 0px ${selected ? 2 : 1}px ${color}` : "initial",
                    disabled ? "not-allowed" : "pointer",
                    padding,
                    margin,
                    border ? "3px" : 0,
                    center ? "center" : "initial",
                    center ? "center" : "initial",
                    large ? "14px" : "12px",
                    Component,
                    Component,
                    hoverBackground,
                    hoverColor || color,
                    Component,
                    border ? `inset 0px 0px 0px 2px ${color}` : "initial"
                ],
                children: `${Component}.__jsx-style-dynamic-selector{display:${display || "flex"};-webkit-box-flex:${flex};-webkit-flex:${flex};-moz-box-flex:${flex};-ms-flex:${flex};flex:${flex};background-color:${background};color:${textColor || color};-webkit-box-shadow:${border ? `inset 0px 0px 0px ${selected ? 2 : 1}px ${color}` : "initial"};-moz-box-shadow:${border ? `inset 0px 0px 0px ${selected ? 2 : 1}px ${color}` : "initial"};box-shadow:${border ? `inset 0px 0px 0px ${selected ? 2 : 1}px ${color}` : "initial"};cursor:${disabled ? "not-allowed" : "pointer"};outline:none;border:none;padding:${padding};margin:${margin};-webkit-border-radius:${border ? "3px" : 0};-moz-border-radius:${border ? "3px" : 0};border-radius:${border ? "3px" : 0};-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-pack:${center ? "center" : "initial"};-webkit-justify-content:${center ? "center" : "initial"};-moz-box-pack:${center ? "center" : "initial"};-ms-flex-pack:${center ? "center" : "initial"};justify-content:${center ? "center" : "initial"};-webkit-box-align:${center ? "center" : "initial"};-webkit-align-items:${center ? "center" : "initial"};-moz-box-align:${center ? "center" : "initial"};-ms-flex-align:${center ? "center" : "initial"};align-items:${center ? "center" : "initial"};-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;font-size:${large ? "14px" : "12px"}}${Component}.__jsx-style-dynamic-selector:hover,${Component}.__jsx-style-dynamic-selector:focus{background-color:${hoverBackground}!important;color:${hoverColor || color}}${Component}.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:${border ? `inset 0px 0px 0px 2px ${color}` : "initial"};-moz-box-shadow:${border ? `inset 0px 0px 0px 2px ${color}` : "initial"};box-shadow:${border ? `inset 0px 0px 0px 2px ${color}` : "initial"}}`
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "f": () => (/* binding */ managePopout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3388);
/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_click_outside__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WindowPointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1427);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8299);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_util__WEBPACK_IMPORTED_MODULE_6__]);
_lib_util__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const managePopout = (WrappedComponent)=>{
    class PopoutManager extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
        state = {
            isVisible: false
        };
        toggleVisibility = ()=>this.setState((0,_lib_util__WEBPACK_IMPORTED_MODULE_6__/* .toggle */ .ZN)("isVisible"))
        ;
        handleClickOutside = ()=>this.setState({
                isVisible: false
            })
        ;
        handleKeyDown = (e)=>{
            if (e.key === "Escape") {
                this.handleClickOutside();
            }
        };
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyDown);
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyDown);
        }
        render() {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
                ...this.props,
                isVisible: this.state.isVisible,
                toggleVisibility: this.toggleVisibility
            });
        }
    }
    return react_click_outside__WEBPACK_IMPORTED_MODULE_3___default()(PopoutManager);
};
class Popout extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
    static defaultProps = {
        borderColor: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.SECONDARY */ .DM.SECONDARY,
        style: {}
    };
    render() {
        const { id , children , borderColor , style , hidden , pointerLeft , pointerRight  } = this.props;
        if (hidden) {
            return null;
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: id,
            style: style,
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "7cd279c6abbcaf83",
                    [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLACK */ .DM.BLACK,
                        borderColor
                    ]
                ]
            ]) + " " + "popout",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WindowPointer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    fromLeft: pointerLeft,
                    fromRight: pointerRight,
                    color: borderColor
                }),
                children,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "7cd279c6abbcaf83",
                    dynamic: [
                        _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLACK */ .DM.BLACK,
                        borderColor
                    ],
                    children: `.popout.__jsx-style-dynamic-selector{position:absolute;background-color:${_lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.BLACK */ .DM.BLACK};border:2px solid ${borderColor};-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;margin-top:10px;font-size:12px;z-index:1}`
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WindowPointer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function WindowPointer({ fromLeft , fromRight , color ="#fff"  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "7cac043008ebd2b9",
                [
                    color,
                    fromLeft || "initial",
                    fromRight || "initial"
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "7cac043008ebd2b9",
                        [
                            color,
                            fromLeft || "initial",
                            fromRight || "initial"
                        ]
                    ]
                ]) + " " + "window-pointer"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7cac043008ebd2b9",
                dynamic: [
                    color,
                    fromLeft || "initial",
                    fromRight || "initial"
                ],
                children: `.window-pointer.__jsx-style-dynamic-selector{width:0px;height:0px;border-style:solid;border-width:0 5px 6px 5px;border-color:transparent transparent ${color} transparent;position:absolute;top:-8px;left:${fromLeft || "initial"};right:${fromRight || "initial"}}`
            })
        ]
    });
};


/***/ })

};
;