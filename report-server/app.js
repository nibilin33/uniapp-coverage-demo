const express = require("express");
const im = require("istanbul-middleware");
im.hookLoader(__dirname);
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use("/coverage", im.createHandler());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
