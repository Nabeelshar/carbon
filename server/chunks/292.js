"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 7286:
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



// Feature flag
const ACTIVE = false;
const key = "CARBON_CTA_4";
function Toast() {
    const [open, setState] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        window.localStorage.removeItem("CARBON_CTA_2");
        window.localStorage.removeItem("CARBON_CTA_3");
        if (!window.localStorage.getItem(key)) {
            setState(true);
        }
    }, []);
    if (false) {}
    if (!ACTIVE) {
        return null;
    }
    if (!open) {
        return null;
    }
    function close() {
        setState(false);
        window.localStorage.setItem(key, true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-877bab60a06ef3c6" + " " + "toast",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-877bab60a06ef3c6" + " " + "toast-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "jsx-877bab60a06ef3c6",
                        /*#__PURE__*/ children: "Black Lives Matter."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.joincampaignzero.org",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "jsx-877bab60a06ef3c6",
                        children: "Help end police violence in America \u2192"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: close,
                        className: "jsx-877bab60a06ef3c6" + " " + "close-toast",
                        children: "\xd7"
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "877bab60a06ef3c6",
                children: "@-webkit-keyframes slide{from{-webkit-transform:translateY(-128px);transform:translateY(-128px)}to{-webkit-transform:translateY(0px);transform:translateY(0px)}}@-moz-keyframes slide{from{-moz-transform:translateY(-128px);transform:translateY(-128px)}to{-moz-transform:translateY(0px);transform:translateY(0px)}}@-o-keyframes slide{from{-o-transform:translateY(-128px);transform:translateY(-128px)}to{-o-transform:translateY(0px);transform:translateY(0px)}}@keyframes slide{from{-webkit-transform:translateY(-128px);-moz-transform:translateY(-128px);-o-transform:translateY(-128px);transform:translateY(-128px)}to{-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}}.toast.jsx-877bab60a06ef3c6{margin:-4.6rem auto var(--x4);padding:8px 16px;color:#fff;border:1px solid#fff;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-animation-name:slide;-moz-animation-name:slide;-o-animation-name:slide;animation-name:slide;-webkit-animation-duration:600ms;-moz-animation-duration:600ms;-o-animation-duration:600ms;animation-duration:600ms}.toast-content.jsx-877bab60a06ef3c6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-877bab60a06ef3c6{text-decoration:underline;margin-left:8px}.close-toast.jsx-877bab60a06ef3c6{padding-left:0;padding-right:0;background:transparent;color:white;border:none;font-size:100%;margin-left:16px;text-decoration:none;cursor:pointer}p.jsx-877bab60a06ef3c6{margin:0}@media(max-width:840px){.toast.jsx-877bab60a06ef3c6{display:none}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);


/***/ }),

/***/ 2915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aC": () => (/* binding */ useAuth)
/* harmony export */ });
/* unused harmony export Context */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5018);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_3__]);
_lib_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// IDEA: just read from firebase store at request time?

const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
function useAuth() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Context);
}
function AuthContext(props) {
    const [user, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (_lib_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP) {
            _lib_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].auth */ .ZP.auth().onAuthStateChanged((newUser)=>setState(newUser)
            );
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (user) {
            user.getIdToken().then((jwt)=>{
                _lib_api__WEBPACK_IMPORTED_MODULE_3__/* .client.defaults.headers.Authorization */ .L.defaults.headers.Authorization = jwt ? `Bearer ${jwt}` : undefined;
            });
        } else {
            delete _lib_api__WEBPACK_IMPORTED_MODULE_3__/* .client.defaults.headers.Authorization */ .L.defaults.headers.Authorization;
        }
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: user,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/svg/Logo.js


function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        role: "img",
        "aria-label": "Carbon Logo",
        xmlns: "http://www.w3.org/2000/svg",
        width: "268",
        height: "66.4",
        viewBox: "0 0 335 83",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            fill: "#F8E81C",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M296.433924 77.7222222L296.433924 45.6666667C296.433924 41.0773092 297.620219 37.3035968 300.01771 34.4050657 302.473532 31.4360134 305.905185 29.9444444 310.184631 29.9444444 313.958654 29.9444444 316.785807 31.0674894 318.517579 33.3781965 320.149778 35.5560453 320.940721 38.5151822 320.940721 42.2222222L320.940721 77.7222222 331.879303 77.7222222 331.879303 41.2222222C331.879303 34.8704637 330.466905 29.9653827 327.685195 26.4602328 324.982492 23.0546382 320.719791 21.3333333 314.758228 21.3333333 310.994634 21.3333333 307.883209 22.1163791 305.395698 23.6627894 302.879903 25.2267835 300.83411 27.4420077 299.249154 30.3323377L296.433924 35.466201 296.433924 22.7222222 285.495341 22.7222222 285.495341 77.7222222 296.433924 77.7222222zM303.811808 21.1149884C306.805381 19.2539743 310.463539 18.3333333 314.758228 18.3333333 321.573763 18.3333333 326.712252 20.4082868 330.035112 24.5953227 333.278964 28.6828034 334.879303 34.2405808 334.879303 41.2222222L334.879303 80.7222222 317.940721 80.7222222 317.940721 42.2222222C317.940721 39.1144133 317.31604 36.7773069 316.116951 35.1773591 315.017433 33.7102695 313.089545 32.9444444 310.184631 32.9444444 306.768779 32.9444444 304.193108 34.0639605 302.3294 36.3171565 300.40736 38.6408738 299.433924 41.737463 299.433924 45.6666667L299.433924 80.7222222 282.495341 80.7222222 282.495341 19.7222222 299.433924 19.7222222 299.433924 24.8377442C300.721521 23.370849 302.181317 22.1286153 303.811808 21.1149884zM224.909253 50.2222222C224.909253 54.6268103 225.485678 58.6013098 226.633236 62.1495238 227.773037 65.6737513 229.413675 68.7062756 231.55484 71.2580476 233.674035 73.7836354 236.272001 75.7177939 239.364461 77.0701038 242.469509 78.4279178 246.040539 79.1111111 250.088571 79.1111111 254.136603 79.1111111 257.707633 78.4279178 260.81268 77.0701038 263.90514 75.7177939 266.503107 73.7836354 268.622301 71.2580476 270.762035 68.7079814 272.392878 65.6776966 273.514645 62.1558688 274.645434 58.6057135 275.213441 54.6290062 275.213441 50.2222222 275.213441 45.814887 274.645291 41.8282563 273.513991 38.2587402 272.392563 34.7203722 270.762865 31.6922146 268.625573 29.1625045 266.506025 26.6537973 263.906917 24.7274277 260.81268 23.3743407 257.707633 22.0165266 254.136603 21.3333333 250.088571 21.3333333 246.040539 21.3333333 242.469509 22.0165266 239.364461 23.3743407 236.270224 24.7274277 233.671116 26.6537973 231.551569 29.1625045 229.412842 31.6939125 227.773357 34.7243061 226.633908 38.2650624 225.485826 41.832644 224.909253 45.8170759 224.909253 50.2222222zM221.909253 50.2222222C221.909253 45.5162118 222.530515 41.2229488 223.778139 37.3460487 225.034395 33.4423233 226.861372 30.0653736 229.259967 27.2263844 231.677741 24.3646944 234.650381 22.1614756 238.162484 20.6256593 241.663777 19.09457 245.642737 18.3333333 250.088571 18.3333333 254.534405 18.3333333 258.513365 19.09457 262.014658 20.6256593 265.52676 22.1614756 268.4994 24.3646944 270.917174 27.2263844 273.317204 30.0670716 275.135818 33.4462572 276.373798 37.352371 277.601905 41.2273365 278.213441 45.5184008 278.213441 50.2222222 278.213441 54.9265949 277.601761 59.2090643 276.373144 63.0663534 275.135503 66.9519701 273.318034 70.3290286 270.920446 73.1863968 268.502319 76.0682435 265.528538 78.2821916 262.014658 79.8187851 258.513365 81.3498744 254.534405 82.1111111 250.088571 82.1111111 245.642737 82.1111111 241.663777 81.3498744 238.162484 79.8187851 234.648604 78.2821916 231.674823 76.0682435 229.256696 73.1863968 226.860539 70.3307344 225.034715 66.9559154 223.77881 63.0726985 222.530663 59.2134679 221.909253 54.9287908 221.909253 50.2222222zM236.446759 58.6111111L236.446759 41.7777778C236.446759 37.8652987 237.784014 34.7495865 240.453413 32.5620322 243.038773 30.443347 246.270771 29.3888889 250.088571 29.3888889 253.901015 29.3888889 257.128318 30.4211697 259.712443 32.4973194 262.392344 34.6504176 263.730383 37.7894564 263.730383 41.7777778L263.730383 58.6111111C263.730383 62.6354126 262.393579 65.7930346 259.712443 67.947125 257.128318 70.0232747 253.901015 71.0555556 250.088571 71.0555556 246.268109 71.0555556 243.033801 69.9899983 240.447869 67.8500693 237.782406 65.6443257 236.446759 62.5216278 236.446759 58.6111111zM239.446759 58.6111111C239.446759 61.6635922 240.416036 63.9297293 242.360492 65.5388196 244.384479 67.2137244 246.939707 68.0555556 250.088571 68.0555556 253.245452 68.0555556 255.807685 67.2360031 257.833479 65.6084306 259.762262 64.0587987 260.730383 61.7720308 260.730383 58.6111111L260.730383 41.7777778C260.730383 38.6549525 259.763497 36.3866379 257.833479 34.8360139 255.807685 33.2084414 253.245452 32.3888889 250.088571 32.3888889 246.937045 32.3888889 244.379506 33.2233008 242.354948 34.8824122 240.414429 36.4726547 239.446759 38.7272591 239.446759 41.7777778L239.446759 58.6111111zM175.582631 77.7222222L175.582631 66.0914658 178.359952 70.6024723C180.012576 73.2867135 182.106007 75.3714791 184.651501 76.8751747 187.16839 78.3619733 190.171925 79.1111111 193.689145 79.1111111 197.215914 79.1111111 200.265908 78.3758445 202.863214 76.914859 205.49027 75.4371392 207.658037 73.431016 209.379328 70.8826335 211.127057 68.2951095 212.426848 65.2561715 213.275401 61.7575527 214.135732 58.2103681 214.567103 54.3657993 214.567103 50.2222222 214.567103 46.1518847 214.135592 42.3150488 213.2742 38.7096795 212.425645 35.1580421 211.126738 32.1036184 209.381978 29.5379428 207.660554 27.0065839 205.491916 25.0082309 202.863214 23.5295854 200.265908 22.0686 197.215914 21.3333333 193.689145 21.3333333 190.136214 21.3333333 187.124825 22.0823497 184.628013 23.5670555 182.0993 25.0707308 180.013486 27.1562531 178.359952 29.8419722L175.582631 34.3529787 175.582631 3.33333333 164.644049 3.33333333 164.644049 77.7222222 175.582631 77.7222222zM178.582631 80.7222222L161.644049 80.7222222 161.644049.333333333 178.582631.333333333 178.582631 24.6168813C179.91912 23.1926598 181.423776 21.9820987 183.094699 20.9885 186.078971 19.2139303 189.619376 18.3333333 193.689145 18.3333333 197.71248 18.3333333 201.268727 19.1906433 204.333998 20.914859 207.367874 22.6214147 209.881681 24.9378333 211.862712 27.8509461 213.820406 30.7297421 215.262 34.1196984 216.192076 38.0125427 217.109313 41.8516551 217.567103 45.9221475 217.567103 50.2222222 217.567103 54.5972063 217.109173 58.6784841 216.190874 62.4646695 215.260797 66.2994207 213.820087 69.6678261 211.865362 72.5618109 209.884198 75.4949373 207.369519 77.8221041 204.333998 79.5295854 201.268727 81.2538011 197.71248 82.1111111 193.689145 82.1111111 189.656262 82.1111111 186.126152 81.2306356 183.125658 79.4581586 181.440943 78.462949 179.925925 77.2498182 178.582631 75.8220946L178.582631 80.7222222zM175.582631 54.5555556L175.582631 45.8888889C175.582631 41.0309437 176.686377 37.079167 178.9298 34.0747551 181.271042 30.9393451 184.971677 29.3888889 189.877814 29.3888889 193.910391 29.3888889 197.15346 30.5198346 199.523055 32.8103955 201.899455 35.1075352 203.084045 38.2034921 203.084045 42L203.084045 58.3888889C203.084045 62.1861081 201.889631 65.2911948 199.496091 67.6060195 197.110066 69.9135766 193.87567 71.0555556 189.877814 71.0555556 184.971677 71.0555556 181.271042 69.5050994 178.9298 66.3696893 176.686377 63.3652774 175.582631 59.4135007 175.582631 54.5555556zM178.582631 54.5555556C178.582631 58.8087671 179.511575 62.1346954 181.333591 64.5747551 183.05779 66.8838167 185.854502 68.0555556 189.877814 68.0555556 193.139673 68.0555556 195.622216 67.1790361 197.410527 65.4495361 199.191323 63.7273035 200.084045 61.4065186 200.084045 58.3888889L200.084045 42C200.084045 38.981659 199.199648 36.6702626 197.438011 34.9673822 195.669568 33.2579232 193.177549 32.3888889 189.877814 32.3888889 185.854502 32.3888889 183.05779 33.5606277 181.333591 35.8696893 179.511575 38.3097491 178.582631 41.6356774 178.582631 45.8888889L178.582631 54.5555556zM136.551986 77.7222222L136.551986 30.8333333 154.356347 30.8333333 154.356347 22.7222222 125.613403 22.7222222 125.613403 77.7222222 136.551986 77.7222222zM139.551986 80.7222222L122.613403 80.7222222 122.613403 19.7222222 157.356347 19.7222222 157.356347 33.8333333 139.551986 33.8333333 139.551986 80.7222222zM76.7002447 31.7899732C78.7603812 30.1812548 81.3903425 29.3888889 84.5382823 29.3888889 87.6293614 29.3888889 90.1502049 30.1712484 92.0410878 31.771741 94.0162929 33.4436061 94.9676866 36.0580229 94.9676866 39.5L94.9676866 44.6560508 93.5943351 44.7724216 77.8700501 46.1047758C72.1877111 46.6286888 67.9204398 48.4628993 64.9969824 51.5814355 62.0638479 54.7102944 60.6112591 58.3988216 60.6112591 62.7222222 60.6112591 65.1984431 61.0199728 67.4112593 61.8311541 69.3706845 62.6430164 71.3317548 63.7894509 73.0316989 65.2764827 74.4815556 66.7717987 75.9394893 68.5064811 77.0743102 70.4899983 77.8906653 72.4631477 78.7027533 74.6559854 79.1111111 77.0789629 79.1111111 81.1857444 79.1111111 84.4384443 78.2538019 86.870203 76.5718854 89.3664617 74.8453577 91.3721845 72.5076807 92.8952265 69.5377475L93.3134444 68.7222222 96.2019417 68.7222222 96.3108369 77.7222222 115.271254 77.7222222 115.271254 69.6666667 105.688479 69.6666667 105.688479 39.7222222C105.688479 33.6182675 103.879026 29.0957432 100.280992 26.0307541 96.6184001 22.9107705 91.5727369 21.3333333 85.0827582 21.3333333 81.8066152 21.3333333 78.7876079 21.7316663 76.0226376 22.5251388 73.2905064 23.3091873 70.9527401 24.4413587 69.0000537 25.9184992 67.0697639 27.3786975 65.5245583 29.2011686 64.3558495 31.3987594 63.4048451 33.1869881 62.8190728 35.2360408 62.6038925 37.5555556L73.545714 37.5555556C73.8464158 35.1460964 74.898738 33.1967329 76.7002447 31.7899732zM88.5767293 79.0392257C85.6000006 81.0980686 81.756436 82.1111111 77.0789629 82.1111111 74.2749458 82.1111111 71.6945927 81.6305889 69.348212 80.6648903 67.012199 79.7034587 64.9537374 78.3568229 63.1821819 76.6295555 61.4023422 74.8942111 60.0260636 72.8534519 59.0592959 70.5182044 58.0918471 68.1813118 57.6112591 65.5793614 57.6112591 62.7222222 57.6112591 57.6381684 59.3528968 53.2156656 62.8083112 49.5296757 66.2734026 45.8333629 71.2258305 43.7046501 77.6056854 43.1164673L91.9676866 41.8995047 91.9676866 39.5C91.9676866 36.8678727 91.3219671 35.0934445 90.1028978 34.0615924 88.7995062 32.9583677 86.9645862 32.3888889 84.5382823 32.3888889 82.0236447 32.3888889 80.0437564 32.985398 78.5466328 34.1544712 77.151128 35.2441924 76.455507 36.8303254 76.455507 39.0555556L76.455507 40.5555556 59.4823471 40.5555556 59.5173141 39.0213764C59.5950381 35.6112365 60.3217553 32.5951134 61.7071212 29.9901295 63.0793125 27.4099186 64.9098236 25.2509481 67.1901683 23.5259452 69.4481163 21.8178846 72.1194779 20.5241544 75.1951184 19.6415279 78.2379198 18.7683253 81.5347694 18.3333333 85.0827582 18.3333333 92.2410429 18.3333333 97.9758941 20.1262329 102.226391 23.7470237 106.541446 27.422809 108.688479 32.7890747 108.688479 39.7222222L108.688479 66.6666667 118.271254 66.6666667 118.271254 80.7222222 93.3469157 80.7222222 93.2722594 74.5520109C91.9259002 76.3083996 90.3601321 77.805742 88.5767293 79.0392257zM72.0943173 64.3333333L72.0945047 59.3096252C72.1423555 56.2825042 73.7407575 54.3703813 76.6182097 54.0615589L94.9676866 52.4149217 94.9676866 56.3333333C94.9676866 60.3301924 93.8335795 63.7812672 91.5645664 66.6291507 89.222411 69.5688365 85.9833157 71.0555556 81.9792457 71.0555556 79.2726125 71.0555556 77.010561 70.5669074 75.2050206 69.560079 73.1729648 68.4269382 72.0943173 66.6224706 72.0943173 64.3333333zM76.9124638 57.0469778C75.6257599 57.1851765 75.1188763 57.791547 75.0943173 59.3333333L75.0943173 64.3333333C75.0943173 65.5256949 75.5764849 66.3323124 76.6661065 66.939921 77.9822434 67.673842 79.749273 68.0555556 81.9792457 68.0555556 85.089696 68.0555556 87.4586461 66.9682263 89.2182295 64.7597382 91.0509551 62.4594478 91.9676866 59.6698443 91.9676866 56.3333333L91.9676866 55.6961668 76.9124638 57.0469778zM47.509014 31.9912927C46.2461969 29.5345251 44.6076495 27.5299623 42.5877769 25.9629396 40.5411761 24.3751811 38.2511901 23.2111993 35.7084749 22.4674548 33.1245839 21.7116664 30.4169706 21.3333333 27.5813094 21.3333333 23.866754 21.3333333 20.5556837 21.9950912 17.6349932 23.3118904 14.7184464 24.6268213 12.222517 26.517437 10.1343275 28.9945721 8.03446123 31.4855588 6.41287987 34.5320859 5.27264177 38.1458045 4.12317493 41.7887714 3.54539101 45.9244936 3.54539101 50.5555556 3.54539101 54.8977695 4.07072749 58.8286318 5.11674505 62.3507326 6.14910531 65.8268471 7.6964181 68.7925477 9.75764568 71.2607331 11.8108596 73.7193226 14.3279579 75.6390766 17.3229097 77.0281206 20.3090374 78.413072 23.8151411 79.1111111 27.8535473 79.1111111 30.8211545 79.1111111 33.5961475 78.6903366 36.1840432 77.8509541 38.7470193 77.0196542 41.0305251 75.7770017 43.0439656 74.1196605 45.041295 72.4755809 46.6628961 70.426621 47.9136628 67.9604143 48.9636214 65.890152 49.6983748 63.4786826 50.1125282 60.7222222L39.179003 60.7222222C38.6026656 64.234219 37.395442 66.814432 35.4916116 68.423431 33.4006464 70.1905847 30.5990339 71.0555556 27.1457287 71.0555556 23.6298118 71.0555556 20.6982225 69.8911066 18.446952 67.5727551 16.1954267 65.2541413 15.0828968 62.0903829 15.0828968 58.1666667L15.0828968 42.2222222C15.0828968 37.97554 16.2654826 34.7154665 18.6860268 32.5489749 21.0315981 30.4495872 23.8383678 29.3888889 27.0368335 29.3888889 30.1854147 29.3888889 32.8589763 30.2104387 35.0049409 31.8686076 36.9938168 33.4053955 38.2245519 35.8951454 38.7575758 39.2777778L49.6946816 39.2777778C49.3041848 36.4897563 48.573592 34.0623929 47.509014 31.9912927zM.545391015 50.5555556C.545391015 45.6310142 1.16544204 41.192748 2.41168102 37.2430844 3.66714873 33.2641724 5.47573106 29.8663195 7.84058925 27.0609835 10.2171243 24.2417957 13.075154 22.0768965 16.4019618 20.5769985 19.7246258 19.0789688 23.455373 18.3333333 27.5813094 18.3333333 30.6986141 18.3333333 33.6897913 18.7512886 36.5506863 19.5881007 39.452757 20.4369568 42.0811539 21.7729501 44.4266804 23.592616 46.7989351 25.4330177 48.7175945 27.7802632 50.1771704 30.6198184 51.6321266 33.4503863 52.5259444 36.7944094 52.8689866 40.644661L53.0144909 42.2777778 36.0761445 42.2777778 35.943475 40.9240853C35.6171736 37.5946713 34.6639326 35.3963496 33.1706513 34.2425035 31.5778628 33.0117691 29.5508297 32.3888889 27.0368335 32.3888889 24.5727219 32.3888889 22.4792577 33.1800239 20.6867917 34.7843585 18.9692986 36.321589 18.0828968 38.7651622 18.0828968 42.2222222L18.0828968 58.1666667C18.0828968 61.3540971 18.9304604 63.7643571 20.599181 65.4828004 22.2681563 67.2015062 24.418291 68.0555556 27.1457287 68.0555556 29.9357781 68.0555556 32.0525484 67.4020231 33.5551419 66.1321245 35.0118352 64.9010181 35.984876 62.5601721 36.3814033 59.0536713L36.5319681 57.7222222 53.4679765 57.7222222 53.3030406 59.3714863C52.9224681 63.1769917 52.0209498 66.4943721 50.5892354 69.3173635 49.1539077 72.1474796 47.272749 74.5244013 44.9505483 76.435895 42.6444586 78.3341272 40.0277305 79.7581147 37.1096221 80.7046015 34.2164333 81.6430057 31.1292947 82.1111111 27.8535473 82.1111111 23.3980875 82.1111111 19.4630954 81.3276835 16.0606743 79.7496572 12.6670771 78.1757234 9.7939183 75.9844074 7.45500486 73.1837113 5.12410511 70.3926112 3.38644633 67.0620785 2.24089221 63.204823 1.10899539 59.3935537.545391015 55.1763494.545391015 50.5555556z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Header.js




const Header = ({ enableHeroText  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        role: "banner",
        className: "jsx-86da1b8942f9dc09" + " " + "mb4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-86da1b8942f9dc09" + " " + "header-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        id: "link-home",
                        href: "/",
                        "aria-label": "Home",
                        className: "jsx-86da1b8942f9dc09",
                        /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                    }),
                    enableHeroText ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "jsx-86da1b8942f9dc09" + " " + "mt3",
                        children: [
                            "Create and share beautiful images of your source code.",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                className: "jsx-86da1b8942f9dc09"
                            }),
                            "Start typing or drop a file into the text area to get started."
                        ]
                    }) : null
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "86da1b8942f9dc09",
                children: ".header-content.jsx-86da1b8942f9dc09{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.header-content.jsx-86da1b8942f9dc09 a.jsx-86da1b8942f9dc09{height:64px;max-width:96vw}h2.jsx-86da1b8942f9dc09{text-align:center}@media(max-width:768px){header.jsx-86da1b8942f9dc09{margin-bottom:var(--x3)}h2.jsx-86da1b8942f9dc09{font-size:13px}}"
            })
        ]
    })
;
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 7751:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5018);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3576);
/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3016);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popout__WEBPACK_IMPORTED_MODULE_6__, _AuthContext__WEBPACK_IMPORTED_MODULE_7__]);
([_Popout__WEBPACK_IMPORTED_MODULE_6__, _AuthContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Drawer(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Popout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        hidden: !props.isVisible,
        pointerRight: "14px",
        style: {
            width: "160px",
            right: 0
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4e8196bbf6c769e9" + " " + "flex column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/snippets",
                        /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            large: true,
                            center: true,
                            padding: "0.5rem 0",
                            style: {
                                borderBottom: "1px solid"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/static/svg/snippets.svg",
                                    alt: "Snippets page",
                                    width: "16px",
                                    className: "jsx-4e8196bbf6c769e9"
                                }),
                                " Snippets",
                                " "
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/account",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            large: true,
                            center: true,
                            padding: "0.5rem 0",
                            style: {
                                borderBottom: "1px solid"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/static/svg/person.svg",
                                    alt: "Account",
                                    width: "16px",
                                    style: {
                                        left: "-2px",
                                        marginRight: "calc(1rem - 3px)"
                                    },
                                    className: "jsx-4e8196bbf6c769e9"
                                }),
                                " ",
                                "Account"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        large: true,
                        center: true,
                        padding: "0.5rem 0",
                        onClick: _lib_client__WEBPACK_IMPORTED_MODULE_4__/* .logout */ .kS,
                        children: "Sign Out"
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "4e8196bbf6c769e9",
                children: ".column.jsx-4e8196bbf6c769e9{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}img.jsx-4e8196bbf6c769e9{position:relative;margin-right:1rem}"
            })
        ]
    });
}
function LoginButton({ isVisible , toggleVisibility  }) {
    const user = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .aC)();
    if (!_lib_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-ceaf54f5b1392562",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                center: true,
                border: true,
                large: true,
                padding: "0 16px",
                color: "white",
                className: "profile-button",
                onClick: ()=>{
                    if (!user) {
                        (0,_lib_client__WEBPACK_IMPORTED_MODULE_4__/* .loginGitHub */ .zj)();
                    } else {
                        toggleVisibility();
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        height: 20,
                        src: user ? user.photoURL : "/static/svg/github.svg",
                        alt: user ? user.displayName : "GitHub",
                        className: "jsx-ceaf54f5b1392562"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "jsx-ceaf54f5b1392562",
                        children: user ? user.displayName : "Sign in/up"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Drawer, {
                isVisible: user && isVisible
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ceaf54f5b1392562",
                children: "div.jsx-ceaf54f5b1392562,div.jsx-ceaf54f5b1392562 .profile-button{position:relative;height:100%}div.jsx-ceaf54f5b1392562 .profile-button{max-width:218px;min-height:40px}span.jsx-ceaf54f5b1392562{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}img.jsx-ceaf54f5b1392562{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;margin-right:16px}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Popout__WEBPACK_IMPORTED_MODULE_6__/* .managePopout */ .f)(LoginButton));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2292:
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
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2915);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7533);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6585);
/* harmony import */ var _Announcement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7286);
/* harmony import */ var _LoginButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _LoginButton__WEBPACK_IMPORTED_MODULE_7__]);
([_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _LoginButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import Footer from './Footer'


const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
class Page extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    render() {
        const { children , enableHeroText , flex  } = this.props;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "18a780592a4dbbcf",
                    [
                        flex ? COLUMN : "",
                        COLUMN
                    ]
                ]
            ]) + " " + "main mb3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Announcement__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            enableHeroText: enableHeroText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "18a780592a4dbbcf",
                                    [
                                        flex ? COLUMN : "",
                                        COLUMN
                                    ]
                                ]
                            ]) + " " + "login-button-container",
                            /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "18a780592a4dbbcf",
                                    [
                                        flex ? COLUMN : "",
                                        COLUMN
                                    ]
                                ]
                            ]) + " " + "page",
                            children: children
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "18a780592a4dbbcf",
                    dynamic: [
                        flex ? COLUMN : "",
                        COLUMN
                    ],
                    children: `.main.__jsx-style-dynamic-selector{${flex ? COLUMN : ""}
              margin-top: 6rem;}.login-button-container.__jsx-style-dynamic-selector{position:absolute;top:1.4rem;right:1rem}.page.__jsx-style-dynamic-selector{max-width:100%;padding:0 1rem}@media(min-width:1024px){.main.__jsx-style-dynamic-selector{${COLUMN};}.page.__jsx-style-dynamic-selector{padding:0}}`
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;