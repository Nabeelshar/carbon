exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 3612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apache": 8745,
	"./apache.js": 8745,
	"./elixir": 2561,
	"./elixir.js": 2561,
	"./graphql": 7852,
	"./graphql.js": 7852,
	"./nim": 3003,
	"./nim.js": 3003,
	"./riscv": 7402,
	"./riscv.js": 7402,
	"./solidity": 4017,
	"./solidity.js": 4017
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3612;

/***/ }),

/***/ 1825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apl/apl": 9483,
	"./apl/apl.js": 9483,
	"./asciiarmor/asciiarmor": 5637,
	"./asciiarmor/asciiarmor.js": 5637,
	"./asn.1/asn.1": 7922,
	"./asn.1/asn.1.js": 7922,
	"./asterisk/asterisk": 1881,
	"./asterisk/asterisk.js": 1881,
	"./brainfuck/brainfuck": 9460,
	"./brainfuck/brainfuck.js": 9460,
	"./clike/clike": 9762,
	"./clike/clike.js": 9762,
	"./clojure/clojure": 3693,
	"./clojure/clojure.js": 3693,
	"./cmake/cmake": 3160,
	"./cmake/cmake.js": 3160,
	"./cobol/cobol": 5542,
	"./cobol/cobol.js": 5542,
	"./coffeescript/coffeescript": 44,
	"./coffeescript/coffeescript.js": 44,
	"./commonlisp/commonlisp": 9073,
	"./commonlisp/commonlisp.js": 9073,
	"./crystal/crystal": 6149,
	"./crystal/crystal.js": 6149,
	"./css/css": 6629,
	"./css/css.js": 6629,
	"./cypher/cypher": 8441,
	"./cypher/cypher.js": 8441,
	"./d/d": 9570,
	"./d/d.js": 9570,
	"./dart/dart": 842,
	"./dart/dart.js": 842,
	"./diff/diff": 1715,
	"./diff/diff.js": 1715,
	"./django/django": 5288,
	"./django/django.js": 5288,
	"./dockerfile/dockerfile": 5258,
	"./dockerfile/dockerfile.js": 5258,
	"./dtd/dtd": 655,
	"./dtd/dtd.js": 655,
	"./dylan/dylan": 5184,
	"./dylan/dylan.js": 5184,
	"./ebnf/ebnf": 4134,
	"./ebnf/ebnf.js": 4134,
	"./ecl/ecl": 427,
	"./ecl/ecl.js": 427,
	"./eiffel/eiffel": 4717,
	"./eiffel/eiffel.js": 4717,
	"./elm/elm": 8919,
	"./elm/elm.js": 8919,
	"./erlang/erlang": 6392,
	"./erlang/erlang.js": 6392,
	"./factor/factor": 7566,
	"./factor/factor.js": 7566,
	"./fcl/fcl": 5300,
	"./fcl/fcl.js": 5300,
	"./forth/forth": 8859,
	"./forth/forth.js": 8859,
	"./fortran/fortran": 4874,
	"./fortran/fortran.js": 4874,
	"./gas/gas": 8902,
	"./gas/gas.js": 8902,
	"./gfm/gfm": 2425,
	"./gfm/gfm.js": 2425,
	"./gherkin/gherkin": 5546,
	"./gherkin/gherkin.js": 5546,
	"./go/go": 4750,
	"./go/go.js": 4750,
	"./groovy/groovy": 3123,
	"./groovy/groovy.js": 3123,
	"./haml/haml": 147,
	"./haml/haml.js": 147,
	"./handlebars/handlebars": 2101,
	"./handlebars/handlebars.js": 2101,
	"./haskell-literate/haskell-literate": 8510,
	"./haskell-literate/haskell-literate.js": 8510,
	"./haskell/haskell": 8176,
	"./haskell/haskell.js": 8176,
	"./haxe/haxe": 9889,
	"./haxe/haxe.js": 9889,
	"./htmlembedded/htmlembedded": 9820,
	"./htmlembedded/htmlembedded.js": 9820,
	"./htmlmixed/htmlmixed": 6531,
	"./htmlmixed/htmlmixed.js": 6531,
	"./http/http": 8411,
	"./http/http.js": 8411,
	"./idl/idl": 1797,
	"./idl/idl.js": 1797,
	"./javascript/javascript": 6876,
	"./javascript/javascript.js": 6876,
	"./jinja2/jinja2": 4670,
	"./jinja2/jinja2.js": 4670,
	"./jsx/jsx": 1548,
	"./jsx/jsx.js": 1548,
	"./julia/julia": 8059,
	"./julia/julia.js": 8059,
	"./livescript/livescript": 4373,
	"./livescript/livescript.js": 4373,
	"./lua/lua": 7745,
	"./lua/lua.js": 7745,
	"./markdown/markdown": 9047,
	"./markdown/markdown.js": 9047,
	"./mathematica/mathematica": 3672,
	"./mathematica/mathematica.js": 3672,
	"./mbox/mbox": 4377,
	"./mbox/mbox.js": 4377,
	"./mirc/mirc": 4268,
	"./mirc/mirc.js": 4268,
	"./mllike/mllike": 2587,
	"./mllike/mllike.js": 2587,
	"./modelica/modelica": 4333,
	"./modelica/modelica.js": 4333,
	"./mscgen/mscgen": 8810,
	"./mscgen/mscgen.js": 8810,
	"./mumps/mumps": 2875,
	"./mumps/mumps.js": 2875,
	"./nginx/nginx": 131,
	"./nginx/nginx.js": 131,
	"./nsis/nsis": 2313,
	"./nsis/nsis.js": 2313,
	"./ntriples/ntriples": 2954,
	"./ntriples/ntriples.js": 2954,
	"./octave/octave": 5734,
	"./octave/octave.js": 5734,
	"./oz/oz": 4323,
	"./oz/oz.js": 4323,
	"./pascal/pascal": 3057,
	"./pascal/pascal.js": 3057,
	"./pegjs/pegjs": 1472,
	"./pegjs/pegjs.js": 1472,
	"./perl/perl": 24,
	"./perl/perl.js": 24,
	"./php/php": 6702,
	"./php/php.js": 6702,
	"./pig/pig": 4763,
	"./pig/pig.js": 4763,
	"./powershell/powershell": 7196,
	"./powershell/powershell.js": 7196,
	"./properties/properties": 7999,
	"./properties/properties.js": 7999,
	"./protobuf/protobuf": 2360,
	"./protobuf/protobuf.js": 2360,
	"./pug/pug": 5354,
	"./pug/pug.js": 5354,
	"./puppet/puppet": 673,
	"./puppet/puppet.js": 673,
	"./python/python": 5321,
	"./python/python.js": 5321,
	"./q/q": 7713,
	"./q/q.js": 7713,
	"./r/r": 5420,
	"./r/r.js": 5420,
	"./rpm/rpm": 4344,
	"./rpm/rpm.js": 4344,
	"./rst/rst": 2968,
	"./rst/rst.js": 2968,
	"./ruby/ruby": 853,
	"./ruby/ruby.js": 853,
	"./rust/rust": 911,
	"./rust/rust.js": 911,
	"./sas/sas": 6229,
	"./sas/sas.js": 6229,
	"./sass/sass": 1201,
	"./sass/sass.js": 1201,
	"./scheme/scheme": 2372,
	"./scheme/scheme.js": 2372,
	"./shell/shell": 1149,
	"./shell/shell.js": 1149,
	"./sieve/sieve": 9311,
	"./sieve/sieve.js": 9311,
	"./slim/slim": 2486,
	"./slim/slim.js": 2486,
	"./smalltalk/smalltalk": 6690,
	"./smalltalk/smalltalk.js": 6690,
	"./smarty/smarty": 2889,
	"./smarty/smarty.js": 2889,
	"./solr/solr": 8715,
	"./solr/solr.js": 8715,
	"./soy/soy": 1527,
	"./soy/soy.js": 1527,
	"./sparql/sparql": 3982,
	"./sparql/sparql.js": 3982,
	"./spreadsheet/spreadsheet": 3138,
	"./spreadsheet/spreadsheet.js": 3138,
	"./sql/sql": 4086,
	"./sql/sql.js": 4086,
	"./stex/stex": 785,
	"./stex/stex.js": 785,
	"./stylus/stylus": 742,
	"./stylus/stylus.js": 742,
	"./swift/swift": 7355,
	"./swift/swift.js": 7355,
	"./tcl/tcl": 5664,
	"./tcl/tcl.js": 5664,
	"./textile/textile": 3897,
	"./textile/textile.js": 3897,
	"./tiddlywiki/tiddlywiki": 1046,
	"./tiddlywiki/tiddlywiki.js": 1046,
	"./tiki/tiki": 7988,
	"./tiki/tiki.js": 7988,
	"./toml/toml": 7617,
	"./toml/toml.js": 7617,
	"./tornado/tornado": 6043,
	"./tornado/tornado.js": 6043,
	"./troff/troff": 800,
	"./troff/troff.js": 800,
	"./ttcn-cfg/ttcn-cfg": 8923,
	"./ttcn-cfg/ttcn-cfg.js": 8923,
	"./ttcn/ttcn": 1105,
	"./ttcn/ttcn.js": 1105,
	"./turtle/turtle": 3556,
	"./turtle/turtle.js": 3556,
	"./twig/twig": 4702,
	"./twig/twig.js": 4702,
	"./vb/vb": 2660,
	"./vb/vb.js": 2660,
	"./vbscript/vbscript": 8073,
	"./vbscript/vbscript.js": 8073,
	"./velocity/velocity": 5912,
	"./velocity/velocity.js": 5912,
	"./verilog/verilog": 3249,
	"./verilog/verilog.js": 3249,
	"./vhdl/vhdl": 3140,
	"./vhdl/vhdl.js": 3140,
	"./vue/vue": 2426,
	"./vue/vue.js": 2426,
	"./wast/wast": 8632,
	"./wast/wast.js": 8632,
	"./webidl/webidl": 1015,
	"./webidl/webidl.js": 1015,
	"./xml/xml": 9589,
	"./xml/xml.js": 9589,
	"./xquery/xquery": 1484,
	"./xquery/xquery.js": 1484,
	"./yacas/yacas": 5278,
	"./yacas/yacas.js": 5278,
	"./yaml-frontmatter/yaml-frontmatter": 8554,
	"./yaml-frontmatter/yaml-frontmatter.js": 8554,
	"./yaml/yaml": 3631,
	"./yaml/yaml.js": 3631,
	"./z80/z80": 2245,
	"./z80/z80.js": 2245
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1825;

/***/ }),

/***/ 7896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useAPI),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_1__]);
_lib_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext(_lib_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
function useAPI() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(Context);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Carbon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "highlight.js/lib/core"
var core_ = __webpack_require__(2145);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);
// EXTERNAL MODULE: external "highlight.js/lib/languages/javascript"
var javascript_ = __webpack_require__(7985);
var javascript_default = /*#__PURE__*/__webpack_require__.n(javascript_);
// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(4305);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);
// EXTERNAL MODULE: external "ms"
var external_ms_ = __webpack_require__(3231);
var external_ms_default = /*#__PURE__*/__webpack_require__.n(external_ms_);
// EXTERNAL MODULE: external "react-codemirror2"
var external_react_codemirror2_ = __webpack_require__(7051);
// EXTERNAL MODULE: ./components/Spinner.js
var Spinner = __webpack_require__(468);
// EXTERNAL MODULE: external "actionsack"
var external_actionsack_ = __webpack_require__(8401);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
;// CONCATENATED MODULE: ./components/svg/Controls.js


const Controls = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "54",
        height: "14",
        viewBox: "0 0 54 14",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            transform: "translate(1 1)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "6",
                    cy: "6",
                    r: "6",
                    fill: "#FF5F56",
                    stroke: "#E0443E",
                    strokeWidth: ".5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "26",
                    cy: "6",
                    r: "6",
                    fill: "#FFBD2E",
                    stroke: "#DEA123",
                    strokeWidth: ".5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "46",
                    cy: "6",
                    r: "6",
                    fill: "#27C93F",
                    stroke: "#1AAB29",
                    strokeWidth: ".5"
                })
            ]
        })
    })
;
const ControlsBW = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "54",
        height: "14",
        viewBox: "0 0 54 14",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "#878787",
            transform: "translate(1 1)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "6",
                    cy: "6",
                    r: "6"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "26",
                    cy: "6",
                    r: "6"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "46",
                    cy: "6",
                    r: "6"
                })
            ]
        })
    })
;
const ControlsBoxy = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "58",
        height: "14",
        viewBox: "0 0 58 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1 7H11",
                stroke: "#878787",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M35 1H25C24.4477 1 24 1.44772 24 2V12C24 12.5523 24.4477 13 25 13H35C35.5523 13 36 12.5523 36 12V2C36 1.44772 35.5523 1 35 1Z",
                stroke: "#878787"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M47 2L57 12",
                stroke: "#878787",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M47 12L57 2",
                stroke: "#878787",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    })
;

// EXTERNAL MODULE: ./components/svg/Copy.js
var Copy = __webpack_require__(1165);
// EXTERNAL MODULE: ./components/svg/Checkmark.js
var Checkmark = __webpack_require__(5331);
;// CONCATENATED MODULE: ./components/WindowControls.js








const size = 24;
const CopyButton = /*#__PURE__*/ external_react_default().memo(function CopyButton({ text  }) {
    const { onClick , copied  } = (0,external_actionsack_.useCopyTextHandler)(text);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        "aria-label": "Copy Button",
        className: styled_jsx_default().dynamic([
            [
                "5e70016f67421b2b",
                [
                    constants/* COLORS.SECONDARY */.DM.SECONDARY
                ]
            ]
        ]),
        children: [
            copied ? /*#__PURE__*/ jsx_runtime_.jsx(Checkmark/* default */.Z, {
                color: constants/* COLORS.GRAY */.DM.GRAY,
                width: size,
                height: size
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Copy/* default */.Z, {
                size: size,
                color: constants/* COLORS.GRAY */.DM.GRAY
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "5e70016f67421b2b",
                dynamic: [
                    constants/* COLORS.SECONDARY */.DM.SECONDARY
                ],
                children: `button.__jsx-style-dynamic-selector{border:none;cursor:pointer;color:${constants/* COLORS.SECONDARY */.DM.SECONDARY};background:transparent}&.__jsx-style-dynamic-selector:active{outline:none}`
            })
        ]
    });
});
const WINDOW_THEMES_MAP = {
    bw: /*#__PURE__*/ jsx_runtime_.jsx(ControlsBW, {}),
    boxy: /*#__PURE__*/ jsx_runtime_.jsx(ControlsBoxy, {})
};
function WindowControls({ theme , copyable , code , light , titleBar , onTitleBarChange ,  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styled_jsx_default().dynamic([
            [
                "95d823df1d08e317",
                [
                    theme === "bw" ? 36 : 34,
                    theme === "bw" ? 16 : 14,
                    theme === "boxy" ? 16 : 0,
                    theme === "boxy" ? "right" : "initial",
                    light ? constants/* COLORS.BLACK */.DM.BLACK : constants/* COLORS.SECONDARY */.DM.SECONDARY
                ]
            ]
        ]) + " " + "window-controls",
        children: [
            WINDOW_THEMES_MAP[theme] || /*#__PURE__*/ jsx_runtime_.jsx(Controls, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "95d823df1d08e317",
                        [
                            theme === "bw" ? 36 : 34,
                            theme === "bw" ? 16 : 14,
                            theme === "boxy" ? 16 : 0,
                            theme === "boxy" ? "right" : "initial",
                            light ? constants/* COLORS.BLACK */.DM.BLACK : constants/* COLORS.SECONDARY */.DM.SECONDARY
                        ]
                    ]
                ]) + " " + "window-title-container",
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    "aria-label": "Image title",
                    type: "text",
                    spellCheck: "false",
                    value: titleBar || "",
                    onChange: (e)=>onTitleBarChange(e.target.value)
                    ,
                    className: styled_jsx_default().dynamic([
                        [
                            "95d823df1d08e317",
                            [
                                theme === "bw" ? 36 : 34,
                                theme === "bw" ? 16 : 14,
                                theme === "boxy" ? 16 : 0,
                                theme === "boxy" ? "right" : "initial",
                                light ? constants/* COLORS.BLACK */.DM.BLACK : constants/* COLORS.SECONDARY */.DM.SECONDARY
                            ]
                        ]
                    ])
                })
            }),
            copyable && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "95d823df1d08e317",
                        [
                            theme === "bw" ? 36 : 34,
                            theme === "bw" ? 16 : 14,
                            theme === "boxy" ? 16 : 0,
                            theme === "boxy" ? "right" : "initial",
                            light ? constants/* COLORS.BLACK */.DM.BLACK : constants/* COLORS.SECONDARY */.DM.SECONDARY
                        ]
                    ]
                ]) + " " + "copy-button",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CopyButton, {
                    text: code
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "95d823df1d08e317",
                dynamic: [
                    theme === "bw" ? 36 : 34,
                    theme === "bw" ? 16 : 14,
                    theme === "boxy" ? 16 : 0,
                    theme === "boxy" ? "right" : "initial",
                    light ? constants/* COLORS.BLACK */.DM.BLACK : constants/* COLORS.SECONDARY */.DM.SECONDARY
                ],
                children: `.window-controls.__jsx-style-dynamic-selector{margin-top:-24px;position:relative;top:${theme === "bw" ? 36 : 34}px;margin-left:${theme === "bw" ? 16 : 14}px;margin-right:${theme === "boxy" ? 16 : 0}px;z-index:2;text-align:${theme === "boxy" ? "right" : "initial"}}.window-title-container.__jsx-style-dynamic-selector{position:absolute;margin:0px;top:-3px;left:-9px;width:100%;text-align:center}input.__jsx-style-dynamic-selector{width:250px;background:none;outline:none;border:none;text-align:center;max-width:-webkit-calc(100% - 140px);max-width:-moz-calc(100% - 140px);max-width:calc(100% - 140px);font-size:14px;color:${light ? constants/* COLORS.BLACK */.DM.BLACK : constants/* COLORS.SECONDARY */.DM.SECONDARY}}.copy-button.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:0px;right:16px}`
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/WidthHandler.js




const { minWidth , maxWidth  } = constants/* DEFAULT_WIDTHS */.H8;
function clamp(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function WidthHandler(props) {
    const { onChange , innerRef , paddingHorizontal  } = props;
    const startX = external_react_default().useRef(null);
    const startWidth = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        function handleMouseMove(e) {
            if (!startX.current) return;
            const delta = e.pageX - startX.current // leftOrRight === 'left' ? startX - e.pageX : (startX - e.pageX) * -1
            ;
            const calculated = startWidth.current + delta * window.devicePixelRatio;
            const newWidth = clamp(calculated, minWidth, maxWidth);
            onChange(newWidth);
        }
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove)
        ;
    }, [
        innerRef,
        onChange
    ]);
    external_react_default().useEffect(()=>{
        function handleMouseUp() {
            startX.current = null;
        }
        window.addEventListener("mouseup", handleMouseUp);
        return ()=>window.removeEventListener("mouseup", handleMouseUp)
        ;
    }, []);
    return(// eslint-disable-next-line
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onMouseDown: (e)=>{
            startX.current = e.pageX;
            startWidth.current = innerRef.current.clientWidth;
        },
        role: "separator",
        "aria-orientation": "vertical",
        "aria-valuemin": minWidth,
        "aria-valuemax": maxWidth,
        className: styled_jsx_default().dynamic([
            [
                "56f8a736e1055231",
                [
                    constants/* COLORS.BLUE */.DM.BLUE,
                    paddingHorizontal,
                    paddingHorizontal,
                    paddingHorizontal
                ]
            ]
        ]) + " " + "handler",
        children: jsx_runtime_.jsx((styled_jsx_default()), {
            id: "56f8a736e1055231",
            dynamic: [
                constants/* COLORS.BLUE */.DM.BLUE,
                paddingHorizontal,
                paddingHorizontal,
                paddingHorizontal
            ],
            children: `.handler.__jsx-style-dynamic-selector{z-index:2;position:absolute;background-color:${constants/* COLORS.BLUE */.DM.BLUE};top:${paddingHorizontal};bottom:${paddingHorizontal};right:${paddingHorizontal};width:8px;cursor:ew-resize;opacity:0}.handler.__jsx-style-dynamic-selector:hover{opacity:.4}`
        })
    }));
};

;// CONCATENATED MODULE: ./components/Carbon.js










core_default().registerLanguage("javascript", (javascript_default()));




const SelectionEditor = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(912), __webpack_require__.e(757), __webpack_require__.e(939)]).then(__webpack_require__.bind(__webpack_require__, 8939))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\Carbon.js -> " + "./SelectionEditor"
        ]
    },
    loading: ()=>null
});
const Watermark = dynamic_default()(()=>__webpack_require__.e(/* import() */ 376).then(__webpack_require__.bind(__webpack_require__, 6376))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\Carbon.js -> " + "./svg/Watermark"
        ]
    },
    loading: ()=>null
});
function searchLanguage(l) {
    return constants/* LANGUAGE_NAME_HASH */.aP[l] || constants/* LANGUAGE_MODE_HASH */.mF[l] || constants/* LANGUAGE_MIME_HASH */.Dl[l];
}
function noop() {}
function getUnderline(underline) {
    switch(underline){
        case 1:
            return "underline";
        case 2:
            /**
       * Chrome will only round to the nearest wave, causing visual inconsistencies
       * https://stackoverflow.com/questions/57559588/how-to-make-the-wavy-underline-extend-cover-all-the-characters-in-chrome
       */ return `${constants/* COLORS.RED */.DM.RED} wavy underline; text-decoration-skip-ink: none`;
    }
    return "initial";
}
class Carbon extends (external_react_default()).PureComponent {
    static defaultProps = {
        onChange: noop,
        onGutterClick: noop
    };
    state = {};
    handleLanguageChange = external_lodash_debounce_default()((newCode, language)=>{
        if (language === "auto") {
            // try to set the language
            const detectedLanguage = core_default().highlightAuto(newCode).language;
            const languageMode = searchLanguage(detectedLanguage);
            if (languageMode) {
                return languageMode.mime || languageMode.mode;
            }
        }
        const languageMode = searchLanguage(language);
        if (languageMode) {
            return languageMode.mime || languageMode.mode;
        }
        return language;
    }, external_ms_default()("300ms"), {
        leading: true,
        trailing: true
    });
    onBeforeChange = (editor, meta, code)=>{
        if (!this.props.readOnly) {
            this.props.onChange(code);
        }
    };
    onSelection = (ed, data)=>{
        if (this.props.readOnly) {
            return;
        }
        const selection = data.ranges[0];
        if (selection.head.line === selection.anchor.line && selection.head.ch === selection.anchor.ch) {
            return this.currentSelection = null;
        }
        if (selection.head.line + selection.head.ch > selection.anchor.line + selection.anchor.ch) {
            this.currentSelection = {
                from: selection.anchor,
                to: selection.head
            };
        } else {
            this.currentSelection = {
                from: selection.head,
                to: selection.anchor
            };
        }
    };
    onMouseUp = ()=>{
        if (this.currentSelection) {
            this.setState({
                selectionAt: this.currentSelection
            }, ()=>{
                this.currentSelection = null;
            });
        } else {
            this.setState({
                selectionAt: null
            });
        }
    };
    onSelectionChange = (changes)=>{
        if (this.state.selectionAt) {
            const css = [
                changes.bold != null && `font-weight: ${changes.bold ? "bold" : "initial"}`,
                changes.italics != null && `font-style: ${changes.italics ? "italic" : "initial"}`,
                changes.underline != null && `text-decoration: ${getUnderline(changes.underline)}`,
                changes.color != null && `color: ${changes.color} !important`, 
            ].filter(Boolean).join("; ");
            if (css) {
                this.props.editorRef.current.editor.doc.markText(this.state.selectionAt.from, this.state.selectionAt.to, {
                    css
                });
            }
        }
    };
    render() {
        const config = {
            ...constants/* DEFAULT_SETTINGS */.Z,
            ...this.props.config
        };
        const languageMode = this.handleLanguageChange(this.props.children, config.language && config.language.toLowerCase());
        const options = {
            screenReaderLabel: "Code editor",
            lineNumbers: config.lineNumbers,
            firstLineNumber: config.firstLineNumber,
            mode: languageMode || "plaintext",
            theme: config.theme,
            scrollbarStyle: null,
            viewportMargin: Infinity,
            lineWrapping: true,
            smartIndent: true,
            extraKeys: {
                "Shift-Tab": "indentLess"
            },
            readOnly: this.props.readOnly,
            showInvisibles: config.hiddenCharacters,
            autoCloseBrackets: true
        };
        const backgroundImage = this.props.config.backgroundImage && this.props.config.backgroundImageSelection || this.props.config.backgroundImage;
        const themeConfig = this.props.theme || constants/* THEMES_HASH */.a5[config.theme];
        const light = themeConfig && themeConfig.light;
        /* eslint-disable jsx-a11y/no-static-element-interactions */ const selectionNode = !this.props.readOnly && !!this.state.selectionAt && document.getElementById("style-editor-button");
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: styled_jsx_default().dynamic([
                [
                    "e38644535ae2b763",
                    [
                        config.widthAdjustment ? "90px" : "auto",
                        config.widthAdjustment ? "1024px" : "none",
                        config.widthAdjustment ? "" : `width: ${config.width}px;`,
                        config.paddingVertical,
                        config.paddingHorizontal,
                        config.paddingVertical,
                        config.paddingHorizontal,
                        this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                        config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                        config.lineNumbers ? "padding-left: 12px;" : "",
                        config.fontFamily,
                        config.fontSize,
                        config.lineHeight,
                        constants/* COLORS.SECONDARY */.DM.SECONDARY,
                        this.props.readOnly ? "hidden" : ""
                    ]
                ]
            ]) + " " + "section",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: this.props.innerRef,
                    id: "export-container",
                    onMouseUp: this.onMouseUp,
                    className: styled_jsx_default().dynamic([
                        [
                            "e38644535ae2b763",
                            [
                                config.widthAdjustment ? "90px" : "auto",
                                config.widthAdjustment ? "1024px" : "none",
                                config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                config.paddingVertical,
                                config.paddingHorizontal,
                                config.paddingVertical,
                                config.paddingHorizontal,
                                this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                config.lineNumbers ? "padding-left: 12px;" : "",
                                config.fontFamily,
                                config.fontSize,
                                config.lineHeight,
                                constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                this.props.readOnly ? "hidden" : ""
                            ]
                        ]
                    ]) + " " + "export-container",
                    /*#__PURE__*/ children: this.props.loading ? // TODO investigate removing these hard-coded values
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            width: 876,
                            height: 240
                        },
                        className: styled_jsx_default().dynamic([
                            [
                                "e38644535ae2b763",
                                [
                                    config.widthAdjustment ? "90px" : "auto",
                                    config.widthAdjustment ? "1024px" : "none",
                                    config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                    config.paddingVertical,
                                    config.paddingHorizontal,
                                    config.paddingVertical,
                                    config.paddingHorizontal,
                                    this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                    config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                    config.lineNumbers ? "padding-left: 12px;" : "",
                                    config.fontFamily,
                                    config.fontSize,
                                    config.lineHeight,
                                    constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                    this.props.readOnly ? "hidden" : ""
                                ]
                            ]
                        ]),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Spinner/* Spinner */.$, {})
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "e38644535ae2b763",
                                [
                                    config.widthAdjustment ? "90px" : "auto",
                                    config.widthAdjustment ? "1024px" : "none",
                                    config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                    config.paddingVertical,
                                    config.paddingHorizontal,
                                    config.paddingVertical,
                                    config.paddingHorizontal,
                                    this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                    config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                    config.lineNumbers ? "padding-left: 12px;" : "",
                                    config.fontFamily,
                                    config.fontSize,
                                    config.lineHeight,
                                    constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                    this.props.readOnly ? "hidden" : ""
                                ]
                            ]
                        ]) + " " + "container",
                        children: [
                            config.windowControls ? /*#__PURE__*/ jsx_runtime_.jsx(WindowControls, {
                                titleBar: this.props.titleBar,
                                onTitleBarChange: this.props.onTitleBarChange,
                                theme: config.windowTheme,
                                code: this.props.children,
                                copyable: this.props.copyable,
                                light: light
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_codemirror2_.Controlled, {
                                ref: this.props.editorRef,
                                className: `CodeMirror__container window-theme__${config.windowTheme}`,
                                value: this.props.children,
                                options: options,
                                onBeforeChange: this.onBeforeChange,
                                onGutterClick: this.props.onGutterClick,
                                onSelection: this.onSelection
                            }),
                            config.watermark && /*#__PURE__*/ jsx_runtime_.jsx(Watermark, {
                                light: light
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "e38644535ae2b763",
                                        [
                                            config.widthAdjustment ? "90px" : "auto",
                                            config.widthAdjustment ? "1024px" : "none",
                                            config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                            config.paddingVertical,
                                            config.paddingHorizontal,
                                            config.paddingVertical,
                                            config.paddingHorizontal,
                                            this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                            config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                            config.lineNumbers ? "padding-left: 12px;" : "",
                                            config.fontFamily,
                                            config.fontSize,
                                            config.lineHeight,
                                            constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                            this.props.readOnly ? "hidden" : ""
                                        ]
                                    ]
                                ]) + " " + "container-bg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "e38644535ae2b763",
                                                [
                                                    config.widthAdjustment ? "90px" : "auto",
                                                    config.widthAdjustment ? "1024px" : "none",
                                                    config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                                    config.paddingVertical,
                                                    config.paddingHorizontal,
                                                    config.paddingVertical,
                                                    config.paddingHorizontal,
                                                    this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                                    config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                                    config.lineNumbers ? "padding-left: 12px;" : "",
                                                    config.fontFamily,
                                                    config.fontSize,
                                                    config.lineHeight,
                                                    constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                                    this.props.readOnly ? "hidden" : ""
                                                ]
                                            ]
                                        ]) + " " + "white eliminateOnRender"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "e38644535ae2b763",
                                                [
                                                    config.widthAdjustment ? "90px" : "auto",
                                                    config.widthAdjustment ? "1024px" : "none",
                                                    config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                                    config.paddingVertical,
                                                    config.paddingHorizontal,
                                                    config.paddingVertical,
                                                    config.paddingHorizontal,
                                                    this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                                    config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                                    config.lineNumbers ? "padding-left: 12px;" : "",
                                                    config.fontFamily,
                                                    config.fontSize,
                                                    config.lineHeight,
                                                    constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                                    this.props.readOnly ? "hidden" : ""
                                                ]
                                            ]
                                        ]) + " " + "alpha eliminateOnRender"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "e38644535ae2b763",
                                                [
                                                    config.widthAdjustment ? "90px" : "auto",
                                                    config.widthAdjustment ? "1024px" : "none",
                                                    config.widthAdjustment ? "" : `width: ${config.width}px;`,
                                                    config.paddingVertical,
                                                    config.paddingHorizontal,
                                                    config.paddingVertical,
                                                    config.paddingHorizontal,
                                                    this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                                                    config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                                                    config.lineNumbers ? "padding-left: 12px;" : "",
                                                    config.fontFamily,
                                                    config.fontSize,
                                                    config.lineHeight,
                                                    constants/* COLORS.SECONDARY */.DM.SECONDARY,
                                                    this.props.readOnly ? "hidden" : ""
                                                ]
                                            ]
                                        ]) + " " + "bg"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(WidthHandler, {
                                innerRef: this.props.innerRef,
                                onChange: this.props.updateWidth,
                                paddingHorizontal: config.paddingHorizontal
                            })
                        ]
                    })
                }),
                selectionNode && /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_.jsx(SelectionEditor, {
                    onChange: this.onSelectionChange
                }), // TODO: don't use portal?
                selectionNode),
                jsx_runtime_.jsx((styled_jsx_default()), {
                    id: "e38644535ae2b763",
                    dynamic: [
                        config.widthAdjustment ? "90px" : "auto",
                        config.widthAdjustment ? "1024px" : "none",
                        config.widthAdjustment ? "" : `width: ${config.width}px;`,
                        config.paddingVertical,
                        config.paddingHorizontal,
                        config.paddingVertical,
                        config.paddingHorizontal,
                        this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`,
                        config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : "",
                        config.lineNumbers ? "padding-left: 12px;" : "",
                        config.fontFamily,
                        config.fontSize,
                        config.lineHeight,
                        constants/* COLORS.SECONDARY */.DM.SECONDARY,
                        this.props.readOnly ? "hidden" : ""
                    ],
                    children: `.container.__jsx-style-dynamic-selector{position:relative;min-width:${config.widthAdjustment ? "90px" : "auto"};max-width:${config.widthAdjustment ? "1024px" : "none"};${config.widthAdjustment ? "" : `width: ${config.width}px;`}
              padding: ${config.paddingVertical} ${config.paddingHorizontal};}.container.__jsx-style-dynamic-selector .watermark{fill-opacity:.75;position:absolute;z-index:2;bottom:-webkit-calc(${config.paddingVertical} + 16px);bottom:-moz-calc(${config.paddingVertical} + 16px);bottom:calc(${config.paddingVertical} + 16px);right:-webkit-calc(${config.paddingHorizontal} + 16px);right:-moz-calc(${config.paddingHorizontal} + 16px);right:calc(${config.paddingHorizontal} + 16px)}.container.__jsx-style-dynamic-selector .container-bg.__jsx-style-dynamic-selector{position:absolute;top:0px;right:0px;bottom:0px;left:0px}.container.__jsx-style-dynamic-selector .white.__jsx-style-dynamic-selector{background:#fff;position:absolute;top:0px;right:0px;bottom:0px;left:0px}.container.__jsx-style-dynamic-selector .bg.__jsx-style-dynamic-selector{${this.props.config.backgroundMode === "image" ? `background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;` : `background: ${this.props.config.backgroundColor || config.backgroundColor};
                    background-size: auto;
                    background-repeat: repeat;`}
              position: absolute;top:0px;right:0px;bottom:0px;left:0px}.container.__jsx-style-dynamic-selector .alpha.__jsx-style-dynamic-selector{position:absolute;top:0px;right:0px;bottom:0px;left:0px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)}.container.__jsx-style-dynamic-selector .CodeMirror-gutters{background-color:unset;border-right:none}.container.__jsx-style-dynamic-selector .CodeMirror__container{min-width:inherit;position:relative;z-index:1;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;${config.dropShadow ? `box-shadow: 0 ${config.dropShadowOffsetY} ${config.dropShadowBlurRadius} rgba(0, 0, 0, 0.55)` : ""};}.container.__jsx-style-dynamic-selector .CodeMirror__container .CodeMirror{height:auto;min-width:inherit;padding:18px 18px;padding-left:12px;${config.lineNumbers ? "padding-left: 12px;" : ""} border-radius: 5px;font-family:${config.fontFamily},monospace!important;font-size:${config.fontSize};line-height:${config.lineHeight};-webkit-font-variant-ligatures:contextual;-moz-font-variant-ligatures:contextual;font-variant-ligatures:contextual;-webkit-font-feature-settings:"calt"1;-moz-font-feature-settings:"calt"1;font-feature-settings:"calt"1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container.__jsx-style-dynamic-selector .CodeMirror-scroll,.container.__jsx-style-dynamic-selector .CodeMirror-hscrollbar{overflow:hidden!important}.container.__jsx-style-dynamic-selector .window-theme__sharp>.CodeMirror{-webkit-border-radius:0px;-moz-border-radius:0px;border-radius:0px}.container.__jsx-style-dynamic-selector .window-theme__bw>.CodeMirror{border:2px solid ${constants/* COLORS.SECONDARY */.DM.SECONDARY}}.container.__jsx-style-dynamic-selector .window-controls+.CodeMirror__container>.CodeMirror{padding-top:48px}.container.__jsx-style-dynamic-selector .CodeMirror-linenumber{cursor:pointer}.container.__jsx-style-dynamic-selector .CodeMirror-cursor{visibility:${this.props.readOnly ? "hidden" : ""}}@media(max-width:768px){.container.__jsx-style-dynamic-selector [contenteditable="true"]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.container.__jsx-style-dynamic-selector{max-width:480px}}.section.__jsx-style-dynamic-selector,.export-container.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;max-width:100%}`
                })
            ]
        });
    }
}
let modesLoaded = false;
function useModeLoader() {
    external_react_default().useEffect(()=>{
        if (!modesLoaded) {
            // Load Codemirror add-ons
            __webpack_require__(5764);
            // Load Codemirror modes
            constants/* LANGUAGES.filter */.a2.filter((language)=>language.mode && language.mode !== "auto" && language.mode !== "text"
            ).forEach((language)=>{
                language.custom ? __webpack_require__(3612)(`./${language.mode}`) : __webpack_require__(1825)(`./${language.mode}/${language.mode}`);
            });
            modesLoaded = true;
        }
    }, []);
}
let highLightsLoaded = false;
function useHighlightLoader() {
    external_react_default().useEffect(()=>{
        if (!highLightsLoaded) {
            Promise.all(/* import() */[__webpack_require__.e(152), __webpack_require__.e(913)]).then(__webpack_require__.bind(__webpack_require__, 7913)).then((res)=>res.default.map((config)=>core_default().registerLanguage(config[0], config[1])
                )
            ).then(()=>{
                highLightsLoaded = true;
            });
        }
    }, []);
}
function selectedLinesReducer({ prevLine , selected  }, { type , lineNumber , numLines , selectedLines  }) {
    const newState = {};
    switch(type){
        case "GROUP":
            {
                if (prevLine) {
                    for(let i = Math.min(prevLine, lineNumber); i < Math.max(prevLine, lineNumber) + 1; i++){
                        newState[i] = selected[prevLine];
                    }
                }
                break;
            }
        case "MULTILINE":
            {
                for(let i = 0; i < selectedLines.length; i++){
                    newState[selectedLines[i] - 1] = true;
                }
                break;
            }
        default:
            {
                for(let i = 0; i < numLines; i++){
                    if (i != lineNumber) {
                        if (prevLine == null) {
                            newState[i] = false;
                        }
                    } else {
                        newState[lineNumber] = selected[lineNumber] === true ? false : true;
                    }
                }
            }
    }
    return {
        selected: {
            ...selected,
            ...newState
        },
        prevLine: lineNumber
    };
}
function useSelectedLines(props, editorRef) {
    const [state, dispatch] = external_react_default().useReducer(selectedLinesReducer, {
        prevLine: null,
        selected: {}
    });
    external_react_default().useEffect(()=>{
        if (editorRef.current && Object.keys(state.selected).length > 0) {
            editorRef.current.editor.display.view.forEach((line, i)=>{
                if (line.text) {
                    line.text.style.opacity = state.selected[i] === true ? 1 : 0.5;
                }
                if (line.gutter) {
                    line.gutter.style.opacity = state.selected[i] === true ? 1 : 0.5;
                }
            });
        }
    }, [
        state.selected,
        props.children,
        props.config,
        editorRef
    ]);
    external_react_default().useEffect(()=>{
        if (props.config.selectedLines) {
            dispatch({
                type: "MULTILINE",
                selectedLines: props.config.selectedLines
            });
        }
    }, [
        props.config.selectedLines
    ]);
    return external_react_default().useCallback(function onGutterClick(editor, lineNumber, gutter, e) {
        const numLines = editor.display.view.length;
        const type = e.shiftKey ? "GROUP" : "LINE";
        dispatch({
            type,
            lineNumber,
            numLines
        });
    }, []);
}
function useShowInvisiblesLoader() {
    external_react_default().useEffect(()=>void __webpack_require__(8367)
    , []);
}
function CarbonContainer(props, ref) {
    useModeLoader();
    useHighlightLoader();
    useShowInvisiblesLoader();
    const editorRef = /*#__PURE__*/ external_react_default().createRef();
    const onGutterClick = useSelectedLines(props, editorRef);
    return /*#__PURE__*/ jsx_runtime_.jsx(Carbon, {
        ...props,
        innerRef: ref,
        editorRef: editorRef,
        onGutterClick: onGutterClick
    });
}
/* harmony default export */ const components_Carbon = (/*#__PURE__*/external_react_default().forwardRef(CarbonContainer));


/***/ }),

/***/ 468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Spinner({ size =24  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "9e510eb280591882",
                [
                    size,
                    size
                ]
            ]
        ]) + " " + "bounce",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "9e510eb280591882",
                        [
                            size,
                            size
                        ]
                    ]
                ]) + " " + "bounce-dot"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "9e510eb280591882",
                        [
                            size,
                            size
                        ]
                    ]
                ]) + " " + "bounce-dot"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "9e510eb280591882",
                dynamic: [
                    size,
                    size
                ],
                children: `.bounce.__jsx-style-dynamic-selector{width:${size}px;height:${size}px;position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bounce-dot.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:rgba(255,255,255,.7);opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite cubic-bezier(.455,.03,.515,.955);-moz-animation:bounce 2s infinite cubic-bezier(.455,.03,.515,.955);-o-animation:bounce 2s infinite cubic-bezier(.455,.03,.515,.955);animation:bounce 2s infinite cubic-bezier(.455,.03,.515,.955)}.bounce-dot.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:-1s;-moz-animation-delay:-1s;-o-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}45%,55%{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes bounce{0%,100%{-moz-transform:scale(0);transform:scale(0)}45%,55%{-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes bounce{0%,100%{-o-transform:scale(0);transform:scale(0)}45%,55%{-o-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,100%{-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0)}45%,55%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}`
            })
        ]
    });
}


/***/ }),

/***/ 5331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Checkmark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Checkmark({ width =18 , height =18 , color ="#FFFFFF"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: height,
        viewBox: "0 0 18 18",
        fill: "none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M9 0C4.02837 0 0 4.02837 0 9C0 13.9716 4.02837 18 9 18C13.9716 18 18 13.9716 18 9C18 4.02837 13.9716 0 9 0ZM13.6082 6.51202L7.82308 12.3231H7.81875C7.74519 12.3966 7.54615 12.5611 7.31683 12.5611C7.1524 12.5611 6.96635 12.4702 6.81058 12.3144L4.3875 9.89135C4.31827 9.82212 4.31827 9.71394 4.3875 9.64471L5.15769 8.87452C5.19231 8.8399 5.23558 8.8226 5.27885 8.8226C5.32212 8.8226 5.36539 8.8399 5.4 8.87452L7.32115 10.7957L12.6 5.47788C12.6346 5.44327 12.6779 5.42596 12.7212 5.42596C12.7688 5.42596 12.812 5.44327 12.8423 5.47788L13.5995 6.26106C13.6774 6.33462 13.6774 6.44279 13.6082 6.51202Z",
            fill: color
        })
    });
};


/***/ }),

/***/ 1165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SVG_RATIO = 0.81;
const Copy = ({ size , color  })=>{
    const width = size * SVG_RATIO;
    const height = size;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 13 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 0H3.40385C2.55385 0 1.84615 0.669231 1.84615 1.51923V1.84615H1.55769C0.707692 1.84615 0 2.51538 0 3.36538V14.4423C0 15.2923 0.707692 16 1.55769 16H9.55769C10.4077 16 11.0769 15.2923 11.0769 14.4423V14.1538H11.4038C12.2538 14.1538 12.9231 13.4462 12.9231 12.5962V4.92308L8 0ZM8 1.71538L11.2077 4.92308H8V1.71538ZM9.84615 14.4423C9.84615 14.6231 9.71538 14.7692 9.55769 14.7692H1.55769C1.38846 14.7692 1.23077 14.6115 1.23077 14.4423V3.36538C1.23077 3.20769 1.37692 3.07692 1.55769 3.07692H1.84615V12.9038C1.84615 13.7538 2.24615 14.1538 3.09615 14.1538H9.84615V14.4423ZM11.6923 12.5962C11.6923 12.7769 11.5615 12.9231 11.4038 12.9231H3.40385C3.23462 12.9231 3.07692 12.7654 3.07692 12.5962V1.51923C3.07692 1.36154 3.22308 1.23077 3.40385 1.23077H6.76923V6.15385H11.6923V12.5962Z",
            fill: color
        })
    });
};
Copy.defaultProps = {
    size: 16
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);


/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3831);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

let defaults = {
    pairs: "()[]{}''\"\"",
    closeBefore: ")]}'\":;>",
    triples: "",
    explode: "[]{}"
};
let Pos = (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pos);
codemirror__WEBPACK_IMPORTED_MODULE_0___default().defineOption("autoCloseBrackets", false, function(cm, val, old) {
    if (old && old != (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Init)) {
        cm.removeKeyMap(keyMap);
        cm.state.closeBrackets = null;
    }
    if (val) {
        ensureBound(getOption(val, "pairs"));
        cm.state.closeBrackets = val;
        cm.addKeyMap(keyMap);
    }
});
function getOption(conf, name) {
    if (name == "pairs" && typeof conf == "string") return conf;
    if (typeof conf == "object" && conf[name] != null) return conf[name];
    return defaults[name];
}
let keyMap = {
    Backspace: handleBackspace,
    Enter: handleEnter
};
function ensureBound(chars) {
    for(let i = 0; i < chars.length; i++){
        let ch = chars.charAt(i), key = "'" + ch + "'";
        if (!keyMap[key]) keyMap[key] = handler(ch);
    }
}
ensureBound(defaults.pairs + "`");
function handler(ch) {
    return function(cm) {
        return handleChar(cm, ch);
    };
}
function getConfig(cm) {
    let deflt = cm.state.closeBrackets;
    if (!deflt || deflt.override) return deflt;
    let mode = cm.getModeAt(cm.getCursor());
    return mode.closeBrackets || deflt;
}
function handleBackspace(cm) {
    let conf = getConfig(cm);
    if (!conf || cm.getOption("disableInput")) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    let pairs = getOption(conf, "pairs");
    let ranges = cm.listSelections();
    for(let i = 0; i < ranges.length; i++){
        if (!ranges[i].empty()) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
        let around = charsAround(cm, ranges[i].head);
        if (!around || pairs.indexOf(around) % 2 != 0) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    }
    for(let i1 = ranges.length - 1; i1 >= 0; i1--){
        let cur = ranges[i1].head;
        cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1), "+delete");
    }
}
function handleEnter(cm) {
    let conf = getConfig(cm);
    let explode = conf && getOption(conf, "explode");
    if (!explode || cm.getOption("disableInput")) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    let ranges = cm.listSelections();
    for(let i2 = 0; i2 < ranges.length; i2++){
        if (!ranges[i2].empty()) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
        let around = charsAround(cm, ranges[i2].head);
        if (!around || explode.indexOf(around) % 2 != 0) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    }
    cm.operation(function() {
        let linesep = cm.lineSeparator() || "\n";
        cm.replaceSelection(linesep + linesep, null);
        moveSel(cm, -1);
        ranges = cm.listSelections();
        for(let i = 0; i < ranges.length; i++){
            let line = ranges[i].head.line;
            cm.indentLine(line, null, true);
            cm.indentLine(line + 1, null, true);
        }
    });
}
function moveSel(cm, dir) {
    let newRanges = [], ranges = cm.listSelections(), primary = 0;
    for(let i = 0; i < ranges.length; i++){
        let range = ranges[i];
        if (range.head == cm.getCursor()) primary = i;
        let pos = range.head.ch || dir > 0 ? {
            line: range.head.line,
            ch: range.head.ch + dir
        } : {
            line: range.head.line - 1
        };
        newRanges.push({
            anchor: pos,
            head: pos
        });
    }
    cm.setSelections(newRanges, primary);
}
function contractSelection(sel) {
    let inverted = codemirror__WEBPACK_IMPORTED_MODULE_0___default().cmpPos(sel.anchor, sel.head) > 0;
    return {
        anchor: new Pos(sel.anchor.line, sel.anchor.ch + (inverted ? -1 : 1)),
        head: new Pos(sel.head.line, sel.head.ch + (inverted ? 1 : -1))
    };
}
function handleChar(cm, ch) {
    let conf = getConfig(cm);
    if (!conf || cm.getOption("disableInput")) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    let pairs = getOption(conf, "pairs");
    let pos = pairs.indexOf(ch);
    if (pos == -1) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    let closeBefore = getOption(conf, "closeBefore");
    let triples = getOption(conf, "triples");
    let identical = pairs.charAt(pos + 1) == ch;
    let ranges = cm.listSelections();
    let opening = pos % 2 == 0;
    let type;
    for(let i4 = 0; i4 < ranges.length; i4++){
        let range = ranges[i4], cur = range.head, curType;
        let next = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
        if (opening && !range.empty()) {
            curType = "surround";
        } else if ((identical || !opening) && next == ch) {
            if (identical && stringStartsAfter(cm, cur)) curType = "both";
            else if (triples.indexOf(ch) >= 0 && cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == ch + ch + ch) curType = "skipThree";
            else curType = "skip";
        } else if (identical && cur.ch > 1 && triples.indexOf(ch) >= 0 && cm.getRange(Pos(cur.line, cur.ch - 2), cur) == ch + ch) {
            if (cur.ch > 2 && /\bstring/.test(cm.getTokenTypeAt(Pos(cur.line, cur.ch - 2)))) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
            curType = "addFour";
        } else if (identical) {
            let prev = cur.ch == 0 ? " " : cm.getRange(Pos(cur.line, cur.ch - 1), cur);
            if (!codemirror__WEBPACK_IMPORTED_MODULE_0___default().isWordChar(next) && prev != ch && !codemirror__WEBPACK_IMPORTED_MODULE_0___default().isWordChar(prev)) curType = "both";
            else return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
        } else if (opening && (next.length === 0 || /\s/.test(next) || closeBefore.indexOf(next) > -1)) {
            curType = "both";
        } else {
            return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
        }
        if (!type) type = curType;
        else if (type != curType) return (codemirror__WEBPACK_IMPORTED_MODULE_0___default().Pass);
    }
    let left = pos % 2 ? pairs.charAt(pos - 1) : ch;
    let right = pos % 2 ? ch : pairs.charAt(pos + 1);
    cm.operation(function() {
        if (type == "skip") {
            moveSel(cm, 1);
        } else if (type == "skipThree") {
            moveSel(cm, 3);
        } else if (type == "surround") {
            let sels = cm.getSelections();
            for(let i = 0; i < sels.length; i++)sels[i] = left + sels[i] + right;
            cm.replaceSelections(sels, "around");
            sels = cm.listSelections().slice();
            for(let i3 = 0; i3 < sels.length; i3++)sels[i3] = contractSelection(sels[i3]);
            cm.setSelections(sels);
        } else if (type == "both") {
            cm.replaceSelection(left + right, null);
            cm.triggerElectric(left + right);
            moveSel(cm, -1);
        } else if (type == "addFour") {
            cm.replaceSelection(left + left + left + left, "before");
            moveSel(cm, 1);
        }
    });
}
function charsAround(cm, pos) {
    let str = cm.getRange(Pos(pos.line, pos.ch - 1), Pos(pos.line, pos.ch + 1));
    return str.length == 2 ? str : null;
}
function stringStartsAfter(cm, pos) {
    let token = cm.getTokenAt(Pos(pos.line, pos.ch + 1));
    return /\bstring/.test(token.type) && token.start == pos.ch && (pos.ch == 0 || !/\bstring/.test(cm.getTokenTypeAt(pos)));
}


/***/ }),

/***/ 8745:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
// Apache mode by gloony
const CodeMirror = __webpack_require__(3831);
CodeMirror.defineMode("apache", function() {
    return {
        token: function(stream, state) {
            var sol = stream.sol() || state.afterSection;
            var eol = stream.eol();
            state.afterSection = false;
            if (sol) {
                if (state.nextMultiline) {
                    state.inMultiline = true;
                    state.nextMultiline = false;
                } else {
                    state.position = "def";
                }
            }
            if (eol && !state.nextMultiline) {
                state.inMultiline = false;
                state.position = "def";
            }
            if (sol) {
                while(stream.eatSpace()){
                /* pass */ }
            }
            var ch = stream.next();
            if (sol && ch === "#") {
                state.position = "comment";
                stream.skipToEnd();
                return "comment";
            } else if (ch === "!" && stream.peek() !== " ") {
                return "number";
            } else if (ch === " ") {
                if (stream.peek() === "[") {
                    if (stream.skipTo("]")) {
                        stream.next();
                    } else {
                        stream.skipToEnd();
                    }
                    return "keyword";
                } else if (stream.peek() === "(") {
                    if (stream.skipTo(")")) {
                        stream.next();
                    } else {
                        stream.skipToEnd();
                    }
                    return "string";
                } else {
                    state.position = "unit";
                    return "unit";
                }
            } else if (ch === '"') {
                if (stream.skipTo('"')) {
                    stream.next();
                } else {
                    stream.skipToEnd();
                }
                return "quote";
            } else if (sol && ch === "<") {
                if (stream.skipTo(">")) {
                    stream.next();
                } else {
                    stream.skipToEnd();
                }
                return "meta";
            } else if (ch === "%") {
                if (stream.peek() === "{") {
                    if (stream.skipTo("}")) {
                        stream.next();
                    } else {
                        stream.skipToEnd();
                    }
                    return "operator";
                }
            } else if (ch === "$") {
                if (!isNaN(stream.peek()) && stream.peek() !== " ") {
                    while(!isNaN(stream.peek()) && stream.peek() !== " "){
                        stream.next();
                    }
                    return "operator";
                }
            } else if (ch === "\\") {
                if (stream.peek() === ".") {
                    if (stream.skipTo(" ")) {
                        stream.next();
                    } else {
                        stream.skipToEnd();
                    }
                    return "string";
                }
            } else if (ch === ".") {
                if (stream.peek() === "*") {
                    if (stream.skipTo(" ")) {
                        stream.next();
                    } else {
                        stream.skipToEnd();
                    }
                    return "string";
                }
            } else if (ch === "^") {
                if (stream.skipTo(" ")) {
                    stream.next();
                } else {
                    stream.skipToEnd();
                }
                return "string";
            }
            return state.position;
        },
        // electricInput: /<\/[\s\w:]+>$/,
        lineComment: "#",
        fold: "brace",
        startState: function() {
            return {
                position: "def",
                nextMultiline: false,
                inMultiline: false,
                afterSection: false
            };
        }
    };
});
CodeMirror.defineMIME("text/apache", "apache");
CodeMirror.defineMIME("text/htaccess", "apache");


/***/ }),

/***/ 2561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_mode_elixir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4062);
/* harmony import */ var codemirror_mode_elixir__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_elixir__WEBPACK_IMPORTED_MODULE_0__);
// Require Codemirror elixir mode from npm modules and register it here



/***/ }),

/***/ 7852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_graphql_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1698);
/* harmony import */ var codemirror_graphql_mode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_graphql_mode__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 3003:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const CodeMirror = __webpack_require__(3831);
CodeMirror.defineMode("nim", function(conf, parserConf) {
    var ERRORCLASS = "error";
    function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b");
    }
    var ops = [
        "=",
        "+",
        "-",
        "*",
        "/",
        "<",
        ">",
        "@",
        "$",
        "~",
        "&",
        "%",
        "|",
        "?",
        "^",
        ":",
        "\\",
        "[",
        "]",
        "(",
        ")",
        ",",
        "{",
        "}",
        ".\\.",
        ".", 
    ];
    var operators = new RegExp(ops.map(function(op) {
        return "\\" + op;
    }).join("|"));
    var identifiers = new RegExp("^[_A-Za-z][_A-Za-z0-9]*");
    var commonkeywords = [
        "addr",
        "asm",
        "atomic",
        "bind",
        "block",
        "break",
        "case",
        "cast",
        "const",
        "continue",
        "converter",
        "discard",
        "distinct",
        "do",
        "elif",
        "else",
        "end",
        "enum",
        "except",
        "export",
        "finally",
        "for",
        "from",
        "generic",
        "if",
        "import",
        "include",
        "interface",
        "iterator",
        "lambda",
        "let",
        "macro",
        "method",
        "mixin",
        "nil",
        "object",
        "out",
        "proc",
        "ptr",
        "raise",
        "ref",
        "return",
        "shared",
        "static",
        "template",
        "try",
        "tuple",
        "type",
        "using",
        "var",
        "when",
        "while",
        "with",
        "without",
        "yield",
        // keyword operators
        "shl",
        "shr",
        "and",
        "or",
        "xor",
        "not",
        "div",
        "mod",
        "is",
        "isnot",
        "in",
        "as",
        "of", 
    ];
    var commonBuiltins = [
        "int",
        "int8",
        "int16",
        "int32",
        "int64",
        "uint",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "float",
        "float32",
        "float64",
        "bool",
        "char",
        "string",
        "cstring",
        "pointer",
        "range",
        "array",
        "openarray",
        "seq",
        "set",
        "Byte",
        "Natural",
        "Positive",
        "TObject",
        "PObject",
        "Conversion",
        "TResult",
        "TAddress",
        "BiggestInt",
        "BiggestFloat",
        "cchar",
        "cschar",
        "cshort",
        "cint",
        "csize",
        "cuchar",
        "cushort",
        "clong",
        "clonglong",
        "cfloat",
        "cdouble",
        "clongdouble",
        "cuint",
        "culong",
        "culonglong",
        "cchar",
        "cstringArray",
        "TEndian",
        "PFloat32",
        "PFloat64",
        "PInt64",
        "PInt32",
        "TGC_Strategy",
        "TFile",
        "TFileMode",
        "TFileHandle",
        "isMainModule",
        "CompileDate",
        "CompileTime",
        "cpuEndian",
        "hostOS",
        "hostCPU",
        "inf",
        "neginf",
        "nan",
        "QuitSuccess",
        "QuitFailure",
        "dbgLineHook",
        "stdin",
        "stdout",
        "stderr",
        "defined",
        "new",
        "high",
        "low",
        "sizeof",
        "succ",
        "pred",
        "inc",
        "dec",
        "newSeq",
        "len",
        "incl",
        "excl",
        "card",
        "ord",
        "chr",
        "ze",
        "ze64",
        "toU8",
        "toU16",
        "toU32",
        "abs",
        "min",
        "max",
        "add",
        "repr",
        "contains",
        "toFloat",
        "toBiggestFloat",
        "toInt",
        "toBiggestInt",
        "addQuitProc",
        "copy",
        "setLen",
        "newString",
        "zeroMem",
        "copyMem",
        "moveMem",
        "equalMem",
        "alloc",
        "alloc0",
        "realloc",
        "dealloc",
        "setLen",
        "assert",
        "swap",
        "getRefcount",
        "getCurrentException",
        "Msg",
        "getOccupiedMem",
        "getFreeMem",
        "getTotalMem",
        "isNil",
        "seqToPtr",
        "find",
        "pop",
        "GC_disable",
        "GC_enable",
        "GC_fullCollect",
        "GC_setStrategy",
        "GC_enableMarkAnd",
        "Sweep",
        "GC_disableMarkAnd",
        "Sweep",
        "GC_getStatistics",
        "GC_ref",
        "GC_ref",
        "GC_ref",
        "GC_unref",
        "GC_unref",
        "GC_unref",
        "quit",
        "OpenFile",
        "OpenFile",
        "CloseFile",
        "EndOfFile",
        "readChar",
        "FlushFile",
        "readFile",
        "write",
        "readLine",
        "writeln",
        "writeln",
        "getFileSize",
        "ReadBytes",
        "ReadChars",
        "readBuffer",
        "writeBytes",
        "writeChars",
        "writeBuffer",
        "setFilePos",
        "getFilePos",
        "fileHandle",
        "countdown",
        "countup",
        "items",
        "lines",
        "true",
        "false",
        // exceptions
        "E_Base",
        "EAsynch",
        "ESynch",
        "ESystem",
        "EIO",
        "EOS",
        "ERessourceExhausted",
        "EArithmetic",
        "EDivByZero",
        "EOverflow",
        "EAccessViolation",
        "EAssertionFailed",
        "EControlC",
        "EInvalidValue",
        "EOutOfMemory",
        "EInvalidIndex",
        "EInvalidField",
        "EOutOfRange",
        "EStackOverflow",
        "ENoExceptionToReraise",
        "EInvalidObjectAssignment",
        "EInvalidObject",
        "EInvalidLibrary",
        "EInvalidKey",
        "EInvalidObjectConversion",
        "EFloatingPoint",
        "EFloatInvalidOp",
        "EFloatDivByZero",
        "EFloatOverflow",
        "EFloatInexact",
        "EDeadThrea", 
    ];
    if (parserConf.extra_keywords != undefined) commonkeywords = commonkeywords.concat(parserConf.extra_keywords);
    if (parserConf.extra_builtins != undefined) commonBuiltins = commonBuiltins.concat(parserConf.extra_builtins);
    var keywords = wordRegexp(commonkeywords);
    var builtins = wordRegexp(commonBuiltins);
    var indentInfo = null;
    var stringPrefixes = new RegExp("^(('{3}|\"{3}|['\"]))", "i");
    // tokenizers
    function tokenBase(stream, state) {
        // Handle scope changes
        if (stream.sol()) {
            var scopeOffset = state.scopes[0].offset;
            if (stream.eatSpace()) {
                var lineOffset = stream.indentation();
                if (lineOffset > scopeOffset) {
                    indentInfo = "indent";
                } else if (lineOffset < scopeOffset) {
                    indentInfo = "dedent";
                }
                return null;
            } else {
                if (scopeOffset > 0) {
                    dedent(stream, state);
                }
            }
        }
        if (stream.eatSpace()) return null;
        var ch = stream.peek();
        // Handle Comments
        if (ch === "#") {
            stream.skipToEnd();
            return "comment";
        }
        // Handle Number Literals
        if (stream.match(/^[0-9.]/, false)) {
            var floatLiteral = false;
            // Floats
            if (stream.match(/^\d*\.\d+(e[+-]?\d+)?/i)) {
                floatLiteral = true;
            }
            if (stream.match(/^\d+\.\d*/)) {
                floatLiteral = true;
            }
            if (stream.match(/^\.\d+/)) {
                floatLiteral = true;
            }
            if (floatLiteral) {
                // Float literals may be "imaginary"
                stream.eat(/J/i);
                return "number";
            }
            // Integers
            var intLiteral = false;
            // Hex
            if (stream.match(/^0x[0-9a-f]+/i)) {
                intLiteral = true;
            }
            // Binary
            if (stream.match(/^0b[01]+/i)) {
                intLiteral = true;
            }
            // Octal
            if (stream.match(/^0o[0-7]+/i)) {
                intLiteral = true;
            }
            // Decimal
            if (stream.match(/^[1-9]\d*(e[+-]?\d+)?/)) {
                // Decimal literals may be "imaginary"
                stream.eat(/J/i);
                intLiteral = true;
            }
            // Zero by itself with no other piece of number.
            if (stream.match(/^0(?![\dx])/i)) {
                intLiteral = true;
            }
            if (intLiteral) {
                // Integer literals may be "long"
                stream.eat(/L/i);
                return "number";
            }
        }
        // Handle Strings
        if (stream.match(stringPrefixes)) {
            state.tokenize = tokenStringFactory(stream.current());
            return state.tokenize(stream, state);
        }
        if (stream.match(operators)) return "operator";
        if (stream.match(keywords)) return "keyword";
        if (stream.match(builtins)) return "builtin";
        if (stream.match(identifiers)) {
            if (state.lastToken != null && state.lastToken.match(/proc|iterator|macro|template|class|converter/)) {
                return "def";
            }
            return "variable";
        }
        // Handle non-detected items
        stream.next();
        return ERRORCLASS;
    }
    function tokenStringFactory(delimiter) {
        var singleline = delimiter.length == 1;
        var OUTCLASS = "string";
        function tokenString(stream, state) {
            while(!stream.eol()){
                stream.eatWhile(/[^'"\\]/);
                if (stream.eat("\\")) {
                    stream.next();
                    if (singleline && stream.eol()) {
                        return OUTCLASS;
                    }
                } else if (stream.match(delimiter)) {
                    state.tokenize = tokenBase;
                    return OUTCLASS;
                } else {
                    stream.eat(/['"]/);
                }
            }
            if (singleline) {
                if (parserConf.singleLineStringErrors) {
                    return ERRORCLASS;
                } else {
                    state.tokenize = tokenBase;
                }
            }
            return OUTCLASS;
        }
        tokenString.isString = true;
        return tokenString;
    }
    function indent(stream, state, type) {
        type = type || "nim";
        var indentUnit = 0;
        if (type === "nim") {
            if (state.scopes[0].type !== "nim") {
                state.scopes[0].offset = stream.indentation();
                return;
            }
            for(var i = 0; i < state.scopes.length; ++i){
                if (state.scopes[i].type === "nim") {
                    indentUnit = state.scopes[i].offset + conf.indentUnit;
                    break;
                }
            }
        } else {
            indentUnit = stream.column() + stream.current().length;
        }
        state.scopes.unshift({
            offset: indentUnit,
            type: type
        });
    }
    function dedent(stream, state, type) {
        type = type || "nim";
        if (state.scopes.length == 1) return;
        if (state.scopes[0].type === "nim") {
            var _indent = stream.indentation();
            var _indent_index = -1;
            for(var i = 0; i < state.scopes.length; ++i){
                if (_indent === state.scopes[i].offset) {
                    _indent_index = i;
                    break;
                }
            }
            if (_indent_index === -1) {
                return true;
            }
            while(state.scopes[0].offset !== _indent){
                state.scopes.shift();
            }
            return false;
        } else {
            if (type === "nim") {
                state.scopes[0].offset = stream.indentation();
                return false;
            } else {
                if (state.scopes[0].type != type) {
                    return true;
                }
                state.scopes.shift();
                return false;
            }
        }
    }
    function tokenLexer(stream, state) {
        indentInfo = null;
        var style = state.tokenize(stream, state);
        var current = stream.current();
        // Handle '.' connected identifiers
        if (current === ".") {
            style = stream.match(identifiers, false) ? null : ERRORCLASS;
            if (style === null && state.lastStyle === "meta") {
                // Apply 'meta' style to '.' connected identifiers when
                // appropriate.
                style = "meta";
            }
            return style;
        }
        if ((style === "variable" || style === "builtin") && state.lastStyle === "meta") {
            style = "meta";
        }
        // Handle scope changes.
        if (current.match(/return|break|continue|raise/) || current === "discard" && stream.eol()) state.dedent += 1;
        if (current === "lambda" || current === "proc") state.lambda = true;
        var delimiter_index = "[({".indexOf(current);
        if (delimiter_index !== -1) {
            indent(stream, state, "])}".slice(delimiter_index, delimiter_index + 1));
        } else if (stream.eol() && current.match(/=|:|import|include|type|const|var|let/)) {
            indent(stream, state);
        }
        if (indentInfo === "dedent") {
            if (dedent(stream, state)) {
                return ERRORCLASS;
            }
        }
        delimiter_index = "])}".indexOf(current);
        if (delimiter_index !== -1) {
            if (dedent(stream, state, current)) {
                return ERRORCLASS;
            }
        }
        if (state.dedent > 0 && stream.eol() && state.scopes[0].type == "nim") {
            if (state.scopes.length > 1) state.scopes.shift();
            state.dedent -= 1;
        }
        return style;
    }
    var external = {
        startState: function(basecolumn) {
            return {
                tokenize: tokenBase,
                scopes: [
                    {
                        offset: basecolumn || 0,
                        type: "nim"
                    }
                ],
                lastStyle: null,
                lastToken: null,
                lambda: false,
                dedent: 0
            };
        },
        token: function(stream, state) {
            var style = tokenLexer(stream, state);
            state.lastStyle = style;
            var current = stream.current();
            if (current && style) state.lastToken = current;
            if (stream.eol() && state.lambda) state.lambda = false;
            return style;
        },
        indent: function(state) {
            if (state.tokenize != tokenBase) return state.tokenize.isString ? CodeMirror.Pass : 0;
            return state.scopes[0].offset;
        },
        lineComment: "#",
        fold: "indent"
    };
    return external;
});
CodeMirror.defineMIME("text/x-nim", "nim");


/***/ }),

/***/ 7402:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*
  RISC-V Code Mirror Mode

  Based on the mode present in the Venus Simulator
    Author: kvakil
    Source: https://github.com/kvakil/venus

  Forked by Matthew Nielsen (github.com/matthewnielsen27)
*/ const CodeMirror = __webpack_require__(3831);
CodeMirror.defineMode("riscv", function() {
    function regexFromWords(words, ins) {
        return new RegExp("^(?:" + words.join("|") + ")$", ins);
    }
    // Instructions
    // Part 1) Base Integer Instructions
    //        a) Loads
    //        b) Stores
    //        c) Shifts
    //        d) Arithmetic
    //        e) Logical
    //        f) Compare
    //        g) Branches
    //        h) Jump & Link
    //        i) Synch
    //        j) System
    //        k) Counters
    // Part 2) RV Priveleged Instructions
    //        a) CSR Access
    //        b) Change Level
    //        c) Trap Redirect
    // Part 3) Optional Multiply-Divide Instruction Extension: RVM
    //        a) Multiply
    //        b) Divide
    //        c) Remainder
    // Part 4) Pseudo Instructions
    //        a) Standard
    //        b) Non-Standard
    // Part 5) Optional Compressed (16-bit) Instruction Extension: RVC
    //        a) Loads
    //        b) Stores
    //        c) Arithmetic
    //        d) Shifts
    //        e) Branches
    //        f) Jump
    //        g) Jump & Link
    //        h) System
    // Part 6) Optional Atomic Instruction Extension: RVA
    //        a) Load
    //        b) Store
    //        c) Swap
    //        d) Add
    //        e) Logical
    //        f) Min\Max
    // Part 7) Optional Floating-Point Instruction Extension: RVF, RVD, & RVQ
    //        a) Move
    //        b) Convert
    //        c) Load
    //        d) Store
    //        e) Arithmetic
    //        f) Mui-Add
    //        g) Sign Inject
    //        h) Min/Max
    //        i) Compare
    //        j) Categorization
    //        k) Configuration
    var instructions = regexFromWords([
        // Part 1) Base Integer Instructions
        //        a) Loads
        //          I) RV32I
        "lb",
        "lh",
        "lw",
        "lbu",
        "lhu",
        //          II) RV64I and RV128I
        "ld",
        "lq",
        "lwu",
        "ldu",
        //        b) Stores
        //          I) RV32I
        "sb",
        "sh",
        "sw",
        //          II) RV64I and RV128I
        "sd",
        "sq",
        //        c) Shifts
        //          I) RV32I
        "sll",
        "slli",
        "srl",
        "srli",
        "sra",
        "srai",
        //          II) RV64I and RV128I
        "sllw",
        "slliw",
        "srlw",
        "srliw",
        "sraw",
        "sraiw",
        "slld",
        "sllid",
        "srld",
        "srlid",
        "srad",
        "sraid",
        //        d) Arithmetic
        //          I) RV32I
        "add",
        "addi",
        "sub",
        "lui",
        "auipc",
        //          II) RV64I and RV128I
        "addw",
        "addiw",
        "subw",
        "addd",
        "addid",
        "subd",
        //        e) Logical
        "xor",
        "xori",
        "or",
        "ori",
        "and",
        "andi",
        //        f) Compare
        "slt",
        "slti",
        "sltu",
        "sltiu",
        //        g) Branches
        "beq",
        "bne",
        "blt",
        "bge",
        "bltu",
        "bgeu",
        //        h) Jump & Link
        "jal",
        "jalr",
        //        i) Synch
        "fence",
        "fence.i",
        //        j) System
        "scall",
        "sbreak",
        //        k) Counters
        "rdcycle",
        "rdcycleh",
        "rdtime",
        "rdtimeh",
        "rdinstret",
        "rdinstreth",
        // Part 2) RV Priveleged Instructions
        //        a) CSR Access
        "csrrw",
        "csrrs",
        "csrrc",
        "csrrwi",
        "csrrsi",
        "csrrci",
        //        b) Change Level
        "ecall",
        "ebreak",
        "eret",
        //        c) Trap Redirect
        "mrts",
        "mrth",
        "hrts",
        // Part 3) Optional Multiply-Divide Instruction Extension: RVM
        //        a) Multiply
        //          I) RV32M
        "mul",
        "mulh",
        "mulhsu",
        //          II) RV64M and RV128M
        "mulw",
        "muld",
        //        b) Divide
        //          I) RV32M
        "div",
        "divu",
        //          II) RV64M and RV128M
        "divw",
        "divd",
        //        c) Remainder
        //          I) RV32M
        "rem",
        "remu",
        //          II) RV64M and RV128M
        "remw",
        "remuw",
        "remd",
        "remud",
        // Part 4) Pseudo Instructions
        //        a) Standard Pseudo Instructions
        "beqz",
        "bgez",
        "bgt",
        "bgtu",
        "bgtz",
        "ble",
        "bleu",
        "blez",
        "bltz",
        "bnez",
        "call",
        "j",
        "jr",
        "la",
        "li",
        "mv",
        "neg",
        "nop",
        "ret",
        "not",
        "ret",
        "seqz",
        "sgtz",
        "sltz",
        "snez",
        "tail",
        //        b) Non-Standard Pseudo Instructions
        "seq",
        "sge",
        "sgeu",
        "sgt",
        "sgtu",
        "sle",
        "sleu",
        "sne",
        // Part 5) Optional Compressed (16-bit) Instruction Extension: RVC
        //        a) Loads
        "c.lw",
        "c.lwsp",
        "c.ld",
        "c.ldsp",
        "c.lq",
        "c.lqsp",
        //        b) Stores
        "c.sw",
        "c.swsp",
        "c.sd",
        "c.sdsp",
        "c.sq",
        "c.sqsp",
        //        c) Arithmetic
        "c.add",
        "c.addw",
        "c.addi",
        "c.addiw",
        "c.addi16sp",
        "c.addi2spn",
        "c.li",
        "c.lui",
        "c.mv",
        "c.sub",
        //        d) Shifts
        "c.slli",
        //        e) Branches
        "c.beqz",
        "c.bnez",
        //        f) Jump
        "c.j",
        "c.jr",
        //        g) Jump & Link
        "c.jal",
        "c.jalr",
        //        h) System
        "c.ebreak",
        // Part 6) Optional Atomic Instruction Extrnsion: RVA
        //        a) Load
        //          I) RV32A
        "lr.w",
        //          II) RV64A and RV128A
        "lr.d",
        "lr.q",
        //        b) Store
        //          I) RV32A
        "sc.w",
        //          II) RV64A and RV128A
        "sc.d",
        "sc.q",
        //        c) Swap
        //          I) RV32A
        "amoswap.w",
        //          II) RV64A and RV128A
        "amoswap.d",
        "amoswap.q",
        //        d) Add
        //          I) RV32A
        "amoadd.w",
        //          II) RV64A and RV128A
        "amoadd.d",
        "amoadd.q",
        //        e) Logical
        //          I) RV32A
        "amoxor.w",
        "amoand.w",
        "amoor.w",
        //          II) RV64A and RV128A
        "amoxor.d",
        "amoand.d",
        "amoor.d",
        "amoxor.q",
        "amoand.q",
        "amoor.q",
        //        f) Min\Max
        //          I) RV32A
        "amomin.w",
        "amomax.w",
        "amominu.w",
        "amomax.w",
        //          II) RV64A and RV128A
        "amomin.d",
        "amomax.d",
        "amominu.d",
        "amomax.d",
        "amomin.q",
        "amomax.q",
        "amominu.q",
        "amomax.q",
        // Part 7) Optional Floating-Point Instruction Extension: RVF, RVD, & RVQ
        //        a) Move
        //          I) RV32-
        "fmv.h.x",
        "fmv.s.s",
        "fmv.x.h",
        "fmv.x.s",
        //          II) RV64- and RV128-
        "fmv.d.x",
        "fmv.q.s",
        "fmv.d.h",
        "fmv.q.s",
        //        b) Convert
        //          I) RV32-
        "fcvt.h.w",
        "fcvt.s.w",
        "fcvt.d.w",
        "fcvt.q.w",
        "fcvt.h.wu",
        "fcvt.s.wu",
        "fcvt.d.wu",
        "fcvt.q.wu",
        "fcvt.w.h",
        "fcvt.w.s",
        "fcvt.w.d",
        "fcvt.w.q",
        "fcvt.wu.h",
        "fcvt.w.s",
        "fcvt.w.d",
        "fcvt.w.q",
        //          II) RV64- and RV128-
        "fcvt.h.l",
        "fcvt.h.t",
        "fcvt.h.lu",
        "fcvt.h.tu",
        "fcvt.s.l",
        "fcvt.s.t",
        "fcvt.s.lu",
        "fcvt.s.tu",
        "fcvt.d.l",
        "fcvt.d.t",
        "fcvt.d.lu",
        "fcvt.d.tu",
        "fcvt.q.l",
        "fcvt.q.t",
        "fcvt.q.lu",
        "fcvt.q.tu",
        "fcvt.l.h",
        "fcvt.t.h",
        "fcvt.lu.h",
        "fcvt.tu.h",
        "fcvt.l.s",
        "fcvt.t.s",
        "fcvt.lu.s",
        "fcvt.tu.s",
        "fcvt.l.d",
        "fcvt.t.d",
        "fcvt.lu.d",
        "fcvt.tu.d",
        "fcvt.l.q",
        "fcvt.t.q",
        "fcvt.lu.q",
        "fcvt.tu.q",
        //        c) Load
        "flw",
        "fld",
        "flq",
        //        d) Store
        "fsw",
        "fsd",
        "fsq",
        //        e) Arithmetic
        "fadd.s",
        "fsub.s",
        "fmul.s",
        "fdiv.s",
        "fsqrt.s",
        "fadd.d",
        "fsub.d",
        "fmul.d",
        "fdiv.d",
        "fsqrt.d",
        "fadd.q",
        "fsub.q",
        "fmul.q",
        "fdiv.q",
        "fsqrt.q",
        //        f) Mul-Add
        "fmadd.d",
        "fmsub.d",
        "fnmsub.d",
        "fnmadd.d",
        "fmadd.d",
        "fmsub.d",
        "fnmsub.d",
        "fnmadd.d",
        "fmadd.q",
        "fmsub.q",
        "fnmsub.q",
        "fnmadd.q",
        //        g) Sign Inject
        "fsgnj.s",
        "fsgnjn.s",
        "fsgnjx.s",
        "fsgnj.d",
        "fsgnjn.d",
        "fsgnjx.d",
        "fsgnj.q",
        "fsgnjn.q",
        "fsgnjx.q",
        //        h) Min/Max
        "fmin.s",
        "fmax.s",
        "fmin.d",
        "fmax.d",
        "fmin.q",
        "fmax.q",
        //        i) Compare
        "feq.s",
        "flt.s",
        "fle.s",
        "feq.d",
        "flt.d",
        "fle.d",
        "feq.q",
        "flt.q",
        "fle.q",
        //        j) Categorization
        "fclass.s",
        "fclass.d",
        "fclass.q",
        //        k) Configuration
        "frcsr",
        "frrm",
        "frflags",
        "fscsr",
        "fsrm",
        "fsflags",
        "fsrmi",
        "fsflagsi", 
    ], "i");
    // Registers
    // Part 1) Actual Register Values
    // Part 2) Application Binary Interface
    var registers = regexFromWords([
        // Part 1) Actual Register Values
        "x0",
        "x1",
        "x2",
        "x3",
        "x4",
        "x5",
        "x6",
        "x7",
        "x8",
        "x9",
        "x10",
        "x11",
        "x12",
        "x13",
        "x14",
        "x15",
        "x16",
        "x17",
        "x18",
        "x19",
        "x20",
        "x21",
        "x22",
        "x23",
        "x24",
        "x25",
        "x26",
        "x27",
        "x28",
        "x29",
        "x30",
        "x31",
        // Part 2) Application Binary Interface
        "zero",
        "ra",
        "sp",
        "gp",
        "tp",
        "t0",
        "t1",
        "t2",
        "s0",
        "s1",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10",
        "s11",
        "t3",
        "t4",
        "t5",
        "t6",
        "pc", 
    ], "");
    // Keywords
    // Part 1) Pseudo Operations
    var keywords = regexFromWords([
        // Part 1) Pseudo Operations
        ".align",
        ".file",
        ".globl",
        ".local",
        ".comm",
        ".common",
        ".ident",
        ".section",
        ".size",
        ".text",
        ".data",
        ".rodata",
        ".bss",
        ".string",
        ".asciz",
        ".asciiz",
        ".equ",
        ".macro",
        ".endm",
        ".type",
        ".option",
        ".byte",
        ".2byte",
        ".half",
        ".short",
        ".4byte",
        ".word",
        ".long",
        ".8byte",
        ".dword",
        ".quad",
        ".dtprelword",
        ".dtpreldword",
        ".sleb128",
        ".uleb128",
        ".p2align",
        ".balign",
        ".zero",
        ".float",
        ".double", 
    ], "i");
    function normal(stream, state) {
        var ch = stream.next();
        if (ch == "#") {
            stream.skipToEnd();
            return "comment";
        }
        if (ch == '"' || ch == "'") {
            state.cur = string(ch);
            return state.cur(stream, state);
        }
        if (/\d/.test(ch)) {
            stream.eatWhile(/[\w.%]/);
            // Handle numeric labels
            if (stream.peek() === ":") {
                return "variable";
            }
            return "number";
        }
        if (/[.\w_]/.test(ch)) {
            stream.eatWhile(/[\w\\\-_.]/);
            return "variable";
        }
        return null;
    }
    function string(quote) {
        return function(stream, state) {
            var escaped = false, ch;
            while((ch = stream.next()) != null){
                if (ch == quote && !escaped) break;
                escaped = !escaped && ch == "\\";
            }
            if (!escaped) state.cur = normal;
            return "string";
        };
    }
    return {
        startState: function(basecol) {
            return {
                basecol: basecol || 0,
                indentDepth: 0,
                cur: normal
            };
        },
        token: function(stream, state) {
            if (stream.eatSpace()) return null;
            var style = state.cur(stream, state);
            var word = stream.current();
            if (style == "variable") {
                if (keywords.test(word)) style = "keyword";
                else if (instructions.test(word)) style = "builtin";
                else if (registers.test(word)) style = "variable-2";
            }
            return style;
        }
    };
});
CodeMirror.defineMIME("text/riscv", "riscv");


/***/ }),

/***/ 4017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_solidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var codemirror_solidity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_solidity__WEBPACK_IMPORTED_MODULE_0__);



/***/ })

};
;