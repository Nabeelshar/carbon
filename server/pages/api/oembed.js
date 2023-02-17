"use strict";
(() => {
var exports = {};
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 9345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*
 * See oEmbed standard here: https://oembed.com/
 */ const url = __webpack_require__(7310);
const toIFrame = (url1, width, height)=>`<iframe
  src="https://carbon.now.sh/embed${url1}"
  width="${width}px"
  height="${height}px"
  style="width:${width}px; height:${height}px; border:0; overflow:auto;"
  sandbox="allow-scripts allow-same-origin"
  scrolling="auto">
</iframe>
`
;
module.exports = (req, res)=>{
    let embedUrl = req.query.url;
    try {
        embedUrl = decodeURIComponent(embedUrl);
    } catch (e) {
        // eslint-disable-next-line
        console.log(e);
    /* URL is already decoded */ }
    try {
        const { query: queryString , pathname  } = url.parse(embedUrl);
        const snippetID = pathname.split("/").pop();
        const width = Math.min(Number(req.query.maxwidth) || Infinity, 1024);
        const height = Math.min(Number(req.query.maxheight) || Infinity, 480);
        const obj = {
            version: "1.0",
            type: "rich",
            provider_name: "Carbon",
            width,
            height,
            html: toIFrame(`${snippetID && snippetID !== "undefined" ? `/${snippetID}` : ""}?${queryString ? queryString : ""}`, width, height)
        };
        return res.status(200).json(obj);
    } catch (e1) {
        // eslint-disable-next-line
        console.error(e1);
        return res.status(500).send(e1.message);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9345));
module.exports = __webpack_exports__;

})();