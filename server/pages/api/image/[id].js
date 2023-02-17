"use strict";
(() => {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 5565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ id)
});

;// CONCATENATED MODULE: external "querystring"
const external_querystring_namespaceObject = require("querystring");
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_namespaceObject);
;// CONCATENATED MODULE: external "chrome-aws-lambda"
const external_chrome_aws_lambda_namespaceObject = require("chrome-aws-lambda");
var external_chrome_aws_lambda_default = /*#__PURE__*/__webpack_require__.n(external_chrome_aws_lambda_namespaceObject);
;// CONCATENATED MODULE: external "puppeteer-core"
const external_puppeteer_core_namespaceObject = require("puppeteer-core");
var external_puppeteer_core_default = /*#__PURE__*/__webpack_require__.n(external_puppeteer_core_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/image/[id].js
/* global domtoimage */ 


// TODO expose local version of dom-to-image
const DOM_TO_IMAGE_URL = "https://unpkg.com/dom-to-image@2.6.0/dist/dom-to-image.min.js";
const NOTO_COLOR_EMOJI_URL = "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf";
const config = {
    api: {
        bodyParser: {
            sizeLimit: "6mb"
        }
    }
};
async function id(req, res) {
    // TODO proper auth
    if (req.method === "GET") {
        if (req.referer || req.headers["user-agent"].indexOf("Twitterbot") < 0 && // Slack does not honor robots.txt: https://api.slack.com/robots
        req.headers["user-agent"].indexOf("Slackbot") < 0 && req.headers["user-agent"].indexOf("Slack-ImgProxy") < 0) {
            return res.status(401).send("Unauthorized");
        }
    } else {
        if (!req.headers.origin && !req.headers.authorization) {
            return res.status(401).send("Unauthorized");
        }
    }
    try {
        await external_chrome_aws_lambda_default().font(NOTO_COLOR_EMOJI_URL);
    } catch (e) {
        console.error(e);
    }
    const browser = await external_puppeteer_core_default().launch({
        args: [
            ...(external_chrome_aws_lambda_default()).args,
            "--hide-scrollbars"
        ],
        defaultViewport: (external_chrome_aws_lambda_default()).defaultViewport,
        executablePath: await (external_chrome_aws_lambda_default()).executablePath,
        headless: (external_chrome_aws_lambda_default()).headless,
        ignoreHTTPSErrors: true
    });
    try {
        const { state , id: _id , ...params } = req.method === "GET" ? req.query : req.body;
        const id = _id && _id !== "index" ? _id : undefined;
        const page = await browser.newPage();
        const queryString = state ? `state=${state}` : external_querystring_default().stringify(params);
        await page.goto(`https://carbon.now.sh/${id ? id : `?${queryString}`}`);
        await page.addScriptTag({
            url: DOM_TO_IMAGE_URL
        });
        await page.waitForSelector(".export-container", {
            visible: true,
            timeout: 9500
        });
        const targetElement = await page.$(".export-container");
        const dataUrl = await page.evaluate((target = document)=>{
            const query = new URLSearchParams(document.location.search);
            const EXPORT_SIZES_HASH = {
                "1x": "1",
                "2x": "2",
                "4x": "4"
            };
            const exportSize = EXPORT_SIZES_HASH[query.get("es")] || "2";
            target.querySelectorAll('span[role="presentation"]').forEach((node)=>{
                if (node.innerText && node.innerText.match(/%[A-Fa-f0-9]{2}/)) {
                    node.innerText.match(/%[A-Fa-f0-9]{2}/g).forEach((t)=>{
                        node.innerHTML = node.innerHTML.replace(t, encodeURIComponent(t));
                    });
                }
            });
            const width = target.offsetWidth * exportSize;
            const height = query.get("si") === "true" || query.get("si") === true ? target.offsetWidth * exportSize : target.offsetHeight * exportSize;
            const config1 = {
                style: {
                    transform: `scale(${exportSize})`,
                    "transform-origin": "center",
                    background: query.get("si") ? query.get("bg") : "none"
                },
                filter: (n)=>{
                    if (n.className) {
                        return String(n.className).indexOf("eliminateOnRender") < 0;
                    }
                    return true;
                },
                width,
                height
            };
            return domtoimage.toPng(target, config1);
        }, targetElement);
        if (req.method === "GET") {
            res.setHeader("Content-Type", "image/png");
            const data = new Buffer(dataUrl.split(",")[1], "base64");
            return res.status(200).send(data);
        }
        return res.status(200).send(dataUrl);
    } catch (e1) {
        // eslint-disable-next-line
        console.error(e1);
        return res.status(500).end();
    } finally{
        await browser.close();
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5565));
module.exports = __webpack_exports__;

})();