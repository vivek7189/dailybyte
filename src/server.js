import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "./app";
import { StaticRouter } from "react-router-dom";
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
//app.use(express.static("./build"));
__dirname: false;
//__dirname = "/Users/vivek/code/temp/playcode/play copy/build";
app.use(
  "/static",
  express.static("/Users/vivek/code/temp/playcode/play copy/build")
);
console.log("__dirname", __dirname);
app.get("*", (req, res) => {
  //console.log(req.originalUrl);
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("../build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    if (req.originalUrl === "/static/css/main.1ffa3112.chunk.css") {
      res.set("Content-Type", "text/css");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
