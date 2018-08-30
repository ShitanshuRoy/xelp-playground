import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../../src/App2";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    // point to the html file
    const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");
    fs.readFile(filePath, "utf8", (err, htmlData) => {
        if (err) {
            console.log("err", err);
            return res.status(404).end();
        }
        //render the app as a string
        const html = ReactDOMServer.renderToString(<App />);
        //inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                `<div id="root"></div>`,
                `<div id="root"> <div>lskdhlskjf';klsnfg;kajng lskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajnglskdhlskjf';klsnfg;kajng</div> ${html}</div>`
            )
        );
    });
};
