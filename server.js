const express = require("express");
const path = require("path");
const nomeApp = process.env.npm_package_name;
const app = express();

const pth = "dist/" + nomeApp + "/";

console.log(pth);

app.use(express.static(pth));

app.get("/*", (req, res) => {
  const p = $pth + "/index.html";
  console.log(p);
  res.sendFile(path.join(p));
});

app.listen(process.env.PORT || 8080);
