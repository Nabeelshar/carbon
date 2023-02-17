"use strict";
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 3002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3576);



function ConfirmButton(props) {
    const [confirmed, setConfirmed] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        onClick: (e)=>{
            if (confirmed) {
                props.onClick(e);
                setConfirmed(false);
            } else {
                setConfirmed(true);
            }
        },
        onBlur: ()=>setConfirmed(false)
        ,
        children: confirmed ? "Are you sure?" : props.children
    });
};


/***/ }),

/***/ 4742:
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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3576);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(646);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(983);
/* harmony import */ var _ConfirmButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3002);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3016);
/* harmony import */ var _svg_Arrows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8482);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2915);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8299);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popout__WEBPACK_IMPORTED_MODULE_8__, _AuthContext__WEBPACK_IMPORTED_MODULE_10__]);
([_Popout__WEBPACK_IMPORTED_MODULE_8__, _AuthContext__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const popoutStyle = {
    width: "120px",
    right: -8,
    top: 40
};
function DeleteButton(props) {
    const [onClick, { loading  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(props.onClick);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConfirmButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: "block",
        padding: "8px",
        flex: "unset",
        /*#__PURE__*/ center: true,
        large: true,
        color: "#fff",
        onClick: onClick,
        style: {
            color: _lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.RED */ .DM.RED
        },
        children: loading ? "Deleting\u2026" : "Delete"
    });
}
function DuplicateButton(props) {
    const [onClick, { loading  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(props.onClick);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        border: true,
        large: true,
        center: true,
        color: _lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.GREEN */ .DM.GREEN,
        onClick: onClick,
        "data-cy": "duplicate-button",
        style: {
            minWidth: 92
        },
        title: "Duplicate",
        disabled: loading,
        children: loading ? "Duplicating\u2026" : "Duplicate"
    });
}
function SaveButton({ loading , onClick , sameUser  }) {
    (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useKeyboardListener)("\u2325-s", (e)=>{
        if (loading) {
            return;
        }
        e.preventDefault();
        onClick();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        border: true,
        large: true,
        center: true,
        color: _lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.GREEN */ .DM.GREEN,
        onClick: onClick,
        "data-cy": "save-button",
        style: {
            minWidth: 84,
            borderBottomRightRadius: sameUser ? 0 : undefined,
            borderTopRightRadius: sameUser ? 0 : undefined
        },
        title: "Save",
        disabled: loading,
        children: loading ? "Saving\u2026" : "Save"
    });
}
function SnippetToolbar({ toggleVisibility , isVisible , snippet , ...props }) {
    const user = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_10__/* .useAuth */ .aC)();
    const online = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useOnline)();
    const [save, { loading  }] = (0,actionsack__WEBPACK_IMPORTED_MODULE_3__.useAsyncCallback)(()=>{
        if (snippet) {
            return props.onUpdate();
        } else {
            return props.onCreate();
        }
    });
    if (!online) return null;
    if (!user) return null;
    const sameUser = snippet && user.uid === snippet.userId;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Toolbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        style: {
            position: "relative",
            zIndex: 1,
            marginTop: 16,
            marginBottom: 0,
            flexDirection: "row",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                hidden: !isVisible,
                borderColor: _lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.GREEN */ .DM.GREEN,
                pointerRight: "6px",
                style: popoutStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-20c07e28ce53cb4" + " " + "menu flex",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeleteButton, {
                        onClick: props.onDelete
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginRight: "auto"
                },
                className: "jsx-20c07e28ce53cb4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    align: "left",
                    placeholder: "Add a name\u2026",
                    fontSize: "14px",
                    value: props.name,
                    onChange: (e)=>props.onChange("name", e.target.value)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-20c07e28ce53cb4" + " " + "flex",
                children: [
                    snippet && !sameUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DuplicateButton, {
                        onClick: props.onCreate
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SaveButton, {
                        loading: loading,
                        onClick: save,
                        sameUser: sameUser
                    }),
                    sameUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: "Save menu dropdown",
                        border: true,
                        large: true,
                        center: true,
                        color: _lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.GREEN */ .DM.GREEN,
                        padding: "0 8px",
                        margin: "0 0 0 -1px",
                        onClick: toggleVisibility,
                        "data-cy": "save-button",
                        style: {
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            maxWidth: "26px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Arrows__WEBPACK_IMPORTED_MODULE_9__/* .Down */ .R, {
                            color: _lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.GREEN */ .DM.GREEN
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "20c07e28ce53cb4",
                children: ".menu.jsx-20c07e28ce53cb4{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_8__/* .managePopout */ .f)(SnippetToolbar));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;